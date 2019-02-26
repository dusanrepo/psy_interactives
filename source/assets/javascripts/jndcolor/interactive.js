$(document).ready(() => {
	const colorDemonstration = $('.color-demonstration');
	const colorActivators = [$('#color-1'), $('#color-2'), $('#color-9'), $('#color-10')];
	const colorIntensities = ['hsla(146, 100%, 50%, .1)', 'hsla(146, 100%, 50%, .2)', 'hsla(146, 100%, 50%, .9)', 'hsla(146, 100%, 50%, 1)'];
	const colorCircle = $('.colorcircle');

	const soundDemonstration = $('.sound-demonstration');
	const soundActivators = [$('#volume-1'), $('#volume-2'), $('#volume-9'), $('#volume-10')];
	const soundIntensities = [0.1, 0.2, 0.9, 1];
	const soundController = $('audio');
	const soundControllerJS = document.getElementById('audio');
	const timeCircle = $('#timeCircle');

	const playSection = $('.play-section');
	const playHoverImg = $('.playHoverImg');
	const pauseHoverImg = $('.pauseHoverImg');

	const previous = $('#previous');
	const next = $('#next');
	const reload = $('#reload');

	const buttons = $('label');

	function setDataPause(playingActivator) {
		playingActivator.siblings('.btn-primary')
			.data('pause', false)
			.attr('data-pause', false)
			.find('.playImg')
			.removeClass('d-none')
			.parent()
			.find('.pauseImg')
			.addClass('d-none');
	}

	function jQueryWorker(i) {
		soundActivators[i].siblings('.btn-primary')
			.removeClass('active');
		setDataPause(soundActivators[i]);
	}

	function soundReset() {
		soundControllerJS.pause();
		soundControllerJS.currentTime = 0;
		soundActivators.forEach((soundActivator, i) => {
			setDataPause(soundActivators[i]);
			jQueryWorker(i);
		});
	}

	function flipActivator(i) {
		soundActivators[i].addClass('active');
		soundActivators[i].find('.playImg')
			.toggleClass('d-none');
		soundActivators[i].find('.pauseImg')
			.toggleClass('d-none');
	}

	function audioAction() {
		const runStatus = timeCircle.data('pause');
		timeCircle.data('pause', !runStatus)
			.attr('data-pause', !runStatus);
		if (runStatus === true) {
			soundControllerJS.pause();
		} else {
			soundControllerJS.play();
		}
		const selectorIndex = soundIntensities.indexOf(soundController.prop('volume'));
		soundActivators[selectorIndex].addClass('active');
	}

	colorActivators.forEach((colorActivator, i) => {
		colorActivator.click(() => {
			colorActivator.addClass('active')
				.siblings('.btn-primary')
				.removeClass('active');
			colorCircle.css('background-color', colorIntensities[i]);
		});
	});

	function audioWorker(i) {
		setDataPause(soundActivators[i]);
		flipActivator(i);
		jQueryWorker(i);
	}

	soundActivators.forEach((soundActivator, i) => {
		soundActivator.click(() => {
			audioWorker(i);
			soundController.prop('volume', soundIntensities[i]);
		});
	});

	soundController.on('timeupdate', () => {
		if (soundControllerJS.currentTime > 18) {
			soundControllerJS.currentTime = 1;
		}
	});

	next.on('click', () => {
		colorDemonstration.addClass('d-none');
		soundDemonstration.removeClass('d-none');
		buttons.removeClass('active');
		next.addClass('active');
		previous.removeClass('active');
		colorCircle.css('background-color', 'hsla(146, 100%, 50%, .5)');
	});

	previous.on('click', () => {
		colorDemonstration.removeClass('d-none');
		soundDemonstration.addClass('d-none');
		next.removeClass('active');
		previous.addClass('active');
		soundReset();
	});

	function interactiveReset() {
		colorDemonstration.removeClass('d-none');
		colorCircle.css('background-color', 'hsla(146, 100%, 50%, .5)');
		soundDemonstration.addClass('d-none');
		buttons.removeClass('active');
		audioAction();
		soundReset();
		timeCircle.find('.playImg')
			.removeClass('d-none');
		timeCircle.find('.pauseImg')
			.addClass('d-none');
		timeCircle.data('pause', false);
	}

	reload.on('click', () => {
		buttons.removeClass('active').parent().removeClass('active');
		next.prop('checked', false);
		previous.prop('checked', true);
		interactiveReset();
		next.removeClass('active');
		previous.addClass('active');
		soundController.prop('volume', 1);
	});

	playSection.on({
		mouseenter() {
			playSection.css('outline', '0');
			if (!timeCircle.data('pause')) {
				playHoverImg.removeClass('d-none');
			} else {
				pauseHoverImg.removeClass('d-none');
			}
		},
		mouseleave() {
			playSection.css('outline', '0');
			if (!timeCircle.data('pause')) {
				playHoverImg.addClass('d-none');
			} else {
				pauseHoverImg.addClass('d-none');
			}
		},
	});

	playSection.on('click', () => {
		playSection.css('outline', '0');
		audioAction();
		timeCircle.find('.playImg')
			.toggleClass('d-none');
		timeCircle.find('.playHoverImg')
			.toggleClass('d-none');
		timeCircle.find('.pauseImg')
			.toggleClass('d-none');
		timeCircle.find('.pauseHoverImg')
			.toggleClass('d-none');
	});

	$(playSection).keydown((val) => {
		if (val.which === 13) {
			audioAction();
			timeCircle.find('.playImg')
				.toggleClass('d-none');
			timeCircle.find('.playHoverImg')
				.addClass('d-none');
			timeCircle.find('.pauseImg')
				.toggleClass('d-none');
			timeCircle.find('.pauseHoverImg')
				.addClass('d-none');
		}
	});

	$(document).keydown((val) => {
		if (val.which === 9) {
			playSection.removeAttr('style');
		}
	});

	const $option = $('.focusable');
	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$(document).keydown((val) => {
		if (val.which === 9) {
			$option.removeClass('focus');
		}
	});

	$option.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.siblings('label')
			.removeClass('focus');
	});
});
