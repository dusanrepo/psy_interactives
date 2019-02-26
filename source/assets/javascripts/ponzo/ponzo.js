$(document).ready(() => {
	const $reset = $('#reset');

	const $option = $('.option');
	const $option1 = $('.option1');

	function optionClick() {
		const optId = $(this).attr('id');
		$(`.${optId}`).removeClass('d-none').siblings('img').addClass('d-none');
	}

	$('.option').click(optionClick);

	function OptionReset() {
		$option1.addClass('active').siblings().removeClass('active');
	}

	$option.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.siblings('label')
			.removeClass('active');
		optionClick();
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
		$option1.removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
		OptionReset();
	});
});
