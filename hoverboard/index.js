const CELLS = 20
const board = document.querySelector('.board')
const COLORS = ['#2ed573', '#1e90ff', '#ff4757', '#ffa502', '#54a0ff', '#feca57', '#f368e0', '#00d2d3']

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length)
  return COLORS[randomIndex]
}

function createCells() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < CELLS; j++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      board.append(cell)
    }
  }
}

board.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('cell')) {
    const color = getRandomColor()
    e.target.style.backgroundColor = color
    e.target.style.boxShadow = '0 0 12px ' + color
  }
})

board.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = '#1d1d1d'
    e.target.style.boxShadow = 'none'
  }
})

createCells()
