$(document).ready(() => {
	const $fullBtn = $('.full');
	const $squareBtn = $('.squares');
	const $reset = $('.reset');

	const $fullImg = $('.stage1');
	const $squareImg = $('.stage2');

	function FullImage() {
		$fullImg.removeClass('d-none');
		$squareImg.addClass('d-none');
		$fullBtn.addClass('active');
		$squareBtn.removeClass('active');
	}

	function SquareImage() {
		$squareImg.removeClass('d-none');
		$fullImg.addClass('d-none');
		$squareBtn.addClass('active');
		$fullBtn.removeClass('active');
	}

	function Reset() {
		$fullImg.removeClass('d-none');
		$squareImg.addClass('d-none');
		$fullBtn.addClass('active');
		$squareBtn.removeClass('active');
	}

	$fullBtn.on('click', () => {
		FullImage();
	});

	$squareBtn.on('click', () => {
		SquareImage();
	});

	$reset.on('click', () => {
		Reset();
	});

	const $option = $('.option');
	$option.focus((e) => {
		$(e.target).parent('label').addClass('active');
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
