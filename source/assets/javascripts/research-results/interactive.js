$(document).ready(() => {
	const $next = $('.next');
	const $reset = $('.reset');

	const sliderBar = $('.slider-range-max');
	const slideMin = 1;
	const slideMax = 5;

	let currentValue;
	let stage = 0;

	function showFeedback() {
		$('.start-text-container').addClass('d-none');
		$(`.feedback${currentValue}`).removeClass('d-none')
			.siblings('.feedback')
			.addClass('d-none');
	}

	function uiSlider() {
		sliderBar.slider({
			range: 'max',
			min: slideMin,
			max: slideMax,
			value: 1,
		}).each(() => {
			const options = ['3.94&ndash;4.12', '3.80&ndash;4.20', '3.60&ndash;4.40', '3.00&ndash;5.00', '1.00&ndash;7.00'];
			// Get the number of possible values
			const vals = options.length;
			// Position the labels
			for (let i = 0; i < vals; i += 1) {
				// Create a new element and position it with percentages
				const el = $(`<label><strong>${options[i]}</strong></label>`).css('left', `${(i / (vals - 1)) * 100}%`); // Desktop: left 0, 25, 50, 75, 100
				// Add the element inside #slider
				sliderBar.append(el);
			}
		});
		if (stage === 0) {
			sliderBar.slider({
				slide(event, ui) {
					$(`.step-${ui.value}`).removeClass('d-none')
						.siblings('.img')
						.addClass('d-none');
					if (ui.value === 5) {
						$next.removeClass('d-none');
					}
					currentValue = ui.value;
				},
			});
		} else if (stage === 1) {
			$('.start-text-container').addClass('d-none');
			$('.feedback1').removeClass('d-none');
			$('.step-1').removeClass('d-none')
				.siblings('.img')
				.addClass('d-none');
			sliderBar.slider({
				slide(event, ui) {
					$(`.step-${ui.value}`).removeClass('d-none')
						.siblings('.img')
						.addClass('d-none');
					currentValue = ui.value;
					showFeedback();
				},
			});
		}
	}

	uiSlider();

	$next.click(() => {
		stage += 1;
		$next.addClass('d-none');
		uiSlider();
	});

	$reset.click(() => {
		window.location.reload();
	});
});
