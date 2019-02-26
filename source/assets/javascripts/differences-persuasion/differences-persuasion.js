$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');
	const $stages = $('.stage');
	const $answerRow = $('.answer-row');
	const $option = $('.option');
	const $option1 = $('.option1');

	let stage = 0;
	// Reversed: 3 4 5 7 8 9 12 17
	const dataReversed = [3, 4, 5, 7, 8, 9, 12, 17];
	let data = [];

	const answerSubmitted = {
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
		9: null,
		10: null,
		11: null,
		12: null,
		13: null,
		14: null,
		15: null,
		16: null,
		17: null,
		18: null,
	};

	function filterArray(arr) {
		let index = -1;
		const arrLength = arr ? arr.length : 0;
		let resIndex = -1;
		const result = [];

		while (++index < arrLength) { // eslint-disable-line
			const value = arr[index];

			if (value) {
				result[++resIndex] = value; // eslint-disable-line
			}
		}

		return result;
	}

	function showResults() {
		const cleanData = filterArray(data);
		const sum = cleanData.reduce((sum2, value) => sum2 + value, 0);
		const avg = sum / cleanData.length;

		$('.results').addClass('d-none');
		if (avg < 2.24) {
			$('.results-1').removeClass('d-none');
		} else {
			$('.results-2').removeClass('d-none');
		}
	}

	function answerSubmit(num, opt) {
		data[stage] = num;
		answerSubmitted[stage] = opt;

		$next.removeClass('invisible');
	}

	const $radios = $(':radio');
	function resetRadios() {
		if (data[stage] === undefined) {
			// $option1.click();
			$radios.prop('checked', false);
			data[stage] = undefined;
			$next.addClass('invisible');
		}
		$option.removeClass('active')
			.parent('label')
			.removeClass('active');
	}

	function setAnswer() {
		if (data[stage] === undefined) {
			// clear answers
			resetRadios();
		} else {
			// highlight answer selected
			$(`#option${answerSubmitted[stage]}`).click();
			$next.removeClass('invisible');
		}
	}

	function setButtons() {
		if (stage === 0) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		const dataRevCheck = dataReversed.indexOf(stage);
		if (dataRevCheck !== -1) {
			const inputOptions = $('input.option').toArray().reverse();
			// reverse button vals
			for (let i = 0; i < inputOptions.length; i += 1) {
				$(inputOptions[i]).attr('data-value', i + 1);
				$(inputOptions[i]).data('value', i + 1);
			}
		} else {
			const inputOptions = $('input.option').toArray();
			// regular button vals
			for (let i = 0; i < inputOptions.length; i += 1) {
				$(inputOptions[i]).attr('data-value', i + 1);
				$(inputOptions[i]).data('value', i + 1);
			}
		}

		if (stage > 0 && stage < 19) {
			$answerRow.removeClass('d-none');
		} else {
			$answerRow.addClass('d-none');
		}

		if (stage === 19) {
			$next.addClass('invisible');
			// show results
			showResults();
		}
	}

	function setStage() {
		// show proper stage
		$stages.addClass('d-none');
		$(`#stage-${stage}`).removeClass('d-none');
		setButtons();
		setAnswer();
	}

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
		$next.removeClass('invisible');
	});

	$reset.click(() => {
		stage = 0;
		data = [];
		Object.keys(answerSubmitted).forEach((v) => { answerSubmitted[v] = null; });
		setStage();
		$answerRow.addClass('d-none');
		resetRadios();
		$next.removeClass('invisible');
		$('.results').addClass('d-none');
	});

	$option.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.siblings('label')
			.removeClass('active');
		const optId = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
		answerSubmit(Number($(e.target).data('value')), optId);
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.addClass('active')
			.siblings('label')
			.removeClass('focus')
			.removeClass('active');
	});

	$option1.focusin((e) => {
		$(e.target).click();
		$(e.target).parent('label')
			.addClass('focus')
			.addClass('active')
			.siblings('label')
			.removeClass('focus')
			.removeClass('active');
	});

	$option.focusout(() => {
		$('label').removeClass('focus');
	});
});
