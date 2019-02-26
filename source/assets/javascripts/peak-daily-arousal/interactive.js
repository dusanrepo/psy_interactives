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
			id: '644aba91-7e42-4ff2-837d-ebb0be5d3a0f',
		});
	}

	const answerSubmitted = {
		1: 5,
		2: 5,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
		9: null,
		10: 5,
		11: null,
		12: null,
		13: null,
		14: null,
		15: null,
		16: null,
		17: 1,
		18: 1,
		19: null,
	};

	data[1] = 5;
	data[2] = 5;
	data[10] = 5;
	data[17] = 1;
	data[18] = 1;

	const timeSubmitted = {
		1: {
			textTime: '05:00am',
			numberTime: '0',
		},
		2: {
			textTime: '08:00pm',
			numberTime: '0',
		},
		10: {
			textTime: '08:00pm',
			numberTime: '0',
		},
		17: {
			textTime: '12:00am',
			numberTime: '0',
		},
		18: {
			textTime: '12:00am',
			numberTime: '0',
		},
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

	const sliderStages = [1, 2, 10, 17, 18];
	function isNotSliderStage() {
		if (sliderStages.indexOf(stage) === -1) { // not one of questions: 1, 2, 10, 18
			return true;
		}
		return false;
	}

	const resultText = {
		86: 'You are definitely a morning type.',
		69: 'You are moderately a morning type.',
		58: 'You are neither a morning nor an evening type.',
		41: 'You are moderately an evening type.',
		30: 'You are definitely an evening type.',
	};
	const resultScores = Object.keys(resultText);

	function showResults() {
		console.log('activateCompletion()');
		activateCompletion();
		console.log(answerSubmitted);
		console.log(data);

		const cleanData = filterArray(data);
		const sum = cleanData.reduce((sum2, value) => sum2 + value, 0);
		$('span.scr-sum').html(`${sum} `);

		for (let i = 0; Object.keys(resultText).length; i += 1) {
			if (sum <= resultScores[i]) {
				console.log('sum <= resultScores[i]');
				console.log(`${sum} <= ${resultScores[i]}`);

				$('p.result-text').html(resultText[resultScores[i]]);
				break;
			}
		}
		$('.results').removeClass('d-none');
	}

	function answerSubmit(num, opt) {
		data[stage] = num;
		answerSubmitted[stage] = opt;

		$next.removeClass('invisible');
	}

	function resetRadios() {
		if (isNotSliderStage()) {
			if (data[stage] === undefined) {
				// $option1.click();
				data[stage] = undefined;
				$next.addClass('invisible');
			}
			$option.removeClass('active')
				.parent('label')
				.removeClass('active');
		} else {
			$(`.slider-${stage}`).slider('value', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage}`).attr('alt', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[stage].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[stage].textTime); // plain English
			$(`.year-display-text-${stage}`).html(timeSubmitted[stage].textTime);
		}
	}

	function setAnswer() {
		if (data[stage] === undefined || data[stage] === null || !isNotSliderStage()) {
			resetRadios();
		} else {
			$(`#option${answerSubmitted[stage]}`).click();
			$next.removeClass('invisible');
		}
	}

	const buttonInfo = {
		1: {
			buttons: {
				1: '5:00 a.m. – 6:30 a.m.',
				2: '6:30 a.m. – 7:45 a.m.',
				3: '7:45 a.m. – 9:45 a.m.',
				4: '9:45 a.m. – 11:00 a.m.',
				5: '11:00 a.m. – 12:00 p.m.',
			},
			values: {
				1: 5,
				2: 4,
				3: 3,
				4: 2,
				5: 1,
			},
			numOfButtons: 5,
		},
		2: {
			buttons: {
				1: '8:00 p.m. – 9:00 p.m.',
				2: '9:00 p.m. – 10:15 p.m.',
				3: '10:15 p.m. – 12:30 a.m.',
				4: '12:30 a.m. – 1:45 a.m.',
				5: '1:45 a.m. – 3:00 a.m.',
			},
			values: {
				1: 5,
				2: 4,
				3: 3,
				4: 2,
				5: 1,
			},
			numOfButtons: 5,
		},
		3: {
			buttons: {
				1: 'Not at all dependent',
				2: 'Slightly dependent',
				3: 'Fairly dependent',
				4: 'Very dependent',
			},
			values: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			},
			numOfButtons: 4,
		},
		4: {
			buttons: {
				1: 'Not at all easy',
				2: 'Not very easy',
				3: 'Fairly easy',
				4: 'Very easy',
			},
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			numOfButtons: 4,
		},
		5: {
			buttons: {
				1: 'Not at all alert',
				2: 'Slightly alert',
				3: 'Fairly alert',
				4: 'Very alert',
			},
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			numOfButtons: 4,
		},
		6: {
			buttons: {
				1: 'Very poor',
				2: 'Fairly poor',
				3: 'Fairly good',
				4: 'Very good',
			},
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			numOfButtons: 4,
		},
		7: {
			buttons: {
				1: 'Very tired',
				2: 'Fairly tired',
				3: 'Fairly refreshed',
				4: 'Very refreshed',
			},
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			numOfButtons: 4,
		},
		8: {
			buttons: {
				1: 'Seldom or never later',
				2: 'Less than one hour later',
				3: '1-2 hours later',
				4: 'More than two hours later',
			},
			values: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			},
			numOfButtons: 4,
		},
		9: {
			buttons: {
				1: 'Would be on good form',
				2: 'Would be on reasonable form',
				3: 'Would find it difficult',
				4: 'Would find it very difficult',
			},
			values: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			},
			numOfButtons: 4,
		},
		10: {
			buttons: {
				1: '8:00 p.m. – 9:00 p.m.',
				2: '9:00 p.m. – 10:15 p.m.',
				3: '10:15 p.m. – 12:45 a.m.',
				4: '12:45 a.m. – 2:00 a.m.',
				5: '2:00 a.m. – 3:00 a.m.',
			},
			values: {
				1: 5,
				2: 4,
				3: 3,
				4: 2,
				5: 1,
			},
			numOfButtons: 5,
		},
		11: {
			buttons: {
				1: '8:00 a.m. – 10:00 a.m.',
				2: '11:00 a.m. – 1:00 p.m.',
				3: '3:00 p.m. – 5:00 p.m.',
				4: '7:00 p.m. – 9:00 p.m.',
			},
			values: {
				1: 6,
				2: 4,
				3: 2,
				4: 0,
			},
			numOfButtons: 4,
		},
		12: {
			buttons: {
				1: 'Not at all tired',
				2: 'A little tired',
				3: 'Fairly tired',
				4: 'Very tired',
			},
			values: {
				1: 0,
				2: 2,
				3: 3,
				4: 5,
			},
			numOfButtons: 4,
		},
		13: {
			buttons: {
				1: 'Will wake up at usual time and will NOT fall asleep thereafter',
				2: 'Will wake up at usual time and will doze thereafter',
				3: 'Will wake up at usual time but will fall asleep again',
				4: 'Will NOT wake up until later than usual',
			},
			values: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			},
			numOfButtons: 4,
		},
		14: {
			buttons: {
				1: 'Would NOT go to bed until watch was over',
				2: 'Would take a nap before and sleep after',
				3: 'Would take a good sleep before and nap after',
				4: 'Would take ALL sleep before watch',
			},
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			numOfButtons: 4,
		},
		15: {
			buttons: {
				1: '8:00 a.m. – 10:00 a.m.',
				2: '11:00 a.m. – 1:00 p.m.',
				3: '3:00 p.m. – 5:00 p.m.',
				4: '7:00 p.m. – 9:00 p.m.',
			},
			values: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			},
			numOfButtons: 4,
		},
		16: {
			buttons: {
				1: 'Would be on good form',
				2: 'Would be on reasonable form',
				3: 'Would find it difficult',
				4: 'Would find it very difficult',
			},
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
			numOfButtons: 4,
		},
		17: {
			buttons: {
				1: '12:00 a.m. – 4:00 a.m.',
				2: '4:00 a.m. – 8:00 a.m.',
				3: '8:00 a.m. – 9:00 a.m.',
				4: '9:00 a.m. – 2:00 p.m.',
				5: '2:00 p.m. – 5:00 p.m.',
				6: '5:00 p.m. – 12:00 a.m.',
			},
			values: {
				1: 1,
				2: 5,
				3: 4,
				4: 3,
				5: 2,
				6: 1,
			},
			numOfButtons: 6,
		},
		18: {
			buttons: {
				1: '12:00 a.m. – 4:00 a.m.',
				2: '4:00 a.m. – 8:00 a.m.',
				3: '8:00 a.m. – 9:00 a.m.',
				4: '9:00 a.m. – 2:00 p.m.',
				5: '2:00 p.m. – 5:00 p.m.',
				6: '5:00 p.m. – 12:00 a.m.',
			},
			values: {
				1: 1,
				2: 5,
				3: 4,
				4: 3,
				5: 2,
				6: 1,
			},
			numOfButtons: 6,
		},
		19: {
			buttons: {
				1: 'Definitely a “morning” type',
				2: 'Rather more a “morning” type than an “evening” type',
				3: 'Rather more an “evening” type than a “morning” type',
				4: 'Definitely an “evening” type',
			},
			values: {
				1: 6,
				2: 4,
				3: 2,
				4: 0,
			},
			numOfButtons: 4,
		},
	};

	function setAnswerButtons() {
		$('.slider-stage').addClass('d-none');
		$('.button-stage').addClass('d-none');
		$('.time-display').addClass('d-none');
		if (isNotSliderStage()) {
			$('.button-stage').removeClass('d-none');
			$('.set').addClass('d-none');
			if (buttonInfo[stage].numOfButtons === 4) {
				$('.set-1').removeClass('d-none');
			} else if (buttonInfo[stage].numOfButtons === 5) {
				$('.set-2').removeClass('d-none');
				$('.set-1').removeClass('d-none');
			} else if (buttonInfo[stage].numOfButtons === 6) {
				$('.set-3').removeClass('d-none');
				$('.set-2').removeClass('d-none');
				$('.set-1').removeClass('d-none');
			}

			// Set button text & values
			const inputOptions = $('input.option').toArray();
			for (let i = 0; i < buttonInfo[stage].numOfButtons; i += 1) {
				console.log(buttonInfo[stage].buttons[i + 1]);

				$(inputOptions[i]).parent().get(0).lastChild.nodeValue = buttonInfo[stage].buttons[i + 1];
				$(inputOptions[i]).attr('data-value', buttonInfo[stage].values[i + 1]);
				$(inputOptions[i]).data('value', buttonInfo[stage].values[i + 1]);
			}
		} else {
			$(`.slider-stage-${stage}`).removeClass('d-none');
			$(`.time-display-${stage}`).removeClass('d-none');
		}
	}

	function setButtons() {
		if (stage === 0) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		if (stage === 20) {
			$next.addClass('invisible');
			showResults();
		}

		if (stage > 0 && stage < 20) {
			$answerRow.removeClass('d-none');
			setAnswerButtons();
		} else {
			$answerRow.addClass('d-none');
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
					$('p.q-text').attr('aria-live', '');
					$('p.q-text:visible').attr('aria-live', 'assertive');
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

	$('.ui-slider-handle').attr('aria-label', 'time');

	const $sliderBar = $('.slider-1');
	$sliderBar.slider({
		range: 'max',
		min: 0,
		max: 420, // 1440 for 24 hours, 720 for 12 hours (numOfHours * 60)
		value: 0,
		step: 15,
		slide(e, ui) {
			let hours = Math.floor(ui.value / 60);
			let minutes = ui.value - (hours * 60);
			console.log(hours);

			hours += 5;
			console.log(hours);
			console.log(hours === 12);

			const amPm = (hours === 12) ? 'p.m.' : 'a.m.';


			// if (hours > 12) hours -= 12;
			// if (hours === 0) hours += 12;
			if (hours.toString().length === 1) hours = `0${hours}`;
			if (minutes.toString().length === 1) minutes = `0${minutes}`;

			if (ui.value <= 75) { // 60 * 1.25hr (refers to 6:15am)
				console.log('5:00 - 6:15');
				answerSubmitted[stage] = 5;
				data[stage] = 5;
			} else if (ui.value <= 150) { // 60 * 2.5hr (refers to 7:30am)
				console.log('6:30 - 7:30');
				answerSubmitted[stage] = 4;
				data[stage] = 4;
			} else if (ui.value <= 270) { // 60 * 4.5hr (refers to 9:30am)
				console.log('7:45 - 9:30');
				answerSubmitted[stage] = 3;
				data[stage] = 3;
			} else if (ui.value <= 345) { // 60 * 5.75hr (refers to 10:45am)
				console.log('9:45 - 10:45');
				answerSubmitted[stage] = 2;
				data[stage] = 2;
			} else if (ui.value <= 420) { // 60 * 7hr (refers to 12:00pm)
				console.log('11:00 - 12:00');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			}

			console.log(`${hours}:${minutes}${amPm}`);

			$(`.time-display-text-${stage}`).html(`${hours}:${minutes} ${amPm}`);
			timeSubmitted[stage].textTime = `${hours}:${minutes} ${amPm}`;
			timeSubmitted[stage].numberTime = ui.value;
			// $next.removeClass('invisible');

			$(`.slider-${stage}`).slider('value', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage}`).attr('alt', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[stage].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[stage].textTime); // plain English
			$(`.year-display-text-${stage}`).html(timeSubmitted[stage].textTime);
		},
	}).each(() => {
		const labelRanges = ['5 a.m.', '12 p.m.']; // ['5 a.m.', '7 a.m.', '10 a.m.', '12 p.m.'];
		let el;
		// Get the number of possible values
		const vals = labelRanges.length;
		// Position the labels
		const pctVals = ['-1%', '99.167%']; // ['-1%', '28%', '71%', '99.167%'];
		for (let i = 0; i < vals; i += 1) {
			// Create a new element and position it with percentages
			el = $(`<label class="slider-labels">${labelRanges[i]}</label>`).css('left', pctVals[i]);
			// Add the element inside #slider
			$sliderBar.append(el);
		}
	});

	const $sliderBar2 = $('.slider-2');
	$sliderBar2.slider({
		range: 'max',
		min: 0,
		max: 420, // 1440 for 24 hours, 720 for 12 hours (numOfHours * 60)
		value: 0,
		step: 15,
		slide(e, ui) {
			let hours = Math.floor(ui.value / 60);
			let minutes = ui.value - (hours * 60);
			hours += 8;

			const amPm = (hours >= '12') ? 'a.m.' : 'p.m.';

			if (hours > 12) hours -= 12;
			if (hours === 0) hours += 12;
			if (hours.toString().length === 1) hours = `0${hours}`;
			if (minutes.toString().length === 1) minutes = `0${minutes}`;

			if (ui.value <= 45) { // 60 * 0.75hr (refers to 8:45pm)
				console.log('8:00 - 8:45');
				answerSubmitted[stage] = 5;
				data[stage] = 5;
			} else if (ui.value <= 120) { // 60 * 2hr (refers to 10:00pm)
				console.log('9:00 - 10:00');
				answerSubmitted[stage] = 4;
				data[stage] = 4;
			} else if (ui.value <= 255) { // 60 * 4.25hr (refers to 12:15am)
				console.log('10:15 - 12:15');
				answerSubmitted[stage] = 3;
				data[stage] = 3;
			} else if (ui.value <= 330) { // 60 * 5.5hr (refers to 1:30am)
				console.log('12:30 - 1:30');
				answerSubmitted[stage] = 2;
				data[stage] = 2;
			} else if (ui.value <= 420) { // 60 * 7hr (refers to 3:00am)
				console.log('1:45 - 3:00');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			}

			console.log(`${hours}:${minutes} ${amPm}`);

			$(`.time-display-text-${stage}`).html(`${hours}:${minutes} ${amPm}`);
			timeSubmitted[stage].textTime = `${hours}:${minutes} ${amPm}`;
			timeSubmitted[stage].numberTime = ui.value;
			// $next.removeClass('invisible');

			$(`.slider-${stage}`).slider('value', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage}`).attr('alt', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[stage].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[stage].textTime); // plain English
			$(`.year-display-text-${stage}`).html(timeSubmitted[stage].textTime);
		},
	}).each(() => {
		const labelRanges = ['8 p.m.', '3 a.m.']; // ['8 p.m.', '12 a.m.', '3 a.m.'];
		let el;
		// Get the number of possible values
		const vals = labelRanges.length;
		// Position the labels
		const pctVals = ['-1%', '99.75%']; // ['-1%', '56.75%', '99.75%'];
		for (let i = 0; i < vals; i += 1) {
			// Create a new element and position it with percentages
			el = $(`<label class="slider-labels">${labelRanges[i]}</label>`).css('left', pctVals[i]);
			// Add the element inside #slider
			$sliderBar2.append(el);
		}
	});

	const $sliderBar10 = $('.slider-10');
	$sliderBar10.slider({
		range: 'max',
		min: 0,
		max: 420, // 1440 for 24 hours, 720 for 12 hours (numOfHours * 60)
		value: 0,
		step: 15,
		slide(e, ui) {
			let hours = Math.floor(ui.value / 60);
			let minutes = ui.value - (hours * 60);
			hours += 8;


			const amPm = (hours >= 12) ? 'a.m.' : 'p.m.';

			if (hours > 12) hours -= 12;
			if (hours === 0) hours += 12;
			if (hours.toString().length === 1) hours = `0${hours}`;
			if (minutes.toString().length === 1) minutes = `0${minutes}`;

			if (ui.value <= 45) { // 60 * 0.75hr (refers to 8:45pm)
				console.log('8:00 - 8:45');
				answerSubmitted[stage] = 5;
				data[stage] = 5;
			} else if (ui.value <= 120) { // 60 * 2hr (refers to 10:00pm)
				console.log('9:00 - 10:00');
				answerSubmitted[stage] = 4;
				data[stage] = 4;
			} else if (ui.value <= 270) { // 60 * 4.5hr (refers to 12:30am)
				console.log('10:15 - 12:30');
				answerSubmitted[stage] = 3;
				data[stage] = 3;
			} else if (ui.value <= 345) { // 60 * 5.75hr (refers to 1:45am)
				console.log('12:45 - 1:45');
				answerSubmitted[stage] = 2;
				data[stage] = 2;
			} else if (ui.value <= 420) { // 60 * 7hr (refers to 3:00am)
				console.log('2:00 - 3:00');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			}

			console.log(`${hours}:${minutes} ${amPm}`);

			$(`.time-display-text-${stage}`).html(`${hours}:${minutes} ${amPm}`);
			timeSubmitted[stage].textTime = `${hours}:${minutes} ${amPm}`;
			timeSubmitted[stage].numberTime = ui.value;
			// $next.removeClass('invisible');

			$(`.slider-${stage}`).slider('value', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage}`).attr('alt', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[stage].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[stage].textTime); // plain English
			$(`.year-display-text-${stage}`).html(timeSubmitted[stage].textTime);
		},
	}).each(() => {
		const labelRanges = ['8 p.m.', '3 a.m.']; // ['8 p.m.', '12 a.m.', '3 a.m.'];
		let el;
		// Get the number of possible values
		const vals = labelRanges.length;
		// Position the labels
		const pctVals = ['-1%', '99.75%']; // ['-1%', '56.75%', '99.75%'];
		for (let i = 0; i < vals; i += 1) {
			// Create a new element and position it with percentages
			el = $(`<label class="slider-labels">${labelRanges[i]}</label>`).css('left', pctVals[i]);
			// Add the element inside #slider
			$sliderBar10.append(el);
		}
	});

	const $sliderBar17 = $('.slider-17');
	$sliderBar17.slider({
		range: 'max',
		min: 0,
		max: 1440, // 1440 for 24 hours, 720 for 12 hours (numOfHours * 60)
		value: 0,
		step: 15,
		slide(e, ui) {
			let hours = Math.floor(ui.value / 60);
			let minutes = ui.value - (hours * 60);
			console.log(hours);

			// hours += 5;

			const amPm = (hours >= 12 && hours !== 24) ? 'p.m.' : 'a.m.';

			if (hours > 12) hours -= 12;
			if (hours === 0) hours += 12;
			if (hours.toString().length === 1) hours = `0${hours}`;
			if (minutes.toString().length === 1) minutes = `0${minutes}`;

			// 12:00 – 3:45 = 1 pt
			// 4:00 – 7:45 = 5 pts
			// 8:00 – 8:45 = 4 pts
			// 9:00 – 1:45 = 3 pts
			// 2:00 – 4:45 = 2 pts
			// 5:00 – 12:00 = 1 pt

			if (ui.value <= 225) { // 60 * 3.75hr (refers to 3:45am)
				console.log('12:00 – 3:45');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			} else if (ui.value <= 465) { // 60 * 7.75hr (refers to 7:45am)
				console.log('4:00 – 7:45');
				answerSubmitted[stage] = 5;
				data[stage] = 5;
			} else if (ui.value <= 525) { // 60 * 8.75hr (refers to 8:45am)
				console.log('8:00 – 8:45');
				answerSubmitted[stage] = 4;
				data[stage] = 4;
			} else if (ui.value <= 825) { // 60 * 13.75hr (refers to 1:45pm)
				console.log('9:00 – 1:45');
				answerSubmitted[stage] = 3;
				data[stage] = 3;
			} else if (ui.value <= 1005) { // 60 * 16.75hr (refers to 4:45pm)
				console.log('2:00 – 4:45');
				answerSubmitted[stage] = 2;
				data[stage] = 2;
			} else if (ui.value <= 1440) { // 60 * hr (refers to 12:00am)
				console.log('5:00 – 12:00');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			}

			console.log(`${hours}:${minutes} ${amPm}`);

			$(`.time-display-text-${stage}`).html(`${hours}:${minutes} ${amPm}`);
			timeSubmitted[stage].textTime = `${hours}:${minutes} ${amPm}`;
			timeSubmitted[stage].numberTime = ui.value;
			// $next.removeClass('invisible');

			$(`.slider-${stage}`).slider('value', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage}`).attr('alt', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[stage].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[stage].textTime); // plain English
			$(`.year-display-text-${stage}`).html(timeSubmitted[stage].textTime);
		},
	}).each(() => {
		const labelRanges = ['12 a.m.', '12 a.m.']; // ['12 a.m.', '6 a.m.', '12 p.m.', '6 p.m.', '12 a.m.'];
		let el;
		// Get the number of possible values
		const vals = labelRanges.length;
		// Position the labels
		const pctVals = ['-1%', '99.75%']; // ['-1%', '24.5%', '49.75%', '74.75%', '99.75%'];
		for (let i = 0; i < vals; i += 1) {
			// Create a new element and position it with percentages
			el = $(`<label class="slider-labels">${labelRanges[i]}</label>`).css('left', pctVals[i]);
			// Add the element inside #slider
			$sliderBar17.append(el);
		}
	});

	const $sliderBar18 = $('.slider-18');
	$sliderBar18.slider({
		range: 'max',
		min: 0,
		max: 1440, // 1440 for 24 hours, 720 for 12 hours (numOfHours * 60)
		value: 0,
		step: 15,
		slide(e, ui) {
			let hours = Math.floor(ui.value / 60);
			let minutes = ui.value - (hours * 60);
			// hours += 5;

			const amPm = (hours >= 12 && hours !== 24) ? 'p.m.' : 'a.m.';

			if (hours > 12) hours -= 12;
			if (hours === 0) hours += 12;
			if (hours.toString().length === 1) hours = `0${hours}`;
			if (minutes.toString().length === 1) minutes = `0${minutes}`;

			// 12:00 – 4:45 = 1 pt
			// 5:00 – 7:45 = 5 pts
			// 8:00 – 9:45 = 4 pts
			// 10:00 – 4:45 = 3 pts
			// 5:00 – 9:45 = 2 pts
			// 10:00 – 12:00 = 1 pt


			if (ui.value <= 285) { // 60 * 4.75hr (refers to 4:45am)
				console.log('12:00 – 4:45');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			} else if (ui.value <= 465) { // 60 * 7.75hr (refers to 7:45am)
				console.log('5:00 – 7:45');
				answerSubmitted[stage] = 5;
				data[stage] = 5;
			} else if (ui.value <= 585) { // 60 * 9.75hr (refers to 9:45am)
				console.log('8:00 – 9:45');
				answerSubmitted[stage] = 4;
				data[stage] = 4;
			} else if (ui.value <= 1005) { // 60 * 16.75hr (refers to 4:45pm)
				console.log('10:00 – 4:45');
				answerSubmitted[stage] = 3;
				data[stage] = 3;
			} else if (ui.value <= 1305) { // 60 * 21.75hr (refers to 9:45pm)
				console.log('5:00 – 9:45');
				answerSubmitted[stage] = 2;
				data[stage] = 2;
			} else if (ui.value <= 1440) { // 60 * hr (refers to 12:00am)
				console.log('10:00 – 12:00');
				answerSubmitted[stage] = 1;
				data[stage] = 1;
			}

			console.log(`${hours}:${minutes} ${amPm}`);

			$(`.time-display-text-${stage}`).html(`${hours}:${minutes} ${amPm}`);
			timeSubmitted[stage].textTime = `${hours}:${minutes} ${amPm}`;
			timeSubmitted[stage].numberTime = ui.value;
			// $next.removeClass('invisible');

			$(`.slider-${stage}`).slider('value', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage}`).attr('alt', timeSubmitted[stage].numberTime); // regular val
			$(`.slider-${stage} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[stage].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[stage].textTime); // plain English
			$(`.year-display-text-${stage}`).html(timeSubmitted[stage].textTime);
		},
	}).each(() => {
		const labelRanges = ['12 a.m.', '12 a.m.']; // ['12 a.m.', '6 a.m.', '12 p.m.', '6 p.m.', '12 a.m.'];
		let el;
		// Get the number of possible values
		const vals = labelRanges.length;
		// Position the labels
		const pctVals = ['-1%', '99.75%']; // ['-1%', '24.5%', '49.75%', '74.75%', '99.75%'];
		for (let i = 0; i < vals; i += 1) {
			// Create a new element and position it with percentages
			el = $(`<label class="slider-labels">${labelRanges[i]}</label>`).css('left', pctVals[i]);
			// Add the element inside #slider
			$sliderBar18.append(el);
		}
	});

	function sliderAccessibility() {
		for (let i = 0; i < sliderStages.length; i += 1) {
			console.log(sliderStages[i]);
			console.log($(`.slider-${stage} .ui-slider-handle`));


			$(`.slider-${sliderStages[i]}`).slider('value', timeSubmitted[sliderStages[i]].numberTime); // regular val
			$(`.slider-${sliderStages[i]}`).attr('alt', timeSubmitted[sliderStages[i]].numberTime); // regular val
			$(`.slider-${sliderStages[i]} .ui-slider-handle`)
				.attr('aria-valuetext', timeSubmitted[sliderStages[i]].textTime) // plain English
				.attr('aria-valuenow', timeSubmitted[sliderStages[i]].textTime); // plain English
		}
	}

	// setTimeout(() => {
	sliderAccessibility();
	// }, 1000);
});
