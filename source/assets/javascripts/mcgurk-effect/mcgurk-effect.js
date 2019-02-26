$(document).ready(() => {
	const $option = $('.option');

	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	let step = 1;

	const answerSubmitted = {
		1: null,
		2: null,
	};

	const $question = $('.button-row');
	// let disableAnswer = true;
	const videoControllerJS = document.getElementById('video-1');

	function handleVideoComplete() {
		videoControllerJS.currentTime = 0;
		// disableAnswer = false;
		$question.removeClass('d-none');
	}

	let timeStarted = -1;
	let timePlayed = 0;
	let currentDuration = 0; // eslint-disable-line

	function getDuration() {
		currentDuration = videoControllerJS.duration;
	}

	// If videoControllerJS metadata is loaded get duration
	if (videoControllerJS.readyState > 0) {
		getDuration.call(videoControllerJS);
	} else { // If metadata not loaded, use event to get it
		videoControllerJS.addEventListener('loadedmetadata', getDuration);
	}

	function videoStartedPlaying() {
		// remember time user started the videoControllerJS
		timeStarted = new Date().getTime() / 1000;
	}

	function videoStoppedPlaying(event) {
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}

		// Count as complete only if end of video was reached
		if (timePlayed >= currentDuration && event.type === 'ended') {
			console.log('complete');

			handleVideoComplete();
		} else if (timePlayed < currentDuration && event.type === 'ended') {
			console.log('not complete');

			// else if video ended and timePlayed is less than a minute
			$('#video-not-watched').modal('show');
		}
	}

	videoControllerJS.addEventListener('play', videoStartedPlaying);
	videoControllerJS.addEventListener('playing', videoStartedPlaying);

	videoControllerJS.addEventListener('ended', videoStoppedPlaying);
	videoControllerJS.addEventListener('pause', videoStoppedPlaying);

	$('#video-not-watched').on('hidden.bs.modal', () => {
		console.log('video nums reset');

		videoControllerJS.currentTime = 0;
		timePlayed = 0;
		getDuration();
	});

	// let disableAnswer2 = true;
	let videoWatched2 = false;
	const videoControllerJS2 = document.getElementById('video-2');

	function handleVideoComplete2() {
		videoControllerJS2.currentTime = 0;
		// disableAnswer2 = false;
		videoWatched2 = true;
		$question.removeClass('d-none');
	}

	let timeStarted2 = -1;
	let timePlayed2 = 0;
	let currentDuration2 = 0; // eslint-disable-line

	function getDuration2() {
		currentDuration2 = videoControllerJS2.duration;
	}

	// If videoControllerJS2 metadata is loaded get duration
	if (videoControllerJS2.readyState > 0) {
		getDuration2.call(videoControllerJS2);
	} else { // If metadata not loaded, use event to get it
		videoControllerJS2.addEventListener('loadedmetadata', getDuration2);
	}

	function videoStartedPlaying2() {
		// remember time user started the videoControllerJS2
		timeStarted2 = new Date().getTime() / 1000;
	}

	function videoStoppedPlaying2(event) {
		// Start time less then zero means stop event was fired without start event
		if (timeStarted2 > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted2;
			timeStarted2 = -1;
			// add the new amount of seconds played
			timePlayed2 += playedFor;
		}

		// Count as complete only if end of video was reached
		if (timePlayed2 >= currentDuration2 && event.type === 'ended') {
			console.log('complete');

			handleVideoComplete2();
		} else if (timePlayed2 < currentDuration2 && event.type === 'ended') {
			console.log('not complete');

			// else if video ended and timePlayed2 is less than a minute
			$('#video-not-watched').modal('show');
		}
	}

	videoControllerJS2.addEventListener('play', videoStartedPlaying2);
	videoControllerJS2.addEventListener('playing', videoStartedPlaying2);

	videoControllerJS2.addEventListener('ended', videoStoppedPlaying2);
	videoControllerJS2.addEventListener('pause', videoStoppedPlaying2);

	$('#video-not-watched').on('hidden.bs.modal', () => {
		console.log('video nums reset');

		videoControllerJS2.currentTime = 0;
		timePlayed2 = 0;
		getDuration2();
	});

	function optionClick(optId) {
		$next.removeClass('d-none');

		if (answerSubmitted[step] === '1') {
			$(`.feedback-${step}`).removeClass('d-none');
			$('#option1').removeClass('btn-primary')
				.addClass('alert-success')
				.prop('disabled', true)
				.siblings('')
				.removeClass('btn-primary')
				.addClass('alert-secondary')
				.prop('disabled', true);
		} else {
			$(`.feedback-${step}`).removeClass('d-none');
			$(`#option${optId}`).removeClass('btn-primary')
				.addClass('alert-danger')
				.prop('disabled', true)
				.siblings('')
				.removeClass('btn-primary')
				.addClass('alert-secondary')
				.prop('disabled', true);
		}
	}

	function optionIsComplete() {
		// reset button styles
		$option.removeClass('alert-success')
			.removeClass('alert-secondary')
			.removeClass('alert-danger')
			.addClass('btn-primary')
			.prop('disabled', false);

		if (answerSubmitted[step] !== null) {
			$next.removeClass('d-none');
			if (step === 3) {
				$next.addClass('d-none');
			}

			$(`#option${answerSubmitted[step]}`).click();
		} else {
			if (videoWatched2) {
				$question.removeClass('d-none');
			} else {
				$question.addClass('d-none');
			}
			$next.addClass('d-none');
		}
	}

	function showStep() {
		$(`#video-${step}`)
			.removeClass('d-none')
			.siblings()
			.addClass('d-none');
		$('.feedback').addClass('d-none');
		optionIsComplete();
	}

	$next.click(() => {
		step += 1;
		showStep();
		if (step === 3) {
			$('.content-1').addClass('d-none');
			$('.content-3').removeClass('d-none');
			$('.button-row').addClass('d-none');
		}
		$previous.removeClass('d-none');
	});

	$previous.click(() => {
		step -= 1;
		showStep();
		if (step === 1) {
			$previous.addClass('d-none');
		}
	});

	$reset.click(() => {
		window.location.reload();
	});

	$option.click((e) => {
		const optId = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
		answerSubmitted[step] = optId;
		optionClick(optId);
	});

	$option.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

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

	$(document).ready(() => {
		$('video').bind('contextmenu', () => false);
	});
});

