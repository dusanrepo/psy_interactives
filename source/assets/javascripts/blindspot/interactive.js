$(document).ready(() => {
	let linearray;
	const cx = 1;
	const canvas = document.getElementById('lines');
	const ctx = canvas.getContext('2d');
	const $reset = $('#reset');
	const speed = 10;
	const $start = $('#start');
	const runCount = 0;
	let toggle = 0;

	function drawCircle(x) {
		let radius = 30; // Desktop
		let y = 50;
		let x1 = x + cx + 50;

		if ($(window).width() <= 375) {
			radius = 60; // Mobile
			y = 75;
			x1 += 10;
		}

		ctx.beginPath();
		ctx.arc(x1, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'blue';
		ctx.fill();
		ctx.lineWidth = 5;
		ctx.strokeStyle = 'blue';
		ctx.stroke();
	}

	function searchForTrue() {
		for (let i = 0; i < linearray.length; i += 1) {
			if (linearray[i] === true) {
				drawCircle(550 - i);
			}
		}
	}

	function drawAllLines() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		searchForTrue();

		if (toggle === 0) {
			for (let i = 0; i < 1; i += 1) {
				linearray.shift();
				linearray.push(false);
			}
		}

		if (toggle === 1) {
			for (let i = 0; i < 1; i += 1) {
				linearray.pop();
				linearray.unshift(false);
			}
		}

		if (linearray[0]) {
			toggle = 1;
			linearray[1] = true;
		}

		if (linearray[550]) {
			toggle = 0;
			linearray[550] = true;
		}
	}

	function initArray() {
		linearray = new Array(550);

		for (let i = 0; i < 550; i += 1) {
			linearray[i] = false;
		}

		linearray[550] = true;
	}

	function Start() {
		if (runCount < 1) {
			initArray();
			setInterval(drawAllLines, speed);
		}
	}

	$reset.click(() => {
		window.location.reload();
		$(this).removeClass('d-none');
	});

	$start.click(() => {
		Start();
		$start.addClass('d-none');
	});
});
