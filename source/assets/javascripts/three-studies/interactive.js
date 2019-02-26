$(document).ready(() => {
	// Example Containers
	const $examples = $('.example');

	// modal
	const $modal = $('.modal');

	// Feedback
	const $feedback = $('.feedback');

	// Questions
	const $questions = $('.question');

	// Buttons
	const $answerBtn = $('.answer-btn');
	const $submit = $('.submit');
	const $next = $('.next');
	const $previous = $('.previous');

	// Variables
	let currentExample = 1;
	let currentQuestion = 1;

	let constructDrop = false;
	let externalDrop = false;
	let internalDrop = false;

	const answerClass = {
		1: 'experimental',
		3: 'correctional',
		5: 'descriptive',
	};

	const questionAnswer = {
		1: false,
		3: false,
		5: false,
	};

	const dropAnswers = {
		2: false,
		4: false,
		6: false,
	};

	function normalizeAnswers() {
		$answerBtn.removeClass('alert-success')
			.removeClass('alert-secondary')
			.addClass('btn-primary')
			.prop('disabled', false);
	}

	function exampleQuestion(e) {
		if ($(e.target).hasClass(`${answerClass[currentQuestion]}`)) {
			questionAnswer[currentQuestion] = true;
			$(`.feedback-${currentQuestion}`).addClass('alert alert-success');
			$(`.feedback-${currentQuestion}`)
				.removeClass('d-none');
		}
	}

	// marks correct answer and disable buttons
	function markAnswers() {
		$(`.btn.${answerClass[currentQuestion]}`).removeClass('btn-primary')
			.addClass('alert-success')
			.prop('disabled', true)
			.siblings('')
			.removeClass('btn-primary')
			.addClass('alert-secondary')
			.prop('disabled', true);
	}

	function answerTrue() {
		// debugger;
		if (questionAnswer[currentQuestion]) {
			// debugger;
			markAnswers();
			$next.removeClass('d-none');
		} else {
			// debugger;
			normalizeAnswers();
			$next.addClass('d-none');
		}
	}

	let constructDropArea = 0;
	let externalDropArea = 0;
	let internalDropArea = 0;
	let constructEmpty = true;
	let externalEmpty = true;
	let internalEmpty = true;
	const $draggable = $('.draggable');
	let dragTarget;

	let constructOverlap = false;
	let internalOverlap = false;
	let externalOverlap = false;

	function showSubmit() {
		if (constructDropArea && internalDropArea && externalDropArea) {
			$previous.addClass('d-none');
			$next.addClass('d-none');
			$submit.removeClass('d-none');
		}
	}

	function draggableResetActive() {
		// debugger;
		$draggable.removeClass('active');
		// debugger;
		dragTarget = undefined;
	}

	const dontIterate = false;

	function handleEmptyDrops() {
		if (!$(".draggable[data-slot-placed='construct']:visible").length) {
			constructDropArea = 0;
			constructDrop = false;
			$(`.construct-question-${currentQuestion}`).css('height', 'auto');
		} else {
			constructDropArea = $(".draggable[data-slot-placed='construct']:visible").length;
		}

		if (!$(".draggable[data-slot-placed='external']:visible").length) {
			externalDropArea = 0;
			externalDrop = false;
			$(`.external-question-${currentQuestion}`).css('height', 'auto');
		} else {
			externalDropArea = $(".draggable[data-slot-placed='external']:visible").length;
		}

		if (!$(".draggable[data-slot-placed='internal']:visible").length) {
			internalDropArea = 0;
			internalDrop = false;
			$(`.internal-question-${currentQuestion}`).css('height', 'auto');
		} else {
			internalDropArea = $(".draggable[data-slot-placed='internal']:visible").length;
		}
	}

	function centerDraggable(draggable, droppable) {
		const droppableOffset = droppable.offset();

		const x1 = (droppableOffset.left + (droppable.width() / 2)) - (draggable.width() / 2);
		const y1 = droppableOffset.top + ((droppable.height() - draggable.height()));// + 10);

		draggable.offset({
			left: x1,
			top: y1,
		});
	}

	function repositionDraggables() {
		let draggablePlaced = $(`.construct-${currentQuestion}`);
		let slotPlaced = draggablePlaced.data('slot-placed');
		if (slotPlaced) {
			centerDraggable(draggablePlaced, $(`.${slotPlaced}-question-${currentQuestion}`));
		}

		draggablePlaced = $(`.internal-${currentQuestion}`);
		slotPlaced = draggablePlaced.data('slot-placed');
		if (slotPlaced) {
			centerDraggable(draggablePlaced, $(`.${slotPlaced}-question-${currentQuestion}`));
		}

		draggablePlaced = $(`.external-${currentQuestion}`);
		slotPlaced = draggablePlaced.data('slot-placed');
		if (slotPlaced) {
			centerDraggable(draggablePlaced, $(`.${slotPlaced}-question-${currentQuestion}`));
		}

		handleEmptyDrops();
	}

	function dragDraggable(draggable, droppable) {
		// Don't use jQuery offset
		const x1 = ((droppable.getBoundingClientRect().left + droppable.getBoundingClientRect().right) / 2) + 1; // eslint-disable-line
		const y1 = ((droppable.getBoundingClientRect().top + droppable.getBoundingClientRect().bottom) / 2) + 3; // eslint-disable-line
		setTimeout(() => {
			$(draggable).simulate('drag', {
				x: x1,
				y: y1,
			});
			draggableResetActive();
			setTimeout(() => {
				repositionDraggables();
			}, 20);
		}, 25);
	}

	function handleSlotSwitching(dropArea, slotName, currentDraggable) {
		if (dropArea === 2) { // if this is the second draggable placed here
			// draggables switch spots
			// find element with slot-placed 'construct'
			const otherDraggable = $(`.draggable[data-slot-placed='${slotName}']:visible`); // other draggable
			const lastSlotName = currentDraggable.data('last-slot');
			if (lastSlotName) { // if this has a last-slot, place otherDraggable there,
				// else place otherDraggable in the origin
				const otherDroppable = $(`.${lastSlotName}-question-${currentQuestion}`);
				dragDraggable(otherDraggable.get(0), otherDroppable.get(0));
				// switch (lastSlotName) {
				// case 'construct':
				// 	constructEmpty = false;
				// 	constructDropArea = 1;
				// 	break;
				// case 'internal':
				// 	internalEmpty = false;
				// 	internalDropArea = 1;
				// 	break;
				// case 'external':
				// 	externalEmpty = false;
				// 	externalDropArea = 1;
				// 	break;
				// default:
				// 	break;
				// }
			} else {
				otherDraggable.data('last-slot', '');
				otherDraggable.data('slot-placed', '');
				otherDraggable.attr('data-slot-placed', '');
				otherDraggable.css({
					top: '',
					left: '',
				});
			}
			// update last-slot & slot-placed
		}
		currentDraggable.data('last-slot', slotName);
		currentDraggable.data('slot-placed', slotName);
		currentDraggable.attr('data-slot-placed', slotName);
		// else if (dropArea === 1) { // if this is the first draggable placed here
		// 	// ui.draggable.data('second-drop', false);
		// 	currentDraggable.data('last-slot', slotName);
		// 	currentDraggable.data('slot-placed', slotName);
		// 	currentDraggable.attr('data-slot-placed', slotName);
		// }
	}

	function handleDrop(draggable, droppable, emptyBool) {
		if (emptyBool) {
			// add size of label
			const draggableHeight = (draggable.get(0)).offsetHeight;
			const droppableHeight = droppable.offsetHeight;
			$(droppable).css('height', `${draggableHeight + droppableHeight}px`);
			setTimeout(() => {
				repositionDraggables();
			}, 25);
		} // else switch places & reposition
	}

	function detectCollision(draggable) {
		const rect1 = draggable.getBoundingClientRect();
		const rect2 = $(`.construct-question-${currentQuestion}`).get(0).getBoundingClientRect();
		const rect3 = $(`.internal-question-${currentQuestion}`).get(0).getBoundingClientRect();
		const rect4 = $(`.external-question-${currentQuestion}`).get(0).getBoundingClientRect();
		constructOverlap = !(rect1.right < rect2.left ||
			rect1.left > rect2.right ||
			rect1.bottom < rect2.top ||
			rect1.top > rect2.bottom);
		internalOverlap = !(rect1.right < rect3.left ||
			rect1.left > rect3.right ||
			rect1.bottom < rect3.top ||
			rect1.top > rect3.bottom);
		externalOverlap = !(rect1.right < rect4.left ||
			rect1.left > rect4.right ||
			rect1.bottom < rect4.top ||
			rect1.top > rect4.bottom);

		if (constructOverlap) {
			centerDraggable($(draggable), $(`.construct-question-${currentQuestion}`));
		} else if (internalOverlap) {
			centerDraggable($(draggable), $(`.internal-question-${currentQuestion}`));
		} else if (externalOverlap) {
			centerDraggable($(draggable), $(`.external-question-${currentQuestion}`));
		}
	}

	function exampleDrop() {
		// Construct Draggable
		$(`.construct-${currentQuestion}`)
			.draggable({
				cursor: 'move',
				snap: '.droppable',
				snapMode: 'inner',
				containment: $(`.question-droppable-${currentQuestion}`),
				stop: (e) => {
					const draggable = $(e.target);
					if (draggable.data('slot-placed') === '') {
						detectCollision(e.target);
					}
					draggableResetActive();
					// handleEmptyDrops();
					repositionDraggables();
				},
			});

		// Construct Droppable
		$(`.construct-question-${currentQuestion}`)
			.droppable({
				tolerance: 'fit',
				out: (e, ui) => {
					if ($(ui.draggable[0]).data('slot-placed') === $(e.target).data('slot-name')) {
						$(ui.draggable[0]).data('slot-placed', '');

						if (dontIterate === false) {
							constructDropArea -= 1;
						}

						if (constructEmpty === false) {
							if (constructDropArea === 0) {
								// original size
								// $(e.target).css('height', 'auto');
								constructEmpty = true;
							}
						}
					}
				},

				drop: (e, ui) => {
					const slotName = $(`.construct-question-${currentQuestion}`).data('slot-name');
					const draggableName = ui.draggable.data('draggable-name');

					const currentDraggable = $(`.${draggableName}-${currentQuestion}`);
					if (currentDraggable.data('last-slot') !== slotName) {
						if (dontIterate === false) {
							constructDropArea += 1;
						}

						handleSlotSwitching(constructDropArea, slotName, currentDraggable);
						constructDropArea = 1;
						handleDrop(ui.draggable, e.target, constructEmpty);

						constructEmpty = false;
						if (slotName === draggableName) {
							constructDrop = true;
						}
						handleEmptyDrops();
						showSubmit();
					}
				},
			});

		// External Draggable
		$(`.external-${currentQuestion}`)
			.draggable({
				cursor: 'move',
				snap: '.droppable',
				snapMode: 'inner',
				containment: $(`.question-droppable-${currentQuestion}`),
				stop: (e) => {
					const draggable = $(e.target);
					if (draggable.data('slot-placed') === '') {
						detectCollision(e.target);
					}
					// droppableClick(draggable);
					draggableResetActive();

					// check if any are droppables are empty
					// reset all empty droppable height
					// handleEmptyDrops();
					repositionDraggables();
				},
			});

		// External Droppable
		$(`.external-question-${currentQuestion}`)
			.droppable({
				tolerance: 'fit',
				out: (e, ui) => {
					if ($(ui.draggable[0]).data('slot-placed') === $(e.target).data('slot-name')) {
						$(ui.draggable[0]).data('slot-placed', '');

						if (dontIterate === false) {
							externalDropArea -= 1;
						}

						if (externalEmpty === false) {
							if (externalDropArea === 0) {
								// original size
								// $(e.target).css('height', 'auto');
								externalEmpty = true;
							}
						}
					}
				},

				drop: (e, ui) => {
					const slotName = $(`.external-question-${currentQuestion}`).data('slot-name');
					const draggableName = ui.draggable.data('draggable-name');

					const currentDraggable = $(`.${draggableName}-${currentQuestion}`);
					if (currentDraggable.data('last-slot') !== slotName) {
						// change the draggable's parent to be underneath the droppable
						// $(e.target).append($(ui.draggable).detach().css({
						// 	top: '',
						// 	left: '',
						// }));

						if (dontIterate === false) {
							externalDropArea += 1;
						}

						handleSlotSwitching(externalDropArea, slotName, currentDraggable);
						externalDropArea = 1;
						handleDrop(ui.draggable, e.target, externalEmpty);
						externalEmpty = false;
						if (slotName === draggableName) {
							externalDrop = true;
						}
						handleEmptyDrops();
						showSubmit();
					}
				},
			});

		// Internal Draggable
		$(`.internal-${currentQuestion}`)
			.draggable({
				cursor: 'move',
				snap: '.droppable',
				snapMode: 'inner',
				containment: $(`.question-droppable-${currentQuestion}`),
				stop: (e) => {
					const draggable = $(e.target);
					if (draggable.data('slot-placed') === '') {
						detectCollision(e.target);
					}
					draggableResetActive();
					// handleEmptyDrops();
					repositionDraggables();
				},
			});
		// Internal Droppable
		$(`.internal-question-${currentQuestion}`)
			.droppable({
				tolerance: 'fit',
				out: (e, ui) => {
					if ($(ui.draggable[0]).data('slot-placed') === $(e.target).data('slot-name')) {
						$(ui.draggable[0]).data('slot-placed', '');

						if (dontIterate === false) {
							internalDropArea -= 1;
						}

						if (internalEmpty === false) {
							if (internalDropArea === 0) {
								// original size
								// $(e.target).css('height', 'auto');
								internalEmpty = true;
							}
						}
					}
				},

				drop: (e, ui) => {
					const slotName = $(`.internal-question-${currentQuestion}`).data('slot-name');
					const draggableName = ui.draggable.data('draggable-name');

					const currentDraggable = $(`.${draggableName}-${currentQuestion}`);
					if (currentDraggable.data('last-slot') !== slotName) {
						// change the draggable's parent to be underneath the droppable
						// $(e.target).append($(ui.draggable).detach().css({
						// 	top: '',
						// 	left: '',
						// }));

						if (dontIterate === false) {
							internalDropArea += 1;
						}

						handleSlotSwitching(internalDropArea, slotName, currentDraggable);
						internalDropArea = 1;
						handleDrop(ui.draggable, e.target, internalEmpty);
						internalEmpty = false;
						if (slotName === draggableName) {
							internalDrop = true;
						}
						handleEmptyDrops();
						showSubmit();
					}
				},
			});
	}

	function resetDroppable() {
		// refresh slot-placed
		$(`.construct-${currentQuestion}`).data('slot-placed', '').removeClass('disabled-draggable');
		$(`.internal-${currentQuestion}`).data('slot-placed', '').removeClass('disabled-draggable');
		$(`.external-${currentQuestion}`).data('slot-placed', '').removeClass('disabled-draggable');

		$(`.construct-${currentQuestion}`).data('last-slot', '');
		$(`.internal-${currentQuestion}`).data('last-slot', '');
		$(`.external-${currentQuestion}`).data('last-slot', '');

		$(`.construct-question-${currentQuestion}`).css('height', 'auto');
		$(`.internal-question-${currentQuestion}`).css('height', 'auto');
		$(`.external-question-${currentQuestion}`).css('height', 'auto');

		$(`.construct-${currentQuestion}`).css({
			top: '',
			left: '',
		});
		$(`.internal-${currentQuestion}`).css({
			top: '',
			left: '',
		});
		$(`.external-${currentQuestion}`).css({
			top: '',
			left: '',
		});

		constructDrop = false;
		externalDrop = false;
		internalDrop = false;

		constructDropArea = 0;
		externalDropArea = 0;
		internalDropArea = 0;

		constructEmpty = true;
		externalEmpty = true;
		internalEmpty = true;

		$feedback.addClass('d-none');

		if (currentQuestion !== 1) {
			$previous.removeClass('d-none');
		}

		// $tryAgain.addClass('d-none');
	}

	function showExample() {
		$examples.addClass('d-none');
		if (currentQuestion % 2 === 1) {
			currentExample += 1;
		}
		// show example
		$(`#example-${currentExample}`)
			.removeClass('d-none')
			.siblings()
			.addClass('d-none');
		$modal.removeClass('d-none');
	}

	function showQuestion() {
		$questions.addClass('d-none');
		// show question
		$(`.question-${currentQuestion}`).removeClass('d-none');
	}

	function firstQuestion() {
		if (currentQuestion === 1) {
			$previous.addClass('d-none');
		}
	}

	function finalQuestion() {
		if (currentQuestion === 6) {
			$next.addClass('d-none');
			$previous.removeClass('d-none');
		} else {
			$next.removeClass('d-none');
		}
	}

	function showNext() {
		if (dropAnswers[`${currentQuestion}`] || questionAnswer[`${currentQuestion}`]) {
			finalQuestion();
		} else {
			$next.addClass('d-none');
		}
	}

	function complete() {
		if (constructDrop && internalDrop && externalDrop) {
			dropAnswers[`${currentQuestion}`] = true;
			$(`.correct-feedback-${currentQuestion}`).removeClass('d-none');
			$previous.removeClass('d-none');

			showNext();
		} else {
			// $(`.incorrect-feedback-${currentQuestion}`).removeClass('d-none');
			// $tryAgain.removeClass('d-none');
			$modal.modal('toggle');
		}
	}

	function dropCheck() {
		if (dropAnswers[`${currentQuestion}`]) {
			constructDrop = true;
			externalDrop = true;
			internalDrop = true;
			complete();
		} else if (currentQuestion % 2 === 0 && dropAnswers[`${currentQuestion}`] === false) {
			resetDroppable();
			exampleDrop();
		}
	}

	$modal.on('hidden.bs.modal', () => {
		resetDroppable();
		// exampleDrop();
		$(`.construct-${currentQuestion}`).draggable('enable').removeClass('disabled-draggable');
		$(`.internal-${currentQuestion}`).draggable('enable').removeClass('disabled-draggable');
		$(`.external-${currentQuestion}`).draggable('enable').removeClass('disabled-draggable');
	});

	$submit.click(() => {
		$submit.addClass('d-none');
		complete();
		$(`.construct-${currentQuestion}`).draggable('disable').addClass('disabled-draggable');
		$(`.internal-${currentQuestion}`).draggable('disable').addClass('disabled-draggable');
		$(`.external-${currentQuestion}`).draggable('disable').addClass('disabled-draggable');
	});

	// $tryAgain.click(() => {
	// 	resetDroppable();
	// 	exampleDrop();
	// 	$(`.construct-${currentQuestion}`).draggable('enable');
	// 	$(`.internal-${currentQuestion}`).draggable('enable');
	// 	$(`.external-${currentQuestion}`).draggable('enable');
	// });

	$answerBtn.click((e) => {
		if (questionAnswer[`${currentQuestion}`] === false) {
			$(`.feedback-${currentQuestion} .prepended`).remove();
			markAnswers();
			exampleQuestion(e);
			answerTrue();
		}
	});

	$next.click(() => {
		currentQuestion += 1;
		answerTrue();
		setTimeout(() => {
			showExample();
			showQuestion();
			dropCheck();
			showNext();
			$previous.removeClass('d-none');
		}, 25);
	});

	// const $draggable = $('.draggable');
	// let dragTarget;
	$previous.click(() => {
		currentQuestion -= 1;
		currentExample -= 1;
		answerTrue();
		setTimeout(() => {
			showQuestion();
			showExample();
			dropCheck();
			firstQuestion();
			showNext();
			$(`.feedback-${currentQuestion}`).removeClass('d-none');
			dragTarget = undefined;
			$draggable.removeClass('active');
		}, 25);
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$('.form-check-input').focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
		$(e.target).parent('label')
			.addClass('active')
			.siblings('label')
			.removeClass('active');
	});

	const $dropDropdown = $('.dropdown-item');
	$dropDropdown.click((e) => {
		let dropSpot = $(e.target).data('drop');
		dropSpot = document.getElementById(dropSpot);

		let dragObj = $(e.target).data('value');
		dragObj = document.getElementById(dragObj);

		// Drag to spot
		dragDraggable(dragObj, dropSpot);
	});

	let isDragging = false;
	$draggable
		.mousedown(() => {
			$(window).mousemove(() => {
				isDragging = true;
				$(window).unbind('mousemove');
			});
		})
		.mouseup(() => {
			// const wasDragging = isDragging;
			// isDragging = false;
			$(window).unbind('mousemove');
			// if (!wasDragging) {
			// $(this).selection();
			// }
		});

	$draggable.click((e) => {
		if (isDragging === false) {
			// Add class to make it look activated
			$draggable.removeClass('active');
			$(e.currentTarget).addClass('active');
			// Save to var when draggable is clicked
			dragTarget = e.currentTarget;
		} else {
			isDragging = false;
		}
	});

	const $droppable = $('.droppable');
	$droppable.click((e) => {
		const dropSpot = e.currentTarget;
		const dragObj = dragTarget;
		// if draggable is saved to var, move and clear var
		if (typeof dragTarget !== 'undefined') {
			// Drag to spot
			dragDraggable(dragObj, dropSpot);
		}
	});

	$('.dropdown-toggle, .droppable, .draggable').keydown((val) => {
		if (val.which === 13) {
			val.stopPropagation();
			val.preventDefault();
			$(val.target).click();
		}
	});

	$('a').click((e) => {
		e.preventDefault();
	});

	$('.dropdown').on('shown.bs.dropdown', () => {
		$('.dropdown-item:visible:first').focus();
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
});
