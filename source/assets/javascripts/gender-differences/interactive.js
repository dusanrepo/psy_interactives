$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $submit = $('.submit');
	const $reset = $('.reset');

	let step = 0;
	let userAnswer = 2.60;

	let rightPos = $('.woman-data').css('right');
	rightPos = parseInt(rightPos, 10);

	let menLeft;
	let womanRight;

	function uiSlider() {
		$(`.slider-${step}`).slider({
			range: false,
			min: 0,
			max: 2.6,
			step: 0.01,
			values: [0, 2.6],
			slide(event, ui) {
				const num = ui.values[1] - ui.values[0];
				if (num >= 0) {
					$(`.d-legened-${step}`).html(`<i>d</i> = ${num.toFixed(2)}`);
				} else {
					$(`.d-legened-${step}`).html(`<i>d</i> = - ${Math.abs(num.toFixed(2))}`);
				}
				menLeft = ui.values[0] * 7;
				$(`.men-data-${step}`).css('left', `${menLeft + 7}%`);
				womanRight = ui.values[1] * 7;
				womanRight = -Math.abs(womanRight);
				womanRight = rightPos + womanRight + 17.9;
				$(`.woman-data-${step}`).css('right', `${womanRight}%`);
				userAnswer = num.toFixed(2);
				$submit.removeClass('d-none');
				$next.addClass('d-none');
				$previous.addClass('d-none');

				$(ui.handle).attr('aria-valuenow', ui.value); // current val, '5'
				$(ui.handle).attr('aria-valuetext', `Value of ${ui.value}`); // text val, '$5'
			},
		});
	}

	function reverseSlider() {
		$(`.woman-data-${step}`).css('right', `${32.9}%`);
		$(`.men-data-${step}`).css('left', `${25.2}%`);
		$(`.slider-${step}`).slider({
			range: false,
			min: 0,
			max: 2.6,
			step: 0.01,
			values: [2.6, 0],
			slide(event, ui) {
				const num = ui.values[0] - ui.values[1];
				if (num >= 0) {
					$(`.d-legened-${step}`).html(`<i>d</i> = ${num.toFixed(2)}`);
				} else {
					$(`.d-legened-${step}`).html(`<i>d</i> = - ${Math.abs(num.toFixed(2))}`);
				}
				menLeft = ui.values[0] * 7;
				$(`.men-data-${step}`).css('left', `${menLeft + 7}%`);
				womanRight = ui.values[1] * 7;
				womanRight = -Math.abs(womanRight);
				womanRight = rightPos + womanRight + 17.9;
				$(`.woman-data-${step}`).css('right', `${womanRight}%`);
				userAnswer = num.toFixed(2);
				$submit.removeClass('d-none');
				$next.addClass('d-none');
				$previous.addClass('d-none');

				$(ui.handle).attr('aria-valuenow', ui.value); // current val, '5'
				$(ui.handle).attr('aria-valuetext', `Value of ${ui.value}`); // text val, '$5'
			},
		});
	}

	function stageAnswer() {
		$(`.feedback-${step}`).removeClass('incomplete');
		$(`.feedback-${step}`).html('');
		if (step === 1) {
			$(`.woman-data-${step}`).css('right', `${26.39}%`);
			$(`.men-data-${step}`).css('left', `${16.66}%`);

			$('.slider-1').slider('values', [1.45, 1]);
			// $('.slider-1').slider('values', [1.45, 1]).call($(`.slider-${step}`));
			$('.d-legened-1').html('<i>d</i> = 0.45');

			$('.ui-slider-handle').attr('aria-valuenow', 1);
			$('.ui-slider-handle').attr('aria-valuetext', 'Value of 1'); // women
			$('.ui-slider-handle:first-child').attr('aria-valuenow', 1.45);
			$('.ui-slider-handle:first-child').attr('aria-valuetext', 'Value of 1.45'); // men

			// $('.ui-slider-handle').css('right', `${26.39}%`);
			// $('.ui-slider-handle:first-child').css('left', `${16.66}%`);

			if (userAnswer === '0.45') {
				$('.feedback-1').html('<p>Your guess was <strong>Correct!</strong> The difference for physical aggression is <i>d</i> = 0.45, with men scoring higher than women.</p>');
			} else if (userAnswer >= '0.46') {
				const userAnswerCalc = userAnswer - 0.45;
				$('.feedback-1').html(`<p>Your guess overestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference for physical aggression is <i>d</i> = 0.45, with men scoring higher than women.</p>`);
			} else if (userAnswer <= '0.44') {
				const userAnswerCalc = 0.45 - userAnswer;
				$('.feedback-1').html(`<p>Your guess underestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference for physical aggression is <i>d</i> = 0.45, with men scoring higher than women.</p>`);
			}
		} else if (step === 2) {
			$(`.woman-data-${step}`).css('right', `${22.47}%`);
			$(`.men-data-${step}`).css('left', `${14}%`);

			$('.slider-2').slider('values', [1, 1.49]);
			$('.d-legened-2').html('<i>d</i> = 0.49');

			$('.ui-slider-handle').attr('aria-valuenow', 1.49);
			$('.ui-slider-handle').attr('aria-valuetext', 'Value of 1.49'); // women
			$('.ui-slider-handle:first-child').attr('aria-valuenow', 1);
			$('.ui-slider-handle:first-child').attr('aria-valuetext', 'Value of 1'); // men

			if (userAnswer === '0.49') {
				$('.feedback-2').html('<p>Women prefer people-oriented careers more than men do. Your guess was <strong>Correct!</strong> The difference is <i>d</i> = 0.49.</p>');
			} else if (userAnswer >= '0.50') {
				const userAnswerCalc = userAnswer - 0.49;
				$('.feedback-2').html(`<p>Women prefer people-oriented careers more than men do. Your guess overestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference is <i>d</i> = 0.49.</p>`);
			} else if (userAnswer <= '0.48') {
				const userAnswerCalc = 0.49 - userAnswer;
				$('.feedback-2').html(`<p>Women prefer people-oriented careers more than men do. Your guess underestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference is <i>d</i> = 0.49.</p>`);
			}
		} else if (step === 3) {
			$(`.woman-data-${step}`).css('right', `${25.76}%`);
			$(`.men-data-${step}`).css('left', `${15.4}%`);

			$('.slider-3').slider('values', [1.18, 1]);
			$('.d-legened-3').html('<i>d</i> = 0.18');

			$('.ui-slider-handle').attr('aria-valuenow', 1);
			$('.ui-slider-handle').attr('aria-valuetext', 'Value of 1'); // women
			$('.ui-slider-handle:first-child').attr('aria-valuenow', 1.18);
			$('.ui-slider-handle:first-child').attr('aria-valuetext', 'Value of 1.18'); // men

			if (userAnswer === '0.18') {
				$('.feedback-3').html('<p>Your guess was <strong>Correct!</strong> The difference for self-esteem is <i>d</i> = 0.18 with men scoring higher then women.</p>');
			} else if (userAnswer >= '0.19') {
				const userAnswerCalc = userAnswer - 0.18;
				$('.feedback-3').html(`<p>Your guess overestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference for self-esteem is <i>d</i> = 0.18, with men scoring higher then women.</p>`);
			} else if (userAnswer <= '0.17') {
				const userAnswerCalc = 0.18 - userAnswer;
				$('.feedback-3').html(`<p>Your guess underestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference for self-esteem is <i>d</i> = 0.18, with men scoring higher then women.</p>`);
			}
		} else if (step === 4) {
			$(`.woman-data-${step}`).css('right', `${23.73}%`);
			$(`.men-data-${step}`).css('left', `${16.31}%`);

			$('.slider-4').slider('values', [1.2, 1.18]);
			$('.d-legened-4').html('<i>d</i> = -0.02');

			$('.ui-slider-handle').attr('aria-valuenow', 1.18);
			$('.ui-slider-handle').attr('aria-valuetext', 'Value of 1.18'); // women
			$('.ui-slider-handle:first-child').attr('aria-valuenow', 1.2);
			$('.ui-slider-handle:first-child').attr('aria-valuetext', 'Value of 1.2'); // men

			if (userAnswer === '-0.02') {
				$('.feedback-4').html('<p>Your guess was <strong>Correct!</strong> The difference for leadership is <i>d</i> = –0.02. The difference is so small it is virtually nonexistent.</p>');
			} else if (userAnswer >= '-0.01') {
				const userAnswerCalc = userAnswer - -0.02;
				$('.feedback-4').html(`<p>Your guess overestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference for leadership is <i>d</i> = –0.02. The difference is so small it is virtually nonexistent.</p>`);
			} else if (userAnswer <= '-0.03') {
				const userAnswerCalc = -0.02 - userAnswer;
				$('.feedback-4').html(`<p>Your guess underestimated the <i>d</i> score by ${userAnswerCalc.toFixed(2)}. The difference for leadership is <i>d</i> = –0.02. The difference is so small it is virtually nonexistent.</p>`);
			}
		}
	}

	function sliderAriaLabels() {
		$('.ui-slider-handle').attr('role', 'slider');

		$('.ui-slider-handle').attr('aria-label', 'Women');
		$('.ui-slider-handle:first-child').attr('aria-label', 'Men');

		$('.ui-slider-handle').attr('aria-valuemax', 2.6);
		$('.ui-slider-handle').attr('aria-valuemin', 0);

		const womenVal = $(`.slider-${step}`).slider('values')[1];
		$('.ui-slider-handle').attr('aria-valuenow', womenVal);
		$('.ui-slider-handle').attr('aria-valuetext', `Value of ${womenVal}`); // women

		const menVal = $(`.slider-${step}`).slider('values')[0];
		$('.ui-slider-handle:first-child').attr('aria-valuenow', menVal);
		$('.ui-slider-handle:first-child').attr('aria-valuetext', `Value of ${menVal}`); // men
	}

	function loadStage() {
		$(`#stage-${step}`).removeClass('d-none')
			.siblings('.stage')
			.addClass('d-none');
		if (!$(`.feedback-${step}`).hasClass('incomplete')) {
			$next.removeClass('d-none');
			$submit.addClass('d-none');
		} else if (step === 1 || step === 3) {
			reverseSlider();
		} else {
			uiSlider();
		}

		sliderAriaLabels();
	}

	$submit.click(() => {
		stageAnswer();
		$submit.addClass('d-none');
		$next.removeClass('d-none');
		$previous.removeClass('d-none');
	});

	$next.click(() => {
		$next.addClass('d-none');
		step += 1;
		loadStage();
		$previous.removeClass('d-none');
		if (step === 5) {
			$next.addClass('d-none');
			$submit.addClass('d-none');
		}
	});

	$previous.click(() => {
		step -= 1;
		loadStage();
		$next.removeClass('d-none');
		if (step === 0) {
			$previous.addClass('d-none');
			$submit.addClass('d-none');
		}
	});

	$reset.click(() => {
		window.location.reload();
	});
});
