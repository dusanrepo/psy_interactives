$(document).ready(() => {
	const $receptor0 = $('.receptor0');
	const $reset = $('.reset');
	const $btn = $('.receptorbtn');

	function buttonClick() {
		const receptorId = $(this).attr('id');
		$(`label.${receptorId}`).addClass('active')
			.attr('aria-selected', true)
			.siblings('label')
			.removeClass('active')
			.attr('aria-selected', false);
		$(`.${receptorId}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
	}

	$btn.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$btn.click(buttonClick);

	$reset.click(() => {
		$('label').removeClass('active')
			.attr('aria-selected', false);
		$receptor0.removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
	});

	const $option = $('.receptorbtn');
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
