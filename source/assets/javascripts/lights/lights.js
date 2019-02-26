$(document).ready(() => {
	const $stage1 = $('#stage1');
	const $stage2 = $('#stage2');
	const $option1 = $('#option1');
	const $option2 = $('#option2');
	const $reload = $('#reload');
	const $interactiveWrapper = $('.interactive-wrapper');
	const $option = $('.option');

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});

	$option1.on('click', () => {
		$stage1.removeClass('d-none');
		$stage2.addClass('d-none');
		$interactiveWrapper.removeClass('interactive-wrapper-dark');
		$('.option2').removeClass('active');
		$('.option1').addClass('active');
	});

	$option2.on('click', () => {
		$stage2.removeClass('d-none');
		$stage1.addClass('d-none');
		$interactiveWrapper.addClass('interactive-wrapper-dark');
		$('.option1').removeClass('active');
		$('.option2').addClass('active');
	});

	$reload.on('click', () => {
		$option1.trigger('click');
	});
});
