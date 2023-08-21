const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page='
const path = `https://image.tmdb.org/t/p/w1280`
const API_QUERY = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

const container = document.querySelector('.movies')
const input = document.querySelector('.input-search')
const form = document.querySelector('.form')

async function getMovies (search) {
	let fullpath = search ? API_QUERY + search.trim() : API
	const response = await fetch(fullpath)
	if (!response.status === 200) return
	container.innerHTML = ``
	const { results: movies } = await response.json()

	movies.forEach(m => {
		let rate = m.vote_average >= 8 
			? 'green' 
			: (m.vote_average <= 8 && m.vote_average >= 5) 
			? 'yellow'
			: 'red'
		container.innerHTML += `
			<div class="movie-card">
				<img src="${path + m.poster_path}" alt="${m.title}" loading='lady'>
				<div class="movie-card-info">
					<p>${m.title}</p>
					<span class="movie-card-rate ${rate}">
						${m.vote_average}
					</span>
				</div>
				<div class="movie-card-review">
					<h3>Overview</h3>
					<p>${m.overview}</p>
				</div>
			</div>
		</div>
		`
	})
}

getMovies()

form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (input.value) {
		getMovies(input.value)
		return
	}
	getMovies()
})

