$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	const $options = $('.option');

	// const $miniCharts = $('.chart');

	// const $droppable = $('.droppable');
	// const $draggable = $('.draggable');
	// let dragTarget;

	let stage = 0;

	const frame5Complete = true;
	let frame4Complete = false;

	// Frame 1 -> Frame 0
	// Text and imagery frame;
	// the frame also shows a scatter plot for data with a strong correlation. NEXT moves to Frame 2.

	// Frame 2 -> Frame 1
	// Text and imagery frame;
	// continues by showing a scatter plot for data with no correlation. NEXT moves to Frame 3.

	// Frame 3 -> Frame 2
	// Text and imagery frame; It then suggests four tasks to consider
	// and describes a graphical framework
	// in which the correlations for pairs of these tasks can be compared.
	// After inviting the student to predict the outcome, the text explains how,
	// by clicking on panels in the figure, the student can reveal the data belonging to those panels.

	// Frame 4 (3A) -> Frame 3
	// [3A]: “High” and “Low” draggable labels appear beneath the group of graphs.
	// The user drags one label to each graph
	// (they can be used unlimited times, but only one label can be applied to a graph at once.
	// Once all labels have been applied, the user can select “Next” to move to 3B (Frame 5).

	// Frame 5 (3B) -> Frame 4
	// [3B]
	// When a student clicks on one of these panels, the data from that panel
	// (See Imagery Frame 4) should appear, replacing the blank frame.
	// After a panel has been clicked, its data should remain visible.
	// Once all 6 panels have been revealed, move to Frame 4.

	// Frame 6 (Frame 4) -> Frame 5
	// The imagery for this frame shows the fully populated matrix of the six scatterplots.
	// The text invites students to look for a pattern of panels with larger correlations.

	// Frame 7 (Frame 5) -> Frame 6
	// Text and imagery frame highlights the three panels with higher correlations.

	// Frame 8 (Frame 6) -> Frame 7
	// Text and imagery frame highlights the three panels with lower correlations.

	const answerChosen = {};
	const numOfCharts = 6;

	function showSelections() {
		$('.answer-choice').addClass('d-none');
		for (let i = 0; i <= numOfCharts; i += 1) {
			$(`.${answerChosen[i]}-${i}`).removeClass('d-none');
		}
	}

	function setStage() {
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$next.removeClass('invisible');
		if (stage === 7 ||
			(!frame5Complete && stage === 5) ||
			(!frame4Complete && stage === 4)) {
			$next.addClass('invisible');
		}

		if (stage === 5) {
			showSelections();
		} else if (stage === 4) {
			$('.answer-choice').addClass('d-none');
		}
	}

	// function checkFrame5Complete() {
	// 	if (!$('.a-img').is(':visible')) {
	// 		console.log('a-img is not visible');
	// 		$next.removeClass('invisible');
	// 		frame5Complete = true;
	// 		stage += 1;
	// 		setStage();
	// 	}
	// }

	function checkFrame4Complete() {
		console.log('checkFrame3Complete');
		for (let i = 1; i <= numOfCharts; i += 1) {
			console.log(`chart ${i}`);

			if (!$(`input[name="chart-${i}"]:checked`).attr('data-value')) {
				return false;
			}
		}
		$next.removeClass('invisible');
		frame4Complete = true;
		return true;
	}

	$options.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.removeClass('focus')
			.siblings('label')
			.removeClass('active')
			.removeClass('focus');


		console.log($(e.target).data('vote'));
		console.log($(e.target).data('chart'));

		answerChosen[$(e.target).data('chart')] = $(e.target).data('vote');

		console.log(answerChosen);


		if (stage === 4) {
			checkFrame4Complete();
		}
	});

	$options.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$(document).keydown((val) => {
		if (val.which === 9) {
			$('label').removeClass('focus');
		}
	});

	// $miniCharts.click((e) => {
	// 	if (stage === 4) {
	// 		const closingChartImg = $(`.${$(e.target).data('closes')}`);
	// 		const openingChartImg = $(`.${$(e.target).data('opens')}`);
	// 		closingChartImg.addClass('d-none');
	// 		openingChartImg.removeClass('d-none');
	// 		checkFrame4Complete();
	// 	}
	// });

	$next.click(() => {
		stage += 1;
		setStage();
		$previous.removeClass('invisible');
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	$reset.click(() => {
		window.location.reload();
	});
});
