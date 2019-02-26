$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	// const $submit = $('#submit');
	const $reset = $('#reset');

	const $answerBtn = $('.answer-btn');

	let stage = 0;

	const answered = {
		1: false,
		6: false,
		8: false,
	};

	function activateCompletion() {
		window.postAction({
			id: 'f43540f4-710e-467b-a000-e3ea253a358f',
		});
	}

	function setStage() {
		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous.removeClass('d-none');
		if (stage === 0) {
			$previous.addClass('d-none');
		}

		$next.removeClass('d-none');
		if (
			stage === 10 ||
      (stage === 1 && !answered[stage]) ||
      (stage === 6 && !answered[stage]) ||
      (stage === 8 && !answered[stage])
		) {
			$next.addClass('d-none');

			if (stage === 10) {
				console.log('activateCompletion()');
				activateCompletion();
			}
		}
	}

	$next.click(() => {
		stage += 1;
		setStage();
	});

	$previous.click(() => {
		stage -= 1;
		setStage();
	});

	// $submit.click(() => {
	// 	// do stuff
	// });

	$reset.click(() => {
		window.location.reload();
	});

	$answerBtn.click((e) => {
		$(e.target)
			.removeClass('btn-primary')
			.addClass('alert-success')
			.prop('disabled', true)
			.siblings('button')
			.removeClass('btn-primary')
			.addClass('alert-secondary')
			.prop('disabled', true);

		$next.removeClass('d-none');

		$(`.correct-feedback-${stage}`).removeClass('invisible');

		answered[stage] = true;
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	setTimeout(() => {
		$('.link-information').html('For more information on the opioid epidemic, visit <a href="https://www.cdc.gov" target="_blank">the Centers for Disease Control and Prevention</a>.');
	}, 500);
});
