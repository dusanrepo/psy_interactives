$(document).ready(() => {
	const $next = $('#next');
	const $previous = $('#previous');
	const $reset = $('#reset');

	const $stateButtons = $('.state');

	/* eslint-disable */
	// Overview:
	// When each area is selected, “A” and “B” tab selection buttons will appear under the art.
	// The “A” tab will automatically be selected first; art for the “A” tab should be the same as the first panel.
	// Toggling to “B” will show a different version of the art. Both the “A” and “B” tabs have accompanying text feedback.
	// Once both tabs have been activated, a “Next” button will appear; selecting it will show another version of the art with a different region that can be focused/selected.

	// Stages:
	// [1] The first focus/selectable area will be the potential helper, the person looking at their phone closest to the victim (the person laying on the ground).
	// After selecting the area, the art stays the same, but the “Distracted” [A] and “Not distracted” [B] tabs appear, with “Distracted” currently activated.
	// The “Not distracted” tab will show the same image minus the phone in the person’s hand; that person will be noticing the victim.

	// [2] After pressing “Next,” the art changes, containing the second focus/selectable region, which is the crowd.
	// After selecting the area, the art stays the same, but the “In a crowd” [A] and “Alone” [B] tabs appear, with “In a crowd” currently activated.
	// The “Alone” tab will show the same image, but with the crowd gone and the potential helper asking “Hey, are you okay?”

	// [3] After pressing “Next,” the art changes, containing the third focus/selectable region, which will be the crowd again, but this time it’s including people looking at the victim.
	// After selecting the area, the art stays the same, but the “In a crowd” [A] and “Alone” [B] tabs appear, with “In a crowd” currently activated.
	// The “Alone” tab will remove the crowd, showing the potential helper calling for an ambulance.

	// Feedback:
	// [1] In order to help, you must first recognize that something is going on around you.
	// [1A] If you are late or preoccupied, you may not even notice the person lying on the ground.
	// [1B] If you are not in a hurry or preoccupied, you are more likely to notice the person lying on the ground.
	// [2] The next step to helping is realizing the person needs help.
	// [2A] When the situation is ambiguous, you look to others to help interpret if the person needs help. If no one else is taking action, you (and the other people nearby) might assume she is ok. This is referred to as pluralistic ignorance.
	// [2B] If you are alone, you cannot be influenced by other people’s inaction. You are more likely to ask the person if she needs help.
	// [3] Even when we realize someone needs help, we need to decide to take action.
	// [3A] - Many people around a victim can lead to diffusion of responsibility. You may think that someone else has already gone for help or is better qualified to provide help.
	// [3B] - Diffusion of responsibility cannot occur when no one else is around. In this situation, you are more likely to take action to help the victim.

	// Details:
	// No glow, clicks A shows glow & state 1, click B keeps glow & state 2
	// In [1], the focus region should not have the focus effect around it until it is focused/selected. Once selected, the art in [1A] should be same (with the potential helper permanently surrounded by the glow effect), with “Distracted” and “Not distracted” tab toggles below. The “Next” button should either be grayed out at this point or appear once “Distracted” and “Not distracted” have both been toggled.
	// In [2], the focus region should not have the focus effect around it until it is focused/selected. Once selected, the art in [2A] should be same (with the crowd permanently surrounded by the glow effect), with “In a crowd” and “Alone” tab toggles below. The “Next” button should either be grayed out at this point or appear once “In a crowd” and “Alone” have both been toggled.
	// As before, In [3], the focus region should not have the focus effect around it until it is focused/selected. Once selected, the art in [3A] should be same (with the crowd permanently surrounded by the glow effect), with “In a crowd” and “Alone” tab toggles below. Once “In a crowd” and “Alone” have been toggled on this one, the interactive is complete.
	/* eslint-enable */

	// Notes:
	// State 1 = A
	// State 2 = B

	let step = 0;
	let state = '0';

	const stepComplete = {
		0: {
			1: false,
			2: false,
		},
		1: {
			1: false,
			2: false,
		},
		2: {
			1: false,
			2: false,
		},
	};

	// const stepTabTitles = {
	// 	0: {
	// 		0: 'No title',
	// 		1: 'Distracted',
	// 		2: 'Not distracted',
	// 	},
	// 	1: {
	// 		0: 'No title',
	// 		1: 'In a crowd',
	// 		2: 'Alone',
	// 	},
	// 	2: {
	// 		0: 'No title',
	// 		1: 'In a crowd',
	// 		2: 'Alone',
	// 	},
	// };

	function stepCompleteCheck() {
		if (Object.values(stepComplete[step]).indexOf(false) === -1) {
			return true;
		}

		return false;
	}

	function handleNavigation() {
		$next.removeClass('invisible');
		if (step === 2) {
			$next.addClass('invisible');
		}

		$next.prop('disabled', true);
		$next.addClass('disabled');
		if (stepCompleteCheck()) {
			$next.prop('disabled', false);
			$next.removeClass('disabled');
		}

		$previous.removeClass('d-none');
		if (step === 0) {
			$previous.addClass('d-none');
		}
	}

	// function setTitle() {
	// 	$('.tab-title').html(stepTabTitles[step][state]);
	// 	$('.title-area').removeClass('invisible');
	// 	if (state === 0) {
	// 		$('.title-area').addClass('invisible');
	// 	}
	// }

	function setState() {
		// setTitle();
		$('.main-text').addClass('d-none');
		$('.step').addClass('d-none');
		$(`.step-${step}-state-${state}`).removeClass('d-none');
	}

	const $radios = $(':radio');
	function setStep() {
		if (step === 0) {
			$('span.state-1').text('Distracted');
			$('span.state-2').text('Not distracted');
		} else if (step === 1 || step === 2) {
			$('span.state-1').text('In a crowd');
			$('span.state-2').text('Alone');
		}
		state = 0;
		setState();
		handleNavigation();
		$stateButtons.removeClass('active');
		$('label').removeClass('active')
			.removeClass('focus');
		// if (step === 0) {
		// 	$('.main-text').removeClass('d-none');
		// } else {
		// 	$('.main-text').addClass('d-none');
		// }
		$stateButtons.removeClass('active')
			.parent('label')
			.removeClass('active');
		$radios.prop('checked', false);
	}

	$stateButtons.click((e) => {
		$(e.target).parent('label')
			.addClass('active')
			.removeClass('focus')
			.siblings('label')
			.removeClass('active')
			.removeClass('focus');
		// A(1) or B(2)
		// state = 1; // or 2
		state = $(e.target).attr('id').match(/\d+$/)[0]; // eslint-disable-line
		stepComplete[step][state] = true;
		setState();
		handleNavigation();
	});

	$stateButtons.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$next.click(() => {
		step += 1;
		setStep();
	});

	$previous.click(() => {
		step -= 1;
		setStep();
	});

	$reset.click(() => {
		step = 0;
		state = 0;
		$('.step').addClass('d-none');
		Object.keys(stepComplete).forEach((v) => {
			Object.keys(stepComplete[v]).forEach((v2) => {
				stepComplete[v][v2] = false;
			});
		});
		setStep();
		$('.main-text').removeClass('d-none');
	});

	$stateButtons.focus((e) => {
		$(e.target).parent('label')
			.addClass('focus')
			.addClass('active')
			.siblings('label')
			.removeClass('focus')
			.removeClass('active');
	});

	$(document).click(() => {
		$('label').removeClass('focus');
	});

	$(document).keydown((val) => {
		if (val.which === 9) {
			$('label').removeClass('focus');
		}
	});
});
