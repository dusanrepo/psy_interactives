$(document).ready(() => {
	const $perc0 = $('.perc0');
	const $reset = $('#reset');
	const $radios = $('label');

	function percClick() {
		const percId = $(this).attr('id');
		$(`.${percId}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
		$(`.${percId}`).addClass('active').attr('aria-selected', true)
			.siblings('label')
			.removeClass('active')
			.attr('aria-selected', false);
	}

	$('.perc').keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$('.perc').click(percClick);

	$reset.click(() => {
		$radios.removeClass('active');
		$perc0.removeClass('d-none')
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
