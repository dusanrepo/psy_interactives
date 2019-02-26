$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('#previous');
	const $reload = $('#reload');
	let stage = 0;
	const imgContainer = $('.img-container');
	let imgContainerHeight;

	function displayStage() {
		if (stage !== 9 && stage !== 0) {
			$(`button.step-${stage}`).click();
		}
		$(`.step-${stage}`).css('opacity', '0')
			.removeClass('d-none')
			.siblings()
			.addClass('d-none');
		$(`.step-${stage}`).animate({ opacity: '1' }, 400);
		// $(`.step-${stage}`).animate({ opacity: '0.5' }, 50);
		// $(`.step-${stage}`).animate({ opacity: '1' }, 150);
		$(`.step-${stage}-btn`).removeClass('d-none')
			.siblings('button')
			.addClass('d-none');
		$(`.step-${stage}-text`).removeClass('d-none')
			.siblings('.maintext')
			.addClass('d-none');
	}

	function stageController() {
		if (stage > 0) {
			$previous.removeClass('d-none');
		} else {
			$previous.addClass('d-none');
		} if (stage === 9) {
			$next.addClass('invisible');
		} else {
			$next.removeClass('invisible');
		}
		displayStage();
	}

	function Start() {
		Gifffer(); // eslint-disable-line
		imgContainerHeight = Math.ceil($('.img-container').height() * 2) / 2;
		imgContainer.height(imgContainerHeight);
	}

	window.onload = Start();

	$(window).resize(() => {
		imgContainer.height('auto');
		imgContainerHeight = Math.ceil($('.img-container').height() * 2) / 2;
		imgContainer.height(imgContainerHeight);
	});

	$next.click(() => {
		imgContainerHeight = Math.ceil($('.img-container').height() * 2) / 2;
		imgContainer.height(imgContainerHeight);
		$(`button.step-${stage}`).click();
		stage += 1;
		stageController();
	});

	$previous.click(() => {
		$(`button.step-${stage}`).click();
		stage -= 1;
		stageController();
	});

	$(document).keydown((val) => {
		if ((val.which === 32 || val.which === 13) && !$('.previous').is(':focus') && !$('#prev').is(':focus') && !$('.next').is(':focus')) {
			$(`button.step-${stage}`).click();
			stage += 1;
			stageController();
		}
	});

	$reload.click(() => {
		stage = 0;
		stageController();
	});
});
