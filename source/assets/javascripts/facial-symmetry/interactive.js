$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');
	const $option = $('.option');

	let step = 1;

	let angelinaJolieInput;
	let angelinaJolieIsChecked = false;

	let benAffleckInput;
	let benAffleckIsChecked = false;

	let beyonceKnowlesInput;
	let beyonceKnowlesIsChecked = false;

	let bradPittInput;
	let bradPittIsChecked = false;

	let georgeClooneyInput;
	let georgeClooneyIsChecked = false;

	let johnMayerInput;
	let johnMayerIsChecked = false;

	let kateUptonInput;
	let kateUptonIsChecked = false;

	let lenaDunhamInput;
	let lenaDunhamIsChecked = false;

	let mileyCyrusInput;
	let mileyCyrusIsChecked = false;

	let ryanGoslingInput;
	let ryanGoslingIschecked = false;

	const celebArray = [
		'Angelina Jolie',
		'Ben Affleck',
		'Beyoncé Knowles',
		'Brad Pitt',
		'George Cloony',
		'John Mayer',
		'Kate Upton',
		'Lena Dunham',
		'Miley Cyrus',
		'Ryan Gosling',
	];


	function assignValueToCeleb() {
		if (step === 1) {
			angelinaJolieInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = angelinaJolieInput;
			angelinaJolieIsChecked = true;
		}
		if (step === 2) {
			benAffleckInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = benAffleckInput;
			benAffleckIsChecked = true;
		}
		if (step === 3) {
			beyonceKnowlesInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = beyonceKnowlesInput;
			beyonceKnowlesIsChecked = true;
		}
		if (step === 4) {
			bradPittInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = bradPittInput;
			bradPittIsChecked = true;
		}
		if (step === 5) {
			georgeClooneyInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = georgeClooneyInput;
			georgeClooneyIsChecked = true;
		}
		if (step === 6) {
			johnMayerInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = johnMayerInput;
			johnMayerIsChecked = true;
		}
		if (step === 7) {
			kateUptonInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = kateUptonInput;
			kateUptonIsChecked = true;
		}
		if (step === 8) {
			lenaDunhamInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = lenaDunhamInput;
			lenaDunhamIsChecked = true;
		}
		if (step === 9) {
			mileyCyrusInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = mileyCyrusInput;
			mileyCyrusIsChecked = true;
		}
		if (step === 10) {
			ryanGoslingInput = parseFloat($('input[type=radio]:checked').val());
			document.getElementById('rating').value = ryanGoslingInput;
			ryanGoslingIschecked = true;
		}
	}

	function assignValueToCelebInput(textInput) {
		if (step === 1) {
			angelinaJolieInput = textInput;
			angelinaJolieIsChecked = true;
		}
		if (step === 2) {
			benAffleckInput = textInput;
			benAffleckIsChecked = true;
		}
		if (step === 3) {
			beyonceKnowlesInput = textInput;
			beyonceKnowlesIsChecked = true;
		}
		if (step === 4) {
			bradPittInput = textInput;
			bradPittIsChecked = true;
		}
		if (step === 5) {
			georgeClooneyInput = textInput;
			georgeClooneyIsChecked = true;
		}
		if (step === 6) {
			johnMayerInput = textInput;
			johnMayerIsChecked = true;
		}
		if (step === 7) {
			kateUptonInput = textInput;
			kateUptonIsChecked = true;
		}
		if (step === 8) {
			lenaDunhamInput = textInput;
			lenaDunhamIsChecked = true;
		}
		if (step === 9) {
			mileyCyrusInput = textInput;
			mileyCyrusIsChecked = true;
		}
		if (step === 10) {
			ryanGoslingInput = textInput;
			ryanGoslingIschecked = true;
		}
	}

	function previouslyCheckedRadio() {
		if (step === 1 && angelinaJolieIsChecked) {
			$(`.option${angelinaJolieInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 2 && benAffleckIsChecked) {
			$(`.option${benAffleckInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 3 && beyonceKnowlesIsChecked) {
			$(`.option${beyonceKnowlesInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 4 && bradPittIsChecked) {
			$(`.option${bradPittInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 5 && georgeClooneyIsChecked) {
			$(`.option${georgeClooneyInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 6 && johnMayerIsChecked) {
			$(`.option${johnMayerInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 7 && kateUptonIsChecked) {
			$(`.option${kateUptonInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 8 && lenaDunhamIsChecked) {
			$(`.option${lenaDunhamInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 9 && mileyCyrusIsChecked) {
			$(`.option${mileyCyrusInput}`).addClass('active');
			$next.removeClass('d-none');
		}
		if (step === 10 && ryanGoslingIschecked) {
			$(`.option${ryanGoslingInput}`).addClass('active');
			$next.removeClass('d-none');
		}
	}

	const $submitNext = $('#submitNext');
	function previouslyInputted() {
		if (step === 1 && angelinaJolieIsChecked) {
			document.getElementById('rating').value = angelinaJolieInput;
			$submitNext.removeClass('d-none');
		} else if (step === 2 && benAffleckIsChecked) {
			document.getElementById('rating').value = benAffleckInput;
			$submitNext.removeClass('d-none');
		} else if (step === 3 && beyonceKnowlesIsChecked) {
			document.getElementById('rating').value = beyonceKnowlesInput;
			$submitNext.removeClass('d-none');
		} else if (step === 4 && bradPittIsChecked) {
			document.getElementById('rating').value = bradPittInput;
			$submitNext.removeClass('d-none');
		} else if (step === 5 && georgeClooneyIsChecked) {
			document.getElementById('rating').value = georgeClooneyInput;
			$submitNext.removeClass('d-none');
		} else if (step === 6 && johnMayerIsChecked) {
			document.getElementById('rating').value = johnMayerInput;
			$submitNext.removeClass('d-none');
		} else if (step === 7 && kateUptonIsChecked) {
			document.getElementById('rating').value = kateUptonInput;
			$submitNext.removeClass('d-none');
		} else if (step === 8 && lenaDunhamIsChecked) {
			document.getElementById('rating').value = lenaDunhamInput;
			$submitNext.removeClass('d-none');
		} else if (step === 9 && mileyCyrusIsChecked) {
			document.getElementById('rating').value = mileyCyrusInput;
			$submitNext.removeClass('d-none');
		} else if (step === 10 && ryanGoslingIschecked) {
			document.getElementById('rating').value = ryanGoslingInput;
			$submitNext.removeClass('d-none');
		} else {
			document.getElementById('rating').value = '';
		}
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

	function loadStage() {
		
		$next.addClass('d-none');
		$('label').removeClass('active')
			.removeClass('focus');
		previouslyCheckedRadio();
		previouslyInputted();
		$(`.stage-${step}`).removeClass('d-none')
			.siblings('.stage')
			.addClass('d-none');
		if (step === 1) {
			$previous.addClass('d-none');
		}
		if (step < 11) {
			$('.info-text').removeClass('d-none');
			$('.main-text').removeClass('d-none');
			$('.radio-container').removeClass('d-none');
			$('.stage-12').addClass('d-none');
		}
		if (step === 11) {
			$('.info-text').addClass('d-none');
			$('.main-text').removeClass('d-none');
			$('.radio-container').addClass('d-none');
			$('.stage-12').addClass('d-none');
			$next.removeClass('d-none');
			$submitNext.removeClass('d-none');
		}
		if (step === 12) {
			$submitNext.addClass('d-none');
			const userCelebRatings = {
				1: {
					name: 'angelina-jolie',
					rating: angelinaJolieInput,
				},
				2: {
					name: 'ben-affleck',
					rating: benAffleckInput,
				},
				3: {
					name: 'beyonce-knowles',
					rating: beyonceKnowlesInput,
				},
				4: {
					name: 'brad-pitt',
					rating: bradPittInput,
				},
				5: {
					name: 'george-clooney',
					rating: georgeClooneyInput,
				},
				6: {
					name: 'john-mayer',
					rating: johnMayerInput,
				},
				7: {
					name: 'kate-upton',
					rating: kateUptonInput,
				},
				8: {
					name: 'lena-dunham',
					rating: lenaDunhamInput,
				},
				9: {
					name: 'miley-cyrus',
					rating: mileyCyrusInput,
				},
				10: {
					name: 'ryan-gosling',
					rating: ryanGoslingInput,
				},
			};

			for (let i = 1; i < 11; i += 1) {
				$(`.${userCelebRatings[i].name}-user`).html(`${userCelebRatings[i].rating}.`);
			}

			let celebDataObjects = [{
				x: angelinaJolieInput,
				y: 7.13,
				celebName: 'Angelina Jolie',
			}, {
				x: benAffleckInput,
				y: 6.55,
				celebName: 'Ben Affleck',
			}, {
				x: beyonceKnowlesInput,
				y: 7.28,
				celebName: 'Beyoncé Knowles',
			}, {
				x: bradPittInput,
				y: 9.67,
				celebName: 'Brad Pitt',
			}, {
				x: georgeClooneyInput,
				y: 6.77,
				celebName: 'George Clooney',
			}, {
				x: johnMayerInput,
				y: 6.22,
				celebName: 'John Mayer',
			}, {
				x: kateUptonInput,
				y: 7.46,
				celebName: 'Kate Upton',
			}, {
				x: lenaDunhamInput,
				y: 6.82,
				celebName: 'Lena Dunham',
			}, {
				x: mileyCyrusInput,
				y: 7.36,
				celebName: 'Miley Cyrus',
			}, {
				x: ryanGoslingInput,
				y: 7.31,
				celebName: 'Ryan Gosling',
			}];

			celebDataObjects = celebDataObjects.sort(function(a, b) {
				return a.x - b.x;
			});

			for (let i = 0; i < celebDataObjects.length; i += 1) {
				celebArray[i] = celebDataObjects[i].celebName;
			}

			// assignValueToBar();
			$next.addClass('d-none');
			$('.radio-container').addClass('d-none');
			$('.main-text').addClass('d-none');
			/* eslint-disable */
			let ctx = document.getElementById('myChart').getContext('2d');
			const myChart = new Chart(ctx, {
				// The type of chart we want to create
				type: 'scatter',
				data: {
					labels: celebArray,
					datasets: [{
						// backgroundColor: '#e7165d',
						pointBackgroundColor: ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'black', 'brown', 'pink', 'grey'],
						pointRadius: 5,
						data: celebDataObjects,
					}]
				},
				options: {
					legend: {
            display: false
         	},
					scales: {
						yAxes: [{
							gridLines: {
								display: true,
								drawBorder: true,
								drawOnChartArea: false,
							},
							ticks: {
								min: 5.0,
								max: 10.0,
								// fixedStepSize: 1.0
							},
							scaleLabel: {
								display: true,
								labelString: 'Facial symmetry',
								fontSize: 20,
								fontStyle: 'bold',
								fontColor: '#000',
							}
						}],
						xAxes: [{
							gridLines: {
								display: true,
								drawBorder: true,
								drawOnChartArea: false,
							},
							ticks: {
								min: 0,
								max: 10,
								stepSize: 1
							},
							scaleLabel: {
								display: true,
								labelString: 'Attractiveness rating',
								fontSize: 20,
								fontStyle: 'bold',
								fontColor: '#000',
							}
						}]
					},
					tooltips: {
						callbacks: {
							 label: function(tooltipItem, data) {
									var label = data.labels[tooltipItem.index];
									return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
							 }
						}
				 },
				},
      });
			/* eslint-enable */
			let chartIndex = -1;
			let openTooltip = chartIndex;
			let tooltipFocusOut; // tooltip that was active when the user tabbed out of the canvas
			$('#myChart').keydown((val) => {
				if (val.which === 9) {
					if (chartIndex < celebArray.length) {
						val.preventDefault();
						// do keydown function stuff
						if (val.shiftKey) {
							if (chartIndex < 1) {
								// focus previous element (outside of chart)
								$('.reset button').focus();
							} else {
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
						} else if (chartIndex < (celebArray.length - 1)) {
							// Close current tooltip & revert color
							closeTip(myChart, 0, openTooltip);
							// Open next tooltip & change color
							chartIndex += 1;
							if (tooltipFocusOut === 0) { // jump forward 1 tooltip if tooltip 1 showing
								tooltipFocusOut = -1;
								chartIndex += 1;
							}
							myChart.update();
							openTip(myChart, 0, chartIndex);
							openTooltip = chartIndex;
							// show feedback
							$('.feedback').addClass('d-none');
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
		}
	}

	$next.click(() => {
		step += 1;
		$previous.removeClass('d-none');
		$next.addClass('d-none');
		loadStage();
	});

	// const $submitNext = $('#submitNext');
	// const $mobileForm = $('#mobile-form');
	// const $submit = $('#submit');
	// $mobileForm.submit((e) => {
	// 	e.preventDefault();
	// 	$submit.click();
	// });

	// $submit.click(() => {
	// 	step += 1;
	// 	$previous.removeClass('d-none');
	// 	$next.addClass('d-none');
	// 	loadStage();
	// });

	function formValidate() {
		// if valid
		// step += 1;
		// $previous.removeClass('d-none');
		// $next.addClass('d-none');
		// loadStage();

		// Get the value of the input field with id="rating"
		const x = document.getElementById('rating').value;

		// const x = $('#rating').val();
		// If x is NaN or less than one or greater than 10 or is decimal
		if (Number.isNaN(x) || x < 1 || x > 10 || x % 1 !== 0) {
			$('#incorrect').modal('show');
		} else {
			assignValueToCelebInput(x);
			step += 1;
			$previous.removeClass('d-none');
			$submitNext.addClass('d-none');
			loadStage();
		}
	}

	$submitNext.click(() => {
		// $submit.click();
		// if valid
		// step += 1;
		// $previous.removeClass('d-none');
		// $next.addClass('d-none');
		// loadStage();
		if (step < 11) {
			formValidate();
		} else {
			step += 1;
			$previous.removeClass('d-none');
			loadStage();
		}
	});

	$('#rating').on('input', () => {
		$submitNext.removeClass('d-none');
		// $next.removeClass('d-none');
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
	});

	$previous.click(() => {
		step -= 1;
		$next.removeClass('d-none');
		loadStage();
	});

	$option.click((e) => {
		assignValueToCeleb();
		$(e.target).addClass('active');
		$next.removeClass('d-none');
	});

	$option.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.removeClass('focus')
			.siblings('label')
			.removeClass('active')
			.removeClass('focus');
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});

	$reset.click(() => {
		step = 1;
		$('label').removeClass('active')
			.removeClass('focus');
		$next.addClass('d-none');
		$previous.addClass('d-none');
		$('.main-text').removeClass('d-none');
		$('.radio-container').removeClass('d-none');
		$('.stage-12').addClass('d-none');
		$(`.stage-${step}`).removeClass('d-none')
			.siblings('.stage')
			.addClass('d-none');
		angelinaJolieInput = '';
		angelinaJolieIsChecked = false;
		benAffleckInput = '';
		benAffleckIsChecked = false;
		beyonceKnowlesInput = '';
		beyonceKnowlesIsChecked = false;
		bradPittInput = '';
		bradPittIsChecked = false;
		georgeClooneyInput = '';
		georgeClooneyIsChecked = false;
		johnMayerInput = '';
		johnMayerIsChecked = false;
		kateUptonInput = '';
		kateUptonIsChecked = false;
		lenaDunhamInput = '';
		lenaDunhamIsChecked = false;
		mileyCyrusInput = '';
		mileyCyrusIsChecked = false;
		ryanGoslingInput = '';
		ryanGoslingIschecked = false;
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
