$(document).ready(() => {
	const unit = 100;
	let xAxis;
	let yAxis;
	let amp = 1;
	let	w = 6;

	let s = 100;
	let canvas;
	let fcanvas;
	let context;
	let fcontext;

	const w1 = (Math.random() * (16.66 - 3.33)) + 3.33;
	const w2 = (Math.random() * (16.66 - 3.33)) + 3.33;
	const w3 = (Math.random() * (16.66 - 3.33)) + 3.33;
	const w4 = (Math.random() * (16.66 - 3.33)) + 3.33;
	const w5 = (Math.random() * (16.66 - 3.33)) + 3.33;
	const w6 = (Math.random() * (16.66 - 3.33)) + 3.33;

	const z1 = Math.floor((Math.random() * 250) + 1);
	const z2 = Math.floor((Math.random() * 250) + 1);
	const z3 = Math.floor((Math.random() * 250) + 1);
	const z4 = Math.floor((Math.random() * 250) + 1);
	const z5 = Math.floor((Math.random() * 250) + 1);
	const z6 = Math.floor((Math.random() * 250) + 1);

	let cHeight;
	let cWidth;

	const amount = $('.amount1');
	amount.val(10);
	const amount2 = $('.amount2');
	amount2.val(0.5);
	const amount3 = $('.amount3');
	amount3.val(6);
	$('.slider-3').attr('value', 6);

	function drawAxes() {
		// Draw X and Y axes
		context.moveTo(100, xAxis);
		context.lineTo(cWidth, xAxis);
		// context.moveTo(yAxis, 0);
		// context.lineTo(yAxis, height);

		// Draw X axis tick at PI
		if ($(window).width() <= 800) {
			context.moveTo(yAxis + (Math.PI * unit), xAxis + 5);
			context.lineTo(yAxis + (Math.PI * unit), xAxis - 5);
		}
	}

	function drawSine(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin(x);
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawSine2(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin();
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w1 * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawSine3(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin();
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w2 * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawSine4(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin();
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w3 * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawSine5(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin();
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w4 * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawSine6(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin();
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w5 * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawSine7(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin();
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= cWidth; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w6 * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	/**
	 * Draw animation function.
	 *
	 * This function draws one frame of the animation, waits 20ms, and then calls
	 * itself again.
	 */
	function draw() {
		const val = amount.val() * 0.01;
		w = 1 / val;

		const r = -(val * 1150) - 20;

		const val2 = amount2.val();
		amp = val2;

		const val3 = amount3.val();

		const l = val2 * 100;

		// Clear the canvas
		context.clearRect(0, 0, cWidth, cHeight);
		fcontext.clearRect(0, 0, cWidth, cHeight);

		// Draw the axes in their own path
		context.beginPath();
		drawAxes();
		context.stroke();

		// Set styles for animated graphics
		context.save();
		context.fillStyle = '#fff';
		context.lineWidth = 4;

		fcontext.save();
		fcontext.strokeStyle = '#00f';
		fcontext.fillStyle = '#fff';
		fcontext.lineWidth = 2;

		// Draw the sine curve at time draw.t, as well as the circle.

		if (val3 === 5 || val3 === '5') {
			context.strokeStyle = `hsl(${z1},100%,40%)`;
			context.beginPath();
			drawSine2(draw.t);
			context.stroke();

			s = 80;
		}

		if (val3 === 4 || val3 === '4') {
			context.strokeStyle = `hsl(${z1},100%,40%)`;
			context.beginPath();
			drawSine2(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z2},100%,40%)`;
			context.beginPath();
			drawSine3(draw.t);
			context.stroke();

			s = 60;
		}

		if (val3 === 3 || val3 === '3') {
			context.strokeStyle = `hsl(${z1},100%,40%)`;
			context.beginPath();
			drawSine2(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z2},100%,40%)`;
			context.beginPath();
			drawSine3(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z3},100%,40%)`;
			context.beginPath();
			drawSine4(draw.t);
			context.stroke();

			s = 40;
		}

		if (val3 === 2 || val3 === '2') {
			context.strokeStyle = `hsl(${z1},100%,40%)`;
			context.beginPath();
			drawSine2(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z2},100%,40%)`;
			context.beginPath();
			drawSine3(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z3},100%,40%)`;
			context.beginPath();
			drawSine4(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z4},100%,40%)`;
			context.beginPath();
			drawSine5(draw.t);
			context.stroke();

			s = 20;
		}

		if (val3 === 1 || val3 === '1') {
			context.strokeStyle = `hsl(${z1},100%,40%)`;
			context.beginPath();
			drawSine2(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z2},100%,40%)`;
			context.beginPath();
			drawSine3(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z3},100%,40%)`;
			context.beginPath();
			drawSine4(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z4},100%,40%)`;
			context.beginPath();
			drawSine5(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z5},100%,40%)`;
			context.beginPath();
			drawSine6(draw.t);
			context.stroke();

			s = 0;
		}

		if (val3 === 0 || val3 === '0') {
			context.strokeStyle = `hsl(${z1},100%,40%)`;
			context.beginPath();
			drawSine2(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z2},100%,40%)`;
			context.beginPath();
			drawSine3(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z3},100%,40%)`;
			context.beginPath();
			drawSine4(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z4},100%,40%)`;
			context.beginPath();
			drawSine5(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z5},100%,40%)`;
			context.beginPath();
			drawSine6(draw.t);
			context.stroke();

			context.strokeStyle = `hsl(${z6},100%,40%)`;
			context.beginPath();
			drawSine7(draw.t);
			context.stroke();

			s = 0;
		}

		context.strokeStyle = `hsl(${r},100%,${l}%)`;
		context.beginPath();
		fcontext.beginPath();
		drawSine(draw.t);
		context.stroke();

		// Draw the arrow at time t in its own path.
		// drawArrow(draw.t);

		// Restore original styles
		context.restore();
		fcontext.restore();

		// Draw the xAxis PI tick and the time

		fcontext.rect(68, 60, (2 * Math.PI * w * 6) - 110, 20);
		fcontext.fill();

		// drawFreqBar();
		// Update the time and draw again
		draw.seconds -= 0.007;
		draw.t = draw.seconds * Math.PI;
		setTimeout(draw, 35);

		document.getElementById('colorblock').style.backgroundColor = `hsl(${r},${s}%,${l}%)`;
	}
	draw.seconds = 0;
	draw.t = 0;

	function Start() {
		canvas = document.getElementById('sineCanvas');
		fcanvas = document.getElementById('freqCanvas');

		if ($(window).width() >= 1200) {
			canvas.width = 1500;
			canvas.height = 750;
		} else if ($(window).width() >= 700) {
			canvas.width = 1200;
			canvas.height = 600;
		} else if ($(window).width() < 700) {
			canvas.width = 800;
			canvas.height = 400;
		}

		fcanvas.width = 900;
		fcanvas.height = 200;

		context = canvas.getContext('2d');
		context.font = '18px sans-serif';
		context.strokeStyle = '#000';
		context.lineJoin = 'round';

		fcontext = fcanvas.getContext('2d');
		fcontext.font = '18px sans-serif';
		fcontext.fillStyle = '#000';
		fcontext.strokeStyle = '#F00';
		fcontext.textAlight = 'start';

		cHeight = canvas.height;
		cWidth = canvas.width;

		xAxis = Math.floor(cHeight / 2);
		yAxis = Math.floor(cWidth / 8);

		context.save();
		draw();
	}

	window.onload = Start();

	let ctoggle = 0;

	let s1 = 0;
	let s2 = 0;
	let s3 = 0;

	const $sliderBar = $('.slider-range-max.slider-1');
	$sliderBar.slider({
		range: 'max',
		min: 6,
		max: 30,
		value: 10,
		slide(event, ui) {
			$(ui.handle).attr('aria-valuenow', ui.value);
			amount.val(ui.value);
			if (s1 === 0) {
				ctoggle += 1;
			}
			s1 = 1;

			if (ctoggle === 3) {
				ctoggle = 4;
			}

			const slideVal = ui.value * 0.01;
			const freqVal = (100 / 0.24) * (slideVal - 0.06);

			let resultFreq = ((Math.ceil(freqVal - 100)) * (-1));
			resultFreq = (resultFreq < 0 ? 0 : resultFreq);

			$('.freq-canvas').css('width', `${resultFreq}%`);
			$('.slider-1').attr('alt', `${resultFreq}%`);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} wavelength`)
				.attr('aria-valuenow', ui.value);
		},
	});

	const $sliderBar2 = $('.slider-range-max.slider-2');
	$sliderBar2.slider({
		range: 'max',
		min: 0,
		max: 1,
		step: 0.001,
		value: 0.5,
		slide(event, ui) {
			$(ui.handle).attr('aria-valuenow', ui.value);
			amount2.val(ui.value);
			if (s2 === 0) {
				ctoggle += 1;
			}
			s2 = 1;

			if (ctoggle === 3) {
				ctoggle = 4;
			}

			const colorOfAmp = document.getElementById('colorblock').style.backgroundColor;
			$('.slider-2').attr('alt', colorOfAmp);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} amplitude`)
				.attr('aria-valuenow', ui.value);
		},
	});

	const $sliderBar3 = $('.slider-range-max.slider-3');
	$sliderBar3.slider({
		range: 'max',
		min: 0,
		max: 6,
		step: 1,
		value: 6,
		slide(event, ui) {
			$(ui.handle).attr('aria-valuenow', ui.value);
			amount3.val(ui.value);
			if (s3 === 0) {
				ctoggle += 1;
			}
			s3 = 1;

			if (ctoggle === 3) {
				ctoggle = 4;
			}

			const colorPurity = ui.value;
			$('.slider-3').attr('alt', `${colorPurity} of 6 color purity`);
			$('.slider-3').attr('value', colorPurity);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} of 6 color purity`)
				.attr('aria-valuenow', ui.value);
		},
	});

	$('.ui-slider-handle').keydown((val) => {
		if (val.which === 36) {
			$(val.target).parent().slider('value', $(val.target).parent().slider('option', 'min'));
			const whichSlider = $(val.target).parent().match(/\d+/)[0];
			$(`.amount${whichSlider}`).val($(val.target).parent().slider('option', 'min'));
		} else if (val.which === 35) {
			$(val.target).parent().slider('value', $(val.target).parent().slider('option', 'max'));
			const whichSlider = $(val.target).parent().match(/\d+/)[0];
			$(`.amount${whichSlider}`).val($(val.target).parent().slider('option', 'max'));
		}
	});

	$sliderBar.find('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': '6',
		'aria-valuemax': '30',
		'aria-valuenow': '10',
		'aria-orientation': 'horizontal',
	});
	$sliderBar.find('.ui-slider-handle').attr({ 'aria-valuetext': '10 wavelength', 'aria-label': 'Wavelength (hue)' });

	$sliderBar2.find('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': '0',
		'aria-valuemax': '1',
		'aria-valuenow': '0.5',
		'aria-orientation': 'horizontal',
	});
	$sliderBar2.find('.ui-slider-handle').attr({ 'aria-valuetext': '0.5 amplitude', 'aria-label': 'Amplitude (intensity)' });

	$sliderBar3.find('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': '0',
		'aria-valuemax': '6',
		'aria-valuenow': '6',
		'aria-orientation': 'horizontal',
	});
	$sliderBar3.find('.ui-slider-handle').attr({ 'aria-valuetext': '6 of 6 color purity', 'aria-label': 'Color purity' });
});
