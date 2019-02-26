$(document).ready(() => {
	const $answerBtns = $('.answer-choices');
	const $answerRadios = $('.answer-btn');
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');
	const $examples = $('.example');
	const $stages = $('.stage');
	let currentExample = 1;
	let exampleStage = 0;
	let answerChoice;

	const answerClass = {
		1: 'no',
		2: 'yes',
		3: 'no',
		4: 'yes',
	};

	const answered = {
		1: false,
		2: false,
		3: false,
		4: false,
	};

	const seen = {
		1: false,
		2: false,
		3: false,
		4: false,
	};

	function hideContent() {
		$examples.addClass('d-none');
		$stages.addClass('d-none');
	}

	function showHeadline() {
		$(`.headline-${currentExample}`).removeClass('d-none');
	}

	function showStudy() {
		$(`.study-${currentExample}`).removeClass('d-none');
	}

	function showImage() {
		$(`.img-${currentExample}`).removeClass('d-none');
	}

	function showFeedbackP1() {
		$(`.instructions-${currentExample}`).addClass('d-none');
		$(`.feedback-${currentExample}.panel-1`).removeClass('d-none');
		$(`.feedback-${currentExample}.panel-1.alertable`).removeClass('d-none');
		$(`.feedback-${currentExample}.panel-1.alertable`).removeClass('alert alert-success');
		$(`.feedback-${currentExample}.panel-1.alertable`).removeClass('alert alert-danger');
		seen[currentExample] = true;
		if (answerChoice === answerClass[currentExample]) {
			$(`.feedback-${currentExample}.panel-1.alertable`).addClass('alert alert-success');
			$(`p.feedback-${currentExample}`).prepend('<span class="prepended"><strong>Correct! </strong> </span>');
		} else {
			$(`.feedback-${currentExample}.panel-1.alertable`).addClass('alert alert-danger');
			$(`p.feedback-${currentExample}`).prepend('<span class="prepended"><strong>Incorrect. </strong> </span>');
		}
	}

	function showFeedbackP2() {
		$(`.instructions-${currentExample}`).addClass('d-none');
		$(`.feedback-${currentExample}.panel-2`).removeClass('d-none');
		$(`.feedback-${currentExample}.panel-2.alertable`).removeClass('d-none');
		$(`.feedback-${currentExample}.panel-2.alertable`).removeClass('alert alert-success');
		$(`.feedback-${currentExample}.panel-2.alertable`).removeClass('alert alert-danger');
		answered[currentExample] = true;
		if (answerChoice === answerClass[currentExample]) {
			$(`.feedback-${currentExample}.panel-2.alertable`).addClass('alert alert-success');
			$(`p.feedback-${currentExample}`).prepend('<span class="prepended"><strong>Correct! </strong> </span>');
		} else {
			$(`.feedback-${currentExample}.panel-2.alertable`).addClass('alert alert-danger');
			$(`p.feedback-${currentExample}`).prepend('<span class="prepended"><strong>Incorrect. </strong> </span>');
		}
	}

	function showQuestion() {
		$(`.question-${currentExample}`).removeClass('d-none');
	}

	function showInstructions() {
		$(`.instructions-${currentExample}`).removeClass('d-none');
	}

	function normalizeAnswers() {
		$answerRadios.removeClass('alert-success')
			.removeClass('alert-secondary')
			.addClass('btn-primary')
			.prop('disabled', false);
	}

	function markAnswers() {
		$(`.btn.${answerClass[currentExample]}`).removeClass('btn-primary')
			.addClass('alert-success')
			.prop('disabled', true)
			.siblings('')
			.removeClass('btn-primary')
			.addClass('alert-secondary')
			.prop('disabled', true);
	}

	function showAnswerBtns() {
		if (answered[currentExample] === true) {
			markAnswers();
		}
		$answerBtns.removeClass('d-none');
	}

	function setStage() {
		$(`#stage-${currentExample}`).removeClass('d-none')
			.siblings('.stage')
			.addClass('d-none');
		$('.prepended').remove();
	}

	function setFirstPanel() {
		hideContent();
		setStage();
		showHeadline();
		showImage();
		showInstructions();
		$('.prepended').remove();
	}

	function setSecondPanel() {
		hideContent();
		setStage();
		showHeadline();
		showStudy();
		showImage();
		showQuestion();
		showAnswerBtns();
		$('.prepended').remove();
	}

	$answerBtns.click((e) => {
		$('.prepended').remove();
		e.stopPropagation();
		e.preventDefault();
		if ($(e.target).hasClass('yes')) {
			answerChoice = 'yes';
		} else {
			answerChoice = 'no';
		}

		showFeedbackP2();
		markAnswers();

		if (currentExample !== 4) {
			$next.removeClass('invisible');
		}
	});

	$next.click(() => {
		normalizeAnswers();
		exampleStage += 1;
		if (exampleStage === 1) {
			showFeedbackP1();
		} else if (exampleStage === 2) {
			setSecondPanel();
			if (answered[currentExample] === true) {
				showFeedbackP2();
			}
		} else if (exampleStage === 3) {
			currentExample += 1;
			exampleStage = 0;
			setFirstPanel();
			// if (seen[currentExample] === true) {
			// 	exampleStage += 1;
			// 	showFeedbackP1();
			// }
		}

		if (currentExample === 1 && exampleStage === 0) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		if (currentExample === 4 && exampleStage === 2) {
			$next.addClass('invisible');
		} else if (exampleStage === 2 && (answered[currentExample] === false)) {
			$next.addClass('invisible');
		}
	});

	$previous.click(() => {
		normalizeAnswers();
		exampleStage -= 1;

		if (exampleStage === 0) {
			setFirstPanel();
		} else if (exampleStage < 0 && currentExample !== 1) {
			exampleStage = 2;
			currentExample -= 1;
			setSecondPanel();
			showFeedbackP2();
		} else if (exampleStage === 1) {
			setFirstPanel();
			showFeedbackP1();
		}

		$next.removeClass('invisible');

		if (currentExample === 1 && exampleStage === 0) {
			$previous.addClass('d-none');
		}
	});

	$reset.click(() => {
		Object.keys(answered).forEach((v) => { answered[v] = false; });
		Object.keys(seen).forEach((v) => { seen[v] = false; });
		currentExample = 1;
		exampleStage = 0;
		$previous.addClass('d-none');
		$next.removeClass('invisible');
		hideContent();
		normalizeAnswers();
		setStage();
		setFirstPanel();
		$('.prepended').remove();
	});
});
