const hamburgerButton = document.querySelector('.nav-icon-hamburger');
const closeMenu = document.querySelector('.nav-icon-close');

const toggleMenu = () => {
	const body = document.querySelector('body');
	body.classList.toggle('menu-open');
};

hamburgerButton.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

// add scroll reveal
var defaultProps = {
	distance: '150%',
	origin: 'bottom',
	opacity: null,
	delay: 300,
	duration: 2000,
};

ScrollReveal().reveal('header .section-content', {
	...defaultProps,
});

ScrollReveal().reveal('.features-section .section-content', {
	...defaultProps,
	origin: 'right',
	duration: 1500,
	mobile: false,
});

ScrollReveal().reveal('.deals-section .section-content', {
	...defaultProps,
	origin: 'right',
	mobile: false,
});

ScrollReveal().reveal('.testimonials-section .section-content', {
	...defaultProps,
});

ScrollReveal().reveal('.download-apps-section .section-content', {
	...defaultProps,
	origin: 'left',
	duration: 1500,
});

ScrollReveal().reveal('footer .section-content', {
	...defaultProps,
	origin: 'left',
	duration: 1500,
});
