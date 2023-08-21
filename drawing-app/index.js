const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const color = document.querySelector('input[type="color"]')
const controllers = document.querySelector('.controllers')
const currentSize = document.querySelector('.current-size')
const resetButton = document.querySelector('.reset')

let isDrawing = false
let x = 0
let y = 0
let currentColor = '#000'
let currentWidth = 5

resetButton.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
})

controllers.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		if (e.target.className.includes('plus')) {
			currentWidth += 5
		}

		if (e.target.className.includes('minus')) {
			currentWidth -= 5
		}

		currentSize.textContent = `${currentWidth}`
	}
})

color.addEventListener('change', (e) => (currentColor = e.target.value))

canvas.addEventListener('mousedown', (e) => {
  x = e.offsetX
  y = e.offsetY
  isDrawing = true
})

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY)
    x = e.offsetX
    y = e.offsetY
  }
})

window.addEventListener('mouseup', (e) => {
  x = 0
  y = 0
  isDrawing = false
})

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath()
  context.strokeStyle = currentColor
  context.lineCap = 'round'
  context.lineWidth = currentWidth
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.stroke()
  context.closePath()
}