$(document).ready(() => {
	const topoUrl = '/assets/images/delicacies/world-topo.json';
	// const topoUrl = 'https://cdn.rawgit.com/deldersveld/topojson/6f98c7bc/world-countries-sans-antarctica.json';
	const additionalData = {
		USA: {
			img: '/assets/images/delicacies/america.jpg',
			title: 'Flavored gelatin',
			description: 'Dessert thickened using collagen from animal skin, bones, and connective tissues.',
		},
		AUS: {
			img: '/assets/images/delicacies/australia.jpg',
			title: 'Witchetty grub',
			description: 'A worm eaten raw or cooked.',
		},
		KHM: {
			img: '/assets/images/delicacies/cambodia.jpg',
			title: 'Balut',
			description: 'A developing duck embryo that is boiled alive and eaten in the shell.',
		},
		CHN: {
			img: '/assets/images/delicacies/china.jpg',
			title: 'Century eggs',
			description: 'Quail or duck eggs preserved in a mixture of clay, ash, salt and quicklime for a long period of time&mdash;weeks or even months.',
		},
		COL: {
			img: '/assets/images/delicacies/colombia.jpg',
			title: 'Hormigas culonas (big butt ants)',
			description: 'Large ants that are toasted and salted.',
		},
		ECU: {
			img: '/assets/images/delicacies/ecuador.jpg',
			title: 'Cuy',
			description: 'Cooked guinea pig.',
		},
		FRA: {
			img: '/assets/images/delicacies/france.jpg',
			title: 'Escargots',
			description: 'Snails cooked in white wine sauce.',
		},
		GRL: {
			img: '/assets/images/delicacies/greenland.jpg',
			title: 'Kiviak',
			description: 'Whole birds are stuffed into a seal (beaks and all) and left to ferment for seven months before consumption.',
		},
		ISL: {
			img: '/assets/images/delicacies/iceland.jpg',
			title: 'Hakarl',
			description: 'Cured, rotted meat from the body of a greenland or basking shark.',
		},
		ITA: {
			img: '/assets/images/delicacies/italy.jpg',
			title: 'Casu marzu',
			description: 'A wheel of parmesan cheese left out for a long time. Contains live insect larvae that break down the cheese and make it softer, albeit more maggot filled.',
		},
		JAM: {
			img: '/assets/images/delicacies/jamaica.jpg',
			title: 'Ackee and saltfish',
			description: 'A traditional Jamaican dish made of sauteed saltfish with boiled ackee fruit, onions, tomatoes, and peppers. The dish is unique to the region because parts of the ackee fruit are toxic.',
		},
		JPN: {
			img: '/assets/images/delicacies/japan.jpg',
			title: 'Shiokara',
			description: 'Marine animals cooked in a sauce of their own fermented organs.',
		},
		MYS: {
			img: '/assets/images/delicacies/malaysia.jpg',
			title: 'Sago worms',
			description: 'Larvae of the sago palm weevil. Either eaten raw or cooked.',
		},
		MEX: {
			img: '/assets/images/delicacies/mexico.jpg',
			title: 'Escamoles',
			description: 'The larvae of ants from the tequila plant.',
		},
		NOR: {
			img: '/assets/images/delicacies/norway.jpg',
			title: 'Smalahove',
			description: 'A sheep\'s head.',
		},
		RUS: {
			img: '/assets/images/delicacies/russia.jpg',
			title: 'Moloka',
			description: 'The milt&mdash;or seminal fluid&mdash;of fish. It can also include the fish genitalia.',
		},
		ZAF: {
			img: '/assets/images/delicacies/southafrica.jpg',
			title: 'Mopane worm (mashonzha)',
			description: 'Worms plucked from trees and boiled with garlic and tomatoes.',
		},
		THA: {
			img: '/assets/images/delicacies/thailand.jpg',
			title: 'Larb mote daeng',
			description: 'A dish made of red ant eggs. Considered one of the most delicious meals in the region.',
		},
		UGA: {
			img: '/assets/images/delicacies/uganda.jpg',
			title: 'Grasshoppers (nsenene)',
			description: 'Roasted or fried grasshoppers.',
		},
		GBR: {
			img: '/assets/images/delicacies/uk.jpg',
			title: 'Blood pudding',
			description: 'A type of blood sausage made from beef suet or pork fat, pork blood, and oatmeal or grits.',
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
		}, 2000);
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

		let clickedCountry = null;
		function hoverIn(d) {
			if (d.properties.data) {
				d3.select(this.parentNode).moveToFront();
				$('.selection-value').html(d.properties.name);
			} else if (clickedCountry === null) {
				$('.selection-value').html('Countries');
			}
		}

		function hoverOut() {
			if (clickedCountry) {
				d3.select(this.parentNode).moveToFront();
				$('.selection-value').html(clickedCountry.properties.name);
			}
		}
	
		const countryId = (country) => {
			const id = (country.id.startsWith('-')) ? country.properties.name.replace(/\s/g, '-') : country.id;
			return `country-${id.toLowerCase()}`;
		};
	
		const countryClass = (country) => {
			const classList = ['country'];
			if (country.properties.data) {
				classList.push('has-data');
			}
			return classList.join(' ');
		};
	
		let svg = d3.select('.map');
		const g = svg.append('g');
		const zoomHandle = d3
			.zoom()
			.scaleExtent([0.75, 2.5])
			.translateExtent([[-100, -100], [(width + 100), (height + 100)]])
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
			country.append('path').attr('d', geoPath).on('click', clicked).on('mouseenter', hoverIn).on('mouseleave', hoverOut);
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
	
	
		function clicked(d) {
			$('path').removeClass('active-country');
			if (d.properties.data) { // has property data
				clickedCountry = d;
				$(this).addClass('active-country');
				d3.select(this.parentNode).moveToFront();
				$('.selection-value').html(`${d.properties.name}`);
	
				$('.description').removeClass('d-none');
				$('.info-box').removeClass('d-none');
				$('.country-name').text(d.properties.name)
					.siblings('img')
					.remove();
				$('.country-name').after(`<img src='${d.properties.data.img}' alt='' class='active-img' />`)
					.siblings('.food-description')
					.remove();
				$('.active-img').after(`<p class='food-description'><b>${d.properties.data.title}</b><br><span class='food-desc-mobile'>${d.properties.data.description}<span></p>`);
	
				let x;
				let	y;
				let	k;
	
				if (d && centered !== d) {
					const centroid = geoPath.centroid(d);
					[x, y] = [centroid[0], centroid[1]];
					k = 2;
					currentScale = k;
					centered = d;
				} else {
					x = width / 2;
					y = height / 2;
					k = currentScale;
					centered = null;
				}
	
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
	
			zoomHandle.scaleTo(svg, k);
			zoomHandle.translateTo(svg, x, y);
			$('.selection-value').html('Countries');
			$('.info-box').addClass('d-none');
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
			const countryIdE = $(e.target).attr('id');
			$(`#country-${countryIdE}`).find('path').d3Click();
		});
	
		$(document).keydown((val) => {
			if (val.which === 27) {
				reset();
			}
		});
	}
});
