$(document).ready(() => {
	const $option = $('.option');
	const $reset = $('#reset');

	const optionsSelected = {
		1: false,
		2: false,
		3: false,
		4: false,
	};

	function activateCompletion() {
		window.postAction({
			id: '9c687b92-9888-46b5-ac7e-c2ef9f04fb01',
		});
	}

	$reset.click(() => {
		window.location.reload();
	});

	$option.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.siblings('label')
			.removeClass('active');

		const optVal = Number($(e.target).data('value'));
		optionsSelected[optVal] = true;
		// console.log(optionsSelected);


		$('button.stage:visible').click();
		$('.stage').addClass('d-none');
		// $(`img.stage-${optVal}`).css('opacity', '0');
		$(`.stage-${optVal}`).removeClass('d-none');
		// $('.gifffer-play-button:visible').css('opacity', '0');
		// setTimeout(() => {
		// 	$(`img.stage-${optVal}`).css('opacity', '1');
		// 	$('.gifffer-play-button:visible').click();
		// }, 200);

		// $('.stage').addClass('d-none');
		// $(`img.stage-${optVal}`).css('opacity', '0');
		// $(`.stage-${optVal}`).removeClass('d-none');
		// $('.gifffer-play-button:visible').css('opacity', '0.01');

		// console.log('opt click');

		// $(`img.stage-${optVal}`).animate({ opacity: '1' }, 100, () => {
		// 	console.log('done animating');

		// 	setTimeout(() => {
		// 		console.log('click');

		// 		$('.gifffer-play-button:visible').click();
		// 	}, 100);
		// });

		$(`.stage-${optVal}-gif`).css('opacity', '0')
			.removeClass('d-none')
			.siblings()
			.addClass('d-none');

		setTimeout(() => {
			$(`button.stage-${optVal}-gif`).click();
		}, 150);

		$(`button.stage-${optVal}-gif`).animate({ opacity: '1' }, 100);

		if (Object.values(optionsSelected).indexOf(false) === -1) {
			// console.log('activateCompletion');

			activateCompletion();
		}
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.addClass('active')
			.siblings('label')
			.removeClass('focus')
			.removeClass('active');
	});

	$option.focusout(() => {
		$('label').removeClass('focus');
	});

	function Start() {
		Gifffer(); // eslint-disable-line
	}

	window.onload = Start();
});
