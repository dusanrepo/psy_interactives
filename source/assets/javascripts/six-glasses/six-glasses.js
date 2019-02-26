$(document).ready(() => {
	const $submit = $('#submit');
	const $hint = $('#hint');
	const $giveUp = $('#give-up');
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	let frame = 0;
	let userHasAnswered = false;
	let hintInterval;
	let giveUpInterval;
	let start;

	function hintFunction() {
		if ((Date.now() - start) > 15000) {
			$hint.removeClass('d-none');
			// $submit.addClass('d-none');
		} else if (userHasAnswered) {
			clearInterval(hintInterval);
			userHasAnswered = false;
		} else {
			// - nothing
		}
		// }
	}

	function giveUpFunction() {
		if ((Date.now() - start) > 30000) {
			$giveUp.prop('disabled', false);
			clearInterval(giveUpInterval);
			userHasAnswered = false;
		} else if (userHasAnswered) {
			clearInterval(giveUpInterval);
			userHasAnswered = false;
		} else {
			// - nothing
		}
		// }
	}

	function setFrame() {
		$hint.addClass('d-none');
		$giveUp.prop('disabled', true);
		$(`.frame-${frame}`).removeClass('d-none')
			.siblings('.frame')
			.addClass('d-none');
		start = Date.now(); // start time
		hintInterval = setInterval(hintFunction, 20);
		giveUpInterval = setInterval(giveUpFunction, 20);
	}

	setFrame();

	$('#solution-entry').on('input', () => {
		// clearInterval(giveUpInterval);
		$submit.removeClass('d-none');
		if (document.getElementById('solution-entry').value === '') {
			$submit.addClass('d-none');
		}

		// if (!$('.hint').is(':visible')) {
		// 	$hint.removeClass('d-none');
		// }
	});

	$hint.click(() => {
		$('.hint').removeClass('d-none');
		$hint.addClass('d-none');
		clearInterval(hintInterval);
	});

	$giveUp.click(() => {
		frame += 1;
		$previous.removeClass('d-none');
		setFrame();
		$next.removeClass('d-none');
		$('#solution-entry').prop('disabled', true);
	});

	$submit.click(() => {
		frame += 1;
		$previous.removeClass('d-none');
		setFrame();
		$next.removeClass('d-none');
		$('#solution-entry').prop('disabled', true);
		userHasAnswered = true;
		$submit.addClass('d-none');
		clearInterval(hintInterval);
		// clearInterval(giveUpInterval);
	});

	$next.click(() => {
		frame += 1;
		$previous.removeClass('d-none');
		setFrame();
		if (frame === 2) {
			$next.addClass('d-none');
		}
	});

	$previous.click(() => {
		frame -= 1;
		$next.removeClass('d-none');
		setFrame();
		if (frame === 0) {
			$previous.addClass('d-none');
		}
	});

	$reset.click(() => {
		window.location.reload();
	});

	setTimeout(() => {
		$('#solution-entry').focus();
	}, 20);
});
