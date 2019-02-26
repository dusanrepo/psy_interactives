$(document).ready(() => {
	const $option = $('.option');
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	let step = 0;

	const celebGroup1 = {
		thandie: 'thandie',
		katy: 'katy',
		jessica: 'jessica',
	};

	const celebQuestionHistory = [];

	const celebGroup2 = {
		zoe: 'zoe',
		zooey: 'zooey',
		bryce: 'bryce',
	};

	let currentQuestionClass;

	const celebs = ['thandie', 'katy', 'jessica', 'zoe', 'zooey', 'bryce'];
	const traits = ['extraverted', 'dependable', 'complex', 'sympathetic'];

	const celebComplete = {
		thandie: false,
		katy: false,
		jessica: false,
		zoe: false,
		zooey: false,
		bryce: false,
	};

	const celebAnswers = {
		thandie: {},
		katy: {},
		jessica: {},
		zoe: {},
		zooey: {},
		bryce: {},
	};

	const barWidths = {
		thandie: {},
		katy: {},
		jessica: {},
		zoe: {},
		zooey: {},
		bryce: {},
	};

	const options = {
		extraverted: undefined,
		dependable: undefined,
		complex: undefined,
		sympathetic: undefined,
	};

	function clearValues() {
		$('input[name="extraverted"]').prop('checked', false);
		$('input[name="dependable"]').prop('checked', false);
		$('input[name="complex"]').prop('checked', false);
		$('input[name="sympathetic"]').prop('checked', false);
		$('input:checkbox').removeAttr('checked');
		$('label').removeClass('active').removeClass('focus');
	}

	function clearOptions() {
		// clear checked
		clearValues();
		// clear options obj
		Object.keys(options).forEach((v) => { options[v] = undefined; });
	}

	function readOptions() {
		options.extraverted = $('input[name="extraverted"]:checked').attr('data-value');
		options.dependable = $('input[name="dependable"]:checked').attr('data-value');
		options.complex = $('input[name="complex"]:checked').attr('data-value');
		options.sympathetic = $('input[name="sympathetic"]:checked').attr('data-value');
	}

	function writeOptions() {
		celebAnswers[currentQuestionClass].extraverted = options.extraverted; // saves it to celeb's obj
		celebAnswers[currentQuestionClass].dependable = options.dependable;
		celebAnswers[currentQuestionClass].complex = options.complex;
		celebAnswers[currentQuestionClass].sympathetic = options.sympathetic;

		barWidths[currentQuestionClass].extraverted = options.extraverted; // eslint-disable-line
		barWidths[currentQuestionClass].dependable = options.dependable;
		barWidths[currentQuestionClass].complex = options.complex;
		barWidths[currentQuestionClass].sympathetic = options.sympathetic;

		if (Object.values(options).indexOf(undefined) === -1) {
			celebComplete[currentQuestionClass] = true; // if all 4 options are written
		}
	}
	// ['thandie', 'katy', 'jessica', 'zoe', 'zooey', 'bryce'];
	const fullName = {
		thandie: 'Thandie Newton',
		katy: 'Katy Perry',
		jessica: 'Jessica Chastain',
		zoe: 'Zoe Saldan',
		zooey: 'Zooey Deschanel',
		bryce: 'Bryce Dallas Howard',
	};

	const traitVoteText = {
		extraverted: {
			1: 'Highly extraverted',
			2: 'Extraverted',
			3: 'Neutral',
			4: 'Reserved',
			5: 'Highly reserved',
		},
		dependable: {
			1: 'Highly reliable',
			2: 'Reliable',
			3: 'Neutral',
			4: 'Unreliable',
			5: 'Highly unreliable',
		},
		complex: {
			1: 'Very easily upset',
			2: 'Easily upset',
			3: 'Neutral',
			4: 'Emotionally stable',
			5: 'Highly emotionally stable',
		},
		sympathetic: {
			1: 'Highly Critical',
			2: 'Critical',
			3: 'Neutral',
			4: 'Sympathetic',
			5: 'Highly sympathetic',
		},
	};

	function markRadioButtons() {
		for (let iCeleb = 0; iCeleb < celebs.length; iCeleb += 1) {
			const celebName = celebs[iCeleb];

			for (let iTrait = 0; iTrait < 4; iTrait += 1) {
				const voteValue = barWidths[celebs[iCeleb]][traits[iTrait]];
				const trait = traits[iTrait];
				$(`.option${voteValue}.${celebName}-${trait}`).addClass('user-checked');
			}
		}
		$('.results-option').prop('disabled', true);
	}

	function populateResultsPage() {
		for (let iCeleb = 0; iCeleb < celebs.length; iCeleb += 1) {
			const celebName = celebs[iCeleb];

			for (let iTrait = 0; iTrait < 4; iTrait += 1) {
				const voteValue = barWidths[celebs[iCeleb]][traits[iTrait]];
				const trait = traits[iTrait];

				$(`.${trait}-results-${celebName}`).html(`
					<fieldset class="likert p-0"><legend class="sr-only">You rated ${fullName[celebName]} as <span class="${celebName}-rating-${trait} celeb-rating">${traitVoteText[trait][voteValue]}.</span></legend><label aria-hidden="true" class="option each-radio-parent"><input class="likert-input results-option option1 ${celebName}-${trait}" data-value="1" name="${trait}" type="radio" value="option" /><span class="likert-labels results-span">${traitVoteText[trait][1]}</span></label><label aria-hidden="true" class="option each-radio-parent"><input class="likert-input results-option option2 ${celebName}-${trait}" data-value="2" name="${trait}" type="radio" value="option" /><span class="likert-labels results-span">${traitVoteText[trait][2]}</span></label><label aria-hidden="true" class="option each-radio-parent"><input class="likert-input results-option option3 ${celebName}-${trait}" data-value="3" name="${trait}" type="radio" value="option" /><span class="likert-labels results-span">${traitVoteText[trait][3]}</span></label><label aria-hidden="true" class="option each-radio-parent"><input class="likert-input results-option option4 ${celebName}-${trait}" data-value="4" name="${trait}" type="radio" value="option" /><span class="likert-labels results-span">${traitVoteText[trait][4]}</span></label><label aria-hidden="true" class="option each-radio-parent"><input class="likert-input results-option option5 ${celebName}-${trait}" data-value="5" name="${trait}" type="radio" value="option" /><span class="likert-labels results-span">${traitVoteText[trait][5]}</span></label></fieldset>
				`);

				// console.log(`p.${trait}-results-${celebName}-text: ${traitVoteText[trait][voteValue]}`);

				$(`p.${trait}-results-${celebName}-text`).html(traitVoteText[trait][voteValue]);
			}
		}
		markRadioButtons();
	}

	function nextHandler() {
		if (celebComplete[currentQuestionClass]) {
			$next.removeClass('invisible');
		} else {
			$next.addClass('invisible');
		}
	}

	function setAnswers() {
		$(`label.option${celebAnswers[currentQuestionClass].extraverted}.extraverted-label`).click();
		$(`label.option${celebAnswers[currentQuestionClass].dependable}.dependable-label`).click();
		$(`label.option${celebAnswers[currentQuestionClass].complex}.complex-label`).click();
		$(`label.option${celebAnswers[currentQuestionClass].sympathetic}.sympathetic-label`).click();
	}

	function setStage() {
		nextHandler();
		$('.question-content').removeClass('d-none');
		$('.prompt').removeClass('d-none');
		$('.stage').addClass('d-none');
		$('.info-stage').addClass('d-none');

		if (celebComplete[currentQuestionClass]) { // if celeb question is complete
			$(`.${currentQuestionClass}`).removeClass('d-none'); // show question
			// clearOptions();
			$('input:checkbox').removeAttr('checked');
			$('label').removeClass('active').removeClass('focus');
			setAnswers();
		} else if (celebComplete[currentQuestionClass] === false) { // if celeb question is not complete
			$(`.${currentQuestionClass}`).removeClass('d-none'); // show question
			clearOptions();
		} else if (step >= 6) { // if results screen
			populateResultsPage();
			$(`#stage-${step + 1}`).removeClass('d-none')
				.siblings('.info-stage')
				.addClass('d-none');
			$next.removeClass('invisible');
			$('.question-content').addClass('d-none');
			$('.prompt').addClass('d-none');
		}

		if (step === 10) {
			$next.addClass('invisible');
		}
	}

	function showNextQuestion() {
		$previous.removeClass('d-none');
		if (celebQuestionHistory[step] === undefined && step < 6) {
			if (step === 2 || step === 1 || step === 0) {
				// generate new question
				const randomKey = Math.floor(Math.random() * 3); // pick a number 0-8
				const classKey = Object.keys(celebGroup1)[randomKey]; // pick a class with the num
				if (celebQuestionHistory.indexOf(classKey) === -1) { // result is -1 if not duplicate
					currentQuestionClass = classKey; // track current question
					celebQuestionHistory.push(classKey); // save question to history
					setStage();
				} else {
					// if !== -1 then generate another question
					showNextQuestion();
				}
				$next.addClass('invisible');
			} else if (step === 5 || step === 4 || step === 3) {
				// generate new question
				const randomKey = Math.floor(Math.random() * 3); // pick a number 0-8
				const classKey = Object.keys(celebGroup2)[randomKey]; // pick a class with the num
				if (celebQuestionHistory.indexOf(classKey) === -1) { // result is -1 if not duplicate
					currentQuestionClass = classKey; // track current question
					celebQuestionHistory.push(classKey); // save question to history
					setStage();
				} else {
					// if !== -1 then generate another question
					showNextQuestion();
				}
				$next.addClass('invisible');
			}
		} else {
			setStage();
		}
	}

	function showPreviousQuestion() {
		$next.removeClass('invisible');
		setStage();
	}

	function firstQuestion() {
		const randomKey = Math.floor(Math.random() * 2); // pick a number 0-8
		const classKey = Object.keys(celebGroup1)[randomKey]; // pick a class with the num
		currentQuestionClass = classKey; // track current question
		celebQuestionHistory.push(classKey); // save question to history
		$(`.${currentQuestionClass}`).removeClass('d-none'); // show question
	}

	firstQuestion();

	$next.click(() => {
		step += 1;
		currentQuestionClass = celebQuestionHistory[step];
		showNextQuestion();
		setTimeout(() => {
			if ($next.is(':visible')) {
				$next.focus();
			}
		}, 20);
	});

	$previous.click(() => {
		if (step > 0) {
			step -= 1;
			currentQuestionClass = celebQuestionHistory[step];
			$previous.removeClass('d-none');
		}
		if (step === 0) {
			$previous.addClass('d-none');
		}
		showPreviousQuestion();
		setTimeout(() => {
			if ($previous.is(':visible')) {
				$previous.focus();
			} else {
				document.activeElement.blur();
			}
		}, 20);
	});

	$option.click((e) => {
		$(e.target).addClass('active');
		$(e.target).parent('label')
			.addClass('active')
			.removeClass('focus')
			.siblings('label')
			.removeClass('active')
			.removeClass('focus');
		readOptions();
		writeOptions();
		nextHandler();
	});

	$option.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
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
		window.location.reload();
	});
});
