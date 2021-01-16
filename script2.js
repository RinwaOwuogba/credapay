const testimonialsPerPage = 2;
const testimonialsButtonWrapper = document.querySelector(
	'.testimonial-pagination'
);
const testimonialPaginationButtons = [];

const noOfTestimonials = document.querySelectorAll('.testimonial-container')
	.length;

// create and add pagination buttons to DOM
// based on the number of carousel items
for (let i = 0; i < noOfTestimonials / testimonialsPerPage; i++) {
	const paginationButton = document.createElement('button');
	paginationButton.classList.add('testimonial-pagination-item');

	if (i === 0) {
		paginationButton.classList.add('active-tab');
	}

	testimonialPaginationButtons.push(paginationButton);
}

// only insert pagination buttons in DOM if there are multiple pages
if (testimonialPaginationButtons.length > 1) {
	testimonialPaginationButtons.map((button) => {
		testimonialsButtonWrapper.appendChild(button);
	});
}

// change active testimonial pagination button
const setActivePaginationButton = (selectedButtonIndex) => {
	testimonialPaginationButtons.forEach((button, index) => {
		if (index !== selectedButtonIndex) {
			button.classList.remove('active-tab');
		} else {
			button.classList.add('active-tab');
		}
	});
};

// change current pair of visible testimonials
const displayTestimonials = (buttonIndex) => {
	const testimonials = document.querySelectorAll('.testimonial-container');
	const testimonialsToDisplay = [];

	// push indexes of next pair
	testimonialsToDisplay.push(testimonialsPerPage * buttonIndex);
	testimonialsToDisplay.push(testimonialsToDisplay[0] + 1);

	testimonials.forEach((testimonial, index) => {
		if (
			testimonialsToDisplay.includes(index) &&
			!testimonial.classList.contains('visible-testimonial')
		) {
			testimonial.classList.add('visible-testimonial');
		} else if (!testimonialsToDisplay.includes(index)) {
			testimonial.classList.remove('visible-testimonial');
		}
	});
};

const changeTestimonials = () => {
	const noOfButtons = testimonialPaginationButtons.length;
	let isNextButtonClicked = false;

	testimonialPaginationButtons.forEach((button, index) => {
		if (isNextButtonClicked) {
			return;
		}

		if (button.classList.contains('active-tab')) {
			let nextButton = testimonialPaginationButtons[(index + 1) % noOfButtons];
			button.classList.remove('active-tab');
			nextButton.click();
			isNextButtonClicked = true;
		}
	});
};

const carousel = {
	intervalReference: setInterval(changeTestimonials, 7000),
};

testimonialPaginationButtons.forEach((button, buttonIndex) =>
	button.addEventListener('click', () => {
		setActivePaginationButton(buttonIndex);
		displayTestimonials(buttonIndex);

		clearInterval(carousel.intervalReference);
		carousel.intervalReference = setInterval(changeTestimonials, 7000);
	})
);
