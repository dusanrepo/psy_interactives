$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $btnChoice = $('.button-container');
	const $reset = $('.reset');
	const $correlationLabels = $('.correlation-direction');

	let stage = 0;

	function loadStage() {
		$(`.step-${stage}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');
		$(`.step-${stage}`).removeClass('d-none')
			.siblings('.maintext')
			.addClass('d-none');
	}

	function navButtons() {
		if (stage === 0) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		if (stage > 6) {
			$next.addClass('invisible');
			$btnChoice.removeClass('d-none');
		} else {
			$next.removeClass('invisible');
			$btnChoice.addClass('d-none');
			$('.btn-primary').removeClass('active');
		}
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

	function btnAction(display) {
		$(`.dots-${display}`).removeClass('d-none')
			.siblings('.option')
			.addClass('d-none');
	}

	$correlationLabels.click((e) => {
		e.stopPropagation();
		e.preventDefault();
		$(e.target).addClass('active')
			.siblings('label')
			.removeClass('active');
		btnAction($(e.target).attr('id'));
	});

	$correlationLabels.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$reset.click(() => {
		window.location.reload();
		$(this).removeClass('d-none');
	});

	const $option = $('.option');
	$option.focus((e) => {
		$(e.target).parent('label').addClass('active').click();
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
