$(document).ready(() => {
	const $submit = $('#submit');
	const $reset = $('#reset');

	const $draggable = $('.draggable');

	// const $sliderBar1 = $('.slider-fertile-time');
	// const $sliderBar2 = $('.slider-fertile-window');
	// const $sliderBar3 = $('.slider-ovulation-day');

	// $sliderBar1.slider({
	// 	range: 'max',
	// 	min: 0,
	// 	max: 26,
	// 	value: 0,
	// 	step: 0.1,
	// 	slide(event, ui) {
	// 		// let leftPos = (ui.value / 30) * 100;
	// 		// if (ui.value >= 15) {
	// 		// 	leftPos = ((ui.value + 1) / 30) * 100;
	// 		// 	leftPos -= (($('.color-section.fertile-time').width() / $('.color-bar').width()) * 100);
	// 		// }

	// 		// let leftPos = (ui.value / 30) * 100;
	// 		// if (ui.value >= 15) {
	// 		// 	leftPos += (ui.value * 0.25);
	// 		// }

	// 		// let leftPos;
	// 		// // if (ui.value >= 15) {
	// 		// const multiplier = parseFloat(`3.1${ui.value / 2}`);
	// 		// console.log(`multiplier ${multiplier}`);

	// 		// leftPos = (multiplier * ui.value);
	// 		// }
	// 		// else if (ui.value < 15) {
	// 		// leftPos = (3.333 * ui.value);
	// 		// }

	// 		// let leftPos;
	// 		// if (ui.value >= 16) {
	// 		// 	leftPos = ((((ui.value + 1) / 30) * 0.89) * 100);
	// 		// } else {
	// 		// 	leftPos = (ui.value / 30) * 100;
	// 		// }

	// 		// let leftPos;
	// 		// leftPos = (100 / 0.26) * ((ui.value * 0.01) - (0.01));
	// 		// if (ui.value <= 14) {
	// 		// 	leftPos = (100 / 0.27) * ((ui.value * 0.01) - 0);
	// 		// } else {
	// 		// 	leftPos = (3.333 * ui.value);
	// 		// }

	// 		let leftPos = (3.333 * ui.value);
	// 		// if (ui.value <= 24) { // 14 here to represent 15; changed to 24
	// 		leftPos += (0.067 * ui.value); // 1% discrepancy at 15 (14) mark, so 1/15 = 0.067
	// 		// }

	// 		console.log(`leftPos ${leftPos}`);

	// 		$sliderBar1.attr('alt', `day ${(ui.value + 1)}`);
	// 		$(ui.handle)
	// 			.attr('aria-valuetext', `day ${(ui.value + 1)}`) // text val, 'day 5'
	// 			.attr('aria-valuenow', ui.value); // current val, '5'
	// 		$('.color-section.fertile-time').css('left', `${leftPos}%`);
	// 	},
	// });

	// $sliderBar2.slider({
	// 	range: 'max',
	// 	min: 0,
	// 	max: 23,
	// 	value: 0,
	// 	step: 0.1,
	// 	slide(event, ui) {
	// 		let leftPos = (3.333 * ui.value);
	// 		if (ui.value <= 24) { // 14 here to represent 15; changed to 24
	// 			leftPos += (0.067 * ui.value); // 1% discrepancy at 15 (14) mark, so 1/15 = 0.067
	// 		}

	// 		console.log(`leftPos ${leftPos}`);

	// 		$sliderBar2.attr('alt', `day ${(ui.value + 1)}`);
	// 		$(ui.handle)
	// 			.attr('aria-valuetext', `day ${(ui.value + 1)}`) // text val, 'day 5'
	// 			.attr('aria-valuenow', ui.value); // current val, '5'
	// 		$('.color-section.fertile-window').css('left', `${leftPos}%`);
	// 	},
	// });

	// $sliderBar3.slider({
	// 	range: 'max',
	// 	min: 0,
	// 	max: 29,
	// 	value: 0,
	// 	step: 0.1,
	// 	slide(event, ui) {
	// 		let leftPos = (3.333 * ui.value);
	// 		if (ui.value <= 24) { // 14 here to represent 15; changed to 24
	// 			leftPos += (0.067 * ui.value); // 1% discrepancy at 15 (14) mark, so 1/15 = 0.067
	// 		}

	// 		console.log(`leftPos ${leftPos}`);

	// 		$sliderBar3.attr('alt', `day ${(ui.value + 1)}`);
	// 		$(ui.handle)
	// 			.attr('aria-valuetext', `day ${(ui.value + 1)}`) // text val, 'day 5'
	// 			.attr('aria-valuenow', ui.value); // current val, '5'
	// 		$('.color-section.ovulation-day').css('left', `${leftPos}%`);
	// 	},
	// });

	// $('.ui-slider-handle').attr('aria-label', 'endometrial');
	// $('.ui-slider-handle').attr('aria-label', 'progesterone');
	// $('.ui-slider-handle').attr('aria-label', 'estrogen');

	// $('.ui-slider-handle').attr('aria-valuemax', 30);
	// $('.ui-slider-handle').attr('aria-valuemin', 1);

	function handleDraggablePositioning(draggable) {
		// draggables left as percentage of the canvas width
		const percentPos = draggable.data('percent-pos');
		const leftPosPx = percentPos * $('canvas').outerWidth();

		draggable.css('left', `${leftPosPx}px`);
	}

	function setDraggablePositions() {
		$draggable.toArray().forEach((draggable) => {
			handleDraggablePositioning($(draggable));
		});
	}

	$draggable.draggable({
		containment: $('.containment'),
		scroll: false,
		axis: 'x',
		drag: (e, ui) => {
			$draggable.removeClass('active');
			$(ui.draggable).addClass('active');
		},
		stop: function () { //eslint-disable-line
			const draggable = $(this);
			const percentPos = parseFloat(draggable.css('left')) / $('canvas').outerWidth();
			// console.log(`draggablePos.left ${draggablePos.left}`);
			// console.log(`draggable.css('left') ${draggable.css('left')}`);
			// console.log(`PERCENTPOS ${percentPos}`);
			draggable.data('percent-pos', percentPos);
		},
	});

	$draggable.keydown((val) => {
		console.log(val.which);
		// 39 right 38 up
		// 37 left 40 down
		const draggable = val.target;
		if (val.which === 38 || val.which === 39) {
			let draggableLeft = ((draggable.getBoundingClientRect().left + draggable.getBoundingClientRect().right) / 2) + 1; // eslint-disable-line
			draggableLeft += 2;

			$(draggable).simulate('drag', {
				x: draggableLeft,
			});
		} else if (val.which === 37 || val.which === 40) {
			let draggableLeft = ((draggable.getBoundingClientRect().left + draggable.getBoundingClientRect().right) / 2) - 1; // eslint-disable-line
			draggableLeft -= 2;

			$(draggable).simulate('drag', {
				x: draggableLeft,
			});
		}
	});

	$(window).resize(() => {
		console.log('setting');
		setDraggablePositions();
	});

	const ctx = document.getElementById('myChart').getContext('2d');

	const colors = {
		endometrial: {
			fill: 'rgba(166, 221, 198, 0.5)',
			stroke: 'rgba(93, 196, 155, 0.5)',
		},
		lightBlue: {
			stroke: '#6fccdd',
		},
		estrogen: {
			fill: 'rgba(168, 195, 218, 0.5)',
			stroke: '#3282bf',
		},
		progesterone: {
			fill: 'rgba(174, 174, 224, 0.5)',
			stroke: 'rgba(105, 104, 198, 0.5)',
		},
	};

	// Endometrial
	// 1-Jan-12	750 -> 375
	// 2-Jan-12	600 -> 300
	// 3-Jan-12	450 -> 225
	// 4-Jan-12	300 -> 150
	// 5-Jan-12	150 -> 75
	// 6-Jan-12	140 -> 70
	// 7-Jan-12	150 -> 75
	// 8-Jan-12	160 -> 80
	// 9-Jan-12	200 -> 100
	// 10-Jan-12	250 -> 125
	// 11-Jan-12	300 -> 150
	// 12-Jan-12	350 -> 175
	// 13-Jan-12	400 -> 200
	// 14-Jan-12	500 -> 250
	// 15-Jan-12	475 -> 237.5

	// 16-Jan-12	450 -> 225
	// 17-Jan-12	450 -> 225
	// 18-Jan-12	450 -> 225
	// 19-Jan-12	500 -> 250
	// 20-Jan-12	550 -> 275
	// 21-Jan-12	610 -> 305
	// 22-Jan-12	630 -> 315
	// 23-Jan-12	650 -> 325

	// 24-Jan-12	670 -> 335
	// 25-Jan-12	690 -> 345
	// 26-Jan-12	710 -> 355
	// 27-Jan-12	730 -> 365
	// 28-Jan-12	740 -> 370
	// 29-Jan-12	750 -> 375
	// 30-Jan-12	750 -> 375

	// Progesterone
	// 1-Jan-12	60
	// 2-Jan-12	40
	// 3-Jan-12	38
	// 4-Jan-12	36
	// 5-Jan-12	34
	// 6-Jan-12	32
	// 7-Jan-12	30
	// 8-Jan-12	28
	// 9-Jan-12	26

	// 10-Jan-12	24
	// 11-Jan-12	22
	// 12-Jan-12	20
	// 13-Jan-12	24
	// 14-Jan-12	70
	// 15-Jan-12	100
	// 16-Jan-12	220
	// 17-Jan-12	440
	// 18-Jan-12	600
	// 19-Jan-12	700
	// 20-Jan-12	740

	// 21-Jan-12	800
	// 22-Jan-12	810
	// 23-Jan-12	800
	// 24-Jan-12	720
	// 25-Jan-12	580
	// 26-Jan-12	420
	// 27-Jan-12	280
	// 28-Jan-12	140
	// 29-Jan-12	80
	// 30-Jan-12	60

	// Estrogen
	// 1-Jan-12	150
	// 2-Jan-12	145
	// 3-Jan-12	130
	// 4-Jan-12	140
	// 5-Jan-12	150
	// 6-Jan-12	160
	// 7-Jan-12	170
	// 8-Jan-12	180
	// 9-Jan-12	200

	// 10-Jan-12	220
	// 11-Jan-12	280
	// 12-Jan-12	490
	// 13-Jan-12	680
	// 14-Jan-12	930
	// 15-Jan-12	760
	// 16-Jan-12	300
	// 17-Jan-12	280
	// 18-Jan-12	320
	// 19-Jan-12	440
	// 20-Jan-12	500
	// 21-Jan-12	510
	// 22-Jan-12	515

	// 23-Jan-12	525
	// 24-Jan-12	520
	// 25-Jan-12	525
	// 26-Jan-12	530
	// 27-Jan-12	370
	// 28-Jan-12	320
	// 29-Jan-12	210
	// 30-Jan-12	150

	const endometrialData = [750, 600, 450, 300, 150, 140, 150, 160, 200, 250, 300, 350, 400, 500, 475, 450, 450, 450, 500, 550, 610, 630, 650, 670, 690, 710, 730, 740, 750, 750]; //eslint-disable-line
	const estrogenData = [150, 145, 130, 140, 150, 160, 170, 180, 200, 220, 280, 490, 680, 930, 760, 300, 280, 320, 440, 500, 510, 515, 525, 520, 525, 530, 370, 320, 310, 150]; //eslint-disable-line
	const progesteroneData = [60, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 24, 70, 100, 220, 440, 600, 700, 740, 800, 810, 800, 720, 580, 420, 280, 140, 80, 60]; //eslint-disable-line
	const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]; //eslint-disable-line

	const myChart = new Chart(ctx, { //eslint-disable-line
		type: 'line',
		data: {
			labels: xData,
			datasets: [{
				label: 'Progesterone',
				fill: true,
				backgroundColor: colors.progesterone.fill,
				pointBackgroundColor: colors.progesterone.stroke,
				borderColor: colors.progesterone.stroke,
				pointHighlightStroke: colors.progesterone.stroke,
				borderCapStyle: 'butt',
				data: progesteroneData,
				pointRadius: 0,

			}, {
				label: 'Estrogen',
				fill: true,
				backgroundColor: colors.estrogen.fill,
				pointBackgroundColor: colors.estrogen.stroke,
				borderColor: colors.estrogen.stroke,
				pointHighlightStroke: colors.estrogen.stroke,
				borderCapStyle: 'butt',
				data: estrogenData,
				pointRadius: 0,
			}, {
				label: 'Endometrial',
				fill: true,
				backgroundColor: colors.endometrial.fill,
				pointBackgroundColor: colors.lightBlue.stroke,
				borderColor: colors.lightBlue.stroke,
				pointHighlightStroke: colors.lightBlue.stroke,
				borderCapStyle: 'butt',
				data: endometrialData,
				pointRadius: 0,
			}]
			,
		},
		options: {
			responsive: true,
			animation: false,
			scales: {
				yAxes: [{
					gridLines: {
						display: false,
						drawBorder: false,
						drawOnChartArea: false,
					},
					display: false,
					stacked: false,
				}],
				// xAxes: [{
				// scaleLabel: {
				// 	display: true,
				// 	labelString: 'Day of cycle',
				// },
				// }],
			},
			legend: {
				display: false,
			},
		},
	});

	$submit.click(() => {
		// showCorrect();
		setDraggablePositions();
		$draggable.draggable('disable');
		$('.step').addClass('d-none');
		$('.step-2').removeClass('d-none');
		$submit.addClass('d-none');
	});

	$reset.click(() => {
		window.location.reload();
	});

	$('#estrogen').click(() => {
		if (!myChart.data.datasets[1].fill === true) {
			myChart.data.datasets[1].borderColor = colors.estrogen.stroke;
		} else {
			myChart.data.datasets[1].borderColor = 'rgba(255, 255, 255, 0)';
		}
		myChart.data.datasets[1].fill = !myChart.data.datasets[1].fill;
		myChart.update();
	});

	$('#progesterone').click(() => {
		if (!myChart.data.datasets[0].fill === true) {
			myChart.data.datasets[0].borderColor = colors.progesterone.stroke;
		} else {
			myChart.data.datasets[0].borderColor = 'rgba(255, 255, 255, 0)';
		}
		myChart.data.datasets[0].fill = !myChart.data.datasets[0].fill;
		myChart.update();
	});

	$('#endometrial').click(() => {
		if (!myChart.data.datasets[2].fill === true) {
			myChart.data.datasets[2].borderColor = colors.endometrial.stroke;
		} else {
			myChart.data.datasets[2].borderColor = 'rgba(255, 255, 255, 0)';
		}
		myChart.data.datasets[2].fill = !myChart.data.datasets[2].fill;
		myChart.update();
	});

	// document.getElementById('estrogen').addEventListener('click', () => {
	// 	myChart.data.datasets.splice(0, 1);
	// 	myChart.update();
	// });

	// document.getElementById('endometrial').addEventListener('click', () => {
	// 	myChart.data.datasets.push({
	// 		label: 'Progesterone',
	// 		fill: true,
	// 		backgroundColor: colors.progesterone.fill,
	// 		pointBackgroundColor: colors.progesterone.stroke,
	// 		borderColor: colors.progesterone.stroke,
	// 		pointHighlightStroke: colors.progesterone.stroke,
	// 		borderCapStyle: 'butt',
	// 		data: progesteroneData,
	// 		pointRadius: 0,
	// 	});

	// 	myChart.update();
	// });


	function placeInitialDraggablePos() {
		// ov day
		// fer time
		// fer win

		const ovDay = $('.user-draggable.ovulation-day'); // don't move
		const ferTime = $('.user-draggable.fertile-time');
		const ferWin = $('.user-draggable.fertile-window');

		const ovDayOff = ovDay.offset();
		ferTime.offset({
			left: (ovDayOff.left + ovDay.width()),
		});

		const ferTimeOff = ferTime.offset();
		ferWin.offset({
			left: (ferTimeOff.left + ferTime.width()),
		});
	}

	// setTimeout(() => {
	placeInitialDraggablePos();
	// }, 1000);

	$('.answer-draggable.fertile-window').data('percent-pos', 0.36195652173913045);
	$('.answer-draggable.fertile-time').data('percent-pos', 0.46630434782608693);
	$('.answer-draggable.ovulation-day').data('percent-pos', 0.5434782608695652);
});
