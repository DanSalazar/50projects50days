const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonsContainer = document.querySelector('.pokemons')
const TYPES_TO_COLOR = {
	'grass': 'rgb(222, 253, 224)',
	'fire': 'rgb(253, 223, 223)',
	'water': 'rgb(222, 243, 253)',
	'bug': 'rgb(248, 213, 163)',
	'poison': 'rgb(222, 243, 253)',
	'flying': 'rgb(245, 245, 245)',
	'electric': 'rgb(252, 247, 222)',
	'ground': 'rgb(244, 231, 218)',
	'fairy': 'rgb(252, 234, 255)',
	'normal': 'rgb(245, 245, 245)',
	'fighting': 'rgb(245, 245, 245)',
	'phychic': 'rgb(234, 237, 161)',
	'rock': 'rgb(213, 213, 212)',
	'dragon': 'rgb(151, 179, 230)'
}

const capitalaze = (str) => str[0].toUpperCase() + str.slice(1)

const formatId = (num) => num.toString().padStart(3, '0')

const createPokemon = (pokemonData) => {
	const {
		name,
		id,
		types,
		sprites
	} = pokemonData
	const type = types[0].type.name

	const div = document.createElement('div')
	div.className = 'pokemon'
	div.style.backgroundColor = TYPES_TO_COLOR[type]

	div.innerHTML = `
		<div class="image" style='background-image: url(${sprites.front_default});'></div>
			<div class="id">
				#${formatId(id)}
			</div>
			<p class="name">
				${capitalaze(name)}
			</p>
			<span class="type">
				Type:${type}
			</span>
		</div>
	`

	pokemonsContainer.append(div)
}

const populatePokemons = () => {
	const promises = new Array(150).fill(1).map((_, i) => fetch(API_URL + (i + 1)))

	Promise.all(promises)
		.then(res => {
			for (const r of res) {
				if (r.status !== 200) throw new Error('Something went wrong with fetch')
			}
			return Promise.all(res.map(r => r.json()))
		})
		.then(data => {
			pokemonsContainer.innerHTML = ''
			data.forEach(createPokemon)
		})
}

populatePokemons()