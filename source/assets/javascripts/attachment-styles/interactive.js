$(document).ready(() => {
	const $choice = $('.choice');
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');
	const $bar = $('.bar');
	const $option = $('.option');

	let stage = 1;

	$choice.click(() => {
		$next.removeClass('d-none');
	});

	$bar.click((e) => {
		const barId = $(e.target).attr('id');
		$('.feedback').addClass('d-none');
		$(`.feedback-${barId}`).removeClass('d-none');
	});

	$next.click(() => {
		stage += 1;
		$('.stage').addClass('d-none');
		$(`#stage-${stage}`).removeClass('d-none');
		$next.addClass('d-none');
		$previous.removeClass('d-none');
	});

	$previous.click(() => {
		stage -= 1;
		$('.stage').addClass('d-none');
		$(`#stage-${stage}`).removeClass('d-none');
		$previous.addClass('d-none');
		$next.removeClass('d-none');
	});

	$reset.click(() => {
		stage = 1;
		$('.stage').addClass('d-none');
		$('.option-feedback').addClass('d-none');
		$(`#stage-${stage}`).removeClass('d-none');
		$('button').removeClass('active');
		$next.addClass('d-none');
		$previous.addClass('d-none');
		$('.terms').addClass('d-none');
	});

	let selectedOpt;
	$option.click((e) => {
		selectedOpt = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
		$option.removeClass('active');
		$(e.target).addClass('active');
		// $submit.removeClass('d-none');
		$('.option-feedback').removeClass('d-none');
		$('.type').addClass('d-none');
		$(`.type-${selectedOpt}`).removeClass('d-none');
		$('.terms').removeClass('d-none');
		$next.removeClass('d-none');
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

	const ctx = document.getElementById('myChart');
	const originalBg = ['#66CCCC', '#E8005B', '#E8E014'];
	// blue 1 #66CCCC #4DB3B3
	// red 2 #E8005B #CF0042
	// yellow 3 #E8E014 #CFC700
	const modifiedBg = ['#4DB3B3', '#CF0042', '#CFC700'];

	const myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Secure', 'Dismissive-avoidant', 'Anxious-ambivalent'],
			datasets: [{
				data: [58, 23, 19],
				backgroundColor: ['#66CCCC', '#E8005B', '#E8E014'],
				hoverBackgroundColor: ['#4DB3B3', '#CF0042', '#CFC700'],
				classes: ['secure', 'dismissive', 'anxious']
			}],
		},
		options: {
			// responsive: false, // bad
			onClick(evt, activeElements) {
				const elementIndex = activeElements[0]._index;
				const dSets = this.data.datasets[0];
				dSets.backgroundColor[0] = originalBg[0];
				dSets.backgroundColor[1] = originalBg[1];
				dSets.backgroundColor[2] = originalBg[2];
				dSets.backgroundColor[elementIndex] = modifiedBg[elementIndex];
				this.update();
				$('.feedback').addClass('d-none');
				$(`.${dSets.classes[elementIndex]}.feedback`).removeClass('d-none');
			},
			tooltips: {
				enabled: true,
				mode: 'single',
				callbacks: {
						label: function(tooltipItems, data) { 

							return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%'
						}
				}
			},
			legend: {
				labels: {
					boxWidth: 40, // 40 default
				}
			},
		},
	});

	// window.openTip = openTip;
	// window.closeTip = closeTip;
	/* eslint-enable */

	let chartIndex = -1;
	let openTooltip = chartIndex;
	let tooltipFocusOut; // tooltip that was active when the user tabbed out of the canvas
	$('#myChart').keydown((val) => {
		if (val.which === 9) {
			if (chartIndex < 3) {
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

						// show feedback
						$('.feedback').addClass('d-none');
						$(`.${myChart.data.datasets[0].classes[chartIndex]}.feedback`).removeClass('d-none');
					}
				} else if (chartIndex < 2) {
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
					// show feedback
					$('.feedback').addClass('d-none');
					$(`.${myChart.data.datasets[0].classes[chartIndex]}.feedback`).removeClass('d-none');
				} else {
					$previous.focus();
				}
			} else {
				// focus next element (outside of chart)
				$previous.focus();
			}
		}
	});

	$('#myChart').focusout(() => {
		if (chartIndex !== -1) {
			tooltipFocusOut = chartIndex;
		}
		chartIndex = -1;
	});

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
});
