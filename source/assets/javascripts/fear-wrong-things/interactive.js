$(document).ready(() => {
	// let OSName;
	if (navigator.appVersion.indexOf('Win') !== -1) {
		// OSName = 'Windows';
		console.log('windows');
		$('.windows').removeClass('text-draggable-long');
	}

	// Students will drag and drop different labels for the causes of death into a rank-ordered list.
	// They will see their own guesses alongside the correct order and actual statistics.

	// Frame 1: text, draggables on left, droppables on right
	// Frame 2: text, user inputted droppables, correct rankings on the right

	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');
	let stage = 0;

	const interactiveAnswers = {};
	const interactiveAnswerVal = {};
	// const boxConnections = {};

	const $droppable = $('.droppable');
	const $draggable = $('.draggable');
	let dragTarget;

	function checkComplete() {
		$next.removeClass('invisible');
		if ($(".draggable[data-slot-placed='']").length) { // if some draggables not placed
			$next.addClass('invisible');
		}
	}

	function markIncorrect() {
		console.log(interactiveAnswers);
		console.log(interactiveAnswerVal);

		for (let i = 1; i <= $draggable.length; i += 1) {
			if (interactiveAnswers[i]) {
				$(`.answer-${i}`).removeClass('alert alert-danger');
				$(`.answer-${i}`).addClass('alert alert-success');
			} else {
				$(`.answer-${i}`).removeClass('alert alert-success');
				$(`.answer-${i}`).addClass('alert alert-danger');
			}
			$(`.answer-${i}`).html(`${interactiveAnswerVal[i]}`);
		}
	}

	// function conn() {
	// connect data-slot-proper # to answer-${data-slot-proper}
	// }


	// draggables
	function centerDraggable(draggable, droppable) {
		const droppableOffset = droppable.offset();

		draggable.offset({
			left: droppableOffset.left,
			top: droppableOffset.top,
		});
	}

	function dragDraggable(draggable, droppable) {
		// console.log(draggable, droppable);
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
			}, 25);
		}, 25);
	}

	function centerAllDraggables() {
		for (let i = 0; i < $draggable.length; i += 1) {
			const draggable = $($('.draggable')[i]);
			const dropNum = $($('.draggable')[i]).data('slot-placed');
			const droppable = $(`#snap-${dropNum}`);

			centerDraggable(draggable, droppable);
		}
	}

	$(window).resize(() => {
		console.log('resize');
		if ($(window).width() % 2 === 0) {
			console.log('repositioning');
			centerAllDraggables();
		}
	});

	function headerFix() {
		if ($('.answer-choices-header').height() > 40 && $('.your-guess-header').height() < 40) { // ans wrapping, gue not wrapping
			$('.answer-choices-spacer').addClass('d-none');
			$('.answer-choices-header').attr('style', 'margin-bottom: 3px !important');
		} else if ($('.answer-choices-header').height() > 40 && $('.your-guess-header').height() > 40) { // both wrapping
			$('.answer-choices-header').css('margin-bottom', '');
			$('.answer-choices-spacer').removeClass('d-none');
		} else {
			$('.answer-choices-header').css('margin-bottom', '');
			$('.answer-choices-spacer').removeClass('d-none');
		}
	}

	let cssInterval;
	function setStage() {
		clearInterval(cssInterval);
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');
		$(`.stage-${stage}`).css('opacity', '0.01');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$next.removeClass('invisible');
		if (stage === 1) {
			$next.addClass('invisible');
		}

		if (stage === 0) {
			cssInterval = setInterval(headerFix, 100);
			// enable
			$draggable.draggable('enable');
			$('.dropdown-toggle').removeClass('disabled');
			// $('.draggables-column').addClass('col-xsm-6 col-4 col-md-3 col-lg-2');
			// $('.draggables-column').removeClass('small-column');
			$('.draggables-column').removeClass('position-absolute');
			centerAllDraggables();
			$(`.stage-${stage}`).css('opacity', '1');
		} else if (stage === 1) {
			// disable
			$draggable.draggable('disable');
			dragTarget = undefined;
			$('.dropdown-toggle').addClass('disabled');
			// mark answers
			markIncorrect();
			$('.draggables-column').addClass('position-absolute');
			centerAllDraggables();
			$(`.stage-${stage}`).css('opacity', '1');
			// $('.draggables-column').removeClass('col-xsm-6 col-4 col-md-3 col-lg-2');
			// $('.draggables-column').addClass('small-column');
		}
	}

	cssInterval = setInterval(headerFix, 100);

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	function handleSlotSwitching(dropArea, currentDraggable, otherDraggable, otherDroppable) {
		if (otherDroppable.length) { // if switching from other droppable
			dragDraggable(otherDraggable, otherDroppable);
			// Alternate:
			// const slotName = otherDroppable.data('slot-name');
			// otherDraggable.data('slot-placed', slotName);
			// otherDraggable.attr('data-slot-placed', slotName);
			// centerDraggable(otherDraggable, otherDroppable);
		} else { // else place otherDraggable in the origin
			otherDraggable.data('slot-placed', '');
			otherDraggable.attr('data-slot-placed', '');
			otherDraggable.css({
				top: '',
				left: '',
			});
		}
	}

	$draggable.draggable({
		containment: $('.containment'),
		scroll: false,
		snap: $droppable,
		snapMode: 'inner',
		revert(droppable) {
			if (droppable === false) {
				return true;
			}
			return false;
		},
	});

	function createDroppables() {
		for (let i = 1; i <= $draggable.length; i += 1) {
			console.log(`#snap-${i} droppable`);

			$(`#snap-${i}`).droppable({
				tolerance: 'pointer',
				drop: (e, ui) => { // eslint-disable-line
					const draggable = $(ui.draggable);
					const droppable = $(e.target);

					const slotName = $(e.target).data('slot-name');

					const otherDraggable = $(`.draggable[data-slot-placed='${slotName}']`);
					if (otherDraggable.length) {
						const otherDroppable = $(`.snap-${draggable.data('slot-placed')}`);
						handleSlotSwitching(droppable, draggable, otherDraggable, otherDroppable);
					}

					draggable.data('slot-placed', slotName);
					draggable.attr('data-slot-placed', slotName);

					centerDraggable(draggable, droppable);
					$draggable.removeClass('active');

					const draggableSlotProper = ui.draggable.data('slot-proper');
					console.log(`slotName ${slotName}`);
					console.log(`draggableSlotProper ${draggableSlotProper}`);
					console.log(slotName === draggableSlotProper);

					if (slotName === draggableSlotProper) {
						interactiveAnswers[i] = true; // set correct = true
						setTimeout(centerDraggable(draggable, droppable), 25);
						setTimeout(checkComplete(), 25);
					} else {
						interactiveAnswers[i] = false; // set correct = false
						setTimeout(centerDraggable(draggable, droppable), 25);
						setTimeout(checkComplete(), 25);
					}

					const dragText = draggable.data('drag-text');
					interactiveAnswerVal[i] = dragText;
				},
			});
		}
	}

	createDroppables();

	// dropdowns
	const $dropDropdown = $('.dropdown-item');
	$dropDropdown.click((e) => {
		const dropSpot = $(`#${$(e.target).data('drop')}`);
		const dragObj = $(`.${$(e.target).data('value')}-draggable`);

		// Drag to spot
		dragDraggable(dragObj, dropSpot);
	});

	$draggable.click((e) => {
	// Add class to make it look activated
		$draggable.removeClass('active');
		$(e.currentTarget).addClass('active');
		// Save to var when draggable is clicked
		dragTarget = $(e.currentTarget);
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

	// setTimeout(() => {
	// const svgL1 = $('#svgL1');
	// const div1 = $('#div1');
	// const div2 = $('#div2');

	// const pos1 = div1.position(); // requires container-fluid
	// const pos2 = div2.position(); // requires container-fluid

	// svgL1
	// 	.attr('x1', pos1.left)
	// 	.attr('y1', pos1.top)
	// 	.attr('x2', pos2.left)
	// 	.attr('y2', pos2.top);

	// first, second divs & svg need to be siblings
	// const svgL2 = $('#svgL2');
	// const div3 = $('.food-draggable');
	// const div4 = $('#snap-2');

	// const pos3 = div3.offset(); // does not require container-fluid
	// const pos4 = div4.offset(); // does not require container-fluid

	// svgL2
	// 	.attr('x1', pos3.left)
	// 	.attr('y1', pos3.top)
	// 	.attr('x2', pos4.left)
	// 	.attr('y2', pos4.top);

	// first, second divs & svg need to be siblings
	// const svgL3 = $('#svgL3');
	// const div5 = $('.answer-1');
	// const div6 = $('.answer-2');

	// const pos5 = div5.offset(); // does not require container-fluid
	// const pos6 = div6.offset(); // does not require container-fluid

	// svgL3
	// 	.attr('x1', pos5.left)
	// 	.attr('y1', pos5.top)
	// 	.attr('x2', pos6.left)
	// 	.attr('y2', pos6.top);
	// }, 1000);

	$reset.click(() => {
		window.location.reload();
	});
});
