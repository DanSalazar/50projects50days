const buttons = document.querySelectorAll('.btn')
const gameContainer = document.querySelector('.game-container')
const screens = document.querySelectorAll('.screen')
const message = document.querySelector('.message')
const scoreDisplay = document.querySelector('.score')
const time = document.querySelector('.time')
const insectButtons = document.querySelectorAll('.insect-btn')

let currentScreenIndex = 0
let score = 0
let selectedInsectName = ''
let selectedInsect = ''
let gameStarted = false

buttons.forEach(button => button.addEventListener('click', () => {
  screens[currentScreenIndex].classList.add('up')
  currentScreenIndex++
}))

insectButtons.forEach(button => button.addEventListener('click', handleInsectSelection))

function handleInsectSelection(event) {
  gameStarted = true
  const insectContainer = event.target.parentNode.tagName === 'BUTTON' ? event.target.parentNode : event.target
  selectedInsect = insectContainer.children[1].src
  selectedInsectName = insectContainer.children[0].textContent
  
  if (gameStarted) {
    startGame()
  }
}

function startGame() {
  startTimer()
  addInsect()
}

gameContainer.addEventListener('click', handleInsectCatch)

function handleInsectCatch(event) {
  if (event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
    updateScore()
    const insectElement = event.target.tagName === 'IMG' ? event.target.parentNode : event.target
    insectElement.classList.add('catch')
    setTimeout(() => insectElement.remove(), 1000)
    addInsects()
  }
}

function addInsect() {
  const insectButton = document.createElement('button')
  insectButton.innerHTML = `<img src="${selectedInsect}" alt="${selectedInsectName}">`
  insectButton.className = 'insect'

  const { x, y } = getRandomLocation()

  insectButton.style.top = y + 'px'
  insectButton.style.left = x + 'px'
  insectButton.style.width = '84px'
  insectButton.style.height = '84px'
  insectButton.style.transform = `rotate(${Math.random() * 360}deg)`

  gameContainer.append(insectButton)
}

function addInsects() {
  setTimeout(addInsect, 1000)
  setTimeout(addInsect, 1500)
}

function startTimer() {
  let seconds = 0
  setInterval(() => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0')
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0')
    const currentTime = `${minutes}:${remainingSeconds}`
    time.innerHTML = 'Time: ' + currentTime
    seconds++
  }, 1000)
}

function updateScore() {
  score++
  scoreDisplay.textContent = `Score: ${score}`
  if (score > 19) {
    message.classList.add('show')
  }
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}
