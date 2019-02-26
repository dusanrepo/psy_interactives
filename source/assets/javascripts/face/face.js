$(document).ready(() => {
	const $options = $('.option');
	const $optionLabels = $('.option-labels');
	const $reset = $('.reset');
	const $answerBtns = $('.answerbuttons');
	let trial = 0;
	let unAnswered = true;

	const $option1 = $('#option1');
	const $option2 = $('#option2');
	const $option3 = $('#option3');
	const $option4 = $('#option4');

	function normalizeAnswers() {
		$optionLabels.removeClass('active');
	}

	function trialRun1(e) {
		e.stopPropagation();
		e.preventDefault();

		if (trial === 2) {
			document.getElementById('answer3').innerHTML = 'Happy';
			$('#results').removeClass('hide');
		}

		if (trial === 1) {
			document.getElementById('answer2').innerHTML = 'Happy';
			if (!$('#continue1').is(':visible')) {
				$('#continue2').removeClass('hide');
			}
		}

		if (trial === 0) {
			document.getElementById('answer1').innerHTML = 'Happy';
			if (!$('#continue2').is(':visible')) {
				$('#continue1').removeClass('hide');
			}
		}

		if (unAnswered) {
			unAnswered = false;
		}
	}

	function trialRun2(e) {
		e.stopPropagation();
		e.preventDefault();

		if (trial === 2) {
			document.getElementById('answer3').innerHTML = 'Angry';
			$('#results').removeClass('hide');
		}

		if (trial === 1) {
			document.getElementById('answer2').innerHTML = 'Angry';
			if (!$('#continue1').is(':visible')) {
				$('#continue2').removeClass('hide');
			}
		}

		if (trial === 0) {
			document.getElementById('answer1').innerHTML = 'Angry';
			if (!$('#continue2').is(':visible')) {
				$('#continue1').removeClass('hide');
			}
		}

		if (unAnswered) {
			unAnswered = false;
		}
	}

	function trialRun3(e) {
		e.stopPropagation();
		e.preventDefault();

		if (trial === 2) {
			document.getElementById('answer3').innerHTML = 'Suprised';
			$('#results').removeClass('hide');
		}

		if (trial === 1) {
			document.getElementById('answer2').innerHTML = 'Suprised';
			if (!$('#continue1').is(':visible')) {
				$('#continue2').removeClass('hide');
			}
		}

		if (trial === 0) {
			document.getElementById('answer1').innerHTML = 'Suprised';
			if (!$('#continue2').is(':visible')) {
				$('#continue1').removeClass('hide');
			}
		}

		if (unAnswered) {
			unAnswered = false;
		}
	}

	function trialRun4(e) {
		e.stopPropagation();
		e.preventDefault();

		if (trial === 2) {
			document.getElementById('answer3').innerHTML = 'Neutral';
			$('#results').removeClass('hide');
		}

		if (trial === 1) {
			document.getElementById('answer2').innerHTML = 'Neutral';
			if (!$('#continue1').is(':visible')) {
				$('#continue2').removeClass('hide');
			}
		}

		if (trial === 0) {
			document.getElementById('answer1').innerHTML = 'Neutral';
			if (!$('#continue2').is(':visible')) {
				$('#continue1').removeClass('hide');
			}
		}

		if (unAnswered) {
			unAnswered = false;
		}
	}

	$option1.click(trialRun1);
	$option2.click(trialRun2);
	$option3.click(trialRun3);
	$option4.click(trialRun4);

	function start() {
		$('#smileface').removeClass('hide');
		$('#start').addClass('hide');
		$('#instructions').addClass('hide');

		setTimeout(() => {
			$('#smileface').addClass('hide');
			$('#mainface').removeClass('hide');
			setTimeout(() => {
				$('#mainface').addClass('hide');
				$answerBtns.removeClass('hide');
			}, 1000);
		}, 10000);
	}

	function continueOne() {
		trial += 1;
		unAnswered = true;

		$answerBtns.addClass('hide');
		$('#frownface').removeClass('hide');
		$('#continue1').addClass('hide');

		setTimeout(() => {
			$('#frownface').addClass('hide');
			$('#mainface').removeClass('hide');
			setTimeout(() => {
				$('#mainface').addClass('hide');
				$answerBtns.removeClass('hide');
			}, 1000);
		}, 10000);
	}

	function continueTwo() {
		trial += 1;
		unAnswered = true;

		$answerBtns.addClass('hide');
		$('#surpriseface').removeClass('hide');
		$('#continue2').addClass('hide');

		setTimeout(() => {
			$('#surpriseface').addClass('hide');
			$('#mainface').removeClass('hide');
			setTimeout(() => {
				$('#mainface').addClass('hide');
				$answerBtns.removeClass('hide');
			}, 1000);
		}, 10000);
	}

	$('#start').on('click', () => {
		start();
	});

	$('#continue1').on('click', () => {
		continueOne();
		$option1.click(trialRun1);
		$option2.click(trialRun2);
		$option3.click(trialRun3);
		$option4.click(trialRun4);
		$options.attr('disabled', false);
	});

	$('#continue2').on('click', () => {
		continueTwo();
		$option1.click(trialRun1);
		$option2.click(trialRun2);
		$option3.click(trialRun3);
		$option4.click(trialRun4);
		$options.attr('disabled', false);
	});

	$reset.click(() => {
		window.location.reload();
	});

	$('#results').on('click', () => {
		$answerBtns.addClass('hide');
		$('#results').addClass('hide');
		$option1.click(trialRun1);
		$option2.click(trialRun2);
		$option3.click(trialRun3);
		$option4.click(trialRun4);
		$options.attr('disabled', false);

		$('#resultstable').removeClass('hide');
		$('#reload').removeClass('hide');
	});

	$optionLabels.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});


	$(window).resize(() => {
		if ($(window).width() < 380) {
			$('.btn-group-toggle').addClass('btn-group-vertical').removeClass('btn-group');
		} else {
			$('.btn-group-toggle').addClass('btn-group').removeClass('btn-group-vertical');
		}
	});

	const $option = $('.focusable');
	const $next = $('.next');

	$next.click(() => {
		normalizeAnswers();
	});

	$option.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.removeClass('focus')
			.siblings('label')
			.removeClass('active')
			.removeClass('focus');
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});
});
