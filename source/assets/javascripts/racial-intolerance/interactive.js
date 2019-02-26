$(document).ready(() => {
	const topoUrl = '/assets/images/delicacies/world-topo.json';
	const additionalData = {
		USA: {
			// img: '/assets/images/racial-intolerance/america.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Americans reported not wanting someone of another race as their neighbor, making the United States one of the most racially tolerant countries according to this measure.',
		},
		CAN: {
			// img: '/assets/images/racial-intolerance/canada.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Canadians reported not wanting someone of another race as their neighbor, making Canada one of the most racially tolerant countries according to this measure.',
		},
		AUS: {
			// img: '/assets/images/racial-intolerance/australia.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Australians reported not wanting someone of another race as their neighbor, making Australia one of the most racially tolerant countries according to this measure.',
		},
		CHN: {
			// img: '/assets/images/racial-intolerance/china.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Chinese people reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		FRA: {
			// img: '/assets/images/racial-intolerance/france.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of French people reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		ITA: {
			// img: '/assets/images/racial-intolerance/italy.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Italians reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		JPN: {
			// img: '/assets/images/racial-intolerance/japan.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Japanese people reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		MYS: {
			// img: '/assets/images/racial-intolerance/malaysia.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Malaysians reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		MEX: {
			// img: '/assets/images/racial-intolerance/mexico.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Mexicans reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		NOR: {
			// img: '/assets/images/racial-intolerance/norway.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Norwegians reported not wanting someone of another race as their neighbor, making Norway one of the most racially tolerant countries according to this measure.',
		},
		RUS: {
			// img: '/assets/images/racial-intolerance/russia.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Russians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		ZAF: {
			// img: '/assets/images/racial-intolerance/southafrica.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of South Africans reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		THA: {
			// img: '/assets/images/racial-intolerance/thailand.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Thais reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		UGA: {
			// img: '/assets/images/racial-intolerance/uganda.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Ugandans reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		GBR: {
			// img: '/assets/images/racial-intolerance/uk.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of British people reported not wanting someone of another race as their neighbor, making the United Kingdom one of the most racially tolerant countries according to this measure.',
		},
		DOM: {
			// img: '/assets/images/racial-intolerance/dominican-republic.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'Only 10–15 percent of Dominicans reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		VEN: {
			// img: '/assets/images/racial-intolerance/venezuela.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Venezuelans reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		BRA: {
			// img: '/assets/images/racial-intolerance/brazil.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Brazilians reported not wanting someone of another race as their neighbor, making Brazil one of the most racially tolerant countries according to this measure.',
		},
		PER: {
			// img: '/assets/images/racial-intolerance/peru.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Peruvians reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		CHL: {
			// img: '/assets/images/racial-intolerance/chile.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Chileans reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		URY: {
			// img: '/assets/images/racial-intolerance/uruguay.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Uruguayans reported not wanting someone of another race as their neighbor, making Uruguay one of the most racially tolerant countries according to this measure.',
		},
		GTM: {
			// img: '/assets/images/racial-intolerance/guatemala.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Guatemalans reported not wanting someone of another race as their neighbor, making Guatemala one of the most racially tolerant countries according to this measure.',
		},
		ARG: {
			// img: '/assets/images/racial-intolerance/argentina.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Argentinians reported not wanting someone of another race as their neighbor, making Argentina one of the most racially tolerant countries according to this measure.',
		},
		ESP: {
			// img: '/assets/images/racial-intolerance/spain.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Spaniards reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		BEL: {
			// img: '/assets/images/racial-intolerance/belgium.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Belgians reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		DEU: {
			// img: '/assets/images/racial-intolerance/germany.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Germans reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		CHE: {
			// img: '/assets/images/racial-intolerance/switzerland.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Swiss people reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		SWE: {
			// img: '/assets/images/racial-intolerance/sweden.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Swedes reported not wanting someone of another race as their neighbor, making Sweden one of the most racially tolerant countries according to this measure.',
		},
		FIN: {
			// img: '/assets/images/racial-intolerance/finland.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Finns reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		EST: {
			// img: '/assets/images/racial-intolerance/estonia.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Estonians reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		LVA: {
			// img: '/assets/images/racial-intolerance/latvia.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Latvians reported not wanting someone of another race as their neighbor, making Latvia one of the most racially tolerant countries according to this measure.',
		},
		LTU: {
			// img: '/assets/images/racial-intolerance/lithuania.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Lithuanians reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		POL: {
			// img: '/assets/images/racial-intolerance/poland.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Polish people reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		CZE: {
			// img: '/assets/images/racial-intolerance/czechia.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Czechs reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		SVK: {
			// img: '/assets/images/racial-intolerance/slovakia.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Slovakians reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		SVN: {
			// img: '/assets/images/racial-intolerance/slovenia.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Slovenians reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		HRV: {
			// img: '/assets/images/racial-intolerance/croatia.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Croatians reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		HUN: {
			// img: '/assets/images/racial-intolerance/hungary.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Hungarians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		BLR: {
			// img: '/assets/images/racial-intolerance/belarus.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5 to 10 percent of Belarusians reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		UKR: {
			// img: '/assets/images/racial-intolerance/ukraine.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Ukrainians reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		ROU: {
			// img: '/assets/images/racial-intolerance/romania.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Romanians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		MDA: {
			// img: '/assets/images/racial-intolerance/moldova.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Moldovans reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		SRB: {
			// img: '/assets/images/racial-intolerance/serbia.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Serbians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		BGR: {
			// img: '/assets/images/racial-intolerance/bulgaria.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Bulgarians reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		ALB: {
			// img: '/assets/images/racial-intolerance/albania.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Albanians reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		MKD: {
			// img: '/assets/images/racial-intolerance/macedonia.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Macedonians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		MAR: {
			// img: '/assets/images/racial-intolerance/morocco.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Moroccans reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		DZA: {
			// img: '/assets/images/racial-intolerance/algeria.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Algerians reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		MLI: {
			// img: '/assets/images/racial-intolerance/mali.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Malians reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		BFA: {
			// img: '/assets/images/racial-intolerance/burkina-faso.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Burkinabés reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		NGA: {
			// img: '/assets/images/racial-intolerance/nigeria.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Nigerians reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		EGY: {
			// img: '/assets/images/racial-intolerance/egypt.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Egyptians reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		ETH: {
			// img: '/assets/images/racial-intolerance/ethiopia.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Ethiopians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		TZA: {
			// img: '/assets/images/racial-intolerance/tanzania.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Tanzanians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		RWA: {
			// img: '/assets/images/racial-intolerance/rwanda.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Rwandans reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		ZMB: {
			// img: '/assets/images/racial-intolerance/zambia.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Zambians reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		ZWE: {
			// img: '/assets/images/racial-intolerance/zimbabwe.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Zimbabweans reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		TUR: {
			// img: '/assets/images/racial-intolerance/turkey.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Turkish people reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		GEO: {
			// img: '/assets/images/racial-intolerance/georgia.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Georgians reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		ARM: {
			// img: '/assets/images/racial-intolerance/armenia.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Armenians reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		AZE: {
			// img: '/assets/images/racial-intolerance/azerbaijan.jpg',
			// title: '',
			stats: '10%-15%',
			description: 'About 10–15 percent of Azerbaijanis reported not wanting someone of another race as their neighbor, demonstrating a fair degree of racial tolerance.',
		},
		IRN: {
			// img: '/assets/images/racial-intolerance/iran.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Iranians reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		CYP: {
			// img: '/assets/images/racial-intolerance/cyprus.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Cypriots reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		JOR: {
			// img: '/assets/images/racial-intolerance/jordan.jpg',
			// title: '',
			stats: 'More than 40%',
			description: 'More than 40 percent of Jordanians reported not wanting a neighbor of another race, which was one of the highest rates reported in this study.',
		},
		SAU: {
			// img: '/assets/images/racial-intolerance/saudi-arabia.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Saudi Arabians reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		KGZ: {
			// img: '/assets/images/racial-intolerance/kyrgyzstan.jpg',
			// title: '',
			stats: '15%-20%',
			description: 'About 15–20 percent of Kyrgyz people reported not wanting to have a neighbor of a different race, putting them in the middle of the scale on this measure of racial intolerance.',
		},
		PAK: {
			// img: '/assets/images/racial-intolerance/pakistan.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Pakistanis reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		BGD: {
			// img: '/assets/images/racial-intolerance/bangladesh.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Bangladeshis reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		VNM: {
			// img: '/assets/images/racial-intolerance/vietnam.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Vietnamese people reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		TWN: {
			// img: '/assets/images/racial-intolerance/taiwan.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Taiwanese people reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		PHL: {
			// img: '/assets/images/racial-intolerance/philippines.jpg',
			// title: '',
			stats: '20%-30%',
			description: 'About 20–30 percent of Filipinos reported not wanting someone of another race as their neighbor, demonstrating a significant degree of racial intolerance.',
		},
		AND: {
			// img: '/assets/images/racial-intolerance/andorra.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of Andorrans reported not wanting someone of another race as their neighbor, making Andorra one of the most racially tolerant countries according to this measure.',
		},
		SGA: {
			// img: '/assets/images/racial-intolerance/singapore.jpg',
			// title: '',
			stats: '5%-10%',
			description: 'Only 5–10 percent of Singaporeans reported not wanting someone of another race as their neighbor, demonstrating a high degree of racial tolerance.',
		},
		IDN: {
			// img: '/assets/images/racial-intolerance/indonesia.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of Indonesians reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure.',
		},
		NZL: {
			// img: '/assets/images/racial-intolerance/new-zealand.jpg',
			// title: '',
			stats: 'Less than 5%',
			description: 'Less than 5 percent of New Zealanders reported not wanting someone of another race as their neighbor, making New Zealand one of the most racially tolerant countries according to this measure.',
		},
		IND: {
			// img: '/assets/images/racial-intolerance/india.jpg',
			// title: '',
			stats: 'More than 40%',
			description: 'More than 40 percent of Indian citizens reported not wanting a neighbor of another race, which was one of the highest rates reported in this study.',
		},
		KOR: {
			// img: '/assets/images/racial-intolerance/south-korea.jpg',
			// title: '',
			stats: '30%-40%',
			description: 'About 30–40 percent of South Koreans reported not wanting to have a neighbor of another race, placing them toward the upper levels of racial intolerance according to this measure. ',
		},
	};

	const $reset = $('#reload');
	const $zoomIn = $('#zoom-in');
	const $zoomOut = $('#zoom-out');

	const $countriesDropdown = $('.dropdown-item');

	let currentScale = 1;

	/*eslint-disable */
	const parentWidth = $('#map').width();

	const width = parentWidth;
	const height = parentWidth * (528.33 / 816.81);
	const scalar = width / 816.81;
	const projection = d3.geoWinkel3().scale(scalar * 170).translate([width / 2, height / 1.75]);
	const geoPath = d3.geoPath().projection(projection);

	let centered;

	$('.modal').modal('show');
	setTimeout(function () {
		setTimeout(function () {
			$('.content').css('opacity', 1);
			$('.modal').modal('hide');
			$('.intro-text').removeClass('d-none');
			$('.legend').removeClass('d-none');
		}, 2250);
		interactive();
	}, 500);

	function interactive() {
		const loadCountries = () => new Promise((resolve, reject) => {
			fetch(topoUrl).then(res => res.json()).then((data) => {
				const countriesObj = {
					...data.objects.countries1,
					geometries: data.objects.countries1.geometries.concat(data.objects.countries2.geometries)
						.filter(g => g.type)
						.map((c) => {
							const data = additionalData[c.id];
							if (data) {
								return {
									...c,
									properties: {
										...c.properties,
										data,
									},
								};
							}
							return c;
						}),
				};
				resolve(topojson.feature(data, countriesObj).features);
			}).catch(reject);
		});
	
		d3.selection.prototype.moveToFront = function () {
			return this.each(function () {
				this.parentNode.appendChild(this);
			});
		};

		d3.selection.prototype.moveToBack = function() {
			return this.each(function() {
					var firstChild = this.parentNode.firstChild;
					if (firstChild) {
							this.parentNode.insertBefore(this, firstChild);
					}
			});
	};

		let clickedCountry = null;
		let clickedCountryNode = null;
		function hoverIn(d) {
			if (d.properties.data) {
				d3.select(this.parentNode).moveToFront();
				if (clickedCountryNode !== null) {
					d3.select(clickedCountryNode).moveToFront();
				}
				// $('.selection-value').html(d.properties.name);
			} else {
				d3.select(this.parentNode).moveToBack();
				if (clickedCountryNode !== null) {
					d3.select(clickedCountryNode).moveToFront();
				}
			}// else if (clickedCountry === null) {
				// $('.selection-value').html('Countries');
			// }
		}

		function hoverOut() {
			if (clickedCountry !== null) {
				d3.select(this.parentNode).moveToFront();
				d3.select(clickedCountryNode).moveToFront();
				$('.selection-value').html(clickedCountry.properties.name);
			}
		}
	
		const countryId = (country) => {
			const id = (country.id.startsWith('-')) ? country.properties.name.replace(/\s/g, '-') : country.id;
			return `country-${id.toLowerCase()}`;
		};

		let svg = d3.select('.map');
		const g = svg.append('g');

		svg
			.append('defs')
			.append('pattern')
				.attr('id', 'diagonalHatch')
				.attr('patternUnits', 'userSpaceOnUse')
				.attr('width', 4) // width and height make it diagonal
				.attr('height', 4)
			.append('path')
				.attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
				.attr('stroke', '#000000') // stripes
				.attr('stroke-width', 1); // width
	
		const countryClass = (country) => {
			// const classList = ['country', 'd-none'];
			const classList = ['country'];
			if (country.properties.data) {
				classList.push('has-data');
				// 'Less than 5%'
				// '5%-10%'
				// '10%-15%'
				// '15%-20%'
				// '20%-30%'
				// '30%-40%'
				// 'More than 40%'
				switch (country.properties.data.stats) {
				case 'Less than 5%':
					classList.push('level-one');
					classList.push('no-fill');
					break;
				case '5%-10%':
					classList.push('level-two');
					classList.push('no-fill');
					break;
				case '10%-15%':
					classList.push('level-three');
					classList.push('no-fill');
					break;
				case '15%-20%':
					classList.push('level-four');
					classList.push('no-fill');
					break;
				case '20%-30%':
					classList.push('level-five');
					classList.push('no-fill');
					break;
				case '30%-40%':
					classList.push('level-six');
					classList.push('no-fill');
					break;
				case 'More than 40%':
					classList.push('level-seven');
					classList.push('no-fill');
					break;
				default:
					break;
					}
			} else {
				classList.push('no-data');
			}
			return classList.join(' ');
		};
	
		const zoomHandle = d3
			.zoom()
			.scaleExtent([0.75, 2.5])
			// .scaleExtent([0.75, 3.5])
			.translateExtent([[-200, -200], [(width + 200), (height + 200)]])
			// .translateExtent([[-100, -100], [(width + 100), (height + 100)]])
			// [x0, y0] top-left corner, [x1, y1] bottom-right corner
			.on('zoom', (e) => {
				currentScale = d3.event.transform.k;
				if (d3.event && d3.event.sourceEvent && (d3.event.sourceEvent.type === 'mousemove' || d3.event.sourceEvent.type === 'touchmove')) {
					g.attr('transform', d3.event.transform);
				} else {
					g.transition()
						.duration(550)
						.attr('transform', d3.event.transform);
				}
			});

		svg.call(zoomHandle);

		svg.on('wheel.zoom', null);

		function createCountries(countries) {
			// append a `g.country` for every country entry
			const country = g.selectAll('g')
				.data(countries)
				.enter().append('g')
				.attr('aria-hidden', true)
				.attr('class', data => countryClass(data))
				.attr('id', countryId); // give it an id by running it through our countryId function

			// first child should be a title element that has the country name
			// this causes the title of the country to appear on hover

			country.append('title').text(data => data.properties.name);
			// finally, create a path using our geoPath function
			country.append('path').attr('d', geoPath).on('click', clicked).on('mouseenter', hoverIn).on('mouseleave', hoverOut).append('rect') // stripes

			var stripedCountries = g.selectAll('.no-data');
			stripedCountries.attr('fill', 'url(#diagonalHatch)');
		}

		svg.append('rect')
			.on('click', clicked);
	
		function resize() {
			svg = d3.select('.map')
				.attr('width', width)
				.attr('height', height);
		}

		if ($(window).width() >= 1200) {
			$('.map').attr({
				width: '960',
				height: '600',
				viewBox: '0 0 960 600',
				preserveAspectRatio: 'xMidYMid meet',
			});
	
			const aspect = width / height;
			const container = $('.map').parent();
			d3.select(window)
				.on('resize', () => {
					const targetWidth = container.width();
					svg.attr('width', targetWidth);
					svg.attr('height', targetWidth / aspect);
				});
		 }
	
		let countriesActivated = 0;

		function handleCountryColor(dropdownMenuItem, countryIdE) {
			if (!$(dropdownMenuItem).hasClass('activated')) {
				countriesActivated += 1;
				$(dropdownMenuItem).addClass('activated');
				$(`#country-${countryIdE}`).removeClass('no-fill');
				if (countriesActivated === 5) {
					// $('.intro-text').addClass('d-none');
					$('.after-text').removeClass('d-none');
					setTimeout(() => {
						$('.country').removeClass('no-fill');
					}, 500);
				}
			}
		}

		function clicked(d) {
			$('path').removeClass('active-country');
			if (d.properties.data) { // has property data
				$('.intro-text').addClass('d-none');
				const countryIdE = $(this).parent().attr('id').substr($(this).parent().attr('id').length - 3);
				handleCountryColor($(`#${countryIdE}`), countryIdE);

				clickedCountry = d;
				clickedCountryNode = this.parentNode;
				$(this).addClass('active-country');
				d3.select(this.parentNode).moveToFront();
				$('.selection-value').html(`${d.properties.name}`);
	
				$('.description').removeClass('d-none');
				$('.info-box').removeClass('d-none');
				$('.country-name').text(d.properties.name)
					.siblings('img')
					.remove();
				$('.country-name').after(`<img src='' alt='' class='active-img d-none' />`)
					.siblings('.food-description')
					.remove();
				$('.active-img').after(`<p class='food-description'><b></b><br><span class='food-desc-mobile'>${d.properties.data.description}<span></p>`);
	
				let x;
				let	y;
				let	k;
	
				const centroid = geoPath.centroid(d);
				[x, y] = [centroid[0], centroid[1]];
				k = 2.5;
				currentScale = k;
				centered = d;

				// if (d && centered !== d) { // centers on a country
				// 	const centroid = geoPath.centroid(d);
				// 	[x, y] = [centroid[0], centroid[1]];
				// 	k = 2.5;
				// 	currentScale = k;
				// 	centered = d;
				// } else { // moves to center of the map
				// 	x = width / 2;
				// 	y = height / 2;
				// 	k = currentScale;
				// 	centered = null;
				// }
	
				g.selectAll('path')
					.classed('active-country', centered && (d => d === centered));
	
				zoomHandle.scaleTo(svg, k);
				zoomHandle.translateTo(svg, x, y);
			}
		}
	
		if ($(window).width() < 1200) {
			window.addEventListener('resize', resize);
		}
	
		loadCountries().then(createCountries);
		resize();
	
		$zoomIn.click(() => {
			currentScale += 0.25;
			zoomHandle.scaleTo(svg, currentScale);
		});
	
		$zoomOut.click(() => {
			currentScale -= 0.25;
			zoomHandle.scaleTo(svg, currentScale);
		});
	
		function reset() {
			$('path').removeClass('active-country');
			const x = width / 2;
			const y = height / 2;
			const k = 1;
			currentScale = 1;
	
			$('.country').addClass('no-fill');
			countriesActivated = 0;
			$('.dropdown-item').removeClass('activated');

			setTimeout(() => {
				zoomHandle.scaleTo(svg, k);
				zoomHandle.translateTo(svg, x, y);
				$('.selection-value').html('Countries');
				$('.info-box').addClass('d-none');
				$('.intro-text').removeClass('d-none');
				$('.after-text').addClass('d-none');
			}, 500);
		}
	
		$reset.click(() => {
			reset();
		});
	
		jQuery.fn.d3Click = function () {
			this.each(function (i, e) {
				const evt = new MouseEvent('click');
				e.dispatchEvent(evt);
			});
		};

		$countriesDropdown.click((e) => {
			const countryTarget = e.target;
			const countryIdE = $(e.target).attr('id');
			handleCountryColor(countryTarget, countryIdE);
			$(`#country-${countryIdE}`).find('path').d3Click();
		});
	
		$(document).keydown((val) => {
			if (val.which === 27) {
				reset();
			}
		});

		$('.dropdown-parent').on('shown.bs.dropdown', () => {
			$('.dropdown-item:visible:first').focus();
		});
	}
});
