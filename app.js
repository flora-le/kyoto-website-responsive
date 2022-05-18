const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.nav-list');

btnMenu.addEventListener('click', () => {
	menu.classList.toggle('active');
});

//close menu when click
const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
});
