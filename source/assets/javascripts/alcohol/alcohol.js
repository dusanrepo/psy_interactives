$(document).ready(() => {
	// Students will view a graph and select regions at their discretion.
	// At the beginning, each of the Selectable areas should be highlighted in some way.
	// The second Select for each zone will be made with a next button.
	// Students Select a third time anywhere to reset back to the original.
	// After each zone is completed it should still be selectable but no longer highlighted.

	// Graph is shown
	// Selectable areas are shown
	// Selectable areas are selectable with mouse click, tab, or next?
	// Interacting with a selectable area creates a pop-up

	// Selectable areas:
	// Level of Aggression
	// Expected Alcohol
	// High Alcohol
	// Drink Group

	// Stage 0: Show graph, hightlight all selectable areas, next button
	// Stage 0 part 2: clicking label selects a 'stage' & shows question
	// Stage Any: User has clicked label, highlight only relevant area,
	// Stage Any part 2: user clicks next button to show feedback

	// Order Detailed:
	// - Shown: Graph, Highlighted areas
	// - Action: Click label (show question, show next, hide other highlights)
	// - Action: Click next (show feedback, hide next)
	// - Action: Click anywhere (start over)

	// Order Summarized: Click a label, click next, click anywhere to reset

	// Possible pop-up boxes:
	// jQuery dialog
	// jQuery tooltips
	// Bootstrap 4 - best
	// Popper JS - 2nd best
	// custom

	// Stages & Selectable areas
	// Stage 0: N/A
	// Stage 1: Level of Aggression - show Question on label click, show answer on feedback click
	// Stage 2: Drink Group - ''
	// Stage 3: Expected Alcohol - ''
	// Stage 4: High Alcohol - ''
	const $reset = $('#reset');
	const $poppable = $('.poppable');
	const $showAreaToggle = $('#clickable-toggle');
	const $selectableAreas = $('.highlightable');
	const toggleText = ['Show selectable areas', 'Hide selectable areas'];

	// hover images & areas ------------------
	const $expectedBar = $('.expected-alc-area');
	const $expectedBarImg = $('.expected-alc-hover');
	const $highBar = $('.high-alc-area');
	const $highBarImg = $('.high-alc-hover');
	const $aggArea = $('.agg-area');
	const $aggImg = $('.agg-hover');
	const $aggInit = $('#agg');
	const $drinkGroupArea = $('.drink-group-area');
	const $drinkGroupImg = $('.drink-group-hover');
	const $drinkGroupInit = $('#drink-group');

	let selectedStage; // data-section
	let toggleOn = false;
	let toggleTextIndex = 0;

	$showAreaToggle.on('click', () => {
		toggleOn = !toggleOn;

		// if toggled on, then show hover, else don't
		if (toggleOn) {
			$aggInit.css('display', 'none');
			$aggImg.css('display', 'inherit');
			$drinkGroupInit.css('display', 'none');
			$drinkGroupImg.css('display', 'inherit');
			$expectedBarImg.css('display', 'inherit');
			$highBarImg.css('display', 'inherit');
		} else if (!toggleOn) {
			$aggInit.css('display', 'inherit');
			$aggImg.css('display', 'none');
			$drinkGroupInit.css('display', 'inherit');
			$drinkGroupImg.css('display', 'none');
			$expectedBarImg.css('display', 'none');
			$highBarImg.css('display', 'none');
		}
		toggleTextIndex = toggleOn ? 1 : 0;
		$showAreaToggle.text(toggleText[toggleTextIndex]);
	});

	function highlightSection() {
		//	Hide all but clicked
		$(`.${selectedStage}-area`).siblings('.highlightable').css('border', '0'); // highlight selectable area
	}

	function resetSelection() {
		// hide question
		$poppable.popover('hide');
		// $('.expected-alc-area').popover('hide');
		// $('.drink-group-area').popover('hide');
		// $('.agg-area').popover('hide');
		// $('.high-alc-area').popover('hide');

		selectedStage = null; // reset stage tracking
	}

	function getPopoverContent(selector) {
		return $(selector).html();
	}

	const popoverFeedback = {
		expectedAlcohol: 'For this study, researchers assigned 259 participants to the “expected alcohol” group. This bar’s height represents the amount of punishment, on average, participants in this group delivered to their opponents.',
		lvlAggression: 'The dependent variable was aggression. It was a measured variable because researchers simply observed how much aggression people displayed. They operationalized it by measuring how much shock people delivered to their partners in an online game.',
		drinkingGroup: 'The independent variable was the type of drink each participant was given. It was a manipulated variable because researchers flipped a coin to assign participants to one of the two groups. They operationalized it by giving one group orange juice with a bit of vodka around the rim of the glass (expected alcohol) and giving the other group orange juice with a substantial amount of vodka in it (high alcohol).',
		highAlcohol: 'For this study, researchers assigned 259 participants to the “high alcohol” group. This bar’s height represents the amount of punishment, on average, participants in this group delivered to their opponents.',
	};

	/* eslint-disable */
	/*
		function createPopover(config)
		@param
		config: 
		{
			placement: str, placement of popover ['top','bottom','left','right','auto']
			selector: str, the class name for the element you want to attach popover to
			btnTrigger: str, the class name of the button within the popover (look at markup)
			contentData: function, describe the content of the popover, should contain markup
			feedback: str, holds the feedback to show to the user when the button is pressed
			htmlEnabled: boolean, enables markup parsing
			hasListener: boolean, condition flag to attach eventlistener onto popover
		}
	*/
	/* eslint-enable */
	function createPopover(config) {
		$(config.selector).popover({
			placement: config.placement,
			container: 'body',
			html: config.htmlEnabled,
			// content: config.contentData,
			content: config.feedback,
			trigger: 'manual',
		}).click((e) => {
			// e.stopPropagation();
			// e.preventDefault();
			// if (selectedStage !== null || selectedStage !== undefined) {
			// 	resetSelection();
			// }
			// $(e.target).popover('show');
			selectedStage = $(e.target).data('section');
		});

		if (config.hasListener === false) {
			createPopover({
				placement: config.placement,
				selector: config.selector,
				btnTrigger: config.btnTrigger,
				contentData: config.feedback,
				feedback: config.feedback,
				htmlEnabled: false,
				hasListener: true,
			});
			$(config.btnTrigger).on('click', () => {
				setTimeout(() => {
					$(config.selector).popover('show');
				}, 250);
			});
		}
	}
	createPopover({
		placement: 'top',
		selector: '.expected-alc-area',
		btnTrigger: '.expected-btn',
		contentData: getPopoverContent('#popoverId'),
		feedback: popoverFeedback.expectedAlcohol,
		htmlEnabled: true,
		hasListener: false,
	});

	createPopover({
		placement: 'top',
		selector: '.drink-group-area',
		btnTrigger: '.drinking-btn',
		contentData: getPopoverContent('#popoverId2'),
		feedback: popoverFeedback.drinkingGroup,
		htmlEnabled: true,
		hasListener: false,
	});

	createPopover({
		placement: 'top',
		selector: '.agg-area',
		btnTrigger: '.agg-btn',
		contentData: getPopoverContent('#popoverId3'),
		feedback: popoverFeedback.lvlAggression,
		htmlEnabled: true,
		hasListener: false,
	});

	createPopover({
		placement: 'top',
		selector: '.high-alc-area',
		btnTrigger: '.high-btn',
		contentData: getPopoverContent('#popoverId4'),
		feedback: popoverFeedback.highAlcohol,
		htmlEnabled: true,
		hasListener: false,
	});

	$reset.click(() => {
		window.location.reload();
	});

	$selectableAreas.click((e) => {
		selectedStage = $(e.target).data('section');
		highlightSection(); // hide other sections
	});

	$selectableAreas.keydown((val) => {
		if (val.which === 13) {
			$(val.target).click();
		}
	});

	$expectedBar.on({
		mouseenter() {
			if (!toggleOn) {
				$expectedBarImg.css('display', 'inherit');
			}
		},
		mouseleave() {
			if (!toggleOn) {
				$expectedBarImg.css('display', 'none');
			}
		},
	});

	$highBar.on({
		mouseenter() {
			if (!toggleOn) {
				$highBarImg.css('display', 'inherit');
			}
		},
		mouseleave() {
			if (!toggleOn) {
				$highBarImg.css('display', 'none');
			}
		},
	});

	$aggArea.on({
		mouseenter() {
			if (!toggleOn) {
				$aggInit.css('display', 'none');
				$aggImg.css('display', 'inherit');
			}
		},
		mouseleave() {
			if (!toggleOn) {
				$aggImg.css('display', 'none');
				$aggInit.css('display', 'inherit');
			}
		},
	});

	$drinkGroupArea.on({
		mouseenter() {
			if (!toggleOn) {
				$drinkGroupInit.css('display', 'none');
				$drinkGroupImg.css('display', 'inherit');
			}
		},
		mouseleave() {
			if (!toggleOn) {
				$drinkGroupImg.css('display', 'none');
				$drinkGroupInit.css('display', 'inherit');
			}
		},
	});


	$(() => {
		$('[data-toggle="popover"]').popover();
	});

	function highlightable() {
		$('.agg-area').css('height', $('.agg-hover').height() + 2);
		$('.drink-group-area').css('width', $('.drink-group-hover').width() + 2);
		// $('.expected-alc-area').css('width', $('.expected-alc-hover').width());
		// $('.high-alc-area').css('width', $('.high-alc-hover').width());
	}

	$(window).resize(() => {
		highlightable();
	});

	highlightable();

	// click anywhere close popover
	$(document).on('click', (event) => {
		// checks if mouse click is within the popover
		if (!$(event.target).closest('.popover').length) {
			resetSelection();
		}
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.next:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		$('.tab-able').attr('tabindex', '0');
	});
});
