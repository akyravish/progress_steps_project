// jshint esversion:6

const progress = document.querySelector('#progress');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// * update Function

const update = () => {
	// * add active class
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	// * progress precentage
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 99 + '%';

	// * add disable to prev and next button
	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
};

next.addEventListener('click', () => {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
});

prev.addEventListener('click', () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}

	update();
});
