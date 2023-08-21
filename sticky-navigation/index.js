const header = document.querySelector('header')
let isActive = false

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		header.classList.add('header-active')
		isActive = true
	} else if (isActive) {
		header.classList.remove('header-active')
		isActive = false
	}
})