$(document).ready(() => {
	const imageList = [];
	const imageObject = [];
	let keyStep = -1;
	let imagenumber;
	let timer;

	let doneone = 0;
	let step = 0;

	const c = document.getElementById('animationcanvas');
	const ctx = c.getContext('2d');

	function leftToRight() {
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		imagenumber += 1;

		if (imagenumber === 20) {
			clearInterval(timer);
			imagenumber = 1;
			$('#tool1').removeClass('hide');
			$('.next').prop('disabled', false);
			step = 1;

			$('#next').html('<button class="next btn btn-primary" onclick="nextClickNew()" alt="Next step">Next step</button>');
		}

		if (imagenumber === 34) {
			clearInterval(timer);
			imagenumber = 21;
			$('#tool3').removeClass('hide');
			$('.next').addClass('hide');
			if (doneone === 0) {
				$('.nextimp').removeClass('hide');
				$('.nextpos').addClass('hide');
				doneone = 1;
			} else {
				$('.nextimp').addClass('hide');
				$('.next').addClass('hide');
				$('.nextpos').addClass('hide');
				$('.combined').removeClass('hide');
			}
		}

		if (imagenumber === 54) {
			clearInterval(timer);
			imagenumber = 34;
			$('#tool4').removeClass('hide');
			$('.next').addClass('hide');

			if (doneone === 0) {
				$('.nextpos').removeClass('hide');
				$('.nextimp').addClass('hide');
				doneone = 1;
			} else {
				$('.nextimp').addClass('hide');
				$('.next').addClass('hide');
				$('.nextpos').addClass('hide');
				$('.combined').removeClass('hide');
			}
		}
	}

	function preloadList() {
		for (let i = 1; i < 20; i += 1) {
			imageList[i] = `/assets/images/violation/stages/a1f${i}.png`;
		}

		for (let i = 1; i < 15; i += 1) {
			imageList[i + 19] = `/assets/images/violation/stages/a2f${i}.png`;
		}

		for (let i = 1; i < 21; i += 1) {
			imageList[i + 33] = `/assets/images/violation/stages/a3f${i}.png`;
		}
	}

	function preloadMyImages() {
		for (let i = 1; i < imageList.length; i += 1) {
			imageObject[i] = new Image();
			imageObject[i].src = imageList[i];
		}
	}

	preloadList();
	preloadMyImages();

	c.width = 1000;
	c.height = 400;

	c.style.width = '400px';
	c.style.height = '160px';

	// PREVIOUS BUTTONS OUTLINE
	// step number -> next button func, previous button func
	// step 0 -> animate click listener, no prev
	// step 1 back -> animateClick(), hide prev
	// step 2 back -> nextClickNew(), step1back()
	// step 3 back -> nextPosClick(), step2back()
	// step 4 back -> animate2ClickNew(), step3back()
	// step 5 back -> impossibleClick(), step4back()
	// step 6 back -> animate3Click(), step5back()
	// step 7 back -> combinedClick(), step6back()
	// step 8 back -> no next, step7back()

	// Image Numbers
	// Button text; image number; function that takes user back here
	// Animate rotating screen; 1 (step1Back)
	// Next Step; 19 (step2Back)
	// Show the Possible Event; 20 (step3Back)
	// Animate Possible Event; 21 (step4Back)
	// Show the Impossible Event; (step5Back)
	// Animate Impossible Event; 34 (step6Back)
	// Show Combined Results; 53 (step7Back)

	function animateClick() {
		imagenumber = 1;
		timer = setInterval(leftToRight, 50);
		$('#next').addClass('d-none');
		setTimeout(() => {
			$('.normalize-p').removeClass('d-none');
			$('#next').removeClass('d-none');
			$('#previous').removeClass('d-none');
		}, 1000);
	}
	window.animateClick = animateClick;

	function step7Back() {
		// set correct next button
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="combinedClick()"
      alt="Show combined results">Show combined results</button>
    `);

		// set correct previous button
		$('#previous').html(`
      <button class="btn btn-primary prev-focusable"
      onclick="step6Back()"
      alt="Previous slide">Previous</button>
		`);

		$('.prev-focusable:visible').focus();

		// show ptext
		$('#ptext').removeClass('hide');

		// show correct ptext
		const html = '<strong>Procedure (Step 3, Impossible event):</strong> The infant will see the screen move as it did before and it will not stop, because the box falls into a hidden hole in the table. ';
		document.getElementById('ptext').innerHTML = html;

		// show canvas - unhide animationcanvas
		$('#animationcanvas').removeClass('hide');

		// show correct graph - tool4
		$('#tool4').removeClass('hide')
			.siblings('.tooltips')
			.addClass('hide');

		// show next button
		$('#next').removeClass('hide');

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[53], 0, 0);
	}
	window.step7Back = step7Back;

	function step6Back() {
		// set correct next button
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="animate3Click()"
      alt="Show the impossible event">Show the impossible event</button>
    `);

		// set correct previous button
		$('#previous').html(`
      <button class="btn btn-primary prev-focusable"
      onclick="step5Back()"
      alt="Previous slide">Previous</button>
		`);

		$('.prev-focusable:visible').focus();

		// show correct ptext
		const html = '<strong>Procedure (Step 3, Impossible event):</strong> The infant will see the screen move as it did before and it will not stop, because the box falls into a hidden hole in the table. ';
		document.getElementById('ptext').innerHTML = html;

		// show correct graph
		$('#tool1').addClass('hide')
			.siblings('.tooltips')
			.addClass('hide');

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[34], 0, 0);
	}
	window.step6Back = step6Back;

	function step5Back() {
		// set correct next button
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="impossibleClick()"
      alt="Show the impossible event">Show the impossible event</button>
    `);

		// set correct previous button
		$('#previous').html(`
      <button class="btn btn-primary prev-focusable"
      onclick="step4Back()"
      alt="Previous slide">Previous</button>
		`);

		$('.prev-focusable:visible').focus();

		// show correct ptext
		const html = '<strong>Procedure (Step 3, Possible event):</strong> The infant will see the screen move as it did before, except that it will stop when it hits the box. ';
		document.getElementById('ptext').innerHTML = html;

		// show correct graph - tool3
		$('#tool3').removeClass('hide')
			.siblings('.tooltips')
			.addClass('hide');

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[33], 0, 0);
	}
	window.step5Back = step5Back;

	function step4Back() {
		// set correct next button
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="animate2ClickNew()"
      alt="Animate possible event">Animate possible event</button>
    `);

		// set correct previous button
		$('#previous').html(`
      <button class="btn btn-primary prev-focusable"
      onclick="step3Back()"
      alt="Previous slide">Previous</button>
		`);

		$('.prev-focusable:visible').focus();

		// show correct ptext
		const html = '<strong>Procedure (Step 3, Possible event):</strong> The infant will see the screen move as it did before, except that it will stop when it hits the box. ';
		document.getElementById('ptext').innerHTML = html;

		// show correct graph
		$('#tool3').addClass('hide')
			.siblings('.tooltips')
			.addClass('hide');

		imagenumber = 21;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);
	}
	window.step4Back = step4Back;

	function step3Back() {
		// set correct next button
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="nextPosClick()"
      alt="Show the possible event">Show the possible event</button>
    `);

		// set correct previous button
		$('#previous').html(`
      <button class="btn btn-primary prev-focusable"
      onclick="step2Back()"
      alt="Previous slide">Previous</button>
		`);

		$('.prev-focusable:visible').focus();

		// show correct ptext
		const html = '<strong>Procedure (Step 2, Placing the box):</strong> Next, the researchers place a physical object behind the screen and present the infants with two possible test trials.';
		document.getElementById('ptext').innerHTML = html;

		// show correct graph
		$('#tool3').addClass('hide')
			.siblings('.tooltips')
			.addClass('hide');

		// interactive text area
		$('.normalize-p').addClass('d-none');

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[20], 0, 0);
	}
	window.step3Back = step3Back;

	function step2Back() {
		// set correct next button
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="nextClickNew()"
      alt="">Next step</button>
    `);

		// set correct previous button
		$('#previous').html(`
      <button class="btn btn-primary prev-focusable"
      onclick="step1Back()"
      alt="Previous slide">Previous</button>
		`);

		$('.prev-focusable:visible').focus();

		// show correct ptext
		const html = '<strong>Procedure (Step 1, Habituation):</strong> Researchers test infants&#x2019; understanding of the physical world by initially habituating them to a simple event, like a rotating screen.';
		document.getElementById('ptext').innerHTML = html;

		// show correct graph
		$('#tool1').removeClass('hide')
			.siblings('.tooltips')
			.addClass('hide');

		// interactive text area
		$('.normalize-p').removeClass('d-none');

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[19], 0, 0);
	}
	window.step2Back = step2Back;

	function step1Back() {
		$('#next').html(`
      <button class="btn btn-primary"
      onclick="animateClick()"
      alt="Animate rotating screen"> Animate rotating screen</button>
    `);

		$('#tool1').addClass('hide');
		$('.normalize-p').addClass('d-none');
		$('#previous').addClass('d-none');

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[1], 0, 0);
	}
	window.step1Back = step1Back;

	function combinedClick() {
		$('#animationcanvas').addClass('hide');
		$('#ptext').addClass('hide');
		$('.animate').addClass('hide');
		$('.animate2').addClass('hide');
		$('.animate3').addClass('hide');

		$('#tool5').removeClass('hide');

		$('#tool4').addClass('hide');
		$('#tool3').addClass('hide');
		$('.tool2').addClass('hide');
		$('#tool1').addClass('hide');

		$('.combined').addClass('hide');

		$('#previous').html(`
      <button class="btn btn-primary"
      onclick="step7Back()"
      alt="Previous slide">Previous</button>
		`);

		// hide on last step
		$('#next').addClass('hide');

		// interactive text
		$('.normalize-p').addClass('d-none');
	}
	window.combinedClick = combinedClick;

	function animate2ClickNew() {
		$('#next').html(`
      <button class="combined btn btn-primary"
      onclick="impossibleClick()" disabled="true"
      alt="Show the impossible event"> Show the impossible event</button>
    `);

		$('#previous').html(`
      <button class="btn btn-primary"
      onclick="step4Back()"
      alt="Previous slide"> Previous</button>
		`);
		timer = setInterval(leftToRight, 50);
		setTimeout(() => {
			$('.combined').attr('disabled', false);
		}, 800);
	}
	window.animate2ClickNew = animate2ClickNew;

	function nextPosClick() {
		$('#tool4').addClass('hide');
		$('.animate2').removeClass('hide');
		$('.animate3').addClass('hide');
		imagenumber = 21;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		const html = "<strong>Procedure (Step 3, Possible event):</strong>  The infant will see the screen move as it did before, except that it will stop when it hits the box. <span class='invisible'>just testing some code here hey hey hey</span>";
		document.getElementById('ptext').innerHTML = html;

		$('.nextpos').prop('disabled', true);

		$('#next').html(`
      <button class="animate2 animate-override btn btn-primary"
      onclick="animate2ClickNew()"
      alt="Animate possible event"> Animate possible event </button>
    `);

		$('#previous').html(`
      <button class="btn btn-primary"
      onclick="step3Back()"
      alt="Previous slide"> Previous</button>
		`);
	}
	window.nextPosClick = nextPosClick;

	function animate3Click() {
		$('#tool3').addClass('hide');

		$('#next').html(`
			<button class="combined btn btn-primary"
			onclick="combinedClick()" disabled="true"
			alt="Show combined results"> Show combined results</button>
		`);

		$('#previous').html(`
        <button class="btn btn-primary"
        onclick="step6Back()"
        alt="Previous slide"> Previous</button>
			`);

		timer = setInterval(leftToRight, 50);
		setTimeout(() => {
			$('.combined').attr('disabled', false);
		}, 1000);

		// interactive text area
		$('.normalize-p').addClass('d-none');
	}
	window.animate3Click = animate3Click;

	function impossibleClick() {
		$('.tool2').addClass('hide');
		$('.animate3').removeClass('hide');
		imagenumber = 34;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		const html = '<strong>Procedure (Step 3, Impossible event):</strong>  The infant will see the screen move as it did before and it will not stop, because the box falls into a hidden hole in the table.';
		document.getElementById('ptext').innerHTML = html;
		$('#next').html('<button class="animate3 animate-override btn btn-primary" onclick="animate3Click()" alt="Animate impossible event">Animate impossible event</button>');

		$('#previous').html(`
      <button class="btn btn-primary"
      onclick="step5Back()"
      alt="Previous slide"> Previous</button>
		`);

		// show correct graph
		$('#tool1').addClass('hide')
			.siblings('.tooltips')
			.addClass('hide');
	}
	window.impossibleClick = impossibleClick;

	function nextClickNew() {
		imagenumber = 20;
		$('#tool1').addClass('hide');
		$('.animate').addClass('hide');
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		$('.tool2').removeClass('hide');

		const html = '<strong>Procedure (Step 2, Placing the box):</strong>  Next, the researchers place a physical object behind the screen and present the infants with two possible test trials.';
		document.getElementById('ptext').innerHTML = html;

		$('#next').html(`
      <button class="nextpos btn btn-primary"
      onclick="nextPosClick()"
      alt="Show the possible event"> Show the possible event </button>
    `);

		$('.next').prop('disabled', true);

		$('#previous').html(`
    <button class="btn btn-primary"
    onclick="step2Back()"
    alt="Previous slide"> Previous </button>
		`);

		// interactive text area
		$('.normalize-p').addClass('d-none');
	}
	window.nextClickNew = nextClickNew;

	$('#rightbutton').click(() => {
		$('.tablecontainer').animate(
			{
				marginLeft: '-=200px',
			},
			'fast'
		);
	});

	imagenumber = 1;

	$('.animate').on('click', () => {
		timer = setInterval(leftToRight, 50);
		$('#next').html(`
			<button class="animate animate-override btn btn-primary"
			disabled="true"
			type="button">Animate rotating screen</button>`);
		setTimeout(() => {
			$('#next').prop('disabled', false);
			$('#previous').removeClass('d-none');
			$('.normalize-p').removeClass('d-none');
		}, 1000);
	});

	$('.animate2').on('click', () => {
		timer = setInterval(leftToRight, 50);
		$('#next').html(`
      <button alt="Show combined results on same graph"
      class="combined btn btn-primary"
      type="button"
      onclick="combinedClick()"> Show combined results on same graph </button>
    `);
	});

	$('.animate3').on('click', () => {
		timer = setInterval(leftToRight, 50);
		$('#next').html(`
      <button alt="Show the other test trial: the possible event"
      class="nextpos btn btn-primary"
      type="button"
      onclick="nextPosClick()"> Show the other test trial: the possible event </button>
    `);
	});

	$('#reset').on('click', () => {
		window.location.reload();
	});

	$('.next').on('click', () => {
		if (step === 1) {
			imagenumber = 20;
			$('#tool1').addClass('hide');
			$('.animate').addClass('hide');
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.drawImage(imageObject[imagenumber], 0, 0);

			$('.tool2').removeClass('hide');

			const html =
        '<strong>Procedure (Step 2, Placing the box):</strong>  Next, the researchers place a physical object behind the screen and present the infants with two possible test trials.';
			document.getElementById('ptext').innerHTML = html;
			$('#next').html('<button class="impossible btn btn-primary" onclick="impossibleClick()" alt="Show the Impossible Event">Show the Impossible Event</button>');

			$('.next').prop('disabled', true);
		}
	});

	$('.possible').on('click', () => {
		$('.tool2').addClass('hide');
		$('.animate2').removeClass('hide');
		imagenumber = 21;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		const html =
      '<strong>Procedure (Step 3, Possible event):</strong>  The infant will see the screen move as it did before, except that it will stop when it hits the box.';
		document.getElementById('ptext').innerHTML = html;
		$('#next').html('<button class="possible btn btn-primary" alt="Show the Possible Event">Show the Possible Event</button>');

		$('.next').prop('disabled', true);
	});

	$('.impossible').on('click', () => {
		$('.tool2').addClass('hide');
		$('.animate3').removeClass('hide');
		imagenumber = 34;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		const html =
      '<strong>Procedure (Step 3, Impossible event):</strong>  The infant will see the screen move as it did before and it will not stop, because the box falls into a hidden hole in the table.';
		document.getElementById('ptext').innerHTML = html;
		$('#next').html('<button class="animate3 animate-override btn btn-primary" alt="Animate impossible event" onclick="animate3Click()">Animate Impossible Event</button>');
	});

	$('.nextimp').on('click', () => {
		$('#tool3').addClass('hide');
		$('.animate3').removeClass('hide');
		$('.animate2').addClass('hide');
		imagenumber = 34;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		const html =
      '<strong>Procedure (Step 3, Impossible event):</strong>  The infant will see the screen move as it did before and it will not stop, because the box falls into a hidden hole in the table.';
		document.getElementById('ptext').innerHTML = html;

		$('.nextimp').prop('disabled', true);
	});

	$('.nextpos').on('click', () => {
		$('#tool4').addClass('hide');
		$('.animate2').removeClass('hide');
		$('.animate3').addClass('hide');
		imagenumber = 21;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);

		const html =
      "<strong>Procedure (Step 3, Possible event):</strong>  The infant will see the screen move as it did before, except that it will stop when it hits the box. <span class='invisible'>just testing some code here hey hey hey</span>";
		document.getElementById('ptext').innerHTML = html;
		$('#next').html(`
      <button alt="Animate possible event"
      class="animate2 animate-override btn btn-primary"
      type="button"
      onclick="animate2Click()"> Animate possible event </button>
    `);

		$('.nextpos').prop('disabled', true);
	});

	$('.combined').on('click', () => {
		$('#animationcanvas').addClass('hide');
		$('#ptext').addClass('hide');
		$('.animate').addClass('hide');
		$('.animate2').addClass('hide');
		$('.animate3').addClass('hide');

		$('#tool5').removeClass('hide');

		$('#tool4').addClass('hide');
		$('#tool3').addClass('hide');
		$('.tool2').addClass('hide');
		$('#tool1').addClass('hide');

		$('.combined').addClass('hide');

		$('#next').html(`
      <button alt="Reset Figure"
      class="reset btn btn-secondary"
      onclick="location.reload()"
      type="button"> Reset Figure</button>
    `);
	});

	$('#check1').on('click', () => {
		$('#graph1').addClass('hide');
		$('#graph2').removeClass('hide');

		$('#tool1').addClass('hide');
		$('.tool2').removeClass('hide');
	});

	$('#check2').on('click', () => {
		$('#graph1').addClass('hide');
		$('#graph3').removeClass('hide');

		$('#tool1').addClass('hide');
		$('.tool2').removeClass('hide');
	});

	function Start() {
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(imageObject[imagenumber], 0, 0);
		setTimeout(() => {
			ctx.drawImage(imageObject[imagenumber], 0, 0);
		}, 250);
	}

	$(window).on('load', () => {
		ctx.drawImage(imageObject[imagenumber], 0, 0);
		$('.next').prop('disabled', true);
		$('#container').removeClass('noopacity');
		$('#loader').addClass('hide');
	});

	window.onload = Start();
	Start();

	const keyStepArray = [
		animateClick,
		nextClickNew,
		nextPosClick,
		animate2ClickNew,
		impossibleClick,
		animate3Click,
		combinedClick];
	const prevKeyStepArray = [
		step1Back,
		step2Back,
		step3Back,
		step4Back,
		step5Back,
		step6Back,
		step7Back];

	$(document).keydown((val) => {
		if (val.which === 39 || val.which === 37) {
			if (val.which === 39 && keyStep < 6) {
				keyStep -= 1;
				keyStepArray[keyStep]();
			} else if (val.which === 37 && keyStep > -1) {
				prevKeyStepArray[keyStep]();
				keyStep -= -1;
			}
		}

		if (val.which === 8) {
			window.location.reload();
		}
	});
});
