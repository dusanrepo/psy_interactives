$(document).ready(() => {
	// const $next = $('.next');
	const $next2 = $('.next2');
	// const $previous = $('.previous');
	const $previous2 = $('.previous2');
	const $reset = $('.reset');
	const $submit = $('.submit');
	const $buttons = $('.question-btn');
	const $modal = $('.modal');

	// const $feedback = $('.feedback');
	// const $selection = $('.selection');

	let selectionOne = false;
	let selectionTwo = false;
	let btnGroupComplete = false;

	let stage2complete = false;

	// const step = 1;
	let stage = 0;

	let dataValue;
	let dataValue2;
	let dataValue3;
	let dataValue4;

	let question3tracking = 0;

	function showSubmit() {
		if (stage === 0) {
			if (dataValue && dataValue2 != null) {
				$submit.removeClass('d-none');
				$next2.addClass('d-none');
				$previous2.addClass('d-none');
			}
		}
		if (stage === 2) {
			if (dataValue && dataValue2 != null) {
				$submit.removeClass('d-none');
				$next2.addClass('d-none');
				$previous2.addClass('d-none');
			}
		}
		if (stage === 4) {
			$submit.removeClass('d-none');
			$next2.addClass('d-none');
			$previous2.addClass('d-none');
		}
	}

	const $dropdown = $('.item-1');
	const $dropdown2 = $('.item-2');
	const $dropdown3 = $('.item-3');
	const $dropdown4 = $('.item-4');
	$dropdown.click((e) => {
		dataValue = $(e.target).data('value');
		const dataValueText = $(e.target).text();
		$('#dropdownMenuButton1').html(`${dataValueText}`);
		if (dataValue && dataValue2) {
			showSubmit();
		}
	});
	$dropdown2.click((e) => {
		dataValue2 = $(e.target).data('value');
		const dataValueText2 = $(e.target).text();
		$('#dropdownMenuButton2').html(`${dataValueText2}`);
		if (dataValue && dataValue2) {
			showSubmit();
		}
	});
	$dropdown3.click((e) => {
		dataValue3 = $(e.target).data('value');
		const dataValueText3 = $(e.target).text();
		$('#dropdownMenuButton3').html(`${dataValueText3}`);
		if (dataValue3 && dataValue4) {
			showSubmit();
		}
	});
	$dropdown4.click((e) => {
		dataValue4 = $(e.target).data('value');
		const dataValueText4 = $(e.target).text();
		$('#dropdownMenuButton4').html(`${dataValueText4}`);
		if (dataValue3 && dataValue4) {
			showSubmit();
		}
	});

	function questionSelection() {
		// console.log(`questionSelection stage ${stage}`);
		// stuff
		// if (step === 1) {
		if (stage === 0) {
			if (dataValue === 'easy' && dataValue2 === 'board') {
				selectionOne = true;
				if (selectionOne) {
					$('.dropdown-1').addClass('d-none');
					$('.correct-1').removeClass('d-none');
					$('.dropdown-2').addClass('d-none');
					$('.correct-2').removeClass('d-none');

					$('.feedback').html('<p class="correct-feedback-1 alert alert-success"><strong>Correct!</strong> Karen is likely to perform extremely well when she is given an easy problem and asked to do it in front of others. Knowing that everyone is watching will encourage her to make an extra effort.</p>');
					$next2.removeClass('d-none');
					// $(`.img.selection-${step}`).removeClass('d-none');
					$previous2.removeClass('d-none');
					stage = 1;
					$(`.stage-${stage}`).removeClass('d-none');
				}
			}
			if (dataValue === 'easy' && dataValue2 === 'alone') {
				$modal.modal('toggle');
				$('#dropdownMenuButton1').prop('disabled', true);
				$('#dropdownMenuButton2').prop('disabled', true);
				$('.modal-body').html('<strong>Incorrect.</strong> Karen is likely to perform adequately on this problem at her desk, but she is unlikely to do an exceptional job with no pressure to drive her.');
			}
			if (dataValue === 'hard' && dataValue2 === 'board') {
				$modal.modal('toggle');
				$('#dropdownMenuButton1').prop('disabled', true);
				$('#dropdownMenuButton2').prop('disabled', true);
				$('.modal-body').html('<strong>Incorrect.</strong> Karen is likely to do poorly in this situation. The difficult problem coupled with the pressure of the class watching will likely reduce Karen’s performance.');
			}
			if (dataValue === 'hard' && dataValue2 === 'alone') {
				$modal.modal('toggle');
				$('#dropdownMenuButton1').prop('disabled', true);
				$('#dropdownMenuButton2').prop('disabled', true);
				$('.modal-body').html('<strong>Incorrect.</strong> Karen is likely to perform adequately on the difficult problem at her desk, but she is unlikely to do an exceptional job with no pressure to drive her.');
			}
		}
		// if (step === 2) {
		if (stage === 2) {
			// more stuff
			// console.log('step 2');
			// console.log(`dataValue3 ${dataValue3}`);
			// console.log(`dataValue4 ${dataValue4}`);

			if (dataValue3 === 'easy' && dataValue4 === 'group') {
				selectionTwo = true;
				stage2complete = true;
				if (selectionTwo) {
					$('.dropdown-3').addClass('d-none');
					$('.correct-3').removeClass('d-none');
					$('.dropdown-4').addClass('d-none');
					$('.correct-4').removeClass('d-none');

					$('.feedback').removeClass('d-none');
					$('.feedback').html('<p class="correct-feedback-1 alert alert-success"><strong>Correct!</strong> When working on an easy problem with her classmates, Karen is likely to give only minimal effort, resulting in social loafing.</p>');
					$next2.removeClass('d-none');
					$previous2.removeClass('d-none');
					// $(`.img.selection-${step}`).removeClass('d-none');
					stage = 3;
					$(`.stage-${stage}`).removeClass('d-none');
				}
			}
			if (dataValue3 === 'easy' && dataValue4 === 'alone') {
				$modal.modal('toggle');
				$('#dropdownMenuButton3').prop('disabled', true);
				$('#dropdownMenuButton4').prop('disabled', true);
				$('.modal-body').html('<strong>Incorrect.</strong> When working on an easy problem alone, Karen will likely give a moderate effort.');
			}
			if (dataValue3 === 'hard' && dataValue4 === 'group') {
				$modal.modal('toggle');
				$('#dropdownMenuButton3').prop('disabled', true);
				$('#dropdownMenuButton4').prop('disabled', true);
				$('.modal-body').html('<strong>Incorrect.</strong> When working on a difficult problem with her classmates, Karen is likely to make an extra effort to help the group succeed.');
			}
			if (dataValue3 === 'hard' && dataValue4 === 'alone') {
				$modal.modal('toggle');
				$('#dropdownMenuButton3').prop('disabled', true);
				$('#dropdownMenuButton4').prop('disabled', true);
				$('.modal-body').html('<strong>Incorrect.</strong> When working on a difficult problem alone, Karen is likely to make a moderate effort to complete her work.');
			}
		}
	}

	let activeCount;
	let correctCount;
	let btnGroupCompleteWrong = false;

	function question3Selection() {
		let correctAnswer = false;

		if ($('.btn-1').hasClass('active') || $('.btn-4').hasClass('active') || $('.btn-6').hasClass('active')) { // If any of them are correct
			if ($('.btn-1').hasClass('active')) {
				$('.btn-1')
					.removeClass('btn-primary')
					.removeClass('active')
					.addClass('btn-success')
					.prop('disabled', true);
				correctCount = $('.btn-success').length;
				correctAnswer = true;
			}
			if ($('.btn-4').hasClass('active')) {
				$('.btn-4')
					.removeClass('btn-primary')
					.removeClass('active')
					.addClass('btn-success')
					.prop('disabled', true);
				correctCount = $('.btn-success').length;
				correctAnswer = true;
			}
			if ($('.btn-6').hasClass('active')) {
				$('.btn-6')
					.removeClass('btn-primary')
					.removeClass('active')
					.addClass('btn-success')
					.prop('disabled', true);
				correctCount = $('.btn-success').length;
				correctAnswer = true;
			}
		}

		// If all 3 correct
		if (correctCount === 3) {
			btnGroupComplete = true;
			$('.feedback').removeClass('d-none');
			$('.feedback').html('<p class="correct-feedback-1 alert alert-success"><strong>Correct!</strong> Social loafing can be minimized by having groups tackle challenging or personally interesting tasks and by holding individual group members accountable for their work.</p>');
			$previous2.removeClass('d-none');
			$buttons.prop('disabled', true);
		} else if (question3tracking === 3 && correctCount <= 2) { // three tries
			btnGroupCompleteWrong = true;
			$('.btn-1').removeClass('btn-primary')
				.addClass('btn-success');
			$('.btn-4').removeClass('btn-primary')
				.addClass('btn-success');
			$('.btn-6').removeClass('btn-primary')
				.addClass('btn-success');
			correctCount = $('.btn-success').length;
			$('.feedback').html('');
			$buttons.prop('disabled', true)
				.removeClass('active');
			$previous2.removeClass('d-none');
			$('.try-again').html('Close');
			$('.modal-body').html('<strong>Incorrect.</strong> The correct answers are displayed below.');
			$modal.modal('show');
			// show correct feedback without "Correct!" TODO
			$('.feedback').removeClass('d-none');
			$('.feedback').html('<p class="correct-feedback-1 alert alert-success">Social loafing can be minimized by having groups tackle challenging or personally interesting tasks and by holding individual group members accountable for their work.</p>');
			// highlight btn-1, 4, 6
		} else if (correctCount < 3 && correctAnswer) { // less than 3 are correct, 1+ this round
			$('.modal-body').html('You’re on the right track. Try again.');
			$previous2.addClass('d-none');
			correctAnswer = false;
			$modal.modal('show');
		} else { // none are correct
			$previous2.addClass('d-none');
			$('.modal-body').html('<strong>Incorrect.</strong> Try again.');
			$modal.modal('show');
		}
	}

	function completedSelection() {
		// stuff
		// if (step === 1 && selectionOne) {
		// console.log('completedSelection');
		// console.log(stage);

		if (stage === 1) {
			$('.feedback').removeClass('d-none');
			$('.feedback').html('<p class="correct-feedback-1 alert alert-success"><strong>Correct!</strong> Karen is likely to perform extremely well when she is given an easy problem and asked to do it in front of others. Knowing that everyone is watching will encourage her to make an extra effort.</p>');
			$next2.removeClass('d-none');
			// $previous2.removeClass('d-none');
			$('.img.selection-1').removeClass('d-none');
		}
		// if (step === 2 && selectionTwo) {
		if (stage === 3) {
			$('.feedback').removeClass('d-none');
			$('.feedback').html('<p class="correct-feedback-1 alert alert-success"><strong>Correct!</strong> When working on an easy problem with her classmates, Karen is likely to give only minimal effort, resulting in social loafing.</p>');
			$next2.removeClass('d-none');
			// $previous2.removeClass('d-none');
			$('.img.selection-2').removeClass('d-none');
		}
		// if (step === 3 && btnGroupComplete) {
		if (stage === 4 && btnGroupComplete) {
			$('.feedback').html('<p class="correct-feedback-1 alert alert-success"><strong>Correct!</strong> Social loafing can be minimized by having groups tackle challenging or personally interesting tasks and by holding individual group members accountable for their work.</p>');
			$previous2.removeClass('d-none');
			// $previous2.removeClass('d-none');
		}
		// if (step === 3 && btnGroupCompleteWrong) {
		if (stage === 4 && btnGroupCompleteWrong) {
			$('.feedback').html('<p class="correct-feedback-1 alert alert-success">Social loafing can be minimized by having groups tackle challenging or personally interesting tasks and by holding individual group members accountable for their work.</p>');
			$previous2.removeClass('d-none');
			// $previous2.removeClass('d-none');
		}
	}

	// function showStep() {
	// 	$submit.addClass('d-none');
	// 	$selection.addClass('d-none');
	// 	$next2.addClass('d-none');
	// 	$('.main-text').removeClass('d-none');
	// 	$('.main-text-3').addClass('d-none');
	// 	$previous2.removeClass('d-none');

	// 	$('.selection').addClass('d-none');
	// 	$(`.selection-${step}`).removeClass('d-none');

	// 	$(`.img.selection-${step}`).addClass('d-none');
	// 	$feedback.html('');
	// 	if (step === 1) {
	// 		$previous2.addClass('d-none');
	// 	}
	// 	if (step === 3) {
	// 		$('.main-text').addClass('d-none');
	// 		$('.main-text-3').removeClass('d-none');
	// 		$next2.addClass('d-none');
	// 		$previous2.removeClass('d-none');
	// 	}
	// 	completedSelection();
	// }

	// 3 - count if the count is greated then 0 then the user can keep selecting

	$buttons.click((e) => {
		// $(e.target).addClass('active');
		activeCount = $('.active').length;
		correctCount = $('.btn-success').length;
		if ((correctCount + activeCount) < 3) {
			$(e.target).toggleClass('active');
			$submit.addClass('d-none');
		} else {
			$(e.target).removeClass('active');
		}

		if ($buttons.hasClass('active')) {
			showSubmit();
		}
	});

	$submit.click(() => {
		$submit.addClass('d-none');
		questionSelection();
		if (stage === 4) {
			question3tracking += 1;
			question3Selection();
		}
	});

	// $next.click(() => {
	// 	step += 1;
	// 	showStep();
	// });
	// let stage = 0;

	function setStage() {
		// console.log(`showing .stage-${stage}`);

		$('.stage').addClass('d-none');
		$(`.stage-${stage}`).removeClass('d-none');

		$previous2.removeClass('d-none');
		if (stage === 0) {
			$previous2.addClass('d-none');
		}

		$next2.removeClass('d-none');
		if (stage === 4 || (stage === 2 && !stage2complete)) {
			$next2.addClass('d-none');
		}

		if (stage === 1 || stage === 3) {
			// console.log('show feedback');
			completedSelection();
		} else {
			// console.log('hide feedback');
			$('.feedback').addClass('d-none');
		}
	}

	$next2.click(() => {
		stage += 1;
		setStage();
	});

	$previous2.click(() => {
		stage -= 1;
		setStage();
	});

	// $previous.click(() => {
	// 	step -= 1;
	// 	$next2.removeClass('d-none');
	// 	showStep();
	// });

	$('.dropdown-toggle').dropdown({
		boundary: 'window',
	});

	$('.dropdown').on('shown.bs.dropdown', () => {
		$('.dropdown-item:visible:first').focus();
	});

	$reset.click(() => {
		window.location.reload();
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
		$('.modal-body').html('');
		$('#dropdownMenuButton1').prop('disabled', false);
		$('#dropdownMenuButton2').prop('disabled', false);
		$('#dropdownMenuButton3').prop('disabled', false);
		$('#dropdownMenuButton4').prop('disabled', false);
		$buttons.removeClass('active');
	});

	$('.try-again').click(() => {
		$modal.modal('hide');
	});
});
