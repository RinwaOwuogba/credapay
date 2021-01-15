const testimonialPaginationButtons = document.querySelectorAll(
	'.testimonial-pagination-item'
);

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
	// determine which group testimonials to make visible
	// based on the button's index
	const testionalsToDisplay = {
		0: [0, 1],
		1: [2, 3],
		2: [4, 5],
	}[buttonIndex];

	const testimonials = document.querySelectorAll('.testimonial-container');

	testimonials.forEach((testimonial, index) => {
		if (
			testionalsToDisplay.includes(index) &&
			!testimonial.classList.contains('visible-testimonial')
		) {
			testimonial.classList.add('visible-testimonial');
		} else if (!testionalsToDisplay.includes(index)) {
			testimonial.classList.remove('visible-testimonial');
		}
	});
};

testimonialPaginationButtons.forEach((button, buttonIndex) =>
	button.addEventListener('click', () => {
		setActivePaginationButton(buttonIndex);
		displayTestimonials(buttonIndex);
	})
);

setInterval(() => {
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
}, 7000);
