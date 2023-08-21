const questions = [
	{
		"question": "Which language runs in a web browser?",
		"choices": ["Java", "C", "Python", "Javascript"],
		"answer": 3
	},
	{
		"question": "What does CSS stand for?",
		"choices": ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
		"answer": 1
	},
	{
		"question": "What does HTML stand for?",
		"choices": ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Languge", "Helicopters Terminals Motorboats Lamborginis"],
		"answer": 0
	},
	{
		"question": "What year was JavaScript launched?",
		"choices": ["1996", "1995", "1994", "none of the above"],
		"answer": 1
	}
]

const app = document.querySelector('.app')
const questionContainer = app.querySelector('.question-container')

function setQuestion({ question, choices }) {
	const questionsHtml = choices.map(q => 
		`<div class="radio">
			<input name="answer" type="radio" id="${q}" value="${q}">
			<label for="${q}">${q}</label>
		</div>`
	)
	
	questionContainer.innerHTML = `
		<h2>
			${question}
		</h2>
		<div class="questions">
			${questionsHtml.join(' ')}		
		</div>
	`
}

function setFinalStage() {
	const button = document.createElement('button')
	button.onclick = () => window.location.reload()
	button.textContent = 'Reload'
	button.className = 'app-button'

	app.innerHTML = `
		<h2>
			You answered ${pts}/4 questions correctly
		</h2>
	`

	app.append(button)
}

let stage = 0
let pts = 0

function submitQuestion() {
	const questionChoices = questions[stage].choices
	const answer = questionChoices[questions[stage].answer]

	const userAnswer = document.querySelector('.questions input:checked')
	if (!userAnswer) return

	if (userAnswer.value === answer) {
		pts++
	}

	stage++

	if (stage > questions.length - 1) {
		setFinalStage()
		return
	}

	setQuestion(questions[stage])
}

const submitBtn = app.querySelector('.submit')
submitBtn.addEventListener('click', submitQuestion)

setQuestion(questions[stage])