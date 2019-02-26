$(document).ready(() => {
	const unit = 100;
	let canvas;
	let context;
	let height;
	let width;
	let xAxis;
	let yAxis;
	let draw;
	let gainNode;
	let amp = 1;
	let w = 6;

	let frequencyslider = 333.33;

	let off = true;

	const contextaudio = new AudioContext(); // Create audio container with webkit prefix
	let oscillator;

	const amount = $('.amount');
	amount.val(15);
	const amount2 = $('.amount2');
	amount2.val(0);

	function Start() {
		canvas = document.getElementById('sineCanvas');

		canvas.width = 800;
		canvas.height = 400;

		context = canvas.getContext('2d');
		context.font = '18px sans-serif';
		context.strokeStyle = '#000';
		context.lineJoin = 'round';

		[height, width] = [canvas.height, canvas.width];

		xAxis = Math.floor(height / 2);
		yAxis = Math.floor(width / 8);

		context.save();
		draw();
	}

	let playing = false;

	function startOsc(frequency) {
		playing = true;

		oscillator = contextaudio.createOscillator();
		// oscillator.type = 0;
		oscillator.frequency.value = frequency;
		oscillator.start(0);

		gainNode = contextaudio.createGain();
		gainNode.gain.value = 0;

		oscillator.connect(gainNode);
		gainNode.connect(contextaudio.destination);
	}

	const $sliderBar = $('.slider-range-max.slider-1');
	$(() => {
		$sliderBar.slider({
			range: 'max',
			min: 6,
			max: 30,
			value: 15,
			slide(event, ui) {
				$(ui.handle).attr('aria-valuenow', ui.value);
				amount.val(ui.value);
			},
		});
	});

	const $sliderBar2 = $('.slider-range-max.slider-2');
	$(() => {
		$sliderBar2.slider({
			range: 'max',
			min: 0,
			max: 1,
			step: 0.041,
			value: 0,
			slide(event, ui) {
				$(ui.handle).attr('aria-valuenow', ui.value);
				amount2.val(ui.value);
				if (off) {
					startOsc(frequencyslider);
					off = false;
				}
			},
		});
	});

	function drawSine(t) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t;
		let y = Math.sin(x);
		// context.moveTo(yAxis, unit*y+xAxis);

		// Loop to draw segments
		for (let i = yAxis; i <= width; i += 2) {
			x = t + ((-yAxis + i) / unit);
			y = amp * Math.sin(w * x);
			context.lineTo(i, (unit * y) + xAxis);
		}
	}

	function drawAxes() {
		// Draw X and Y axes
		context.moveTo(100, xAxis);
		context.lineTo(width, xAxis);

		// Draw X axis tick at PI
		context.moveTo((yAxis + Math.PI) * unit, xAxis + 5);
		context.lineTo((yAxis + Math.PI) * unit, xAxis - 5);
	}

	/**
   * Draw animation function.
   *
   * This function draws one frame of the animation, waits 20ms, and then calls
   * itself again.
   */

	function DrawFunction() {
		const val = amount.val() * 0.01;
		w = val * 50;

		frequencyslider = w * 50;

		const val2 = amount2.val();
		amp = val2;

		if (playing) {
			oscillator.frequency.value = frequencyslider;
			gainNode.gain.setTargetAtTime((val2 / 3), contextaudio.currentTime, 0.015);
		}

		// Clear the canvas
		context.clearRect(0, 0, width, height);

		// Draw the axes in their own path
		context.beginPath();
		drawAxes();
		context.stroke();

		// Set styles for animated graphics
		context.save();
		context.fillStyle = '#fff';
		context.lineWidth = 4;

		// Draw the sine curve at time draw.t, as well as the circle.

		context.strokeStyle = '#4f4f4f';
		context.beginPath();
		drawSine(draw.t);
		context.stroke();

		// Restore original styles
		context.restore();

		// Update the time and draw again
		draw.seconds -= 0.007;
		draw.t = draw.seconds * Math.PI;
		setTimeout(draw, 35);
	}

	draw = DrawFunction;

	draw.seconds = 0;
	draw.t = 0;

	window.onload = Start();
});
