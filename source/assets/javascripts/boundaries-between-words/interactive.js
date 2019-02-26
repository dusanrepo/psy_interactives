$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');

	const $draggable = $('.draggable');
	// let dragComplete = false;

	const $play = $('.play');
	const $slowPlay = $('.slowPlay');

	const audioJS = document.getElementById('audio');
	let audioJSInterval;

	let stage = 0;

	function drawSeekLine() {
		// console.log('drawSeekLine');

		// playedLength();
		// $('.seek-line').removeAttr('style');
		// seekLineLeft = parseInt($('.seek-line').css('left'), 10);
		const amountPlayed = audioJS.currentTime / audioJS.duration;
		// console.log(`amountPlayed ${amountPlayed}`);

		const containerWidth = $('.image-container:visible').width(); // - seekLineLeft;
		// console.log(`containerWidth ${containerWidth}`);
		const newSeekLinePos = (amountPlayed * containerWidth); // + seekLineLeft;
		// if (newSeekLinePos < 11(seekLineLeft)) { // if it needs to offset
		// 	newSeekLinePos = 11;
		// }
		$('.seek-line').css('left', newSeekLinePos);
		// console.log(`timePlayed: ${timePlayed} currentDuration: ${currentDuration}`);
		// console.log(`newSeekLinePos: ${newSeekLinePos}`);
	}

	function stopPlaying() {
		audioJS.pause();
		audioJS.currentTime = 0;
		clearInterval(audioJSInterval);
		drawSeekLine();
		$play.html(`
		<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
	`);
		$slowPlay.html(`
		<svg class="svg-inline--fa fa-eject fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="eject" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 384v64c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32zM48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383 47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320z"></path></svg><!-- <i class="fas fa-eject mr-1"></i> --><span>Slow</span>
	`);
		$play.prop('disabled', false);
		$slowPlay.prop('disabled', false);
	}

	function handleLineMovement(draggable, lineDiv) {
		// console.log('handleLineMovement');

		const draggablePos = draggable.offset();
		// console.log(`draggablePos ${draggablePos}`);
		// console.log(`draggablePos left ${draggablePos.left}`);

		lineDiv.offset({
			// left: draggablePos.left + (draggable.width() / 2), // middle
			left: draggablePos.left + draggable.width(),
		});
	}

	function handleDraggablePositioning(draggable) {
		// console.log('handleDraggablePositioning');

		// draggables left as percentage of the images width
		const percentPos = draggable.data('percent-pos');
		const leftPosPx = percentPos * $('.image-container:visible').outerWidth();

		draggable.css('left', `${leftPosPx}px`);
		handleLineMovement(draggable, $(`.${$(draggable).data('draggable-name')}-line`));
	}

	function setDraggablePositions() {
		$draggable.toArray().forEach((draggable) => {
			// console.log(draggable);

			handleDraggablePositioning($(draggable));
		});
	}

	function setLines() {
		$draggable.toArray().forEach((draggable) => {
			// console.log(draggable);

			const lineDiv = $(`.${$(draggable).data('draggable-name')}-line`);
			handleLineMovement($(draggable), lineDiv);
		});
	}


	function setStage() {
		stopPlaying();
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$next.removeClass('invisible');
		if (stage === 3
		// || (stage === 1 && !dragComplete)
		// || (stage === 0 && !audioComplete)
		) {
			$next.addClass('invisible');
		}
		setLines();
	}

	const userAnswered = {
		where: false,
		are: false,
		the: false,
		silences: false,
		between: false,
	};

	$draggable.draggable({
		containment: $('.containment'),
		scroll: false,
		axis: 'x',
		start: (e) => {
			// console.log('start');

			const dragName = $(e.target).data('draggable-name');
			// console.log(dragName);

			userAnswered[dragName] = true;
			// console.log(userAnswered);
		},
		drag: (e, ui) => {
			// console.log('drag');
			// console.log(e.target);


			$draggable.removeClass('active');
			$(ui.draggable).addClass('active');

			const lineDiv = $(`.${$(e.target).data('draggable-name')}-line`);
			// move corresponding line to x coordinate
			handleLineMovement($(e.target), lineDiv);

			setTimeout(() => {
				handleLineMovement($(e.target), lineDiv);
			}, 20);
		},
		stop: function () { //eslint-disable-line
			// console.log('STOP');

			const draggable = $(this);
			const percentPos = parseFloat(draggable.css('left')) / $('.image-container:visible').outerWidth();
			// console.log(`draggablePos.left ${draggablePos.left}`);
			// console.log(`draggable.css('left') ${draggable.css('left')}`);
			// console.log(`PERCENTPOS ${percentPos}`);

			draggable.data('percent-pos', percentPos);

			// I don't remember why this was here
			// const leftPosPx = percentPos * $('.image-container:visible').outerWidth();
			// draggable.css('left', `${leftPosPx}px`);
		},
	});

	$draggable.keydown((val) => {
		console.log(val.which);
		// 39 right 38 up
		// 37 left 40 down
		const draggable = val.target;
		if (val.which === 38 || val.which === 39) {
			let draggableLeft = ((draggable.getBoundingClientRect().left + draggable.getBoundingClientRect().right) / 2) + 1; // eslint-disable-line
			draggableLeft += 2;

			$(draggable).simulate('drag', {
				x: draggableLeft,
			});
		} else if (val.which === 37 || val.which === 40) {
			let draggableLeft = ((draggable.getBoundingClientRect().left + draggable.getBoundingClientRect().right) / 2) - 1; // eslint-disable-line
			draggableLeft -= 2;

			$(draggable).simulate('drag', {
				x: draggableLeft,
			});
		}
	});

	$next.click(() => {
		stage += 1;
		setStage();
		$previous.removeClass('invisible');
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	$reset.click(() => {
		window.location.reload();
	});

	function handleAudioComplete() {
		$play.prop('disabled', false);
		$slowPlay.prop('disabled', false);
		audioJS.currentTime = 0;
		if (stage === 0) {
			$next.removeClass('invisible');
		}
		$play.html(`
		<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
	`);
		$slowPlay.html(`
		<svg class="svg-inline--fa fa-eject fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="eject" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 384v64c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32zM48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383 47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320z"></path></svg><!-- <i class="fas fa-eject mr-1"></i> --><span>Slow</span>
	`);
		// $play.html('Play');
		// $slowPlay.html('Slow');
		// audioComplete = true;
	}

	let timeStarted = -1;
	let timePlayed = 0;
	let currentDuration = 0; // eslint-disable-line

	// let seekLineLeft = parseInt($('.seek-line').css('left'), 10);
	// let seekLineLeft;

	// function playedLength() {
	// if (timeStarted > 0) {
	// 	const playedFor = (new Date().getTime() / 1000) - timeStarted;
	// 	timeStarted = -1;
	// 	// add the new amount of seconds played
	// 	timePlayed += playedFor;
	// }
	// const amountPlayed = audioJS.currentTime / audioJS.duration;
	// const containerWidth = $('.image-container').width() - seekLineLeft;

	// }

	// function drawSeekLine() {
	// 	console.log('drawSeekLine');

	// 	// playedLength();
	// 	// $('.seek-line').removeAttr('style');
	// 	// seekLineLeft = parseInt($('.seek-line').css('left'), 10);
	// 	const amountPlayed = audioJS.currentTime / audioJS.duration;
	// 	// console.log(`amountPlayed ${amountPlayed}`);

	// 	const containerWidth = $('.image-container:visible').width(); // - seekLineLeft;
	// 	// console.log(`containerWidth ${containerWidth}`);
	// 	const newSeekLinePos = (amountPlayed * containerWidth); // + seekLineLeft;
	// 	// if (newSeekLinePos < 11(seekLineLeft)) { // if it needs to offset
	// 	// 	newSeekLinePos = 11;
	// 	// }
	// 	$('.seek-line').css('left', newSeekLinePos);
	// 	// console.log(`timePlayed: ${timePlayed} currentDuration: ${currentDuration}`);
	// 	// console.log(`newSeekLinePos: ${newSeekLinePos}`);
	// }

	function togglePlay() {
		audioJS.playbackRate = 1;
		if (audioJS.paused) {
			// audioJSInterval = setInterval(drawSeekLine, 20);
			$slowPlay.prop('disabled', true);
			audioJS.play();
			$play.html(`
			<svg class="svg-inline--fa fa-pause fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg><!-- <i class="fas fa-pause mr-1"></i> --><span class="btn-action-text">Pause</span>
		`);
		} else {
			$slowPlay.prop('disabled', false);
			audioJS.pause();
			$play.html(`
			<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
			`);
			// clearInterval(audioJSInterval);
		}
	}

	function toggleSlowPlay() {
		audioJS.playbackRate = 0.5;
		if (audioJS.paused) {
			// audioJSInterval = setInterval(drawSeekLine, 20);
			$play.prop('disabled', true);
			audioJS.play();
			$slowPlay.html(`
			<svg class="svg-inline--fa fa-pause fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg><!-- <i class="fas fa-pause mr-1"></i> --><span class="btn-action-text">Pause</span>
		`);
		} else {
			$play.prop('disabled', false);
			audioJS.pause();
			$slowPlay.html(`
			<svg class="svg-inline--fa fa-eject fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="eject" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 384v64c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32zM48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383 47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320z"></path></svg><!-- <i class="fas fa-eject mr-1"></i> --><span>Slow</span>
		`);
			// clearInterval(audioJSInterval);
		}
	}

	$play.click(() => {
		// clearInterval(audioJSInterval);
		togglePlay();
	});

	$slowPlay.click(() => {
		// clearInterval(audioJSInterval);
		toggleSlowPlay();
	});

	// let resizeCount = 0;

	$(window).resize(() => {
		// console.log('resize');
		// $('.seek-line').removeAttr('style');
		// seekLineLeft = parseInt($('.seek-line').css('left'), 10);
		// redraw line
		// resizeCount += 1;

		// if (resizeCount % 2 === 0) {
		console.log('drawing, setting');

		drawSeekLine();
		setLines();
		setDraggablePositions();
		// repositionDraggables();
		// }
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
		console.log('SETTING INTERVAL');

		clearInterval(audioJSInterval);
		audioJSInterval = setInterval(drawSeekLine, 20);
		// remember time user started the audioJS
		timeStarted = new Date().getTime() / 1000;
		console.log('audioStartedPlaying()');
	}

	function audioStoppedPlaying(event) {
		console.log('CLEARING INTERVAL');

		// clearInterval(audioJSInterval);
		// console.log(`timePlayed: ${timePlayed} currentDuration: ${currentDuration}`);
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}
		// playedLength();

		// Count as complete only if end of audio was reached
		// console.log(`${timePlayed} or ${timePlayed + 0.1} >= ${currentDuration}`);

		if ((timePlayed + 0.1) >= currentDuration && event.type === 'ended') {
			console.log('complete');
			drawSeekLine();
			clearInterval(audioJSInterval);
			setTimeout(() => {
				handleAudioComplete();
			}, 200);
		} else if (timePlayed < currentDuration && event.type === 'ended') {
			console.log('not complete');
		}
	}

	audioJS.addEventListener('play', audioStartedPlaying);
	audioJS.addEventListener('playing', audioStartedPlaying);

	audioJS.addEventListener('ended', audioStoppedPlaying);
	audioJS.addEventListener('pause', audioStoppedPlaying);

	// audioJS.ontimeupdate = () => { drawSeekLine(); };
	// let audioJSInterval = setInterval(drawSeekLine, 20);
});
