const boxes = document.querySelector('.boxes')
const img = document.querySelector('#img')

img.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', e.target.id))

boxes.addEventListener('dragover', (e) => {
	e.preventDefault()
	if (e.target.classList.contains('box')) e.target.classList.add('hover')
})

boxes.addEventListener('dragleave', (e) => {
	e.preventDefault()
	if (e.target.classList.contains('box')) e.target.classList.remove('hover')
})

boxes.addEventListener('drop', (e) => {
	e.preventDefault()
	if (e.target.classList.contains('box')) {
		const el = document.getElementById(e.dataTransfer.getData('text'))
		if (!el) return
		e.target.append(el)
	}
})
