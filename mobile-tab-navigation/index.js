let currentTab = 0
const tabs = document.querySelectorAll('.tab')
const sections = document.querySelector('.current-tab')

tabs.forEach((t, id) => {
	t.addEventListener('click', () => {
		sections.children[currentTab].classList.remove('active')
		tabs[currentTab].classList.remove('active')

		currentTab = id
		
		sections.children[currentTab].classList.add('active')
		t.classList.add('active')
	})
})