$(document).ready(() => {
	const	$next = $('#next');
	const	$previous = $('#previous');
	const	$reset = $('#reset');
	const	$mainSection = $('.main-section');
	const 	droppableLess = $('.less-correlation');
	const 	droppableMore = $('.more-correlation');

	let currentSlide = 0;
	let isRealDrop;
	let putMeBack = false;

	let slide7Complete = false;
	let slide9Complete = false;

	const blockMapping = {
		envMostTwins: 1,
		relMostTwins: 2,
	};

	const blockValue = {
		BFS: 0.60,
		BIS: 0.86,
		BID: 0.75,
	};

	const barColor = 'rgb(232, 0, 91)';

	const valsPerSlide = {
		slide7: [],
		slide9: [],
	};

	// eslint-disable-next-line no-undef
	const myChart = new Chart($('#myChart'), {
		type: 'bar',
		data: {
			labels: ['Pair 1', 'Pair 2'],
			datasets: [{
				label: 'Reaction Time',
				data: [0, 0],
				backgroundColor: [barColor, barColor],
				borderWidth: 1,
			}],
		},
		options: {
			events: [],
			responsive: true,
			maintainAspectRatio: true,
			legend: {
				display: false,
			},
			tooltips: {
				enabled: false,
			},
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'IQ Correlation',
					},
					ticks: {
						beginAtZero: true,
					},
				}],
			},
		},
	});

	function centerDraggables(draggable, droppable) {
		const droppableOffset = droppable.offset();

		draggable.offset({
			left: droppableOffset.left,
			top: droppableOffset.top,
		});
	}

	function mapTargetWithGraph(draggableEl, targetEl) {
		if (targetEl.hasClass('pair-1')) {
			const pair1Val = blockValue[draggableEl.attr('id')];
			valsPerSlide[`slide${currentSlide + 1}`][0] = pair1Val;
			myChart.data.datasets[0].data[0] = pair1Val;
		} else if (targetEl.hasClass('pair-2')) {
			const pair2Val = blockValue[draggableEl.attr('id')];
			valsPerSlide[`slide${currentSlide + 1}`][1] = pair2Val;
			myChart.data.datasets[0].data[1] = pair2Val;
		}
		myChart.update();
	}

	function dragDraggable(draggable, droppable) {
		console.log(draggable);
		console.log(droppable);

		const x1 = ((droppable.getBoundingClientRect().left + droppable.getBoundingClientRect().right) / 2) + 1; // eslint-disable-line
		const y1 = (droppable.getBoundingClientRect().top) + ($(draggable).height() / 2); // eslint-disable-line
		setTimeout(() => {
			draggable.simulate('drag', {
				x: x1,
				y: y1,
			});
			draggable.removeClass('active');
		}, 25);
	}

	let resizeCount = 0;

	function centerAllDraggables(block1, block2) {
		droppableLess.droppable();
		droppableMore.droppable();
		const draggableForLessColumn = block1;
		const draggableForMoreColumn = block2;

		centerDraggables(draggableForLessColumn, droppableLess);
		centerDraggables(draggableForMoreColumn, droppableMore);
	}

	$(window).resize(() => {
		resizeCount += 1;
		if (resizeCount % 2 === 0) {
			if (currentSlide === 7) {
				centerAllDraggables($('#BFS').draggable(), $('#BIS').draggable());
			}

			if (currentSlide === 9) {
				centerAllDraggables($('#BIS').draggable(), $('#BID').draggable());
			}
		}
	});

	function showNextSlide() {
		console.log(currentSlide);

		const currentSlideEl = document.querySelectorAll(`[data-slide='${currentSlide}']`)[0];
		currentSlideEl.classList.remove('d-none');

		$mainSection.addClass(`slide-${currentSlide}-style`);
	}

	function hidePreviousSlide(prevSlide) {
		document.querySelector(`[data-slide='${prevSlide}']`).classList.add('d-none');
		$mainSection.removeClass(`slide-${prevSlide}-style`);
	}

	function switchSlides() {
		currentSlide += 1;

		showNextSlide();
		hidePreviousSlide(currentSlide - 1);

		return currentSlide;
	}

	function blockPutInSameTarget(targetTopOffset, disabledElements) {
		return disabledElements.length === 1 &&
			(targetTopOffset - 10 < disabledElements.offset().top &&
			targetTopOffset + 10 > disabledElements.offset().top);
	}

	function handleSlotSwitching(dropArea, currentDraggable, otherDraggable, otherDroppable) {
		if (otherDroppable.length) { // if switching from other droppable
			dragDraggable(otherDraggable, otherDroppable.get(0));
		} else { // else place otherDraggable in the origin
			otherDraggable.data('slot-placed', '');
			otherDraggable.attr('data-slot-placed', '');
			otherDraggable.css({
				top: '',
				left: '',
				width: '',
			});

			$('.symbol', otherDraggable).removeClass('hidden');
			$('.words3', otherDraggable).css('margin-left', '');
			$('.words1', otherDraggable).removeClass('justify-content-center');
			$('.words2', otherDraggable).addClass('spacing-relation-10');
		}
	}

	function addAxis() {
		$('.axis').removeClass('d-none');
		$next.addClass('d-none');
	}

	function addDrag(whichAnswer) {
		$('.draggable-element').addClass('draggable');
		$('.draggable-element').addClass('draggable-hover');
		$('.draggable').draggable({
			revert: (targetElement) => { // eslint-disable-line
				if (currentSlide !== 10) {
					let result;
					if (!targetElement) {
						result = true;
					} else if (putMeBack) {
						result = true;
					} else {
						result = false;
					}

					return result;
				} else if (currentSlide === 10) {
					if (targetElement === false) {
						return true;
					}
					return false;
				}
			},
			drag() {
				$(this).removeClass('draggable-hover');
				$(this).addClass('draggable-shadow');
			},
			stop() {
				$(this).removeClass('draggable-shadow');
				$(this).addClass('draggable-hover');
			},
			snap: false,
		});
		$(`.wrongBlocks, ${whichAnswer === blockMapping.envMostTwins ? '.no-env' : '.fraternal'}`).draggable({
			revert: (targetElement) => { // eslint-disable-line
				if (currentSlide !== 10 || (currentSlide === 10 && targetElement === false)) {
					return true;
				}
				return false;
			},
		});
	}

	function addDrop(whichTask) {
		let qtyOfBlocksDropped = 0;
		let targetToFocusOn;
		$('#incorrect').on('hidden.bs.modal', () => {
			targetToFocusOn.focus();
		});

		$('.droppable').droppable({
			classes: {
				'ui-droppable-hover': 'droppable-ready-to-accept',
			},
			tolerance: 'pointer',
			drop(ev, ui) {
				targetToFocusOn = ev.target;
				if (currentSlide !== 10) {
					if (ui.draggable.hasClass('wrongBlocks') && currentSlide !== 10) {
						console.log('hi');
						$('.modal-body').text('Incorrect. Please try again.');
						$('#incorrect').modal('show');
						ui.draggable.css('width', '');
						$('.words1', ui.draggable).removeClass('justify-content-center');
					} else if (whichTask === blockMapping.envMostTwins && ui.draggable.hasClass('no-env') && currentSlide !== 10) {
						$('.modal-body').text('There is another pairing involving twins with almost no shared environment, but for now, we are examining twins with the same high level of environmental similarity.');
						$('#incorrect').modal('show');
						ui.draggable.css('width', '');
					} else if (whichTask === blockMapping.relMostTwins && ui.draggable.hasClass('fraternal') && currentSlide !== 10) {
						$('.modal-body').text('There is another pairing involving twins with the same level of shared genes, but for now, we are examining twins with the highest level of genetic similarity.');
						$('#incorrect').modal('show');
						ui.draggable.css('width', '');
					} else if (isRealDrop && currentSlide !== 10) {
						if (blockPutInSameTarget(ui.offset.top, $('.ui-draggable-disabled'))) {
							putMeBack = true;
							return;
						}
						putMeBack = false;
						ui.draggable.css('width', '270px');
						ui.draggable.draggable('disable');
						$('.words3', ui.draggable).css('margin-left', '-15px');
						$('.symbol', ui.draggable).addClass('hidden');
						$('.words1', ui.draggable).addClass('justify-content-center');

						centerDraggables(ui.draggable, $(ev.target));
						mapTargetWithGraph(ui.draggable, $(ev.target));

						let currSlide;
						qtyOfBlocksDropped += 1;
						if (qtyOfBlocksDropped === 2) {
							currSlide = switchSlides();
							if (currSlide === 7) {
								slide7Complete = true;
							} else if (currSlide === 9) {
								slide9Complete = true;
							}
							$next.removeClass('d-none');
						}
					}
				} else {
					console.log('else');

					const draggable = $(ui.draggable);
					const droppable = $(ev.target);

					const slotName = $(ev.target).data('slot-name');

					const otherDraggable = $(`.draggable[data-slot-placed='${slotName}']`);
					if (otherDraggable.length) {
						const otherDroppable = $(`.pair-${draggable.data('slot-placed')}`);
						handleSlotSwitching(droppable, draggable, otherDraggable, otherDroppable);
					}

					draggable.data('slot-placed', slotName);
					draggable.attr('data-slot-placed', slotName);
					console.log(`slotName: ${slotName}`);


					if (slotName === 1) {
						myChart.data.datasets[0].data[0] = ui.draggable.data('block-value');
						myChart.data.datasets[0].data[1] = myChart.data.datasets[0].data[1]; // eslint-disable-line
					} else if (slotName === 2) {
						myChart.data.datasets[0].data[0] = myChart.data.datasets[0].data[0]; // eslint-disable-line
						myChart.data.datasets[0].data[1] = ui.draggable.data('block-value');
					}

					ui.draggable.css('width', '270px');
					console.log($('.words1', ui.draggable));

					$('.words1', ui.draggable).addClass('justify-content-center');
					$('.symbol', ui.draggable).addClass('hidden');
					$('.words3', ui.draggable).css('margin-left', '-15px');
					$('.words2', ui.draggable).removeClass('spacing-relation-10');

					centerDraggables(ui.draggable, $(ev.target));
					// ui.draggable.css('width', '');
					// myChart.data.datasets[0].data[1] = blockValue[ui.draggable.attr('id')];

					// if (ev.target.hasClass('pair-1')) {
					// 	const pair1Val = blockValue[ui.draggable.attr('id')];
					// 	valsPerSlide[`slide${currentSlide + 1}`][0] = pair1Val;
					// 	myChart.data.datasets[0].data[0] = pair1Val;
					// } else if (ev.target.hasClass('pair-2')) {
					// 	const pair2Val = blockValue[ui.draggable.attr('id')];
					// 	valsPerSlide[`slide${currentSlide + 1}`][1] = pair2Val;
					// 	myChart.data.datasets[0].data[1] = pair2Val;
					// }

					myChart.update();
				}
			},
		});
	}

	function addDragAndDrop(whichAnswer) {
		addDrag(whichAnswer);
		addDrop(whichAnswer);
	}

	function resetNavigationButtons(reverse, hidePrev) {
		if (reverse) {
			$next.addClass('d-none');
			$previous.removeClass('d-none');
		} else if (hidePrev) {
			$next.removeClass('d-none');
			$previous.addClass('d-none');
		} else {
			$next.removeClass('d-none');
			$next.removeClass('d-none');
		}
	}

	function resetDraggableButtonsPosition() {
		const totalAnswers = [1, 2];
		for (let i = 0; i < totalAnswers.length; i += 1) {
			$(`.correct-block-${totalAnswers[i]}`).css('top', '0').css('width', '');
			$(`.correct-block-${totalAnswers[i]}`).css('left', '0').css('width', '');
		}
	}

	function revertDraggableElements(whichAnswer) {
		resetDraggableButtonsPosition();

		if (!slide9Complete) {
			if (currentSlide !== 10) {
				$('.draggable').data('ui-draggable') && $('.draggable').draggable('destroy'); // eslint-disable-line
				$('.droppable').data('ui-droppable') && $('.droppable').droppable('destroy'); // eslint-disable-line
				$(`.correct-block-${whichAnswer}`).removeClass('draggable');
			}
		}
	}

	function hideNextBtnForSlide(numberOfSlide) {
		if (numberOfSlide === 10 || numberOfSlide === 8) {
			$next.addClass('d-none');
		}
	}

	function revertEverythingToOriginalState() {
		$('.pairBlock').removeClass('block-center');

		revertDraggableElements(blockMapping.relMostTwins);
		hideNextBtnForSlide(currentSlide);
	}

	function hideAllPossibleElements() {
		$('.axis').addClass('d-none');
		$('.symbol').addClass('hidden');
	}

	function showExtraInfo() {
		$('.head-relat').removeClass('col-6');
		$('.head-relat').addClass('col-5');
		$('.head-genes').removeClass('col-2');
		$('.head-genes').addClass('col-1');
		$('.dafault-col-width').removeClass('col-8');
		$('.dafault-col-width').addClass('col-7');
		$('.table-genes').removeClass('col-2');
		$('.table-genes').addClass('col-1');
		$('.add-info').removeClass('d-none');
		// $('.words2').removeClass('col-6');
		// $('.words2').addClass('col-5');
		// $('.words2').addClass('ml-1');
	}

	function hideExtraInfo() {
		$('.head-relat').removeClass('col-5');
		$('.head-relat').addClass('col-6');
		$('.head-genes').removeClass('col-1');
		$('.head-genes').addClass('col-2');
		$('.dafault-col-width').removeClass('col-7');
		$('.dafault-col-width').addClass('col-8');
		$('.table-genes').removeClass('col-1');
		$('.table-genes').addClass('col-2');
		$('.add-info').addClass('d-none');
		// $('.words2').removeClass('col-5');
		// $('.words2').removeClass('ml-1');
		// $('.words2').addClass('col-6');
	}

	function resetChart() {
		myChart.data.datasets[0].data[0] = 0;
		myChart.data.datasets[0].data[1] = 0;
		myChart.update();
	}

	function updateChartToExistingValues() {
		myChart.data.datasets[0].data = [...valsPerSlide[`slide${currentSlide}`]];
		myChart.update();
	}

	function makeCorrectDecrementAndHide() {
		let previousDecrement = 1;
		if (currentSlide === 7 || currentSlide === 9) {
			currentSlide -= 2;
			previousDecrement = 2;
		} else {
			currentSlide -= 1;
		}
		hidePreviousSlide(currentSlide + previousDecrement);
	}

	$next.on('click', () => {
		// .draggable('disable');
		// .draggable('enable');
		switchSlides();

		if (currentSlide === 1) {
			$previous.removeClass('d-none');
		}

		if (currentSlide === 6) {
			$('.symbol').removeClass('hidden');
			$('.words3').removeClass('r-border');
			if (slide7Complete) {
				$next.removeClass('d-none');
				currentSlide += 1;
			} else {
				isRealDrop = true;
				resetNavigationButtons(true);
				addAxis();
				addDragAndDrop(blockMapping.envMostTwins);
			}
		}

		// if (currentSlide === 7) {
		// 	$('.symbol').removeClass('hidden');
		// 	$('.words').css('margin-left', '');
		// }
		if (currentSlide === 7 && slide7Complete) {
			showNextSlide();
			hidePreviousSlide(currentSlide - 2);
			hidePreviousSlide(currentSlide - 1);
			addAxis();
			$next.removeClass('d-none');

			$('.symbol').removeClass('hidden');
			$('.symbol-7').addClass('hidden');

			$('.words1').removeClass('justify-content-center');
			$('.words-7-justify').addClass('justify-content-center');

			centerDraggables($('#BIS').css('width', '270px'), $('.less-correlation'));
			centerDraggables($('#BFS').css('width', '270px'), $('.more-correlation'));

			updateChartToExistingValues();

			setTimeout(() => {
				$next.focus();
			}, 50);

			$('.symbol').addClass('hidden');
		}


		if (currentSlide === 8) {
			$('.draggable-element').css('width', '');
			$('.symbol').removeClass('hidden');
			$('.words3').css('margin-left', '');
			$('.words1').removeClass('justify-content-center');

			if (slide9Complete) {
				$next.removeClass('d-none');
				currentSlide += 1;
			} else {
				isRealDrop = true;
				revertDraggableElements(blockMapping.envMostTwins);
				addDragAndDrop(blockMapping.relMostTwins);
				hideNextBtnForSlide(currentSlide);
				resetChart();
			}
			$('.draggable-element').draggable('enable');
		}

		if (currentSlide === 9 && slide9Complete) {
			showNextSlide();
			hidePreviousSlide(currentSlide - 1);
			$('.axis').removeClass('d-none');
			$next.removeClass('d-none');
			$('.pairBlock').addClass('block-center');

			$('.symbol').removeClass('hidden');
			$('.symbol-9').addClass('hidden');
			$('.word-9').css('margin-left', '-15px');
			$('.words1').removeClass('justify-content-center');
			$('.words-9-justify').addClass('justify-content-center');

			resetDraggableButtonsPosition();

			centerDraggables($('#BID').css('width', '270px'), $('.less-correlation'));
			centerDraggables($('#BIS').css('width', '270px'), $('.more-correlation'));

			updateChartToExistingValues();

			setTimeout(() => {
				$next.focus();
			}, 50);

			$('.draggable-element').removeClass('draggable');
			$('.draggable-element').draggable('disable');
			$('.symbol').addClass('hidden');
		}

		if (currentSlide === 10) {
			$('.draggable-element').data('slot-placed', '');
			$('.draggable-element').attr('data-slot-placed', '');
			$('.draggable-element').css({
				top: '',
				left: '',
				width: '',
			});

			// $('.draggable-element').css('width', '');
			$('.words1').removeClass('justify-content-center');
			$('.words3').css('margin-left', '0');
			$('.symbol').removeClass('hidden');
			$('.words3').removeClass('r-border');
			resetChart();
			revertEverythingToOriginalState();
			showExtraInfo();
			$('.draggable-element').draggable('enable');

			$('.needs-flex-center').addClass('d-flex justify-content-center');

			$('.words2').removeClass('spacing-relation');
			$('.words2').addClass('spacing-relation-10');
			$('.twins').addClass('twins-10');

			$('.draggable-element').addClass('draggable');
			$('.draggable-element').addClass('draggable-hover');
			$('.draggable-element').draggable('enable');
		}
	});

	$previous.on('click', () => {
		makeCorrectDecrementAndHide();
		showNextSlide();
		$('.needs-flex-center').removeClass('d-flex justify-content-center');
		$('.words2').removeClass('spacing-relation-10');
		$('.words2').addClass('spacing-relation');
		$('.twins').removeClass('twins-10');

		if (currentSlide === 0) {
			$previous.addClass('d-none');
		}

		if (currentSlide === 5) {
			isRealDrop = true;
			hideAllPossibleElements();
			resetNavigationButtons();
			revertDraggableElements(blockMapping.envMostTwins);
			revertDraggableElements(blockMapping.relMostTwins);
			$('.words3').css('margin-left', '');
			$('.draggable-element').css('width', '');
			$('.draggable-element').removeClass('draggable-hover');
			$('.draggable-element').removeClass('draggable');
			$('.words3').addClass('r-border');
			$('.words1').removeClass('justify-content-center');
		}

		if (currentSlide === 7) {
			isRealDrop = true;
			$next.removeClass('d-none');
			$('.draggable-element').removeClass('draggable-hover');
			$('.draggable-element').removeClass('draggable');

			$('.symbol').removeClass('hidden');
			$('.symbol-7').addClass('hidden');

			$('.words1').removeClass('justify-content-center');
			$('.words-7-justify').addClass('justify-content-center');

			$('.words3').css('margin-left', '');
			$('.word-7').css('margin-left', '-15px');

			resetDraggableButtonsPosition();
			centerDraggables($('#BIS').css('width', '270px'), $('.less-correlation'));
			centerDraggables($('#BFS').css('width', '270px'), $('.more-correlation'));

			updateChartToExistingValues();

			setTimeout(() => {
				$previous.focus();
			}, 50);
			$('.draggable-element').draggable('disable');
			$('.symbol').addClass('hidden');
		}

		if (currentSlide === 9) {
			$('.draggable-element').css({
				top: '',
				left: '',
				width: '',
			});
			$('.axis').removeClass('d-none');
			$next.removeClass('d-none');
			$('.pairBlock').addClass('block-center');
			$('.symbol').removeClass('hidden');
			$('.symbol-9').addClass('hidden');
			$('.words3').removeClass('r-border');
			$('.words3').css('margin-left', '');
			$('.word-9').css('margin-left', '-15px');
			$('.draggable-element').removeClass('draggable-hover');
			resetDraggableButtonsPosition();
			$('.words1').removeClass('justify-content-center');
			$('.words-9-justify').addClass('justify-content-center');

			centerDraggables($('#BID').css('width', '270px'), $('.less-correlation'));
			centerDraggables($('#BIS').css('width', '270px'), $('.more-correlation'));

			updateChartToExistingValues();
			hideExtraInfo();

			setTimeout(() => {
				$previous.focus();
			}, 50);
			$('.draggable-element').draggable('disable');
			$('.draggable-element').removeClass('draggable');
			$('.symbol').addClass('hidden');
		}
	});

	let dragTarget;

	$('.dropdown-item').click((event) => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			if (dragTarget) {
				dragDraggable($(`#${event.target.dataset.value}`), dragTarget);
			}
			dragTarget = undefined;
		}, 50);
	});

	$('.less-correlation, .more-correlation').click((event) => {
		dragTarget = event.target;
	});

	$reset.on('click', () => {
		window.location.reload();
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	$('.droppable, .draggable').keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
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
