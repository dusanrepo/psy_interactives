$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reload');
	const $stages = $('.stage');
	const $answerRow = $('.answer-row');
	const $option = $('.option');
	const $option1 = $('.option1');

	let stage = 0;
	const data = [];

	function activateCompletion() {
		window.postAction({
			id: 'ed20321a-05b2-40c5-ba75-5f257a9a17e0',
		});
	}

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
		19: null,
		20: null,
		21: null,
		22: null,
		23: null,
		24: null,
		25: null,
		26: null,
		27: null,
		28: null,
		29: null,
		30: null,
		31: null,
		32: null,
		33: null,
		34: null,
	};

	const scorePercent = {
		0: '0.42%',
		1: '0.08%',
		2: '0.13%',
		3: '0.23%',
		4: '0.38%',
		5: '0.62%',
		6: '0.98%',
		7: '1.51%',
		8: '2.28%',
		9: '3.33%',
		10: '4.78%',
		11: '6.68%',
		12: '9.12%',
		13: '12.2%',
		14: '15.9%',
		15: '20.2%',
		16: '25.2%',
		17: '30.9%',
		18: '36.9%',
		19: '43.4%',
		20: '50%',
		21: '56.6%',
		22: '63.1%',
		23: '69.1%',
		24: '74.8%',
		25: '79.8%',
		26: '84.1%',
		27: '87.8%',
		28: '90.9%',
		29: '93.3%',
		30: '95.2%',
		31: '96.7%',
		32: '97.7%',
		33: '98.5%',
		34: '99%',
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
		console.log('activateCompletion()');
		activateCompletion();
		const cleanData = filterArray(data);
		const sum = cleanData.reduce((sum2, value) => sum2 + value, 0);
		console.log(sum);
		$('span.scr-sum').html(`${sum} `);
		$('.scr-pt').html(`${scorePercent[sum]} `);

		// $('.results').addClass('d-none');
		// $('.results').removeClass('d-none');
		// if (sum > 20) {
		// 	$('.results-over-20').removeClass('d-none');
		// } else if (sum < 20) {
		// 	$('.results-under-20').removeClass('d-none');
		// } else if (sum === 20) {
		// 	$('.results-20').removeClass('d-none');
		// }
	}

	function answerSubmit(num, opt) {
		data[stage] = num;
		answerSubmitted[stage] = opt;

		$next.removeClass('invisible');
	}

	function resetRadios() {
		if (data[stage] === undefined) {
			// $option1.click();
			data[stage] = undefined;
			$next.addClass('invisible');
		}
		$option.removeClass('active')
			.parent('label')
			.removeClass('active');
	}

	function setAnswer() {
		if (data[stage] === undefined || data[stage] === null) {
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

		if (stage > 0 && stage < 35) {
			$answerRow.removeClass('d-none');
		} else {
			$answerRow.addClass('d-none');
		}

		if (stage === 35) {
			$next.addClass('invisible');
			showResults();
		}
	}

	function setStage() {
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
		window.location.reload();
	});

	$option.click((e) => {
		if (answerSubmitted[stage] === null) {
			$next.css('opacity', 0.01);
			setTimeout(() => {
				console.log('next question');

				$next.click();
				setTimeout(() => {
					$next.css('opacity', '');
				}, 20);
			}, 50);
		}

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
		// $(e.target).click();
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
