$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $navigation = $('.navigation');
	const $begin = $('#begin');
	const $reset = $('#reset');

	const $clickable = $('.clickable');

	let stage = 0;
	let activityComplete = false;

	const stageCompletion = {
		1: false,
		2: false,
		3: false,
	};

	// Clickable Areas
	// amygdala
	// Anterior cingulate cortex
	// prefrontal cortex

	function showNext() {
		// if the stage is complete or the activity is complete
		if (((stageCompletion[stage] || activityComplete) && stage !== 4) || stage === 0) {
			$next.removeClass('d-none');
		} else {
			$next.addClass('d-none');
		}
	}

	function showPrevious() {
		if (stage === 0) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		showNext();
	}

	function showTextContent() {
		$('.stage-text').addClass('d-none');
		$('.feedback').addClass('d-none');
		$('.post').addClass('d-none');

		if (stageCompletion[stage]) {
			$(`.feedback-${stage}`).removeClass('d-none');
			// show final instructions
		} else if (stageCompletion[stage] === false) {
			$(`.feedback-${stage - 1}`).removeClass('d-none');
			// show final instructions
			$('.post').addClass('d-none');
			$('.end-of-stage-instructions').removeClass('d-none');
			$(`span.post-${stage - 1}`).removeClass('d-none');
		} else if (stage === 0) {
			$('.instructions').removeClass('d-none');
		} else if (activityComplete) {
			$('.feedback-3').removeClass('d-none');
		}
	}

	function setImage() {
		if (stage === 1) {
			$previous.removeClass('d-none');
			$previous.addClass('disabled');
		}

		// hide next/prev
		$next.addClass('d-none');
		$previous.addClass('disabled');

		// show base image
		// $('.image-0').removeClass('d-none');
		$(`.image-${stage - 1}`).removeClass('d-none');

		// show image-${stage}
		$(`.image-${stage}`).css('opacity', '0');
		$(`.image-${stage}`).removeClass('d-none')
			.addClass('position-absolute')
			.css({
				top: 0,
				left: 0,
			});
		$(`.image-${stage}`).animate({ opacity: '1' }, 3000, () => {
			// remove base image
			// $('.image-0').addClass('d-none');
			$(`.image-${stage - 1}`).addClass('d-none');
			$(`.image-${stage}`).removeClass('position-absolute');
			$(`#trigger-${stage}`).removeClass('d-none');

			showNext();
			// showPrevious();
			$previous.removeClass('disabled');
		});
	}

	function setActivity() {
		// Glow image
		// Make clickable
		$navigation.addClass('d-none');
		$previous.removeClass('d-none');
		$previous.addClass('disabled');
		setTimeout(() => {
			// hide .area
			$('.area').addClass('d-none');
			// hide .image
			$('.image').addClass('d-none');
			if (stage !== 4) { // if it's not the final stage
				setImage();
				// show final instructions
				$('.post').addClass('d-none');
				$('.end-of-stage-instructions').removeClass('d-none');
				$(`span.post-${stage - 1}`).removeClass('d-none');
				// showTextContent();
			} else {
				console.log('stage is not 4');

				// stage = 3;
				setImage();
				// show static image
				// $('.image-3').removeClass('d-none');
				activityComplete = true;
				$previous.removeClass('disabled');
				// showPrevious();
			}
			// showNext();
		}, 2000);
	}

	function setStage() {
		// hide .area
		$('.area').addClass('d-none');
		// hide .image
		$('.image').addClass('d-none');
		// show image-${stage}
		$(`.image-${stage}`).removeClass('d-none').removeClass('position-absolute');
		if (stageCompletion[stage] === false) { // if stage is incomplete
			// show clickable area #trigger-${stage}
			$(`#trigger-${stage}`).removeClass('d-none');
		}
		showTextContent();
		showNext();
		showPrevious();
	}

	function setBeginning() {
		setImage();
		$('.stage-text').addClass('d-none');
		$('.post').addClass('d-none');
		$('.end-of-stage-instructions').removeClass('d-none');
		$(`span.post-${stage - 1}`).removeClass('d-none');
		// showPrevious();
	}

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	$begin.click(() => {
		stage = 1;
		$begin.addClass('d-none');
		// $previous.removeClass('d-none');
		// $previous.addClass('disabled');
		setTimeout(() => {
			setBeginning();
		}, 500);
	});

	$reset.click(() => {
		stage = 0;
		activityComplete = false;
		Object.keys(stageCompletion).forEach((v) => { stageCompletion[v] = false; });
		$('.feedback').addClass('d-none');
		$('.instructions').removeClass('d-none');
		$('.area').addClass('d-none');
		$('.image').addClass('d-none');
		$(`.image-${stage}`).removeClass('d-none');
		$('.end-of-stage-instructions').addClass('d-none');
		$('.post').addClass('d-none');
		$navigation.addClass('d-none');
		$begin.removeClass('d-none');
	});

	$clickable.on({
		mouseenter() {
			$clickable.css('outline', '0');
		},
		mouseleave() {
			$clickable.css('outline', '0');
		},
	});

	$clickable.click((e) => {
		$clickable.css('outline', '0');
		const clickId = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
		$('.stage-text').addClass('d-none');
		$('.feedback').addClass('d-none');
		$(`.feedback-${clickId}`).removeClass('d-none');
		stageCompletion[stage] = true;
		stage += 1;
		showNext();
		setActivity();
	});

	$(document).keydown((val) => {
		if (val.which === 9) {
			$clickable.removeAttr('style');
		}
	});

	$clickable.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});
});
