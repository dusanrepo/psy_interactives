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
	};

	function activateCompletion() {
		window.postAction({
			id: '9b7e913a-43ee-4fba-92fb-35e410126b2c',
		});
	}

	const scorePercent = {
		13: '0.05%',
		14: '0.08%',
		15: '0.14%',
		16: '0.23%',
		17: '0.37%',
		18: '0.58%',
		19: '0.88%',
		20: '1.32%',
		21: '1.92%',
		22: '2.75%',
		23: '2.86%',
		24: '5.31%',
		25: '7.16%',
		26: '9.47%',
		27: '12.3%',
		28: '15.6%',
		29: '19.6%',
		30: '24%',
		31: '28.9%',
		32: '34.3%',
		33: '40.1%',
		34: '46%',
		35: '52%',
		36: '58%',
		37: '63.9%',
		38: '69.4%',
		39: '74.5%',
		40: '79.1%',
		41: '83.2%',
		42: '86.7%',
		43: '89.7%',
		44: '92.1%',
		45: '94.1%',
		46: '95.7%',
		47: '96.9%',
		48: '97.8%',
		49: '98.5%',
		50: '98.9%',
		51: '99.3%',
		52: '99.6%',
		53: '99.7%',
		54: '99.83%',
		55: '99.89%',
		56: '99.93%',
		57: '99.96%',
		58: '99.97%',
		59: '99.98%',
		60: '99.99%',
		61: '99.99%',
		62: '99.99%',
		63: '99.99%',
		64: '99.99%',
		65: '99.99%',
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
		$('span.scr-sum').html(`${sum} `);
		const num = parseFloat((100 - parseFloat(scorePercent[sum])).toFixed(2).toString());
		console.log(num);

		$('.scr-pt').html(`${num}% `);

		$('.results').addClass('d-none');
		if (sum > 34.66) {
			$('.results-over-34').removeClass('d-none');
		} else if (sum < 34.66) {
			$('.results-under-34').removeClass('d-none');
		}
	}

	function answerSubmit(num, opt) {
		data[stage] = num;
		answerSubmitted[stage] = opt;

		$next.removeClass('invisible');
	}

	function resetRadios() {
		console.log('resetRadios');

		if (data[stage] === undefined) {
			console.log('clicking resetRadios()');

			// $option1.click();
			data[stage] = undefined;
			answerSubmitted[stage] = null;
			$next.addClass('invisible');
		}
		$option.removeClass('active')
			.parent('label')
			.removeClass('active');
	}

	function setAnswer() {
		console.log('setAnswer');

		if (data[stage] === undefined || data[stage] === null) {
			resetRadios();
		} else {
			console.log('clicking');
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

		if (stage > 0 && stage < 14) {
			$answerRow.removeClass('d-none');
		} else {
			$answerRow.addClass('d-none');
		}

		if (stage === 14) {
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
		console.log('option click');

		console.log(answerSubmitted[stage]);


		console.log('timeout');

		console.log(answerSubmitted[stage]);

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
