$(document).ready(() => {
	const $next = $('.next');
	const $previous = $('.previous');
	const $reset = $('.reset');

	const $yArea = $('.y-area');
	const $xArea = $('.x-area');
	const $legend = $('.legend-area');
	const $peak = $('.peak-area');
	const $weekend = $('.weekend-area');
	const $weekday = $('.weekday-area');

	let step = 1;

	const activeTrue = {
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
	};

	const $showAreaToggle = $('.clickable-toggle');
	const toggleText = ['Show selectable areas', 'Hide selectable areas'];
	let toggleOn = false;
	let toggleTextIndex = 0;

	function navButtons() {
		if (step === 1) {
			$previous.addClass('d-none');
		} else {
			$previous.removeClass('d-none');
		}

		if (step > 5) {
			$next.addClass('invisible');
		} else {
			$next.removeClass('invisible');
			$('.btn-primary').removeClass('active');
		}
	}

	function hoverState() {
		$yArea.hover(() => {
			$('.step-0').addClass('d-none');
			$('.step-1').removeClass('d-none');
		}, () => {
			$('.step-1').addClass('d-none');
			$('.step-0').removeClass('d-none');
		});
		$xArea.hover(() => {
			$('.step-0').addClass('d-none');
			$('.step-2').removeClass('d-none');
		}, () => {
			$('.step-2').addClass('d-none');
			$('.step-0').removeClass('d-none');
		});
		$legend.hover(() => {
			$('.step-0').addClass('d-none');
			$('.step-3').removeClass('d-none');
		}, () => {
			$('.step-3').addClass('d-none');
			$('.step-0').removeClass('d-none');
		});
		$peak.hover(() => {
			$('.step-0').addClass('d-none');
			$('.step-4').removeClass('d-none');
		}, () => {
			$('.step-4').addClass('d-none');
			$('.step-0').removeClass('d-none');
		});
		$weekend.hover(() => {
			$('.step-0').addClass('d-none');
			$('.step-5').removeClass('d-none');
			$('svg').css('opacity', 0);
		}, () => {
			$('.step-5').addClass('d-none');
			$('.step-0').removeClass('d-none');
			$('svg').css('opacity', 1);
		});
		$weekday.hover(() => {
			$('.step-0').addClass('d-none');
			$('.step-6').removeClass('d-none');
		}, () => {
			$('.step-6').addClass('d-none');
			$('.step-0').removeClass('d-none');
		});
	}
	hoverState();

	function hoverOff() {
		$yArea.unbind('mouseenter mouseleave');
		$xArea.unbind('mouseenter mouseleave');
		$legend.unbind('mouseenter mouseleave');
		$peak.unbind('mouseenter mouseleave');
		$weekend.unbind('mouseenter mouseleave');
		$weekday.unbind('mouseenter mouseleave');
	}

	function addAttribute() {
		$yArea.attr('data-target', '#incorrect');
		$xArea.attr('data-target', '#incorrect');
		$legend.attr('data-target', '#incorrect');
		$peak.attr('data-target', '#incorrect');
		$('.svg-container').attr('data-target', '#incorrect');
		$weekend.attr('data-target', '#incorrect');
		$weekday.attr('data-target', '#incorrect');
	}

	function removeAttribute() {
		$yArea.removeAttr('data-target', '#incorrect');
		$xArea.removeAttr('data-target', '#incorrect');
		$legend.removeAttr('data-target', '#incorrect');
		$peak.removeAttr('data-target', '#incorrect');
		$('.svg-container').removeAttr('data-target', '#incorrect');
		$weekend.removeAttr('data-target', '#incorrect');
		$weekday.removeAttr('data-target', '#incorrect');
	}

	function tabFocus() {
		$yArea.attr('tabindex', '1');
		$xArea.attr('tabindex', '2');
		$legend.attr('tabindex', '3');
		$peak.attr('tabindex', '4');
		$('.svg-container').attr('tabindex', '5');
		$weekday.attr('tabindex', '6');
	}

	function removeTabFocus() {
		$yArea.attr('tabindex', '-1').blur();
		$xArea.attr('tabindex', '-1').blur();
		$legend.attr('tabindex', '-1').blur();
		$peak.attr('tabindex', '-1').blur();
		$('.svg-container').attr('tabindex', '-1').blur();
		$weekday.attr('tabindex', '-1').blur();
	}

	function loadStep() {
		addAttribute();
		tabFocus();
		$showAreaToggle.prop('disabled', false);
		$(`#step-${step}`).removeClass('d-none')
			.siblings('.step-container')
			.addClass('d-none');
		if (toggleTextIndex === 1) {
			$('.clickable').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
		} else {
			$('.step-0').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
		}
	}

	// Y-Axis
	function yAxis() {
		if ((activeTrue['1'] === true) && step === 1) {
			$('.step-1').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			$('.y-inactive').addClass('d-none');
			$('.y-active').removeClass('d-none');
			$next.removeClass('d-none');
			hoverOff();
			removeAttribute();
			$showAreaToggle.prop('disabled', true);
			toggleTextIndex = 0;
			toggleOn = false;
			$showAreaToggle.text(toggleText[toggleTextIndex]);
			$previous.prop('disabled', false);
			removeTabFocus();
		}
	}

	// X-Axis
	function xAxis() {
		if ((activeTrue['2'] === true) && step === 2) {
			$('.step-2').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			$('.x-inactive').addClass('d-none');
			$('.x-active').removeClass('d-none');
			$next.removeClass('d-none');
			hoverOff();
			removeAttribute();
			$showAreaToggle.prop('disabled', true);
			toggleTextIndex = 0;
			toggleOn = false;
			$showAreaToggle.text(toggleText[toggleTextIndex]);
			$previous.prop('disabled', false);
			removeTabFocus();
		}
	}

	// Legend
	function legend() {
		if ((activeTrue['3'] === true) && step === 3) {
			$('.step-3').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			$('.legend-inactive').addClass('d-none');
			$('.legend-active').removeClass('d-none');
			$next.removeClass('d-none');
			hoverOff();
			removeAttribute();
			$showAreaToggle.prop('disabled', true);
			toggleTextIndex = 0;
			toggleOn = false;
			$showAreaToggle.text(toggleText[toggleTextIndex]);
			$previous.prop('disabled', false);
			removeTabFocus();
		}
	}

	// Peak
	function peak() {
		if ((activeTrue['4'] === true) && step === 4) {
			$('.step-4').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			$('.peak-inactive').addClass('d-none');
			$('.peak-active').removeClass('d-none');
			$next.removeClass('d-none');
			hoverOff();
			removeAttribute();
			$showAreaToggle.prop('disabled', true);
			toggleTextIndex = 0;
			toggleOn = false;
			$showAreaToggle.text(toggleText[toggleTextIndex]);
			$previous.prop('disabled', false);
			removeTabFocus();
		}
	}

	// Weekend
	function weekend() {
		if ((activeTrue['5'] === true) && step === 5) {
			$('.step-5').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			$('.weekend-inactive').addClass('d-none');
			$('.weekend-active').removeClass('d-none');
			$('svg').css('opacity', 0);
			$next.removeClass('d-none');
			hoverOff();
			removeAttribute();
			$showAreaToggle.prop('disabled', true);
			toggleTextIndex = 0;
			toggleOn = false;
			$showAreaToggle.text(toggleText[toggleTextIndex]);
			$previous.prop('disabled', false);
			removeTabFocus();
		}
	}

	// Weekday
	function weekday() {
		if ((activeTrue['6'] === true) && step === 6) {
			$('.step-6').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			$('.weekday-inactive').addClass('d-none');
			$('.weekday-active').removeClass('d-none');
			$next.removeClass('d-none');
			hoverOff();
			removeAttribute();
			$showAreaToggle.prop('disabled', true);
			toggleTextIndex = 0;
			toggleOn = false;
			$showAreaToggle.text(toggleText[toggleTextIndex]);
			$previous.prop('disabled', false);
			removeTabFocus();
		}
	}

	function watchStep() {
		if (step === 1) {
			$yArea.removeAttr('data-target', '#incorrect');
			$yArea.click(() => {
				activeTrue[step] = true;
				yAxis();
			});
		} else if (step === 2) {
			$yArea.attr('data-target', '#incorrect');
			$xArea.removeAttr('data-target', '#incorrect');
			$xArea.click(() => {
				activeTrue[step] = true;
				xAxis();
			});
		} else if (step === 3) {
			$xArea.attr('data-target', '#incorrect');
			$legend.removeAttr('data-target', '#incorrect');
			$legend.click(() => {
				activeTrue[step] = true;
				legend();
			});
		} else if (step === 4) {
			$legend.attr('data-target', '#incorrect');
			$peak.removeAttr('data-target', '#incorrect');
			$peak.click(() => {
				activeTrue[step] = true;
				peak();
			});
		} else if (step === 5) {
			$peak.attr('data-target', '#incorrect');
			$weekend.removeAttr('data-target', '#incorrect');
			$('.svg-container').removeAttr('data-target', '#incorrect');
			$weekend.click(() => {
				activeTrue[step] = true;
				weekend();
			});
			$('.svg-container').click(() => {
				activeTrue[step] = true;
				weekend();
			});
		} else if (step === 6) {
			$weekend.attr('data-target', '#incorrect');
			$weekday.removeAttr('data-target', '#incorrect');
			$weekday.click(() => {
				activeTrue[step] = true;
				weekday();
			});
		}
	}
	watchStep();

	function isTrue() {
		if (step === 1) {
			if (!activeTrue['1']) {
				watchStep();
				hoverState();
			} else {
				hoverOff();
				yAxis();
			}
		} else if (step === 2) {
			if (!activeTrue['2']) {
				watchStep();
				hoverState();
			} else {
				hoverOff();
				xAxis();
			}
		} else if (step === 3) {
			if (!activeTrue['3']) {
				watchStep();
				hoverState();
			} else {
				hoverOff();
				legend();
			}
		} else if (step === 4) {
			if (!activeTrue['4']) {
				watchStep();
				hoverState();
			} else {
				hoverOff();
				peak();
			}
		} else if (step === 5) {
			if (!activeTrue['5']) {
				watchStep();
				hoverState();
			} else {
				hoverOff();
				weekend();
			}
		} else if (step === 6) {
			if (!activeTrue['6']) {
				watchStep();
				hoverState();
			} else {
				hoverOff();
				weekday();
			}
		}
	}

	$showAreaToggle.on('click', () => {
		toggleOn = !toggleOn;
		// if toggled on, then show hover, else don't
		if (toggleOn) {
			$('.clickable').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			// isTrue();
			hoverOff();
			$previous.prop('disabled', true);
			// hoverOff();
		} else if (!toggleOn) {
			$previous.prop('disabled', false);
			$('.step-0').removeClass('d-none')
				.siblings('img')
				.addClass('d-none');
			hoverOff();
			// isTrue();
			hoverState();
		}
		toggleTextIndex = toggleOn ? 1 : 0;
		$showAreaToggle.text(toggleText[toggleTextIndex]);
	});

	$next.click(() => {
		step += 1;
		$next.addClass('d-none');
		loadStep();
		navButtons();
		isTrue();
	});

	$previous.click(() => {
		step += -1;
		loadStep();
		navButtons();
		isTrue();
	});

	$reset.click(() => {
		window.location.reload();
	});

	// let $modalOpener;
	let keyboardUser = false;
	$(document).keydown((val) => {
		// console.log(val.which);

		if (val.which === 9) {
			keyboardUser = true;
			$('.highlightable').css('outline', '');
			// console.log(val.target);
			// $modalOpener = $(val.target);
			$('.svg-container').attr('data-toggle', 'modal');
			$('.svg-container').attr('data-target', '#incorrect');
			$('.svg-container').addClass('weekend-area');
			$('.svg-container').addClass('highlightable');
			addAttribute();
		}
	});

	$(document).mousedown(() => {
		// $('.highlightable').css('outline', '0');
	});

	$(document).click(() => {
		// $('.highlightable').css('outline', '0');
		$('.svg-container').removeAttr('data-toggle', 'modal');
		$('.svg-container').removeAttr('data-target', '#incorrect');
		$('.svg-container').removeClass('weekend-area');
		$('.svg-container').removeClass('highlightable');
	});

	$('.highlightable').keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$('.highlightable').focus((e) => {
		$(e.target).addClass('focus')
			.siblings('a')
			.removeClass('focus');
	});

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	// $(e.target).css('outline', '');

	// $('*').focus((e) => {
	// console.log(e.target);
	// console.log(e.target);
	// $modalOpener = $(e.target);
	// });

	$('.highlightable').on({
		mouseenter() {
			$('.highlightable').css('outline', '0');
		},
		mouseleave() {
			if (keyboardUser) {
				$('.highlightable').css('outline', '');
			}
		},
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
		$('a.y-area').attr('tabindex', '1');
		$('a.x-area').attr('tabindex', '2');
		$('a.legend-area').attr('tabindex', '3');
		$('a.peak-area').attr('tabindex', '4');
		$('a.svg-container').attr('tabindex', '5');
		$('a.weekday-area').attr('tabindex', '6');
		// if ($modalOpener) {
		// 	console.log('focusing');
		// 	console.log($modalOpener);

		// 	$modalOpener.css('outline', '');
		// 	$modalOpener.focus();
		// }
	});
});
