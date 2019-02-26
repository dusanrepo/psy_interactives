$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $submit = $('#submit');
	const $reset = $('#reset');

	let stage = 0;

	const answerKey = {
		0: {
			priority: 'Safety',
			sacrifice: 'Belonging',
		},
		1: {
			priority: 'Physiological',
			sacrifice: 'Belonging',
		},
		2: {
			priority: 'Esteem',
			sacrifice: 'Self-actualization',
		},
		3: {
			priority: 'Belonging',
			sacrifice: 'Esteem',
		},
	};

	let submittedAnswers = {
		0: {
			priority: undefined,
			sacrifice: undefined,
		},
		1: {
			priority: undefined,
			sacrifice: undefined,
		},
		2: {
			priority: undefined,
			sacrifice: undefined,
		},
		3: {
			priority: undefined,
			sacrifice: undefined,
		},
	};

	let answered = {
		0: false,
		1: false,
		2: false,
		3: false,
	};

	function activateCompletion() {
		window.postAction({
			id: '7a5fca74-1b93-4541-8956-bd0a6ad88152',
		});
	}

	function shuffle(currentArr) {
		let currentIndex = currentArr.length;
		let temporaryValue;
		let randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = currentArr[currentIndex];
			currentArr[currentIndex] = currentArr[randomIndex]; // eslint-disable-line
			currentArr[randomIndex] = temporaryValue; // eslint-disable-line
		}

		return currentArr;
	}

	let questions = [0, 1, 2, 3];
	questions = shuffle(questions);

	function setButtons() {
		// if (Object.values(submittedAnswers[questions[stage]]).indexOf(undefined) !== -1) {
		// question not answered
		if (!answered[questions[stage]]) {
			// question not submitted
			// console.log('question not answered');

			$('span.selection-value-priority').html('Priority');
			$('span.selection-value-sacrifice').html('Sacrifice');
			$('.feedback-correct').addClass('d-none');
			$('#answerButton').removeClass('disabled').attr('disabled', false);
			$('#answerButton2').removeClass('disabled').attr('disabled', false);
		} else {
			// write answers & disable dropdowns
			$('span.selection-value-priority').html(submittedAnswers[questions[stage]].priority);
			$('span.selection-value-sacrifice').html(submittedAnswers[questions[stage]].sacrifice);
			$('.feedback-correct').removeClass('d-none');
			$('#answerButton').addClass('disabled').attr('disabled', true);
			$('#answerButton2').addClass('disabled').attr('disabled', true);
		}
	}

	function setStage() {
		$('.feedback').addClass('d-none');
		$('.stage').addClass('d-none');
		$(`.stage-${questions[stage]}`).removeClass('d-none');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}
		console.log(submittedAnswers[questions[stage]]);

		$next.removeClass('d-none');
		// if (Object.values(submittedAnswers[questions[stage]]).indexOf(undefined) !== -1) {
		if (!answered[questions[stage]]) {
			console.log('question not answered, showing next');

			// question answered
			$next.addClass('d-none');
			submittedAnswers[questions[stage]].sacrifice = undefined;
			submittedAnswers[questions[stage]].priority = undefined;
		}

		if (stage === 3) {
			$next.addClass('d-none');
		}

		$submit.addClass('d-none');
		setButtons();
	}

	setStage();

	$('.dropdown-item').click((e) => {
		const buttonType = $(e.target).data('button-type');
		const answerVal = $(e.target).data('answer-value');

		$(`span.selection-value-${buttonType}`).html(answerVal);

		submittedAnswers[questions[stage]][buttonType] = answerVal;

		if (typeof submittedAnswers[questions[stage]].sacrifice === 'undefined' ||
			typeof submittedAnswers[questions[stage]].priority === 'undefined') {
			$submit.addClass('d-none');
		} else {
			$submit.removeClass('d-none');
		}
	});

	$submit.click(() => {
		if (
			(submittedAnswers[questions[stage]].sacrifice === answerKey[questions[stage]].sacrifice)
			&&
			(submittedAnswers[questions[stage]].priority === answerKey[questions[stage]].priority)
		) {
			$('.feedback-correct').removeClass('d-none');
			$submit.addClass('d-none');
			if (stage !== 3) {
				$next.removeClass('d-none');
			}
			$('#answerButton').addClass('disabled').attr('disabled', true);
			$('#answerButton2').addClass('disabled').attr('disabled', true);
			answered[questions[stage]] = true;

			console.log(answered);
			if (Object.values(answered).indexOf(false) === -1) {
				console.log('activateCompletion');

				activateCompletion();
			}
		} else {
			$('.modal').modal('show');
		}
	});


	// Stage 0
	// Q: A woman who was in an abusive relationship three years ago feels lonely, but Instead of
	// socializing, she stays in the security of her apartment and avoids making friends or dating.
	// A: Safety, Belonging

	// Stage 1
	// Q: A man who recently decided to quit smoking after having a health scare is short-tempered
	// and irritable with his family because he’s craving cigarettes.
	// A: Physiological, Belonging

	// Stage 2
	// Q: After a recent break-in attempt,
	// a woman who lives alone stays up reading all night because she is afraid to go to bed,
	// making it difficult to work the next day and spend free time with others.
	// A: Safety, Belonging

	// Stage 3
	// Q: A very wealthy, talented artist decides to give up her lifelong dream of being a painter.
	// After being unable to sell her last four paintings,
	// she feels she will never be successful or recognized for her ability.
	// A: Esteem, Self-actualization

	// Stage 4
	// Q: A lawyer quits his job because his wife threatens to leave him if he doesn’t quit.
	// Quitting his job means leaving behind the opportunity to be very successful
	// and will likely ruin his professional reputation.
	// A: Belonging, Esteem

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	function reset() {
		submittedAnswers = {
			0: {
				priority: undefined,
				sacrifice: undefined,
			},
			1: {
				priority: undefined,
				sacrifice: undefined,
			},
			2: {
				priority: undefined,
				sacrifice: undefined,
			},
			3: {
				priority: undefined,
				sacrifice: undefined,
			},

		};

		answered = {
			0: false,
			1: false,
			2: false,
			3: false,
		};

		questions = [0, 1, 2, 3];
		questions = shuffle(questions);

		stage = 0;
		setStage();
	}

	$reset.click(() => {
		reset();
	});

	// Dropdown

	$('.dropdown-toggle').dropdown({
		boundary: 'window',
	});

	$('.dropdown-toggle, .droppable, .draggable, a').keydown((val) => {
		if (val.which === 13) {
			val.stopPropagation();
			val.preventDefault();
			$(val.target).click();
		}
	});

	$('.dropdown').on('shown.bs.dropdown', () => {
		console.log('dropdown open');

		$('.dropdown-item:visible:first').focus();
	});

	// Modal

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
	});
});
