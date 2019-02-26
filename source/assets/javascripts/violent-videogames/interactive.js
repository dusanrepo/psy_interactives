$(document).ready(() => {
	const $containment = $('.container');

	const $next = $('.next');
	const $previous = $('.previous');

	let stage = 0;

	const stageComplete = {
		0: false,
		1: false,
		2: false,
		3: false,
	};

	const stageVariables = {
		0: 'Arousal',
		1: 'Cooperation',
		2: 'Expertise',
		3: 'Trait aggression',
	};

	const stageAnswers = {
		0: 'more',
		1: 'less',
		2: 'less',
		3: 'more',
	};

	function setStage() {
		// hide .stage
		$('.stage').addClass('d-none');
		// show .stage-${stage}
		$(`.stage-${stage}`).removeClass('d-none');
		// update .text-droppable.variable
		$('.text-droppable.variable').html(stageVariables[stage]);

		$next.addClass('invisible');

		if (stageComplete[stage]) { // if current stage is complete
			$('.feedback').addClass('d-none');
			$(`.feedback.correct-${stage}`).removeClass('d-none');
			if (stage < 3) {
				$next.removeClass('invisible');
			}
		} else {
			$next.addClass('invisible');
			$('.feedback').addClass('d-none');
			$('.feedback.instructions').removeClass('d-none');
		}

		if (stage > 0) {
			$previous.removeClass('d-none');
		} else {
			$previous.addClass('d-none');
		}
	}

	const $draggable = $('.draggable');
	let dragTarget;

	function returnDraggable(draggable) {
		draggable.css('top', '');
		draggable.css('left', '');
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
				draggable.attr('data-slot-placed', true);
			}, 25);
			dragTarget = undefined;
			$draggable.removeClass('active');
		}, 25);
	}

	function createInteractables() {
		for (let i = 0; i < 4; i += 1) {
			$(`.snaptarget-${i}`).droppable({
				tolerance: 'touch',
				drop: (e, ui) => { // eslint-disable-line
					const draggableName = $(ui.draggable).data('draggable-name');
					// drag this one into place
					dragDraggable(ui.draggable, $(`.snaptarget-${i}`));

					if (stageAnswers[stage] === draggableName) { // if correct
						// disable dropdown
						$(`.snaptarget-${i}.dropdown-toggle`).addClass('disabled');

						// disable draggable
						setTimeout(() => {
							$(`.stage-${stage}-draggable`).draggable('disable');
						}, 50);

						$(`.feedback.correct-${stage}`).removeClass('d-none')
							.siblings('.feedback')
							.addClass('d-none');

						// remove highlight from draggables
						$('.draggable:visible').addClass('drag-active-override');

						// mark as complete
						stageComplete[stage] = true;
						if (stage < 3) {
							// show next
							$next.removeClass('invisible');
						}
					} else {
						$('#incorrect').modal('show');
					}
				},
			});


			$(`.more-draggable-${i}`).draggable({
				containment: $containment,
				scroll: false,
				snap: $(`.snaptarget-${i}`),
				snapMode: 'inner',
				revert(droppable) {
					if (droppable === false) {
						return true;
					}
					return false;
				},
			});

			$(`.less-draggable-${i}`).draggable({
				containment: $containment,
				scroll: false,
				snap: $(`.snaptarget-${i}`),
				snapMode: 'inner',
				revert(droppable) {
					if (droppable === false) {
						return true;
					}
					return false;
				},
			});
		}
	}

	createInteractables();

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	const $dropDropdown = $('.dropdown-item');
	$dropDropdown.click((e) => {
		const dropSpot = $(`#${$(e.target).data('drop')}-${stage}`);
		const dragObj = $(`.${$(e.target).data('value')}-draggable-${stage}`);
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

	const $droppable = $('.droppable');
	$droppable.click((e) => {
		const dropSpot = $(e.currentTarget);
		const dragObj = dragTarget;
		// if draggable is saved to var, move and clear var
		if (dragTarget !== undefined) {
			// Drag to spot
			dragDraggable(dragObj, dropSpot);
		}
	});

	$('.dropdown-toggle, .droppable, .draggable, a').keydown((val) => {
		if (val.which === 13) {
			val.stopPropagation();
			val.preventDefault();
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
		returnDraggable($('.draggable[data-slot-placed=\'true\']:visible'));
	});

	$('.dropdown').on('shown.bs.dropdown', () => {
		console.log('dropdown open');

		$('.dropdown-item:visible:first').focus();
	});
});
