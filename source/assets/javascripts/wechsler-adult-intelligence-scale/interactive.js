$(document).ready(() => {
	const $infoBtn = $('.info-btn');
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	let selectedClass;
	let stage = 0;

	let timerStarted;
	let timerInterval;

	function startTimer() {
		timerStarted = new Date();
	}

	function stopTimer() {
		clearInterval(timerInterval);
	}

	function clearTimer() {
		const textTime = '00:00';
		$('.time').html(textTime);
	}

	function handleTimer() {
		let textTime = ((new Date() - timerStarted) / 1000).toFixed(2);
		textTime = textTime.toString().padStart(5, '0');
		textTime = textTime.replace(/\./g, ':');
		$('.time').html(textTime);
	}

	function setStage() {
		$(`.${selectedClass}`).removeClass('d-none')
			.siblings('.stage')
			.addClass('d-none');
		$next.removeClass('d-none');
		$previous.removeClass('d-none');
	}

	function stageHandler() {
		$(`.${selectedClass}-${stage}`).removeClass('d-none')
			.siblings('.step')
			.addClass('d-none');
		$next.removeClass('d-none');
	}

	$infoBtn.click((e) => {
		stage = 1;
		selectedClass = $(e.target).attr('id');
		console.log(`Selected class is ${selectedClass}`);
		$(e.target).addClass('active')
			.siblings($infoBtn)
			.removeClass('active');
		setStage();
		stageHandler();
		console.log(`Current stage ${stage}`);
	});

	$next.click(() => {
		stage += 1;
		stageHandler();
		console.log('Timer stop');
		// timer.stop();
		clearTimer();
		console.log(`selectedClass: ${selectedClass}, stage: ${stage}`);
		if (stage === 4) {
			$('.intro-text').html('Select one of the buttons below to explore examples of the kinds of questions included in another index.');
			$(`.btn#${selectedClass}`)
				.removeClass('btn-primary')
				.addClass('btn-success');
			$(`.${selectedClass}`).addClass('d-none');
			$('.stage').addClass('d-none');
			$('.step').addClass('d-none');
			$('.home').removeClass('d-none');
			$next.addClass('d-none');
			$previous.addClass('d-none');
			stage = 0;
			selectedClass = '';
			$($infoBtn).removeClass('active');
			console.log(`Selected class is ${selectedClass}`);
			console.log(`Current stage (stage is equal to 4) ${stage}`);
		}

		console.log(selectedClass === 'processing');
		console.log(stage === 3);

		if (selectedClass === 'processing' && stage === 3) {
			console.log('timing');
			$next.addClass('d-none');
			$previous.addClass('d-none');
			$('.finished').removeClass('d-none');
			$('.time').removeClass('font-weight-bold');
			startTimer();
			timerInterval = setInterval(handleTimer, 50);
			// timer.start({ precision: 'secondTenths' });
			// timer.addEventListener('secondTenthsUpdated', () => {
			// $('.time').html(timer.getTimeValues().toString(['seconds', 'secondTenths']));
			// });
		}

		// if (stage === 0) {
		// 	$(`.btn#${selectedClass}`)
		// 		.removeClass('btn-primary')
		// 		.addClass('alert-success');
		// }
	});

	$previous.click(() => {
		if (stage > 1) {
			stage -= 1;
			stageHandler();
		} else {
			$('.home').removeClass('d-none')
				.siblings('.stage')
				.addClass('d-none');
			$previous.addClass('d-none');
			$next.addClass('d-none');
		}
	});

	$reset.click(() => {
		window.location.reload();
	});

	$('.finished').click(() => {
		$next.removeClass('d-none');
		$previous.removeClass('d-none');
		// timer.pause();
		stopTimer();
		$('.time').addClass('font-weight-bold');
		$('.finished').addClass('d-none');
	});

	function buttonStack() {
		if ($(window).width() < 700) {
			$('.btn-group-toggle').addClass('btn-group-vertical').removeClass('btn-group');
		} else {
			$('.btn-group-toggle').addClass('btn-group').removeClass('btn-group-vertical');
		}
	}
	buttonStack();

	$(window).resize(() => {
		buttonStack();
	});
});
