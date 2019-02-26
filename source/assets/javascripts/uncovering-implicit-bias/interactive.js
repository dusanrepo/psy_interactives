$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $submit = $('#submit');
	const $start = $('#start');
	const $reset = $('#reset');

	let stage = 0;

	const trialStart = {};
	const trialEnd = {};
	const trialTimes = {};

	// The average time for the student across 4 trials for the white face
	// The average time for the white face from the study (5872.83 ms)
	// The average time for the student across 4 trials for the black face
	// The average time for the black face from the study (6500.23 ms)

	function endTimeTrial() {
		trialEnd[stage] = new Date();
		trialTimes[stage] = trialEnd[stage] - trialStart[stage];

		if (isNaN(trialTimes[stage])) { // eslint-disable-line
			// console.log('nan');

			trialTimes[stage] = 100;
		}
	}

	function startTimeTrial() {
		trialStart[stage] = new Date();
	}


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
		// myChart.draw();
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
		// myChart.draw();
	}
	
	function populateResults() {
		const whiteTimes = [];
		const blackTimes = [];
		for (let i = 1; i < 9; i += 1) {
			if (i % 2 === 1) {
				whiteTimes.push(trialTimes[i]);
			} else {
				blackTimes.push(trialTimes[i]);
			}
		}
		
		const average = data => data.reduce((sum, value) => sum + value, 0) / data.length;
		const originalBg = ['#66CCCC', '#E8005B', '#66CCCC', '#E8005B'];
		// blue 1 #66CCCC #4DB3B3
		// red 2 #E8005B #CF0042
		// yellow 3 #E8E014 #CFC700
		// ??? 4 #???
		const modifiedBg = ['#4DB3B3', '#CF0042', '#4DB3B3', '#CF0042'];
		const averageWhite = 5872.83;
		const averageBlack = 6500.23;
		const userAverageWhite = average(whiteTimes);
		const userAverageBlack = average(blackTimes);

		$('.user-white').html(`${userAverageWhite} milliseconds.`);
		$('.user-black').html(`${userAverageBlack} milliseconds.`);
		
		const ctx = document.getElementById('myChart').getContext('2d');
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [
					['You', '(White)'],
					['You', '(Black)'],
					['Average', '(White)'],
					['Average', '(Black)']
				],
				datasets: [{
					data: [
						(userAverageWhite / 1000).toFixed(2),
						(userAverageBlack / 1000).toFixed(2),
						(averageBlack / 1000).toFixed(2),
						(averageWhite / 1000).toFixed(2),
					],
					backgroundColor: originalBg
					// [
						// 	'#66CCCC',
						// 	'#E8005B',
						// 	'#E8E014',
						// 	'#C8E014',
						// ]
					}]
				},
				options: {
					responsive: true,
					onClick(evt, activeElements) {
						const elementIndex = activeElements[0]._index;
						const dSets = this.data.datasets[0];
						dSets.backgroundColor[0] = originalBg[0];
						dSets.backgroundColor[1] = originalBg[1];
						dSets.backgroundColor[2] = originalBg[2];
						dSets.backgroundColor[elementIndex] = modifiedBg[elementIndex];
						this.update();
					},
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								autoSkip: false,
								maxRotation: 0,
								minRotation: 0,
							}
						}],
						yAxes: [{
							ticks: {
								beginAtZero: true
							},
							scaleLabel: {
								display: true,
								labelString: 'Average response time (seconds)'
							}
						}]
					}
				}
			});
			/* eslint-enable */

		let chartIndex = -1;
		let openTooltip = chartIndex;
		let tooltipFocusOut; // tooltip that was active when the user tabbed out of the canvas
		$('#myChart').keydown((val) => {
			if (val.which === 9) {
				if (chartIndex < 4) {
					val.preventDefault();
					// do keydown function stuff
					if (val.shiftKey) {
						if (chartIndex < 1) {
							// focus previous element (outside of chart)
							$reset.focus();
						} else {
							// Close current tooltip & revert color
							closeTip(myChart, 0, openTooltip);
							myChart.data.datasets[0].backgroundColor[openTooltip] = originalBg[openTooltip];

							// Open previous tooltip & change color
							chartIndex -= 1;
							myChart.data.datasets[0].backgroundColor[chartIndex] = modifiedBg[chartIndex];
							myChart.update();
							openTip(myChart, 0, chartIndex);
							openTooltip = chartIndex;
						}
					} else if (chartIndex < 3) {
						// Close current tooltip & revert color
						closeTip(myChart, 0, openTooltip);
						myChart.data.datasets[0].backgroundColor[openTooltip] = originalBg[openTooltip];
						// Open next tooltip & change color
						chartIndex += 1;
						if (tooltipFocusOut === 0) { // jump forward 1 tooltip if tooltip 1 was already showing
							tooltipFocusOut = -1;
							chartIndex += 1;
						}
						myChart.data.datasets[0].backgroundColor[chartIndex] = modifiedBg[chartIndex];
						myChart.update();
						openTip(myChart, 0, chartIndex);
						openTooltip = chartIndex;
					} else {
						$reset.focus();
					}
				} else {
					// focus next element (outside of chart)
					$reset.focus();
				}
			}
		});

		$('#myChart').focusout(() => {
			closeTip(myChart, 0, openTooltip);
			if (chartIndex !== -1) {
				tooltipFocusOut = chartIndex;
			}
			chartIndex = -1;
		});
	}

	let isTouchScreen = false;
	if ('ontouchstart' in document.documentElement) 	{
		console.log('Device is touch screen');
		isTouchScreen = true;
	} else 	{
		console.log('Device is not touch device');
		isTouchScreen = false;
	}

	// Outline
	$('#myChart').on({
		mouseenter() {
			$('#myChart').css('outline', '0');
		},
		mouseleave() {
			$('#myChart').css('outline', '0');
		},
	});

	$('#myChart').click(() => {
		$('#myChart').css('outline', '0');
	});

	$(document).keydown((val) => {
		if (val.which === 9 && $(window).width() >= 800 && !isTouchScreen) {
			$('#myChart').removeAttr('style');
		}
	});

	const $playAgain = $('#play-again');
	let gifTimingInterval;
	function gifRestart() {
		if (stage % 2 === 1) {
			console.log('restarting white');
			$('button.white').click();
		} else {
			console.log('restarting black');
			$('button.black').click();
		}
	}

	function gifTiming() {
		if ((Date.now() - trialStart[stage]) >= 10000) {
			clearInterval(gifTimingInterval);
			// show restart
			$playAgain.removeClass('d-none');
			// hide submit
			$submit.addClass('d-none');
		}
	}

	// function gifTimingRestart() {
	// 	setTimeout(() => {
	// 		gifTimingInterval = setInterval(gifTiming, 20);
	// 	}, 20);
	// }
	let notPopulated = true;
	function setActivity() {
		$('.face').addClass('d-none');
		console.log(`stage ${stage}`);

		if (stage === 9) {
			$('.stage').addClass('d-none');
			$(`.stage-${stage}`).removeClass('d-none');
			if (notPopulated) {
				notPopulated = false;
				populateResults();
			}
			$('.gif-area').addClass('d-none');
			$('.results').removeClass('d-none');
			$('.final').removeClass('d-none');
			$('.instructions').addClass('d-none');
			$('.instructions-pre-stage').addClass('d-none');
			console.log('showing next and previous');

			$next.removeClass('d-none');
			// console.log(trialTimes);
		} else if (stage === 10) {
			$('.stage').addClass('d-none');
			$(`.stage-${stage}`).removeClass('d-none');
			console.log('show previous');

			$previous.removeClass('d-none');
		} else {
			console.log('set activity face');
			$('.instructions-pre-stage').addClass('d-none');
			// $(`.face-${stage}`).removeClass('d-none');
			if (stage % 2 === 1) {
				console.log('setting white');
				$('.white').css('opacity', '0')
					.removeClass('d-none')
					.siblings()
					.addClass('d-none');
				$('button.white').click();
				$('.white').animate(
					{ opacity: '1' },
					200, () => {
						console.log('start');
						startTimeTrial();
					}
				);
				gifTimingInterval = setInterval(gifTiming, 20);
			} else {
				console.log('setting black');
				$('.black').css('opacity', '0')
					.removeClass('d-none')
					.siblings()
					.addClass('d-none');
				$('button.black').click();
				$('.black').animate(
					{ opacity: '1' },
					200, () => {
						console.log('start');
						startTimeTrial();
					}
				);
				gifTimingInterval = setInterval(gifTiming, 20);
			}
			$submit.removeClass('d-none');
		}
	}

	const $start2 = $('#start2');

	$playAgain.click(() => {
		// take to new screen
		$('.face').addClass('d-none');
		$('.timeout-screen').removeClass('d-none');
		$start2.removeClass('d-none');
		$playAgain.addClass('d-none');
		$('.instructions-pre-stage').addClass('d-none');
		$('.instructions-during-stage').addClass('d-none');
	});

	$start2.click(() => {
		gifRestart();
		$('.instructions-pre-stage').removeClass('d-none');
		$('.instructions-during-stage').removeClass('d-none');
		$('.timeout-screen').addClass('d-none');
		console.log(`start ${stage}`);
		trialStart[stage] = new Date();
		setActivity();
		$start2.addClass('d-none');
	});

	function Start() {
		Gifffer(); // eslint-disable-line
	}

	window.onload = Start();

	$start.click(() => {
		$('.gif-area').removeClass('neg-margin');
		$('.instructions-pre-stage').removeClass('d-none');
		$('.instructions-pre-stage').addClass('d-none');
		$('.instructions-pre-interactive').addClass('d-none');
		stage += 1;
		console.log(`start ${stage}`);

		setActivity();
		$start.addClass('d-none');
		$submit.removeClass('d-none');
		$('.instructions-during-stage').removeClass('d-none');
	});

	$next.click(() => {
		stage += 1;
		console.log(`next stage ${stage} `);
		if (stage < 9) {
			$('.instructions-during-stage').removeClass('d-none');
		} else {
			$('.instructions-during-stage').addClass('d-none');
		}

		$next.addClass('d-none');
		setActivity();
	});

	$previous.click(() => {
		stage = 9;
		setActivity();
		$previous.addClass('d-none');
		$next.removeClass('d-none');
	});

	$submit.click(() => {
		// clear interval
		clearInterval(gifTimingInterval);

		console.log(`submit stage ${stage}`);
		endTimeTrial();
		$('.face').addClass('d-none');
		if (stage % 2 === 1) {
			$('button.white').click();
		} else {
			$('button.black').click();
		}

		if (stage < 8) {
			$('.instructions-during-stage').addClass('d-none');
			$('.instructions-pre-stage').removeClass('d-none');
			$next.removeClass('d-none');
		} else if (stage === 8) {
			console.log('submit stage 8');
			stage += 1;
			setActivity();
			$('.instructions-during-stage').addClass('d-none');
		}
		$submit.addClass('d-none');
	});
});
