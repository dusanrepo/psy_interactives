$(document).ready(() => {
	const $sliderBar = $('.slider-range-max');
	const $slideMin = 1;
	const $slideMax = 9;
	const $amount = $('#amount');
	const $reload = $('#reload');


	function ChangeImage(uiVal) {
		$(`#oimage${uiVal}`).removeClass('d-none').siblings('img').addClass('d-none');
	}

	function amountChange() {
		$amount.slider('value', $(this).val());
	}

	$amount.change(amountChange);

	$sliderBar.slider({
		range: 'max',
		min: $slideMin,
		max: $slideMax,
		value: 5,
		slide(event, ui) {
			const uiValue = (100 / 9) * ui.value;
			const uiValueNew = uiValue.toFixed(0);
			$sliderBar.attr('alt', `${uiValueNew}%`);
			$amount.val(ui.value);
			ChangeImage(ui.value);
			$(ui.handle)
				.attr('aria-valuetext', `diagram ${ui.value}`)
				.attr('aria-valuenow', ui.value);
			$amount.val($sliderBar.slider('value'));
		},
	});

	$('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': $slideMin,
		'aria-valuemax': $slideMax,
		'aria-valuenow': 5,
		'aria-orientation': 'horizontal',
	});

	$sliderBar.find('.ui-slider-handle').attr({ 'aria-valuetext': 'diagram 5', 'aria-label': 'Optic' });

	$('.ui-slider-handle').keydown((val) => {
		if (val.which === 36) $(val.target).parent().slider('value', $(val.target).parent().slider('option', 'min'));
		if (val.which === 35) $(val.target).parent().slider('value', $(val.target).parent().slider('option', 'max'));
	});


	$reload.on('click', () => {
		$sliderBar.slider('value', 5);
		$('.image-wrapper > img').removeClass();
		$('.image-wrapper > img').addClass('img-fluid d-none');
		$('#oimage5').removeClass('d-none');
	});
});
