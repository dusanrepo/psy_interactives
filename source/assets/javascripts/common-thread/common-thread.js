$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	const $submit = $('#submit');
	const $skip = $('#skip');
	const $input = $('.form-control');

	let frame = 0;
	let trial = 0;
	let activityComplete = false;

	let currentInputValue;

	// hold each trials data
	const trialData = {
		0: { // trial
			targetwords: { // targetwords for trial
				0: 'mind',
				1: 'piece',
				2: 'end',
			},
			feedback: { // correct feedbacks for trial
				0: 'mind game',
				1: 'game piece',
				2: 'endgame',
			},
			trialDone: false,
			answer: 'game',
		},
		1: {
			targetwords: {
				0: 'cottage',
				1: 'swiss',
				2: 'cake',
			},
			feedback: {
				0: 'cottage cheese',
				1: 'Swiss cheese',
				2: 'cheesecake',
			},
			trialDone: false,
			answer: 'cheese',
		},
		// 2: {
		// 	targetwords: {
		// 		0: 'rocking',
		// 		1: 'wheel',
		// 		2: 'high',
		// 	},
		// 	feedback: {
		// 		0: 'rocking chair',
		// 		1: 'wheel chair',
		// 		2: 'high chair',
		// 	},
		// 	trialDone: false,
		// 	answer: 'chair',
		// },
		2: {
			targetwords: {
				0: 'safety',
				1: 'cushion',
				2: 'point',
			},
			feedback: {
				0: 'safety pin',
				1: 'pincushion',
				2: 'pinpoint',
			},
			trialDone: false,
			answer: 'pin',
		},
		3: {
			targetwords: {
				0: 'cream',
				1: 'skate',
				2: 'water',
			},
			feedback: {
				0: 'ice cream',
				1: 'ice skate',
				2: 'ice water',
			},
			trialDone: false,
			answer: 'ice',
		},
		4: {
			targetwords: {
				0: 'dew',
				1: 'comb',
				2: 'bee',
			},
			feedback: {
				0: 'honeydew',
				1: 'honeycomb',
				2: 'honey bee',
			},
			trialDone: false,
			answer: 'honey',
		},
		// 6: {
		// 	targetwords: {
		// 		0: 'show',
		// 		1: 'life',
		// 		2: 'row',
		// 	},
		// 	feedback: {
		// 		0: 'showboat',
		// 		1: 'lifeboat',
		// 		2: 'rowboat',
		// 	},
		// 	trialDone: false,
		// 	answer: 'boat',
		// },
		5: {
			targetwords: {
				0: 'dream',
				1: 'break',
				2: 'light',
			},
			feedback: {
				0: 'daydream',
				1: 'daybreak',
				2: 'daylight',
			},
			trialDone: false,
			answer: 'day',
		},
		6: {
			targetwords: {
				0: 'political',
				1: 'suprise',
				2: 'line',
			},
			feedback: {
				0: 'political party',
				1: 'suprise party',
				2: 'party line',
			},
			trialDone: false,
			answer: 'party',
		},
		7: {
			targetwords: {
				0: 'aid',
				1: 'rubber',
				2: 'wagon',
			},
			feedback: {
				0: 'Band-Aid',
				1: 'rubber band',
				2: 'bandwagon',
			},
			trialDone: false,
			answer: 'band',
		},
	};

	const userAnswerRecal = [];

	function resetTrial() {
		$('.trial').addClass('invisible');
		$('.trial').addClass('d-none');
		$('.trial-feedback').addClass('d-none');
		$('.feedback').addClass('d-none');
		$('.test-trial-feedback').addClass('d-none');
		$input.val('');
		$submit.addClass('disabled');
		$submit.prop('disabled', true);
	}

	function userHasAnswerd(skippedAnswer) {
		currentInputValue = document.getElementById('response').value;
		currentInputValue = currentInputValue.toLowerCase();
		if (skippedAnswer) {
			userAnswerRecal.push('skipped');
		} else {
			userAnswerRecal.push(currentInputValue);
		}

		if (trial <= 1) {
			$('.trial-feedback').removeClass('d-none');
			$('.test-trial-feedback').removeClass('d-none');
			$('.feedback-test-trial').addClass('d-none');
			if (trial === 0 && currentInputValue.replace(/ /g, '') === trialData[trial].answer.replace(/ /g, '')) {
				$('.correct-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback.feedback-correct`).removeClass('d-none');
			} else if (trial === 0 && currentInputValue.replace(/ /g, '') !== trialData[trial].answer.replace(/ /g, '')) {
				$('.incorrect-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback.feedback-incorrect`).removeClass('d-none');
			} else if (trial === 1 && currentInputValue.replace(/ /g, '') === trialData[trial].answer.replace(/ /g, '')) {
				$('.correct-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback`).removeClass('d-none');
			} else if (trial === 1 && currentInputValue.replace(/ /g, '') !== trialData[trial].answer.replace(/ /g, '')) {
				$('.incorrect-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback`).removeClass('d-none');
			}
		} else if (currentInputValue.replace(/ /g, '') === trialData[trial].answer.replace(/ /g, '')) {
			$('.trial-feedback').removeClass('d-none');
			$('.correct-feedback').removeClass('d-none')
				.siblings('.feedback')
				.addClass('d-none');
			// if (trial <= 1) {
			// 	$('.test-trial-feedback').removeClass('d-none');
			// 	$('.feedback-test-trial').addClass('d-none');
			// 	$(`.trial-${trial}-feedback`).removeClass('d-none');
			// }
		} else if (currentInputValue.replace(/ /g, '') !== trialData[trial].answer.replace(/ /g, '')) {
			$('.trial-feedback').removeClass('d-none');
			$('.incorrect-feedback').removeClass('d-none')
				.siblings('.feedback')
				.addClass('d-none');
			// if (trial <= 1) {
			// 	$('.test-trial-feedback').removeClass('d-none');
			// 	$('.feedback-test-trial').addClass('d-none');
			// 	$(`.trial-${trial}-feedback`).removeClass('d-none');
			// }
		}
	}

	const $answer0 = $('.answer-0');
	const $answer1 = $('.answer-1');
	const $answer2 = $('.answer-2');

	function strongAnswer(answerClass) {
		const textDiv = $(answerClass).text();
		const reg = new RegExp(trialData[trial].answer.replace(/ /g, ''));
		console.log('TEXTDIV');

		console.log(textDiv);
		let txt;
		txt = textDiv.replace(reg, str => `<strong>${str}</strong>`);

		if (txt === 'Band-Aid') {
			txt = '<strong>Band</strong>-Aid';
		}

		return $(answerClass).html(txt);
	}

	let notSlow = false;
	let intervalVar;
	let start;
	let trialInProgress = false; // eslint-disable-line

	function checkIfAnswerd() {
		if ((Date.now() - start) > 15000) {
			$skip.prop('disabled', false);
			// $submit.addClass('disabled');
			// $submit.prop('disabled', true);
			// $('#response').prop('disabled', true);
			clearInterval(intervalVar);
			notSlow = false;
		} else if (notSlow) {
			clearInterval(intervalVar);
			notSlow = false;
		} else {
			// - nothing
		}
		// }
	}

	function setTrial() {
		resetTrial();
		notSlow = false;
		$previous.addClass('d-none');
		$next.addClass('d-none');
		trialInProgress = true;

		$('.trial').removeClass('d-none');
		$('.fixation-frame').removeClass('d-none');
		$('.fixation-frame').removeClass('invisible'); // show the frame
		$('.fixation-frame').animate({ opacity: '1' }, 1000, () => {
			$('.fixation-frame').addClass('invisible'); // hide frame
			$('.fixation-frame').addClass('d-none');
			$('.trial').removeClass('invisible'); // show trial
			// $('#response').prop('disabled', false); // enable response input
			$('#response').focus();

			// Target words for trial
			$('.tw-0').text(`${trialData[trial].targetwords[0]}`);
			$('.tw-1').text(`${trialData[trial].targetwords[1]}`);
			$('.tw-2').text(`${trialData[trial].targetwords[2]}`);

			// Correct feedback for trial
			$answer0.text(`${trialData[trial].feedback[0]}`);
			$answer1.text(`${trialData[trial].feedback[1]}`);
			$answer2.text(`${trialData[trial].feedback[2]}`);
			strongAnswer($answer0);
			strongAnswer($answer1);
			strongAnswer($answer2);

			$skip.prop('disabled', true);
			start = Date.now(); // start time
			intervalVar = setInterval(checkIfAnswerd, 20);
		});
	}

	function trialCompleteFeedback() {
		resetTrial();
		$answer0.text(`${trialData[trial].feedback[0]}`);
		$answer1.text(`${trialData[trial].feedback[1]}`);
		$answer2.text(`${trialData[trial].feedback[2]}`);
		strongAnswer($answer0);
		strongAnswer($answer1);
		strongAnswer($answer2);

		currentInputValue = userAnswerRecal[trial];

		if (trial <= 1) {
			$('.trial-feedback').removeClass('d-none');
			$('.test-trial-feedback').removeClass('d-none');
			$('.feedback-test-trial').addClass('d-none');
			if (trial === 0 && currentInputValue.replace(/ /g, '') === trialData[trial].answer.replace(/ /g, '')) {
				$('.correct-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback.feedback-correct`).removeClass('d-none');
			} else if (trial === 0 && currentInputValue.replace(/ /g, '') !== trialData[trial].answer.replace(/ /g, '')) {
				$('.incorrect-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback.feedback-incorrect`).removeClass('d-none');
			} else if (trial === 1 && currentInputValue.replace(/ /g, '') === trialData[trial].answer.replace(/ /g, '')) {
				$('.correct-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback`).removeClass('d-none');
			} else if (trial === 1 && currentInputValue.replace(/ /g, '') !== trialData[trial].answer.replace(/ /g, '')) {
				$('.incorrect-feedback').removeClass('d-none')
					.siblings('.feedback')
					.addClass('d-none');
				$(`.trial-${trial}-feedback`).removeClass('d-none');
			}
		} else if (currentInputValue.replace(/ /g, '') === 'skipped') {
			$('.trial-feedback').removeClass('d-none');
			$('.skipped-feedback').removeClass('d-none')
				.siblings('.feedback')
				.addClass('d-none');
			// if (trial <= 1) {
			// 	$('.test-trial-feedback').removeClass('d-none');
			// 	$('.feedback-test-trial').addClass('d-none');
			// 	$(`.trial-${trial}-feedback`).removeClass('d-none');
			// }
		} else if (currentInputValue.replace(/ /g, '') === trialData[trial].answer.replace(/ /g, '')) {
			$('.trial-feedback').removeClass('d-none');
			$('.correct-feedback').removeClass('d-none')
				.siblings('.feedback')
				.addClass('d-none');
			// if (trial <= 1) {
			// 	$('.test-trial-feedback').removeClass('d-none');
			// 	$('.feedback-test-trial').addClass('d-none');
			// 	$(`.trial-${trial}-feedback`).removeClass('d-none');
			// }
		} else if (currentInputValue.replace(/ /g, '') !== trialData[trial].answer.replace(/ /g, '')) {
			$('.trial-feedback').removeClass('d-none');
			$('.incorrect-feedback').removeClass('d-none')
				.siblings('.feedback')
				.addClass('d-none');
			// if (trial <= 1) {
			// 	$('.test-trial-feedback').removeClass('d-none');
			// 	$('.feedback-test-trial').addClass('d-none');
			// 	$(`.trial-${trial}-feedback`).removeClass('d-none');
			// }
		}
	}

	function setFrame() {
		$(`#frame-${frame}`).removeClass('d-none').siblings('.frame').addClass('d-none');
		if (typeof trialData[trial] === 'undefined') {
			// go to correct frame
		} else if (frame === 3 && !trialData[trial].trialDone) {
			$next.addClass('d-none');
			setTrial();
		} else if (frame === 3 && trialData[trial].trialDone) {
			trialCompleteFeedback();
		}
	}

	$input.on('input', () => {
		$submit.removeClass('disabled');
		$submit.prop('disabled', false);
	});

	$('#response').keydown((val) => {
		if (val.which === 13 && !$submit.attr('disabled')) {
			$submit.click();
		}
	});

	$submit.click(() => {
		trialInProgress = false;
		if (trial === 7) {
			activityComplete = true;
		}
		$('.trial').addClass('invisible');
		$('.trial').addClass('d-none');
		trialData[trial].trialDone = true;
		userHasAnswerd();
		notSlow = true;
		$previous.removeClass('d-none');
		$next.removeClass('d-none');
	});

	$skip.click(() => {
		$('.trial').addClass('invisible');
		$('.trial').addClass('d-none');
		trialData[trial].trialDone = true;
		userHasAnswerd(true);
		clearInterval();
		$next.removeClass('d-none');
		$previous.removeClass('d-none');
	});

	$next.click(() => {
		$previous.removeClass('d-none');
		if (frame === 3 && trial <= 7 && !activityComplete) {
			trial += 1;
		} else if (frame === 3 && trial < 7 && activityComplete) {
			trial += 1;
		} else {
			frame += 1;
		}
		trialInProgress = true;
		setFrame();

		if (frame === 4) {
			$next.addClass('d-none');
		}
	});

	$previous.click(() => {
		$next.removeClass('d-none');

		if (trial === 0 && frame === 3) {
			frame -= 1;
		} else if (trial <= 7 && trial > 0 && frame === 3) {
			trial -= 1;
			trialCompleteFeedback();
		} else if (frame !== 3) {
			frame -= 1;
		}

		setFrame();
		if (frame === 0) {
			$previous.addClass('d-none');
		}
	});

	$reset.click(() => {
		window.location.reload();
	});
});
