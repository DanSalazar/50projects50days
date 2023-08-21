const container = document.querySelector('.container')
const BOX_SIZE = 125

function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement('div')
			box.className = 'box'
			const calcX = -BOX_SIZE * j
			const calcY = -BOX_SIZE * i
 
			box.style.backgroundPosition = `${calcX}px ${calcY}px`
			container.append(box)
		}
	}
}

createBoxes()

document.querySelector('.button').addEventListener('click', () => {
	container.classList.toggle('active')
})