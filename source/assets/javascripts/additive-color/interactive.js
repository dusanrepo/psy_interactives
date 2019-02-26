$(document).ready(() => {
	let $valred = 0;
	let $valblue = 0;
	let $valgreen = 0;
	const $reload = $('#reload');

	function DrawCircles() {
		const $canvas = document.getElementById('circles');
		let $context = $canvas.getContext('2d');
		let $centerX = 100;
		let $centerY = 100;
		let $radius = 75;
		$context.clearRect(0, 0, $canvas.width, $canvas.height);

		$context.beginPath();
		$context.arc($centerX, $centerY, $radius, 0, 2 * Math.PI, false);
		$context.fillStyle = `rgb(${$valred}, 0, 0)`;
		$context.fill();
		$context.globalCompositeOperation = 'lighter';

		$context = $canvas.getContext('2d');
		$centerX = 175;
		$centerY = 100;
		$radius = 75;

		$context.beginPath();
		$context.arc($centerX, $centerY, $radius, 0, 2 * Math.PI, false);
		$context.fillStyle = `rgb(0, ${$valgreen}, 0)`;
		$context.fill();

		$context = $canvas.getContext('2d');
		$centerX = 137.5;
		$centerY = 175;
		$radius = 75;

		$context.beginPath();
		$context.arc($centerX, $centerY, $radius, 0, 2 * Math.PI, false);
		$context.fillStyle = `rgb(0, 0, +${$valblue})`;
		$context.fill();
	}

	DrawCircles();

	const $sliderRed = $('.slider-red');
	const $sliderGreen = $('.slider-green');
	const $sliderBlue = $('.slider-blue');

	const $sliderRedAmount = $('#slider-red-amount');
	const $sliderGreenAmount = $('#slider-green-amount');
	const $sliderBlueAmount = $('#slider-blue-amount');

	$sliderRed.slider({
		range: 'max',
		min: 0,
		max: 255,
		value: 0,
		slide(event, ui) {
			const uiValue = (100 / 255) * ui.value;
			const uiValueNew = uiValue.toFixed(0);
			$sliderRedAmount.val(ui.value);
			$valred = $sliderRedAmount.val();
			DrawCircles();
			$sliderRed.attr('alt', `${uiValueNew}%`);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} red`)
				.attr('aria-valuenow', ui.value);
		},
	});

	$sliderGreen.slider({
		range: 'max',
		min: 0,
		max: 255,
		value: 0,
		slide(event, ui) {
			const uiValue = (100 / 255) * ui.value;
			const uiValueNew = uiValue.toFixed(0);
			$sliderGreenAmount.val(ui.value);
			$valgreen = $sliderGreenAmount.val();
			DrawCircles();
			$sliderGreen.attr('alt', `${uiValueNew}%`);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} green`)
				.attr('aria-valuenow', ui.value);
		},
	});

	$sliderBlue.slider({
		range: 'max',
		min: 0,
		max: 255,
		value: 0,
		slide(event, ui) {
			const uiValue = (100 / 255) * ui.value;
			const uiValueNew = uiValue.toFixed(0);
			$sliderBlueAmount.val(ui.value);
			$valblue = $sliderBlueAmount.val();
			DrawCircles();
			$sliderBlue.attr('alt', `${uiValueNew}%`);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} blue`)
				.attr('aria-valuenow', ui.value);
		},
	});

	$('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': '0',
		'aria-valuemax': '255',
		'aria-valuenow': '0',
		'aria-orientation': 'horizontal',
	});

	$sliderRed.find('.ui-slider-handle').attr({ 'aria-valuetext': '0 red', 'aria-label': 'Red' });
	$sliderGreen.find('.ui-slider-handle').attr({ 'aria-valuetext': '0 green', 'aria-label': 'Green' });
	$sliderBlue.find('.ui-slider-handle').attr({ 'aria-valuetext': '0 blue', 'aria-label': 'Blue' });

	$('.ui-slider-handle').keydown((val) => {
		if (val.which === 36) {
			$(val.target).parent().slider('value', $(val.target).parent().slider('option', 'min'));
		} else if (val.which === 35) {
			$(val.target).parent().slider('value', $(val.target).parent().slider('option', 'max'));
		}
	});

	$reload.on('click', () => {
		$sliderRed.slider('value', 0);
		$sliderGreen.slider('value', 0);
		$sliderBlue.slider('value', 0);
		$valred = 0;
		$valblue = 0;
		$valgreen = 0;
		DrawCircles();
		$sliderRed.attr('alt', '0');
		$sliderGreen.attr('alt', '0');
		$sliderBlue.attr('alt', '0');
	});
});
