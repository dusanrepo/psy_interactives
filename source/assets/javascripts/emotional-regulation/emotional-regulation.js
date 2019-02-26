$(document).ready(() => {
	let $step = 1;
	const $next = $('#next');
	const $stage = $('#stage');
	const $reload = $('#reload');
	const $previous = $('#previous');
	const $submit = $('#submit');
	const $radios = $('input');
	const $question1answers = $('.question1-answers');
	const $question2answers = $('.question2-answers');
	const $question3answers = $('.question3-answers');
	const $question4answers = $('.question4-answers');

	const $stage1 = $('#stage1');
	const $question1 = $('#question1');

	let answersChosen = {
		question1: null,
		question2: null,
		question3: null,
		question4: null,
	};

	let i;
	for (i = 1; i < 5; i += 1) {
		window[`$question${i}`] = $(`#question${i}`);
	}
	for (i = 1; i < 13; i += 1) {
		window[`$option${i}`] = $(`.option${i}`);
		window[`$answer${i}`] = $(`#answer${i}`);
	}
	for (i = 1; i < 5; i += 1) {
		window[`$stage${i}`] = $(`#stage${i}`);
		window[`$stage${i}Answers`] = $(`#stage${i}-answers`);
	}

	function toggleAnswerChoices(toggleState) {
		// Hide all answer choices
		for (i = 1; i < 5; i += 1) {
			$(`.stage${i}`).addClass('d-none');
		}

		for (i = 1; i < 13; i += 1) {
			$(`.option${i}`).addClass('d-none');
		}

		// To show/hide: .stage1 (col, row) & .option1 (label, input)
		if (toggleState === 'show') {
			$(`.stage${$step}`).removeClass('d-none');
			$(`.question${$step}-answers`).removeClass('d-none');
		} else {
			$(`.stage${$step}`).addClass('d-none');
			$(`.question${$step}-answers`).addClass('d-none');
		}
	}

	function toggleAnswerBadge(toggleState) {
		const question = `question${$step}`;
		const currentAnswerChosen = answersChosen[question];
		// Hide all answer badges
		for (i = 1; i < 5; i += 1) {
			$(`#stage${i}-answers`).addClass('d-none');
			$(`.stage${i}-answers`).addClass('d-none');
		}

		for (i = 1; i < 13; i += 1) {
			$(`.answer${i}`).addClass('d-none');
		}

		// To show/hide: .answer1 (self) & #stage1-answers (col) & .stage1-answers (row parent)
		if (toggleState === 'show') {
			$(`.answer${currentAnswerChosen}`).removeClass('d-none');
			$(`#stage${$step}-answers`).removeClass('d-none');
			$(`.stage${$step}-answers`).removeClass('d-none');
		} else {
			$(`.answer${currentAnswerChosen}`).addClass('d-none');
			$(`#stage${$step}-answers`).addClass('d-none');
			$(`.stage${$step}-answers`).addClass('d-none');
		}
	}

	function toggleQuestion(questionAction) {
		// hide all questions
		for (i = 1; i < 5; i += 1) {
			$(`#question${i}`).addClass('d-none');
		}

		// To show/hide: #question1
		if (questionAction === 'show') {
			$(`#question${$step}`).removeClass('d-none');
		} else {
			$(`#question${$step}`).addClass('d-none');
		}
	}

	function stageSetup(questionAction, answerChoice, answerBadge) {
		toggleQuestion(questionAction);
		toggleAnswerChoices(answerChoice); // show answerChoices if unanswered
		toggleAnswerBadge(answerBadge); // else show badge if answered
	}

	$next.on('click', () => {
		$step += 1;
		const question = `question${$step}`;
		const currentAnswerChosen = answersChosen[question];
		if (currentAnswerChosen == null) { // Unanswered question
			// hide next
			$next.parent().addClass('invisible');
			// show question, show choices, hide badge
			stageSetup('show', 'show', 'hide');
		} else {
			// show next
			$next.parent().removeClass('invisible');
			// show question, hide choices, show badge
			stageSetup('show', 'hide', 'show');
		}

		// hide submit/feedback button
		$submit.addClass('invisible');

		if ($step === 4) {
			$next.parent().addClass('invisible');
		}

		if ($step > 1) {
			$previous.parent().removeClass('d-none');
		} else {
			$previous.parent().addClass('d-none');
		}
	});

	$previous.on('click', () => {
		const question = `question${$step}`;
		const currentAnswerChosen = answersChosen[question];
		if (currentAnswerChosen !== null && !$(`.answer${currentAnswerChosen}`).hasClass('d-none') && $step === 1) { // badge is showing & step 1
			// show question, show choices, hide badge
			stageSetup('show', 'show', 'hide');
			// hide previous
			$previous.parent().addClass('d-none');
			// show submit/feedback button
			$submit.removeClass('invisible');
		} else if (currentAnswerChosen !== null && !$(`.answer${currentAnswerChosen}`).hasClass('d-none')) { // badge is showing, not step 1
			// show question, show choices, hide badge
			stageSetup('show', 'show', 'hide');
			// show submit/feedback button
			$submit.removeClass('invisible');
		} else {
			// back a step
			$step -= 1;
			// show question, hide choices, show badge
			stageSetup('show', 'hide', 'show');
			// hide submit/feedback button
			$submit.addClass('invisible');
		}

		if ($step === 4) {
			$next.parent().addClass('invisible');
		} else {
			$next.parent().removeClass('invisible');
		}
	});

	$submit.click(() => {
		// show next button
		if ($step < 4) {
			$next.parent().removeClass('invisible');
		}
		// show question, hide answer choices, show badge for selection
		stageSetup('show', 'hide', 'show');
		// show previous button
		$previous.parent().removeClass('d-none');
		// hide submit/feedback button
		$submit.addClass('invisible');
	});

	function radioActivation(num) {
		$(`.option${num}`).addClass('active')
			.siblings('label')
			.removeClass('active');

		// show feedback/submit button
		$submit.removeClass('invisible');
	}

	function resetStages() {
		for (i = 1; i < 5; i += 1) {
			this.eval(`$stage${i}`).removeClass('d-none');
			this.eval(`$stage${i}Answers`).removeClass('d-none');
			this.eval(`$stage${i}Answers`).children('badge').removeClass('d-none');

			this.eval(`$stage${i}`).parent().addClass('d-none');
			this.eval(`$stage${i}Answers`).parent().addClass('d-none');
			this.eval(`$stage${i}Answers`).children('badge').addClass('d-none');
		}

		$radios.prop('checked', false);
	}

	function resetQuestions() {
		for (i = 1; i < 5; i += 1) {
			this.eval(`$question${i}`).addClass('d-none');
		}
	}

	$reload.on('click', () => {
		$step = 1;
		$stage.val($step);
		resetStages();
		resetQuestions();
		$('.badge').addClass('d-none');
		$stage1.removeClass('d-none');
		$stage1.parent().removeClass('d-none');
		$question1.removeClass('d-none');
		$next.parent().removeClass('invisible');
		$previous.parent().addClass('d-none');

		answersChosen = {
			question1: null,
			question2: null,
			question3: null,
			question4: null,
		};
	});

	$previous.parent().addClass('d-none');

	function questionOne() {
		const num = $(this).attr('id').match(/\d+$/)[0];
		answersChosen.question1 = num;
		radioActivation(num);
	}

	function questionTwo() {
		const num = $(this).attr('id').match(/\d+$/)[0];
		answersChosen.question2 = num;
		radioActivation(num);
	}

	function questionThree() {
		const num = $(this).attr('id').match(/\d+$/)[0];
		answersChosen.question3 = num;
		radioActivation(num);
	}

	function questionFour() {
		const num = $(this).attr('id').match(/\d+$/)[0];
		answersChosen.question4 = num;
		radioActivation(num);
	}

	$question1answers.click(questionOne);
	$question2answers.click(questionTwo);
	$question3answers.click(questionThree);
	$question4answers.click(questionFour);

	$('input').focus((e) => {
		$(e.target).parent('label').addClass('active');
	});
});
