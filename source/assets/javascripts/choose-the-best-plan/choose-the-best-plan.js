$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	const $answerBtnOne = $('.answer-btn-one');
	const $answerBtnTwo = $('.answer-btn-two');

	let step = 0;
	let answerOne;
	let answerTwo;

	const answerPcts = {
		'answer-a-one': '22%',
		'answer-a-two': '72%',
		'answer-b-one': '78%',
		'answer-b-two': '28%',
	};

	function fillAnswers() {
		$(`.${answerOne}`)
			.addClass('user-entry')
			.html(`
				<p class='my-0'><span class='sr-only'>Your answer</span> ${answerPcts[answerOne]}</p>
			`);

		$(`.${answerTwo}`)
			.addClass('user-entry')
			.html(`
				<p class='my-0'><span class='sr-only'>Your answer</span> ${answerPcts[answerTwo]}</p>
			`);
	}

	function resetAnswers() {
		$('.result-1').removeClass('user-entry');
		$('.result-2').removeClass('user-entry');

		$('td.answer-a-one.result-1').html(`
			<p class='my-0'>${answerPcts['answer-a-one']}</p>
		`);

		$('td.answer-a-two.result-2').html(`
			<p class='my-0'>${answerPcts['answer-a-two']}</p>
		`);

		$('td.answer-b-one.result-1').html(`
			<p class='my-0'>${answerPcts['answer-b-one']}</p>
		`);

		$('td.answer-b-two.result-2').html(`
			<p class='my-0'>${answerPcts['answer-b-two']}</p>
		`);
	}

	function setStage() {
		$(`#stage-${step}`).removeClass('d-none')
			.siblings('.stage')
			.addClass('d-none');
		if (step === 1) {
			if ($answerBtnTwo.hasClass('active')) {
				$next.removeClass('d-none');
			} else {
				$next.addClass('d-none');
			}
		}
	}

	$answerBtnOne.click((e) => {
		$next.removeClass('d-none');
		$next.click();
		$(e.target).addClass('active')
			.siblings('.answer-btn-one')
			.removeClass('active');
		answerOne = $(e.target).attr('id');
	});

	$answerBtnTwo.click((e) => {
		$next.removeClass('d-none');
		$next.click();
		$(e.target).addClass('active')
			.siblings('.answer-btn-two')
			.removeClass('active');
		answerTwo = $(e.target).attr('id');
	});

	$next.click(() => {
		console.log(`answerOne: ${answerOne}`);
		console.log(`answerTwo: ${answerTwo}`);

		resetAnswers();
		step += 1;
		setStage();
		$previous.removeClass('d-none');
		if (step === 6) {
			$next.addClass('d-none');
			fillAnswers();
		}
	});

	$previous.click(() => {
		step -= 1;
		setStage();
		$next.removeClass('d-none');
		if (step === 0) {
			$previous.addClass('d-none');
		}
	});

	$reset.click(() => {
		window.location.reload();
	});
});
