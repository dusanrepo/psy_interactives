$(document).ready(() => {
	const $answerRadios = $('.answer-btn');
	const $answerContent = $('.answer-choices');
	const $definitionOther = $('.definition-choices-other');
	const $questions = $('.question');
	const $feedbacks = $('.feedback');
	const $studies = $('.study');
	const $stages = $('.stage');
	const $next = $('#next');
	const $previous = $('#previous');
	const $review = $('#review');
	const $reset = $('#reload');
	let currentStudy = 1;
	let studyQuestion = 1;
	// The activity will begin with a review of the three principles.
	// Students can select each definition to view it in the main box.
	// When they are ready they will click review.
	// Each study will present three questions one at a time.
	// After answering each question the student will get feedback and a new question will appear.
	// When all 3 are answered, a new study will appear.

	// user has 3 options: autonomy, beneficence, justice (left side, vertical stack; in that order)
	// "begin review" button at the bottom
	// ex. user clicks autonomy -> shows in main box -> user clicks review ->
	// 1 of 3 questions for a study appears -> student answers ->
	// feedback appears, show next button ->
	// new study appears when 3 of 3 questions are answered -> repeat from question phase

	// EXAMPLE studyQuestion - Question 1 4 7
	// EXAMPLE studyQuestion - Question 2 5 8
	// EXAMPLE studyQuestion - Question 3 6 9

	// Layout, 4-5 rows:
	// Buttons
	// Instructions
	// Study
	// Question & Answer
	// Feedback (when answered)

	const answerSubmitted = {
		1: false, // yes, no, not sure
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
	};

	function normalizeAnswerChoices() {
		$answerRadios.removeClass('active').prop('disabled', false);
	}

	function markAnswer() {
		normalizeAnswerChoices();
		const answer = answerSubmitted[studyQuestion];
		$answerRadios.removeClass('active');
		// highlight clicked answer
		$(`.${answer}`).addClass('active')
			.siblings('.answer-btn')
			.prop('disabled', true);
	}

	function showFeedback() {
		$(`.feedback.feedback-${studyQuestion}`).removeClass('d-none');
	}

	function showQuestion() {
		$feedbacks.addClass('d-none');
		$questions.addClass('d-none');
		$(`.question.question-${studyQuestion}`).removeClass('d-none');
		$answerContent.removeClass('d-none');
		// show next if already answered
		if (answerSubmitted[studyQuestion] === false) {
			$next.addClass('invisible');
		} else {
			$next.removeClass('invisible');
		}
	}

	function handleAnswerClick(answer) {
		if (answerSubmitted[studyQuestion] === false && answer !== '') { // if not answered
			normalizeAnswerChoices();
			answerSubmitted[studyQuestion] = answer; // set answer
			$answerRadios.removeClass('active');

			// highlight clicked answer
			$(`.${answer}`).addClass('active').siblings('.answer-btn').prop('disabled', true);
		}
		// show feedback
		showFeedback();
	}

	function showStudy() {
		// hide content
		$stages.addClass('d-none');
		$studies.addClass('d-none');
		// show stage
		$(`#stage-${currentStudy}`).removeClass('d-none');
		// show study title
		$(`.study-title.study-${currentStudy}`).removeClass('d-none');
		// show instructions
		$(`.instructions.instructions-${currentStudy}`).removeClass('d-none');
		// show study
		$(`.study.study-${currentStudy}`).removeClass('d-none');
	}

	function answeredContent() {
		if (answerSubmitted[studyQuestion] !== false) {
			showFeedback();
			markAnswer();
			if (studyQuestion !== 9) {
				$next.removeClass('invisible');
			} else {
				$next.addClass('invisible');
			}
		}
	}

	function showStudyDefinitionChoices() {
		$definitionOther.removeClass('d-none');
	}

	function beginReview() {
		// hide content: #stage-0
		$('#stage-0').addClass('d-none');
		$review.addClass('d-none');
		// show study 1, question 1, show choices
		showStudy();
		showQuestion();
		showStudyDefinitionChoices();
		answeredContent();
		$previous.removeClass('d-none');
	}

	$answerRadios.click((e) => {
		const answerClicked = $(e.target).val();
		handleAnswerClick(answerClicked);
		if (studyQuestion !== 9) {
			$next.removeClass('invisible');
		}
	});

	$review.click(() => {
		beginReview();
	});

	$reset.click(() => {
		$stages.addClass('d-none');
		$studies.addClass('d-none');
		$answerContent.addClass('d-none');
		$definitionOther.addClass('d-none');
		$('.definition').addClass('d-none');
		Object.keys(answerSubmitted).forEach((v) => { answerSubmitted[v] = false; });
		currentStudy = 1;
		studyQuestion = 1;
		$previous.addClass('d-none');
		$next.addClass('invisible');
		$review.removeClass('d-none');
		$('button').removeClass('active');
		$('#stage-0').removeClass('d-none');
		$('button').prop('disabled', ''); // re-enable answer buttons
	});

	$next.click(() => {
		studyQuestion += 1;
		// if studyQuestion is 4+ set to Study 2, if 7+ set to study 3
		if (studyQuestion === 4) {
			currentStudy = 2;
			showStudy();
		} else if (studyQuestion === 7) {
			currentStudy = 3;
			showStudy();
		}
		showQuestion();
		normalizeAnswerChoices();
		answeredContent();
		$previous.removeClass('d-none');
	});

	$previous.click(() => {
		if (currentStudy === 1 && studyQuestion === 1) {
			$stages.addClass('d-none');
			$studies.addClass('d-none');
			$answerContent.addClass('d-none');
			$definitionOther.addClass('d-none');
			$('.definition').addClass('d-none');
			$previous.addClass('d-none');
			$next.addClass('invisible');
			$review.removeClass('d-none');
			$('#stage-0').removeClass('d-none');
		} else {
			studyQuestion -= 1;
			if (studyQuestion === 6) {
				currentStudy = 2;
				showStudy();
			} else if (studyQuestion === 3) {
				currentStudy = 1;
				showStudy();
			}
			showQuestion();
			normalizeAnswerChoices();
			answeredContent();
			if (studyQuestion !== 9) {
				$next.removeClass('invisible');
			}
		}
	});

	$(document).click(() => {
		$('.definition-btn-top').removeClass('active');

		if (!$('[data-toggle="tooltip"]').is(':focus')) {
			$('[data-toggle="tooltip"]').data('clicked', false).tooltip('hide');
		}
	});

	$('.yes').attr('value', 'yes');
	$('.yes-in').attr('value', 'yes');
	$('.no').attr('value', 'no');
	$('.no-in').attr('value', 'no');
	$('.not-sure').attr('value', 'not-sure');
	$('.not-sure-in').attr('value', 'not-sure');

	$('[data-toggle="tooltip"]').tooltip({
		trigger: 'manual',
	});

	$('[data-toggle="tooltip"]').click((e) => {
		if ($(e.target).data('clicked') !== true) {
			$('[data-toggle="tooltip"]').data('clicked', false).tooltip('hide');
			$(e.target).data('clicked', true);
			$(e.target).tooltip('show');
		} else {
			$(e.target).data('clicked', false);
			$(e.target).tooltip('hide');
		}
	});

	$('[data-toggle="tooltip"]').mouseenter((e) => {
		if ($(e.target).data('clicked') !== true) {
			$('[data-toggle="tooltip"]').data('clicked', false).tooltip('hide');
			$(e.target).focus().tooltip('show');
		}
	});

	$('[data-toggle="tooltip"]').mouseleave((e) => {
		if ($(e.target).data('clicked') !== true) {
			$(e.target).blur();
			$(e.target).tooltip('hide');
		}
	});
});
