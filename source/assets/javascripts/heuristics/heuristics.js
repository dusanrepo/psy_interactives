$(document).ready(() => {
	const $begin = $('.begin');
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	const $prompts = $('.prompt');
	const $inputs = $('.form-control');
	const $previousAnswer = $('.previous-answer');
	const $modal = $('.modal');

	let step = 0;

	let question1 = null; // number between 1-9
	let question2 = null; // question1 - 5,
	let question3 = null; // question2 * 3,
	let question4 = null; // question3 * question3,
	let question5 = null;	// Add the digits of this new number until you get a one-digit number.
	let question6 = null; // if (question5 < 5) + 5, else - 4.
	let question7 = null; // question6 * 2
	let question8 = null; // question7 - 6
	let question9 = null; // map question8 to a letter. (1 = A, 2 = B, 3 = C, etc.)

	const questionComplete = {
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
	};

	// let incorrectInput = false;

	let currentInputValue;

	function userHasAnswerd() {
		if (questionComplete[step] === false) {
			$next.addClass('d-none');
			$(`#question-${step}-answer`).prop('disabled', false);
		} else {
			$next.removeClass('d-none');
			$(`#question-${step}-answer`).prop('disabled', true);
		}

		currentInputValue = document.getElementById(`question-${step}-answer`).value;
		if (currentInputValue === '') {
			$next.addClass('d-none');
		} else {
			$next.removeClass('d-none');
		}
	}

	// function acceptZero(zeroCheck) {
	// 	(zeroCheck === '0') || (zeroCheck === '-0');
	// }

	function userEntry(stepMovement) {
		currentInputValue = document.getElementById(`question-${step}-answer`).value;
		// const zeroCheck = $('#question-2-answer').val();
		// console.log(`question-${step}-answer`);
		// console.log(currentInputValue);

		if (step === 1) {
			question1 = currentInputValue;
			question1 = Number(question1);
			if (question1 >= 1 && question1 <= 9) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 2) {
			// console.log(currentInputValue);
			const question2Answer = (question1 - 5);
			question2 = currentInputValue;
			question2 = Number(question2);
			// console.log(question2);
			// console.log(question2Answer);

			if ((question2 === question2Answer) && (currentInputValue !== '')) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 3) {
			const question3Answer = (question2 * 3);
			question3 = currentInputValue;
			question3 = Number(question3);
			if ((question3 === question3Answer) && (currentInputValue !== '')) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 4) {
			const question4Answer = (question3 * question3);
			question4 = currentInputValue;
			question4 = Number(question4);
			if ((question4 === question4Answer) && (currentInputValue !== '')) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 5) {
			const num = question4;
			const digits = num.toString().split('');
			const singleDigits = digits.map(Number);
			const question5Answer = singleDigits.reduce((a, b) => a + b, 0);
			question5 = currentInputValue;
			question5 = Number(question5);
			if ((question5 === question5Answer) && (currentInputValue !== '')) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 6) {
			let question6Answer;
			if (question5 < 5) {
				question6Answer = (question5 + 5);
			} else {
				question6Answer = (question5 - 4);
			}
			question6 = currentInputValue;
			question6 = Number(question6);
			if (question6 === question6Answer) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 7) {
			const question7Answer = (question6 * 2);
			question7 = currentInputValue;
			question7 = Number(question7);
			if (question7 === question7Answer) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 8) {
			const question8Answer = (question7 - 6);
			question8 = currentInputValue;
			question8 = Number(question8);
			if (question8 === question8Answer) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		} else if (step === 9) {
			const question9Answer = String.fromCharCode(question8 + 64);
			question9 = currentInputValue;
			question9 = question9.toUpperCase();
			if (question9 === question9Answer) {
				questionComplete[step] = true;
				if (stepMovement) {
					step += 1;
				}
			} else {
				$modal.modal('show');
				// incorrectInput = true;
			}
		}
	}

	function previousAnswer() {
		if (step === 2) {
			$previousAnswer.html(question1);
		} else if (step === 3) {
			$previousAnswer.html(question2);
		} else if (step === 4) {
			$previousAnswer.html(question3);
		} else if (step === 5) {
			$previousAnswer.html(question4);
		} else if (step === 6) {
			$previousAnswer.html(question5);
		} else if (step === 7) {
			$previousAnswer.html(question6);
		} else if (step === 8) {
			$previousAnswer.html(question7);
		} else if (step === 9) {
			$previousAnswer.html(question8);
		}
	}

	function loadStep() {
		$(`#question-${step}-answer`).prop('disabled', false);
		$(`.question-${step}`).removeClass('d-none')
			.siblings($prompts)
			.addClass('d-none');
		previousAnswer();
		if (step <= 9) {
			userHasAnswerd();
		}
		if (step === 1) {
			$previous.addClass('d-none');
		}
		if (step > 9) {
			$next.removeClass('d-none');
		}
		if (step === 14) {
			$prompts.addClass('d-none');
			$('.feedback').removeClass('d-none');
			$next.addClass('d-none');
			$previous.removeClass('d-none');
		}
	}

	$inputs.on('input', () => {
		$next.removeClass('d-none');
	});

	$begin.click(() => {
		step += 1;
		loadStep();
		$begin.addClass('d-none');
	});

	$next.click(() => {
		if (step <= 9) {
			userEntry(true);
			// if (incorrectInput) {
			// 	$modal.modal('show');
			// }
		} else {
			step += 1;
		}

		$previous.removeClass('d-none');
		loadStep();
	});

	$previous.click(() => {
		// if (step <= 9) {
		// 	userEntry(false);
		// }
		step -= 1;
		loadStep();
		$modal.modal('hide');
	});

	$reset.click(() => {
		window.location.reload();
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
	});

	$('.try-again').click(() => {
		$modal.modal('hide');
		// incorrectInput = false;
	});
});
