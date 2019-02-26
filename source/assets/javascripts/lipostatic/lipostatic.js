$(document).ready(() => {
	const $base = $('.base');
	const $reset = $('.reset');
	const $radios = $(':radio');

	function optionClick() {
		const optId = $(this).attr('id');
		$(`.${optId}`).addClass('active').siblings('label').removeClass('active');
		$(`.${optId}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
	}

	$('.option').keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$('.option').click(optionClick);

	if ($(window).width() < 380) {
		$('.btn-container').addClass('btn-group-vertical').removeClass('btn-group');
	} else {
		$('.btn-container').addClass('btn-group').removeClass('btn-group-vertical');
	}

	$reset.click(() => {
		$('label').removeClass('active');
		$radios.prop('checked', false);
		$base.removeClass('d-none')
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
		$option.removeClass('focus');
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});
});
