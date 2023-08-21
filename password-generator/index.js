const PASSWORD_GENERATION_OPTIONS = [
	'abcdefghijklmnopqrstuvwxyz',
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	'0123456789',
	'!@#$%^&*()-_+=[]{};:,.<>/?'
]

const randomFromString = (str) => {
	const randomIndex = Math.floor(Math.random() * str.length)
	return str[randomIndex]
}

const generatePassword = (length, numOfOptions) => {
	length = Math.min(length, 20)
  numOfOptions = Math.max(1, Math.min(numOfOptions, 4))

  let optionIndex = 0
  let password = ''

  for (let i = 0; i < length; i++) {
    if (optionIndex > numOfOptions - 1) optionIndex = 0

    const option = PASSWORD_GENERATION_OPTIONS[optionIndex]
    password += randomFromString(option)
    optionIndex++
  }

  return password
}

const generateButton = document.querySelector('.generate-button')
const passwordDisplay = document.querySelector('.result')
let password

const extractCheckboxValues = () => {
  const withLower = document.getElementById('lowercase').checked
  const withUpper = document.getElementById('uppercase').checked
  const withNumbers = document.getElementById('numbers').checked
  const withSymbols = document.getElementById('symbols').checked

  return { withLower, withUpper, withNumbers, withSymbols }
}

generateButton.addEventListener('click', () => {
	const lengthOfPassword = parseInt(document.getElementById('passwordLength').value)
	const { withLower, withUpper, withNumbers, withSymbols } = extractCheckboxValues()
  const totalOfOptions = withLower + withUpper + withNumbers + withSymbols

	password = generatePassword(+document.getElementById('passwordLength').value, totalOfOptions)
  passwordDisplay.textContent = password
})

const clipboard = document.querySelector('.clipboard')

clipboard.addEventListener('click', () => {
  navigator.clipboard.writeText(password)
    .then(() => alert('Text copied to clipboard'))
    .catch(err => alert('Could not copy text: ', err))
})
