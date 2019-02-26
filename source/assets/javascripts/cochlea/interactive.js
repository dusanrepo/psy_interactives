
$(document).ready(() => {
	const unit = 100;
	let canvas;
	let context;
	let cHeight;
	let cWidth;
	let xAxis;
	let yAxis;

	const amp = 1;
	let w = 6;

	let fcontext;

	const ch1 = $('#c1');
	const ch2 = $('#c2');
	const ch3 = $('#c3');
	const ch4 = $('#c4');
	const ch5 = $('#c5');
	const ch6 = $('#c6');
	const ch7 = $('#c7');
	const ch8 = $('#c8');
	const ch9 = $('#c9');
	const ch10 = $('#cten');
	const ch11 = $('#celeven');
	const ch12 = $('#c12');
	const ch13 = $('#c13');
	const ch14 = $('#c14');
	const ch15 = $('#c15');
	const ch16 = $('#c16');
	const ch17 = $('#c17');

	const amount = $('.amount');
	amount.val(8);

	/**
   * Draw animation function.
   *
   * This function draws one frame of the animation, waits 20ms, and then calls
   * itself again.
   */

	let val;

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

	const $sliderBar = $('.slider-range-max.slider-1');
	$sliderBar.slider({
		range: 'max',
		min: 8,
		max: 95,
		value: 8,
		slide(event, ui) {
			$(ui.handle).attr('aria-valuenow', ui.value);
			amount.val(ui.value);
			const slideVal = ui.value * 0.01;
			let freqVal;

			if (slideVal > 0.55) {
				freqVal = (100 / 0.95) * (slideVal);
			} else {
				freqVal = (100 / 0.95) * (slideVal - 0.08);
			}

			let resultFreq = ((Math.ceil(freqVal - 100)) * (-1));
			resultFreq = (resultFreq < 0 ? 0 : resultFreq);

			$('.freq-canvas-bar').css('width', `${resultFreq}%`);
			$('.slider-1').attr('alt', `${resultFreq}%`);
			$(ui.handle)
				.attr('aria-valuetext', `${ui.value} wavelength`)
				.attr('aria-valuenow', ui.value);
		},
	});

	$('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': 8,
		'aria-valuemax': 95,
		'aria-valuenow': 8,
		'aria-orientation': 'horizontal',
	});

	$sliderBar.find('.ui-slider-handle').attr({ 'aria-valuetext': '8 wavelength', 'aria-label': 'Wavelength' });

	$('.ui-slider-handle').keydown((e) => {
		if (e.which === 36) $(e.target).parent().slider('value', $(e.target).parent().slider('option', 'min'));
		if (e.which === 35) $(e.target).parent().slider('value', $(e.target).parent().slider('option', 'max'));
	});

	function draw() {
		val = amount.val() * 0.01;
		w = 1 / val;

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
		fcontext.strokeStyle = '#000';
		fcontext.fillStyle = '#fff';
		fcontext.lineWidth = 2;

		if (val >= 0.08 && val <= 0.15) {
			ch1.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.15 && val <= 0.20) {
			ch2.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.20 && val <= 0.25) {
			ch3.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.25 && val <= 0.30) {
			ch4.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.30 && val <= 0.35) {
			ch5.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.35 && val <= 0.40) {
			ch6.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.40 && val <= 0.45) {
			ch7.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.45 && val <= 0.50) {
			ch8.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.50 && val <= 0.55) {
			ch9.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.55 && val <= 0.60) {
			ch10.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.60 && val <= 0.65) {
			ch11.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.65 && val <= 0.70) {
			ch12.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.70 && val <= 0.75) {
			ch13.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.75 && val <= 0.80) {
			ch14.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.80 && val <= 0.85) {
			ch15.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.85 && val <= 0.90) {
			ch16.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		} else if (val >= 0.90 && val <= 0.95) {
			ch17.removeClass('d-none')
				.siblings()
				.addClass('d-none');
		}

		// Draw the sine curve at time draw.t, as well as the circle.
		context.strokeStyle = 'hsl(100, 100%, 0)';
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
		// context.fillText("";&Iuml;�"";, xAxis + 59+3*unit, 18+xAxis);
		// context.fillText(""t = ""+Math.floor(Math.abs(draw.seconds)), 10, 20);

		fcontext.rect(68, 60, (((2 * Math.PI) * w) * 7.5) - 20, 20);
		fcontext.fill();

		// drawFreqBar();
		// Update the time and draw again
		draw.seconds -= 0.007;
		draw.t = draw.seconds * Math.PI;
		setTimeout(draw, 35);
	}
	draw.seconds = 0;
	draw.t = 0;

	function Start() {
		canvas = document.getElementById('sineCanvas');
		const fcanvas = document.getElementById('freqCanvas');

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

		fcanvas.width = 800;
		fcanvas.height = 100;

		context = canvas.getContext('2d');
		context.font = '18px sans-serif';
		context.strokeStyle = '#000';
		context.lineJoin = 'round';

		fcontext = fcanvas.getContext('2d');
		fcontext.font = '18px sans-serif';
		fcontext.strokeStyle = '#000';
		fcontext.lineJoin = 'round';
		fcontext.fillStyle = '#000';

		cHeight = canvas.height;
		cWidth = canvas.width;

		xAxis = Math.floor(cHeight / 2);
		yAxis = Math.floor(cWidth / 8);

		context.save();
		draw();
	}
	window.onload = Start();
});
