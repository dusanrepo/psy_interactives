$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	const $interactiveNext = $('#interactive-next');
	const $yes = $('#yes');
	const $no = $('#no');
	const $tryAgain = $('.try-again');

	let frame = 0;
	let step = 0;
	let answerChoice;

	let start;

	let userTime;

	let activityComplete = false;

	const testTrial = {
		dog: {
			name: 'dog',
			answer: 'yes',
			img: 'dog',
		},
		cat: {
			name: 'cat',
			answer: 'no',
			img: 'tree',
		},
	};

	const trialHistory = [];

	const trial = {
		// superordinate
		instrument: {
			name: 'musical instrument',
			answer: 'yes',
			img: 'guitar',
			type: 'superordinate',
		},
		fruit: {
			name: 'apple',
			answer: 'yes',
			img: 'apple',
			type: 'superordinate',
		},
		parrot: {
			name: 'parrot',
			answer: 'yes',
			img: 'parrot',
			type: 'superordinate',
		},
		vehicle: {
			name: 'vehicle',
			answer: 'no',
			img: 'jeans',
			type: 'superordinate',
		},
		furniture: {
			name: 'furniture',
			answer: 'no',
			img: 'hacksaw',
			type: 'superordinate',
		},
		clothing: {
			name: 'clothing',
			answer: 'no',
			img: 'fruit pie',
			type: 'superordinate',
		},
		// basic
		hammer: {
			name: 'hammer',
			answer: 'yes',
			img: 'hammer',
			type: 'basic',
		},
		shirt: {
			name: 'shirt',
			answer: 'yes',
			img: 'shirt',
			type: 'basic',
		},
		snake: {
			name: 'snake',
			answer: 'yes',
			img: 'snake',
			type: 'basic',
		},
		piano: {
			name: 'piano',
			answer: 'no',
			img: 'table',
			type: 'basic',
		},
		peach: {
			name: 'peach',
			answer: 'no',
			img: 'bus',
			type: 'basic',
		},
		truck: {
			name: 'truck',
			answer: 'no',
			img: 'flower',
			type: 'basic',
		},
		// subordinate
		lamp: {
			name: 'desk lamp',
			answer: 'yes',
			img: 'lamp',
			type: 'subordinate',
		},
		car: {
			name: 'sports car',
			answer: 'yes',
			img: 'car',
			type: 'subordinate',
		},
		germanShepard: {
			name: 'german shepherd',
			answer: 'yes',
			img: 'german shepherd',
			type: 'subordinate',
		},
		socks: {
			name: 'dress socks',
			answer: 'no',
			img: 'grapes',
			type: 'subordinate',
		},
		screwdriver: {
			name: 'phillips screwdriver',
			answer: 'no',
			img: 'drum',
			type: 'subordinate',
		},
		table: {
			name: 'kitchen table',
			answer: 'no',
			img: 'chair',
			type: 'subordinate',
		},
	};

	let currentQuestionClass;

	// superordinate
	const superordinateYes = [];
	let superordinateYesAvg;
	const superordinateNo = [];
	let superordinateNoAvg;
	let superordinateAvg;

	// basic
	const basicYes = [];
	let basicYesAvg;
	const basicNo = [];
	let basicNoAvg;
	let basicAvg;

	// subordinate
	const subordinateYes = [];
	let subordinateYesAvg;
	const subordinateNo = [];
	let subordinateNoAvg;
	let subordinateAvg;

	// variables to store user times for bar graph
	let superordinateFinal;
	let basicFinal;
	let subordinateFinal;

	let disabledButtons = false;
	function toggleAnswering() {
		// console.log(`toggleAnswering, yes/no disabled? ${!disabledButtons}`);

		$yes.prop('disabled', !disabledButtons);
		$no.prop('disabled', !disabledButtons);
		$interactiveNext.prop('disabled', disabledButtons);
		disabledButtons = !disabledButtons;
		if ($interactiveNext.prop('disabled')) {
			$previous.prop('disabled', true);
		} else {
			$previous.prop('disabled', false);
		}
	}

	function frame1() {
		// console.log('disableAnswering');
		// $yes.prop('disabled', true);
		// $no.prop('disabled', true);
		// $interactiveNext.prop('disabled', false);
		if ($interactiveNext.prop('disabled')) {
			$previous.prop('disabled', true);
		} else {
			$previous.prop('disabled', false);
		}
	}

	function disableButtons() {
		// console.log(`disableButtons() ${disabledButtons}`);

		disabledButtons = true;
		$yes.prop('disabled', disabledButtons);
		$no.prop('disabled', disabledButtons);
		$interactiveNext.prop('disabled', disabledButtons);
		disabledButtons = false;

		if ($interactiveNext.prop('disabled')) {
			$previous.prop('disabled', true);
		} else {
			$previous.prop('disabled', false);
		}
	}

	// Math algorithm: (do this for each of the 3 categories, 6 questions each)

	// Raw averages:
	// Use data only from the 18 test trials, EXCLUDING any trials for which the response was an error
	// For each category, separately average the data from “Yes” and “No” response trials
	// then average these two averages to get the Raw Data for that category.

	// Transformed data:
	// Average these three values to obtain the grand mean
	// this value should then be subtracted from the Raw Data to produce the Transformed Data

	function superordinateCalc() {
		// console.log(`userTime ${userTime} superordinateCalc`);

		// if (trial[currentQuestionClass].type === 'superordinate'
		// && trial[currentQuestionClass].answer === 'yes') {
		if (trial[currentQuestionClass].type === 'superordinate' && answerChoice === 'yes') {
			// console.log(`${userTime} pushed to yes - superordinate`);
			superordinateYes.push(userTime);
			const superordinateTotal = superordinateYes.reduce((a, b) => a + b, 0);
			superordinateYesAvg = superordinateTotal / superordinateYes.length;
		// } else if (trial[currentQuestionClass].type === 'superordinate'
		// && trial[currentQuestionClass].answer === 'no') {
		} else if (trial[currentQuestionClass].type === 'superordinate') {
			// console.log(`${userTime} pushed to no - superordinate` && answerChoice === 'no');
			superordinateNo.push(userTime);
			const superordinateTotal = superordinateNo.reduce((a, b) => a + b, 0);
			superordinateNoAvg = superordinateTotal / superordinateNo.length;
		}

		superordinateAvg = ((superordinateYesAvg || 0) + (superordinateNoAvg || 0)) / 2;
		superordinateAvg = Math.round(superordinateAvg);
	}

	function basicCalc() {
		// console.log(`userTime ${userTime} basicCalc`);
		// if (trial[currentQuestionClass].type === 'basic'
		// && trial[currentQuestionClass].answer === 'yes') {
		if (trial[currentQuestionClass].type === 'basic' && answerChoice === 'yes') {
			// console.log(`${userTime} pushed to yes - basic`);
			basicYes.push(userTime);
			const basicTotal = basicYes.reduce((a, b) => a + b, 0);
			basicYesAvg = basicTotal / basicYes.length;
		// } else if (trial[currentQuestionClass].type === 'basic'
		// && trial[currentQuestionClass].answer === 'no') {
		} else if (trial[currentQuestionClass].type === 'basic' && answerChoice === 'no') {
			// console.log(`${userTime} pushed to no - basic`);
			basicNo.push(userTime);
			const basicTotal = basicNo.reduce((a, b) => a + b, 0);
			basicNoAvg = basicTotal / basicNo.length;
		}
		basicAvg = ((basicYesAvg || 0) + (basicNoAvg || 0)) / 2;
		basicAvg = Math.round(basicAvg);
	}

	function subordinateCalc() {
		// console.log(`userTime ${userTime} subordinateCalc`);
		// if (trial[currentQuestionClass].type === 'subordinate'
		// && trial[currentQuestionClass].answer === 'yes') {
		if (trial[currentQuestionClass].type === 'subordinate' && answerChoice === 'yes') {
			// console.log(`${userTime} pushed to yes - subordinate`);
			subordinateYes.push(userTime);
			const subordinateTotal = subordinateYes.reduce((a, b) => a + b, 0);
			subordinateYesAvg = subordinateTotal / subordinateYes.length;
		// } else if (trial[currentQuestionClass].type === 'subordinate'
		// && trial[currentQuestionClass].answer === 'no') {
		} else if (trial[currentQuestionClass].type === 'subordinate' && answerChoice === 'no') {
			// console.log(`${userTime} pushed to no - subordinate`);
			subordinateNo.push(userTime);
			const subordinateTotal = subordinateNo.reduce((a, b) => a + b, 0);
			subordinateNoAvg = subordinateTotal / subordinateNo.length;
		}
		subordinateAvg = ((subordinateYesAvg || 0) + (subordinateNoAvg || 0)) / 2;
		subordinateAvg = Math.round(subordinateAvg);
	}

	// // Calculation for each trial type
	function timeCalc() {
		let userAvg = (superordinateAvg + basicAvg + subordinateAvg) / 3;
		userAvg = Math.round(userAvg);
		console.log(`grandMean ${userAvg}`);

		superordinateFinal = superordinateAvg - userAvg;
		console.log(`superordinateAvg - grandMean, ${superordinateAvg} -  ${userAvg} = ${superordinateAvg - userAvg}`);
		superordinateFinal /= 100;

		basicFinal = basicAvg - userAvg;
		console.log(`basicAvg - grandMean, ${basicAvg} -  ${userAvg} = ${basicAvg - userAvg}`);
		basicFinal /= 100;

		subordinateFinal = subordinateAvg - userAvg;
		console.log(`subordinateAvg - grandMean, ${subordinateAvg} -  ${userAvg} = ${subordinateAvg - userAvg}`);
		subordinateFinal /= 100;
	}

	function setFrame() {
		// console.log('setFrame');
		// console.log(`setFrame ${frame}`);

		$('.btn-row').addClass('d-none');
		$('.frame').addClass('d-none');
		$(`.frame-${frame}`).removeClass('d-none');
		if (!activityComplete) {
			// console.log('CLEARING FEEDBACK');
			$('.feedback').html('');
		}
		$('.trial-feedback').addClass('d-none');
		$next.removeClass('d-none');
		$previous.addClass('d-none');
		// if (frame === 2) {
		// 	$('.btn-row').removeClass('d-none');
		// }
		if (frame > 0) {
			$next.addClass('d-none');

			$previous.removeClass('d-none');
		}

		if (frame === 0) {
			$('.instruction-text').removeClass('d-none');
			$next.removeClass('d-none');
			disableButtons();
		}

		if (frame !== 1) {
			$('.trial').addClass('d-none');
		}

		if (frame === 2) {
			$previous.prop('disabled', false);
		}

		if (activityComplete) {
			$next.removeClass('d-none');
			$previous.removeClass('d-none');
			$previous.prop('disabled', false);
		}

		if (activityComplete && frame === 1) {
			$('.trial').removeClass('d-none');
			$('.trial-feedback').removeClass('d-none');
		}

		if (activityComplete && frame === 0) {
			$next.removeClass('d-none');
			$previous.addClass('d-none');
		}
	}

	let myChart;
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
	/* eslint-enable */

	function setStage() {
		console.log(`frame ${frame}`);

		$('.frame').addClass('d-none');
		$(`.frame-${frame}`).removeClass('d-none');

		$('.btn-row').addClass('d-none');
		if (!activityComplete) {
			$('.feedback').html('');
		}
		$('.trial-feedback').addClass('d-none');
		$next.removeClass('d-none');
		$previous.addClass('d-none');
		if (frame === 1) {
			$('.btn-row').removeClass('d-none');
			if (activityComplete === false) {
				$next.addClass('d-none');
				frame1();
			} else if (activityComplete) {
				setFrame();
			}

			$previous.removeClass('d-none');

			if (step === 20) {
				toggleAnswering();
				step += 1;
			}
		} else if (frame === 2) {
			$previous.prop('disabled', false);
			activityComplete = true;


			timeCalc();

			$('span.superordinate-sr').html(`${superordinateFinal} `);
			$('span.basic-sr').html(`${basicFinal} `);
			$('span.subordinate-sr').html(`${subordinateFinal} `);

			$('.btn-row').addClass('d-none');
			// $next.addClass('d-none');

			$previous.removeClass('d-none');

			/* eslint-disable */
			let barChartData = {
				labels: ['Superordinate', 'Basic', 'Subordinate'],
				datasets: [
					{
						label: 'Your data',
						backgroundColor: '#4caf50',
						data: [superordinateFinal, basicFinal, subordinateFinal]
					}, {
					label: 'Rosch data',
					backgroundColor: '#0e3c64',
					data: [.05, -.50, .45],
				},
			]
			}
			console.log('data: [superordinateFinal, basicFinal, subordinateFinal]');
			console.log(superordinateFinal, basicFinal, subordinateFinal);

			const ctx = document.getElementById('myChart').getContext('2d');
			myChart = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					legend: {
						position: 'bottom',
					},
					scales: {
						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: 'Response latency (seconds)'
							}
						}]
					},
				}
			});

			// const originalBg = ['#66CCCC', '#E8005B', '#E8E014', '#66CCCC', '#E8005B', '#E8E014'];
			// blue 1 #66CCCC #4DB3B3
			// red 2 #E8005B #CF0042
			// yellow 3 #E8E014 #CFC700
			// const modifiedBg = ['#4DB3B3', '#CF0042', '#CFC700', '#4DB3B3', '#CF0042', '#CFC700'];

			// const myChart = new Chart(ctx, {
			// 	type: 'bar',
			// 	data: {
			// 		labels: [
			// 			['You', 'Superordinate'],
			// 			['You', 'Basic'],
			// 			['You', 'Ordinate'],
			// 			['Rosch', 'Superordinate'],
			// 			['Rosch', 'Basic'],
			// 			['Rosch', 'Ordinate']
			// 		],
			// 		datasets: [{
			// 			data: [
			// 				superordinateFinal,
			// 				basicFinal,
			// 				subordinateFinal,
			// 				.05,
			// 				-.50,
			// 				.45
			// 			],
			// 			backgroundColor: originalBg
			// 			// [
			// 				// 	'#66CCCC',
			// 				// 	'#E8005B',
			// 				// 	'#E8E014',
			// 				// 	'#C8E014',
			// 				// ]
			// 			}]
			// 		},
			// 		options: {
			// 			responsive: true,
			// 			onClick(evt, activeElements) {
			// 				const elementIndex = activeElements[0]._index;
			// 				const dSets = this.data.datasets[0];
			// 				dSets.backgroundColor[0] = originalBg[0];
			// 				dSets.backgroundColor[1] = originalBg[1];
			// 				dSets.backgroundColor[2] = originalBg[2];
			// 				dSets.backgroundColor[3] = originalBg[3];
			// 				dSets.backgroundColor[4] = originalBg[4];
			// 				dSets.backgroundColor[5] = originalBg[5];
			// 				dSets.backgroundColor[elementIndex] = modifiedBg[elementIndex];
			// 				this.update();
			// 			},
			// 			legend: {
			// 				display: false
			// 			},
			// 			scales: {
			// 				xAxes: [{
			// 					ticks: {
			// 						autoSkip: false,
			// 						maxRotation: 0,
			// 						minRotation: 0,
			// 					}
			// 				}],
			// 				yAxes: [{
			// 					ticks: {
			// 						beginAtZero: true
			// 					},
			// 					scaleLabel: {
			// 						display: true,
			// 						labelString: 'Response Latency (seconds)'
			// 					}
			// 				}]
			// 			}
			// 		}
			// 	});
			/* eslint-enable */
		} else if (frame === 3) {
			$previous.prop('disabled', false);
			$previous.removeClass('d-none');

			$next.addClass('d-none');
		}
	}

	let chartIndex = -1;
	let openTooltip = chartIndex;
	// let tooltipFocusOut; // tooltip that was active when the user tabbed out of the canvas
	let userOrRosch = 1;
	$('#myChart').keydown((val) => {
		if (val.which === 9) {
			if (chartIndex <= 3) {
				val.preventDefault();
				// do keydown function stuff
				if (val.shiftKey) {
					// console.log('BACKWARDS');

					if (chartIndex < 1 && userOrRosch === 0) {
						// console.log('FOCUS RESET');

						// focus previous element (outside of chart)
						$reset.focus();
					} else {
						if (chartIndex === 3) {
							chartIndex = 2;
						}
						// Close current tooltip & revert color
						// console.log('closing');
						// console.log(`userOrRosch ${userOrRosch}`);
						// console.log(`chartIndex ${chartIndex}`);
						closeTip(myChart, userOrRosch, openTooltip);
						if (userOrRosch === 0) {
							userOrRosch = 1;
							chartIndex -= 1;
						} else {
							userOrRosch = 0;
						}
						// myChart.data.datasets[0].backgroundColor[openTooltip] = originalBg[openTooltip];

						// Open previous tooltip & change color
						// myChart.data.datasets[0].backgroundColor[chartIndex] = modifiedBg[chartIndex];
						myChart.update();
						// console.log('opening');
						// console.log(`userOrRosch ${userOrRosch}`);
						// console.log(`chartIndex ${chartIndex}`);
						openTip(myChart, userOrRosch, chartIndex);
						openTooltip = chartIndex;

						// show feedback
						// $('.feedback').addClass('d-none');
						// $(`.${myChart.data.datasets[0].classes[chartIndex]}.feedback`).removeClass('d-none');
					}
				} else if (chartIndex <= 2) {
					console.log('FORWARD');

					// Close current tooltip & revert color
					closeTip(myChart, userOrRosch, openTooltip);
					if (userOrRosch === 0) {
						userOrRosch = 1;
					} else {
						userOrRosch = 0;
						if (chartIndex < 2) {
							chartIndex += 1;
						}
					}
					// myChart.data.datasets[0].backgroundColor[openTooltip] = originalBg[openTooltip];
					// Open next tooltip & change color
					// if (tooltipFocusOut === 0) { // jump forward 1 tooltip if tooltip 1 was already showing
					// 	tooltipFocusOut = -1;
					// 	chartIndex += 1;
					// }
					// myChart.data.datasets[0].backgroundColor[chartIndex] = modifiedBg[chartIndex];
					myChart.update();
					// console.log('opening');
					// console.log(`userOrRosch ${userOrRosch}`);
					// console.log(`chartIndex ${chartIndex}`);

					openTip(myChart, userOrRosch, chartIndex);
					openTooltip = chartIndex;
					// show feedback
					// $('.feedback').addClass('d-none');
					// $(`.${myChart.data.datasets[0].classes[chartIndex]}.feedback`).removeClass('d-none');

					if ((userOrRosch === 1) && (chartIndex === 2)) {
						chartIndex = 3;
					}
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
		// if (chartIndex !== -1) {
		// 	tooltipFocusOut = chartIndex;
		// }
		if (chartIndex === 3) {
			chartIndex = 2;
			// $previous.focus();
		}
		closeTip(myChart, userOrRosch, chartIndex);
		chartIndex = -1;
		userOrRosch = 1;
	});

	function loadTestFeedback() { // create and load feedback according to user entry
		$('.trial-feedback').removeClass('d-none');

		if (answerChoice === testTrial[currentQuestionClass].answer) { // selection is correct
			$('.trial-feedback').html(`
				<p class="feedback alert alert-success">
					Great! The category was “${testTrial[currentQuestionClass].name},” 
					and the picture showed a ${testTrial[currentQuestionClass].img}, 
					so “${testTrial[currentQuestionClass].answer}” was the correct response. 
					Select "Next" or press "1" or "0" when you are ready to start the next trial.
				</p>
			`); // show correct feedback
		} else {
			$('.trial-feedback').html(`
				<p class="feedback alert alert-danger">
					Whoops. The category was “${testTrial[currentQuestionClass].name},” 
					and the picture showed a ${testTrial[currentQuestionClass].img}, 
					so “${testTrial[currentQuestionClass].answer}” was the correct response. 
					Select "Next" or press "1" or "0" when you are ready to start the next trial.
				</p>
			`); // show incorrect feedback
		}
	}

	function loadFeedback() {
		$('.trial-feedback').removeClass('d-none');
		if (answerChoice === trial[currentQuestionClass].answer) { // selection is correct
			$('.trial-feedback').html(`
				<p class="feedback alert alert-success">
					<strong>Correct!</strong>
				</p>
			`); // show correct feedback
		} else {
			$('.trial-feedback').html(`
				<p class="feedback alert alert-danger">
					<strong>Incorrect.</strong>
				</p>
			`); // show incorrect feedback
		}
	}


	let notSlow = false;
	let intervalVar;

	function checkIfAnswerd() {
		console.log('checking');

		if ((step === 1 || step === 2) && ((Date.now() - start) > 5000)) {
			clearInterval(intervalVar);
			notSlow = false;
			$('.modal').modal('show'); // - show modal
		} else if (step >= 3 && ((Date.now() - start) > 2000)) {
			clearInterval(intervalVar);
			notSlow = false;
			$('.modal').modal('show'); // - show modal
		} else if (notSlow) {
			clearInterval(intervalVar);
			notSlow = false;
		} else {
			// - nothing
		}
	}

	function createTestTrial() { // create the test trial based on the randomly generated class
		$previous.removeClass('d-none');
		$('.trial').removeClass('d-none');
		const imgClass = (testTrial[currentQuestionClass].img).replace(/\s+/g, '-');
		console.log(`.trial-image-${imgClass}`);

		setTimeout(() => {
			$('.trial-text').removeClass('d-none');
			setTimeout(() => {
				start = Date.now(); // start time
				intervalVar = setInterval(checkIfAnswerd, 20);
				$(`.trial-image-${imgClass}`).removeClass('d-none');
				toggleAnswering();
			}, 500);
		}, 500);
		let str = testTrial[currentQuestionClass].name;
		str = str.toLowerCase().replace(/\b[a-z]/g, letter => letter.toUpperCase());
		$('.trial-text').html(`<strong>${str}</strong>`);
	}

	function createTrial() { // create the trial based on the randomly generated class
		$previous.removeClass('d-none');
		$('.trial').removeClass('d-none');
		const imgClass = (trial[currentQuestionClass].img).replace(/\s+/g, '-');
		console.log(`.trial-image-${imgClass}`);
		setTimeout(() => {
			$('.trial-text').removeClass('d-none');
			setTimeout(() => {
				start = Date.now(); // start time
				intervalVar = setInterval(checkIfAnswerd, 20);
				$(`.trial-image-${imgClass}`).removeClass('d-none');
				toggleAnswering();
			}, 500);
		}, 500);
		let str = trial[currentQuestionClass].name;
		str = str.replace(/^\w/, letter => letter.toUpperCase());
		$('.trial-text').html(`<strong>${str}</strong>`);
	}

	// randomly load trial
	function loadTrial() {
		if (step < 3) {
			// generate new question
			const randomKey = Math.round(Math.random()); // pick a number 0-1
			const classKey = Object.keys(testTrial)[randomKey]; // pick a class with the num
			if (trialHistory.indexOf(classKey) === -1) { // result is -1 if not duplicate
				currentQuestionClass = classKey; // track current question

				trialHistory.push(classKey); // save question to history
				$('.feedback').addClass('d-none');
				$('.trial-image').addClass('d-none');
				$('.trial-text').addClass('d-none');
				createTestTrial();
			} else {
			// if !== -1 then generate another question
				loadTrial();
			}
		} else if (step >= 3 && step <= 20) {
			const randomKey = Math.floor(Math.random() * 18); // pick a number 0-17
			const classKey = Object.keys(trial)[randomKey]; // pick a class with the num
			if (trialHistory.indexOf(classKey) === -1) { // result is -1 if not duplicate
				currentQuestionClass = classKey; // track current question

				trialHistory.push(classKey); // save question to history
				$('.feedback').addClass('d-none');
				$('.trial-image').addClass('d-none');
				$('.trial-text').addClass('d-none');
				createTrial();
			} else {
			// if !== -1 then generate another question
				loadTrial();
			}
		}
	}

	function startTrial() {
		disableButtons();
		loadTrial();

		// $('.trial-text').removeClass('d-none');
		// $('.trial-image').removeClass('d-none');
		disabledButtons = true;
	}

	$interactiveNext.click((e) => {
		e.stopPropagation();
		e.preventDefault();
		clearInterval(intervalVar);

		if (step <= 20) {
			step += 1;
			startTrial();
			notSlow = false;
			$('.intro-frame').addClass('d-none');
			$('.instruction-text').addClass('d-none');
		}
		if (step === 20 && activityComplete) {
			$next.removeClass('d-none');
		}
	});

	function handleDataStorage() {
		if (step > 2 && trial[currentQuestionClass].type === 'superordinate') {
			console.log(`type: ${trial[currentQuestionClass].type}`);

			superordinateCalc();
			console.log('superordinateYes');
			console.log(superordinateYes);
			console.log('superordinateNo');
			console.log(superordinateNo);
		} else if (step > 2 && trial[currentQuestionClass].type === 'subordinate') {
			console.log(`type: ${trial[currentQuestionClass].type}`);

			subordinateCalc();
			console.log('subordinateYes');
			console.log(subordinateYes);
			console.log('subordinateNo');
			console.log(subordinateNo);
		} else if (step > 2 && trial[currentQuestionClass].type === 'basic') {
			console.log(`type: ${trial[currentQuestionClass].type}`);

			basicCalc();
			console.log('basicYes');
			console.log(basicYes);
			console.log('basicNo');
			console.log(basicNo);
		}
	}

	let endTime;
	$yes.click((e) => {
		console.log('yes click');

		e.stopPropagation();
		e.preventDefault();

		if (step === 20) {
			endTime = Date.now();
			userTime = endTime - start; // how long it took the user to answer
			answerChoice = $(e.target).attr('id');
			handleDataStorage();
			loadFeedback();
			step += 1;
			$next.removeClass('d-none');
			disableButtons();
			clearInterval(intervalVar);
			activityComplete = true;
		} else {
			notSlow = true;

			endTime = Date.now();
			userTime = endTime - start; // how long it took the user to answer

			toggleAnswering();
			answerChoice = $(e.target).attr('id');
			handleDataStorage();
			if (step < 3) {
				loadTestFeedback();
			} else if (step >= 3) {
				loadFeedback();
			}
		}
	});

	$no.click((e) => {
		e.stopPropagation();
		e.preventDefault();

		if (step === 20) {
			endTime = Date.now();
			userTime = endTime - start; // how long it took the user to answer
			answerChoice = $(e.target).attr('id');
			handleDataStorage();
			loadFeedback();
			step += 1;
			$next.removeClass('d-none');
			disableButtons();
			clearInterval(intervalVar);
			activityComplete = true;
		} else {
			notSlow = true;
			endTime = Date.now();
			userTime = endTime - start; // how long it took the user to answer
			toggleAnswering();
			answerChoice = $(e.target).attr('id');
			handleDataStorage();
			if (step < 3) {
				loadTestFeedback();
			} else if (step >= 3) {
				loadFeedback();
			}
		}
	});

	$next.click(() => {
		frame += 1;
		if (frame === 0) {
			// start trial
		}

		if (step <= 20) {
			step += 1;

			startTrial();
			notSlow = false;
			$('.intro-frame').addClass('d-none');
			$('.instruction-text').addClass('d-none');
		}

		if (step === 20 && activityComplete) {
			$next.removeClass('d-none');
		}
		setStage();
	});

	$previous.click(() => {
		frame -= 1;
		setFrame();
		if (frame > 0 && activityComplete) {
			$next.removeClass('d-none');
		}
	});

	$tryAgain.click(() => {
		$('.modal').modal('hide');
	});

	$reset.click(() => {
		window.location.reload();
	});

	disableButtons();

	let modalOpen = false;
	$(document).keydown((val) => {
		// J === 74/yes
		// F === 70/no
		// Space === 32/continue

		// 48 === 0 (no) (replace 70, F)
		// 49 === 1 (yes) (replace 74, J)
		console.log('keypress');

		if (
			// ((val.which === 48 || val.which === 49) && !modalOpen && step === 20)
			// ||
			// ((val.which === 48 || val.which === 49) && frame === 0)
			// ||
			((val.which === 48 || val.which === 49) && !$next.prop('disabled') && $('.next:visible').length && !modalOpen)
		) {
			console.log('next frame');
			$next.click();
		} else if ((val.which === 48 || val.which === 49) && !$interactiveNext.prop('disabled') && $('#interactive-next:visible').length && !modalOpen) {
			$interactiveNext.click();
		} else if ((val.which === 48 || val.which === 49) && modalOpen) {
			$('.try-again').click();
		}

		if (val.which === 48 && !$no.prop('disabled')) {
			$no.click();
		}
		if (val.which === 49 && !$yes.prop('disabled')) {
			$yes.click();
		}
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	$('.modal').on('shown.bs.modal', () => {
		clearInterval(intervalVar);
		notSlow = false;
		modalOpen = true;

		if (step < 3) {
			// click incorrect option
			if (testTrial[currentQuestionClass].answer === 'yes') {
				$no.click();
			} else {
				$yes.click();
			}
		} else if (step >= 3) {
			// click incorrect option
			if (trial[currentQuestionClass].answer === 'yes') {
				$no.click();
			} else {
				$yes.click();
			}
		}

		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
		modalOpen = false;
	});
});
