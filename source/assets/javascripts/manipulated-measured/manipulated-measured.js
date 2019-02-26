$(document).ready(() => {
	const $answerBtn = $('.answer-btn');
	const $prompts = $('.prompt');
	const $feedback = $('.feedback');
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');

	let answerChoice;
	// 10 questions
	// random order
	// measured answer on left 6 col - always reads 'measured'
	// manipulated answer on right 6 col - always reads 'measured'
	// when an answer is clicked:
	// color correct answer green
	// color incorrect answer red
	// show feedback; feedback is the same for either answer -- colors of answer buttons change
	// next button advances from feedback
	// show next button only after question is answered

	const answerClass = {
		'hair-color': 'manipulated',
		'cell-1': 'manipulated',
		'cell-2': 'measured',
		'task-1': 'manipulated',
		'task-2': 'measured',
		'photo-1': 'manipulated',
		'skin-conductance': 'measured',
		'brain-activity': 'measured',
		'photo-2': 'measured',
	};

	const answered = {
		'hair-color': false,
		'cell-1': false,
		'cell-2': false,
		'task-1': false,
		'task-2': false,
		'photo-1': false,
		'skin-conductance': false,
		'brain-activity': false,
		'photo-2': false,
	};

	let questionHistory = [];
	let questionHistoryIndex = 0;

	let currentQuestionClass;

	function normalizeAnswers() {
		$answerBtn.removeClass('alert-success')
			.removeClass('alert-secondary')
			.addClass('btn-primary')
			.prop('disabled', false);
	}

	function markAnswers() {
		normalizeAnswers();
		$(`.btn.${answerClass[currentQuestionClass]}`).removeClass('btn-primary')
			.addClass('alert-success')
			.prop('disabled', true)
			.siblings('')
			.removeClass('btn-primary')
			.addClass('alert-secondary')
			.prop('disabled', true);
	}

	function confirmAnswer() {
		answered[currentQuestionClass] = true;
	}

	// if it has the class of the correct answer (show correct)
	// else show incorrect

	function showFeedback() {
		$(`.feedback.${answerClass[currentQuestionClass]}`).removeClass('alert alert-danger');
		$(`.feedback.${answerClass[currentQuestionClass]}`).removeClass('alert alert-success');
		$(`.feedback.${answerClass[currentQuestionClass]}`).removeClass('d-none');
		if (answerChoice === answerClass[currentQuestionClass]) {
			$(`.feedback.${answerClass[currentQuestionClass]}`).addClass('alert alert-success');
			$(`p.${answerClass[currentQuestionClass]}`).prepend('<span class="prepended"><strong>Correct! </strong> </span>');
		} else {
			$(`.feedback.${answerClass[currentQuestionClass]}`).addClass('alert alert-danger');
			$(`p.${answerClass[currentQuestionClass]}`).prepend('<span class="prepended"><strong>Incorrect. </strong> </span>');
		}
	}

	function setStage() {
		$prompts.addClass('d-none');
		$feedback.addClass('d-none');
		$(`.${currentQuestionClass}`).removeClass('d-none'); // show question
	}

	function showNextQuestion() {
		$previous.removeClass('d-none');
		if (questionHistory[questionHistoryIndex + 1] === undefined) {
			// generate new question
			const randomKey = Math.floor(Math.random() * 8); // pick a number 0-8
			const classKey = Object.keys(answerClass)[randomKey]; // pick a class with the num
			if (questionHistory.indexOf(classKey) === -1) { // result is -1 if not duplicate
				currentQuestionClass = classKey; // track current question
				questionHistory.push(classKey); // save question to history
				setStage();
				questionHistoryIndex += 1;
				// normalize classes for answer buttons
				normalizeAnswers();
			} else {
				// if !== -1 then generate another question
				showNextQuestion();
			}
			$next.addClass('invisible');
		} else if (answered[questionHistory[questionHistoryIndex + 1]] === true) {
			// not null & question is answered
			questionHistoryIndex += 1;
			currentQuestionClass = questionHistory[questionHistoryIndex]; // track current question
			setStage();
			showFeedback();
			markAnswers();
		} else if (answered[questionHistory[questionHistoryIndex + 1]] === false) {
			// not null & question is not answered
			questionHistoryIndex += 1;
			currentQuestionClass = questionHistory[questionHistoryIndex]; // track current question
			setStage();
			$next.addClass('invisible');
			normalizeAnswers();
		}
	}

	function showPreviousQuestion() {
		$next.removeClass('invisible');
		questionHistoryIndex -= 1;
		currentQuestionClass = questionHistory[questionHistoryIndex]; // track current question
		setStage();
		showFeedback();
		markAnswers();
	}

	function firstQuestion() {
		const randomKey = Math.floor(Math.random() * 8); // pick a number 0-8
		const classKey = Object.keys(answerClass)[randomKey]; // pick a class with the num
		currentQuestionClass = classKey; // track current question
		questionHistory.push(classKey); // save question to history
		$(`.${classKey}`).removeClass('d-none'); // show question
	}

	firstQuestion();

	function handleAnswerClick() {
		markAnswers();
		showFeedback();
		if (questionHistoryIndex < 7) {
			$next.removeClass('invisible');
		}
	}

	$answerBtn.click((e) => {
		$('.prepended').remove();
		e.stopPropagation();
		e.preventDefault();
		if ($(e.target).hasClass('measured-btn')) {
			answerChoice = 'measured';
		} else {
			answerChoice = 'manipulated';
		}
		confirmAnswer();
		handleAnswerClick();
	});

	$next.click(() => {
		showNextQuestion();
		if (questionHistoryIndex >= 7) {
			$next.addClass('invisible');
		}
		$('.prepended').remove();
	});

	$previous.click(() => {
		showPreviousQuestion();
		if (questionHistoryIndex === 0) {
			$previous.addClass('d-none');
		}
		$('.prepended').remove();
	});

	$reset.click(() => {
		questionHistory = [];
		questionHistoryIndex = 0;
		$next.addClass('invisible');
		$previous.addClass('d-none');
		normalizeAnswers();
		firstQuestion();
		setStage();
		$('.prepended').remove();
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$reset.focus(() => {
		$('label').removeClass('focus');
	});

	$('.form-check-input').focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});
});
