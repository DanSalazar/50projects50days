const API_URL = 'https://randomuser.me/api?results=50'
const usersContainer = document.querySelector('.users')
let users = null

fetchUsers()

function createUsers(users) {
  const usersHtml = users.map(({ name, location, picture }) => {
    return `
      <div class="user">
        <img src="${picture.thumbnail}" alt="${name.first} ${name.last}" class="avatar">
        <div class="user-info">
          <p class="user-name">${name.first} ${name.last}</p>
          <p class="user-location">${location.city}, ${location.country}</p>
        </div>
      </div>
    `
  })

  usersContainer.innerHTML = usersHtml.join('')
}

async function fetchUsers() {
  const loadingMessage = document.createElement('h3')
  loadingMessage.style.marginTop = '24px'
  loadingMessage.style.textAlign = 'center'
  loadingMessage.textContent = 'Loading...'
  usersContainer.append(loadingMessage)

  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    usersContainer.innerHTML = ''
    const { results } = await response.json()

    users = results

    createUsers(results)
  } catch (error) {
    loadingMessage.textContent = 'Error: ' + error.message
  }
}

function filterUsers(value) {
  const valueToLower = value.toLowerCase()
  const filtered = users?.filter(({ name, location }) => {
    return (
      name.first.toLowerCase().includes(valueToLower) ||
      name.last.toLowerCase().includes(valueToLower) ||
      location.city.toLowerCase().includes(valueToLower) ||
      location.country.toLowerCase().includes(valueToLower)
    )
  })

  if (filtered) createUsers(filtered)
}

const filter = document.querySelector('.filter')

filter.addEventListener('input', ({ target }) => {
  filterUsers(target.value)
})