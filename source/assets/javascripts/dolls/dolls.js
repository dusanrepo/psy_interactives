$(document).ready(() => {
	let $step = 1;
	const $stage = $('#stage');
	const $previous = $('#previous');
	const $next = $('#next');
	const $reload = $('#reload');
	const $testQuestion = $('#test-question');
	const $testQuestionFail = $('#test-question-fail');
	const $testQuestionPass = $('#test-question-pass');
	const $testQuestionwrapper = $('.test-question-wrapper');
	const $option1 = $('#option1');
	const $option2 = $('#option2');

	function setStage(stage, direction) {
		$(`#room${$step}`).addClass('d-none');
		const step = parseFloat(stage) + direction;
		$(`#room${step}`).removeClass('d-none');
		$stage.val(step);
		$step = step;
		if ($step === 1) {
			$previous.addClass('d-none');
		}
	}

	function resetAssets() {
		$('#room1').removeClass('d-none');
		$('#room2').addClass('d-none');
		$('#room3').addClass('d-none');
		$('#room4').addClass('d-none');
		$('#room5').addClass('d-none');
	}

	$previous.on('click', () => {
		setStage($stage.val(), -1);

		if ($step < 1) {
			$previous.addClass('d-none');
			$('#room1').removeClass('d-none');
		}
		if ($step < 5) {
			$testQuestionwrapper.addClass('d-none');
			$next.removeClass('d-none');
		}
	});

	$next.on('click', () => {
		setStage($stage.val(), 1);
		$previous.removeClass('d-none');

		if ($step === 5) {
			$testQuestionwrapper.removeClass('d-none');
			$next.addClass('d-none');
		}
	});

	$option1.on('click', () => {
		$testQuestion.addClass('d-none');
		$testQuestionPass.addClass('d-none');
		$testQuestionFail.removeClass('d-none');
		$next.addClass('d-none');
		$option1.removeClass('btn-secondary');
		$option1.addClass('btn-primary-blue');
		$option2.addClass('btn-light');
	});

	$option2.on('click', () => {
		$testQuestion.addClass('d-none');
		$testQuestionFail.addClass('d-none');
		$testQuestionPass.removeClass('d-none');
		$next.addClass('d-none');
		$option2.removeClass('btn-secondary');
		$option2.addClass('btn-primary-blue');
		$option1.addClass('btn-light');
		$option1.prop('disabled', true);
	});

	$reload.on('click', () => {
		$step = 1;
		$stage.val($step);
		$testQuestionwrapper.addClass('d-none');
		$testQuestion.removeClass('d-none');
		$testQuestionFail.addClass('d-none');
		$testQuestionPass.addClass('d-none');
		$previous.addClass('d-none');
		$next.removeClass('d-none');
		$option1.removeClass();
		$option2.removeClass();
		$option1.addClass('btn btn-secondary');
		$option2.addClass('btn btn-secondary');
		$option1.prop('disabled', false);
		$option2.prop('disabled', false);
		resetAssets();
	});
});
