$(document).ready(() => {
	const $taste1 = $('.taste1');
	const $reset = $('.reset');
	const $btn = $('.tastebtn');

	function buttonClick() {
		const biId = $(this).attr('id');
		$(`.${biId}`).addClass('active').siblings('label').removeClass('active');
		$(`.${biId}`).removeClass('d-none').siblings('img').addClass('d-none');
	}

	$btn.click(buttonClick);
	$reset.click(() => {
		$taste1.removeClass('d-none').siblings('img').addClass('d-none');
		$taste1.addClass('active').siblings('label').removeClass('active');
	});
});
