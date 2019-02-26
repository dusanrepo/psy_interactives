$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	let frame = 0;

	function loadFrame() {
		$(`.frame-${frame}`).removeClass('d-none').siblings('.frame').addClass('d-none');
	}

	loadFrame();

	let playClass;
	let soundControllerJS;

	$('.sound-btn').click((e) => {
		playClass = $(e.target).attr('id');
		soundControllerJS = document.getElementById(`${playClass}-audio`);
		soundControllerJS.play();
		$(e.target).addClass('played');
	});

	$next.click(() => {
		$next.addClass('d-none');
		$previous.removeClass('d-none');
		frame += 1;
		loadFrame();
	});

	$previous.click(() => {
		$previous.addClass('d-none');
		$next.removeClass('d-none');
		frame -= 1;
		loadFrame();
	});

	$reset.click(() => {
		frame = 0;
		$('.sound-btn').removeClass('played');
		$previous.addClass('d-none');
		$next.removeClass('d-none');
		loadFrame();
	});

	$(window).resize(() => {
		if ($(window).width() < 430) {
			$('.btn-group-toggle').addClass('btn-group-vertical').removeClass('btn-group');
		} else {
			$('.btn-group-toggle').addClass('btn-group').removeClass('btn-group-vertical');
		}
	});
});
