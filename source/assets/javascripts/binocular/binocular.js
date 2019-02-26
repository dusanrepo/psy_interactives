$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');

	let stage = 0;

	function activateCompletion() {
		window.postAction({
			id: '25edc4ee-f852-45fd-96d2-d8c4e9e6c5e4',
		});
	}

	function loadStage() {
		$(`.bi${stage}`).addClass('active')
			.attr('aria-selected', true)
			.siblings('label')
			.removeClass('active')
			.attr('aria-selected', false);
		$(`.bi${stage}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
		$(`.bi${stage}`).removeClass('d-none')
			.siblings('.maintext')
			.addClass('d-none');
	}

	function navButtons() {
		if (stage < 1) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		if (stage > 6) {
			activateCompletion();
			$next.addClass('invisible');
		} else {
			$next.removeClass('invisible');
		}
		// stage < 1 ? $previous.addClass('d-none') : $previous.removeClass('d-none');
		// stage > 6 ? $next.addClass('invisible') : $next.removeClass('invisible');
	}

	function stageForward() {
		stage += 1;
		loadStage();
		navButtons();
	}

	$next.click(() => {
		stageForward();
	});

	$previous.click(() => {
		stage += -1;
		loadStage();
		navButtons();
	});

	$(document).keydown((val) => {
		if ((val.which === 32 || val.which === 13) && !$('.previous').is(':focus') && !$('.next').is(':focus')) {
			stageForward();
		}
	});
});
