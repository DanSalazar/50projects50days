const boxes = document.querySelectorAll('.box')

boxes.forEach((el, i) => {
	const btn = el.querySelector('button')

	btn.addEventListener('click', () => {
		el.classList.toggle('active')
		if (el.classList.contains('active')) {
			btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
		} else {
			btn.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
		}
	})
})