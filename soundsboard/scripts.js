const pathSounds = ['./sounds/applause.mp3','./sounds/tada.mp3', './sounds/victory.mp3', './sounds/wrong.mp3']
let lastAudio

document.querySelectorAll('.sounds').forEach((d, i) => {
	const audio = new Audio(pathSounds[i])
	d.onclick = () => {
		if (lastAudio) {
			lastAudio.pause()
			lastAudio.currentTime = 0
			lastAudio = audio
			lastAudio.play()
		} else {
			lastAudio = audio
			lastAudio.play()
		}
	}
})

// her code refactor by myself const sounds = ['applause', 'tada', 'victory', 'wrong']
// let lastAudio
// sounds.forEach(sound => {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')
//     btn.innerText = sound
//     btn.addEventListener('click', () => {
//     	if (lastAudio) { 
//     		lastAudio.pause()
//     		lastAudio.currentTime = 0
//     		lastAudio = document.getElementById(sound)
//       	lastAudio.play()
//       	return
//     	}
//   		lastAudio = document.getElementById(sound)
//       lastAudio.play()
//     })

//     document.getElementById('buttons').appendChild(btn)
// })