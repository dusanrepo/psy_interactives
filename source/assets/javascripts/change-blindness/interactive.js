$(document).ready(() => {
	const $previous = $('#previous');
	const $next = $('#next');
	const $found = $('.found-block');
	const $reset = $('#reload');
	const $picture1 = $('#picture-1');
	const $picture2 = $('#picture-2');
	const $pictureGray1 = $('#picture-gray1');
	const $pictureGray2 = $('#picture-gray2');
	const $picture3 = $('#picture-3');
	const $picture4 = $('#picture-4');
	const $axis = $('.axis');
	let stopLoop = false;
	let resetLoop = false;
	let counter = 0;
	let counterTime1 = 0;
	let counterTime2 = 0;
	let currentSlide = 1;
	let firstPictureDone = false;
	let secondPictureDone = false;

	function activateCompletion() {
		window.postAction({
			id: '3a07627c-88e8-4fcf-bd12-5d425b542066',
		});
	}


	// eslint-disable-next-line no-undef
	const myChart = new Chart($('#myChart'), {
		type: 'bar',
		data: {
			labels: ['You', 'Average'],
			datasets: [{
				label: 'Reaction time',
				data: [1, 5.48],
				backgroundColor: [
					'rgb(102, 204, 204)',
					'rgb(232, 0, 91)',
				],
				borderColor: [
					'rgb(102, 204, 204)',
					'rgb(232, 0, 91)',
				],
				borderWidth: 1,
			}],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false,
			},
			tooltips: {
				enabled: true,
			},
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Reaction time (seconds)',
					},
					ticks: {
						beginAtZero: true,
					},
				}],
			},
		},
	});

	/* eslint-disable */
	function openTip(myChart, datasetIndex, pointIndex) {
		if (myChart.tooltip._active == undefined) { myChart.tooltip._active = []; }
		const activeElements = myChart.tooltip._active;
		const requestedElem = myChart.getDatasetMeta(datasetIndex).data[pointIndex];
		for (let i = 0; i < activeElements.length; i++) {
			if (requestedElem._index == activeElements[i]._index) { return; }
		}
		activeElements.push(requestedElem);
		myChart.tooltip._active = activeElements;
		myChart.tooltip.update(true);
		myChart.draw();
	}

	function closeTip(myChart, datasetIndex, pointIndex) {
		const activeElements = myChart.tooltip._active;
		if (activeElements == undefined || activeElements.length == 0) { return; }
		const requestedElem = myChart.getDatasetMeta(datasetIndex).data[pointIndex];
		for (let i = 0; i < activeElements.length; i++) {
			if (requestedElem._index == activeElements[i]._index) {
				activeElements.splice(i, 1);
				break;
			}
		}
		myChart.tooltip._active = activeElements;
		myChart.tooltip.update(true);
		myChart.draw();
	}

	let chartIndex = -1;
	let openTooltip = chartIndex;
	$('#myChart').keydown((val) => {
		console.log(`chartIndex is ${chartIndex}`);
		
		if (val.which === 9) {
			console.log('checking if chartIndex <= 1');
			
			if (chartIndex <= 1) {
				console.log('chartIndex <= 1');
				
				val.preventDefault();
				// do keydown function stuff
				if (val.shiftKey) {
					console.log('shiftKey');
					
					if (chartIndex === 0) { // If user is focused on the first hoverable
						console.log('chartIndex === 0, focusing on reset button');
						
						// focus previous element (outside of chart)
						$reset.focus();
					} else {
						console.log('showing last tooltip');
						
						// Close current tooltip & revert color
						closeTip(myChart, 0, openTooltip);

						// Open previous tooltip & change color
						chartIndex -= 1;
						myChart.update();
						openTip(myChart, 0, chartIndex);
						openTooltip = chartIndex;

						// show feedback
						$('.feedback').addClass('d-none');
					}
				} else if (chartIndex < 1) {
					console.log('shiftKey not pressed');
					// Close current tooltip & revert color
					closeTip(myChart, 0, openTooltip);
					// Open next tooltip & change color
					chartIndex += 1;
					myChart.update();
					openTip(myChart, 0, chartIndex);
					openTooltip = chartIndex;
					// show feedback
					$('.feedback').addClass('d-none');
				} else {
					console.log('else, focusing previous');
					
					$previous.focus();
				}
			} else {
				console.log('chartIndex NOT < 1, else focusing previous');
				// focus next element (outside of chart)
				$previous.focus();
			}
		}
	});

	$('#myChart').focusout(() => {
		console.log('focus out');
		
		// Close current tooltip & revert color
		closeTip(myChart, 0, openTooltip);
		chartIndex = -1;
	});

	function showPic(num) {
		$(`#picture-${num}`).removeClass('d-none');
		$found.removeClass('d-none');
	}

	function hidePic(num) {
		$(`#picture-${num}`).addClass('d-none');
		$found.addClass('d-none');
	}

	function showNextSlide() {
		const currentSlideEl = document.querySelectorAll(`[data-slide='${currentSlide}']`)[0];
		currentSlideEl.classList.remove('d-none');
	}

	function hidePreviousSlide(prevSlide) {
		$(`[data-slide='${prevSlide}']`).addClass('d-none');
	}

	function switchSlides() {
		hidePreviousSlide(currentSlide);
		currentSlide += 1;
		showNextSlide();
	}

	function showNextPicture(pictures, i) {
		if (i > 0) {
			pictures[i - 1].addClass('d-none');
		} else if (i === 0) {
			pictures[3].addClass('d-none');
		}
		pictures[i].removeClass('d-none');
	}

	function handleSlideChangeAfterLoop() {
		if (currentSlide === 3) {
			hidePic(1);
			hidePic('gray1');
			hidePic(2);
			showPic(5);
			firstPictureDone = true;
		}

		if (currentSlide === 6) {
			hidePic(3);
			hidePic('gray2');
			hidePic(4);
			showPic(6);
			secondPictureDone = true;
		}
	}

	function showAxis() {
		$axis.removeClass('d-none');
	}

	function hideAxis() {
		$axis.addClass('d-none');
	}

	function changeButtonVisibility() {
		$next.removeClass('d-none');
		$previous.removeClass('d-none');
		$found.addClass('d-none');
	}

	function addDataToChart(yourTime, averageData) {
		myChart.data.datasets[0].data[0] = yourTime.toFixed(2);
		myChart.data.datasets[0].data[1] = averageData.toFixed(2);
		myChart.update();
	}

	function startLooping(picturesArray) {
		let i = 0;
		const timerId = setInterval(() => {
			$found.removeClass('d-none');
			if (i === 4) {
				i = 0;
			}

			counter += 240;
			showNextPicture(picturesArray, i);
			if (counter === 30000 || stopLoop === true) {
				counter /= 1000;
				currentSlide += 1;

				clearInterval(timerId);
				showNextSlide();

				handleSlideChangeAfterLoop();
				changeButtonVisibility();
			}

			if (resetLoop === true) {
				clearInterval(timerId);
				$found.addClass('d-none');
				resetLoop = false;
			}

			i += 1;
		}, 240);
	}

	$next.on('click', () => {
		switchSlides();

		if (currentSlide === 2) {
			stopLoop = false;
			resetLoop = false;
			hidePic(5);
			startLooping([$picture1, $pictureGray1, $picture2, $pictureGray1]);
			$next.addClass('d-none');
		}

		if (currentSlide === 4) {
			counterTime1 = counter;
			addDataToChart(counterTime1, 5.48);
			hidePic(1);
			hidePic(2);
			hidePic('gray1');
			showAxis();
			$(`[data-slide='${2}']`).addClass('d-none');
		}

		if (currentSlide === 5) {
			stopLoop = false;
			counterTime2 = 0;
			hideAxis();
			showPic(3);
			hidePic(6);
			startLooping([$picture3, $pictureGray2, $picture4, $pictureGray2]);
			$next.addClass('d-none');
			$previous.addClass('d-none');
		}

		if (currentSlide === 7) {
			counterTime2 = counter;
			addDataToChart(counterTime2, 12.82);
			hidePic(3);
			hidePic(4);
			hidePic('gray2');
			showAxis();
			$(`[data-slide='${5}']`).addClass('d-none');
		}

		if (currentSlide === 8) {
			console.log('slide 8 - completion');
			activateCompletion();
			hideAxis();
			$next.addClass('d-none');
		}
	});

	$previous.on('click', () => {
		if ((currentSlide === 3 && firstPictureDone) || (currentSlide === 6 && secondPictureDone)) {
			currentSlide -= 2;
			showNextSlide();
			hidePreviousSlide(currentSlide + 2);
			hidePreviousSlide(currentSlide + 1);
		} else {
			currentSlide -= 1;
			showNextSlide();
			hidePreviousSlide(currentSlide + 1);
		}

		if (currentSlide === 1) {
			hidePic(1);
			$previous.addClass('d-none');
		}

		if (currentSlide === 2) {
			showPic(1);
			hidePic(2);
			hidePic('gray1');
			startLooping([$picture1, $pictureGray1, $picture2, $pictureGray1]);
			stopLoop = false;
			counterTime1 = 0;
			$next.addClass('d-none');
			$previous.addClass('d-none');
		}

		if (currentSlide === 3) {
			hideAxis();
			$(`[data-slide='${2}']`).removeClass('d-none');
			showPic(5);
			$found.addClass('d-none');
		}

		if (currentSlide === 4) {
			addDataToChart(counterTime1, 5.48);
			showAxis();
		}

		if (currentSlide === 5) {
			stopLoop = false;
			startLooping([$picture3, $pictureGray2, $picture4, $pictureGray2]);
			showPic(3);
			$next.addClass('d-none');
			$previous.addClass('d-none');
		}

		if (currentSlide === 6) {
			hideAxis();
			$(`[data-slide='${5}']`).removeClass('d-none');
			showPic(6);
			$found.addClass('d-none');
		}

		if (currentSlide === 7) {
			hidePic(3);
			showAxis();
		}

		if (currentSlide === 8) {
			console.log('slide 8');
			
			hidePic('gray2');
			showPic(3);
		}

		if (currentSlide === 7) {
			$next.removeClass('d-none');
		}
	});

	$reset.on('click', () => {
		window.location.reload();
	});

	$found.on('click', () => {
		stopLoop = true;
	});
});
