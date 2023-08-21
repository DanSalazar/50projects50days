const imageWrapper = document.querySelector('.img-wrapper')
const clicks = document.querySelector('.clicks')
let clicksCounter = 0

const updateCounter = () => {
	clicksCounter++
	clicks.textContent = clicksCounter
}

let frozen = false

const createHeart = (e) => {
	const div = document.createElement('span')
	div.innerHTML = '❤️'
	div.className = 'heart'
	div.style.left = (e.offsetX - 10) + 'px'
	div.style.top = (e.offsetY - 10) + 'px'
	imageWrapper.append(div)

	setTimeout(() => {
		div.remove()
		frozen = false
	}, 500)
}

let lastClick = 0

imageWrapper.addEventListener('click', (e) => {
	const currentTime = new Date().getTime()
	const differenceBetweenClicks = currentTime - lastClick

	if (differenceBetweenClicks <= 500) {
		if (!frozen) {
			updateCounter()
			createHeart(e)
			frozen = true
		}
	}

	lastClick = currentTime
})