$(document).ready(() => {
	const $begin = $('.begin');
	const $reverse = $('.reverse');
	const $static = $('.waterfall0');
	const $forward = $('.waterfall1');
	const $backward = $('.waterfall2');
	const $peas = $('.waterfall3');
	const $reset = $('.reset');

	function Begin() {
		$begin.removeClass('btn-primary');
		$begin.addClass('btn-primary');
		$static.addClass('d-none');
		$forward.removeClass('d-none');
		$begin.attr('disabled', true);
		$reverse.attr('disabled', true);

		setTimeout(() => {
			$peas.addClass('d-none');
			setTimeout(() => {
				$peas.removeClass('d-none');
				$forward.addClass('d-none');
				setTimeout(() => {
					$peas.addClass('d-none');
					$static.removeClass('d-none');
					$reverse.attr('disabled', false);
					$begin.attr('disabled', false).removeClass('btn-primary').addClass('btn-primary');
					$reverse.removeClass('d-none');
					$begin.addClass('d-none');
				}, 3000);
			}, 4000);
		}, 9000);
	}

	function Reverse() {
		$reverse.removeClass('btn-primary');
		$reverse.addClass('btn-primary');
		$static.addClass('d-none');
		$backward.removeClass('d-none');
		$begin.attr('disabled', true);
		$reverse.attr('disabled', true);

		setTimeout(() => {
			$peas.addClass('d-none');
			setTimeout(() => {
				$peas.removeClass('d-none');
				$backward.addClass('d-none');
				setTimeout(() => {
					$peas.addClass('d-none');
					$static.removeClass('d-none');
					$begin.attr('disabled', false);
					$reverse.attr('disabled', false).removeClass('btn-primary').addClass('btn-primary');
					$begin.removeClass('d-none');
					$reverse.addClass('d-none');
				}, 3000);
			}, 4000);
		}, 9000);
	}

	$begin.on('click', () => {
		Begin();
	});

	$reverse.on('click', () => {
		Reverse();
	});

	$reset.click(() => {
		window.location.reload();
	});
});
