$(document).ready(() => {
	const $afterImage = $('.afterimage');
	const $start = $('.start');
	const $reset = $('.reset');

	setTimeout(() => {
		$afterImage.addClass('d-none');
		$start.attr('disabled', false);
	}, 15000);

	$start.on('click', () => {
		$start.addClass('d-none');
		$afterImage.removeClass('d-none');
	});

	$reset.click(() => {
		window.location.reload();
		$start.removeClass('d-none');
	});
});
