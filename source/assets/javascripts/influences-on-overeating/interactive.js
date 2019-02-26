$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $slideMin = 0;
	const $slideMax = 100;

	let stage = 0;
	const $amount = $('#amount');

	const stageComplete = {
		0: false,
		1: false,
		2: false,
	};

	function centerFood() {
		const container = $(`.example-${stage}`);
		const content = $(`.food-${stage}`);
		content.css('left', (container.width() - content.width()) / 2);
		content.css('top', (container.height() - content.height()) / 2);
	}

	function centerAllFood() {
		const currentStage = stage;
		for (let i = 0; i < 3; i += 1) {
			stage = i;
			centerFood();
		}
		stage = currentStage;
	}

	$(window).resize(() => {
		centerAllFood();
	});

	function selectionWord(caseNum) {
		switch (caseNum) {
		case 0:
			return 'First';
		case 1:
			return 'Second';
		case 2:
			return 'Third';
		case 3:
			return 'Fourth';
		case 4:
			return 'Fifth';
		case 5:
			return 'Sixth';
		default:
			break;
		}
		return '';
	}

	function caloriesCalc(uiVal) {
		const cals = (8 * uiVal).toFixed(0); // 800 calorie max
		$(`.calories-${stage}`).html(`<span class='sr-only'>${selectionWord(stage)} selection</span>${cals} calories`);
	}

	// function resizeAllFood() {
	// 	for (let i = 0; i < 3; i += 1) {
	// 		const uiVal = $(`.slider-${stage}`).attr('alt');
	// 		console.log(uiVal);
	// 		// resizeImage(uiVal);
	// 	}
	// }

	function resizeImage(uiVal) {
		$(`.food-${stage}`).css('width', `${uiVal * 0.75}%`);
	}

	function handleSlide(uiVal, uiHandle) {
		$(`.slider-${stage}`).attr('alt', `${uiVal}%`);
		$amount.val(uiVal);
		resizeImage(uiVal);
		$(uiHandle)
			.attr('aria-valuetext', `${uiVal}% food coverage`)
			.attr('aria-valuenow', uiVal);
		$amount.val($(`.slider-${stage}`).slider('value'));

		caloriesCalc(uiVal);
		centerFood();

		stageComplete[stage] = true;
		$next.removeClass('invisible');
	}

	function populateSliders() {
		for (let i = 0; i < 3; i += 1) {
			$(`.slider-${i}`).slider({
				range: 'max',
				min: $slideMin,
				max: $slideMax,
				value: 0,
				slide(event, ui) {
					handleSlide(ui.value, ui.handle);
				},
			});
		}

		$('.ui-slider-handle').attr({
			role: 'slider',
			'aria-valuemin': $slideMin,
			'aria-valuemax': $slideMax,
			'aria-valuenow': 0,
			'aria-orientation': 'horizontal',
			'aria-valuetext': '0% food coverage',
		});

		$('.ui-slider-handle').keydown((val) => {
			if (val.which === 36) $(val.target).parent().slider('value', $(val.target).parent().slider('option', 'min'));
			if (val.which === 35) $(val.target).parent().slider('value', $(val.target).parent().slider('option', 'max'));
		});
	}

	populateSliders();

	function setAltTags() {
		if (stage < 3) {
			const numOfImgs = $('.altable').length;
			let wordCount = 0;
			for (let i = 0; i < numOfImgs; i += 1) {
				$(`.plate-${i}`).attr('alt', `${selectionWord(wordCount)}-selection`);
				$(`.food-${i}`).attr('alt', `${selectionWord(wordCount + 1)}-selection`);
				wordCount += 2;
			}
		} else {
			$('.altable').attr('alt', '');
		}
	}

	function setStage() {
		if (stage < 3) {
			$('.stage').addClass('d-none');
			$(`.stage-${stage}`).removeClass('d-none');
			$('.sliders').addClass('d-none');
			$(`.sliders-${stage}`).removeClass('d-none');
			$('.calories').addClass('d-none');
			centerFood();
			// resizeAllFood();
		} else {
			$('.sliders').addClass('d-none');
			$('.stage').removeClass('d-none');
			$('.calories').removeClass('d-none');
			centerAllFood();
			// resizeAllFood();
		}

		if (stage === 0) {
			$('.main-row-2').removeClass('justify-content-center');
			$('.main-row-2').removeClass('justify-content-end');
			$('.main-row-2').addClass('justify-content-start');
		} else if (stage === 1) {
			$('.main-row-2').removeClass('justify-content-start');
			$('.main-row-2').removeClass('justify-content-end');
			$('.main-row-2').addClass('justify-content-center');
		} else if (stage === 2) {
			$('.main-row-2').removeClass('justify-content-start');
			$('.main-row-2').removeClass('justify-content-center');
			$('.main-row-2').addClass('justify-content-end');
		} else if (stage === 3) {
			$('.main-row-2').removeClass('justify-content-start');
			$('.main-row-2').removeClass('justify-content-end');
			$('.main-row-2').addClass('justify-content-center');
		}

		$('.instructions').addClass('d-none');
		$(`.instructions-${stage}`).removeClass('d-none');


		if (stage === 3 || stageComplete[stage] === false) {
			$next.addClass('invisible');
		}

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		setAltTags();
	}

	function resultable() {
		if (stage === 3) {
			$('.resultable').addClass('results');
		} else {
			$('.resultable').removeClass('results');
		}
	}

	$next.click(() => {
		stage += 1;
		resultable();
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		resultable();
		setStage();
		$next.removeClass('invisible');
	});
});
