$(document).ready(() => {
	const $check = $('#check');
	const $next = $('#next');
	// const $checkAnother = $('#check-another');
	const $guess = $('#guess');
	const $checkRule = $('#show-hypothesis');

	const $previous = $('#previous');
	const $reset = $('#reset');

	let guessCount = 0;
	let stage = 0;
	let entrySubmitted = false;
	let currentGuess = 0;

	const guessRecord = {
		0: [],
		1: [],
		2: [],
		feedback: [],
	};

	function handleNewEntry() {
		// document.getElementById('test-sequence-entry-0').value = '';
		// document.getElementById('test-sequence-entry-1').value = '';
		// document.getElementById('test-sequence-entry-2').value = '';
		entrySubmitted = false;
		$('.feedback').addClass('d-none');
		$guess
			.addClass('d-none')
			.parent()
			.addClass('d-none');

		$check
			.addClass('d-none')
			.parent()
			.addClass('d-none');
	}

	function blankEntry() {
		document.getElementById('test-sequence-entry-0').value = '';
		document.getElementById('test-sequence-entry-1').value = '';
		document.getElementById('test-sequence-entry-2').value = '';
	}

	function handleGuestHistory() {
		if (guessRecord['0'][currentGuess] !== undefined) {
			// console.log('Showing answer');
			// console.log(guessRecord['0'][currentGuess]);
			// console.log(guessRecord['1'][currentGuess]);
			// console.log(guessRecord['2'][currentGuess]);

			// document.getElementById('test-sequence-entry-0').value = guessRecord['0'][currentGuess];
			// document.getElementById('test-sequence-entry-1').value = guessRecord['1'][currentGuess];
			// document.getElementById('test-sequence-entry-2').value = guessRecord['2'][currentGuess];

			$('.first-num').html(`${guessRecord['0'][currentGuess]}, `);
			$('.second-num').html(`${guessRecord['1'][currentGuess]}, `);
			$('.third-num').html(`${guessRecord['2'][currentGuess]} `);
			$('.test-sequence-entry').prop('disabled', true);
			$check
				.addClass('d-none')
				.parent()
				.addClass('d-none');

			$('.amended-feedback').addClass('d-none');
			$('.feedback').addClass('d-none');
			if (guessRecord.feedback[currentGuess] === 'correct') {
				$('.feedback.feedback-correct').removeClass('d-none');
			} else if (guessRecord.feedback[currentGuess] === 'incorrect') {
				$('.feedback.feedback-incorrect').removeClass('d-none');
			} else if (guessRecord.feedback[currentGuess] === 'invalid') {
				$('.feedback.feedback-sample').removeClass('d-none');
			}

			if (currentGuess === 0) {
				$previous
					.addClass('d-none')
					.parent()
					.addClass('d-none');
			}

			if (currentGuess === guessRecord['0'].length) {
				$next
					.addClass('d-none')
					.parent()
					.addClass('d-none');
			}
		} else {
			handleNewEntry();
		}
	}

	function sequenceCheck(entry) {
		// console.log('sequence check');

		// console.log(entry);

		for (let i = 0; i < entry.length; i += 1) {
			// console.log(`${entry[i]} >= ${entry[i + 1]}`);
			// console.log(entry[i] >= entry[i + 1]);

			if (parseInt(entry[i], 10) >= parseInt(entry[i + 1], 10)) {
				return false;
			}
		}
		return true;
	}

	function hideCheckBtn() { // formerly lockForm()
		// $('.test-sequence-entry').prop('disabled', true);
		// if (!stage1Complete) {
		console.log('showingCheckAnother');

		// $checkAnother.removeClass('d-none');
		// }
		$check
			.parent()
			.addClass('d-none');
	}

	function validEntry() {
		const x0 = document.getElementById('test-sequence-entry-0').value;
		const x1 = document.getElementById('test-sequence-entry-1').value;
		const x2 = document.getElementById('test-sequence-entry-2').value;
		const x = x0 + x1 + x2;
		if (x === '246') {
			console.log('246');
			guessRecord['0'].push(x0);
			guessRecord['1'].push(x1);
			guessRecord['2'].push(x2);
			currentGuess += 1;
			// New feedback: That’s the sample sequence! Please enter a different sequence.
			blankEntry();
			hideCheckBtn(); // formerly lockForm()
			$('.amended-feedback').addClass('d-none');
			$('.feedback').addClass('d-none');
			$('.feedback.feedback-sample').removeClass('d-none');
			if (guessCount === 3) {
				$guess
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}

			if (guessCount >= 3) {
				$('.enter-or-guess').removeClass('d-none');
			} else {
				$('.enter-another').removeClass('d-none');
			}
			console.log('valid Entry false');

			return false;
		}
		console.log('valid Entry true');
		return true;
	}

	function handleUserEntry() {
		const x0 = document.getElementById('test-sequence-entry-0').value;
		const x1 = document.getElementById('test-sequence-entry-1').value;
		const x2 = document.getElementById('test-sequence-entry-2').value;
		console.log(x0);
		console.log(x1);
		console.log(x2);
		const x = [x0, x1, x2];
		guessRecord['0'].push(x0);
		guessRecord['1'].push(x1);
		guessRecord['2'].push(x2);
		if (sequenceCheck(x)) { // numbers ascending
			console.log('correct');
			entrySubmitted = true;
			guessCount += 1;
			currentGuess += 1;
			// hideCheckBtn(); // formerly lockForm()

			$('.amended-feedback').addClass('d-none');

			$('.first-num').html(`${x0}, `);
			$('.second-num').html(`${x1}, `);
			$('.third-num').html(`${x2} `);
			$('.feedback').addClass('d-none');
			$('.feedback.feedback-correct').removeClass('d-none');

			if (guessCount >= 3) {
				$('.enter-or-guess').removeClass('d-none');
			} else {
				$('.enter-another').removeClass('d-none');
			}
			guessRecord.feedback.push('correct');
			if (guessCount >= 3) {
				$guess
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}
		} else { // valid, incorrect
			console.log('valid, incorrect');
			entrySubmitted = true;
			// New feedback: Incorrect. The sequence you entered does not follow the rule.
			guessCount += 1;
			currentGuess += 1;
			// hideCheckBtn(); // formerly lockForm()

			if (guessCount >= 3) {
				$guess
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}

			$('.amended-feedback').addClass('d-none');
			$('.first-num').html(`${x0}, `);
			$('.second-num').html(`${x1}, `);
			$('.third-num').html(`${x2} `);
			$('.feedback').addClass('d-none');
			$('.feedback.feedback-incorrect').removeClass('d-none');

			if (guessCount >= 3) {
				$('.enter-or-guess').removeClass('d-none');
			} else {
				$('.enter-another').removeClass('d-none');
			}
			guessRecord.feedback.push('incorrect');
			// if (!stage1Complete) {
			// $('#incorrect').modal('show');
			// }
		}
		blankEntry();
	}

	function formValidate() {
		// const x0 = document.getElementById('test-sequence-entry-0').value;
		// const x1 = document.getElementById('test-sequence-entry-1').value;
		// const x2 = document.getElementById('test-sequence-entry-2').value;
		// const x = x0 + x1 + x2;
		// console.log(x);
		// console.log(x0);
		// console.log(x1);
		// console.log(x2);
		// validEntry();

		if (validEntry()) {
			console.log('handleUserEntry()');
			if (currentGuess > 0) {
				$previous
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}
			handleUserEntry();
		}
		console.log('after validEntry');
	}

	function setStage() {
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous
			.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		// $checkAnother.addClass('d-none');
		if (stage === 0) {
			$previous
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			// console.log('showingCheckAnother');

			$checkRule
				.addClass('d-none')
				.parent()
				.addClass('d-none');
			// $checkAnother.removeClass('d-none');

			currentGuess = guessRecord['0'].length - 1;
			console.log(`currentGuess ${currentGuess}`);

			console.log(guessRecord);


			$next
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			handleGuestHistory();


			// if (guessRecord['0'][currentGuess] !== undefined) {
			// 	formValidate();
			// }

			// if (guessRecord['0'][currentGuess + 1] !== undefined) {
			// 	$next
			// 		.addClass('d-none')
			// 		.parent()
			// 		.addClass('d-none');
			// } else {
			// 	console.log('showing next - set stage');

			// 	$next
			// 		.removeClass('d-none')
			// 		.parent()
			// 		.removeClass('d-none');
			// }

			$guess
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		} else if (stage === 1) {
			console.log('stage 1');
			console.log('showing check rule');
			$checkRule
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		} else if (stage === 2) {
			document.getElementById('results-form').value = document.getElementById('hypothesis-entry').value;
		}
	}

	const $testSequenceInput = $('.test-sequence-entry');
	$testSequenceInput.click((e) => {
		console.log('click');

		e.target.select();
		if (entrySubmitted) {
			console.log('entrySubmitted');
			handleNewEntry();
		}
	});

	$testSequenceInput.keydown((e) => { // eslint-disable-line
		// console.log(e.target.value);

		// disallow special characters, more than 1 digit
		if (!((e.keyCode > 95 && e.keyCode < 106)
				|| (e.keyCode > 47 && e.keyCode < 58)
				|| e.keyCode === 8
				|| e.keyCode === 9
				|| e.keyCode === 13)
				||
				(((e.keyCode > 95 && e.keyCode < 106)
				|| (e.keyCode > 47 && e.keyCode < 58))
				// && e.target.value !== '')
				&& e.target.value.length > 1
				&& window.getSelection().toString() === '')
		) {
			return false;
		}
	});

	$testSequenceInput.keydown((e) => { // eslint-disable-line
		// console.log(e.target.value);
		// console.log(e.keyCode);

		// if (entrySubmitted === false) {
		setTimeout(() => {
			// show check button if all inputs are filled
			if (document.getElementById('test-sequence-entry-0').value === ''
				|| document.getElementById('test-sequence-entry-1').value === ''
				|| document.getElementById('test-sequence-entry-2').value === '') {
				$('.feedback').addClass('d-none');
				$check
					.addClass('d-none')
					.parent()
					.addClass('d-none');
			} else {
				$check
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}
		}, 20);

		setTimeout(() => {
			if (e.keyCode === 13) {
				// console.log('keyCode is 13');
				if (document.getElementById('test-sequence-entry-0').value !== ''
														&& document.getElementById('test-sequence-entry-1').value !== ''
														&& document.getElementById('test-sequence-entry-2').value !== '') {
					// console.log('check click');
					$check.click();
				}
			}
		}, 25);
		// } else {
		// handleNewEntry();
		// }
	});

	$testSequenceInput.change(() => {
		console.log('change');

		if (entrySubmitted === false) {
			setTimeout(() => {
				// show check button if all inputs are filled
				if (document.getElementById('test-sequence-entry-0').value === ''
				|| document.getElementById('test-sequence-entry-1').value === ''
				|| document.getElementById('test-sequence-entry-2').value === '') {
					$check
						.addClass('d-none')
						.parent()
						.addClass('d-none');
				} else {
					console.log('showing check change');

					$check
						.removeClass('d-none')
						.parent()
						.removeClass('d-none');
				}
			}, 20);
		} else {
			handleNewEntry();
		}
	});

	$check.click(() => {
		formValidate();
		$check
			.addClass('d-none')
			.parent()
			.addClass('d-none');
	});

	$guess.click(() => {
		$('.navigation')
			.addClass('d-none')
			.parent()
			.addClass('d-none');
		// stage1Complete = true;
		stage += 1;
		setStage();
	});

	$checkRule.click(() => {
		const x = document.getElementById('hypothesis-entry').value;
		if (x === '') {
			$('#invalid').modal('show');
		} else {
			$checkRule
				.addClass('d-none')
				.parent()
				.addClass('d-none');
			stage += 1;
			setStage();
			$('#hypothesis-entry').prop('disabled', true);
			// $('#hypothesis-entry').attr('disabled', 'disabled');
		}
	});

	$next.click(() => {
		currentGuess += 1;
		handleGuestHistory();
		$previous
			.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		if (guessRecord['0'][currentGuess] === undefined) {
			$('.test-sequence-entry').prop('disabled', false);
			$next
				.addClass('d-none')
				.parent()
				.addClass('d-none');
			if (guessCount >= 3) {
				$guess
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}

			setTimeout(() => {
				// show check button if all inputs are filled
				if (document.getElementById('test-sequence-entry-0').value === ''
				|| document.getElementById('test-sequence-entry-1').value === ''
				|| document.getElementById('test-sequence-entry-2').value === '') {
					$check
						.addClass('d-none')
						.parent()
						.addClass('d-none');
				} else {
					console.log('showing check next');

					$check
						.removeClass('d-none')
						.parent()
						.removeClass('d-none');
				}
			}, 20);
		}
	});

	$previous.click(() => {
		if (stage === 0) {
			// console.log(guessRecord['0']);
			// console.log(`currentGuess ${currentGuess}`);


			if (guessRecord['0'][currentGuess] === undefined && $('.feedback').is(':visible')) {
				currentGuess -= 2;
			} else {
				currentGuess -= 1;
			}

			$next
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			handleGuestHistory();
		} else {
			console.log(`previous clicked, stage was ${stage}`);

			stage -= 1;
			setStage();
		}
		// $checkRule.addClass('d-none');
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');

		// if (guessCount < 3) { // re-enable guessing field

		// }
	});

	$reset.click(() => {
		window.location.reload();
	});
});
