const cardImg = document.querySelector('.card-img')
const cardContentTitle = document.querySelector('.card-content-title')
const cardContentDescription = document.querySelector('.card-content-description')

const cardProfilePicture = document.querySelector('.card-profile-picture')
const cardProfileName = document.querySelector('.card-profile-name')
const cardProfileBorn = document.querySelector('.card-profile-born')

function populateCard() {
	cardImg.classList.remove('skeleton', 'full-radius')
	cardImg.innerHTML = `
		<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">
	`
	cardContentTitle.innerHTML = 'Lorem ipsum dolor sit amet'
	cardContentDescription.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'

	cardProfilePicture.classList.remove('skeleton')
	cardProfilePicture.innerHTML = `
		<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John Doe">
	`
	cardProfileName.innerHTML = 'John Doe'
	cardProfileBorn.innerHTML = 'Oct 08, 2020'
}

setTimeout(() => {
	populateCard()
},1500)