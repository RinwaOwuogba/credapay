const hamburgerButton = document.querySelector('.nav-icon-hamburger');
const closeMenu = document.querySelector('.nav-icon-close');

const toggleMenu = () => {
	const body = document.querySelector('body');
	body.classList.toggle('menu-open');
};

hamburgerButton.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

// add scroll reveal
var slideUp = {
	distance: '150%',
	origin: 'bottom',
	opacity: null,
	delay: 300,
	duration: 2000,
};

ScrollReveal().reveal('header .section-content', slideUp);

ScrollReveal().reveal('.features-section .section-content', {
	...slideUp,
	origin: 'right',
	duration: 1500,
});

ScrollReveal().reveal('.deals-section .section-content', {
	...slideUp,
	origin: 'right',
});

ScrollReveal().reveal('.testimonials-section .section-content', {
	...slideUp,
});

ScrollReveal().reveal('.download-apps-section .section-content', {
	...slideUp,
	origin: 'left',
	duration: 1500,
});

ScrollReveal().reveal('footer .section-content', {
	...slideUp,
	origin: 'left',
	duration: 1500,
});

const man = '2';
