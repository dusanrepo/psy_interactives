$(document).ready(() => {
	const $navigation = $('.navigation');
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	const $clickable = $('.clickable');

	let stage = 0;

	let start;

	const stageCompletion = {
		1: false,
		3: false,
		5: false,
	};

	// Stage 0: Intro
	// Stage 1: Find
	// Stage 2: Feedback
	// Stage 3: Find
	// Stage 4: Feedback
	// Stage 5: Find
	// Stage 6: Results
	// Stage 7: Results

	function activateCompletion() {
		window.postAction({
			id: 'cde64a6d-92a7-492f-91ca-2eeb933d6bd2',
		});
	}

	function setStage() {
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$next.removeClass('d-none');
		if (stage === 8) {
			console.log('activateCompletion()');

			activateCompletion();
			$next.addClass('d-none');
		}

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$('.trigger').addClass('d-none');
		if (stageCompletion[stage] === false) { // if stage is incomplete
			if (stage === 1 ||
        stage === 3 ||
        stage === 5) {
				start = Date.now();
			}

			$('.mr-add-remove').removeClass('mr-auto');
			// show clickable area #trigger-${stage}
			$(`.trigger-${stage}`).removeClass('d-none');
			$navigation.addClass('d-none');
		} else {
			$('.mr-add-remove').addClass('mr-auto');
		}
	}

	function populateChart() {
		// const userData = [
		// 	stageCompletion[1],
		// 	stageCompletion[3],
		// 	stageCompletion[5],
		// ];
		const originalBg = ['#e8e014', '#4263ae', '#e8005b'];
		const ctx = document.getElementById('myChart').getContext('2d');
		const ctxMobile = document.getElementById('myChartMobile').getContext('2d');
		const myChart = new Chart(ctx, { //	eslint-disable-line
			type: 'bar',
			data: {
				labels: [
					['Search for', 'vertical bar'],
					['Search for', 'blue bar'],
					['Search for', 'vertical red bar'],
				],
				datasets: [{
					data: [
						stageCompletion[1],
						stageCompletion[3],
						stageCompletion[5],
					],
					backgroundColor: originalBg,
				}],
			},
			options: {
				responsive: true,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: true,
				},
				// events: [],
				scales: {
					xAxes: [{
						ticks: {
							autoSkip: false,
							maxRotation: 0,
							minRotation: 0,
						},
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true,
							callback(value) { if (value === 0) { return '0.0'; } return value; },
						},
						scaleLabel: {
							display: true,
							labelString: 'Reaction time (seconds)',
						},
					}],
				},
			},
		});

		const myChartMobile = new Chart(ctxMobile, { //	eslint-disable-line
			type: 'bar',
			data: {
				labels: [
					['Search for', 'vertical bar'],
					['Search for', 'blue bar'],
					['Search for', 'vertical red bar'],
				],
				datasets: [{
					data: [
						stageCompletion[1],
						stageCompletion[3],
						stageCompletion[5],
					],
					backgroundColor: originalBg,
				}],
			},
			options: {
				responsive: true,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: true,
				},
				// events: [],
				scales: {
					xAxes: [{
						ticks: {
							autoSkip: false,
							maxRotation: 0,
							minRotation: 0,
						},
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true,
							callback(value) {
								if (value.toString().length === 1) {
									return `${value}.0`;
								}
								return value;
							},
						},
						scaleLabel: {
							display: true,
							labelString: 'Reaction time (seconds)',
						},
					}],
				},
			},
		});

		// myChart.data.datasets.data = userData;
		// myChart.update();
	}

	$clickable.click(() => {
		// $clickable.css('outline', '0');
		// stageCompletion[stage] = true;
		console.log(start);

		stageCompletion[stage] = ((Date.now() - start) / 1000).toFixed(2);
		console.log(stageCompletion);
		if (stage === 5) {
			populateChart();
		}

		stage += 1;
		setStage();
		// $next.removeClass('d-none');
	});

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	$reset.click(() => {
		window.location.reload();
	});
});
