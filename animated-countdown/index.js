const container = document.querySelector('.animate')
let currentNumber = 3
let time = 500
let interval

const replayCounter = () => {
	currentNumber = 3
	main(true)
}

const showGo = () => {
	container.innerHTML = `
		<div class='scale'>
			<p>GO</p>
			<button>Replay</button>
		</div>
	`
	document.querySelector('button')
		.addEventListener('click', replayCounter)
}

function main(replace = false) {
	function updateCountdown() {
		setTimeout(() => {
			if (currentNumber === 0) {
				showGo()
				return clearInterval(interval)
			}
			
			const number = document.querySelector('.number-animate')
			number.classList.add('dissapear')

			setTimeout(() => {
				currentNumber--
				number.classList.remove('dissapear')
				number.textContent = currentNumber
			}, time)
		}, time)
	}

	if (replace) {
		document.querySelector('button')
			.removeEventListener('click', replayCounter)
		container.innerHTML = `
			<div class="number">
				<span class="number-animate">3</span>
			</div>
			<p class="text">Get Ready</p>
		`
	}

	updateCountdown()
	interval = setInterval(updateCountdown, time * 2)
}

main()