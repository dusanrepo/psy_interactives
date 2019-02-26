$(document).ready(() => {
	const sliderBar = $('.slider-range-max');
	const $minus = $('.minus');
	const $plus = $('.plus');
	const slideMin = 1;
	const slideMax = 5;
	let direction = 'plus';
	const $modal = $('.modal');

	let draggableObjKey = ''; // tracks the droppable that the draggable belongs to

	const $droppable = $('.droppable');
	const $draggable = $('.draggable');


	function ChangeImageNegative(uiVal) {
		$(`.negative-${uiVal}`).removeClass('d-none').siblings('.img').addClass('d-none');
	}

	function ChangeImagePositive(uiVal) {
		$(`.positive-${uiVal}`).removeClass('d-none').siblings('.img').addClass('d-none');
	}

	let uiValue;

	function uiSlider() {
		sliderBar.slider({
			range: 'max',
			min: slideMin,
			max: slideMax,
			value: 1,
			slide(event, ui) {
				uiValue = ui.value;
				switch (direction) {
				case 'plus':
					ChangeImagePositive(ui.value);
					break;
				case 'minus':
					ChangeImageNegative(ui.value);
					break;
				default:
					break;
				}
			},
		}).each(() => {
			let el;
			const options = ['.10', '.30', '.45', '.60', '.90'];
			// Get the number of possible values
			const vals = options.length;
			// Position the labels
			for (let i = 0; i < vals; i += 1) {
				// Create a new element and position it with percentages
				el = $(`<label class="slider-label"><strong>${options[i]}</strong></label>`).css('left', `${(i / vals) * 125}%`);
				// Add the element inside #slider
				sliderBar.append(el);
			}
		});
	}

	function complete() {
		if ($('#drag40').hasClass('btn-success') && $('#drag80').hasClass('btn-success') && $('#drag21').hasClass('btn-success')) {
			$('.complete-text').removeClass('d-none');
			$('.feedback-correct').addClass('d-none');
			$('.feedback-incorrect').addClass('d-none');
			$('.dropdown-toggle').addClass('d-none');
		}
	}

	function drag40() {
		$('.drag40').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					return true;
				}
				if (droppableObj.data('drop-name') !== draggableObjKey) {
					$('.drag40').removeClass('btn-primary');
					$('.drag40').addClass('btn-danger');
					$modal.modal('toggle');
					setTimeout(() => {
						$('.drag40').removeClass('btn-danger');
						$('.drag40').addClass('btn-primary');
					}, 100);
					return true;
				}
				return false;
			},
			drag: (event, ui) => {
				$draggable.removeClass('active');
				$(ui.draggable).addClass('active');
				$('.feedback-correct').addClass('d-none');
			},
		});
		$('#snap40').droppable({
			tolerance: 'intersect',
			drop: (event, ui) => {
				const dropName = $('#snap40').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (dropName === dropKey) {
					$('.drag40').removeClass('btn-primary');
					$('.drag40').addClass('btn-success');
					$('.feedback-correct').removeClass('d-none');
					// setTimeout(() => {
					// 	$('.feedback-correct').addClass('d-none');
					// }, 2000);
					complete();
					$('.final40').removeClass('d-none');
					$('.drag40').addClass('d-none');
				}
			},
		});
	}

	function drag80() {
		$('.drag80').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					return true;
				}
				if (droppableObj.data('drop-name') !== draggableObjKey) {
					$('.drag80').removeClass('btn-primary');
					$('.drag80').addClass('btn-danger');
					$modal.modal('toggle');
					setTimeout(() => {
						$('.drag80').removeClass('btn-danger');
						$('.drag80').addClass('btn-primary');
					}, 100);
					return true;
				}
				return false;
			},
			drag: (event, ui) => {
				$draggable.removeClass('active');
				$(ui.draggable).addClass('active');
				$('.feedback-correct').addClass('d-none');
			},
		});
		$('#snap80').droppable({
			tolerance: 'fit',
			drop: (event, ui) => {
				const dropName = $('#snap80').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (dropName === dropKey) {
					$('.drag80').removeClass('btn-primary');
					$('.drag80').addClass('btn-success');
					$('.feedback-correct').removeClass('d-none');
					// setTimeout(() => {
					// 	$('.feedback-correct').addClass('d-none');
					// }, 2000);
					complete();
					$('.final80').removeClass('d-none');
					$('.drag80').addClass('d-none');
				}
			},
		});
	}

	function drag21() {
		$('.drag21').draggable({
			snap: '.ui-widget-header',
			snapMode: 'inner',
			revert(droppableObj) {
				if (droppableObj === false) {
					return true;
				}
				if (droppableObj.data('drop-name') !== draggableObjKey) {
					$('.drag21').removeClass('btn-primary');
					$('.drag21').addClass('btn-danger');
					$modal.modal('toggle');
					setTimeout(() => {
						$('.drag21').removeClass('btn-danger');
						$('.drag21').addClass('btn-primary');
					}, 100);
					return true;
				}
				return false;
			},
			drag: (event, ui) => {
				$draggable.removeClass('active');
				$(ui.draggable).addClass('active');
				$('.feedback-correct').addClass('d-none');
			},
		});
		$('#snap21').droppable({
			tolerance: 'fit',
			drop: (event, ui) => {
				const dropName = $('#snap21').data('drop-name');
				const dropKey = ui.draggable.data('drop-key');
				draggableObjKey = dropKey;
				if (dropName === dropKey) {
					$('.drag21').removeClass('btn-primary');
					$('.drag21').addClass('btn-success');
					$('.feedback-correct').removeClass('d-none');
					// setTimeout(() => {
					// 	$('.feedback-correct').addClass('d-none');
					// }, 2000);
					complete();
					$('.final21').removeClass('d-none');
					$('.drag21').addClass('d-none');
				}
			},
		});
	}

	$('#next').on('click', () => {
		$('.main-container').addClass('d-none');
		$('.drag-container').removeClass('d-none');
		$('.feedback-area').removeClass('d-none');
		$('#next').addClass('d-none');
		$('#previous').removeClass('d-none');
	});

	$('#previous').on('click', () => {
		$('.main-container').removeClass('d-none');
		$('.drag-container').addClass('d-none');
		$('.feedback-area').addClass('d-none');
		$('#next').removeClass('d-none');
		$('#previous').addClass('d-none');
	});

	$plus.on('click', () => {
		$('.slider-label').remove();
		sliderBar.slider().each(() => {
			let el;
			const options = ['.10', '.30', '.45', '.60', '.90'];
			// Get the number of possible values
			const vals = options.length;
			// Position the labels
			for (let i = 0; i < vals; i += 1) {
				// Create a new element and position it with percentages
				el = $(`<label class="slider-label"><strong>${options[i]}</strong></label>`).css('left', `${(i / vals) * 125}%`);
				// Add the element inside #slider
				sliderBar.append(el);
			}
		});
		$('.positive').addClass('d-none');
		$('.negative').addClass('d-none');
		direction = 'plus';
		$('.plus').addClass('active');
		$('.minus').removeClass('active');
		$('.positive-1').removeClass('d-none').siblings('.img').addClass('d-none');
		$(`.positive-${uiValue}`).removeClass('d-none').siblings('.img').addClass('d-none');
	});

	$minus.on('click', () => {
		$('.slider-label').remove();
		sliderBar.slider().each(() => {
			let el;
			const options = ['-.10', '-.30', '-.45', '-.60', '-.90'];
			// Get the number of possible values
			const vals = options.length;
			// Position the labels
			for (let i = 0; i < vals; i += 1) {
				// Create a new element and position it with percentages
				el = $(`<label class="slider-label"><strong>${options[i]}</strong></label>`).css('left', `${(i / vals) * 125}%`);
				// Add the element inside #slider
				sliderBar.append(el);
			}
		});
		$('.positive').addClass('d-none');
		$('.negative').addClass('d-none');
		direction = 'minus';
		$('.minus').addClass('active');
		$('.plus').removeClass('active');
		$('.negative-1').removeClass('d-none').siblings('.img').addClass('d-none');
		$(`.negative-${uiValue}`).removeClass('d-none').siblings('.img').addClass('d-none');
	});

	drag40();
	drag80();
	drag21();
	uiSlider();

	function dragDraggable(draggable, droppable) {
		const droppableOffset1 = droppable.offset();
		const x1 = droppableOffset1.left + (draggable.width()) + 1;
		const y1 = droppableOffset1.top + (draggable.height() / 2) + 1;
		setTimeout(() => {
			draggable.simulate('drag', {
				x: x1,
				y: y1,
			});
		}, 25);
	}

	const $dropDropdown = $('.dropdown-item');
	$dropDropdown.click((e) => {
		const dropSpot = $(`#${$(e.target).data('drop')}`);
		const dragObj = $(`#${$(e.target).data('value')}`);
		// Drag to spot
		dragDraggable(dragObj, dropSpot);
	});

	let dragId;
	$draggable.click((e) => {
		// Add class to make it look activated
		$draggable.removeClass('active');
		$(e.currentTarget).addClass('active');
		// Save to var when draggable is clicked
		dragId = e.currentTarget.getAttribute('id');
	});


	$droppable.click((e) => {
		const dropSpot = $(e.currentTarget);
		const dragObj = $(`#${dragId}`);
		// if draggable is saved to var, move and clear var
		if (typeof dragId !== 'undefined') {
			// Drag to spot
			dragDraggable(dragObj, dropSpot);
			$draggable.removeClass('active');
			dragId = undefined;
		}
	});

	$('.dropdown-toggle, .droppable, .draggable').keydown((val) => {
		if (val.which === 13) {
			$('.feedback-correct').addClass('d-none');
			$(val.target).click();
		}
	});

	let $modalOpener;
	$('.dropdown-toggle').focus((e) => {
		$modalOpener = $(e.target);
	});

	$('.dropdown').on('shown.bs.dropdown', () => {
		$('.dropdown-item:visible:first').focus();
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
		$modalOpener.focus();
	});

	$('.try-again').click(() => {
		$modal.modal('toggle');
	});
});
