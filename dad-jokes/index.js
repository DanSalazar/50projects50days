const btn = document.querySelector('.btn')
const jokeContainer = document.querySelector('.joke')
window.addEventListener('DOMContentLoaded', generateJoke)

async function generateJoke () {
	const config = {
		headers: {
			Accept: 'application/json'
		}
	}
	const response = await fetch('https://icanhazdadjoke.com', config)
	const { status, joke } = await response.json()

	if (status === 200) {
		jokeContainer.textContent = joke
		return
	}
}

btn.addEventListener('click', generateJoke)