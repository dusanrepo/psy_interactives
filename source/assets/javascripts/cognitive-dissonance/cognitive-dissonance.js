$(document).ready(() => {
	const $option = $('.option');
	const $question = $('.question');
	let disableAnswer = true;

	const videoControllerJS = document.getElementById('video');

	function handleVideoComplete() {
		videoControllerJS.currentTime = 0;
		disableAnswer = false;
		$option.attr('data-target', '#incorrect');
		$question.removeClass('d-none');
		$('#option3').removeAttr('data-target');
		$option.click((e) => {
			if (disableAnswer === false) {
        const optId = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
				$option.removeClass('active');
				$(e.target).addClass('active');

				if (optId === 3 || optId === '3') {
					$('.feedback.feedback-correct').removeClass('d-none');
					disableAnswer = true;
					$option.removeAttr('data-target', '#incorrect');
					$option.removeClass('active')
						.toggleClass('btn-primary btn-primary-temp');
					$(e.target).addClass('active')
						.toggleClass('btn-primary btn-primary-temp');
				}
			}
		});
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
		// if (timePlayed >= currentDuration && event.type === 'ended') {

		if (timePlayed >= 60 && event.type === 'ended') {
			handleVideoComplete();
		} else if (timePlayed < 60 && event.type === 'ended') {
			// else if video ended and timePlayed is less than a minute
			$('#video-not-watched').modal('show');
		}
	}

	videoControllerJS.addEventListener('play', videoStartedPlaying);
	videoControllerJS.addEventListener('playing', videoStartedPlaying);

	videoControllerJS.addEventListener('ended', videoStoppedPlaying);
	videoControllerJS.addEventListener('pause', videoStoppedPlaying);

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

	$('#video-not-watched').on('hidden.bs.modal', () => {
		videoControllerJS.currentTime = 0;
		timePlayed = 0;
		currentDuration = 0;
	});

	$(document).ready(() => {
		$('video').bind('contextmenu', () => false);
	});
});
