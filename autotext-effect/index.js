const WORD = 'We Love Programming!'
const textContainer = document.querySelector('.text')
const speed = document.querySelector('.speed')

let index = 0
let currentSpeed = 300 / speed.value

const setAnimation = () => {
	textContainer.textContent = WORD.substring(0, index)
	index++

	if (index > WORD.length) {
		index = 0
	}

	setTimeout(setAnimation, currentSpeed)	
}

setAnimation()

speed.oninput = (e) => (currentSpeed = 300 / e.target.value)