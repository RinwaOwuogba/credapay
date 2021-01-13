const hamburgerButton = document.querySelector('.nav-icon-hamburger');
const closeMenu = document.querySelector('.nav-icon-close');

const toggleMenu = () => {
	const body = document.querySelector('body');
	body.classList.toggle('menu-open');
};

hamburgerButton.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

// toggleMenu();
