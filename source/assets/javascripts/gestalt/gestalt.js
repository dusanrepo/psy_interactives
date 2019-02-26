$(document).ready(() => {
	const $gest0 = $('.gest0');
	const $reset = $('#reset');
	const $radios = $('.btn');

	function gestClick() {
		const gestId = $(this).attr('id');
		$(`.${gestId}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
		$(`.${gestId}`).removeClass('d-none')
			.siblings('.maintext')
			.addClass('d-none');
		$(`.${gestId}`).addClass('active').attr('aria-selected', true)
			.siblings('.btn')
			.removeClass('active')
			.attr('aria-selected', false);
	}

	$('.gest').keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$('.gest').click(gestClick);

	$reset.click(() => {
		$radios.removeClass('active');
		$gest0.removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
	});

	const $option = $('.option');
	$option.focus((e) => {
		$(e.target).parent('label').addClass('active');
	});

	$option.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.removeClass('focus')
			.siblings('label')
			.removeClass('active')
			.removeClass('focus');
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
});
