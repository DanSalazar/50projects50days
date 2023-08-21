const generateButton = document.querySelector('.generate')
const toasts = document.querySelector('.toast-container')
const colors = ['purple', 'red', 'green', 'yellow']
const content = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const getRandomColor = () => Math.floor(Math.random() * colors.length)
const getRandomContent = () => Math.floor(Math.random() * content.length)

const pushToast = () => {
	const toast = document.createElement('div')
	toast.className = 'toast ' + colors[getRandomColor()]
	toast.textContent = content[getRandomContent()]
	toasts.append(toast)
	setTimeout(() => toast.remove(), 2500)
}

generateButton.addEventListener('click', () => pushToast())