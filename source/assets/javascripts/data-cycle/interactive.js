$(document).ready(() => {
	let stage = 1;
	let currentProgression = 'theoryDrop';
	let completed = false;
	let draggableObjKey = ''; // tracks the droppable that the draggable belongs to
	const $next = $('.next');
	// theory -> hypothesis -> design -> observe -> compare
	const targetSequence = [
		{ target: $('#snaptarget1'), handlerValidation: 'theoryDrop' },
		{ target: $('#snaptarget2'), handlerValidation: 'hypothesisDrop' },
		{ target: $('#snaptarget3'), handlerValidation: 'designDrop' },
		{ target: $('#snaptarget4'), handlerValidation: 'observeDrop' },
		{ target: $('#snaptarget5'), handlerValidation: 'compareDrop' }];

	const interactiveLabels = ['.compare', '.observe', '.theory', '.hypothesis', '.design'];

	function interactiveCompletion() {
		$('.complete-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
		$next.addClass('d-none');
		$('.dropdown-toggle').addClass('disabled');
		$('.draggable').removeClass('active');
		interactiveLabels.forEach((label) => {
			const reviewText = `${label}-review-text`;
			$(`${label}`).draggable('disable');
			$(label).click(() => {
				$(reviewText).removeClass('d-none').siblings('.maintext').addClass('d-none');
				$next.addClass('d-none');
			});
		});
	}

	function stageForward(nextStageHandler) {
		if (completed === false) {
			$('.error-text').addClass('d-none');
			// remove active-target from current stage before moving on
			targetSequence[stage - 1].target.removeClass('active-target');
			stage += 1;

			currentProgression = targetSequence[stage - 1].handlerValidation;
			targetSequence[stage - 1].target.addClass('active-target');
			nextStageHandler();
		}
	}

	// first stage starts at 1
	function complete() {
		if (stage === 5) {
			completed = true;
			$next.removeClass('d-none');
			$next.click(interactiveCompletion);
			$('#snaptarget5').removeClass('active-target');
		}
	}

	function centerDraggable(draggable, droppable) {
		const droppableOffset = droppable.offset();

		draggable.offset({
			left: droppableOffset.left,
			top: droppableOffset.top,
		});

		setTimeout(() => {
			draggable.offset({
				left: droppableOffset.left,
				top: droppableOffset.top,
			});
		}, 100);
		draggable.draggable('disable');
	}

	function compareDrop() {
		$('.compare').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					$('.error-text').addClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				if (currentProgression === droppableObj.data('drop-name') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (droppableObj.data('has-object') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (currentProgression !== 'compareDrop') {
					$('.warning-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				return false;
			},
		});
		$('#snaptarget5').droppable({
			tolerance: 'touch',
			drop: (event, ui) => {
				const dropName = $('#snaptarget5').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (currentProgression === 'compareDrop' && dropName === dropKey) {
					$('.compare-menu').addClass('d-none');
					$('.compare-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					complete();
					centerDraggable($('.compare'), $('#snaptarget5'));
					$('#snaptarget5').data('has-object', true);
				}
			},
		});
	}

	function observeDrop() {
		$('.observe').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					$('.error-text').addClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				if (currentProgression === droppableObj.data('drop-name') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (droppableObj.data('has-object') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (currentProgression !== droppableObj.data('drop-name')) {
					$('.warning-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				stageForward(compareDrop);
				return false;
			},
		});
		$('#snaptarget4').droppable({
			tolerance: 'touch',
			drop: (event, ui) => {
				const dropName = $('#snaptarget4').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (currentProgression === 'observeDrop' && dropName === dropKey) {
					$('.observe-menu').addClass('d-none');
					$('.observe-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					complete();
					centerDraggable($('.observe'), $('#snaptarget4'));
					$('#snaptarget4').data('has-object', true);
				}
			},
		});
	}

	function designDrop() {
		$('.design').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					$('.error-text').addClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}
				if (currentProgression === droppableObj.data('drop-name') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (droppableObj.data('has-object') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (currentProgression !== droppableObj.data('drop-name')) {
					$('.warning-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				stageForward(observeDrop);
				return false;
			},
		});
		$('#snaptarget3').droppable({
			tolerance: 'touch',
			drop: (event, ui) => {
				const dropName = $('#snaptarget3').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (currentProgression === 'designDrop' && dropName === dropKey) {
					$('.design-menu').addClass('d-none');
					$('.design-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					complete();
					centerDraggable($('.design'), $('#snaptarget3'));
					$('#snaptarget3').data('has-object', true);
				}
			},
		});
	}

	function hypothesisDrop() {
		$('.hypothesis').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					// $('.error-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					$('.error-text').addClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}
				if (currentProgression === droppableObj.data('drop-name') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (droppableObj.data('has-object') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				if (currentProgression !== droppableObj.data('drop-name')) {
					$('.warning-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				stageForward(designDrop);
				return false;
			},
		});
		$('#snaptarget2').droppable({
			tolerance: 'touch',
			drop: (event, ui) => {
				const dropName = $('#snaptarget2').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (currentProgression === 'hypothesisDrop' && dropName === dropKey) {
					$('.hypothesis-menu').addClass('d-none');
					$('.hypothesis-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					complete();
					centerDraggable($('.hypothesis'), $('#snaptarget2'));
					$('#snaptarget2').data('has-object', true);
				}
			},
		});
	}

	function theoryDrop() {
		$('#snaptarget1').addClass('active-target');
		$('.theory').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					// $('.error-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					$('.error-text').addClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}
				// when the dropped object is not correct
				if (currentProgression === droppableObj.data('drop-name') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				// if the droppable already has a draggable in it
				if (droppableObj.data('has-object') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('#incorrect').modal('show');
					return true;
				}

				// the dropped element is in the wrong snaptarget
				if (currentProgression !== droppableObj.data('drop-name')) {
					$('.warning-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					return true;
				}

				// the dropped element is correct, move on to next stage.
				stageForward(hypothesisDrop);
				return false;
			},
		});
		$('#snaptarget1').droppable({
			// accept: '.theory',
			tolerance: 'touch',
			drop: (event, ui) => {
				const dropName = $('#snaptarget1').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;

				const droppableObj = $(event.target);
				// if it is the current progresison, and it is right, move on
				if (currentProgression === 'theoryDrop' && dropName === dropKey) {
					$('.theory-menu').addClass('d-none');
					$('.theory-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
					complete();
					centerDraggable($('.theory'), $('#snaptarget1'));
					$('#snaptarget1').data('has-object', true);
					// setTimeout(stageForward(hypothesisDrop), 100);
					// if currentProgression is not for the drop, but the drag is right, display warning
				} else if (droppableObj.data('has-object') && currentProgression === droppableObj.data('drop-name') && droppableObj.data('drop-name') !== draggableObjKey) {
					$('.error-text').removeClass('d-none').siblings('.maintext').addClass('d-none');
				}
			},
		});
	}

	theoryDrop();
	designDrop();
	observeDrop();
	hypothesisDrop();
	compareDrop();

	const $dropdownMenu = $('.dropdown-menu');
	const $draggable = $('.draggable');
	let dragTarget;

	function dragDraggable(draggable, droppable) {
		// Don't use jQuery offset
		const x1 = ((droppable.getBoundingClientRect().left + droppable.getBoundingClientRect().right) / 2) + 1; // eslint-disable-line
		const y1 = (droppable.getBoundingClientRect().top) + ($(draggable).height() / 2); // eslint-disable-line
		setTimeout(() => {
			$(draggable).simulate('drag', {
				x: x1,
				y: y1,
			});
			setTimeout(() => {
				$(draggable).simulate('drag', {
					x: x1,
					y: y1,
				});
				dragTarget = undefined;
				$draggable.removeClass('active');
				$dropdownMenu.removeClass('d-none');
			}, 25);
		}, 25);
	}

	const $dropDropdown = $('.dropdown-item');
	$dropDropdown.click((e) => {
		let dropSpot = $(e.target).data('drop');
		dropSpot = document.getElementById(dropSpot);
		let dragObj = $(e.target).data('value');
		dragObj = document.getElementById(dragObj);
		// Drag to spot
		dragDraggable(dragObj, dropSpot);
	});

	$draggable.click((e) => {
		// Add class to make it look activated
		$draggable.removeClass('active');
		$(e.currentTarget).addClass('active');
		// Save to var when draggable is clicked
		dragTarget = e.currentTarget;
		$dropdownMenu.addClass('d-none');
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

	$(window).resize(() => {
		if (stage > 1) {
			centerDraggable($('.theory'), $('#snaptarget1'));
		}
		if (stage > 2) {
			centerDraggable($('.hypothesis'), $('#snaptarget2'));
		}
		if (stage > 3) {
			centerDraggable($('.design'), $('#snaptarget3'));
		}
		if (stage > 4) {
			centerDraggable($('.observe'), $('#snaptarget4'));
		}
		if (completed) {
			centerDraggable($('.compare'), $('#snaptarget5'));
		}
	});

	let $modalOpener;
	$('.dropdown-toggle').focus((e) => {
		$modalOpener = $(e.target);
	});

	$('.droppable, .draggable').keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
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
	});

	$('.modal').on('hidden.bs.modal', () => {
		$modalOpener.focus();
	});
});
