$(document).ready(() => {
	const $nose1 = $('.nose1');
	const $reset = $('.reset');
	const $btn = $('.nosebtn');

	function buttonClick() {
		const biId = $(this).attr('id');
		$(`.${biId}`).addClass('active').siblings('label').removeClass('active');
		$(`.${biId}`).removeClass('d-none').siblings('img').addClass('d-none');
	}

	$btn.click(buttonClick);

	$reset.click(() => {
		$nose1.removeClass('d-none').siblings('img').addClass('d-none');
		$nose1.addClass('active').siblings('label').removeClass('active');
	});
});
