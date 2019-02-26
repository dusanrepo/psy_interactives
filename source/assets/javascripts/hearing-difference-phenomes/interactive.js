$(document).ready(() => {
	// The student simply views and reads Frames 1 and 2, clicking NEXT to move on.

	// Frame 3 describes the experiment reported by Werker and asks the student to predict the data.
	// The desc is largely taken from the figure caption of the Gleitman text.
	// Show NEXT button once the student has adjusted all three of the bar-graph sliders.

	// Frame 4 compares the student’s predictions with the actual data and provides some perspective.

	// Slide 1 - Text & photo
	// Slide 2 - Text & photo
	// Slide 3 - Manipulable bar chart
	// Slide 4 - Bar chart compared to actual data

	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	let stage = 0;

	const $resizable = $('.resizable-bar');
	let currentBar;

	// let minHeightControl = $(`#${currentBar}`).outerHeight();
	// const minWidthControl = $resizable.outerWidth();
	// const $yAxis = $('.y-axis').outerHeight();
	const $bar = $('.bar');

	const gridStepHeight = 48.3;

	// const resized = {
	// 1: false,
	// 2: false,
	// 3: false,
	// };

	const gridSteps = ['0%', '20%', '40%', '60%', '80%', '100%'];
	const studyData = {
		1: gridStepHeight * (gridSteps.indexOf('100%') + 1),
		2: gridStepHeight * (gridSteps.indexOf('0%') + 1),
		// 3: gridStepHeight * (gridSteps.indexOf('0%') + 1),
	};

	function enableResizables() {
		$resizable.resizable('enable');
		$resizable.resizable('option', 'minHeight', 5);
		// $resizable.css('min-height', 76);
		$resizable.resizable('option', 'maxHeight', 500); // 440 but that was causing a bug
		// if (stage === 3) {
		$bar.addClass('hoverable');
		// }
	}

	function disableResizables() {
		$resizable
			.resizable('disable')
			.removeClass('hoverable');
	}

	// function resizablesCompleteCheck() {
	// if (Object.values(resized).indexOf(false) === -1 && stage !== 3) {
	// 	$next.removeClass('d-none');
	// }
	// }

	function handleResizableComparison() {
		// Populate real data next to user's prediction
		if (stage === 2) {
			// $('.bar-legend').addClass('d-none');
			// unlock resizables
			enableResizables();
			// corresponding bar should have height at 0px and then at the proper height
			for (let i = 1; i < (Object.keys(studyData).length + 1); i += 1) {
				$(`.tr-${i}-right`).addClass('d-none');
				$(`.bar-${i}-right`).css('height', '78px');
			}
		} else if (stage === 3) {
			// $('.bar-legend').removeClass('d-none');
			// Lock resizables
			disableResizables();
			// corresponding bar should have height at 0px and then at the proper height
			for (let i = 1; i < (Object.keys(studyData).length + 1); i += 1) {
				$(`.tr-${i}-right`).removeClass('d-none');
				$(`.bar-${i}-right`).css('height', `${studyData[i]}px`);
			}
		}

		// resizablesCompleteCheck();
		// https://ncia.wwnorton.com/4285/r/goto/cfi/74!/4
	}

	$resizable.resizable({
		minHeight: 5,
		maxHeight: 500, // 440 but that was causing a bug
		handles: 'n',
		// distance: 20,
		animateEasing: 'easeOutBounce',
		// grid: [minWidthControl, $yAxis],
		disabled: true,
		enabled: false,

		resize: (event, ui) => {
			$bar.removeClass('active');
			$(ui.element).addClass('active');
			currentBar = $(ui.element).attr('id');
			$(`#${currentBar}`).focus();
			// minHeightControl = Math.round(ui.size.height / gridStepHeight) * gridStepHeight;
			// $(`#${currentBar}`).attr('value', Math.round((minHeightControl / $yAxis)) - 1);
			// $(`#${currentBar}`).css('height', `${minHeightControl}px`);
			// resized[(currentBar.match(/\d+$/)[0])] = true;
		},

		stop: () => {
			$bar.removeClass('active');
			// resizablesCompleteCheck();
		},
	});

	enableResizables();

	function setStage() {
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		if (stage === 3) {
			$next.addClass('d-none');
		}

		enableResizables();
		if (stage > 1) {
			$next.addClass('d-none');
			handleResizableComparison();
		}

		if (stage === 2) {
			$next.removeClass('d-none');
		}
	}

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
		$next.removeClass('d-none');
	});

	$reset.click(() => {
		window.location.reload();
	});

	$resizable.keydown((val) => {
		const currentHeight = $(`#${$(val.target).attr('id')}`).outerHeight();
		if (val.which === 38) {
			$(`#${$(val.target).attr('id')}`).css('height', `${currentHeight + 2.5}px`);
			$(`#${$(val.target).attr('id')}`).trigger('resize');
		} else if (val.which === 40) {
			$(`#${$(val.target).attr('id')}`).css('height', `${currentHeight - 2.5}px`);
			$(`#${$(val.target).attr('id')}`).trigger('resize');
		}
	});
});
