$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');

	let stage = 0;

	// const audioFile = {
	// 	0: 0,
	// 	2: 1,
	// };

	// Full Clip: 1:11
	// Clip-1: 0:07
	// Clip-2: 0:08
	// Clip-3: 0:07

	const audioListened = {
		0: false,
		1: true,
		2: false,
		3: false,
		4: false,
		5: true,
	};

	const $play = $('.play');
	const audioJS = document.getElementById('audio-0');
	const audioJS1 = document.getElementById('audio-2');
	const audioJS2 = document.getElementById('audio-3');
	const audioJS3 = document.getElementById('audio-4');

	function stopPlaying() {
		document.getElementById(`audio-${stage}`).pause();
		document.getElementById(`audio-${stage}`).currentTime = 0;
		$play.html(`
		<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
	`);
		$play.prop('disabled', false);
	}

	function activateCompletion() {
		window.postAction({
			id: '9e8db353-55fd-4e32-98c8-6fad28160302',
		});
	}

	function handleAudioComplete() {
		setTimeout(() => {
			$next.removeClass('disabled');
			$next.attr('disabled', false);
		}, 50);
		audioListened[stage] = true;
		$play.prop('disabled', false);
		document.getElementById(`audio-${stage}`).currentTime = 0;
		// if (stage === 0) {
		$next.removeClass('disabled');
		$next.attr('disabled', false);
		// }
		$play.html(`
		<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
	`);
	}

	let timeStarted = -1;
	let timePlayed = 0;
  let currentDuration = 0; // eslint-disable-line

	function togglePlay() {
		if (document.getElementById(`audio-${stage}`).paused) {
			document.getElementById(`audio-${stage}`).play();
			$play.html(`
			<svg class="svg-inline--fa fa-pause fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg><!-- <i class="fas fa-pause mr-1"></i> --><span class="btn-action-text">Pause</span>
		`);
		} else {
			document.getElementById(`audio-${stage}`).pause();
			$play.html(`
			<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
			`);
		}
	}

	$play.click(() => {
		togglePlay();
	});

	function getDuration() {
		currentDuration = audioJS.duration;
	}

	// If audioJS metadata is loaded get duration
	if (audioJS.readyState > 0) {
		getDuration.call(audioJS);
	} else { // If metadata not loaded, use event to get it
		audioJS.addEventListener('loadedmetadata', getDuration);
	}

	function audioStartedPlaying() {
		// remember time user started the audioJS
		timeStarted = new Date().getTime() / 1000;
		console.log('audioStartedPlaying()');
	}

	function audioStoppedPlaying(event) {
		// console.log(`timePlayed: ${timePlayed} currentDuration: ${currentDuration}`);
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}

		// Count as complete only if end of audio was reached
		// console.log(`${timePlayed} or ${timePlayed + 0.1} >= ${currentDuration}`);
		console.log(`${timePlayed}`);
		console.log(`${currentDuration}`);

		if ((timePlayed + 0.1) >= currentDuration && event.type === 'ended') {
			console.log('complete');
			setTimeout(() => {
				handleAudioComplete();
			}, 200);
		} else if (timePlayed < currentDuration && event.type === 'ended') {
			console.log('not complete');
		}
	}

	audioJS.addEventListener('timeupdate', () => {
		const timeline = document.getElementById('duration');
		const s = parseInt(audioJS.currentTime % 60, 10);
		const m = parseInt((audioJS.currentTime / 60) % 60, 10);
		if (s < 10) {
			timeline.innerHTML = `${m}:0${s} `;
		} else {
			timeline.innerHTML = `${m}:${s} `;
		}
	}, false);

	let currentDuration1 = 0; // eslint-disable-line
	function getDuration1() {
		currentDuration1 = audioJS1.duration;
	}

	// If audioJS metadata is loaded get duration
	if (audioJS1.readyState > 0) {
		getDuration1.call(audioJS1);
	} else { // If metadata not loaded, use event to get it
		audioJS.addEventListener('loadedmetadata', getDuration1);
	}

	function audioStartedPlaying1() {
		// remember time user started the audioJS
		timeStarted = new Date().getTime() / 1000;
		console.log('audioStartedPlaying()');
	}

	function audioStoppedPlaying1(event) {
		// console.log(`timePlayed: ${timePlayed} currentDuration1: ${currentDuration1}`);
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}

		// Count as complete only if end of audio was reached
		console.log(`${timePlayed} or ${timePlayed + 0.1} >= ${currentDuration1}`);
		if ((timePlayed + 0.1) >= currentDuration1 && event.type === 'ended') {
			console.log('complete');
			setTimeout(() => {
				handleAudioComplete();
			}, 200);
		} else if (timePlayed < currentDuration1 && event.type === 'ended') {
			console.log('not complete');
		}
	}

	audioJS1.addEventListener('timeupdate', () => {
		const timeline = document.getElementById('duration1');
		const s = parseInt(audioJS1.currentTime % 60, 10);
		const m = parseInt((audioJS1.currentTime / 60) % 60, 10);
		if (s < 10) {
			timeline.innerHTML = `${m}:0${s} `;
		} else {
			timeline.innerHTML = `${m}:${s} `;
		}
	}, false);

	let currentDuration2 = 0; // eslint-disable-line
	function getDuration2() {
		currentDuration2 = audioJS2.duration;
	}

	// If audioJS metadata is loaded get duration
	if (audioJS2.readyState > 0) {
		getDuration2.call(audioJS2);
	} else { // If metadata not loaded, use event to get it
		audioJS.addEventListener('loadedmetadata', getDuration2);
	}

	function audioStartedPlaying2() {
		// remember time user started the audioJS
		timeStarted = new Date().getTime() / 1000;
		console.log('audioStartedPlaying()');
	}

	function audioStoppedPlaying2(event) {
		// console.log(`timePlayed: ${timePlayed} currentDuration2: ${currentDuration2}`);
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}

		// Count as complete only if end of audio was reached
		console.log(`${timePlayed} or ${timePlayed + 0.1} >= ${currentDuration2}`);
		if ((timePlayed + 0.1) >= currentDuration2 && event.type === 'ended') {
			console.log('complete');
			setTimeout(() => {
				handleAudioComplete();
			}, 200);
		} else if (timePlayed < currentDuration2 && event.type === 'ended') {
			console.log('not complete');
		}
	}

	audioJS2.addEventListener('timeupdate', () => {
		const timeline = document.getElementById('duration2');
		const s = parseInt(audioJS2.currentTime % 60, 10);
		const m = parseInt((audioJS2.currentTime / 60) % 60, 10);
		if (s < 10) {
			timeline.innerHTML = `${m}:0${s} `;
		} else {
			timeline.innerHTML = `${m}:${s} `;
		}
	}, false);

	let currentDuration3 = 0; // eslint-disable-line
	function getDuration3() {
		currentDuration3 = audioJS3.duration;
	}

	// If audioJS metadata is loaded get duration
	if (audioJS3.readyState > 0) {
		getDuration3.call(audioJS3);
	} else { // If metadata not loaded, use event to get it
		audioJS.addEventListener('loadedmetadata', getDuration3);
	}

	function audioStartedPlaying3() {
		// remember time user started the audioJS
		timeStarted = new Date().getTime() / 1000;
		console.log('audioStartedPlaying()');
	}

	function audioStoppedPlaying3(event) {
		// console.log(`timePlayed: ${timePlayed} currentDuration2: ${currentDuration2}`);
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}

		// Count as complete only if end of audio was reached
		console.log(`${timePlayed} or ${timePlayed + 0.1} >= ${currentDuration3}`);
		if ((timePlayed + 0.1) >= currentDuration3 && event.type === 'ended') {
			console.log('complete');
			setTimeout(() => {
				handleAudioComplete();
			}, 200);
		} else if (timePlayed < currentDuration3 && event.type === 'ended') {
			console.log('not complete');
		}
	}

	audioJS3.addEventListener('timeupdate', () => {
		const timeline = document.getElementById('duration3');
		const s = parseInt(audioJS3.currentTime % 60, 10);
		const m = parseInt((audioJS3.currentTime / 60) % 60, 10);
		if (s < 10) {
			timeline.innerHTML = `${m}:0${s} `;
		} else {
			timeline.innerHTML = `${m}:${s} `;
		}
	}, false);

	audioJS.addEventListener('play', audioStartedPlaying);
	audioJS.addEventListener('playing', audioStartedPlaying);

	audioJS.addEventListener('ended', audioStoppedPlaying);
	audioJS.addEventListener('pause', audioStoppedPlaying);

	audioJS1.addEventListener('play', audioStartedPlaying1);
	audioJS1.addEventListener('playing', audioStartedPlaying1);

	audioJS1.addEventListener('ended', audioStoppedPlaying1);
	audioJS1.addEventListener('pause', audioStoppedPlaying1);

	audioJS2.addEventListener('play', audioStartedPlaying2);
	audioJS2.addEventListener('playing', audioStartedPlaying2);

	audioJS2.addEventListener('ended', audioStoppedPlaying2);
	audioJS2.addEventListener('pause', audioStoppedPlaying2);

	audioJS3.addEventListener('play', audioStartedPlaying3);
	audioJS3.addEventListener('playing', audioStartedPlaying3);

	audioJS3.addEventListener('ended', audioStoppedPlaying3);
	audioJS3.addEventListener('pause', audioStoppedPlaying3);

	function setStageNext() {
		if (stage !== 1 && stage !== 5) {
			stopPlaying();
		}

		stage += 1;
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$next.removeClass('disabled');
		$next.attr('disabled', false);
		if (!audioListened[stage]) {
			$next.addClass('disabled');
			$next.attr('disabled', true);
		}

		$next.removeClass('invisible');
		if (stage === 5) {
			console.log('activateCompletion()');

			$next.addClass('invisible');
			activateCompletion();
		}

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}
	}

	function setStagePrevious() {
		if (stage !== 1 && stage !== 5) {
			stopPlaying();
		}

		stage -= 1;
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$next.removeClass('disabled');
		$next.attr('disabled', false);
		if (!audioListened[stage]) {
			$next.addClass('disabled');
			$next.attr('disabled', true);
		}

		$next.removeClass('invisible');
		if (stage === 5) {
			$next.addClass('invisible');
		}

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}
	}

	$next.click(() => {
		setStageNext();
	});

	$previous.click(() => {
		setStagePrevious();
	});

	$reset.click(() => {
		window.location.reload();
	});
});
