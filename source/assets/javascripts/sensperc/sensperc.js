$(document).ready(() => {
	const $brown = $('.brown');
	const $steamy = $('.steamy');
	const $bitter = $('.bitter');
	const $acidic = $('.acidic');

	const $label = $('label');

	const $option1 = $('.option1');
	const $option2 = $('.option2');
	const $option3 = $('.option3');
	const $option4 = $('.option4');
	const $reload = $('.reset');

	const $senseLabels = $('.sense-label');

	function option0() {
		$brown.toggleClass('d-none');
		$option1.toggleClass('active');
		$label.removeClass('tab-focus');
	}

	function option1() {
		$bitter.toggleClass('d-none');
		$option2.toggleClass('active');
		$label.removeClass('tab-focus');
	}

	function option2() {
		$acidic.toggleClass('d-none');
		$option3.toggleClass('active');
		$label.removeClass('tab-focus');
	}

	function option3() {
		$steamy.toggleClass('d-none');
		$option4.toggleClass('active');
		$label.removeClass('tab-focus');
	}

	function reload() {
		$senseLabels.removeClass('active');
		$brown.addClass('d-none');
		$steamy.addClass('d-none');
		$bitter.addClass('d-none');
		$acidic.addClass('d-none');
	}

	$senseLabels.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$option1.on('click', (e) => {
		e.stopPropagation();
		e.preventDefault();
		option0();
	});

	$option2.on('click', (e) => {
		e.stopPropagation();
		e.preventDefault();
		option1();
	});

	$option3.on('click', (e) => {
		e.stopPropagation();
		e.preventDefault();
		option2();
	});

	$option4.on('click', (e) => {
		e.stopPropagation();
		e.preventDefault();
		option3();
	});

	$reload.on('click', () => {
		reload();
	});

	$('input').focus((e) => {
		$(e.target).parent('label')
			.addClass('tab-focus').siblings('label')
			.removeClass('tab-focus');
	});
});
