$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	const $submit = $('#submit');
	const $giveUp = $('#give-up');
	const $hint = $('#hint');

	let hintInterval;
	let giveUpInterval;
	let start;

	let stage = 0;

	function hintFunction() {
		if ((Date.now() - start) > 15000) {
			console.log('enabling hint');
			$hint.removeClass('d-none');
			clearInterval(hintInterval);
		}
	}

	function giveUpFunction() {
		if ((Date.now() - start) > 30000) {
			console.log('enabling give up');
			$giveUp.prop('disabled', false);
			clearInterval(giveUpInterval);
		}
	}

	function setInitial() {
		$hint.addClass('d-none');
		$giveUp.prop('disabled', true);
		start = Date.now();
		hintInterval = setInterval(hintFunction, 20);
		giveUpInterval = setInterval(giveUpFunction, 20);
	}

	function setStage() {
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$next.removeClass('invisible');
		if (stage === 3) {
			$next.addClass('invisible');
		}

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}
	}

	setInitial();

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
		$('.hint-text').removeClass('d-none');
		$hint.addClass('d-none');
		clearInterval(hintInterval);
	});

	$giveUp.click(() => {
		stage += 1;
		$next.removeClass('invisible');
		setStage();
		$('#solution-entry').prop('disabled', true);
		$giveUp.prop('disabled', true);
	});

	$submit.click(() => {
		stage += 1;
		$submit.addClass('d-none');
		$hint.addClass('d-none');
		setStage();
		$('#solution-entry').prop('disabled', true);
		clearInterval(hintInterval);
		clearInterval(giveUpInterval);
	});

	$next.click(() => {
		stage += 1;
		$previous.removeClass('d-none');
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		$next.removeClass('invisible');
		setStage();
	});

	$reset.click(() => {
		window.location.reload();
	});

	setTimeout(() => {
		$('#solution-entry').focus();
	}, 100);
});
