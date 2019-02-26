$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $navigation = $('.navigation');
	const $reset = $('#reset');

	let stage = 0;
	let flipped = false;

	let transitionInProgress = false;

	const $stateButtons = $('.state');
	let state = 0;

	const transitionComplete = {
		0: true,
		1: true,
		3: true,
	};

	const answerReviewed = {
		3: {
			1: false,
			2: false,
		},
	};

	function activateCompletion() {
		window.postAction({
			id: 'e31ac9b2-d34c-40f5-9aa6-0e5a38af632a',
		});
	}

	// Slide 0 - Text

	// Slide 1 - Text & Switch flipped off (move to slide 2 when switch is flipped)
	// Switch flip: Brain regions activate, text labels will appear to name all of the active regions

	// Slide 2 - Text & Switch flipped on (move to slide 3 when next is clicked)

	// Slide 3, 3.5 - Text & Mult Choice
	// slide 3.5 is feedback (move to slide 5 when feedback is clicked)

	// Slide 4 - Text, Final

	function answerReviewedCheck() {
		if (Object.values(answerReviewed[stage]).indexOf(false) === -1) {
			return true;
		}

		return false;
	}

	function setImage() {
		transitionComplete[stage] = true;
		transitionInProgress = true;
		// Disable Nav
		$navigation.prop('disabled', true).addClass('disabled');

		// Image Fade-in
		$(`.image-${stage}`).css('opacity', '0');
		$(`.image-${stage}`).removeClass('d-none')
			.addClass('position-absolute')
			.css({
				top: 0,
				left: 0,
			});
		$(`.image-${stage}`).animate({ opacity: '1' }, 3000, () => {
			console.log(`hiding .image-${stage - 1}`);
			console.log(`removing absolute .image-${stage}`);

			$(`.image-${stage - 1}`).addClass('d-none');
			$(`.image-${stage}`).removeClass('position-absolute');

			// Enable Nav
			$navigation.prop('disabled', false).removeClass('disabled');
			transitionInProgress = false;
		});
	}

	function setStage() {
		$('.feedback').addClass('d-none');
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');
		if (stage === 4) {
			$('.image').addClass('d-none');
		} else if (stage > 1 && !transitionComplete[stage]) {
			console.log('animate img');

			setImage();
		} else if (stage <= 1 || transitionComplete[stage]) {
			console.log('dont animate img');
			$stateButtons.prop('disabled', false)
				.parent('label')
				.removeClass('active')
				.removeClass('disabled');
			$('.image').addClass('d-none');
			$(`.image-${stage}`).removeClass('d-none').css('opacity', '1');
		}

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$next.removeClass('d-none');
		if (stage === 4 ||
			(stage === 3 && !answerReviewedCheck()) ||
			(stage === 1 && !flipped)
		) {
			$next.addClass('d-none');

			if (stage === 4) {
				console.log('activateCompletion()');
				activateCompletion();
			}
		}

		if (stage === 2) {
			flipped = true;
		}
	}

	$('.flip').click(() => {
		if (!transitionInProgress) {
			stage = 2;
			setStage();
			$('.switch-aria-flip').attr('aria-pressed', 'true');
			$('.switch-aria-flip:visible').focus();
		}
	});

	$('.flip-back').click(() => {
		if (!transitionInProgress) {
			stage = 1;
			setStage();
			$('.switch-aria-flip').attr('aria-pressed', 'false');
			$('.switch-aria-flip:visible').focus();
		}
	});

	$('.flip').on({
		mouseenter() {
			$('.flip').css('outline', '0');
			$('.switch-hover-off').removeClass('d-none');
		},
		mouseleave() {
			$('.flip').css('outline', '');
			$('.switch-hover-off').addClass('d-none');
		},
	});

	$('.flip-back').on({
		mouseenter() {
			$('.flip-back').css('outline', '0');
			$('.switch-hover-on').removeClass('d-none');
		},
		mouseleave() {
			$('.flip-back').css('outline', '');
			$('.switch-hover-on').addClass('d-none');
		},
	});

	$('.switch-aria-flip').keydown((val) => {
		console.log(val.which);

		if (val.which === 13 || val.which === 32) {
			$(val.target).click();
		}
	});

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	$reset.click(() => {
		window.location.reload();
	});

	function setFeedbackImage($stateBtn) {
		// Disable Nav
		$navigation.addClass('disabled');

		console.log(`showing .stage-${stage}-state-${state}`);

		const $visibleImg = $('.image:visible');
		const $imgShow = $(`.stage-${stage}-state-${state}`);
		console.log(`img to show .stage-${stage}-state-${state}`);

		// Show image you want shown
		$imgShow.css('opacity', '0');
		$imgShow.removeClass('d-none')
			.addClass('position-absolute')
			.css({
				top: 0,
				left: 0,
				// transform: 'translate3d(0, 0, 0)',
			});
		// Fade in image that was hidden
		$imgShow.animate({ opacity: '0.999' }, 1500, () => {
			setTimeout(() => {
				$imgShow.css('opacity', '1');
				// $imgShow.css('transform', '');
			}, 1000);
		});

		// $visibleImg.css({
		// transform: 'translate3d(0, 0, 0)',
		// });
		// Fade out image that was showing
		$visibleImg.animate({ opacity: '0' }, 3000, () => {
			$visibleImg.addClass('d-none');
			// $visibleImg.css('transform', '');
			$imgShow.removeClass('position-absolute');

			$('.feedback').addClass('d-none');
			console.log(`showing .feedback-stage-${stage}-state-${state}`);

			$(`.feedback-stage-${stage}-state-${state}`).removeClass('d-none');


			// Enable Nav
			$navigation.removeClass('disabled');

			$stateBtn.parent()
				.siblings('label')
				.removeClass('disabled')
				.children('input')
				.prop('disabled', false);

			if (answerReviewedCheck()) {
				$next.removeClass('d-none');
			}
		});
	}

	$stateButtons.click((e) => {
		console.log('state button click');
		const $stateBtn = $(e.target);
		$stateBtn.prop('disabled', true)
			.parent('label')
			.addClass('disabled')
			.siblings('label')
			.addClass('disabled')
			.children('input')
			.prop('disabled', true);

		state = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
		answerReviewed[stage][state] = true;
		setFeedbackImage($stateBtn);
	});

	$stateButtons.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$stateButtons.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.addClass('active')
			.siblings('label')
			.removeClass('focus')
			.removeClass('active');
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$(document).keydown((val) => {
		if (val.which === 9) {
			$('label').removeClass('focus');
		}
	});
});
