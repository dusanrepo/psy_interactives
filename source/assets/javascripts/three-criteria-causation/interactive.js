$(document).ready(() => {
	const $covariance = $('.covariance-circle');
	const temporalPrecedence = $('.temporal-precedence-circle');
	const $alternative = $('.alternative-circle');

	const $causality = $('.triangle');
	const $causalityText = $('.triangle p');

	const $stages = $('.stage');
	const $shapes = $('.shape');

	const $option = $('.option');

	const $next = $('.next');
	const $previous = $('.previous');

	const $draggable = $('.draggable');
	let dragTarget;

	const $covarianceBtn = $('.covariance-btn');
	const temporalPrecedenceBtn = $('.temporal-precedence-btn');
	const $alternativeBtn = $('.alternative-btn');

	const $temporalPrecedencePrevBtn = $('.previous-temporal-precedence-btn');
	let temporalPrev = 0;
	const $covariancePrevBtn = $('.previous-covariance-btn');
	let covariancePrev = 0;

	let stage = 1;
	let hasRun = false;

	let referrerPage = null;
	let referrerPageNext = null;

	const activityDone = {
		covariance: false,
		'temporal-precedence': false,
		'alternative-explanations': false,
	};

	function setMain() {
		$stages.addClass('d-none');
		$('#stage-0').removeClass('d-none');

		if (activityDone.covariance === false) {
			$('.initial.main-feedback').removeClass('d-none');
			$shapes.removeClass('highlighted');
			$covariance.addClass('highlighted');
			$('.current-link').removeClass('current-link');
			$('.cov.circle-link').addClass('current-link');
			$('.circle-link').removeAttr('role');
			$('.cov.circle-link').attr('role', 'link');
		} else if (referrerPageNext === 'covariance') {
			$('.post-covariance.main-feedback').removeClass('d-none');
			$shapes.removeClass('highlighted');
			temporalPrecedence.addClass('highlighted');
			$('.current-link').removeClass('current-link');
			$('.tp.circle-link').addClass('current-link');
			$('.circle-link').removeAttr('role');
			$('.tp.circle-link').attr('role', 'link');

			if ($covariancePrevBtn.hasClass('d-none')) {
				$temporalPrecedencePrevBtn.removeClass('d-none').parent().removeClass('d-none');
			}

			if (stage === 4) { // if user arrived from covariance came back from alt exp
				temporalPrev = 0;
			} else { // else user came back from temporal
				temporalPrev = 1;
			}
			stage = 2;
		} else if (referrerPageNext === 'temporal') {
			stage = 3;
			$('.post-temporal-precedence.main-feedback').removeClass('d-none');
			$shapes.removeClass('highlighted');
			$alternative.addClass('highlighted');
			$('.current-link').removeClass('current-link');
			$('.alt.circle-link').addClass('current-link');
			$('.circle-link').removeAttr('role');
			$('.alt.circle-link').attr('role', 'link');
			temporalPrecedence.addClass('complete');
		} else {
			$shapes.removeClass('highlighted');
			$('.post-alternative.main-feedback').removeClass('d-none');
			$('.current-link').removeClass('current-link');
			$('.circle-link').removeAttr('role');
			$alternative.addClass('complete');
		}
	}

	function setPrevMain() {
		$stages.addClass('d-none');
		$('#stage-0').removeClass('d-none');
		if (referrerPage === 'covariance') {
			// highlight covariance, make clickable
			// show pre-covariance feedback
			$('.initial.main-feedback').removeClass('d-none');
			$shapes.removeClass('highlighted');
			$covariance.addClass('highlighted');
			$('.current-link').removeClass('current-link');
			$('.cov.circle-link').addClass('current-link');
			$('.circle-link').removeAttr('role');
			$('.cov.circle-link').attr('role', 'link');
			$('.complete').removeClass('complete');
		} else if (referrerPage === 'temporal') {
			// highlight temporal
			// show pre-temporal feedback
			$('.post-covariance.main-feedback').removeClass('d-none');
			$shapes.removeClass('highlighted');
			temporalPrecedence.addClass('highlighted');
			$('.current-link').removeClass('current-link');
			$('.tp.circle-link').addClass('current-link');
			$('.circle-link').removeAttr('role');
			$('.tp.circle-link').attr('role', 'link');

			if ($covariancePrevBtn.hasClass('d-none')) {
				$temporalPrecedencePrevBtn.removeClass('d-none').parent().removeClass('d-none');
			}

			if (stage === 4) { // if user arrived from covariance came back from alt exp
				temporalPrev = 0;
			} else { // else user came back from temporal
				temporalPrev = 1;
			}
			stage = 2;

			$('.complete').removeClass('complete');
			$covariance.addClass('complete');
		} else if (referrerPage === 'alternative') {
			// highlight alternative
			// show pre-alternative feedback
			stage = 3;
			$('.post-temporal-precedence.main-feedback').removeClass('d-none');
			$shapes.removeClass('highlighted');
			$alternative.addClass('highlighted');
			$('.current-link').removeClass('current-link');
			$('.alt.circle-link').addClass('current-link');
			$('.circle-link').removeAttr('role');
			$('.alt.circle-link').attr('role', 'link');
			$('.complete').removeClass('complete');
			$covariance.addClass('complete');
			temporalPrecedence.addClass('complete');
		}
	}

	const $covarianceContent = $('.covariance-load');

	function setCovariance() {
		$stages.addClass('d-none');
		$('#stage-1').removeClass('d-none');
		// show graph
		$covarianceContent.removeClass('d-none');
		// $covarianceContent.css('opacity', '0');
		// $covarianceContent.animate({ opacity: '1' }, 800);
		$covarianceBtn.removeClass('d-none').parent().removeClass('d-none');
		// show prev
		$previous.addClass('d-none');
		$covariancePrevBtn.removeClass('d-none').parent().removeClass('d-none');
		covariancePrev = 0;
	}

	$covarianceBtn.click(() => {
		activityDone.covariance = true;
		$covarianceBtn.addClass('d-none').parent().addClass('d-none');
		$covariance.addClass('complete');
		referrerPageNext = 'covariance';
		setMain();
		// dsfsfd;
		covariancePrev = 1;
	});

	$covariance.click(() => {
		if (stage === 1) {
			stage += 1;
			setCovariance();
		}
	});

	$covariancePrevBtn.click(() => {
		if (covariancePrev === 0) {
			covariancePrev += 1;
			stage -= 1;
			$covarianceBtn.addClass('d-none').parent().addClass('d-none');
			referrerPage = 'covariance';
			setPrevMain();
			// hide self
			$previous.addClass('d-none');
		} else {
			setCovariance();
		}
	});

	const temporalPrecedenceContent = $('.temporal-precedence-load');
	const temporalPrecedenceContainment = $('.containment-wrapper');

	function setTemporal() {
		$stages.addClass('d-none');
		$('#stage-2').removeClass('d-none');
		// show stage-2 content
		temporalPrecedenceContent.removeClass('d-none');
		// temporalPrecedenceContent.css('opacity', '0');
		// temporalPrecedenceContent.animate({ opacity: '1' }, 800);
		// show prev
		$previous.addClass('d-none');
		$temporalPrecedencePrevBtn.removeClass('d-none').parent().removeClass('d-none');
		temporalPrev = 0;

		if (activityDone['temporal-precedence']) {
			temporalPrecedenceBtn.removeClass('d-none').parent().removeClass('d-none');
		}
	}

	temporalPrecedenceBtn.click(() => {
		temporalPrecedenceBtn.addClass('d-none').parent().addClass('d-none');
		referrerPageNext = 'temporal';
		setMain();
		temporalPrev = 2;
	});

	temporalPrecedence.click(() => {
		if (stage === 2) {
			stage += 1;
			setTemporal();
		}
	});

	$temporalPrecedencePrevBtn.click(() => {
		if (temporalPrev === 0) {
			stage -= 1;
			temporalPrev += 1;
			temporalPrecedenceBtn.addClass('d-none').parent().addClass('d-none');
			referrerPage = 'temporal';
			setPrevMain();
		} else if (temporalPrev === 1) {
			temporalPrev -= 1;
			// hide self
			$previous.addClass('d-none');
			setCovariance();
		} else if (temporalPrev === 2) {
			// hide self
			$previous.addClass('d-none');
			setTemporal();
		}
	});

	const $alternativePrevBtn = $('.previous-alternative-btn');
	const $alternativeContent = $('.alternative-load');

	let altPrev = 0;
	function setAlternative() {
		$stages.addClass('d-none');
		$('#stage-3').removeClass('d-none');
		// show stage-3 content
		$alternativeContent.removeClass('d-none');
		// $alternativeContent.css('opacity', '0');
		// $alternativeContent.animate({ opacity: '1' }, 800);
		if (!hasRun) {
			const optionWidth = $('.option4').width() * 3;
			$option.css('width', optionWidth);
			hasRun = true;
		}
		if (activityDone['alternative-explanations']) {
			$alternativeBtn.removeClass('d-none').parent().removeClass('d-none');
		}
		// show prev
		$previous.addClass('d-none');
		$alternativePrevBtn.removeClass('d-none').parent().removeClass('d-none');
		altPrev = 0;
	}

	$alternativeBtn.click(() => {
		$alternativeBtn.addClass('d-none').parent().addClass('d-none');
		// color triangle
		// $causality.css('border-color', 'transparent transparent #2173ba');
		// $causality.animate({ 'border-color': 'transparent transparent #4caf50' }, 1000);
		$causality.css({ 'border-color': 'transparent transparent #2173ba' });
		setTimeout(() => {
			$causality.css({ 'border-color': 'transparent transparent #4caf50' });
		}, 25);
		$causalityText.css({ color: '#000' });
		referrerPageNext = 'end';
		setMain();
		altPrev = 2;
	});

	$alternative.click(() => {
		if (stage === 3) {
			stage += 1;
			setAlternative();
		}
	});

	$alternativePrevBtn.click(() => {
		// bug: disallow users from changing correct answer
		if (altPrev === 0) {
			stage -= 1;
			altPrev += 1;
			$alternativeBtn.addClass('d-none').parent().addClass('d-none');
			referrerPage = 'alternative';
			setPrevMain();
		} else if (altPrev === 1) {
			// hide self
			$previous.addClass('d-none');
			setTemporal();
		} else if (altPrev === 2) {
			// hide self
			$previous.addClass('d-none');
			setAlternative();
		}
	});

	// Temporal precedence

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

	function centerDraggable(draggable, droppable) {
		const droppableOffset = droppable.offset();

		draggable.offset({
			left: droppableOffset.left,
			top: droppableOffset.top,
		});
		// draggable.draggable('disable');
	}

	const $candiesDrag = $('.candies-draggable');
	const $socialDrag = $('.social-draggable');
	const $socialDrop = $('.snaptarget-1');
	const $candiesDrop = $('.snaptarget-2');
	let manualDrag = true;
	let answerSocial = null;
	let answerCandies = null;

	function detectCollision(draggable) {
		const rect1 = draggable.getBoundingClientRect();
		const rect2 = $candiesDrop.get(0).getBoundingClientRect();
		const rect3 = $socialDrop.get(0).getBoundingClientRect();

		let candiesOverlap = false;
		let socialOverlap = false;

		candiesOverlap = !(rect1.right < rect2.left ||
				rect1.left > rect2.right ||
				rect1.bottom < rect2.top ||
				rect1.top > rect2.bottom);
		socialOverlap = !(rect1.right < rect3.left ||
				rect1.left > rect3.right ||
				rect1.bottom < rect3.top ||
				rect1.top > rect3.bottom);

		if (candiesOverlap) {
			$(draggable).data('slot-placed', 'candies');
			$(draggable).attr('data-slot-placed', 'candies');
		} else if (socialOverlap) {
			$(draggable).data('slot-placed', 'social');
			$(draggable).attr('data-slot-placed', 'social');
		}
	}

	$candiesDrag.draggable({
		containment: temporalPrecedenceContainment,
		scroll: false,
		snap: $candiesDrop,
		snapMode: 'inner',
		stop: (e) => {
			const draggable = $(e.target);
			if (draggable.data('slot-placed') === '') {
				detectCollision(e.target);
			}
		},
	});

	$candiesDrop.droppable({
		// accept: $candiesDrag,
		tolerance: 'pointer',
		out: (e, ui) => {
			if ($(ui.draggable[0]).data('slot-placed') === $(e.target).data('slot-name')) {
				$(ui.draggable[0]).data('slot-placed', '');
			}
		},
		drop: (e, ui) => {
			const slotName = $candiesDrop.data('slot-name');
			const draggableName = ui.draggable.data('draggable-name');

			const draggable = $(ui.draggable);
			draggable.data('slot-placed', slotName);
			centerDraggable(draggable, $candiesDrop);
			$draggable.removeClass('active');

			if (slotName === draggableName) {
				answerCandies = true;
				if (answerSocial && manualDrag) {
					if ($candiesDrag.data('slot-placed') && $socialDrag.data('slot-placed')) {
						$('.stage-2.feedback.correct').removeClass('d-none');
						temporalPrecedenceBtn.removeClass('d-none').parent().removeClass('d-none');
						manualDrag = true;
						setTimeout(placeDroppables, 25); // eslint-disable-line
					}
				}
			} else {
				answerSocial = false;
				if ($candiesDrag.data('slot-placed') && $socialDrag.data('slot-placed')) {
					if (answerCandies === false && manualDrag) {
						manualDrag = false;
						setTimeout(placeDroppables, 25); // eslint-disable-line
					}
				}
			}
		},
	});

	$socialDrag.draggable({
		containment: temporalPrecedenceContainment,
		scroll: false,
		snap: $socialDrop,
		snapMode: 'inner',
		stop: (e) => {
			const draggable = $(e.target);
			if (draggable.data('slot-placed') === '') {
				detectCollision(e.target);
			}
		},
	});

	$socialDrop.droppable({
		// accept: $socialDrag,
		tolerance: 'pointer',
		out: (e, ui) => {
			if ($(ui.draggable[0]).data('slot-placed') === $(e.target).data('slot-name')) {
				$(ui.draggable[0]).data('slot-placed', '');
			}
		},
		drop: (e, ui) => {
			const slotName = $socialDrop.data('slot-name');
			const draggableName = ui.draggable.data('draggable-name');

			const draggable = $(ui.draggable);
			draggable.data('slot-placed', slotName);
			centerDraggable(draggable, $socialDrop);
			$draggable.removeClass('active');

			if (slotName === draggableName) {
				answerSocial = true;
				if (answerCandies && manualDrag) {
					if ($candiesDrag.data('slot-placed') && $socialDrag.data('slot-placed')) {
						$('.stage-2.feedback.correct').removeClass('d-none');
						temporalPrecedenceBtn.removeClass('d-none').parent().removeClass('d-none');
						manualDrag = true;
						setTimeout(placeDroppables, 25); // eslint-disable-line
					}
				}
			} else {
				answerCandies = false;
				if ($candiesDrag.data('slot-placed') && $socialDrag.data('slot-placed')) {
					if (answerSocial === false && manualDrag) {
						manualDrag = false;
					setTimeout(placeDroppables, 25); // eslint-disable-line
					}
				}
			}
		},
	});

	function placeDroppables() {
		// const $candiesDraggable = $('.candies-draggable');
		// const $socialDraggable = $('.social-draggable');
		// const $socialDroppable = $('.snaptarget-1');
		// const $candiesDroppable = $('.snaptarget-2');

		// const droppableOffset1 = $socialDroppable.offset();
		// const x1 = droppableOffset1.left + ($socialDraggable.width() / 2) + 1;
		// const y1 = droppableOffset1.top + ($socialDraggable.height() / 2) + 1;

		// const droppableOffset2 = $candiesDroppable.offset();
		// const x2 = droppableOffset2.left + ($candiesDraggable.width() / 2) + 1;
		// const y2 = droppableOffset2.top + ($candiesDraggable.height() / 2) + 1;

		$draggable.removeClass('active');
		$draggable.addClass('active-override');

		// setTimeout(() => {
		// 	$socialDraggable.simulate('drag', {
		// 		x: x1,
		// 		y: y1,
		// 	});

		// 	$candiesDraggable.simulate('drag', {
		// 		x: x2,
		// 		y: y2,
		// 	});

		// 	setTimeout(() => {
		// 		$socialDraggable.simulate('drag', {
		// 			x: x1,
		// 			y: y1,
		// 		});
		$socialDrag.draggable('disable');
		$candiesDrag.draggable('disable');
		// 		$draggable.removeClass('active');
		// 		$draggable.addClass('active-override');
		// 	}, 10);
		// }, 25);

		if (manualDrag === false) {
			$('.stage-2.feedback.incorrect').removeClass('d-none');
			temporalPrecedenceBtn.removeClass('d-none').parent().removeClass('d-none');
		}

		activityDone['temporal-precedence'] = true;
		temporalPrecedence.addClass('complete');
		$('.dropdown-toggle').addClass('disabled');
	}

	// Alternative Explanations
	$option.click((e) => {
		if (activityDone['alternative-explanations'] === false) {
			const optId = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
			$option.removeClass('active');
			$(e.target).addClass('active');

			if (optId === 3 || optId === '3') {
				$('.stage-3.feedback').addClass('d-none');
				$('.stage-3.feedback.feedback-correct').removeClass('d-none');
				$alternativeBtn.removeClass('d-none').parent().removeClass('d-none');
				activityDone['alternative-explanations'] = true;
				$alternative.addClass('complete');
				$option.removeAttr('data-target', '#incorrect');
				$option.attr('disabled', true);
				$option.removeClass('active')
					.toggleClass('btn-primary alert-secondary');
				$(e.target).addClass('alert-success').removeClass('btn-primary');
			}
		}
	});

	const $reset = $('#reload');
	const $circles = $('.circle');
	$reset.click(() => {
		$('.feedback').addClass('d-none');
		$('.main-feedback').addClass('d-none');
		$('.next').addClass('d-none');
		$('.stage-parent').addClass('d-none');
		$('.initial').removeClass('d-none');
		$('#stage-0').removeClass('d-none');
		$('.stage-1.instructions').removeClass('d-none');

		// Reset temporal-precedence drag/drop
		$candiesDrag.css({
			top: '',
			left: '',
		});
		$socialDrag.css({
			top: '',
			left: '',
		});
		answerCandies = null;
		answerSocial = null;
		manualDrag = true;
		$socialDrag.data('slot-placed', '');
		$socialDrag.attr('data-slot-placed', '');
		$candiesDrag.data('slot-placed', '');
		$candiesDrag.attr('data-slot-placed', '');
		$socialDrag.draggable('enable');
		$candiesDrag.draggable('enable');
		dragTarget = undefined;
		$('.dropdown-toggle').removeClass('disabled');

		$draggable.removeClass('active-override');
		$draggable.removeClass('active');

		// Reset alternative answer buttons
		$option.attr('data-target', '#incorrect');
		$option.removeClass('active')
			.removeClass('alert-secondary')
			.removeClass('alert-success')
			.addClass('btn-primary');
		$('#option3').removeAttr('data-target', '#incorrect');
		$option.attr('disabled', false);

		// causality triangle - border-color blue, text white
		$causality.addClass('no-transition');
		$causalityText.addClass('no-transition');
		$causality.css({ 'border-color': '' });
		$causalityText.css({ color: '' });
		$causality[0].offsetHeight; // eslint-disable-line
		$causality.removeClass('no-transition');
		$causalityText.removeClass('no-transition');
		// circles - background yellow, remove .highlighted, remove .complete
		$circles.removeClass('highlighted').removeClass('complete');
		// covariance-circle .highlighted
		$covariance.addClass('highlighted');
		$('.current-link').removeClass('current-link');
		$('.cov.circle-link').addClass('current-link');
		$('.circle-link').removeAttr('role');
		$('.cov.circle-link').attr('role', 'link');
		// stage var
		stage = 1;
		hasRun = true;
		altPrev = 0;
		temporalPrev = 0;

		$previous.addClass('d-none').parent().addClass('d-none');
		$next.addClass('d-none').parent().addClass('d-none');

		// reset object
		Object.keys(activityDone).forEach((v) => { activityDone[v] = false; });
	});

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

	const $droppable = $('.droppable');
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

	$(document).keydown((val) => {
		if (val.which === 9) {
			$('.circle-link').attr('tabindex', '');
			$('.current-link').attr('tabindex', 0);
		}
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
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
	});
});
