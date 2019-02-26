// import { log } from 'util';

$(document).ready(() => {
	const $reset = $('#reset');
	const $heightFeet = $('#heightFeet');
	const $heightInches = $('#heightInches');
	const $weightPounds = $('#weightPounds');
	const $heightCm = $('#heightCm');
	const $heightM = $('#heightM');
	const $weightKg = $('#weightKg');
	const $showBmi = $('#showBmi');
	const $units = $('#selectUnits');
	const $submit = $('#submit');
	const $category = $('#category');
	let weightUnited = 0;
	let heightMValue = '';
	const allowedKeys = [8, 9, 13];
	// let heightUnited = 0;

	const ctx1 = $('#myChartUs');
	// eslint-disable-next-line no-undef
	const myChartUS = new Chart(ctx1, {
		type: 'scatter',
		data: {
			yLabels: ["6'11\"", "6'9\"", "6'7\"", "6'5\"", "6'3\"", "6'1\"", "5'11\"", "5'9\"", "5'7\"", "5'5\"", "5'3\"", "5'1\"", "4'11\""],
			datasets: [{
				label: 'My Point',
				borderColor: 'rgb(76, 175, 80)',
				backgroundColor: 'rgba(76, 175, 80, 1)',
				data: [{ x: 90, y: 1.50 }],
			}, {
				label: 'My First dataset',
				yAxisID: 'A',
				borderColor: 'rgb(255, 221, 191)',
				backgroundColor: 'rgba(255, 221, 191, 0.5)',
				data: [{ x: 145, y: 1.50 }, { x: 150, y: 1.53 }, { x: 170, y: 1.63 }, { x: 190, y: 1.72 },
					{ x: 210, y: 1.80 }, { x: 230, y: 1.88 }, { x: 250, y: 1.96 }, { x: 260, y: 2.00 },
					{ x: 280, y: 2.10 }, { x: 350, y: 2.10 }],
				pointRadius: 1,
				fill: true,
				tension: 0,
				showLine: true,
			}, {
				label: 'Fake scale inch label',
				yAxisID: 'B',
				data: [{ x: 90, y: 1.50 }],
			}, {
				label: 'My Second dataset',
				borderColor: 'rgb(224, 218, 242)',
				backgroundColor: 'rgba(224, 218, 242, 0.5)',
				data: [{ x: 120, y: 1.50 }, { x: 130, y: 1.56 }, { x: 150, y: 1.66 }, { x: 170, y: 1.77 },
					{ x: 190, y: 1.87 }, { x: 210, y: 1.96 }, { x: 220, y: 2.00 }, { x: 240, y: 2.10 },
					{ x: 350, y: 2.10 }],
				pointRadius: 1,
				fill: true,
				tension: 0,
				showLine: true,
			}, {
				label: 'My Third dataset',
				borderColor: 'rgb(229, 244, 255)',
				backgroundColor: 'rgba(229, 244, 255, 0.5)',
				data: [{ x: 90, y: 1.50 }, { x: 110, y: 1.65 }, { x: 130, y: 1.77 }, { x: 150, y: 1.90 },
					{ x: 170, y: 2.00 }, { x: 190, y: 2.10 }, { x: 350, y: 2.10 }],
				pointRadius: 1,
				fill: true,
				tension: 0,
				showLine: true,
			}],
		},
		options: {
			animation: {
				duration: 500,
				easing: 'linear',
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false,
			},
			tooltips: {
				enabled: false,
			},
			scales: {
				xAxes: [{
					position: 'bottom',
					gridLines: {
						color: 'rgb(207, 207, 207)',
					},
					ticks: {
						min: 90,
						max: 350,
						stepSize: 20,
					},
					scaleLabel: {
						display: true,
						labelString: 'Weight (lb)',
						fontStyle: 'bold',
						fontColor: '#000',
					},
				}],
				yAxes: [{
					id: 'A',
					position: 'left',
					display: false,
					ticks: {
						min: 1.50,
						max: 2.10,
					},
				}, {
					id: 'B',
					type: 'category',
					position: 'left',
					display: true,
					gridLines: {
						color: 'rgb(207, 207, 207)',
					},
					scaleLabel: {
						display: true,
						labelString: 'Height (ft)',
						fontStyle: 'bold',
						fontColor: '#000',
					},
				}],
			},
		},
	});

	const ctx2 = $('#myChartEu');
	// eslint-disable-next-line no-undef
	const myChartEU = new Chart(ctx2, {
		type: 'scatter',
		data: {
			datasets: [{
				label: 'My Point dataset',
				borderColor: 'rgb(76, 175, 80)',
				backgroundColor: 'rgba(76, 175, 80, 1)',
				data: [{ x: 40, y: 1.50 }],
			}, {
				label: 'My First dataset',
				borderColor: 'rgb(255, 221, 191)',
				backgroundColor: 'rgba(255, 221, 191, 0.5)',
				data: [{ x: 67, y: 1.50 }, { x: 70, y: 1.54 }, { x: 80, y: 1.64 }, { x: 90, y: 1.74 },
					{ x: 100, y: 1.84 }, { x: 110, y: 1.93 }, { x: 120, y: 2.00 }, { x: 130, y: 2.10 },
					{ x: 160, y: 2.10 }],
				pointRadius: 1,
				fill: true,
				tension: 0,
				showLine: true,
			}, {
				label: 'My Second dataset',
				borderColor: 'rgb(224, 218, 242)',
				backgroundColor: 'rgba(224, 218, 242, 0.5)',
				data: [{ x: 55, y: 1.50 }, { x: 70, y: 1.68 }, { x: 80, y: 1.80 }, { x: 90, y: 1.90 },
					{ x: 100, y: 2.00 }, { x: 110, y: 2.10 }, { x: 160, y: 2.10 }],
				pointRadius: 1,
				fill: true,
				tension: 0,
				showLine: true,
			}, {
				label: 'My Third dataset',
				borderColor: 'rgb(229, 244, 255)',
				backgroundColor: 'rgba(229, 244, 255, 0.5)',
				data: [{ x: 40, y: 1.50 }, { x: 50, y: 1.65 }, { x: 60, y: 1.80 }, { x: 70, y: 1.93 },
					{ x: 75, y: 2.00 }, { x: 83, y: 2.10 }, { x: 160, y: 2.10 }],
				pointRadius: 1,
				fill: true,
				tension: 0,
				showLine: true,
			}],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false,
			},
			tooltips: {
				enabled: false,
			},
			scales: {
				xAxes: [{
					position: 'bottom',
					gridLines: {
						color: 'rgb(207, 207, 207)',
					},
					ticks: {
						min: 40,
						max: 160,
						padding: 10,
						stepSize: 10,
					},
					scaleLabel: {
						display: true,
						labelString: 'Weight (kg)',
						fontStyle: 'bold',
						fontColor: '#000',
					},
				}],
				yAxes: [{
					position: 'left',
					gridLines: {
						color: 'rgb(207, 207, 207)',
					},
					display: true,
					ticks: {
						min: 1.50,
						max: 2.10,
						stepSize: 0.05,
					},
					scaleLabel: {
						display: true,
						labelString: 'Height (m)',
						fontStyle: 'bold',
						fontColor: '#000',
					},
				}],
			},
		},
	});

	function addPointToChart(chart, weight, heightCm) {
		const heightM = (heightCm / 100).toFixed(2);
		// console.log(heightCm);
		// console.log(heightM);

		if (chart === 'us') {
			let fixed = heightM;
			if (heightM >= '1.90' && heightM <= '1.92') {
				fixed = '1.90';
			}

			if (heightM >= '1.95' && heightM <= '1.97') {
				fixed = '1.95';
			}

			if (heightM >= '2.00' && heightM <= '2.01') {
				fixed = '2.00';
			}

			if (heightM >= '2.05' && heightM <= '2.06') {
				fixed = '2.05';
			}

			if (heightM >= '2.09' && heightM <= '2.11') {
				fixed = '2.10';
			}

			myChartUS.data.datasets[0].data[0].x = weight;
			myChartUS.data.datasets[0].data[0].y = fixed;
			myChartUS.update();
		}
		if (chart === 'eu') {
			myChartEU.data.datasets[0].data[0].x = weight;
			myChartEU.data.datasets[0].data[0].y = heightM;
			myChartEU.update();
		}
	}

	function showModal() {
		$('.modal-body').text('This BMI score does not fit on this graph. However, use the BMI score and the graph legend to figure out which category this score falls into.');
		$('#incorrect').modal('show');
	}

	function showCategory(bmi) {
		if (bmi < 18.5) {
			$('.category-text').removeClass('d-none');
			$category.text('Underweight.');
		}

		if (bmi >= 18.5 && bmi < 25) {
			$('.category-text').removeClass('d-none');
			$category.text('Normal range.');
		}

		if (bmi >= 25 && bmi < 30) {
			$('.category-text').removeClass('d-none');
			$category.text('Overweight.');
		}

		if (bmi > 30) {
			$('.category-text').removeClass('d-none');
			$category.text('Obese.');
		}
	}

	function countBmiEu() {
		let weight = Number($weightKg.val());
		const Cm = Number($heightCm.val());
		const Meters = Number($heightM.val());
		let totalCm = (Meters * 100) + Cm;

		let bmi = ((weight) / (totalCm * totalCm)) * 10000;
		bmi = Math.round(bmi * 10) / 10;
		$showBmi.text(`${bmi} `);
		showCategory(bmi);
		if (totalCm < 150) {
			showModal();
			totalCm = 150;
		} else if (totalCm > 210) {
			showModal();
			totalCm = 205;
		}
		if (weight < 40) {
			showModal();
			weight = 40;
		} else if (weight > 160) {
			showModal();
			weight = 160;
		}
		weightUnited = weight;
		// heightUnited = totalCm;

		addPointToChart('eu', weight, totalCm);
	}

	function countBmiUs() {
		let weight = Number($weightPounds.val());
		const feet = Number($heightFeet.val());
		const inches = Number($heightInches.val());
		const totalinches = (feet * 12) + inches;
		let inchToCm = Number(totalinches / 0.39370);
		// let inchToCm = Number((totalinches / 0.39370).toFixed(2));


		let bmi = (weight / (totalinches * totalinches)) * 703;
		bmi = Math.round(bmi * 10) / 10;
		$showBmi.text(`${bmi} `);
		showCategory(bmi);
		if (inchToCm < 149) {
			showModal();
			inchToCm = 150;
		} else if (inchToCm > 211) {
			showModal();
			inchToCm = 210;
		}
		if (weight < 90) {
			showModal();
			weight = 90;
		} else if (weight > 350) {
			showModal();
			weight = 350;
		}
		weightUnited = weight;
		// heightUnited = inchToCm;

		addPointToChart('us', weight, inchToCm);
	}

	function activateCompletion() {
		window.postAction({
			id: '831d8995-06c7-46f6-b95c-4c2fed94431a',
		});
	}

	$submit.on('click', (e) => {
		e.preventDefault();
		const unit = $units.val();
		if (unit === 'us') {
			countBmiUs();
		} else if (unit === 'eu') {
			countBmiEu();
		}
		console.log('activateCompletion');
		activateCompletion();
	});


	$('.unit-input-us').keydown((e) => {
		const feet = $heightFeet.val();
		const pound = $weightPounds.val();
		if (e.keyCode === 13) {
			if (feet !== '0' && pound !== '0') {
				$submit.click();
			}
		}
	});

	$('.unit-input-eu').keydown((e) => {
		const m = $heightM.val();
		const kg = $weightKg.val();
		if (e.keyCode === 13) {
			if (m !== '0' && kg !== '0') {
				$submit.click();
			}
		}
	});

	$units.on('change', () => {
		const unit = $units.val();
		if (unit === 'us') {
			// const kgToPounds = Math.round((weightUnited / 0.45359237));
			// weightUnited = kgToPounds;
			weightUnited = 0;
			// heightUnited = 0;
			$('#us-height').removeClass('d-none');
			$('#us-weight').removeClass('d-none');
			$('#eu-height').addClass('d-none');
			$('#eu-weight').addClass('d-none');
			$('#myChartUs').removeClass('d-none');
			$('#myChartEu').addClass('d-none');
			addPointToChart('us', 90, 150);
			$showBmi.text('0');
		} else if (unit === 'eu') {
			// const poundsToKg = Math.round(Number((weightUnited * 0.45359237)));
			// weightUnited = poundsToKg;
			weightUnited = 0;
			// heightUnited = 0;
			$('#eu-height').removeClass('d-none');
			$('#eu-weight').removeClass('d-none');
			$('#us-height').addClass('d-none');
			$('#us-weight').addClass('d-none');
			$('#myChartEu').removeClass('d-none');
			$('#myChartUs').addClass('d-none');
			addPointToChart('eu', 40, 150);
			$showBmi.text('0');
		}
		$('input').val('0').prop('disabled', '');
	});

	$('.maxInput').keydown((e) => {
		const maxCount = $(e.target).attr('maxlength');

		if ((e.target.value.length >= Number(maxCount) &&
			window.getSelection().toString() === '' &&
			e.keyCode !== 8 &&
			e.keyCode !== 9) ||
			(e.keyCode !== 8 && e.keyCode !== 9 && Number.isNaN(Number(e.key)))) {
			return false;
		}
		return true;
	});

	$heightM.keydown((e) => {
		if ((e.keyCode === 69 || !e.key.match(/^\d|./g)) && allowedKeys.indexOf(e.keyCode) === -1) {
			return false;
		}
		if (e.key.match(/^\d|^\./g)) {
			if (e.key === '.' && heightMValue.length === 1 && heightMValue.match(/^d/g)) {
				heightMValue += e.key;
			} else if (e.key.match(/^\d/g) && heightMValue.length === 1) {
				return false;
			} else if (e.key === '.' && (heightMValue.match(/\./g) || !heightMValue.length)) {
				return false;
			} else {
				heightMValue += e.key;
			}
		}

		if (e.keyCode === 8) {
			if (window.getSelection().toString() === heightMValue) {
				heightMValue = '';
			} else {
				heightMValue = heightMValue.slice(0, -1);
			}
		}

		if (heightMValue.length > 4 && allowedKeys.indexOf(e.keyCode) === -1) {
			heightMValue = heightMValue.slice(0, -1);
			return false;
		}

		return true;
	});

	$heightM.keyup(() => {
		if (heightMValue.length > 1) {
			$('#heightCm').prop('disabled', 'disabled');
		} else {
			$('#heightCm').prop('disabled', '');
		}
	});

	$('.maxInput').focus((e) => {
		e.target.value = '';
	});

	$('.maxInput').focusout((e) => {
		if (e.target.value === '') {
			e.target.value = '0';
		}
	});

	$heightM.focus((e) => {
		e.target.value = '';
		heightMValue = '';
	});

	$heightM.focusout((e) => {
		if (e.target.value === '') {
			e.target.value = '0';
		}
	});

	$reset.on('click', () => {
		myChartUS.options.animation.duration = 0;

		$('input').val('0');
		heightMValue = '';
		// myChartEU.update();
		// $showBmi.text('0');

		// $submit.click();

		weightUnited = 0;
		// heightUnited = 0;
		const kgToPounds = Math.round((weightUnited / 0.45359237));
		weightUnited = kgToPounds;
		$('#us-height').removeClass('d-none');
		$('#us-weight').removeClass('d-none');
		$('#eu-height').addClass('d-none');
		$('#eu-weight').addClass('d-none');
		$('#myChartUs').removeClass('d-none');
		$('#myChartEu').addClass('d-none');
		addPointToChart('us', 90, 150);
		$showBmi.text('0');

		const poundsToKg = Math.round(Number((weightUnited * 0.45359237)));
		weightUnited = poundsToKg;
		addPointToChart('eu', 40, 150);

		$('#selectUnits').val('us');
		myChartUS.options.animation.duration = 500;
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
	});
});
