const buttonUp = document.querySelector('.up')
const buttonDown = document.querySelector('.down')
const leftSide = document.querySelector('.left-side')
const rightSide = document.querySelector('.right-side')

let sliderHeight = document.querySelector('.left-side > div')?.offsetHeight

let currentCalc = 0
let steps = 0

const setSides = () => {
	leftSide.style.transform = `translateY(${currentCalc}px)`
	rightSide.style.transform = `translateY(${-currentCalc}px)`
}

function slideUp() {
	if (steps > 2) {
		leftSide.style.transform = `translateY(0px)`
		rightSide.style.transform = `translateY(0px)`
		currentCalc = 0
		steps = 0
		return
	}
	steps++
	currentCalc += sliderHeight
	setSides()
}

function slideDown() {
	if (steps === 0) {
		currentCalc = sliderHeight * 3
		setSides()
		steps = 3
		return
	}
	steps--
	currentCalc -= sliderHeight
	setSides()
}

buttonUp.addEventListener('click', slideUp)
buttonDown.addEventListener('click', slideDown)