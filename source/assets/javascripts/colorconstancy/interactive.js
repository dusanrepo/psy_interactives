$(document).ready(() => {
	let cwidth = 500;
	let cheight = 500;

	let frmCnt = 30;

	let valred = 1;
	let valgreen = 255;
	let valblue = 4;

	let valred2 = 120;
	let valgreen2 = 120;
	let valblue2 = 120;

	const canvas = document.getElementById('wheel');
	const context = canvas.getContext('2d');

	const canvas2 = document.getElementById('pick1');
	const context2 = canvas2.getContext('2d');

	let x = 544;
	let y = 396;

	const x2 = 299;
	const y2 = 170;

	const radius = 30;

	let initialcomp = false;

	let intervalControl = true;
	let intervalControlCount = 0;

	let h2 = 0;

	const colorbar = [];
	const frames = [];

	let istr;
	let mpos;

	const sliderBar = $('.slider-range-max');
	const slideMin = 0;
	const slideMax = 78;
	const amount = $('.amount2');
	let currentFrame = 39;
	let lastFrame = 39;
	let lastGapFrame = 39;

	let colorBarRect = 12;

	function getMousePos(pos, evt) {
		const rect = canvas.getBoundingClientRect();

		if (!evt.clientX) {
			try {
				return {
					// these break keyboard interaction of the slider (cause error in console)
					// these also handle touchscreen movement of the color circle
					x: evt.touches[0].clientX - rect.left,
					y: evt.touches[0].clientY - rect.top,
				};
			} catch (e) {
				// console.log(e);
			}
		}
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top,
		};
	}

	function DrawCircle() {
		const centerX = x;
		const centerY = y;

		context2.beginPath();
		context2.fillStyle = `rgb(${valred2}, ${valgreen2}, ${valblue2})`;
		context2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context2.fill();
		context2.lineWidth = 5;
		context2.strokeStyle = '#00FF00';
		context2.stroke();
	}

	function SetColors() {
		const imgData = context.getImageData(x, y, 1, 1);

		[valred, valgreen, valblue] = [imgData.data[0], imgData.data[1], imgData.data[2]];

		const imgData2 = context.getImageData(x2, y2, 1, 1);

		[valred2, valgreen2, valblue2] = [imgData2.data[0], imgData2.data[1], imgData2.data[2]];
	}

	function DrawFrames(imageKey) {
		context.clearRect(0, 0, cwidth * 2, 800);

		for (let i = 0; i < 80; i += 1) {
			context.fillStyle = colorbar[i];
			context.beginPath();
			// context.rect((12 * i) + 25, 800, 12, 100);
			context.rect((colorBarRect * i), 800, colorBarRect, 100);
			context.fill();
		}

		DrawCircle();
		const img = frames[imageKey];
		context.drawImage(img, 0, 0, cwidth * 2, 800);
	}

	function SetCircle() {
		const imgData = context.getImageData(x, y, 1, 1);

		[valred2, valgreen2, valblue2] = [imgData.data[0], imgData.data[1], imgData.data[2]];
	}

	function GetAnimateFrames() {
		for (let i = 1, f = 0; i < 80; i += 1, f += 1) {
			frames[f] = new Image();
			istr = (i).toString().padStart(4, '0');
			frames[f].src = `/assets/images/colorconstancy/sun/sun${istr}.jpg`;
		}
	}

	function ResetColorBar() {
		for (let i = 0; i < 80; i += 1) {
			colorbar[i] = 'rgb(255, 255, 255)';
		}
	}

	function TrackColor() {
		const imgData2 = context.getImageData(x, y, 1, 1);

		[valred2, valgreen2, valblue2] = [imgData2.data[0], imgData2.data[1], imgData2.data[2]];

		colorbar[frmCnt] = `rgb(${valred2}, ${valgreen2}, ${valblue2})`;
	}

	function DrawCanvas() {
		DrawFrames(currentFrame);

		SetCircle();

		context2.clearRect(0, 0, canvas.width, canvas.height);

		DrawCircle();

		$('.farback').css('background-color', `rgb(${valred2}, ${valgreen2}, ${valblue2})`);
	}

	function fillGap() {
		const colorGap = currentFrame - lastGapFrame;

		const directionFind = (
			(currentFrame - lastGapFrame < 0) ? 1 : -1); // intentionally backwards result
		const absoluteColorGap = Math.abs(colorGap);

		const beginningPoint = colorbar[lastGapFrame].replace(/[^\d,]/g, '').split(',');
		const endPoint = colorbar[currentFrame].replace(/[^\d,]/g, '').split(',');

		const avgR = Math.round((beginningPoint[0] - endPoint[0]) / absoluteColorGap);
		const avgG = Math.round((beginningPoint[1] - endPoint[1]) / absoluteColorGap);
		const avgB = Math.round((beginningPoint[2] - endPoint[2]) / absoluteColorGap);

		for (let i = 1; i < absoluteColorGap; i += 1) {
			const iDirection = (Math.sign(colorGap) * i);
			const rgb = colorbar[lastGapFrame + iDirection];
			const lastRgb = colorbar[lastGapFrame + iDirection + directionFind];
			const lastRgbArray = lastRgb.replace(/[^\d,]/g, '').split(',');

			if (rgb === 'rgb(255, 255, 255)') {
				const newR = Number(lastRgbArray[currentFrame]) + avgR;
				const newG = Number(lastRgbArray[currentFrame]) + avgG;
				const newB = Number(lastRgbArray[currentFrame]) + avgB;

				colorbar[lastGapFrame + iDirection] = `rgb(${newR}, ${newG}, ${newB})`;
			}
		}
		DrawCanvas();
	}

	function getPosition(event) {
		function unToggle() {
			mpos = 0;
			window.pick1.removeEventListener('mousemove', getPosition, false);
			window.pick1.removeEventListener('touchmove', getPosition, true);
			h2 = 0;
		}

		mpos = 1;
		const pos = getMousePos(canvas, event); // Handles the color picker position
		let newx = pos.x;
		let newy = pos.y;

		if (initialcomp) {
			newx = x;
			newy = y;
		}

		newx *= 2;
		newy *= 2;

		if (h2 === 0 && mpos === 1 && newx < canvas.width && newy < 800) {
			window.pick1.addEventListener('mousemove', getPosition, false);
			window.pick1.addEventListener('mouseup', unToggle, false);
			window.pick1.addEventListener('touchmove', getPosition, true);
			window.pick1.addEventListener('touchend', unToggle, false);
			x = newx;
			y = newy;

			if (initialcomp) {
				unToggle();
				initialcomp = false;
			}
		}

		TrackColor();
		SetColors();
		DrawCanvas();
	}


	sliderBar.slider({
		range: 'max',
		min: slideMin,
		max: slideMax,
		value: currentFrame,
		slide(event, ui) {
			$(ui.handle).attr('aria-valuenow', ui.value);
			lastGapFrame = lastFrame;
			lastFrame = currentFrame;
			currentFrame = ui.value;
			DrawFrames(currentFrame);
			getPosition(event);
			amount.val(sliderBar.slider('value'));
			frmCnt = currentFrame;
			TrackColor();
			fillGap();
			lastGapFrame = currentFrame;
			fillGap();
			$(ui.handle)
				.attr('aria-valuetext', `frame ${ui.value}`)
				.attr('aria-valuenow', ui.value);
		},
	});

	$('.ui-slider-handle').attr({
		role: 'slider',
		'aria-valuemin': slideMin,
		'aria-valuemax': slideMax,
		'aria-valuenow': currentFrame,
		'aria-orientation': 'horizontal',
	});

	sliderBar.find('.ui-slider-handle').attr({ 'aria-valuetext': `frame ${currentFrame}`, 'aria-label': 'Color frame' });

	$('.ui-slider-handle').keydown((e) => {
		if (e.which === 36) $(e.target).parent().slider('value', $(e.target).parent().slider('option', 'min'));
		if (e.which === 35) $(e.target).parent().slider('value', $(e.target).parent().slider('option', 'max'));
	});

	function drawColorPicker() {
		ResetColorBar();
		TrackColor();
		SetColors();
		DrawCanvas();
	}

	let recursiveInterval;
	function intervalHandler() {
		if (intervalControl || intervalControlCount <= 15) {
			DrawCanvas();
			intervalControl = false;
			intervalControlCount += 1;
			if (typeof recursiveInterval === 'undefined') {
				recursiveInterval = setInterval(intervalHandler, 150);
			}
		} else {
			clearInterval(recursiveInterval);
			recursiveInterval = 0;
		}
	}

	function Start() {
		ResetColorBar();

		if ($(window).width() < 515 && $(window).width() >= 400) {
			canvas.width = $(window).width() * 2;
			canvas.height = cheight * 2;

			canvas.style.width = $(window).width() * 2;
			canvas.style.height = `${cheight}px`;

			canvas2.width = $(window).width() * 2;
			canvas2.height = cheight * 2;

			canvas2.style.width = $(window).width() * 2;
			canvas2.style.height = `${cheight}px`;
		} else if ($(window).width() > 320 && $(window).width() < 400) {
			colorBarRect = 9;
			cwidth = 350;
			cheight = 500;
			canvas.width = $(window).width() * 2;
			canvas.height = cheight * 2;

			canvas.style.width = $(window).width() * 2;
			canvas.style.height = `${cheight}px`;

			canvas2.width = $(window).width() * 2;
			canvas2.height = cheight * 2;

			canvas2.style.width = $(window).width() * 2;
			canvas2.style.height = `${cheight}px`;
		} else if ($(window).width() <= 320) {
			colorBarRect = 8;
			cwidth = 350;
			cheight = 500;
			canvas.width = $(window).width() * 2;
			canvas.height = cheight * 2;

			canvas.style.width = $(window).width() * 2;
			canvas.style.height = `${cheight}px`;

			canvas2.width = $(window).width() * 2;
			canvas2.height = cheight * 2;

			canvas2.style.width = $(window).width() * 2;
			canvas2.style.height = `${cheight}px`;
		} else {
			colorBarRect = 13;
			canvas.width = cwidth * 2;
			canvas.height = cheight * 2;

			canvas.style.width = `${cwidth}px`;
			canvas.style.height = `${cheight}px`;

			canvas2.width = cwidth * 2;
			canvas2.height = cheight * 2;

			canvas2.style.width = `${cwidth}px`;
			canvas2.style.height = `${cheight}px`;
		}

		GetAnimateFrames();

		DrawCanvas();

		$('.backsquare').css('background-color', `rgb(${valred2}, ${valgreen2}, ${valblue2})`);
		$('.midsquare').css('background-color', `rgb(${valred}, ${valgreen}, ${valblue})`);
		$('.farback').css('background-color', `rgb(${valred}, ${valgreen}, ${valblue})`);

		mpos = 0;

		window.pick1.addEventListener('mousedown', getPosition, false);
		window.pick1.addEventListener('touchstart', getPosition, false);
		window.pick1.addEventListener('touchstart', drawColorPicker, false);

		intervalHandler();
	}

	window.onload = Start();

	$(document).on('mobileinit', () => {
		$.mobile.ignoreContentEnabled = true;
	});

	$(window).on('load', () => {
		TrackColor();
		DrawCanvas();
	});

	$('#pick1').mousedown(() => {
		drawColorPicker();
	});

	$('#pick1').keydown((val) => {
		if (val.which === 37) { // left
			x -= 2;
			drawColorPicker();
		} else if (val.which === 39) { // right
			x += 2;
			drawColorPicker();
		} else if (val.which === 38) { // up
			y -= 2;
			drawColorPicker();
		} else if (val.which === 40) { // down
			y += 2;
			drawColorPicker();
		}
	});

	const $colorPicker = $('.color-picker');
	$(document).keydown((val) => {
		if (val.which === 9) {
			$colorPicker.css('outline', '');
		}
	});

	$(document).mousedown(() => {
		$colorPicker.css('outline', '0');
	});

	$(document).click(() => {
		$colorPicker.css('outline', '0');
	});
});
