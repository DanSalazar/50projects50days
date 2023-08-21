const API = `https://api.github.com/users/`
const form = document.querySelector('.form')
const profile = document.querySelector('.profile')

const populateProfile = (user) => {
	profile.innerHTML = `
		<img src="${user.avatar_url}" class="avatar" alt="${user.avatar_url}">
		<div class="profile-info">
			<h3 class="profile-name">${user.name}</h3>
			<p class="profile-bio">${user.bio}</p>
			<div class="profile-stats">
				<p>${user.followers}  <span>Followers</span></p>
				<p>${user.following} <span>Following</span></p>
				<p>${user.public_repos} <span>Repos</span></p>
			</div>
			<div class='profile-repos'>
			</div>
		</div>
	`
}

const populateRepos = (repos) => {
	const reposContainer = document.querySelector('.profile-repos')
	const html = repos.slice(0, 5).map((repo) => {
		return `
			<a href='${repo.html_url}' class='repo'>
				${repo.name}
			</a>
		`
	}).join('')

	reposContainer.innerHTML = html
}

const populateError = (error = 'There was an error') => {
	profile.innerHTML = `
		<h2 class='profile-error'>
			${error}
		</h2>
	`
}

const setProfile = async (username) => {
	const response = await fetch(API + username)
	const data = await response.json()

	if (response.status === 404) {
		return populateError('Username not found')
		return false
	}

	populateProfile(data)
	return true
}

const setRepos = async (username) => {
	const response = await fetch(API + username + '/repos?sort=created')
	const data = await response.json()

	if (response.status === 404) {
		populateError("Repos not found")
		return false
	}

	populateRepos(data)
	return true
}

const showProfile = () => (profile.classList.contains('show') || profile.classList.add('show'))

const onSubmit = async (e) => {
	e.preventDefault()
	const username = document.querySelector('.search')?.value

	if (!username) return

	showProfile()
	await setProfile(username) && await setRepos(username)
}

form.addEventListener('submit', onSubmit)