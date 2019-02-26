$(document).ready(() => {
	const $option1 = $('.option1');
	const $defaultActive = $('.default-active');
	const $reset = $('#reset');
	const $radios = $(':radio');

	const optionsSelected = {
		option2: false,
		option3: false,
		option4: false,
		option5: false,
	};

	function activateCompletion() {
		window.postAction({
			id: 'f23d9aec-176d-4a5b-9a1b-d45e920ede4a',
		});
	}

	function optionClick() {
		const optId = $(this).attr('id');
		optionsSelected[optId] = true;

		$(`.${optId}`).addClass('active')
			.siblings('label')
			.removeClass('active');

		$(`.${optId}`).removeClass('d-none')
			.siblings('img')
			.addClass('d-none');

		$(`.${optId}`).removeClass('d-none')
			.siblings('p')
			.addClass('d-none');

		$(`.${optId}`).attr('aria-selected', true).siblings('label').attr('aria-selected', false);

		if (Object.values(optionsSelected).indexOf(false) === -1) {
			activateCompletion();
		}
	}

	$('.option').click(optionClick);

	$reset.click(() => {
		$('label').removeClass('active').attr('aria-selected', false);
		$radios.prop('checked', false);
		$defaultActive.addClass('active');

		$option1.removeClass('d-none')
			.siblings('img')
			.addClass('d-none');

		$option1.removeClass('d-none')
			.siblings('p')
			.addClass('d-none');
	});

	const $option = $('.option');
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
