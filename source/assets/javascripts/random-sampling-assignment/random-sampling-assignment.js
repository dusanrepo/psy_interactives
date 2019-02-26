$(document).ready(() => {
	const $tryAgain = $('.try-again');
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	const $option = $('.rsra');

	let stage = 1;
	let answerClicked = null;

	const answerClass = {
		'stage-1': 'random-sampling',
		'stage-2': 'neither',
		'stage-3': 'random-assignment',
		'stage-4': 'both',
	};

	const answered = {
		'stage-1': false, // random-sampling, random-assignment, neither
		'stage-2': false,
		'stage-3': false,
		'stage-4': false,
	};

	function activateCompletion() {
		window.postAction({
			id: '584269ee-458e-450a-b1fc-dd0e63d6b2de',
		});
	}

	function validateAnswer() {
		if (answerClass[`stage-${stage}`] === answerClicked) {
			if (stage === 4) {
				activateCompletion();
			}
			return true;
		}

		return false;
	}

	function showFeedback() {
		$(`.feedback.feedback-${stage}`).removeClass('d-none')
			.parent('.feedback')
			.removeClass('d-none');
		$('.feedback.feedback-incorrect').addClass('d-none');
	}

	function correctAnswer() {
		if (stage === 1) {
			$('.sampling').removeAttr('data-target', '#incorrect');
		} else if (stage === 2) {
			$('.neither').removeAttr('data-target', '#incorrect');
		} else if (stage === 3) {
			$('.assignment').removeAttr('data-target', '#incorrect');
		} else if (stage === 4) {
			$('.both').removeAttr('data-target', '#incorrect');
		}
	}

	function handleAnswerSubmission() {
		if (validateAnswer()) {
			answered[`stage-${stage}`] = answerClicked;
			showFeedback();
			if (stage !== 4) {
				$next.removeClass('d-none');
			}
			$(`#${answerClicked}`).removeClass('btn-primary')
				.addClass('alert-success')
				.prop('disabled', true)
				.siblings('')
				.removeClass('btn-primary')
				.addClass('alert-secondary')
				.prop('disabled', true);
			answerClicked = null;
		}
	}

	function normalizeAnswerChoices() {
		$option.removeClass('alert-success')
			.removeClass('alert-secondary')
			.addClass('btn-primary')
			.prop('disabled', false);
		$option.attr('data-toggle', 'modal')
			.attr('data-target', '#incorrect');
	}

	function markAnswer() {
		normalizeAnswerChoices();
		const answer = answered[`stage-${stage}`];

		$(`#${answer}`).removeClass('btn-primary')
			.addClass('alert-success')
			.prop('disabled', true)
			.siblings('')
			.removeClass('btn-primary')
			.addClass('alert-secondary')
			.prop('disabled', true);
	}

	function setStage() {
		normalizeAnswerChoices();
		correctAnswer();
		$('.stage').addClass('d-none');
		$(`#stage-${stage}`).removeClass('d-none');
		$('.feedback').addClass('d-none');

		if (answered[`stage-${stage}`]) {
			showFeedback();
			markAnswer();
		} else {
			$next.addClass('d-none');
		}

		if (stage !== 1) {
			$('.answer-choices').removeClass('d-none');
		} else {
			$previous.addClass('d-none');
		}

		if (stage === 4) {
			$next.addClass('d-none');
		}
	}

	function showNextQuestion() {
		stage += 1;
		$previous.removeClass('d-none');
		setStage();
	}

	function showPreviousQuestion() {
		stage -= 1;
		$next.removeClass('d-none');
		setStage();
	}

	$next.click(() => {
		showNextQuestion();
	});

	$previous.click(() => {
		showPreviousQuestion();
	});

	$tryAgain.click(() => {
		$option.removeClass('active');
		$option.removeClass('focus');
	});

	$option.click((e) => {
		if (!answered[`stage-${stage}`]) {
			answerClicked = $(e.target).attr('id');
			$(e.target).addClass('active')
				.removeClass('active');
			handleAnswerSubmission();
		}
	});

	$reset.click(() => {
		Object.keys(answered).forEach((v) => { answered[v] = false; });
		normalizeAnswerChoices();
		stage = 1;
		setStage();
		$previous.addClass('d-none');
	});

	$option.click((e) => {
		$(e.target).addClass('active');
	});

	$('.form-check-input').focus((e) => {
		$(e.target).addClass('focus')
			.siblings($option)
			.removeClass('focus');
	});

	$(document).click(() => {
		$option.removeClass('focus');
		if (!$option.is(':focus') && !$('.modal').hasClass('show')) {
			$option.removeClass('active');
		}
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
	});

	setStage();
});
