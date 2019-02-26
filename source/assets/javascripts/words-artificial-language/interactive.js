
$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $submit = $('#submit');
	const $tryAgain = $('#try-again');
	const $reset = $('#reset');

	const $play = $('.play');
	const audioJS = document.getElementById('audio');

	let dragComplete = false;
	let audioComplete = false;
	let dragCorrect = false;

	let stage = 0;

	const $droppable = $('.droppable');
	const $draggable = $('.draggable');
	let dragTarget;

	const $snappable = $('.snappable');

	const $dropdownMenu = $('.dropdown-menu');

	const interactiveAnswerCorrect = {};
	const interactiveAnswersKey = {
		1: 'pabiku',
		2: 'tibudo',
		3: 'golatu',
		4: 'daropi',
	};
	const interactiveAnswers = [[], [], [], []];

	function checkComplete() {
		console.log('checking complete');

		// if (!dragComplete) {
		// 	$submit.removeClass('d-none');
		// }
		// $next.removeClass('d-none');
		if ($(".draggable[data-slot-placed='']").length || $tryAgain.is(':visible')) { // if some draggables not placed
			console.log('not complete');
			// $next.addClass('d-none');
			$submit
				.addClass('d-none')
				.parent()
				.addClass('d-none');
			// dragComplete = false;
		} else if (!dragCorrect) {
			// $submit.addClass('stage-1-interact');
			setTimeout(() => {
				$submit
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}, 50);
		}
	}

	function resetDropdowns() {
		$('.dropdown-toggle').attr('aria-expanded', false);
		$dropdownMenu.removeClass('show');
		$dropdownMenu.removeClass('d-none');
	}

	// draggables
	function centerDraggable(draggable, droppable) {
		const droppableOffset = droppable.offset();

		draggable.offset({
			left: droppableOffset.left,
			top: droppableOffset.top,
		});
	}

	function dragDraggable(draggable, droppable) {
		const droppableOffset1 = droppable.offset();
		const x1 = droppableOffset1.left + (draggable.width() / 2) + 1;
		const y1 = droppableOffset1.top + (draggable.height() / 2) + 1;
		setTimeout(() => {
			draggable.simulate('drag', {
				x: x1,
				y: y1,
			});
			setTimeout(() => {
				$draggable.removeClass('active');
				dragTarget = undefined;
				resetDropdowns();
			}, 25);
		}, 25);
	}

	function centerAllDraggables() {
		for (let i = 0; i < $draggable.length; i += 1) {
			const draggable = $($('.draggable')[i]);
			const dropNum = $($('.draggable')[i]).data('slot-location');
			const droppable = $(`#snap-${dropNum}`);

			try {
				centerDraggable(draggable, droppable);
			} catch (e) {
				//
			}
		}
	}

	// let resizeCount = 0;

	$(window).resize(() => {
		console.log('resize');
		console.log($(window).width());
		// resizeCount += 1;
		// if (resizeCount % 2 === 0) {
		console.log('repositioning');
		centerAllDraggables();
		// }
	});

	function collisionWithOrigin(dragObj) {
		console.log('dragObj');
		console.log(dragObj);

		let draggable = $(dragObj);
		console.log('DRAGGABLE');
		console.log(draggable);

		draggable = draggable.get(0).getBoundingClientRect();
		const origin = $('.draggables-rows').get(0).getBoundingClientRect();
		const constructOverlap = !(draggable.right < origin.left ||
			draggable.left > origin.right ||
			draggable.bottom < origin.top ||
			draggable.top > origin.bottom);

		if (constructOverlap) {
			console.log('collision');
			$(draggable).data('slot-placed', '');
			$(draggable).attr('data-slot-placed', '');
			$(draggable).data('slot-location', '');
			$(draggable).attr('data-slot-location', '');
			$(draggable).css({
				top: '',
				left: '',
			});

			return false;
		}
		return true;
	}

	function handleSlotSwitching(dropArea, currentDraggable, otherDraggable, otherDroppable) {
		if (otherDroppable.length) { // if switching from other droppable
			dragDraggable(otherDraggable, otherDroppable);
		} else { // else place otherDraggable in the origin
			console.log('clearing data for');
			console.log(otherDraggable);

			otherDraggable.data('slot-placed', '');
			otherDraggable.attr('data-slot-placed', '');
			otherDraggable.data('slot-location', '');
			otherDraggable.attr('data-slot-location', '');
			otherDraggable.css({
				top: '',
				left: '',
			});
		}
	}

	$draggable.draggable({
		containment: $('.containment'),
		scroll: false,
		snap: $snappable,
		snapMode: 'inner',
		revert(draggable) {
			console.log('DRAGGABLE');
			console.log(draggable);
			console.log('THIS');
			console.log(this);
			const that = this;

			if (draggable === false && collisionWithOrigin(that)) {
				console.log('REVERTING');

				// console.log('draggable === false');

				// console.log(draggable);

				// $(draggable).data('slot-placed', '');
				// $(draggable).attr('data-slot-placed', '');
				// $(draggable).data('slot-location', '');
				// $(draggable).attr('data-slot-location', '');
				// $(draggable).css({
				// 	top: '',
				// 	left: '',
				// });
				return true; // reverts back
			}
			// console.log('draggable === true');
			console.log('NOT REVERTING');


			// $(draggable).data('slot-placed', '');
			// $(draggable).attr('data-slot-placed', '');
			// $(draggable).data('slot-location', '');
			// $(draggable).attr('data-slot-location', '');
			// $(draggable).css({
			// 	top: '',
			// 	left: '',
			// });
			return false;
		},

		start() {
			dragTarget = undefined;
			$draggable.removeClass('active');
		},
	});

	function createDroppables() {
		for (let i = 1; i <= $draggable.length; i += 1) {
			$(`#snap-${i}`).droppable({
				tolerance: 'pointer',
				drop: (e, ui) => { // eslint-disable-line
					const draggable = $(ui.draggable);
					const droppable = $(e.target);

					const slotName = $(e.target).data('slot-name');
					const slotID = $(e.target).data('slot-id');

					console.log(slotID);

					const otherDraggable = $(`.draggable[data-slot-location='${slotID}']`);
					console.log('otherDraggable');
					console.log(otherDraggable);

					if (otherDraggable.length && (otherDraggable.data('draggable-name') !== draggable.data('draggable-name'))) {
						const otherDroppable = $(`.snap-${draggable.data('slot-location')}`);
						handleSlotSwitching(droppable, draggable, otherDraggable, otherDroppable);
					}

					draggable.data('slot-placed', slotName);
					draggable.attr('data-slot-placed', slotName);

					console.log(`writing slot-location: ${slotID} for`);
					console.log(draggable);

					draggable.data('slot-location', slotID);
					draggable.attr('data-slot-location', slotID);

					centerDraggable(draggable, droppable);
					$draggable.removeClass('active');

					const draggableSlotProper = ui.draggable.data('slot-proper');

					if (slotName === draggableSlotProper) {
						interactiveAnswerCorrect[i] = true; // set correct = true
						setTimeout(centerDraggable(draggable, droppable), 25);
						setTimeout(checkComplete(), 25);
					} else {
						interactiveAnswerCorrect[i] = false; // set correct = false
						setTimeout(centerDraggable(draggable, droppable), 25);
						setTimeout(checkComplete(), 25);
					}
					let slotGroup = parseInt((slotID / 3), 10);
					if (slotID <= 3) {
						slotGroup = 0;
					} else if (slotID >= 4 && slotID <= 6) {
						slotGroup = 1;
					} else if (slotID >= 7 && slotID <= 9) {
						slotGroup = 2;
					} else if (slotID >= 10 && slotID <= 12) {
						slotGroup = 3;
					}
					console.log(`writing ${ui.draggable.data('draggable-name')} to slotID ${slotID}, slotgroup: ${slotGroup}`);
					console.log(interactiveAnswers);
					interactiveAnswers[slotGroup][slotName - 1] = ui.draggable.data('draggable-name');
				},
			});
		}
	}

	createDroppables();

	// Dropdowns
	const $dropDropdown = $('.dropdown-item');
	$dropDropdown.click((e) => {
		// if (typeof dragTarget === 'undefined') {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		const dropSpot = $(`#${$(e.target).data('drop')}`);
		const dragObj = $(`.${$(e.target).data('value')}-draggable`);

		// Drag to spot
		dragDraggable(dragObj, dropSpot);
		// }
	});

	$draggable.click((e) => {
	// Add class to make it look activated
		$draggable.removeClass('active');
		$(e.currentTarget).addClass('active');
		// Save to var when draggable is clicked
		dragTarget = $(e.currentTarget);
		$dropdownMenu.addClass('d-none');
	});

	$droppable.click((e) => {
		const dropSpot = $(e.currentTarget);
		const dragObj = dragTarget;
		// if draggable is saved to var, move and clear var
		if (typeof dragTarget !== 'undefined') {
		// Drag to spot
			dragDraggable(dragObj, dropSpot);
			$draggable.removeClass('active');
			dragTarget = undefined;
		}
	});

	$('.dropdown-toggle, .droppable, .draggable, a').keydown((val) => {
		if (val.which === 13) {
			val.stopPropagation();
			val.preventDefault();
			$(val.target).click();
		}
	});

	$('.dropdown').on('shown.bs.dropdown', () => {
		$('.dropdown-item:visible:first').focus();
	});

	$('.dropdown-toggle').dropdown({
		boundary: 'window',
	});

	// Audio
	function stopPlaying() {
		audioJS.pause();
		audioJS.currentTime = 0;
		$play.html(`
		<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
		`);
	}

	function styleButtons() {
		console.log('styling buttons');

		if ($(window).width() >= 356 && $(window).width() <= 431) {
			if (($submit.is(':visible') || $tryAgain.is(':visible')) && $next.is(':visible')) { // next/prev + 1 are visible
				$tryAgain.parent().removeClass('stage-1-interact');
				$next.parent().addClass('stage-1-next');
			} else if (($submit.is(':visible') || $tryAgain.is(':visible')) && !$next.is(':visible')) { // prev + 1 are visible
				$tryAgain.parent().removeClass('stage-1-interact');
				$next.parent().removeClass('stage-1-next');
			} else if (!$submit.is(':visible') && !$tryAgain.is(':visible') && $next.is(':visible')) { // next/prev are visible
				$next.parent().removeClass('stage-1-next');
				$tryAgain.parent().removeClass('stage-1-interact');
			}
		} else if ($(window).width() <= 355) {
			if (!$submit.is(':visible') && !$tryAgain.is(':visible') && $next.is(':visible')) { // next/prev are visible
				$next.parent().addClass('stage-1-next');
				$tryAgain.parent().removeClass('stage-1-interact');
			} else if ($submit.is(':visible') || $tryAgain.is(':visible')) { // + 1 is visible
				$next.parent().removeClass('stage-1-next');
				$tryAgain.parent().addClass('stage-1-interact');
			}

			if ($(window).width() >= 341) {
				if ($submit.is(':visible') && !$tryAgain.is(':visible') && $next.is(':visible')) { // next/prev are visible + sub
					$next.parent().addClass('stage-1-next');
					$tryAgain.parent().removeClass('stage-1-interact');
				} else if (!$submit.is(':visible') && !$tryAgain.is(':visible') && $next.is(':visible')) { // next/prev are visible
					$next.parent().removeClass('stage-1-next');
					$tryAgain.parent().removeClass('stage-1-interact');
				}
			}
		}

		if (!$submit.hasClass('d-none') || !$tryAgain.hasClass('d-none')) {
			$submit
				.parent()
				.removeClass('d-none');
		} else {
			$submit
				.parent()
				.addClass('d-none');
		}
	}

	// let buttonsInterval;

	function setStage() {
		// clearInterval(buttonsInterval);
		stopPlaying();
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$next
			.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		if (stage === 3
      || (stage === 1 && !dragComplete)
      || (stage === 0 && !audioComplete)
		) {
			$next
				.addClass('d-none')
				.parent()
				.addClass('d-none');
		}

		$next.parent().removeClass('stage-1-next');
		$tryAgain.parent().removeClass('stage-1-interact');
		// buttonsInterval =
		setInterval(styleButtons, 100);

		$tryAgain
			.addClass('d-none')
			.parent()
			.addClass('d-none');
		if (stage === 1 && dragComplete) {
			$tryAgain
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');

			if ($(".draggable[data-slot-placed='']").length) {
				$tryAgain
					.addClass('d-none')
					.parent()
					.addClass('d-none');
			}
		}

		if (stage === 1 && dragCorrect) {
			$tryAgain
				.addClass('d-none')
				.parent()
				.addClass('d-none');
		}

		if (stage !== 1) {
			$submit
				.addClass('d-none')
				.parent()
				.addClass('d-none');
		} else {
			checkComplete();
		}
	}

	function togglePlay() {
		if (audioJS.paused) {
			audioJS.play();
			$play.html(`
			<svg class="svg-inline--fa fa-pause fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg><!-- <i class="fas fa-pause mr-1"></i> --><span class="btn-action-text">Pause</span>
		`);
		} else {
			audioJS.pause();
			$play.html(`
			<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
			`);
		}
	}

	$play.click(() => {
		togglePlay();
	});

	$next.click(() => {
		stage += 1;
		setStage();
		$previous.removeClass('d-none');
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	// “Submit” button, grayed out until all draggable items placed in targets.
	// If draggable items are all placed correctly, feedback and “Next” button appears.
	// If incorrect, feedback, correct drags locked, user must move the rest to the correct slots
	// After 3 attempts, all the correct words are revealed, user’s correct words highlighted green.

	// Frame 2A shows correct solution
	// The words themselves don’t need to be in this specific order
	// A correct response is when all the syllables in each word are in correct order for that word
	// When correct solution is submitted, the solution words should change color to match storyboard

	let correctSets = {};
	// let attemptCount = 0;

	$submit.click(() => {
		dragTarget = undefined;
		// mark answers
		console.log(interactiveAnswers);
		// loop and check slot proper against slot position
		// $('.draggable').toArray().forEach((draggable) => {
		// console.log(draggable);
		// if ($(draggable).data('slot-placed') === $(draggable).data('slot-proper')) {
		// 	console.log('correct');
		// 	$(draggable).addClass('success-green');
		// } else {
		// 	console.log('incorrect');
		// 	$(draggable).removeClass('success-green');
		// }
		// });
		correctSets = {};
		console.log('LOOPING');
		const answerKey = Object.values(interactiveAnswersKey);
		console.log(answerKey);
		for (let i = 0; i < interactiveAnswers.length; i += 1) {
			console.log(interactiveAnswers[i]);
			if (answerKey.indexOf(interactiveAnswers[i].join('')) === -1) {
				console.log('not found');
			} else if (answerKey.indexOf(interactiveAnswers[i].join('')) !== -1) {
				console.log('found');
				correctSets[i] = interactiveAnswers[i];
				console.log(correctSets);
				// for (let i2 = 0; i2 < interactiveAnswers[i].length; i2 += 1) {

				// }
			}
		}

		if (correctSets !== {}) {
			const correctSetsArr = Object.values(correctSets);
			console.log('correctSetsArr');
			console.log(correctSetsArr);

			for (let i2 = 0; i2 < correctSetsArr.length; i2 += 1) {
				console.log('looping:');
				console.log(correctSetsArr[i2]);
				for (let i3 = 0; i3 < correctSetsArr[i2].length; i3 += 1) {
					console.log('marking correct');
					console.log(correctSetsArr[i2][i3]);

					$(`.${correctSetsArr[i2][i3]}-draggable`).addClass('correct-answer');
					$(`.${correctSetsArr[i2][i3]}-draggable`).addClass('success-green');
					$(`.${correctSetsArr[i2][i3]}-draggable`).addClass(`success-${correctSetsArr[i2].join('')}`);
					$(`.${correctSetsArr[i2][i3]}-draggable`).draggable('disable');
					const droppableID = $(`.${correctSetsArr[i2][i3]}-draggable`).data('slot-location');
					console.log(`disabling #snap-${droppableID}`);

					$(`#snap-${droppableID}`)
						.droppable('disable')
						.addClass('disabled');
				}
			}

			dragComplete = true;
			$submit
				.addClass('d-none')
				.parent()
				.addClass('d-none');
			$previous.removeClass('d-none');
			$next
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');

			if (correctSetsArr.length === 4) {
				// console.log('remove success-green');
				dragCorrect = true;
				$('.draggable').addClass('success-green');
				$('.feedback').addClass('d-none');
				$('.feedback-correct').removeClass('d-none');
				// $next.parent().removeClass('stage-1-next');
			} else if (correctSetsArr.length < 4) {
				// $('.draggable')
				// 	.not('.success-green')
				// 	.css({
				// 		top: '',
				// 		left: '',
				// 	});
				$('.feedback').addClass('d-none');
				$('.feedback-incorrect').removeClass('d-none');
				$tryAgain
					.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}
		}
		// }
		// attemptCount += 1;

		$draggable.draggable('disable');
	});

	$tryAgain.click(() => {
		$draggable.not('.success-green')
			.draggable('enable')
			.data('slot-placed', '')
			.attr('data-slot-placed', '')
			.data('slot-location', '')
			.attr('data-slot-location', '')
			.css({
				top: '',
				left: '',
			});
		$tryAgain
			.addClass('d-none')
			.parent()
			.addClass('d-none');
		// $tryAgain.parent().removeClass('stage-1-interact');
		// $next.parent().addClass('stage-1-next-2');
		$('.feedback').addClass('d-none');
	});

	$reset.click(() => {
		window.location.reload();
	});

	function handleAudioComplete() {
		audioJS.currentTime = 0;
		if (stage === 0) {
			$next
				.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		}
		$play.html(`
		<svg class="svg-inline--fa fa-play fa-w-14 mr-1" aria-hidden="true" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg><!-- <i class="fas fa-play mr-1"></i> --><span class="btn-action-text">Play</span>
		`);
		audioComplete = true;
	}

	let timeStarted = -1;
	let timePlayed = 0;
	let currentDuration = 0; // eslint-disable-line

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
	}

	function audioStoppedPlaying(event) {
		// Start time less then zero means stop event was fired without start event
		if (timeStarted > 0) {
			const playedFor = (new Date().getTime() / 1000) - timeStarted;
			timeStarted = -1;
			// add the new amount of seconds played
			timePlayed += playedFor;
		}

		// Count as complete only if end of audio was reached
		console.log(`${timePlayed} or ${timePlayed + 0.1} >= ${currentDuration}`);

		if ((timePlayed + 0.1) >= currentDuration && event.type === 'ended') {
			console.log('complete');

			handleAudioComplete();
		} else if (timePlayed < currentDuration && event.type === 'ended') {
			console.log('not complete');
		}
	}

	audioJS.addEventListener('play', audioStartedPlaying);
	audioJS.addEventListener('playing', audioStartedPlaying);

	audioJS.addEventListener('ended', audioStoppedPlaying);
	audioJS.addEventListener('pause', audioStoppedPlaying);

	$('*').click((e) => {
		console.log(e.target);
	});
});
