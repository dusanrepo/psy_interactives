$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');
	const $nextStage1 = $('#next-1');
	const $nextStage2 = $('#next-2');
	const $nextStage3 = $('#next-3');
	const $nextStage4 = $('#next-4');
	const $fillDistribution = $('#fill-distribution');
	const $calcMean = $('#calc-mean');

	const $meanData = $('.mean-data');
	const $medianData = $('.median-data');
	const $modeData = $('.mode-data');

	let stage = 1;

	let talliesCounted = false;
	let prevSlide;
	let meanCalced = false;
	let medianCalced = false;
	let modeCalced = false;

	function tallyCount() {
		for (let i = 0; i < 10; i += 1) {
			const valDist = $(`.drop-${i}-tallies li`).length;
			$(`.column-2.drop-${i}`).text(valDist);
			$(`tr.freq-${i}`).data('value', valDist);
			$(`.drop-${i}-tallies li`).addClass('d-none');
		}
		talliesCounted = true;
	}

	function setStage() {
		$('.stage-parent').addClass('d-none');
		$(`#stage-${stage}`).removeClass('d-none');
	}

	let animationCount = 0;
	const howManyTimes = 9;

	function animationRun() {
		const timeoutTimer = 3500;
		// number animation
		// after x seconds, bar animation
		setTimeout(() => {
			$(`tr.freq-${animationCount}`).addClass('row-animation');
			const size = $(`tr.freq-${animationCount}`).data('value');
			$(`.tr-${animationCount} .bar`).css('height', '0px');
			$(`.tr-${animationCount} .bar`).css('height', `${(size * $('.y-axis').height()) + size}px`);
			setTimeout(() => {
				$(`tr.freq-${animationCount}`).removeClass('row-animation');
				animationCount += 1;
			}, timeoutTimer / 10.5);
		}, timeoutTimer / 6);
		if (animationCount < howManyTimes) {
			setTimeout(animationRun, timeoutTimer / 6);
		} else {
			setTimeout(() => {
				$('.animation-instructions').addClass('d-none');
				$next.removeClass('d-none')
					.parent()
					.removeClass('d-none');
				$previous.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}, timeoutTimer / 6);
		}
	}

	let distributionFilled = false;
	function fillDistribution() {
		$previous.addClass('d-none')
			.parent()
			.addClass('d-none');
		prevSlide = 'frequency';
		// setTimeout(animationRun, 20);
		animationRun();
		distributionFilled = true;
	}

	function modeAnimationRun() {
		const timeoutTimer = 2500;
		$('p.mode-instructions-2').removeClass('d-none');
		$('.mode-2-1')
			.removeClass('invisible')
			.css('opacity', '0');
		$('.mode-2-1')
			.animate({ opacity: '1' }, timeoutTimer * 0.75);
		setTimeout(() => {
			let leftPxOffset = 0;
			for (let i = 0; i <= 16; i += 1) {
				// $(`.n-${i}`).css('order', `${i}`);
				$(`.n2-${i}`).css('left', `${leftPxOffset}px`);
				leftPxOffset += 14;
			}
			setTimeout(() => {
				$('.mode-2-1')
					.addClass('d-none');
				$('.mode-2-2')
					.removeClass('d-none');
				$('p.mode-instructions-2').addClass('d-none');
				$('p.mode-instructions-3').removeClass('d-none');
				// setTimeout(() => {
				// $('.mode-numbers').addClass('mode-blink');
				// }, timeoutTimer / 3);
				$('.mode-row .column-2 span')
					.removeClass('d-none')
					.css('opacity', '0');
				$('.mode-row .column-2 span')
					.animate({ opacity: '1' }, timeoutTimer / 2);

				setTimeout(() => {
					$('p.mode-instructions-3').addClass('d-none');
					$('.mode-section-2').removeClass('d-none');
					$('.tr-4 .bar').popover('show');
					$previous.removeClass('d-none')
						.parent()
						.removeClass('d-none');
					// setTimeout(() => {
					// 	$('.mode-numbers').removeClass('mode-blink');
					// }, timeoutTimer * 4.5);
				}, timeoutTimer);
			}, timeoutTimer * 3);
		}, timeoutTimer);
	}

	function medianAnimationRun() {
		const timeoutTimer = 2500;
		$('p.median-instructions-2').removeClass('d-none');
		$('.median-2')
			.removeClass('d-none')
			.css('opacity', '0');
		$('.median-2-int')
			.removeClass('invisible')
			.css('opacity', '0');
		$('.median-2')
			.animate({ opacity: '1' }, timeoutTimer * 0.75);
		// setTimeout(() => {
		// 	for (let i = 0; i <= 16; i += 1) {
		// 		$(`.n-${i}`).css('order', `${i}`);
		// 	}
		// }, timeoutTimer * 1.5);
		$('.median-3')
			.removeClass('d-none')
			.css('opacity', '0');
		$('.left').css('left', '0');
		$('.right').css('right', '0');
		setTimeout(() => {
			let leftPxOffset = 0;
			for (let i = 0; i <= 16; i += 1) {
				// $(`.n-${i}`).css('order', `${i}`);
				$(`.n-${i}`).css('left', `${leftPxOffset}px`);
				leftPxOffset += 14;
			}
			setTimeout(() => {
				$('p.median-instructions-2').addClass('d-none');
				$('p.median-instructions-3').removeClass('d-none');
				$('.median-3')
					.animate({ opacity: '1' }, timeoutTimer);
				setTimeout(() => {
					$('.left').css('left', '47%');
					$('.right').css('right', '47%');
					setTimeout(() => {
						$('p.median-instructions-3').addClass('d-none');
						$('p.median-end').removeClass('d-none');
						$('.median-row .column-2 span')
							.removeClass('d-none')
							.css('opacity', '0');
						$('.median-row .column-2 span')
							.animate({ opacity: '1' }, timeoutTimer / 2);
						$nextStage4.removeClass('d-none')
							.parent()
							.removeClass('d-none');
						$previous.removeClass('d-none')
							.parent()
							.removeClass('d-none');
					}, timeoutTimer);
				}, timeoutTimer / 2);
			}, timeoutTimer * 2.5);
		}, timeoutTimer);
	}

	function meanAnimationRun() {
		const timeoutTimer = 2500;
		$('p.mean-instructions-1').addClass('d-none');
		$('p.mean-instructions-2').removeClass('d-none');
		$('.mean-2')
			.removeClass('invisible')
			.css('opacity', '0');
		$('.mean-2')
			.animate({ opacity: '1' }, timeoutTimer * 0.75);
		// setTimeout(() => {
		// 	$('.mean-3')
		// 		.removeClass('d-none')
		// 		.css('opacity', '0');
		// 	$('.mean-3')
		// 		.animate({ opacity: '1' }, timeoutTimer);
		// }, timeoutTimer * 2.5);

		setTimeout(() => {
			$('p.mean-instructions-4')
				.removeClass('d-none')
				.siblings('.instructions')
				.addClass('d-none');
			$('.mean-4')
				.removeClass('invisible')
				.css('opacity', '0');
			$('.mean-4')
				.animate({ opacity: '1' }, timeoutTimer * 0.75);
			setTimeout(() => {
				$('p.mean-end')
					.removeClass('d-none')
					.siblings('.instructions')
					.addClass('d-none');
				$nextStage3.removeClass('d-none')
					.parent()
					.removeClass('d-none');
				$previous.removeClass('d-none')
					.parent()
					.removeClass('d-none');
				$('.mean-row .column-2 span')
					.removeClass('d-none')
					.css('opacity', '0');
				$('.mean-row .column-2 span')
					.animate({ opacity: '1' }, timeoutTimer / 2);
			}, timeoutTimer * 1.5);
		}, timeoutTimer * 1.5);
	}

	function triggerMeanAnimation() {
		$previous.addClass('d-none')
			.parent()
			.addClass('d-none');
		// setTimeout(meanAnimationRun, 1250);
		meanAnimationRun();
	}

	function triggerMedianAnimation() {
		$previous.addClass('d-none')
			.parent()
			.addClass('d-none');
		// setTimeout(medianAnimationRun, 1250);
		medianAnimationRun();
	}

	function triggerModeAnimation() {
		$previous.addClass('d-none')
			.parent()
			.addClass('d-none');
		// setTimeout(modeAnimationRun, 1250);
		modeAnimationRun();
	}

	$('#tr-4 .bar').popover({
		placement: 'top',
		content: 'The mode is also easily noticeable in the frequency histogram because it is the highest bar.',
		trigger: 'manual',
	});

	$nextStage1.click(() => {
		if (talliesCounted === false) {
			tallyCount();
		}
		$('.stage-parent').addClass('d-none');
		$('#stage-1').removeClass('d-none');
		$('.stage-1.instructions-1').removeClass('d-none');
		// $('.stage-1.instructions-1').addClass('d-none');
		// $('.stage-1.instructions-2').removeClass('d-none');
		$nextStage1.addClass('d-none')
			.parent()
			.addClass('d-none');
		$('.number-holder').addClass('d-none');
		$next.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		$previous.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		prevSlide = 'frequency';
	});

	$nextStage2.click(() => {
		if (talliesCounted === false) {
			tallyCount();
		}

		if (distributionFilled) {
			$next.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		} else if (distributionFilled === false) {
			$fillDistribution.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		}
		stage += 1;
		setStage();
		$nextStage2.addClass('d-none')
			.parent()
			.addClass('d-none');
		$previous.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		prevSlide = 'frequency';
	});

	$nextStage3.click(() => {
		$('.mean').addClass('d-none');
		$('.median').removeClass('d-none');
		// $calcMedian.removeClass('d-none')
		// 	.parent()
		// 	.removeClass('d-none');
		$nextStage3.addClass('d-none')
			.parent()
			.addClass('d-none');
		$previous.removeClass('d-none')
			.parent()
			.removeClass('d-none');
		$meanData.removeClass('font-weight-bold');
		$medianData.addClass('font-weight-bold');
		$modeData.removeClass('font-weight-bold');
		prevSlide = 'mean';
		if (medianCalced === true) {
			// show median stage
			$nextStage4.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		} else {
			// show median stage
			// run animation
			triggerMedianAnimation();
			medianCalced = true;
		}
	});

	$nextStage4.click(() => {
		// stageIn += 1;
		$('.median').addClass('d-none');
		$('.mode').removeClass('d-none');
		// $calcMode.removeClass('d-none')
		// 	.parent()
		// 	.removeClass('d-none');
		if (modeCalced === true) {
			// show mode stage
			$('.mode-section-2').removeClass('d-none');
			$('.tr-4 .bar').popover('show');
			$('.mode-row .column-2 span')
				.removeClass('d-none');
			$previous.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		} else {
			// show mode stage
			// run animation
			triggerModeAnimation();
			modeCalced = true;
			$previous.addClass('d-none')
				.parent()
				.addClass('d-none');
		}
		$nextStage4.addClass('d-none')
			.parent()
			.addClass('d-none');
		// $previous.removeClass('d-none')
		// 	.parent()
		// 	.removeClass('d-none');
		$meanData.removeClass('font-weight-bold');
		$medianData.removeClass('font-weight-bold');
		$modeData.addClass('font-weight-bold');
		prevSlide = 'median';
	});

	$fillDistribution.click(() => {
		fillDistribution();
		$fillDistribution.addClass('d-none')
			.parent()
			.addClass('d-none');
	});

	$calcMean.click(() => {
		$calcMean.addClass('d-none')
			.parent()
			.addClass('d-none');
		triggerMeanAnimation();
		meanCalced = true;
	});

	$next.click(() => {
		stage += 1;
		if (stage === 2) {
			$fillDistribution.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			$next.addClass('d-none')
				.parent()
				.addClass('d-none');
		} else if (stage === 3) {
			$meanData.addClass('font-weight-bold');
			$medianData.removeClass('font-weight-bold');
			$modeData.removeClass('font-weight-bold');
			$calcMean.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			$('.mean').removeClass('d-none');
			$('.mmm-tbl').removeClass('d-none');
			if (meanCalced === true) {
				$calcMean.addClass('d-none')
					.parent()
					.addClass('d-none');
				$nextStage3.removeClass('d-none')
					.parent()
					.removeClass('d-none');
			}
			$next.addClass('d-none')
				.parent()
				.addClass('d-none');
			prevSlide = 'fillDistribution';
		}
		setStage();
		$previous.addClass('d-none')
			.parent()
			.addClass('d-none');
		if (stage === 3) {
			$previous.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		}
	});
	function setPrevStage() {
		$('.stage-parent').addClass('d-none');
		$('.mmm').addClass('d-none');
		$('.animateActivate').addClass('d-none')
			.parent()
			.addClass('d-none');
		$('.next').addClass('d-none')
			.parent()
			.addClass('d-none');
		$('.tr-4 .bar').popover('hide');

		if (prevSlide === 'fillDistribution') {
			prevSlide = 'frequency';
			$('#stage-2').removeClass('d-none');
			stage -= 1;
			$next.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			$previous.removeClass('d-none')
				.parent()
				.removeClass('d-none');
		} else if (prevSlide === 'frequency') {
			stage -= 1;
			setStage();
			$nextStage2.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			$previous.addClass('d-none')
				.parent()
				.addClass('d-none');
		} else if (prevSlide === 'mean') {
			prevSlide = 'fillDistribution';
			$('#stage-3').removeClass('d-none');
			$('.mean').removeClass('d-none');
			$('.mmm-tbl').removeClass('d-none');
			$nextStage3.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			$meanData.addClass('font-weight-bold');
			$medianData.removeClass('font-weight-bold');
			$modeData.removeClass('font-weight-bold');
		} else if (prevSlide === 'median') {
			prevSlide = 'mean';
			$('#stage-3').removeClass('d-none');
			$('.median').removeClass('d-none');
			$('.mmm-tbl').removeClass('d-none');
			$nextStage4.removeClass('d-none')
				.parent()
				.removeClass('d-none');
			$meanData.removeClass('font-weight-bold');
			$medianData.addClass('font-weight-bold');
			$modeData.removeClass('font-weight-bold');
		}
	}

	$previous.click(() => {
		setPrevStage();
	});

	$reset.on('click', () => {
		window.location.reload();
	});

	// Stage 1
	for (let i = 0; i < 10; i += 1) {
		$(`.${i}`).draggable({
			scroll: false,
			snap: $(`.drop-${i}`),
			snapMode: 'inner',
			revert(droppable) {
				if (droppable === false) {
					return true;
				}
				return false;
			},
		});

		/* eslint-disable */
		$(`.drop-${i}`).droppable({
			accept: $(`.${i}`),
			tolerance: 'intersect',
			drop: (e, ui) => {
				// hide dropped item
				$(ui.draggable).toggleClass('d-inline-block d-none');
				// add tally
				$(`.drop-${i}-tallies`).append('<li class="tally"></li>');
				// when no .number exists (d-none is on all of them) show next button
				if (!$('.number:visible').length) {
					$nextStage2.removeClass('d-none')
						.parent()
						.removeClass('d-none');
					// dragDone = true;
				}
			},
		});
	}
	/* eslint-enable */
	function dragDraggable(draggable, droppable) {
		const droppableOffset1 = droppable.offset();
		const x1 = droppableOffset1.left + (draggable.width() / 2) + 1;
		const y1 = droppableOffset1.top + (draggable.height() / 2) + 1;
		setTimeout(() => {
			draggable.simulate('drag', {
				x: x1,
				y: y1,
			});
		}, 25);
	}

	let animationOrganizeCount = 0;
	const organizeTimes = 17;
	const numberDraggables = $('.number-holder').children().toArray();

	function organizeAnimationRun() {
		const timeoutTimer = 3500;
		// number animation
		$(numberDraggables[animationOrganizeCount]).addClass('num-animation');
		// after x seconds drag
		setTimeout(() => {
			dragDraggable($(numberDraggables[animationOrganizeCount]), $(`#drop-${$(numberDraggables[animationOrganizeCount]).data('draggable-num')}`));
			setTimeout(() => {
				$(numberDraggables[animationOrganizeCount]).removeClass('num-animation');
				animationOrganizeCount += 1;
				if (animationOrganizeCount < organizeTimes) {
					organizeAnimationRun();
				} else {
					$('.fill-animation-instructions').addClass('d-none');
				}
			}, 150);
		}, timeoutTimer / 35);
	}

	const $organize = $('#organize');
	$organize.click(() => {
		$organize.addClass('d-none');
		// setTimeout(organizeAnimationRun, 1250);
		setTimeout(organizeAnimationRun, 750);
	});

	// const $dropDropdown = $('.dropdown-item');
	// $dropDropdown.click((e) => {
	// 	const dropSpot = $(`#${$(e.target).data('drop')}`);
	// 	const dragObj = $('.number-holder').find(`.${$(e.target).data('value')}:visible:first`);
	// 	// Drag to spot
	// 	dragDraggable(dragObj, dropSpot);
	// });

	// const $draggable = $('.draggable');
	// let dragInstance;
	// $draggable.click((e) => {
	// 	// Add class to make it look activated
	// 	$draggable.removeClass('active');
	// 	$(e.currentTarget).addClass('active');
	// 	// Save to var when draggable is clicked
	// 	dragInstance = e.currentTarget;
	// });

	// const $droppable = $('.droppable');
	// $droppable.click((e) => {
	// 	const dropSpot = $(e.currentTarget);
	// 	const dragObj = $(dragInstance);
	// 	// if draggable is saved to var, move and clear var
	// 	if (typeof dragInstance !== 'undefined') {
	// 		// Drag to spot
	// 		dragDraggable(dragObj, dropSpot);
	// 		$draggable.removeClass('active');
	// 		dragInstance = undefined;
	// 	}
	// });

	// $('.dropdown-toggle, .droppable, .draggable').keydown((val) => {
	// 	if (val.which === 13) {
	// 		val.stopPropagation();
	// 		val.preventDefault();
	// 		$(val.target).click();
	// 	}
	// });

	// $('.dropdown').on('shown.bs.dropdown', () => {
	// 	$('.dropdown-item:visible:first').focus();
	// });
});
