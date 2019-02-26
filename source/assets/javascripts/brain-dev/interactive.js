$(document).ready(() => {
	const sliderBar = $('.slider-range-max');
	const amount = $('.amount2');
	const amountDisplay = $('p.amount');
	const slideMin = 4;
	const slideMax = 21;
	const $reset = $('#reset');
	$('#image1').removeClass('hide');

	const imageKeys = {
		4: 1,
		5: 2,
		6: 3,
		7: 4,
		8: 5,
		9: 6,
		10: 7,
		11: 8,
		12: 9,
		13: 10,
		14: 11,
		15: 12,
		16: 13,
		17: 13,
		18: 14,
		19: 14,
		20: 14,
		21: 15,
	};

	function ChangeImage(uiVal) {
		$(`#image${imageKeys[uiVal]}`).removeClass('hide').siblings('.row').addClass('hide');
	}

	function userFriendlyDesc(age) {
		return `The human brain at ${age} years of age`;
	}

	function userFriendlyAmount(age) {
		return `${age} years of age`;
	}

	sliderBar.slider({
		range: 'max',
		min: slideMin,
		max: slideMax,
		value: 1,
		slide(event, ui) {
			const ageDesc = userFriendlyDesc(ui.value);
			const ageDisplay = userFriendlyAmount(ui.value);
			$(ui.handle)
				.attr('aria-valuetext', ageDesc)
				.attr('aria-valuenow', ui.value);
			$(amountDisplay).html(ageDisplay);
			amount.val(ageDesc);
			ChangeImage(ui.value);
			amount.val(sliderBar.slider('value'));
		},
	});

	$('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': slideMin,
		'aria-valuemax': slideMax,
		'aria-valuenow': slideMin,
		'aria-orientation': 'horizontal',
	});

	sliderBar.find('.ui-slider-handle').attr({ 'aria-valuetext': 'The human brain at 4 years of age', 'aria-label': 'Brain development' });

	$('.ui-slider-handle').keydown((val) => {
		if (val.which === 36) amount.val(slideMin);
		if (val.which === 35) amount.val(slideMax);
	});

	amount.change(() => {
		amount.slider('value', amount.val());
	});

	function resetSlider() {
		sliderBar.slider('value', sliderBar.slider('option', 'min'));
		amount.val(slideMin);
		$(amountDisplay).html(userFriendlyAmount(slideMin));
		ChangeImage(amount.val());
	}

	$reset.on('click', () => {
		resetSlider();
	});
});
