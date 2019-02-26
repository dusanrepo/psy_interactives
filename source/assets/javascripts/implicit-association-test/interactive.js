$(document).ready(() => {
	const $next = $('#next');
	// const $start = $('#start');

	let isTouchScreen = false;
	let stage = 0;
	let activityInProgress = false;
	let navigable = false;

	// In the first block they will sort republican and democrat faces.
	// In the second block they will sort both words.

	// In the third and fourth block they will sort both sets.
	// In the fifth block they sort pictures
	// but the pictures are sorted to opposite sides as they were in the first block.
	// In the sixth and seventh blocks they will sort both categories
	// but on opposite sides of blocks three and four.

	// Positive Words – Joy, Happy, Good, Trustworthy, Warm
	// Negative Words – Bad, Mean, Evil, Deceitful, Cold
	// Democrats - Elizabeth Warren, Bernie Sanders, Barack Obama, Hillary Clinton
	// Republicans – Mitch McConnell, Ted Cruz, Donald Trump, George W. Bush

	const words = ['Joy', 'Happy', 'Good', 'Trustworthy', 'Warm', 'Bad', 'Mean', 'Evil', 'Deceitful', 'Cold'];
	const images = ['pol-1', 'pol-2', 'pol-3', 'pol-4', 'pol-5', 'pol-6', 'pol-7', 'pol-8'];

	const republicansImages = ['pol-1', 'pol-2', 'pol-3', 'pol-8'];
	const democratsImages = ['pol-4', 'pol-5', 'pol-6', 'pol-7'];
	const positiveWords = ['Joy', 'Happy', 'Good', 'Trustworthy', 'Warm'];
	const negativeWords = ['Bad', 'Mean', 'Evil', 'Deceitful', 'Cold'];

	const politicianNames = {
		'pol-1': 'Mitch McConnell (R)',
		'pol-2': 'Ted Cruz (R)',
		'pol-3': 'Donald Trump (R)',
		'pol-4': 'Bernie Sanders (D)',
		'pol-5': 'Elizabeth Warren (D)',
		'pol-6': 'Barack Obama (D)',
		'pol-7': 'Hillary Clinton (D)',
		'pol-8': 'George W. Bush (R)',
	};

	const blockType = {
		1: 'images',
		2: 'words',
		3: 'both',
		4: 'both',
		5: 'images',
		6: 'both',
		7: 'both',
	};

	// const accuracyCheck = {
	// 	1: true,
	// 	2: true,
	// 	3: false,
	// 	4: false,
	// 	5: false,
	// 	6: false,
	// 	7: false,
	// };

	const allowCorrection = {
		1: true,
		2: true,
		3: true,
		4: true,
		5: true,
		6: true,
		7: true,
	};

	const voteType = {
		1: { left: 'Republican', right: 'Democrat' },
		2: { left: 'Positive', right: 'Negative' },
		3: { left: 'Republican or Positive', right: 'Democrat or Negative' },
		4: { left: 'Democrat or Positive', right: 'Republican or Negative' },
		5: { left: 'Democrat', right: 'Republican' },
		6: { left: 'Democrat or Negative', right: 'Republican or Positive' },
		7: { left: 'Republican or Negative', right: 'Democrat or Positive' },
	};

	const activityCount = {
		words: words.length,
		images: images.length,
		both: words.length + images.length,
	};

	const keydownCodes = {
		49: 'left',
		48: 'right',
		88: 'x',
	};

	const trialStart = {
		1: {},
		2: {},
		3: {},
		4: {},
		5: {},
		6: {},
		7: {},
	};

	const trialEnd = {
		1: {},
		2: {},
		3: {},
		4: {},
		5: {},
		6: {},
		7: {},
	};

	const trialTimes = {
		1: {},
		2: {},
		3: {},
		4: {},
		5: {},
		6: {},
		7: {},
	};

	const trialCorrect = {
		1: {},
		2: {},
		3: {},
		4: {},
		5: {},
		6: {},
		7: {},
	};

	const blockHistory = {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
	};

	const analyzeBlocks = [3, 4, 6, 7];
	// const analyzeBlocks = [3];

	// Requirements:
	// Time each trial (word or image) individually
	// Eliminate trials that have a latency of over 10,000 ms
	// Include the following feedback at the end of a block if the user has a
	// latency of over 10,000 ms for at least half the trials in the block:
	// "You're answering too slowly! Make sure to go as
	// fast as you can while making as few mistakes as possible."

	// Summary:
	// 1. Use data from only B3, B4, B6, B7
	// 2. Eliminate trials with times over 10,000 ms
	// 3. Skipped
	// 4. Use all trials (don't skip any unless latency over 10,000)

	// 5. Compute mean of correct latencies for each block (ENTIRE BLOCKS, SEPARATE) (MEAN) (BLOCKS)
	// (for use in step 6) (correctTrialLatenciesOnly())
	// 6. Two standard deviation numbers: B3 & B6, B4 & B7 (ALL TRIALS) (SD) (TRIALS)
	// (for use in step 11) (correctTrialLatenciesOnly() -> correctTrialStandardDeviations())

	// 7. Replace each error latency with block mean (computed in step 5) + 600 ms (BLOCKS)
	// (for use in step 8) (correctTrialLatenciesOnly() -> replaceErrors())
	// 8. "Take the mean of the four blocks that matter" now with the data from step 7,
	// mean all blocks (ALL BLOCKS, TOGETHER) (BLOCKS) (for use in step)
	// (correctTrialLatenciesOnly() -> replaceErrors() -> meanBlocksTogether())

	// 9. Average all the time it took to complete blocks B3, B4, B6, B7 (ALL BLOCKS, SEPARATE) (MEAN)
	// (for use in step 10) (correctTrialLatenciesOnly() ->
	// replaceErrors() -> blockAveragesSeparate())
	// 10. Compute two differences: B6 minus B3 and B7 minus B4 (ENTIRE BLOCKS) (SUBTRACTION)
	// (correctTrialLatenciesOnly() -> replaceErrors() ->
	// blockAveragesSeparate() -> blocksSubtraction())
	// 11. Divide each difference by its associated pooled trials SD from Step 6
	// (correctTrialLatenciesOnly() -> replaceErrors() -> blockAveragesSeparate()
	// -> blocksSubtraction() -> divideBySD[correctTrialLatenciesOnly()
	// -> correctTrialStandardDeviations()])
	// 12. Average the two quotients from Step 11 (correctTrialLatenciesOnly() -> replaceErrors()
	// -> blockAveragesSeparate() -> blocksSubtraction() -> divideBySD[correctTrialLatenciesOnly() ->
	// correctTrialStandardDeviations()] -> averageTwoQuotients())
	// "Positive scores mean they favor one side while negative scores mean they favor the other."
	// End Summary

	// const timeStamps = {
	// 	1: new Timer(),
	// 	2: new Timer(),
	// 	3: new Timer(),
	// 	4: new Timer(),
	// 	5: new Timer(),
	// 	6: new Timer(),
	// 	7: new Timer(),
	// };

	// (correctTrialLatenciesOnly() -> correctTrialStandardDeviations())
	function correctTrialStandardDeviations(blockA, blockB) {
		// Two standard deviation numbers: B3 & B6, B4 & B7
		// const result = 1;
		// return result;

		// combine the 2 blocks & average
		const values = blockA.concat(blockB);
		console.log(values);

		const average = data => data.reduce((sum, value) => sum + value, 0) / data.length;
		const avg = average(values);
		const diffs = values.map(value => value - avg);
		const squareDiffs = diffs.map(diff => diff * diff);
		const avgSquareDiff = average(squareDiffs);
		const stdDev = Math.sqrt(avgSquareDiff);
		console.log(`stdDev: ${stdDev}`);
		return stdDev;
	}

	function correctTrialLatenciesOnly() {
		// eliminate over 10,000ms
		// Mean correct latencies
		// const result3 = 1;
		// const result6 = 1;
		// const result4 = 1;
		// const result7 = 1;
		// correctTrialStandardDeviations(result);

		const correctedLatencies = {
			3: [],
			4: [],
			6: [],
			7: [],
		};
		// loop array of relevant blocks
		for (let i = 0; i < analyzeBlocks.length; i += 1) {
			// arrays of correct trials, times
			// const correctTrials = [];
			// const correctTrialTimes = [];
			// number of correct in trialCorrect[block]
			// let count = 0;
			Object.keys(trialCorrect[analyzeBlocks[i]]).forEach((k, v) => { //eslint-disable-line
				// console.log(`k ${k}`);
				// console.log(`v ${v}`);

				// k = current trial (number)
				// v = index (number)
				// i = current block (number)
				console.log(`block: ${analyzeBlocks[i]}, trial: ${k}, trial time: ${trialTimes[analyzeBlocks[i]][k]}, correct: ${trialCorrect[analyzeBlocks[i]][k]}, under 10k: ${trialTimes[analyzeBlocks[i]][k] < 10000}`);
				// under 300ms?
				if (trialCorrect[analyzeBlocks[i]][k] && trialTimes[analyzeBlocks[i]][k] < 10000) {
					// correctTrials.push(k); // use length of this instead of count
					// correctTrialTimes.push(trialTimes[analyzeBlocks[i]][k]);
					// count += 1;
					correctedLatencies[analyzeBlocks[i]].push((trialTimes[analyzeBlocks[i]][k]));
				}
			});
			// console.log(correctTrialTimes);
			console.log('correctedLatencies');
			console.log(correctedLatencies);

			// Object.keys(trialCorrect[analyzeBlocks[i]]).forEach((k, v) => { //eslint-disable-line
			// 	if (trialCorrect[analyzeBlocks[i]][v]) {
			// 		// count -= 1;
			// 	}
			// });
		}
		// handle case if no entries were valid
		return correctedLatencies;
	}

	// function runSdOperation() {
	// 	const data = correctTrialLatenciesOnly();
	// 	correctTrialStandardDeviations(data);
	// }

	// (correctTrialLatenciesOnly() -> replaceErrors() -> blockAveragesSeparate()
	// -> blocksSubtraction() ->
	// divideBySD[runSdOperation()] -> averageTwoQuotients())

	// function averageTwoQuotients() {

	// }

	// function divideBySD() {
	// 	// correctTrialLatenciesOnly();
	// 	// correctTrialStandardDeviations();
	// 	// or
	// 	// runSdOperation();
	// }

	// function blocksSubtraction() {

	// }

	function blockAveragesSeparate(errorFreeLatencies) {
		const average = data => data.reduce((sum, value) => sum + value, 0) / data.length;
		const blockMeans = {};

		// get block mean
		for (let i = 0; i < analyzeBlocks.length; i += 1) {
			// console.log(`getting mean for corrected block: ${analyzeBlocks[i]}`);
			// console.log(errorFreeLatencies[analyzeBlocks[i]]);
			blockMeans[analyzeBlocks[i]] = average(errorFreeLatencies[analyzeBlocks[i]]);
			// console.log(blockMeans);
		}
		// console.log('blockMeans');
		// console.log(blockMeans);
		return blockMeans;
	}

	// function meanBlocksTogether() {

	// }

	function replaceErrors(correctedLatencies) {
		const average = data => data.reduce((sum, value) => sum + value, 0) / data.length;
		const blockMeans = {};
		// get block mean
		for (let i = 0; i < analyzeBlocks.length; i += 1) {
			// console.log(`getting mean for block: ${analyzeBlocks[i]}`);
			// console.log(correctedLatencies[analyzeBlocks[i]]);
			blockMeans[analyzeBlocks[i]] = average(correctedLatencies[analyzeBlocks[i]]);
			// console.log(blockMeans);
		}

		// replace error latencies with block mean
		for (let i = 0; i < analyzeBlocks.length; i += 1) {
			// console.log(`replacing errors for block: ${analyzeBlocks[i]}`);
			const blockLength = activityCount[blockType[analyzeBlocks[i]]];
			// console.log(`blockLength ${blockLength}`);
			// console.log(`currentBlockMeans = ${blockMeans[analyzeBlocks[i]]}`);
			// console.log(`blockMeans length ${blockMeans[analyzeBlocks[i]].length}`);
			while (correctedLatencies[analyzeBlocks[i]].length < blockLength) {
				// console.log(`pushing ${blockMeans[analyzeBlocks[i]] + 600}`);

				// + 600 originally, changed to correct for added modal time
				correctedLatencies[analyzeBlocks[i]].push(blockMeans[analyzeBlocks[i]] + 300);
			}
			// console.log('errorsReplaced:');
		}
		const errorsReplaced = correctedLatencies;
		// console.log(errorsReplaced);
		return errorsReplaced;
	}

	function runIt() {
		const correctedLatencies = correctTrialLatenciesOnly();

		const blocks36sd = correctTrialStandardDeviations(correctedLatencies[3], correctedLatencies[6]);
		const blocks47sd = correctTrialStandardDeviations(correctedLatencies[4], correctedLatencies[7]);

		const errorFreeLatencies = replaceErrors(correctedLatencies);
		// meanBlocksTogether();
		const blockAverages = blockAveragesSeparate(errorFreeLatencies);
		const blocks36sub = blockAverages[6] - blockAverages[3];
		// if this is positive, Republicans are favored (positive words)
		// if this is negative, Democrats are favored
		// console.log(`blockAverages[6] - blockAverages[3] ${blockAverages[6] - blockAverages[3]}`);

		const blocks47sub = blockAverages[7] - blockAverages[4];
		// if this is positive, Democrats are favored (positive words)
		// if this is negative, Republicans are favored
		// console.log(`blockAverages[7] - blockAverages[4] ${blockAverages[7] - blockAverages[4]}`);
		const blocks36quotient = blocks36sub / blocks36sd;
		console.log(`blocks36quotient ${blocks36quotient}`);
		const blocks47quotient = blocks47sub / blocks47sd;
		console.log(`blocks47quotient ${blocks47quotient}`);
		const blocksQuotients = (blocks36quotient + blocks47quotient) / 2;
		console.log(`BLOCKSQUOTIENT ${blocksQuotients}`);

		// strong if above one standard deviation, weak if below one standard deviation
		// The mean is x, standard deviation is y
		// Scores within one standard deviation of the mean are between x-y = a and x+y = b.

		const allTrials = (correctedLatencies[3].concat(correctedLatencies[4])
			.concat(correctedLatencies[6]).concat(correctedLatencies[7]));
		// console.log('all trials');
		// console.log(allTrials);
		const average = data => data.reduce((sum, value) => sum + value, 0) / data.length;
		const totalMean = average(allTrials);
		// console.log(`totalMean ${totalMean}`);
		const totalStDev = correctTrialStandardDeviations(
			correctedLatencies[3].concat(correctedLatencies[4]),
			correctedLatencies[6].concat(correctedLatencies[7])
		);
		// console.log(`totalStDev ${totalStDev}`);

		const meanMstdev = totalMean - totalStDev;
		const meanPstdev = totalMean + totalStDev;

		if (blocks36sub > blocks47sub) { // favors Republicans
			console.log('associates Republicans with positive words');
			$('.party-1').html('Republicans ');
			$('.party-2').html('Democrats ');
			$('.words-1').html('positive words ');
			if ((blocks36quotient > meanMstdev) && (blocks36quotient < meanPstdev)) { // weak association
				console.log('weak republican if');
				$('.strength-1').html('weak ');
			} else if ((blocks36quotient < meanMstdev) || (blocks36quotient > meanPstdev)) {
				// strong association
				console.log('strong republican else if');
				$('.strength-1').html('strong ');
			}

			if ((blocks47quotient > meanMstdev) && (blocks47quotient < meanPstdev)) { // weak association
				console.log('weak democrat if');
				$('.strength-2').html('weak ');
			} else if ((blocks47quotient < meanMstdev) || (blocks47quotient > meanPstdev)) {
				// strong association
				console.log('strong democrats else if');
				$('.strength-2').html('strong ');
			}

			if (blocks47sub > 0) { // Democrats positive words
				$('.words-2').html('positive words');
			} else {
				$('.words-2').html('negative words');
			}
		} else if (blocks36sub < blocks47sub) { // favors Democrats
			console.log('associates Democrats with positive words');
			$('.party-1').html('Democrats ');
			$('.party-2').html('Republicans ');
			$('.words-1').html('positive words ');
			if ((blocks47quotient > meanMstdev) && (blocks47quotient < meanPstdev)) { // weak association
				console.log('weak democrat if');
				$('.strength-1').html('weak ');
			} else if ((blocks47quotient < meanMstdev) || (blocks47quotient > meanPstdev)) {
				// strong association
				console.log('strong democrats else if');
				$('.strength-1').html('strong ');
			}

			if ((blocks36quotient > meanMstdev) && (blocks36quotient < meanPstdev)) { // weak association
				console.log('weak republican if');
				$('.strength-2').html('weak ');
			} else if ((blocks36quotient < meanMstdev) || (blocks36quotient > meanPstdev)) {
				// strong association
				console.log('strong republican else if');
				$('.strength-2').html('strong ');
			}

			if (blocks36sub > 0) { // Republicans positive words
				$('.words-2').html('positive words');
			} else {
				$('.words-2').html('negative words');
			}
		}
	}

	function setStage() {
		$('.pol-name').html('');
		if (stage === 8) {
			// correctTrialLatenciesOnly();
			navigable = false;
			runIt();
			$('.instructions').addClass('d-none');
			$('.min-height').addClass('d-none');
			// populateResults();
			$('.letter-col').addClass('d-none');
			$('.results').removeClass('d-none');
			$('.final').removeClass('d-none');
			$next.addClass('d-none');
			// $start.addClass('d-none');
			$('.touch-controls').addClass('d-none');
		} else {
			console.log(`SETTING BLOCK ${stage}`);
			$('.min-height').removeClass('d-none');
			$('.letter-col').removeClass('d-none');
			$('.left').html(voteType[stage].left); // these could potentially go into the start button logic
			$('.right').html(voteType[stage].right);
			$('.instructions').addClass('d-none');
			$(`.block-${stage}`).removeClass('d-none');
			setTimeout(() => {
				console.log('navigable');

				navigable = true;
				if (isTouchScreen) {
					console.log('show touch controls');

					$('.touch-controls').removeClass('d-none');
				}
			}, 20);
			// $start.removeClass('d-none');
		}
		// $('.touch-controls').addClass('d-none');
	}

	// function showNext() {
	// 	if (!isTouchScreen) {
	// 		$next.removeClass('d-none');
	// 	}
	// }

	let itemIndex = 0;

	function endTimeTrial() {
		// const elapsed = new Date() - start;
		trialEnd[stage][itemIndex] = new Date();
		trialTimes[stage][itemIndex] = trialEnd[stage][itemIndex] - trialStart[stage][itemIndex];
	}

	function startTimeTrial() {
		// const startTime = Date.now();

		// const interval = setInterval(() => {
		// 	const elapsedTime = Date.now() - startTime;
		// 	document.getElementById('timer').innerHTML = (elapsedTime / 1000).toFixed(3);
		// }, 20);

		// var start = new Date().getTime();

		// const start = new Date();

		// console.log('stopping timer');
		// if (itemIndex !== 0) endTimeTrial();
		trialStart[stage][itemIndex] = new Date();
	}


	function insertWord() {
		console.log('insertWord');

		if (blockHistory[stage][itemIndex] === undefined) {
			// generate new word
			const randomKey = Math.floor(Math.random() * 10); // pick a number 0-9
			const pickedWord = words[randomKey]; // pick a word with the num
			if (blockHistory[stage].indexOf(pickedWord) === -1) { // result is -1 if not duplicate
				blockHistory[stage].push(pickedWord); // save word to history
				// console.log('stopping timer');
				if (itemIndex !== 0) endTimeTrial();
				// console.log(trialTimes);
				itemIndex += 1;
				// console.log('starting timer');
				startTimeTrial(); // start time
				$('p.words').html(pickedWord);
				$('.pol-name').html('');
				// console.log(trialTimes);
			} else {
				insertWord();
			}
		}
	}

	function insertImage() {
		console.log('insertImage');

		if (blockHistory[stage][itemIndex] === undefined) {
			// generate new image
			const randomKey = Math.floor(Math.random() * 8); // pick a number 0-7
			const pickedImage = images[randomKey]; // pick an image with the num
			if (blockHistory[stage].indexOf(pickedImage) === -1) { // result is -1 if not duplicate
				blockHistory[stage].push(pickedImage); // save image to history
				// console.log('stopping timer');
				if (itemIndex !== 0) endTimeTrial();
				// console.log(trialTimes);
				itemIndex += 1;
				$('.pol-img').addClass('d-none');
				// console.log('starting timer');
				startTimeTrial(); // start time
				$(`.${pickedImage}`).removeClass('d-none');
				$('.pol-name').html(`${politicianNames[pickedImage]}`);
				// console.log(trialTimes);
			} else {
				// if !== -1 then generate another image
				insertImage();
			}
		}
	}

	let wordCount = 0;
	let imageCount = 0;
	let wordOrImage = Math.floor(Math.random() * 2) + 1;
	function insertEither() {
		const bhs = blockHistory[stage];
		if ((bhs[itemIndex] === undefined) && ((bhs.length) < activityCount[blockType[stage]])) {
			// should check when all images and words are exhausted
			$('p.words').html('');
			$('.pol-img').addClass('d-none');
			console.log(`wordOrImage: ${wordOrImage}`);

			if ((wordOrImage % 2 === 1 && (wordCount < activityCount.words))
			|| (imageCount === activityCount.images)
			) {
				console.log('INSERT EITHER - WORD');

				insertWord();
				wordCount += 1;
				wordOrImage += 1;
			} else if ((wordOrImage % 2 === 0 || (wordCount < activityCount.words))
			&& (imageCount < activityCount.images)) {
				console.log('INSERT EITHER - IMAGE');

				insertImage();
				imageCount += 1;
				wordOrImage += 1;
			}

			// const rng = Math.floor(Math.random() * 2) + 1;
			// if (rng === 1 && (wordCount < activityCount.words)) {
			// 	// needs to check if all words are used, word count should check against activityCount
			// 	// console.log('starting timer');
			// 	// startTimeTrial(); // start time
			// 	insertWord();
			// 	wordCount += 1;
			// } else if (rng === 2 && (imageCount < activityCount.images)) {
			// 	// needs to check if all images are used, img count should check against activityCount
			// 	// console.log('starting timer');
			// 	// startTimeTrial(); // start time
			// 	insertImage();
			// 	imageCount += 1;
			// } else {
			// 	insertEither();
			// }
		} else {
			// console.log('stopping timer - insertEither');
			if (itemIndex !== 0) endTimeTrial();

			wordCount = 0;
			imageCount = 0;

			activityInProgress = false;
			// timeStamps[stage].pause();
			// console.log(timeStamps[stage]);
			// console.log(timeStamps[stage].getTimeValues());

			itemIndex = 0;
			$('p.words').html('');
			$('.pol-img').addClass('d-none');
			// showNext();
			stage += 1;
			setStage();
			// $('.instructions').addClass('d-none');

			// $('.letter-col').addClass('d-none');
			// $('.touch-controls').addClass('d-none');
			// setTimeout(() => {
			// 	$('.continue-feedback').removeClass('d-none');
			// navigable = true;
			// }, 350);
		}
	}

	function handleActivityType() {
		// console.log('stopping timer');
		// endTimeTrial();

		if (blockType[stage] === 'words') {
			if ((blockHistory[stage].length) < activityCount[blockType[stage]]) {
				// console.log('starting timer');
				// startTimeTrial(); // start time
				insertWord();
			} else { // create a handleEndStage() function
				// console.log('stopping timer - handleActivityType words');
				if (itemIndex !== 0) endTimeTrial();

				activityInProgress = false;
				// timeStamps[stage].pause();
				// console.log(timeStamps[stage]);
				// console.log(timeStamps[stage].getTimeValues());

				itemIndex = 0;
				$('p.words').html('');
				// showNext();
				stage += 1;
				setStage();
				// $('.instructions').addClass('d-none');

				// $('.letter-col').addClass('d-none');
				// $('.touch-controls').addClass('d-none');
				// setTimeout(() => {
				// 	$('.continue-feedback').removeClass('d-none');
				// navigable = true;
				// }, 350);
				// press 1 or 0 to continue text
			}
		} else if (blockType[stage] === 'images') {
			if ((blockHistory[stage].length) < activityCount[blockType[stage]]) {
				// console.log('starting timer');
				// startTimeTrial(); // start time
				insertImage();
			} else { // create a handleEndStage() function
				// console.log('stopping timer - handleActivityType images');
				if (itemIndex !== 0) endTimeTrial();

				activityInProgress = false;
				// timeStamps[stage].pause();
				// console.log(timeStamps[stage]);
				// console.log(timeStamps[stage].getTimeValues());

				itemIndex = 0;
				$('.pol-img').addClass('d-none');
				// showNext();
				stage += 1;
				setStage();
				// $('.instructions').addClass('d-none');

				// $('.letter-col').addClass('d-none');
				// $('.touch-controls').addClass('d-none');
				// setTimeout(() => {
				// 	$('.continue-feedback').removeClass('d-none');
				// navigable = true;
				// }, 350);
				// press 1 or 0 to continue text
			}
		} else if (blockType[stage] === 'both') {
			insertEither();
		}
	}

	// function populateResults() {
	// for (let i = 1; i < 8; i += 1) {
	// 	$('.results').append(`<p>Stage ${i} timestamp:
	// ${timeStamps[i].getTimeValues().toString(['secondTenths'])}</p>`);
	// }
	// }

	// function setStage() {
	// 	if (stage === 8) {
	// 		// correctTrialLatenciesOnly();
	// 		runIt();
	// 		$('.min-height').addClass('d-none');
	// 		populateResults();
	// 		$('.letter-col').addClass('d-none');
	// 		$('.results').removeClass('d-none');
	// 		$('.final').removeClass('d-none');
	// 		$next.addClass('d-none');
	// 		$start.addClass('d-none');
	// 	} else {
	// 		console.log(`SETTING BLOCK ${stage}`);
	// 		$('.min-height').removeClass('d-none');
	// 		$('.letter-col').removeClass('d-none');
	// 		$('.left').html(voteType[stage].left);
	// these could potentially go into the start button logic
	// 		$('.right').html(voteType[stage].right);
	// 		$('.instructions').addClass('d-none');
	// 		$(`.block-${stage}`).removeClass('d-none');
	// 		$start.removeClass('d-none');
	// 	}
	// 	$('.touch-controls').addClass('d-none');
	// }

	function startActivity() {
		console.log(`ACTIVITY - BLOCK ${stage}`);

		handleActivityType();
		$('.instructions').addClass('d-none');
		// timeStamps[stage].start({ precision: 'secondTenths' });

		// if (isTouchScreen) {
		// 	console.log('show touch controls');

		// 	$('.touch-controls').removeClass('d-none');
		// 	$('.instructions').addClass('d-none');
		// }
	}

	// $start.click(() => {
	// 	// Start activity
	// 	startActivity();
	// 	activityInProgress = true;
	// 	$start.addClass('d-none');
	// });

	$next.click(() => {
		// console.log(trialTimes[3]);
		// console.log(trialCorrect[3]);
		// correctTrialLatenciesOnly();
		// runIt();

		// navigable = false;
		stage += 1;
		setStage();
		$next.addClass('d-none');
		// $('.continue-feedback').addClass('d-none');
	});

	// timeStamps[1].addEventListener('secondsUpdated', () => {
	// 	$('.time').html(timeStamps[1].getTimeValues().toString());
	// });

	function itemCategoryCheck(itemChecked) {
		const positive = positiveWords.indexOf(itemChecked);
		const negative = negativeWords.indexOf(itemChecked);
		const republican = republicansImages.indexOf(itemChecked);
		const democrat = democratsImages.indexOf(itemChecked);

		if (positive !== -1) {
			return 'Positive';
		} else if (negative !== -1) {
			return 'Negative';
		} else if (democrat !== -1) {
			return 'Democrat';
		} else if (republican !== -1) {
			return 'Republican';
		}
		return false;
	}

	function handleCorrectionStart() {
		activityInProgress = false;
		$('.modal').modal('show');
	}

	function accuracyChecker(keyPressed) {
		const blockHistoryCurrent = blockHistory[stage];
		const currentItem = blockHistoryCurrent[blockHistoryCurrent.length - 1];
		const itemCategory = itemCategoryCheck(currentItem);
		const keyedCategory = voteType[stage][keyPressed];

		if (keyedCategory.includes(itemCategory)) { // correct & record correct
			console.log('correct');
			// console.log(itemIndex);

			if (trialCorrect[stage][itemIndex] !== false) {
				console.log('correct, marked as true');
				trialCorrect[stage][itemIndex] = true;
			} else {
				console.log('correct, but was incorrect initially');
			}
			handleActivityType();
			$('.feedback-incorrect').addClass('d-none');
		} else if (allowCorrection[stage]) { // incorrect & allow fix
			console.log('incorrect and allowing fix');
			// $('.feedback-incorrect').removeClass('d-none');
			trialCorrect[stage][itemIndex] = false;
			handleCorrectionStart();
		} else { // incorrect & record error
			console.log('incorrect - recording');
			trialCorrect[stage][itemIndex] = false;
			handleActivityType();
		}
	}

	function handleKeyPress(keyPressed) {
		if (keyPressed === 'left' || keyPressed === 'right') {
			accuracyChecker(keyPressed);
		}
	}

	$(document).keydown((val) => {
		console.log(val.which);

		// 48 === 0 (right)
		// 49 === 1 (left)
		// 88 === x
		// if ((val.which === 49 || val.which === 48 || val.which === 88)
		// && activityInProgress === true) {
		if ((val.which === 49 || val.which === 48) && activityInProgress === true) {
			const keyPressed = keydownCodes[val.which];
			handleKeyPress(keyPressed);
		}

		if ((val.which === 49 || val.which === 48) && activityInProgress === false) {
			// handleCorrectionEnd
			$('.modal').modal('hide');
		}

		// 1 or 0 to continue
		if (navigable && (val.which === 49 || val.which === 48)) {
			navigable = false;
			// console.log('1 or 0 to continue 1');

			startActivity();
			activityInProgress = true;
			// $next.click();
		}
	});

	$('button.touch-controls').click((e) => {
		const keyPressed = $(e.target).attr('id');

		if (activityInProgress) {
			handleKeyPress(keyPressed);
		}

		// 1 or 0 to continue
		if (navigable) {
			navigable = false;
			// console.log('1 or 0 to continue 2');

			startActivity();
			activityInProgress = true;
			// $next.click();
		}
	});

	if ('ontouchstart' in document.documentElement) 	{
		console.log('Device is touch screen');
		isTouchScreen = true;
	} else 	{
		console.log('Device is not touch device');
		isTouchScreen = false;
	}

	$(document).keydown((val) => {
		if (val.which === 27) {
			$('.try-again').click();
		}
	});

	$('.modal').on('shown.bs.modal', () => {
		$('.try-again:visible').focus();
		$('.tab-able').attr('tabindex', '-1');
	});

	$('.modal').on('hidden.bs.modal', () => {
		activityInProgress = true; // handleCorrectionEnd
		$('.tab-able').attr('tabindex', '0');
	});
});
