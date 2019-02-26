/* eslint-disable no-mixed-spaces-and-tabs */
$(document).ready(() => {
	const topoUrl = '/assets/images/delicacies/world-topo.json';
	const additionalData = {
		USA: {
			// img: '/assets/images/racial-intolerance/america.jpg',
			// title: '',
			stats_both: '28.8',
			stats_female: '28.8',
			stats_male: '28.8',
		},
		CAN: {
			// img: '/assets/images/racial-intolerance/canada.jpg',
			// title: '',
			stats_both: '27.2',
			stats_female: '26.8',
			stats_male: '27.6',
		},
		AUS: {
			// img: '/assets/images/racial-intolerance/australia.jpg',
			// title: '',
			stats_both: '27.2',
			stats_female: '26.8',
			stats_male: '27.6',
		},
		CHN: {
			// img: '/assets/images/racial-intolerance/china.jpg',
			// title: '',
			stats_both: '23.9',
			stats_female: '23.6',
			stats_male: '24.2',
		},
		FRA: {
			// img: '/assets/images/racial-intolerance/france.jpg',
			// title: '',
			stats_both: '25.3',
			stats_female: '24.6',
			stats_male: '26.1',
		},
		ITA: {
			// img: '/assets/images/racial-intolerance/italy.jpg',
			// title: '',
			stats_both: '26',
			stats_female: '25.2',
			stats_male: '26.8',
		},
		JPN: {
			// img: '/assets/images/racial-intolerance/japan.jpg',
			// title: '',
			stats_both: '22.6',
			stats_female: '21.7',
			stats_male: '23.6',
		},
		MYS: {
			// img: '/assets/images/racial-intolerance/malaysia.jpg',
			// title: '',
			stats_both: '25.3',
			stats_female: '25.6',
			stats_male: '25',
		},
		MEX: {
			// img: '/assets/images/racial-intolerance/mexico.jpg',
			// title: '',
			stats_both: '28.1',
			stats_female: '28.7',
			stats_male: '27.5',
		},
		NOR: {
			// img: '/assets/images/racial-intolerance/norway.jpg',
			// title: '',
			stats_both: '26',
			stats_female: '25.2',
			stats_male: '26.9',
		},
		RUS: {
			// img: '/assets/images/racial-intolerance/russia.jpg',
			// title: '',
			stats_both: '26.5',
			stats_female: '26.8',
			stats_male: '26.1',
		},
		ZAF: {
			// img: '/assets/images/racial-intolerance/southafrica.jpg',
			// title: '',
			stats_both: '27.3',
			stats_female: '29.1',
			stats_male: '25.4',
		},
		THA: {
			// img: '/assets/images/racial-intolerance/thailand.jpg',
			// title: '',
			stats_both: '24.1',
			stats_female: '24.6',
			stats_male: '23.6',
		},
		UGA: {
			// img: '/assets/images/racial-intolerance/uganda.jpg',
			// title: '',
			stats_both: '22',
			stats_female: '23',
			stats_male: '21',
		},
		GBR: {
			// img: '/assets/images/racial-intolerance/uk.jpg',
			// title: '',
			stats_both: '27.3',
			stats_female: '27.1',
			stats_male: '27.5',
		},
		DOM: {
			// img: '/assets/images/racial-intolerance/dominican-republic.jpg',
			// title: '',
			stats_both: '26.7',
			stats_female: '27.4',
			stats_male: '26',
		},
		VEN: {
			// img: '/assets/images/racial-intolerance/venezuela.jpg',
			// title: '',
			stats_both: '27.2',
			stats_female: '27.1',
			stats_male: '27.4',
		},
		BRA: {
			// img: '/assets/images/racial-intolerance/brazil.jpg',
			// title: '',
			stats_both: '25.6',
			stats_female: '26',
			stats_male: '25.9',
		},
		PER: {
			// img: '/assets/images/racial-intolerance/peru.jpg',
			// title: '',
			stats_both: '26.3',
			stats_female: '26.9',
			stats_male: '25.7',
		},
		CHL: {
			// img: '/assets/images/racial-intolerance/chile.jpg',
			// title: '',
			stats_both: '27.8',
			stats_female: '28',
			stats_male: '27.6',
		},
		URY: {
			// img: '/assets/images/racial-intolerance/uruguay.jpg',
			// title: '',
			stats_both: '26.8',
			stats_female: '26.9',
			stats_male: '26.7',
		},
		GTM: {
			// img: '/assets/images/racial-intolerance/guatemala.jpg',
			// title: '',
			stats_both: '26.5',
			stats_female: '27.1',
			stats_male: '25.8',
		},
		ARG: {
			// img: '/assets/images/racial-intolerance/argentina.jpg',
			// title: '',
			stats_both: '27.7',
			stats_female: '27.5',
			stats_male: '27.8',
		},
		ESP: {
			// img: '/assets/images/racial-intolerance/spain.jpg',
			// title: '',
			stats_both: '26.7',
			stats_female: '26',
			stats_male: '27.4',
		},
		BEL: {
			// img: '/assets/images/racial-intolerance/belgium.jpg',
			// title: '',
			stats_both: '25.5',
			stats_female: '24.7',
			stats_male: '26.2',
		},
		DEU: {
			// img: '/assets/images/racial-intolerance/germany.jpg',
			// title: '',
			stats_both: '26.3',
			stats_female: '25.6',
			stats_male: '27',
		},
		CHE: {
			// img: '/assets/images/racial-intolerance/switzerland.jpg',
			// title: '',
			stats_both: '25.3',
			stats_female: '23.8',
			stats_male: '26.7',
		},
		SWE: {
			// img: '/assets/images/racial-intolerance/sweden.jpg',
			// title: '',
			stats_both: '25.8',
			stats_female: '24.9',
			stats_male: '26.7',
		},
		FIN: {
			// img: '/assets/images/racial-intolerance/finland.jpg',
			// title: '',
			stats_both: '25.9',
			stats_female: '25.3',
			stats_male: '26.5',
		},
		EST: {
			// img: '/assets/images/racial-intolerance/estonia.jpg',
			// title: '',
			stats_both: '25.5',
			stats_female: '24.3',
			stats_male: '27',
		},
		LVA: {
			// img: '/assets/images/racial-intolerance/latvia.jpg',
			// title: '',
			stats_both: '25.8',
			stats_female: '25.1',
			stats_male: '26.8',
		},
		LTU: {
			// img: '/assets/images/racial-intolerance/lithuania.jpg',
			// title: '',
			stats_both: '26.6',
			stats_female: '26',
			stats_male: '27.3',
		},
		POL: {
			// img: '/assets/images/racial-intolerance/poland.jpg',
			// title: '',
			stats_both: '26.4',
			stats_female: '25.7',
			stats_male: '27',
		},
		CZE: {
			// img: '/assets/images/racial-intolerance/czechia.jpg',
			// title: '',
			stats_both: '26.9',
			stats_female: '26',
			stats_male: '27.8',
		},
		SVK: {
			// img: '/assets/images/racial-intolerance/slovakia.jpg',
			// title: '',
			stats_both: '26.5',
			stats_female: '25.7',
			stats_male: '27.4',
		},
		SVN: {
			// img: '/assets/images/racial-intolerance/slovenia.jpg',
			// title: '',
			stats_both: '26.9',
			stats_female: '26.3',
			stats_male: '27.5',
		},
		HRV: {
			// img: '/assets/images/racial-intolerance/croatia.jpg',
			// title: '',
			stats_both: '25.5',
			stats_female: '24.6',
			stats_male: '26.5',
		},
		HUN: {
			// img: '/assets/images/racial-intolerance/hungary.jpg',
			// title: '',
			stats_both: '26.3',
			stats_female: '25.2',
			stats_male: '27.5',
		},
		BLR: {
			// img: '/assets/images/racial-intolerance/belarus.jpg',
			// title: '',
			stats_both: '26.6',
			stats_female: '26.2',
			stats_male: '27.1',
		},
		UKR: {
			// img: '/assets/images/racial-intolerance/ukraine.jpg',
			// title: '',
			stats_both: '26',
			stats_female: '25.8',
			stats_male: '26.4',
		},
		ROU: {
			// img: '/assets/images/racial-intolerance/romania.jpg',
			// title: '',
			stats_both: '25.3',
			stats_female: '24.9',
			stats_male: '25.7',
		},
		MDA: {
			// img: '/assets/images/racial-intolerance/moldova.jpg',
			// title: '',
			stats_both: '26.7',
			stats_female: '27.1',
			stats_male: '26.3',
		},
		SRB: {
			// img: '/assets/images/racial-intolerance/serbia.jpg',
			// title: '',
			stats_both: '25.8',
			stats_female: '25.2',
			stats_male: '26.4',
		},
		BGR: {
			// img: '/assets/images/racial-intolerance/bulgaria.jpg',
			// title: '',
			stats_both: '26',
			stats_female: '25.3',
			stats_male: '26.7',
		},
		ALB: {
			// img: '/assets/images/racial-intolerance/albania.jpg',
			// title: '',
			stats_both: '26.1',
			stats_female: '25.6',
			stats_male: '26.6',
		},
		MKD: {
			// img: '/assets/images/racial-intolerance/macedonia.jpg',
			// title: '',
			stats_both: '25.8',
			stats_female: '25.3',
			stats_male: '26.4',
		},
		MAR: {
			// img: '/assets/images/racial-intolerance/morocco.jpg',
			// title: '',
			stats_both: '25.6',
			stats_female: '25.9',
			stats_male: '25.2',
		},
		DZA: {
			// img: '/assets/images/racial-intolerance/algeria.jpg',
			// title: '',
			stats_both: '26.2',
			stats_female: '27',
			stats_male: '25.5',
		},
		MLI: {
			// img: '/assets/images/racial-intolerance/mali.jpg',
			// title: '',
			stats_both: '22.8',
			stats_female: '23',
			stats_male: '22.6',
		},
		BFA: {
			// img: '/assets/images/racial-intolerance/burkina-faso.jpg',
			// title: '',
			stats_both: '22.1',
			stats_female: '22',
			stats_male: '22.1',
		},
		NGA: {
			// img: '/assets/images/racial-intolerance/nigeria.jpg',
			// title: '',
			stats_both: '23.4',
			stats_female: '24',
			stats_male: '22.8',
		},
		EGY: {
			// img: '/assets/images/racial-intolerance/egypt.jpg',
			// title: '',
			stats_both: '29.2',
			stats_female: '20.7',
			stats_male: '27.6',
		},
		ETH: {
			// img: '/assets/images/racial-intolerance/ethiopia.jpg',
			// title: '',
			stats_both: '20.6',
			stats_female: '21',
			stats_male: '20.2',
		},
		TZA: {
			// img: '/assets/images/racial-intolerance/tanzania.jpg',
			// title: '',
			stats_both: '23.1',
			stats_female: '24',
			stats_male: '22.2',
		},
		RWA: {
			// img: '/assets/images/racial-intolerance/rwanda.jpg',
			// title: '',
			stats_both: '22',
			stats_female: '22.7',
			stats_male: '21.3',
		},
		ZMB: {
			// img: '/assets/images/racial-intolerance/zambia.jpg',
			// title: '',
			stats_both: '22.6',
			stats_female: '23.8',
			stats_male: '21.5',
		},
		ZWE: {
			// img: '/assets/images/racial-intolerance/zimbabwe.jpg',
			// title: '',
			stats_both: '23.4',
			stats_female: '25',
			stats_male: '21.8',
		},
		TUR: {
			// img: '/assets/images/racial-intolerance/turkey.jpg',
			// title: '',
			stats_both: '27.8',
			stats_female: '28.5',
			stats_male: '27.1',
		},
		GEO: {
			// img: '/assets/images/racial-intolerance/georgia.jpg',
			// title: '',
			stats_both: '27.2',
			stats_female: '27.3',
			stats_male: '27.2',
		},
		ARM: {
			// img: '/assets/images/racial-intolerance/armenia.jpg',
			// title: '',
			stats_both: '26.7',
			stats_female: '27.4',
			stats_male: '25.9',
		},
		AZE: {
			// img: '/assets/images/racial-intolerance/azerbaijan.jpg',
			// title: '',
			stats_both: '27.4',
			stats_female: '28.1',
			stats_male: '26.6',
		},
		IRN: {
			// img: '/assets/images/racial-intolerance/iran.jpg',
			// title: '',
			stats_both: '26.2',
			stats_female: '27.2',
			stats_male: '25.3',
		},
		CYP: {
			// img: '/assets/images/racial-intolerance/cyprus.jpg',
			// title: '',
			stats_both: '27',
			stats_female: '26.3',
			stats_male: '27.6',
		},
		JOR: {
			// img: '/assets/images/racial-intolerance/jordan.jpg',
			// title: '',
			stats_both: '28.9',
			stats_female: '29.7',
			stats_male: '28.2',
		},
		SAU: {
			// img: '/assets/images/racial-intolerance/saudi-arabia.jpg',
			// title: '',
			stats_both: '28.5',
			stats_female: '28.7',
			stats_male: '28.3',
		},
		KGZ: {
			// img: '/assets/images/racial-intolerance/kyrgyzstan.jpg',
			// title: '',
			stats_both: '26.2',
			stats_female: '26.8',
			stats_male: '25.6',
		},
		PAK: {
			// img: '/assets/images/racial-intolerance/pakistan.jpg',
			// title: '',
			stats_both: '23.8',
			stats_female: '24.4',
			stats_male: '23.3',
		},
		BGD: {
			// img: '/assets/images/racial-intolerance/bangladesh.jpg',
			// title: '',
			stats_both: '21',
			stats_female: '21.2',
			stats_male: '20.7',
		},
		VNM: {
			// img: '/assets/images/racial-intolerance/vietnam.jpg',
			// title: '',
			stats_both: '21.6',
			stats_female: '21.6',
			stats_male: '21.5',
		},
		// TWN: {
		// 	// img: '/assets/images/racial-intolerance/taiwan.jpg',
		// 	// title: '',
		// 	stats_both: '',
		// 	stats_female: '',
		// 	stats_male: '',
		// },
		PHL: {
			// img: '/assets/images/racial-intolerance/philippines.jpg',
			// title: '',
			stats_both: '23.2',
			stats_female: '23.4',
			stats_male: '22.9',
		},
		AND: {
			// img: '/assets/images/racial-intolerance/andorra.jpg',
			// title: '',
			stats_both: '27.5',
			stats_female: '27.1',
			stats_male: '27.8',
		},
		SGA: {
			// img: '/assets/images/racial-intolerance/singapore.jpg',
			// title: '',
			stats_both: '23.7',
			stats_female: '23.2',
			stats_male: '24.3',
		},
		IDN: {
			// img: '/assets/images/racial-intolerance/indonesia.jpg',
			// title: '',
			stats_both: '22.9',
			stats_female: '23.4',
			stats_male: '22.4',
		},
		NZL: {
			// img: '/assets/images/racial-intolerance/new-zealand.jpg',
			// title: '',
			stats_both: '27.9',
			stats_female: '27.8',
			stats_male: '28',
		},
		IND: {
			// img: '/assets/images/racial-intolerance/india.jpg',
			// title: '',
			stats_both: '21.9',
			stats_female: '22.1',
			stats_male: '21.8',
		},
		KOR: {
			// img: '/assets/images/racial-intolerance/south-korea.jpg',
			// title: '',
			stats_both: '23.9',
			stats_female: '23.4',
			stats_male: '24.3',
		},
		ISL: {
			// img: '/assets/images/racial-intolerance/iceland.jpg',
			// title: '',
			stats_both: '25.9',
			stats_female: '25.1',
			stats_male: '26.7',
		},
		BLZ: {
			// img: '/assets/images/racial-intolerance/belize.jpg',
			// title: '',
			stats_both: '28.9',
			stats_female: '30.2',
			stats_male: '27.5',
		},
		HND: {
			// img: '/assets/images/racial-intolerance/honduras.jpg',
			// title: '',
			stats_both: '26.4',
			stats_female: '27.3',
			stats_male: '25.5',
		},
		SLV: {
			// img: '/assets/images/racial-intolerance/el-salvador.jpg',
			// title: '',
			stats_both: '27.4',
			stats_female: '28',
			stats_male: '26.8',
		},
		NIC: {
			// img: '/assets/images/racial-intolerance/nicaragua.jpg',
			// title: '',
			stats_both: '26.9',
			stats_female: '27.8',
			stats_male: '26',
		},
		CRI: {
			// img: '/assets/images/racial-intolerance/costa-rica.jpg',
			// title: '',
			stats_both: '26.9',
			stats_female: '27.1',
			stats_male: '26.7',
		},
		PAN: {
			// img: '/assets/images/racial-intolerance/panama.jpg',
			// title: '',
			stats_both: '27.1',
			stats_female: '27.7',
			stats_male: '26.4',
		},
		COL: {
			// img: '/assets/images/racial-intolerance/colombia.jpg',
			// title: '',
			stats_both: '25.9',
			stats_female: '26.5',
			stats_male: '25.4',
		},
		ECU: {
			// img: '/assets/images/racial-intolerance/ecuador.jpg',
			// title: '',
			stats_both: '27',
			stats_female: '26.6',
			stats_male: '26.4',
		},
		BOL: {
			// img: '/assets/images/racial-intolerance/bolivia.jpg',
			// title: '',
			stats_both: '25.9',
			stats_female: '27.3',
			stats_male: '24.6',
		},
		CUB: {
			// img: '/assets/images/racial-intolerance/cuba.jpg',
			// title: '',
			stats_both: '26.2',
			stats_female: '26.7',
			stats_male: '25.6',
		},
		HTI: {
			// img: '/assets/images/racial-intolerance/haiti.jpg',
			// title: '',
			stats_both: '24.1',
			stats_female: '24',
			stats_male: '24.2',
		},
		JAM: {
			// img: '/assets/images/racial-intolerance/jamaica.jpg',
			// title: '',
			stats_both: '27.4',
			stats_female: '29.2',
			stats_male: '25.5',
		},
		TTO: {
			// img: '/assets/images/racial-intolerance/trinidad-and-tobago.jpg',
			// title: '',
			stats_both: '28.7',
			stats_female: '29.4',
			stats_male: '27.9',
		},
		IRL: {
			// img: '/assets/images/racial-intolerance/ireland.jpg',
			// title: '',
			stats_both: '27.5',
			stats_female: '27.1',
			stats_male: '27.9',
		},
		PRT: {
			// img: '/assets/images/racial-intolerance/portugal.jpg',
			// title: '',
			stats_both: '26.2',
			stats_female: '25.7',
			stats_male: '26.7',
		},
		NLD: {
			// img: '/assets/images/racial-intolerance/netherlands.jpg',
			// title: '',
			stats_both: '25.4',
			stats_female: '25',
			stats_male: '25.9',
		},
		AUT: {
			// img: '/assets/images/racial-intolerance/austria.jpg',
			// title: '',
			stats_both: '25.4',
			stats_female: '24.4',
			stats_male: '26.5',
		},
		BIH: {
			// img: '/assets/images/racial-intolerance/bosnia-and-herzegovina.jpg',
			// title: '',
			stats_both: '26.1',
			stats_female: '25.7',
			stats_male: '26.5',
		},
		GRC: {
			// img: '/assets/images/racial-intolerance/greece.jpg',
			// title: '',
			stats_both: '27.3',
			stats_female: '27.2',
			stats_male: '27.4',
		},
		SYR: {
			// img: '/assets/images/racial-intolerance/syria.jpg',
			// title: '',
			stats_both: '28.1',
			stats_female: '29',
			stats_male: '27.2',
		},
		IRQ: {
			// img: '/assets/images/racial-intolerance/iraq.jpg',
			// title: '',
			stats_both: '28',
			stats_female: '28.8',
			stats_male: '27.2',
		},
		YEM: {
			// img: '/assets/images/racial-intolerance/yemen.jpg',
			// title: '',
			stats_both: '25.8',
			stats_female: '26.5',
			stats_male: '25.2',
		},
		OMN: {
			// img: '/assets/images/racial-intolerance/oman.jpg',
			// title: '',
			stats_both: '26.9',
			stats_female: '27.1',
			stats_male: '26.8',
		},
		ARE: {
			// img: '/assets/images/racial-intolerance/united-arab-emirates.jpg',
			// title: '',
			stats_both: '29',
			stats_female: '29.7',
			stats_male: '28.6',
		},
		LBY: {
			// img: '/assets/images/racial-intolerance/libya.jpg',
			// title: '',
			stats_both: '28.4',
			stats_female: '29.6',
			stats_male: '27.2',
		},
		KWT: {
			// img: '/assets/images/racial-intolerance/kuwait.jpg',
			// title: '',
			stats_both: '30',
			stats_female: '30.8',
			stats_male: '29.5',
		},
		QAT: {
			// img: '/assets/images/racial-intolerance/qatar.jpg',
			// title: '',
			stats_both: '29.2',
			stats_female: '30.1',
			stats_male: '29',
		},
		TKM: {
			// img: '/assets/images/racial-intolerance/turkmenistan.jpg',
			// title: '',
			stats_both: '26.4',
			stats_female: '25.8',
			stats_male: '26.4',
		},
		AFG: {
			// img: '/assets/images/racial-intolerance/afghanistan.jpg',
			// title: '',
			stats_both: '21.6',
			stats_female: '21.8',
			stats_male: '21.5',
		},
		UZB: {
			// img: '/assets/images/racial-intolerance/uzbekistan.jpg',
			// title: '',
			stats_both: '26.1',
			stats_female: '26.3',
			stats_male: '25.9',
		},
		TJK: {
			// img: '/assets/images/racial-intolerance/tajikistan.jpg',
			// title: '',
			stats_both: '25.4',
			stats_female: '25.3',
			stats_male: '25.5',
		},
		KAZ: {
			// img: '/assets/images/racial-intolerance/kazakhstan.jpg',
			// title: '',
			stats_both: '27.4',
			stats_female: '27.5',
			stats_male: '27.4',
		},
		MNG: {
			// img: '/assets/images/racial-intolerance/mongolia.jpg',
			// title: '',
			stats_both: '26',
			stats_female: '26.4',
			stats_male: '25.5',
		},
		NPL: {
			// img: '/assets/images/racial-intolerance/nepal.jpg',
			// title: '',
			stats_both: '22.2',
			stats_female: '22',
			stats_male: '22.4',
		},
		BTN: {
			// img: '/assets/images/racial-intolerance/bhutan.jpg',
			// title: '',
			stats_both: '23.8',
			stats_female: '24.2',
			stats_male: '23.4',
		},
		MMR: {
			// img: '/assets/images/racial-intolerance/myanmar.jpg',
			// title: '',
			stats_both: '22.6',
			stats_female: '23.2',
			stats_male: '22.1',
		},
		LAO: {
			// img: '/assets/images/racial-intolerance/laos.jpg',
			// title: '',
			stats_both: '22.6',
			stats_female: '22.7',
			stats_male: '22.4',
		},
		KHM: {
			// img: '/assets/images/racial-intolerance/cambodia.jpg',
			// title: '',
			stats_both: '21.9',
			stats_female: '22',
			stats_male: '21.9',
		},
		LKA: {
			// img: '/assets/images/racial-intolerance/sri-lanka.jpg',
			// title: '',
			stats_both: '23',
			stats_female: '23.5',
			stats_male: '22.5',
		},
		PRK: {
			// img: '/assets/images/racial-intolerance/north-korea.jpg',
			// title: '',
			stats_both: '21.8',
			stats_female: '21.8',
			stats_male: '21.9',
		},
		TLS: {
			// img: '/assets/images/racial-intolerance/east-timor.jpg',
			// title: '',
			stats_both: '21.2',
			stats_female: '21',
			stats_male: '21.5',
		},
		PNG: {
			// img: '/assets/images/racial-intolerance/papua-new-guinea.jpg',
			// title: '',
			stats_both: '25.3',
			stats_female: '25.6',
			stats_male: '25',
		},
		SLM: {
			// img: '/assets/images/racial-intolerance/solomon-islands.jpg',
			// title: '',
			stats_both: '25.5',
			stats_female: '26.4',
			stats_male: '24.5',
		},
		FJI: {
			// img: '/assets/images/racial-intolerance/fiji.jpg',
			// title: '',
			stats_both: '27.2',
			stats_female: '28.4',
			stats_male: '26.1',
		},
		VUT: {
			// img: '/assets/images/racial-intolerance/vanuatu.jpg',
			// title: '',
			stats_both: '26.2',
			stats_female: '26.8',
			stats_male: '25.6',
		},
		DNK: {
			// img: '/assets/images/racial-intolerance/denmark.jpg',
			// title: '',
			stats_both: '25.3',
			stats_female: '24.5',
			stats_male: '26',
		},
		TUN: {
			// img: '/assets/images/racial-intolerance/tunisia.jpg',
			// title: '',
			stats_both: '26.8',
			stats_female: '26.3',
			stats_male: '26',
		},
		MRT: {
			// img: '/assets/images/racial-intolerance/mauritania.jpg',
			// title: '',
			stats_both: '24.8',
			stats_female: '26.4',
			stats_male: '23.2',
		},
		SEN: {
			// img: '/assets/images/racial-intolerance/senegal.jpg',
			// title: '',
			stats_both: '23',
			stats_female: '24.1',
			stats_male: '21.8',
		},
		GIN: {
			// img: '/assets/images/racial-intolerance/guinea.jpg',
			// title: '',
			stats_both: '22.7',
			stats_female: '23.3',
			stats_male: '22.1',
		},
		SLE: {
			// img: '/assets/images/racial-intolerance/sierra-leone.jpg',
			// title: '',
			stats_both: '22.8',
			stats_female: '23.6',
			stats_male: '22',
		},
		LBR: {
			// img: '/assets/images/racial-intolerance/liberia.jpg',
			// title: '',
			stats_both: '24',
			stats_female: '24.9',
			stats_male: '23.2',
		},
		CIV: {
			// img: '/assets/images/racial-intolerance/ivory-coast.jpg',
			// title: '',
			stats_both: '23.6',
			stats_female: '24.1',
			stats_male: '23.2',
		},
		GHA: {
			// img: '/assets/images/racial-intolerance/ghana.jpg',
			// title: '',
			stats_both: '24.2',
			stats_female: '25.1',
			stats_male: '23.4',
		},
		TGO: {
			// img: '/assets/images/racial-intolerance/togo.jpg',
			// title: '',
			stats_both: '24',
			stats_female: '22.4',
			stats_male: '22.4',
		},
		BEN: {
			// img: '/assets/images/racial-intolerance/benin.jpg',
			// title: '',
			stats_both: '23.4',
			stats_female: '24.3',
			stats_male: '22.6',
		},
		NER: {
			// img: '/assets/images/racial-intolerance/niger.jpg',
			// title: '',
			stats_both: '21.7',
			stats_female: '22.2',
			stats_male: '21.3',
		},
		CMR: {
			// img: '/assets/images/racial-intolerance/cameroon.jpg',
			// title: '',
			stats_both: '24.4',
			stats_female: '25.1',
			stats_male: '23.8',
		},
		TCD: {
			// img: '/assets/images/racial-intolerance/chad.jpg',
			// title: '',
			stats_both: '22.3',
			stats_female: '22.5',
			stats_male: '22.1',
		},
		SDN: {
			// img: '/assets/images/racial-intolerance/sudan.jpg',
			// title: '',
			stats_both: '25.2',
			stats_female: '26.7',
			stats_male: '23.7',
		},
		ERI: {
			// img: '/assets/images/racial-intolerance/eritrea.jpg',
			// title: '',
			stats_both: '20.5',
			stats_female: '21',
			stats_male: '20.1',
		},
		CAF: {
			// img: '/assets/images/racial-intolerance/central-african-republic.jpg',
			// title: '',
			stats_both: '22.4',
			stats_female: '23.2',
			stats_male: '21.6',
		},
		SSD: {
			// img: '/assets/images/racial-intolerance/south-sudan.jpg',
			// title: '',
			stats_both: '25.2',
			stats_female: '26.7',
			stats_male: '23.7',
		},
		SOM: {
			// img: '/assets/images/racial-intolerance/somalia.jpg',
			// title: '',
			stats_both: '21.9',
			stats_female: '22.5',
			stats_male: '21.2',
		},
		KEN: {
			// img: '/assets/images/racial-intolerance/kenya.jpg',
			// title: '',
			stats_both: '23',
			stats_female: '24',
			stats_male: '21.9',
		},
		GAB: {
			// img: '/assets/images/racial-intolerance/gabon.jpg',
			// title: '',
			stats_both: '25.5',
			stats_female: '26.4',
			stats_male: '24.6',
		},
		COD: {
			// img: '/assets/images/racial-intolerance/democratic-republic-of-the-congo.jpg',
			// title: '',
			stats_both: '23.3',
			stats_female: '24.1',
			stats_male: '22.5',
		},
		COG: {
			// img: '/assets/images/racial-intolerance/republic-of-the-congo.jpg',
			// title: '',
			stats_both: '22.2',
			stats_female: '22.5',
			stats_male: '21.8',
		},
		AGO: {
			// img: '/assets/images/racial-intolerance/angola.jpg',
			// title: '',
			stats_both: '24.1',
			stats_female: '24.6',
			stats_male: '23.5',
		},
		NAM: {
			// img: '/assets/images/racial-intolerance/namibia.jpg',
			// title: '',
			stats_both: '24.3',
			stats_female: '25.6',
			stats_male: '22.9',
		},
		BWA: {
			// img: '/assets/images/racial-intolerance/botswana.jpg',
			// title: '',
			stats_both: '24.7',
			stats_female: '26.6',
			stats_male: '22.9',
		},
		MOZ: {
			// img: '/assets/images/racial-intolerance/mozambique.jpg',
			// title: '',
			stats_both: '22.3',
			stats_female: '23',
			stats_male: '21.6',
		},
		MDG: {
			// img: '/assets/images/racial-intolerance/madagascar.jpg',
			// title: '',
			stats_both: '21.1',
			stats_female: '21.2',
			stats_male: '20.9',
		},
		GUY: {
			// img: '/assets/images/racial-intolerance/guyana.jpg',
			// title: '',
			stats_both: '26.3',
			stats_female: '27.6',
			stats_male: '25',
		},
		SUR: {
			// img: '/assets/images/racial-intolerance/suriname.jpg',
			// title: '',
			stats_both: '27.4',
			stats_female: '28.2',
			stats_male: '26.5',
		},
		PRY: {
			// img: '/assets/images/racial-intolerance/paraguay.jpg',
			// title: '',
			stats_both: '25.8',
			stats_female: '26',
			stats_male: '25.6',
		},
		MWI: {
			// img: '/assets/images/racial-intolerance/malawi.jpg',
			// title: '',
			stats_both: '22.8',
			stats_female: '23.3',
			stats_male: '22.3',
		},
		BDI: {
			// img: '/assets/images/racial-intolerance/burundi.jpg',
			// title: '',
			stats_both: '20.9',
			stats_female: '21.3',
			stats_male: '20.4',
		},
		LSO: {
			// img: '/assets/images/racial-intolerance/lesotho.jpg',
			// title: '',
			stats_both: '24.9',
			stats_female: '27.1',
			stats_male: '22.7',
		},
		GNQ: {
			// img: '/assets/images/racial-intolerance/equatorial-guinea.jpg',
			// title: '',
			stats_both: '25.6',
			stats_female: '26.1',
			stats_male: '25',
		},
	};

	const $reset = $('#reload');
	const $zoomIn = $('#zoom-in');
	const $zoomOut = $('#zoom-out');

	const $countriesDropdown = $('.map-item');

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

		d3.selection.prototype.moveToFront = function () { //eslint-disable-line
			return this.each(function () { //eslint-disable-line
				this.parentNode.appendChild(this);
			});
		};

		d3.selection.prototype.moveToBack = function() { //eslint-disable-line
			return this.each(function() { //eslint-disable-line
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
				// 22.6<
				// 22.6-24.9
				// 25.0-27.4
				// 27.5-30
				// >30
				classList.push('no-fill');
				const stat_both = parseFloat(country.properties.data.stats_both);
				if (stat_both < 22.6) {
					classList.push('level-one');
					classList.push('level-one-both');
				} else if (stat_both >= 22.6 && stat_both <= 24.9) {
					classList.push('level-two');
					classList.push('level-two-both');
				} else if (stat_both >= 25.0 && stat_both <= 27.4) {
					classList.push('level-three');
					classList.push('level-three-both');
				} else if (stat_both >= 27.5 && stat_both <= 30.0) {
					classList.push('level-four');
					classList.push('level-four-both');
				} else {
					classList.push('level-five');
					classList.push('level-five-both');
				}

				const femStat = parseFloat(country.properties.data.stats_female);
				if (femStat < 22.6) {
					classList.push('level-one-female');
				} else if (femStat >= 22.6 && femStat <= 24.9) {
					classList.push('level-two-female');
				} else if (femStat >= 25.0 && femStat <= 27.4) {
					classList.push('level-three-female');
				} else if (femStat >= 27.5 && femStat <= 30.0) {
					classList.push('level-four-female');
				} else {
					classList.push('level-five-female');
				}

				const maleStat = parseFloat(country.properties.data.stats_male);
				if (maleStat < 22.6) {
					classList.push('level-one-male');
				} else if (maleStat >= 22.6 && maleStat <= 24.9) {
					classList.push('level-two-male');
				} else if (maleStat >= 25.0 && maleStat <= 27.4) {
					classList.push('level-three-male');
				} else if (maleStat >= 27.5 && maleStat <= 30.0) {
					classList.push('level-four-male');
				} else {
					classList.push('level-five-male');
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

					const x = width / 2;
					const y = height / 2;
					const k = 1;
					currentScale = 1;

					setTimeout(() => {						
						zoomHandle.scaleTo(svg, k);
						zoomHandle.translateTo(svg, x, y);
					}, 20);

					$('.after-text').removeClass('d-none');
					setTimeout(() => {
						$('.country').removeClass('no-fill');
						$('.btn-selections').removeClass('d-none');
						$('.visualization-selections').removeClass('d-none');
					}, 500);
				}
			}
		}

		let btnSelection = 'both';
		let visualSelection = 'map-content';
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

				if (btnSelection === 'male') {
					$('.selected-sex').html(`<strong>Sex:</strong> ${btnSelection.replace(/^\w/, letter => letter.toUpperCase())}`);
					$('.mean-bmi').html(`<strong>Mean BMI:</strong> ${d.properties.data.stats_male}`);
				} else if (btnSelection === 'female') {
					$('.selected-sex').html(`<strong>Sex:</strong> ${btnSelection.replace(/^\w/, letter => letter.toUpperCase())}`);
					$('.mean-bmi').html(`<strong>Mean BMI:</strong> ${d.properties.data.stats_female}`);
				} else if (btnSelection === 'both') {
					$('.selected-sex').html('<strong>Sex:</strong> Both sexes');
					$('.mean-bmi').html(`<strong>Mean BMI:</strong> ${d.properties.data.stats_both}`);
				}

				// $('.country-name').after(`<img src='' alt='' class='active-img d-none' />`)
				// 	.siblings('.food-description')
				// 	.remove();
				// $('.active-img').after(`<p class='food-description'><b></b><br><span class='food-desc-mobile'>${d.properties.data.description}<span></p>`);

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

		let optionsSelected = {
			male: false,
			female: false,
			chart: false,
		};

		function activateCompletion() {
			window.postAction({
				id: 'dd322f44-0df4-4df2-88e5-7333ac7317fb',
			});
		}

		$('.btn-selection').click((e) => {
			console.log(e.target);

			if (!$(e.target).hasClass('active')) {
				$(e.target).addClass('active')
				.siblings('.btn-selection')
				.removeClass('active');
				btnSelection = $(e.target).attr('id');
				console.log(btnSelection);
				$('.selection-value').html(`${clickedCountry.properties.name}`);

				$('.description').removeClass('d-none');
				$('.info-box').removeClass('d-none');
				$('.country-name').text(clickedCountry.properties.name)
					.siblings('img')
					.remove();

				if (btnSelection === 'male') {
					optionsSelected['male'] = true;
					$('.selected-sex').html(`<strong>Sex:</strong> ${btnSelection.replace(/^\w/, letter => letter.toUpperCase())}`);
					$('.mean-bmi').html(`<strong>Mean BMI:</strong> ${clickedCountry.properties.data.stats_male}`);
				} else if (btnSelection === 'female') {
					optionsSelected['female'] = true;
					$('.selected-sex').html(`<strong>Sex:</strong> ${btnSelection.replace(/^\w/, letter => letter.toUpperCase())}`);
					$('.mean-bmi').html(`<strong>Mean BMI:</strong> ${clickedCountry.properties.data.stats_female}`);
				} else if (btnSelection === 'both') {
					$('.selected-sex').html('<strong>Sex:</strong> Both sexes');
					$('.mean-bmi').html(`<strong>Mean BMI:</strong> ${clickedCountry.properties.data.stats_both}`);
				}
				// $('.has-data').removeClass('level-one level-two level-three level-four');

				if (Object.values(optionsSelected).indexOf(false) === -1) {
					console.log('activateCompletion()');
					activateCompletion();
				}

				$(`.level-one-${btnSelection}`).addClass('level-one').removeClass('level-two level-three level-four');
				$(`.level-two-${btnSelection}`).addClass('level-two').removeClass('level-one level-three level-four');
				$(`.level-three-${btnSelection}`).addClass('level-three').removeClass('level-two level-one level-four');
				$(`.level-four-${btnSelection}`).addClass('level-four').removeClass('level-two level-three level-one');

				// MUCH SLOWER
				// d3.selectAll(`.level-one-${btnSelection}`).classed('level-one', true).classed('level-two level-three level-four', false);
				// d3.selectAll(`.level-two-${btnSelection}`).classed('level-two', true).classed('level-one level-three level-four', false);
				// d3.selectAll(`.level-three-${btnSelection}`).classed('level-three', true).classed('level-two level-one level-four', false);
				// d3.selectAll(`.level-four-${btnSelection}`).classed('level-four', true).classed('level-two level-three level-one', false);
			}
		});

		$('.visual-selection').click((e) => {
			if (!$(e.target).hasClass('active')) {
				optionsSelected['chart'] = true;
				$(e.target).addClass('active')
					.siblings('.visual-selection')
					.removeClass('active');
				visualSelection = $(e.target).attr('id');
				console.log(visualSelection);

				$('.visual').addClass('d-none');
				$(`.${visualSelection}`).removeClass('d-none');

				if (Object.values(optionsSelected).indexOf(false) === -1) {
					console.log('activateCompletion()');
					activateCompletion();
				}
			}
		});

		function reset() {
			$('.modal').modal('show');

			setTimeout(() => {
				$('#map-content').click();
				$('path').removeClass('active-country');
				const x = width / 2;
				const y = height / 2;
				const k = 1;
				currentScale = 1;

				$('.has-data').addClass('no-fill');
				$('.map-item').removeClass('activated');
				
				
				btnSelection = 'both';
				$('#both').trigger('click');
				setTimeout(() => {
					// d3.selectAll(`.level-one-${btnSelection}`).classed('level-one', true).classed('level-two level-three level-four', false);
					// d3.selectAll(`.level-two-${btnSelection}`).classed('level-two', true).classed('level-one level-three level-four', false);
					// d3.selectAll(`.level-three-${btnSelection}`).classed('level-three', true).classed('level-two level-one level-four', false);
					// d3.selectAll(`.level-four-${btnSelection}`).classed('level-four', true).classed('level-two level-three level-one', false);
					
					$(`.level-one-${btnSelection}`).addClass('level-one').removeClass('level-two level-three level-four');
					$(`.level-two-${btnSelection}`).addClass('level-two').removeClass('level-one level-three level-four');
					$(`.level-three-${btnSelection}`).addClass('level-three').removeClass('level-two level-one level-four');
					$(`.level-four-${btnSelection}`).addClass('level-four').removeClass('level-two level-three level-one');
					countriesActivated = 0;
					clickedCountry = null;
					clickedCountryNode = null;
				}, 200);

				visualSelection = 'map-content';
				$('.chart-content').addClass('d-none');
				$('.visualization-selections').addClass('d-none');
				$('.btn-selections').addClass('d-none');
				$('.btn-selection').prop('disabled', false);
				$('#map').removeClass('d-none');

				$('.country-name').text('');
				$('.mean-bmi').html('');
				
				setTimeout(() => {
					optionsSelected = {
						male: false,
						female: false,
						chart: false,
					};
					zoomHandle.scaleTo(svg, k);
					zoomHandle.translateTo(svg, x, y);
					$('.selection-value').html('Countries');
					$('.selection-value-chart').html('Countries');
					$('.info-box').addClass('d-none');
					$('.intro-text').removeClass('d-none');
					$('.after-text').addClass('d-none');
					$('.legend').removeClass('d-none');
					$('.legend-text').removeClass('d-none');
					$('.dropdown-parent.map-content').removeClass('d-none');
					setTimeout(() => {
						$('.modal').modal('hide');
					}, 500);
				}, 500);
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

	setTimeout(() => {
		const $countrySearch = $('#countrySearch');
		const vyear = 2014;
		let vsex = 'Both sexes';
		let finalbmi2;

		const chartData = [];

		function createChartData() 	{
			for (let i = 0, ln = obesityData.fact.length; i < ln; i += 1) {
				if ((obesityData.fact[i].dims.SEX === 'Both sexes') && (obesityData.fact[i].dims.YEAR === '2014')) {
					const rawbmi2 = obesityData.fact[i].Value;
					if (rawbmi2 !== undefined) {
						const bmi2 = rawbmi2.split(' [');
						finalbmi2 = bmi2[0];
					} else {
						finalbmi2 = 0;
					}
				}

				if ((obesityData.fact[i].dims.SEX === 'Both sexes') && (obesityData.fact[i].dims.YEAR === '2010')) {
					const rawbmi = obesityData.fact[i].Value;
					let finalbmi;
					if (rawbmi !== undefined) {
						const bmi = rawbmi.split(' [');
						finalbmi = bmi[0];
					} else {
						finalbmi = 0;
					}

					chartData.push({
						name: obesityData.fact[i].dims.COUNTRY,
						bmi: Number(finalbmi),
						bmi2014: Number(finalbmi2),
					});
				}
			}
		}

		createChartData(vsex, vyear);

		console.log(chartData);
		
		chartData.sort((a, b) => parseFloat(a.bmi2014) - parseFloat(b.bmi2014));

		const cData = [];

		function createCountryArray() 	{
			for (let i = 0, ln = chartData.length; i < ln; i += 1) {
				cData.push(chartData[i].name);
			}
		}

		const bArray = [];

		function createBMIArray() 	{
			for (let i = 0, ln = chartData.length; i < ln; i += 1) {
				if (!isNaN(parseFloat(chartData[i].bmi))) {
					bArray.push(chartData[i].bmi);
				} else {
					bArray.push(23.3);
				}
			}
		}

		const bmiData14 = [];

		function createBMIArray2014() 	{
			for (let i = 0, ln = chartData.length; i < ln; i += 1) {
				if (!isNaN(parseFloat(chartData[i].bmi2014))) {
					bmiData14.push(chartData[i].bmi2014);
				} else {
					bmiData14.push(23.3);
				}
			}
		}


		$('#chart').highcharts({
			chart: {
				mouseOver() {
					const chart = $('#chart').highcharts();
					console.log(chart);

					if (chart.xAxis[0].removePlotLine('pl1') !== undefined) chart.xAxis[0].removePlotLine('pl1');
					if (chart.xAxis[1].removePlotLine('pl2') !== undefined) chart.xAxis[1].removePlotLine('pl2');
				},
			},
			exporting: { enabled: false },
			credits: {
				enabled: false,
			},
			title: {
				text: 'Obesity by country (both sexes shown)',
			},
			xAxis: {
				type: 'datetime',
				labels: { enabled: false },
			},
			yAxis: {
				min: 20,
				minRange: 13,
				title: {
					text: 'BMI',
				},
			},
			tooltip: {
				headerFormat: '<span>{point.key}</span><table>: ',
				pointFormat: '<td style="padding:0"><b>{series.name} (BMI):</b> {point.y:.1f}</td></tr>',
				footerFormat: '</table>',
				useHTML: true,
				crosshairs: [true, false],
			},
			legend: {
				enabled: false,
			},
			plotOptions: {
				area: {
					marker: {
						radius: 2,
					},
					lineWidth: 1,
					states: {
						hover: {
							lineWidth: 1,
						},
					},
					threshold: null,
				},
				series: {
					marker: {
						enabled: false, // for faster performance
					},
					events: {
						click:  function (e) {
							console.log(e.point.category);
							$('.selection-value-chart').html(e.point.category);
							const inputc = e.point.category;
							for (let i = 0, ln = cData.length; i < ln; i += 1) {
								if (cData[i] === inputc) {
									const chart = $('#chart').highcharts();
									chart.xAxis[0].removePlotLine('pl2');
									chart.tooltip.refresh(chart.series[1].data[i]);
									chart.xAxis[0].addPlotLine({
										value: i,
										color: 'red',
										width: 2,
										id: 'pl2',
									});
								}
							}
						},
					},
				},
			},

			series: [{
				type: 'area',
				name: '2010 Data',
				data: [0, 0],
				visible: false,
				lineWidth: 2,
			},
			{
				type: 'area',
				name: '2014 Data',
				data: [0, 0],
				color: '#4263ae',
				lineWidth: 2,
			}],
		});

		function initializeChart() {
			const chart = $('#chart').highcharts();
			const oldsex = vsex;
			vsex = 'Both sexes';
			createCountryArray(chartData);
			console.log(chart);
			chart.xAxis[0].setCategories(cData);
			createBMIArray(chartData);
			createBMIArray2014(chartData);
			chart.series[0].setData(bArray);
			chart.series[1].setData(bmiData14);
			chart.redraw();
			vsex = oldsex;
		}

		$('.chart-item').click((e) => {
			console.log(e.currentTarget.innerHTML);

			// let a = $(e);
			// let b = $(e).currentTarget;
			// debugger;
			// let c = $(e).currentTarget.innerHTML;
			// console.log($(e));
			// debugger;

			// console.log($(e).currentTarget);
			// console.log($(e).currentTarget.innerHTML);
			const inputc = e.currentTarget.innerHTML;
			$('.selection-value-chart').html(inputc);
			for (let i = 0, ln = cData.length; i < ln; i += 1) {
				if (cData[i] === inputc) {
					const chart = $('#chart').highcharts();
					chart.xAxis[0].removePlotLine('pl2');
					chart.tooltip.refresh(chart.series[1].data[i]);
					chart.xAxis[0].addPlotLine({
						value: i,
						color: 'red',
						width: 2,
						id: 'pl2',
					});
				}
			}
		});

		initializeChart();
	}, 5000);
});
