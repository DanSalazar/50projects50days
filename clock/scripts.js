const toggleTheme = document.querySelector('.toggle-theme')
const changeTheme = () => {
	if (document.body.dataset.theme === 'light') {
		document.body.dataset.theme = 'dark'
	} else {
		document.body.dataset.theme = 'light'
	}
}

toggleTheme.addEventListener('click', changeTheme)

const secondTick = document.querySelector('.seconds')
const minutesTick = document.querySelector('.minutes')
const hoursTick = document.querySelector('.hours')

const status = document.querySelector('.status')

function formatDate (currentHour, date) {
	let minutes = date.getMinutes()
	minutes = minutes > 10 ? minutes : '0' + minutes
	const time = currentHour > 12 ? 'PM' : 'AM'
	let hour = currentHour > 12 ? currentHour - 12 : currentHour
	return `${hour}:${minutes} ${time}`
}

function formatDay (date) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurdsday', 'Friday', 'Saturday']
	const month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	return `${days[date.getDay()]}, ${month[date.getMonth()]} <span class='day'>${date.getDate()}</span>`
}

function interval () {
	const time = status.querySelector('h2')
	const day = status.querySelector('span')
	const date = new Date()
	const setDate = () => {
		const currentHour = date.getHours()
		day.innerHTML = formatDay(date)
		time.textContent = formatDate(currentHour, date)
	}
	setDate()
	let secondCurrentTick = date.getSeconds() * 6
	let minuteCurrentTick = date.getMinutes() * 6
	let hourCurrentTick = (date.getHours() - 12) * 30
	secondTick.style.transform = `rotate(${secondCurrentTick}deg)`
	minutesTick.style.transform = `rotate(${minuteCurrentTick}deg)`
	hoursTick.style.transform = `rotate(${hourCurrentTick}deg)`
	setInterval(() => {
		secondCurrentTick += 6
		secondTick.style.transform = `rotate(${secondCurrentTick}deg)`
		if (secondCurrentTick === 360) {
			secondCurrentTick = 0
			minuteCurrentTick += 6
			minutesTick.style.transform = `rotate(${minuteCurrentTick}deg)`
		}
		if (minuteCurrentTick === 360) {
			hourCurrentTick += 30
			minuteCurrentTick = 0
			hoursTick.style.transform = `rotate(${hourCurrentTick}deg)`
		}
		setDate()
	}, 1000)
}

interval()