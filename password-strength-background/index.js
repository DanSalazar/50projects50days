const background = document.querySelector('.background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
	const length = parseInt(e.target.value.length) * 2
	const value = 20 - length

	background.style.filter = `blur(${value}px)`
})