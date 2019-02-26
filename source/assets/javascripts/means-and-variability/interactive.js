$(document).ready(() => {
	const $previous = $('.previous');
	const $next = $('.next');
	const $reset = $('.reset');

	const $resizable = $('.bar-container .bar');
	const $bar = $('.bar');
	const $yAxis = $('.y-axis').outerHeight();

	let currentBar;
	let currentStep = 0;
	let resizeComplete = false;

	$('#bar-0').attr('value', '1').attr('points', '0');
	$('#bar-1').attr('value', '1').attr('points', '1');
	$('#bar-2').attr('value', '1').attr('points', '2');
	$('#bar-3').attr('value', '3').attr('points', '3');
	$('#bar-4').attr('value', '5').attr('points', '4');
	$('#bar-5').attr('value', '3').attr('points', '5');
	$('#bar-6').attr('value', '2').attr('points', '6');
	$('#bar-7').attr('value', '1').attr('points', '7');
	$('#bar-8').attr('value', '0').attr('points', '8');
	$('#bar-9').attr('value', '1').attr('points', '9');

	let bar0Height;
	let bar1Height;
	let bar2Height;
	let bar3Height;
	let bar4Height;
	let bar5Height;
	let bar6Height;
	let bar7Height;
	let bar8Height;
	let bar9Height;

	function getDataBits() {
		const data = [];
		let numberOfBars = 0;
		$('.bar').each(() => {
			numberOfBars += 1;
		});

		for (let i = 0; i < numberOfBars; i += 1) {
			const numberOfPeople = $(`#bar-${i}`).attr('value');
			for (let i2 = 0; i2 < numberOfPeople; i2 += 1) {
				const pointsNum = Number($(`#bar-${i}`).attr('points'));
				data.push(pointsNum);
			}
		}
		return data;
	}

	function average(data) {
		const sum = data.reduce((sum2, value) => sum2 + value, 0);
		const avg = sum / data.length;
		$('.calc-mean').html(avg.toFixed(1));
	}

	function standardDeviation(values) {
		const average2 = data => data.reduce((sum, value) => sum + value, 0) / data.length;

		const avg = average2(values);
		const diffs = values.map(value => value - avg);
		const squareDiffs = diffs.map(diff => diff * diff);
		const avgSquareDiff = average2(squareDiffs);
		const stdDev = Math.sqrt(avgSquareDiff);
		$('.calc-mode').html(stdDev.toFixed(1));
	}

	let bar4Complete = false;
	// let bar4WasComplete = false;

	let bar1Complete = false;
	let bar1WasComplete = false;

	let bar9Complete = false;
	let bar9WasComplete = false;

	let minHeightControl = $(`#${currentBar}`).outerHeight();
	const minWidthControl = $resizable.outerWidth();

	function disableResizable() {
		$resizable.resizable('disable');
	}

	function hoverState() {
		if (currentStep === 1) {
			$('#bar-4').removeClass('hoverable');
			$('#bar-1').addClass('hoverable');
		}
		if (currentStep === 2) {
			$('#bar-4').removeClass('hoverable');
			$('#bar-1').removeClass('hoverable');
			$('#bar-9').addClass('hoverable');
		}
		if (currentStep === 3) {
			$bar.addClass('hoverable');
		}
	}
	hoverState();

	function enableResizable() {
		$resizable.resizable('enable');
		$resizable.resizable('option', 'minHeight', 5);
		$resizable.css('min-height', 40);
		$resizable.resizable('option', 'maxHeight', 440);
		hoverState();
	}

	function resizableComplete() {
		if (resizeComplete) {
			$next.addClass('d-none');
			enableResizable();
		}
	}

	$resizable.resizable({
		minHeight: 5,
		maxHeight: 440,
		handles: 'n',
		distance: 20,
		animateEasing: 'easeOutBounce',
		grid: [minWidthControl, $yAxis],
		disabled: true,
		enabled: false,

		resize: (event, ui) => {
			$bar.removeClass('active');
			$(ui.element).addClass('active');
			currentBar = $(ui.element).attr('id');
			$(`#${currentBar}`).focus();
			minHeightControl = Math.round(ui.size.height / 40) * 40;
			$(`#${currentBar}`).attr('value', Math.round((minHeightControl / $yAxis)) - 1);
			$(`#${currentBar}`).css('height', `${minHeightControl - 4}px`);
			// const data = getDataBits();
			// average(data);
			// standardDeviation(data);
			bar0Height = $('#bar-0').outerHeight();
			bar1Height = $('#bar-1').outerHeight();
			bar2Height = $('#bar-2').outerHeight();
			bar3Height = $('#bar-3').outerHeight();
			bar4Height = $('#bar-4').outerHeight();
			bar5Height = $('#bar-5').outerHeight();
			bar6Height = $('#bar-6').outerHeight();
			bar7Height = $('#bar-7').outerHeight();
			bar8Height = $('#bar-8').outerHeight();
			bar9Height = $('#bar-9').outerHeight();
		},

		stop: () => {
			const data = getDataBits();
			average(data);
			standardDeviation(data);
		},
	});

	$('#bar-9').resizable({
		originalHeight: 40,
		// minHeight: 80,
		maxHeight: 120,
		handles: 'n',
		distance: 20,
		animateEasing: 'easeOutBounce',
		grid: [minWidthControl, $yAxis],
		disabled: true,
		enabled: false,

		resize: (event, ui) => {
			$bar.removeClass('active');
			$(ui.element).addClass('active');
			currentBar = $(ui.element).attr('id');
			$(`#${currentBar}`).focus();
			bar9Height = $('#bar-9').outerHeight();
			if (currentStep === 2 && bar9Complete === false && $('#bar-9').outerHeight() > 76) {
				// currentStep += 1;
				currentBar = $(ui.element).attr('id');
				$(`#${currentBar}`).data('show-text', true);
				$('#bar-9').css('min-height', '116px');
				$('#bar-9').css('max-height', '116px');
				bar9Complete = true;
			}
			if (currentStep > 2) {
				$('#bar-9').css('min-height', '');
			}
			const barHeight = Math.round($('#bar-9').outerHeight() / 40) * 40;
			// const data = [];
			currentBar = $(ui.element).attr('id');
			$(`#${currentBar}`).attr('value', Math.round((barHeight / $yAxis)) - 1);
			$(`#${currentBar}`).css('height', `${barHeight - 4}px`);
			// const data = getDataBits();
			// average(data);
			// standardDeviation(data);
		},

		stop: (event, ui) => {
			currentBar = $(ui.element).attr('id');

			if (currentStep === 2 && bar9Complete) {
				currentStep = 3;
			}
			if (currentStep === 3 && $(`#${currentBar}`).data('show-text')) {
				$('.nine-text').removeClass('d-none')
					.siblings('.main-text')
					.addClass('d-none');
				$previous.removeClass('d-none');
				$next.removeClass('d-none');
				resizeComplete = true;
				// bar9Complete = true;
				bar9WasComplete = true;
				$(`#${currentBar}`).data('show-text', false);

				$('#bar-9').css('max-height', '');
			}
			const data = getDataBits();
			average(data);
			standardDeviation(data);
			resizableComplete();
		},
	});

	function bar9() {
		$('#bar-9').resizable('enable');
		hoverState();
	}

	$('#bar-1').resizable({
		originalHeight: 40,
		// minHeight: 80,
		maxHeight: 120,
		handles: 'n',
		distance: 20,
		animateEasing: 'easeOutBounce',
		grid: [minWidthControl, $yAxis],
		disabled: true,
		enabled: false,

		resize: (event, ui) => {
			bar1Height = $('#bar-1').outerHeight();
			$bar.removeClass('active');
			$(ui.element).addClass('active');
			currentBar = $(ui.element).attr('id');
			$(`#${currentBar}`).focus();
			const barHeight = Math.round($('#bar-1').outerHeight() / 40) * 40;
			if (currentStep === 1 && bar1Complete === false && $('#bar-1').outerHeight() > 76) {
				currentStep += 1;
				currentBar = $(ui.element).attr('id');
				$(`#${currentBar}`).data('show-text', true);
				$('#bar-1').css('min-height', '116px');
				$('#bar-1').css('max-height', '116px');
			}
			if (currentStep > 2) {
				$('#bar-1').css('min-height', '');
			}

			$(`#${currentBar}`).attr('value', Math.round((barHeight / $yAxis)) - 1);
			$(`#${currentBar}`).css('height', `${barHeight - 4}px`);

			// const data = getDataBits();
			// average(data);
			// standardDeviation(data);
		},

		stop: () => {
			if (currentStep === 2 && $(`#${currentBar}`).data('show-text')) {
				$('.one-text').removeClass('d-none')
					.siblings('.main-text')
					.addClass('d-none');
				$previous.removeClass('d-none');
				bar1Complete = true;
				bar1WasComplete = true;
				$(`#${currentBar}`).data('show-text', false);
				$('#bar-1').css('max-height', '');
			}

			if (bar9WasComplete === false) {
				$next.addClass('d-none');
			}
			const data = getDataBits();
			average(data);
			standardDeviation(data);
			bar9();
		},
	});

	function bar1() {
		$('#bar-1').resizable('enable');
		hoverState();
	}

	$('#bar-4').resizable({
		originalHeight: 200,
		// minHeight: 240,
		maxHeight: 280,
		handles: 'n',
		distance: 20,
		animateEasing: 'easeOutBounce',
		grid: [minWidthControl, $yAxis],
		disabled: true,
		enabled: false,

		resize: (event, ui) => {
			bar4Height = $('#bar-4').outerHeight();
			$bar.removeClass('active');
			$(ui.element).addClass('active');
			currentBar = $(ui.element).attr('id');
			$(`#${currentBar}`).focus();
			if (currentStep === 0 && bar4Complete === false && $('#bar-4').outerHeight() > 236) {
				currentStep += 1;
				currentBar = $(ui.element).attr('id');
				$(`#${currentBar}`).data('show-text', true);
				$('#bar-4').css('min-height', '276px');
			}
			if (currentStep > 2) {
				$('#bar-4').css('min-height', '');
			}
			const barHeight = Math.round($('#bar-4').outerHeight() / 40) * 40;
			$(`#${currentBar}`).attr('value', Math.round((barHeight / $yAxis)) - 1);
			$(`#${currentBar}`).css('height', `${barHeight - 4}px`);
			// const data = getDataBits();
			// average(data);
			// standardDeviation(data);
		},

		stop: () => {
			if (currentStep === 1 && $(`#${currentBar}`).data('show-text')) {
				$('.four-text').removeClass('d-none')
					.siblings('.main-text')
					.addClass('d-none');
				$previous.removeClass('d-none');
				bar4Complete = true;
				// bar4WasComplete = true;
				$(`#${currentBar}`).data('show-text', false);
			}

			if (bar1WasComplete === false) {
				$next.addClass('d-none');
			}
			const data = getDataBits();
			average(data);
			standardDeviation(data);
			bar1();
		},
	});

	function bar4() {
		$('#bar-4').resizable('enable');
	}

	bar4();

	function showText() {
		if (currentStep === 3) {
			$('.nine-text').removeClass('d-none')
				.siblings('.main-text')
				.addClass('d-none');
		} else if (currentStep === 2) {
			$('.one-text').removeClass('d-none')
				.siblings('.main-text')
				.addClass('d-none');
		} else if (currentStep === 1) {
			$('.four-text').removeClass('d-none')
				.siblings('.main-text')
				.addClass('d-none');
		} else if (currentStep === 0) {
			$('.start-text').removeClass('d-none')
				.siblings('.main-text')
				.addClass('d-none');
		}
	}

	function isComplete() {
		disableResizable();
		if (resizeComplete) {
			enableResizable();
		} else if (currentStep === 0 && bar4Complete === false) {
			bar4();
		} else if (currentStep === 1 && bar1Complete === false) {
			bar1();
		} else if (currentStep === 2 && bar9Complete === false) {
			bar9();
		}
	}

	function originalBarSize() {
		// $('#bar-0').css('min-height', 76);
		$('#bar-0').css('height', 76);
		// $('#bar-1').css('min-height', 116);
		$('#bar-1').css('height', 116);
		// $('#bar-2').css('min-height', 76);
		$('#bar-2').css('height', 76);
		// $('#bar-3').css('min-height', 154);
		$('#bar-3').css('height', 154);
		// $('#bar-4').css('min-height', 276);
		$('#bar-4').css('height', 276);
		// $('#bar-5').css('min-height', 154);
		$('#bar-5').css('height', 154);
		// $('#bar-6').css('min-height', 114);
		$('#bar-6').css('height', 114);
		// $('#bar-7').css('min-height', 76);
		$('#bar-7').css('height', 76);
		// $('#bar-8').css('min-height', 40);
		$('#bar-8').css('height', 40);
		// $('#bar-9').css('min-height', 116);
		$('#bar-9').css('height', 116);
	}

	$previous.click(() => {
		currentStep -= 1;
		originalBarSize();
		$bar.removeClass('hoverable');
		disableResizable();
		if (currentStep === 0) {
			$previous.addClass('d-none');
			$('#bar-4').css('min-height', 236);
			$('#bar-4').css('height', 236);
			$('#bar-4').css('max-height', 276);
			$('#bar-1').css('min-height', 76);
			$('#bar-1').css('height', 76);
			$('#bar-9').css('min-height', 76);
			$('#bar-9').css('height', 76);
			$('.calc-mean').html('4.2');
			$('.calc-mode').html('2.1');

			$('#bar-4').addClass('hoverable');
			bar4Complete = false;
			bar4();
		} else {
			$('#bar-4').css('max-height', '');
		}

		if (currentStep === 1) {
			$('#bar-1').css('min-height', 76);
			$('#bar-1').css('height', 76);
			$('#bar-1').css('max-height', 116);
			$('#bar-4').css('min-height', 276);
			$('#bar-4').css('height', 276);
			$('#bar-9').css('min-height', 76);
			$('#bar-9').css('height', 76);
			$('.calc-mean').html('4.2');
			$('.calc-mode').html('2.0');

			$('#bar-1').addClass('hoverable');
			bar1Complete = false;
			bar1();
		}

		if (currentStep === 2) {
			$('#bar-9').css('min-height', 76);
			$('#bar-9').css('height', 76);
			$('#bar-9').css('max-height', 116);
			$('#bar-4').css('min-height', 276);
			$('#bar-4').css('height', 276);
			$('#bar-1').css('min-height', 116);
			$('#bar-1').css('height', 116);
			$('.calc-mean').html('4.0');
			$('.calc-mode').html('2.1');

			$('#bar-9').addClass('hoverable');
			bar9Complete = false;
			bar9();
		}
		$next.removeClass('d-none');
		// disableResizable();
		showText();
	});

	$next.click(() => {
		$previous.removeClass('d-none');
		if (currentStep < 3) {
			currentStep += 1;
		}
		showText();

		if (currentStep === 1) {
			// $previous.addClass('d-none');
			$('#bar-4').css('min-height', 276);
			$('#bar-4').css('height', 276);
			$('.calc-mean').html('4.2');
			$('.calc-mode').html('2.0');
			bar4Height = $('#bar-4').outerHeight();
		}
		if (currentStep === 2) {
			$('#bar-1').css('min-height', 116);
			$('#bar-1').css('height', 116);
			$('.calc-mean').html('4.0');
			$('.calc-mode').html('2.1');
			bar1Height = $('#bar-1').outerHeight();
		}

		if (currentStep === 3) {
			$('.bar').css('min-height', 5);
			$('.bar').css('max-height', '');
			$('#bar-0').css('height', bar0Height);
			$('#bar-1').css('height', bar1Height);
			$('#bar-2').css('height', bar2Height);
			$('#bar-3').css('height', bar3Height);
			$('#bar-4').css('height', bar4Height);
			$('#bar-5').css('height', bar5Height);
			$('#bar-6').css('height', bar6Height);
			$('#bar-7').css('height', bar7Height);
			$('#bar-8').css('height', bar8Height);
			$('#bar-9').css('height', bar9Height);
			const data = getDataBits();
			average(data);
			standardDeviation(data);
			hoverState();
		}

		if ((currentStep === 0 && bar4Complete === false) || (currentStep === 1 && bar1Complete === false) || (currentStep === 2 && bar9Complete === false) || (currentStep === 3)) { // eslint-disable-line
			$next.addClass('d-none');
			isComplete();
		} else {
			$next.removeClass('d-none');
		}

		if ((currentStep === 1 && bar1WasComplete) || (currentStep === 3 && bar9WasComplete) || (currentStep === 2 &&bar9WasComplete)) { // eslint-disable-line
			$next.removeClass('d-none');
		}

		if (currentStep === 3) {
			$next.addClass('d-none');
			resizableComplete();
			hoverState();
		}
	});

	$resizable.focusin((e) => {
		$bar.removeClass('active');
		$(e.target).addClass('active');
		currentBar = $(e.target).attr('id');
	});

	$resizable.keydown((val) => {
		if (currentBar === 'bar-4' && currentStep === 0) {
			if (val.which === 39 || val.which === 38) {
				const currentHeight = $(`#${currentBar}`).outerHeight();
				if (currentHeight < 240 && bar4Complete === false) {
					$(`#${currentBar}`).css('height', `${currentHeight + 40}px`);
					$(`#${currentBar}`).attr('value', Math.round(currentHeight / $yAxis));
					currentStep += 1;
					$('.four-text').removeClass('d-none')
						.siblings('.main-text')
						.addClass('d-none');
					$previous.removeClass('d-none');
					bar4Complete = true;
					// bar4WasComplete = true;
					$(`#${currentBar}`).trigger('resize');
					bar1();
					bar4Height = $('#bar-4').outerHeight();
				}
			}
		} else if (currentBar === 'bar-1' && currentStep === 1) {
			if (val.which === 39 || val.which === 38) {
				const currentHeight = $(`#${currentBar}`).outerHeight();
				if (currentHeight < 80 && bar1Complete === false) {
					$(`#${currentBar}`).css('height', `${currentHeight + 40}px`);
					$(`#${currentBar}`).attr('value', Math.round(currentHeight / $yAxis));
					currentStep += 1;
					$('.one-text').removeClass('d-none')
						.siblings('.main-text')
						.addClass('d-none');
					$previous.removeClass('d-none');
					$next.addClass('d-none');
					bar1Complete = true;
					bar1WasComplete = true;
					$('#bar-1').css('max-height', '');
					$(`#${currentBar}`).trigger('resize');
					bar9();
					bar1Height = $('#bar-1').outerHeight();
				}
			}
		} else if (currentBar === 'bar-9' && currentStep === 2) {
			if (val.which === 39 || val.which === 38) {
				const currentHeight = $(`#${currentBar}`).outerHeight();
				if (currentHeight < 80 && bar9Complete === false) {
					$(`#${currentBar}`).css('height', `${currentHeight + 40}px`);
					$(`#${currentBar}`).attr('value', Math.round(currentHeight / $yAxis));
					currentStep += 1;
					$('.nine-text').removeClass('d-none')
						.siblings('.main-text')
						.addClass('d-none');
					$previous.removeClass('d-none');
					resizeComplete = true;
					bar9Complete = true;
					bar9WasComplete = true;
					$('#bar-9').css('max-height', '');
					$(`#${currentBar}`).trigger('resize');
					resizableComplete();
					bar9Height = $('#bar-9').outerHeight();
				}
			}
		} else if (resizeComplete && currentStep === 3) {
			if (val.which === 39 || val.which === 38) { // right arrow (38 up)
				const currentHeight = $(`#${currentBar}`).outerHeight();
				$(`#${currentBar}`).css('height', `${currentHeight + 40}px`);
				$(`#${currentBar}`).attr('value', Math.round(currentHeight / $yAxis));
				bar0Height = $('#bar-0').outerHeight();
				bar1Height = $('#bar-1').outerHeight();
				bar2Height = $('#bar-2').outerHeight();
				bar3Height = $('#bar-3').outerHeight();
				bar4Height = $('#bar-4').outerHeight();
				bar5Height = $('#bar-5').outerHeight();
				bar6Height = $('#bar-6').outerHeight();
				bar7Height = $('#bar-7').outerHeight();
				bar8Height = $('#bar-8').outerHeight();
				bar9Height = $('#bar-9').outerHeight();
			} else if (val.which === 37 || val.which === 40) { // left arrow (40 down)
				const currentHeight = $(`#${currentBar}`).outerHeight();
				const currentValue = $(`#${currentBar}`).attr('value');
				bar0Height = $('#bar-0').outerHeight();
				bar1Height = $('#bar-1').outerHeight();
				bar2Height = $('#bar-2').outerHeight();
				bar3Height = $('#bar-3').outerHeight();
				bar4Height = $('#bar-4').outerHeight();
				bar5Height = $('#bar-5').outerHeight();
				bar6Height = $('#bar-6').outerHeight();
				bar7Height = $('#bar-7').outerHeight();
				bar8Height = $('#bar-8').outerHeight();
				bar9Height = $('#bar-9').outerHeight();
				if (currentValue > 0) {
					$(`#${currentBar}`).css('height', `${currentHeight - 40}px`);
					$(`#${currentBar}`).attr('value', currentValue - 1);
					$(`#${currentBar}`).trigger('resize');
				}
			}
		}
		const data = getDataBits();
		average(data);
		standardDeviation(data);
		showText();
	});

	$(document).click(() => {
		$bar.removeClass('active');
	});

	$reset.click(() => {
		window.location.reload();
	});

	const loadData = getDataBits();
	average(loadData);
	standardDeviation(loadData);


	$('#bar-4').css('min-height', '236px');
	$('#bar-1').css('min-height', '76px');
	$('#bar-9').css('min-height', '76px');

	// $(window).resize((e) => {
	// 	if (e.target === window) { window.location.reload(); }
	// });
});
