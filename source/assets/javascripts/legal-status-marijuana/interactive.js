$(document).ready(() => {
	if ($(window).width() <= 800) {
		$('#interactive-content')
			.removeClass('container')
			.addClass('container-fluid');
	} else if ($(window).width() > 800) {
		$('#interactive-content')
			.removeClass('container-fluid')
			.addClass('container');
	}

	setTimeout(() => {
		const map = new Datamap({ // eslint-disable-line
			scope: 'usa',
			element: document.getElementById('map_election'),
			responsive: true,
			geographyConfig: {
				// highlightBorderColor: '#bada55',
				// popupTemplate(geography, data) {
				// 	return `<div class="hoverinfo">${geography.properties.name}
				// Electoral Votes: ${data.electoralVotes}`;
				// },
				// highlightBorderWidth: 3,
				highlightOnHover: false,
				popupOnHover: false,
			},

			// #edf8fb
			// #ccece6
			// #99d8c9
			// #66c2a4
			// #2ca25f
			// #006d2c


			fills: {
				// Illegal: '#EAA9A8',
				// Recreational: 'url(#diagonal-stripe)',
				Recreational: 'url(#recreational)',
				Medicinal: 'url(#diagonal-stripe-light-green)',
				medicinalDecriminalized: 'url(#medicinal-decriminalized)',
				cannabisMedicinal: 'url(#diagonal-stripe-green)',
				Decriminalized: 'url(#decriminalized)',
				defaultFill: 'url(#default-fill)',
			},
			data: {
				AZ: {
					fillKey: 'Illegal',
				},
				CO: {
					fillKey: 'Decriminalized',
				},
				DE: {
					fillKey: 'Illegal',
				},
				FL: {
					fillKey: 'Illegal',
				},
				GA: {
					fillKey: 'Illegal',
				},
				HI: {
					fillKey: 'Illegal',
				},
				ID: {
					fillKey: 'Illegal',
				},
				IL: {
					fillKey: 'Illegal',
				},
				IN: {
					fillKey: 'Illegal',
				},
				IA: {
					fillKey: 'Illegal',
				},
				KS: {
					fillKey: 'Illegal',
				},
				KY: {
					fillKey: 'Illegal',
				},
				LA: {
					fillKey: 'Illegal',
				},
				MD: {
					fillKey: 'Illegal',
				},
				ME: {
					fillKey: 'Decriminalized',
				},
				MA: {
					fillKey: 'Illegal',
				},
				MN: {
					fillKey: 'Decriminalized',
				},
				MI: {
					fillKey: 'Illegal',
				},
				MS: {
					fillKey: 'Decriminalized',
				},
				MO: {
					fillKey: 'Illegal',
				},
				MT: {
					fillKey: 'Illegal',
				},
				NC: {
					fillKey: 'Decriminalized',
				},
				NE: {
					fillKey: 'Decriminalized',
				},
				NV: {
					fillKey: 'Illegal',
				},
				NH: {
					fillKey: 'Illegal',
				},
				NJ: {
					fillKey: 'Illegal',
				},
				NY: {
					fillKey: 'Decriminalized',
				},
				ND: {
					fillKey: 'Illegal',
				},
				NM: {
					fillKey: 'Illegal',
				},
				OH: {
					fillKey: 'Decriminalized',
				},
				OK: {
					fillKey: 'Illegal',
				},
				OR: {
					fillKey: 'Decriminalized',
				},
				PA: {
					fillKey: 'Illegal',
				},
				RI: {
					fillKey: 'Illegal',
				},
				SC: {
					fillKey: 'Illegal',
				},
				SD: {
					fillKey: 'Illegal',
				},
				TN: {
					fillKey: 'Illegal',
				},
				TX: {
					fillKey: 'Illegal',
				},
				UT: {
					fillKey: 'Illegal',
				},
				WI: {
					fillKey: 'Illegal',
				},
				VA: {
					fillKey: 'Illegal',
				},
				VT: {
					fillKey: 'Illegal',
				},
				WA: {
					fillKey: 'Illegal',
				},
				WV: {
					fillKey: 'Illegal',
				},
				WY: {
					fillKey: 'Illegal',
				},
				CA: {
					fillKey: 'Decriminalized',
				},
				CT: {
					fillKey: 'Illegal',
				},
				AK: {
					fillKey: 'Illegal',
				},
				AR: {
					fillKey: 'Illegal',
				},
				AL: {
					fillKey: 'Illegal',
				},
			},
		});
		map.labels(); // Show/hide labels

		// New
		// Pre-1996
		// Decriminalized: OR, ME, CO, CA, OH, MN, MS, NY, NC, NE

		// 1996 (updated)
		// Decriminalized: OR, ME, CO, OH, MN, MS, NY, NC, NE
		// Medicinal & Decriminalized: CA

		// New
		// 1997-1998
		// Decriminalized: ME, CO, OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA
		// Medicinal & Decriminalized: CA, OR

		// 1999 (updated)
		// Decriminalized: CO, OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA, AZ
		// Medicinal & Decriminalized: CA, OR, ME

		// 2000 (no longer 1996-2000) (updated)
		// Decriminalized: OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA, NV, HI
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2004 (now 2001-2004) (updated)
		// Decriminalized: OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA, AZ, NV, HI, MT, VT
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// New
		// 2006 (2005-2006)
		// Decriminalized: OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA, NV, HI, MT, VT, RI
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2007 (updated)
		// Decriminalized: OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2008 (updated)
		// Decriminalized: MA, OH, MN, MS, NY, NC, NE
		// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2009 (updated)
		// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL
		// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2010 (updated)
		// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL
		// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI, DC
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2011 (updated)
		// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL, CT, LA
		// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI, DC, NJ, DE
		// Medicinal & Decriminalized: CA, OR, CO, ME

		// 2012 (updated)
		// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL, CT, LA
		// Medicinal: AK, NV, HI, MT, VT, RI, NM, MI, DC, NJ, DE
		// Medicinal & Decriminalized: CA, OR, ME
		// Recreational: WA, CO

		// 2013 (updated)
		// Decriminalized: OH, MN, MS, NY, NC, NE, IL, LA
		// Medicinal: AK, NV, AZ, HI, MT, VT, NM, MI, DC, NJ, DE, NH
		// Medicinal & Decriminalized: CA, OR, ME, RI, CT, MA
		// Recreational: WA, CO

		// 2014 (updated)
		// Decriminalized: OH, NC, NE, LA,
		// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY
		// Medicinal: AZ, NV, HI, MT, VT, NM, NJ, DE, NH, MD
		// Recreational: WA, CO, AK, OR, DC
		// Medicinal & Decriminalized: CA, OR, ME, RI, CT, MA, IL, NY, MI, MN

		// 2015 (updated)
		// Decriminalized: OH, NE, LA
		// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
		// Medicinal: AZ, NV, HI, MT, VT, NM, NJ, DE, NH, MD
		// Recreational: WA, CO, AK, OR, DC
		// Medicinal & Decriminalized: CA, ME, RI, CT, MA, IL, NY, MI, MN

		// 2016 (updated)
		// Decriminalized: OH, NE, LA
		// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
		// Medicinal: AZ, HI, MT, VT, NM, NJ, DE, NH, MD, PA, ND, FL, AR
		// Recreational: WA, CO, AK, OR, DC, CA, NV, ME, MA
		// Medicinal & Decriminalized: RI, CT, IL, NY, MI, MN

		// 2017 (updated)
		// Decriminalized: NE
		// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
		// Medicinal: AZ, HI, MT, VT, NM, NJ, DE, NH, MD, PA, ND, FL, AR, WV
		// Recreational: WA, CO, AK, OR, DC, CA, NV, ME, MA
		// Medicinal & Decriminalized: RI, CT, IL, NY, MI, MN, LA, OH

		// 2018 (updated)
		// Decriminalized: NE
		// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
		// Medicinal: AZ, HI, MT, VT, NM, NJ, DE, NH, MD, PA, ND, FL, AR, WV
		// Recreational: WA, CO, AK, OR, DC, CA, NV, ME, MA
		// Medicinal & Decriminalized: RI, CT, IL, NY, MI, MN, LA, OH

		window.addEventListener('resize', () => {
			map.resize();
		});

		// Pre-1996
		// 1996-2000
		// 2001-2004
		// 2005-2008
		// 2009
		// 2010
		// 2011
		// 2012
		// 2013
		// 2014
		// 2015
		// 2016
		// 2017
		// 2018

		// Pre-1996
		// 1996
		// 1997-1998
		// 1999
		// 2000
		// 2001-2004
		// 2005-2006
		// 2007
		// 2008
		// 2009
		// 2010
		// 2011
		// 2012
		// 2013
		// 2014
		// 2015
		// 2016
		// 2017
		// 2018

		const $sliderBar = $('.slider-1');
		// const yearRanges = ['pre-1996', '1996-2000', '2001-2004', '2005-2008', '2009',
		// '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
		const yearRanges = ['pre-1996', '1996', '1997-1998', '1997-1998', '1999', '2000', '2001-2004', '2001-2004', '2001-2004', '2001-2004', '2005-2006', '2005-2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
		const yearName = ['Pre-1996', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
		const colorData = {
			'pre-1996': {
				// Decriminalized: OR, ME, CO, CA, OH, MN, MS, NY, NC, NE
				OR: map.options.fills.Decriminalized,
				ME: map.options.fills.Decriminalized,
				CO: map.options.fills.Decriminalized,
				CA: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
			},
			1996: {
				// Decriminalized: OR, ME, CO, OH, MN, MS, NY, NC, NE
				// Medicinal & Decriminalized: CA
				OR: map.options.fills.Decriminalized,
				ME: map.options.fills.Decriminalized,
				CO: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				CA: map.options.fills.medicinalDecriminalized,
			},
			'1997-1998': {
				// Decriminalized: ME, CO, OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA
				// Medicinal & Decriminalized: CA, OR
				ME: map.options.fills.Decriminalized,
				CO: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
			},
			1999: {
				// Decriminalized: CO, OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA, AZ
				// Medicinal & Decriminalized: CA, OR, ME
				CO: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2000: {
				// Decriminalized: OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA, NV, HI
				// Medicinal & Decriminalized: CA, OR, CO, ME
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			'2001-2004': {
				// 2004 (now 2001-2004)
				// Decriminalized: OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA, AZ, NV, HI, MT, VT
				// Medicinal & Decriminalized: CA, OR, CO, ME
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal,
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			'2005-2006': {
				// Decriminalized: OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA, NV, HI, MT, VT, RI
				// Medicinal & Decriminalized: CA, OR, CO, ME
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2007: {
				// Decriminalized: OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM
				// Medicinal & Decriminalized: CA, OR, CO, ME
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2008: {
				// Decriminalized: MA, OH, MN, MS, NY, NC, NE
				// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI
				// Medicinal & Decriminalized: CA, OR, CO, ME
				MA: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				MI: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2009: {
				// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL
				// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI
				// Medicinal & Decriminalized: CA, OR, CO, ME
				MA: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				IL: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				MI: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2010: {
				// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL
				// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI, DC
				// Medicinal & Decriminalized: CA, OR, CO, ME
				MA: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				IL: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				MI: map.options.fills.Medicinal,
				DC: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2011: {
				// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL, CT, LA
				// Medicinal: AK, WA, NV, HI, MT, VT, RI, NM, MI, DC, NJ, DE
				// Medicinal & Decriminalized: CA, OR, CO, ME
				MA: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				IL: map.options.fills.Decriminalized,
				CT: map.options.fills.Decriminalized,
				LA: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				WA: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				MI: map.options.fills.Medicinal,
				DC: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				CO: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
			},
			2012: {
				// Decriminalized: MA, OH, MN, MS, NY, NC, NE, IL, CT, LA
				// Medicinal: AK, NV, HI, MT, VT, RI, NM, MI, DC, NJ, DE
				// Medicinal & Decriminalized: CA, OR, ME
				// Recreational: WA, CO
				MA: map.options.fills.Decriminalized,
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				IL: map.options.fills.Decriminalized,
				CT: map.options.fills.Decriminalized,
				LA: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal, // Not in data
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				RI: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				MI: map.options.fills.Medicinal,
				DC: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
			},
			2013: {
				// Decriminalized: OH, MN, MS, NY, NC, NE, IL, LA
				// Medicinal: AK, NV, AZ, HI, MT, VT, NM, MI, DC, NJ, DE, NH
				// Medicinal & Decriminalized: CA, OR, ME, RI, CT, MA
				// Recreational: WA, CO
				OH: map.options.fills.Decriminalized,
				MN: map.options.fills.Decriminalized,
				MS: map.options.fills.Decriminalized,
				NY: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				IL: map.options.fills.Decriminalized,
				LA: map.options.fills.Decriminalized,

				AK: map.options.fills.Medicinal,
				AZ: map.options.fills.Medicinal,
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				MI: map.options.fills.Medicinal,
				DC: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,
				NH: map.options.fills.Medicinal,

				CA: map.options.fills.medicinalDecriminalized,
				OR: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
				RI: map.options.fills.medicinalDecriminalized,
				CT: map.options.fills.medicinalDecriminalized,
				MA: map.options.fills.medicinalDecriminalized,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
			},
			2014: {
				// Decriminalized: OH, NC, NE, LA,
				// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY
				// Medicinal: AZ, NV, HI, MT, VT, NM, NJ, DE, NH, MD
				// Recreational: WA, CO, AK, OR, DC
				// Medicinal & Decriminalized: CA, OR, ME, RI, CT, MA, IL, NY, MI, MN
				OH: map.options.fills.Decriminalized,
				NC: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				LA: map.options.fills.Decriminalized,

				UT: map.options.fills.cannabisMedicinal,
				IA: map.options.fills.cannabisMedicinal,
				MO: map.options.fills.cannabisMedicinal,
				MS: map.options.fills.cannabisMedicinal,
				AL: map.options.fills.cannabisMedicinal,
				SC: map.options.fills.cannabisMedicinal,
				TN: map.options.fills.cannabisMedicinal,
				KY: map.options.fills.cannabisMedicinal,

				AZ: map.options.fills.Medicinal,
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,
				NH: map.options.fills.Medicinal,
				MD: map.options.fills.Medicinal,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
				AK: map.options.fills.Recreational,
				OR: map.options.fills.Recreational,
				DC: map.options.fills.Recreational,

				CA: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
				RI: map.options.fills.medicinalDecriminalized,
				CT: map.options.fills.medicinalDecriminalized,
				MA: map.options.fills.medicinalDecriminalized,
				IL: map.options.fills.medicinalDecriminalized,
				NY: map.options.fills.medicinalDecriminalized,
				MI: map.options.fills.medicinalDecriminalized,
				MN: map.options.fills.medicinalDecriminalized,
			},
			2015: {
				// Decriminalized: OH, NE, LA
				// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
				// Medicinal: AZ, NV, HI, MT, VT, NM, NJ, DE, NH, MD
				// Recreational: WA, CO, AK, OR, DC
				// Medicinal & Decriminalized: CA, ME, RI, CT, MA, IL, NY, MI, MN
				OH: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				LA: map.options.fills.Decriminalized,

				UT: map.options.fills.cannabisMedicinal,
				IA: map.options.fills.cannabisMedicinal,
				MO: map.options.fills.cannabisMedicinal,
				MS: map.options.fills.cannabisMedicinal,
				AL: map.options.fills.cannabisMedicinal,
				SC: map.options.fills.cannabisMedicinal,
				TN: map.options.fills.cannabisMedicinal,
				KY: map.options.fills.cannabisMedicinal,
				GA: map.options.fills.cannabisMedicinal,
				NC: map.options.fills.cannabisMedicinal,
				OK: map.options.fills.cannabisMedicinal,
				TX: map.options.fills.cannabisMedicinal,
				VA: map.options.fills.cannabisMedicinal,
				WY: map.options.fills.cannabisMedicinal,

				AZ: map.options.fills.Medicinal,
				NV: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,
				NH: map.options.fills.Medicinal,
				MD: map.options.fills.Medicinal,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
				AK: map.options.fills.Recreational,
				OR: map.options.fills.Recreational,
				DC: map.options.fills.Recreational,

				CA: map.options.fills.medicinalDecriminalized,
				ME: map.options.fills.medicinalDecriminalized,
				RI: map.options.fills.medicinalDecriminalized,
				CT: map.options.fills.medicinalDecriminalized,
				MA: map.options.fills.medicinalDecriminalized,
				IL: map.options.fills.medicinalDecriminalized,
				NY: map.options.fills.medicinalDecriminalized,
				MI: map.options.fills.medicinalDecriminalized,
				MN: map.options.fills.medicinalDecriminalized,
			},
			2016: {
				// Decriminalized: OH, NE, LA
				// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
				// Medicinal: AZ, HI, MT, VT, NM, NJ, DE, NH, MD, PA, ND, FL, AR
				// Recreational: WA, CO, AK, OR, DC, CA, NV, ME, MA
				// Medicinal & Decriminalized: RI, CT, IL, NY, MI, MN
				OH: map.options.fills.Decriminalized,
				NE: map.options.fills.Decriminalized,
				LA: map.options.fills.Decriminalized,

				UT: map.options.fills.cannabisMedicinal,
				IA: map.options.fills.cannabisMedicinal,
				MO: map.options.fills.cannabisMedicinal,
				MS: map.options.fills.cannabisMedicinal,
				AL: map.options.fills.cannabisMedicinal,
				SC: map.options.fills.cannabisMedicinal,
				TN: map.options.fills.cannabisMedicinal,
				KY: map.options.fills.cannabisMedicinal,
				GA: map.options.fills.cannabisMedicinal,
				NC: map.options.fills.cannabisMedicinal,
				OK: map.options.fills.cannabisMedicinal,
				TX: map.options.fills.cannabisMedicinal,
				VA: map.options.fills.cannabisMedicinal,
				WY: map.options.fills.cannabisMedicinal,

				AZ: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,
				NH: map.options.fills.Medicinal,
				MD: map.options.fills.Medicinal,
				PA: map.options.fills.Medicinal,
				ND: map.options.fills.Medicinal,
				FL: map.options.fills.Medicinal,
				AR: map.options.fills.Medicinal,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
				AK: map.options.fills.Recreational,
				OR: map.options.fills.Recreational,
				DC: map.options.fills.Recreational,
				CA: map.options.fills.Recreational,
				NV: map.options.fills.Recreational,
				ME: map.options.fills.Recreational,
				MA: map.options.fills.Recreational,

				RI: map.options.fills.medicinalDecriminalized,
				CT: map.options.fills.medicinalDecriminalized,
				IL: map.options.fills.medicinalDecriminalized,
				NY: map.options.fills.medicinalDecriminalized,
				MI: map.options.fills.medicinalDecriminalized,
				MN: map.options.fills.medicinalDecriminalized,
			},
			2017: {
				// Decriminalized: NE
				// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
				// Medicinal: AZ, HI, MT, VT, NM, NJ, DE, NH, MD, PA, ND, FL, AR, WV
				// Recreational: WA, CO, AK, OR, DC, CA, NV, ME, MA
				// Medicinal & Decriminalized: RI, CT, IL, NY, MI, MN, LA, OH
				NE: map.options.fills.Decriminalized,

				UT: map.options.fills.cannabisMedicinal,
				IA: map.options.fills.cannabisMedicinal,
				MO: map.options.fills.cannabisMedicinal,
				MS: map.options.fills.cannabisMedicinal,
				AL: map.options.fills.cannabisMedicinal,
				SC: map.options.fills.cannabisMedicinal,
				TN: map.options.fills.cannabisMedicinal,
				KY: map.options.fills.cannabisMedicinal,
				GA: map.options.fills.cannabisMedicinal,
				NC: map.options.fills.cannabisMedicinal,
				OK: map.options.fills.cannabisMedicinal,
				TX: map.options.fills.cannabisMedicinal,
				VA: map.options.fills.cannabisMedicinal,
				WY: map.options.fills.cannabisMedicinal,

				AZ: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,
				NH: map.options.fills.Medicinal,
				MD: map.options.fills.Medicinal,
				PA: map.options.fills.Medicinal,
				ND: map.options.fills.Medicinal,
				FL: map.options.fills.Medicinal,
				AR: map.options.fills.Medicinal,
				WV: map.options.fills.Medicinal,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
				AK: map.options.fills.Recreational,
				OR: map.options.fills.Recreational,
				DC: map.options.fills.Recreational,
				CA: map.options.fills.Recreational,
				NV: map.options.fills.Recreational,
				ME: map.options.fills.Recreational,
				MA: map.options.fills.Recreational,

				RI: map.options.fills.medicinalDecriminalized,
				CT: map.options.fills.medicinalDecriminalized,
				IL: map.options.fills.medicinalDecriminalized,
				NY: map.options.fills.medicinalDecriminalized,
				MI: map.options.fills.medicinalDecriminalized,
				MN: map.options.fills.medicinalDecriminalized,
				LA: map.options.fills.medicinalDecriminalized,
				OH: map.options.fills.medicinalDecriminalized,
			},
			2018: {
				// Decriminalized: NE
				// cannabisMedicinal: UT, IA, MO, MS, AL, SC, TN, KY, GA, NC, OK, TX, VA, WY
				// Medicinal: AZ, HI, MT, VT, NM, NJ, DE, NH, MD, PA, ND, FL, AR, WV
				// Recreational: WA, CO, AK, OR, DC, CA, NV, ME, MA
				// Medicinal & Decriminalized: RI, CT, IL, NY, MI, MN, LA, OH
				NE: map.options.fills.Decriminalized,

				UT: map.options.fills.cannabisMedicinal,
				IA: map.options.fills.cannabisMedicinal,
				MO: map.options.fills.cannabisMedicinal,
				MS: map.options.fills.cannabisMedicinal,
				AL: map.options.fills.cannabisMedicinal,
				SC: map.options.fills.cannabisMedicinal,
				TN: map.options.fills.cannabisMedicinal,
				KY: map.options.fills.cannabisMedicinal,
				GA: map.options.fills.cannabisMedicinal,
				NC: map.options.fills.cannabisMedicinal,
				OK: map.options.fills.cannabisMedicinal,
				TX: map.options.fills.cannabisMedicinal,
				VA: map.options.fills.cannabisMedicinal,
				WY: map.options.fills.cannabisMedicinal,

				AZ: map.options.fills.Medicinal,
				HI: map.options.fills.Medicinal,
				MT: map.options.fills.Medicinal,
				VT: map.options.fills.Medicinal,
				NM: map.options.fills.Medicinal,
				NJ: map.options.fills.Medicinal,
				DE: map.options.fills.Medicinal,
				NH: map.options.fills.Medicinal,
				MD: map.options.fills.Medicinal,
				PA: map.options.fills.Medicinal,
				ND: map.options.fills.Medicinal,
				FL: map.options.fills.Medicinal,
				AR: map.options.fills.Medicinal,
				WV: map.options.fills.Medicinal,

				WA: map.options.fills.Recreational,
				CO: map.options.fills.Recreational,
				AK: map.options.fills.Recreational,
				OR: map.options.fills.Recreational,
				DC: map.options.fills.Recreational,
				CA: map.options.fills.Recreational,
				NV: map.options.fills.Recreational,
				ME: map.options.fills.Recreational,
				MA: map.options.fills.Recreational,

				RI: map.options.fills.medicinalDecriminalized,
				CT: map.options.fills.medicinalDecriminalized,
				IL: map.options.fills.medicinalDecriminalized,
				NY: map.options.fills.medicinalDecriminalized,
				MI: map.options.fills.medicinalDecriminalized,
				MN: map.options.fills.medicinalDecriminalized,
				LA: map.options.fills.medicinalDecriminalized,
				OH: map.options.fills.medicinalDecriminalized,
			},
		};

		function activateCompletion() {
			window.postAction({
				id: '041df281-9a62-4ef6-b117-049fba44175a',
			});
		}

		let yearsActivated = 1;
		$sliderBar.slider({
			range: 'max',
			min: 0,
			max: 23,
			value: 0,
			step: 1,
			slide(event, ui) {
				$sliderBar.attr('alt', yearRanges[ui.value]);
				$(ui.handle)
					.attr('aria-valuetext', yearName[ui.value]) // text val, 'day 5'
					.attr('aria-valuenow', yearName[ui.value]); // current val, '5'
				$('.year-display').html(yearName[ui.value]);
				console.log(yearName[ui.value]);

				map.updateChoropleth(colorData[yearRanges[ui.value]], { reset: true });

				yearsActivated += 1;
				if (yearsActivated === 12) {
					console.log('activateCompletion()');

					activateCompletion();
				}
			},
		}).each(() => {
			const labelRanges = ['Pre-1996', '2000', '2005', '2010', '2015', '2018'];
			let el;
			// Get the number of possible values
			const vals = labelRanges.length;
			// Position the labels
			const pctVals = ['-1%', '21%', '42.7%', '65%', '86.5%', '99.167%'];
			for (let i = 0; i < vals; i += 1) {
				// Create a new element and position it with percentages
				el = $(`<label class="slider-labels">${labelRanges[i]}</label>`).css('left', pctVals[i]);
				// Add the element inside #slider
				$sliderBar.append(el);
			}
		});

		$('.ui-slider-handle').attr('aria-label', 'year');

		$('.ui-slider-handle').attr('aria-valuemax', 2018);
		$('.ui-slider-handle').attr('aria-valuemin', 1995);

		$('#reset').on('click', () => {
			$sliderBar.slider('value', $sliderBar.slider('option', 'min'));
			$sliderBar.attr('alt', yearRanges[$sliderBar.slider('option', 'min')]);
			$($sliderBar.handle)
				.attr('aria-valuetext', yearName[$sliderBar.slider('option', 'min')])
				.attr('aria-valuenow', yearName[$sliderBar.slider('option', 'min')]);
			$('.year-display').html(yearName[$sliderBar.slider('option', 'min')]);
			map.updateChoropleth(colorData[yearRanges[$sliderBar.slider('option', 'min')]], { reset: true });
		});
	}, 50);


	$(window).resize(() => {
		if ($(window).width() <= 800) {
			$('#interactive-content')
				.removeClass('container')
				.addClass('container-fluid');
		} else if ($(window).width() > 800) {
			$('#interactive-content')
				.removeClass('container-fluid')
				.addClass('container');
		}
	});
});
