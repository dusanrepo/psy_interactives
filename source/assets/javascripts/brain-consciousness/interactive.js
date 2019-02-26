$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reload = $('#reload');
	const $arousal = $('#arousal');
	const $attention = $('#attention');
	const $wandering = $('#wandering');
	let	currentSlide = 0;

	function activateCompletion() {
		window.postAction({
			id: 'd27d8637-cc9c-4a6d-a5c3-71349c3f90c4',
		});
	}

	function switchSlides() {
		$(`[data-slide="${currentSlide}"]`).addClass('d-none');
		currentSlide += 1;
		document.querySelectorAll(`[data-slide='${currentSlide}']`)[0].classList.remove('d-none');
	}

	function hideSlides() {
		const allSlides = [`[data-slide="${1}"]`, `[data-slide="${2}"]`, `[data-slide="${3}"]`, `[data-slide="${4}"]`];
		allSlides.forEach(slide => $(slide).addClass('d-none'));
	}

	function showSlide(num) {
		currentSlide = num;
		$(`[data-slide="${currentSlide}"]`).removeClass('d-none');
	}

	function resetThisSlide() {
		const currentSlideEl = document.querySelectorAll(`[data-slide='${currentSlide}']`)[0];
		currentSlideEl.classList.add('d-none');
	}

	function showFirstSlide() {
		currentSlide = 1;
		document.querySelectorAll(`[data-slide='${currentSlide}']`)[0].classList.remove('d-none');
	}

	function resetNavigationButtons() {
		$next.removeClass('d-none');
		$previous.addClass('d-none');
		$arousal.removeClass('active');
		$attention.removeClass('active');
		$wandering.removeClass('active');
	}

	function resetAll() {
		resetThisSlide();
		showFirstSlide();
		resetNavigationButtons();
	}

	const optionsSelected = {
		1: false,
		2: false,
		3: false,
	};
	function activeButtonSwitcher(buttonToSwitch) {
		buttonToSwitch.addClass('active');

		if (buttonToSwitch === $arousal) {
			optionsSelected[1] = true;
			$attention.removeClass('active');
			$wandering.removeClass('active');
		} else if (buttonToSwitch === $attention) {
			optionsSelected[2] = true;
			$arousal.removeClass('active');
			$wandering.removeClass('active');
		} else if (buttonToSwitch === $wandering) {
			optionsSelected[3] = true;
			$attention.removeClass('active');
			$arousal.removeClass('active');
		}

		if (Object.values(optionsSelected).indexOf(false) === -1) {
			console.log('activateCompletion');

			activateCompletion();
		}
	}

	$next.on('click', () => {
		switchSlides();

		if (currentSlide === 1) {
			$next.removeClass('d-none');
		} else if (currentSlide === 2) {
			$arousal.addClass('active');
			$previous.removeClass('d-none');
		} else if (currentSlide === 3) {
			$arousal.removeClass('active');
			$attention.addClass('active');
		} else if (currentSlide === 4) {
			$attention.removeClass('active');
			$wandering.addClass('active');
			$next.addClass('d-none');
		}
	});

	$previous.on('click', () => {
		currentSlide -= 1;
		document.querySelectorAll(`[data-slide='${currentSlide}']`)[0].classList.remove('d-none');
		$(`[data-slide="${currentSlide + 1}"]`).addClass('d-none');

		if (currentSlide === 1) {
			$arousal.removeClass('active');
			$previous.addClass('d-none');
		} else if (currentSlide === 2) {
			$attention.removeClass('active');
			$arousal.addClass('active');
		} else if (currentSlide === 3) {
			$wandering.removeClass('active');
			$attention.addClass('active');
			$next.removeClass('d-none');
		}
	});

	$arousal.on('click', () => {
		hideSlides();
		showSlide(2);
		activeButtonSwitcher($arousal);
	});

	$attention.on('click', () => {
		hideSlides();
		showSlide(3);
		activeButtonSwitcher($attention);
	});

	$wandering.on('click', () => {
		hideSlides();
		showSlide(4);
		activeButtonSwitcher($wandering);
	});

	$reload.on('click', (e) => {
		e.preventDefault();
		resetAll();
	});
});
