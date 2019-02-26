/* eslint-disable */
$(document).ready(() => {
	const obesityData = {
		dimension: [
			{
				label: 'GHO',
				display: 'Indicator',
			},
			{
				label: 'PUBLISHSTATE',
				display: 'PUBLISH STATES',
			},
			{
				label: 'YEAR',
				display: 'Year',
			},
			{
				label: 'REGION',
				display: 'WHO region',
			},
			{
				label: 'COUNTRY',
				display: 'Country',
			},
			{
				label: 'AGEGROUP',
				display: 'Age Group',
			},
			{
				label: 'SEX',
				display: 'Sex',
			},
		],
		fact: [
			{
				dims: {
					COUNTRY: 'Afghanistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.6 [19.7-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Afghanistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.2 [19.3-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Afghanistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [18.6-25]',
			},
			{
				dims: {
					COUNTRY: 'Afghanistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.2 [18.3-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Afghanistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.5 [19-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Afghanistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.1 [18.8-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Albania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [25.4-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Albania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.3-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Albania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.6-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Albania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [24.7-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Albania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.6 [25.6-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Albania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.5-27]',
			},
			{
				dims: {
					COUNTRY: 'Algeria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.1-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Algeria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [24.8-27]',
			},
			{
				dims: {
					COUNTRY: 'Algeria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [25.1-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Algeria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [24.9-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Algeria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [23.9-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Algeria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [23.7-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Andorra',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [25.4-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Andorra',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [25.5-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Andorra',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [24.1-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Andorra',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [24.2-30]',
			},
			{
				dims: {
					COUNTRY: 'Andorra',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [25.4-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Andorra',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [25.2-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Angola',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [22-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Angola',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [21.8-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Angola',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.6 [21.5-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Angola',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.1 [21.1-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Angola',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.5 [21-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Angola',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [20.7-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Antigua and Barbuda',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.4 [26.3-30.4]',
			},
			{
				dims: {
					COUNTRY: 'Antigua and Barbuda',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.9 [26-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Antigua and Barbuda',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.5 [26.3-32.5]',
			},
			{
				dims: {
					COUNTRY: 'Antigua and Barbuda',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.9 [25.9-31.8]',
			},
			{
				dims: {
					COUNTRY: 'Antigua and Barbuda',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [24.9-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Antigua and Barbuda',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [24.5-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Argentina',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.7 [26.8-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Argentina',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Argentina',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [26.3-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Argentina',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26.2-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Argentina',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [26.5-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Argentina',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.4 [26.3-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Armenia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.8-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Armenia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.5-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Armenia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.1-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Armenia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26.1-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Armenia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [24.7-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Armenia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [24.5-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Australia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.7-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Australia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [26.7-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Australia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [26.2-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Australia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [26.2-27]',
			},
			{
				dims: {
					COUNTRY: 'Australia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [27-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Australia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.9-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Austria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.4 [23.9-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Austria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Austria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.4 [22-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Austria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.3 [22.2-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Austria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [24.6-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Austria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [24.6-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Azerbaijan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.5-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Azerbaijan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [26.1-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Azerbaijan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.1 [26.8-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Azerbaijan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.6 [26.5-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Azerbaijan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.6 [25.4-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Azerbaijan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Bahamas',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.8 [26.9-30.7]',
			},
			{
				dims: {
					COUNTRY: 'Bahamas',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.4 [26.4-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Bahamas',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.6 [26.6-32.7]',
			},
			{
				dims: {
					COUNTRY: 'Bahamas',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.2 [26.3-32.2]',
			},
			{
				dims: {
					COUNTRY: 'Bahamas',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [25.6-30.4]',
			},
			{
				dims: {
					COUNTRY: 'Bahamas',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [25.2-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Bahrain',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.2 [27.2-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Bahrain',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.8 [27-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Bahrain',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.6 [27.1-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Bahrain',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.3 [27.1-29.6]',
			},
			{
				dims: {
					COUNTRY: 'Bahrain',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [26.6-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Bahrain',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [26.5-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Bangladesh',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21 [20.4-21.6]',
			},
			{
				dims: {
					COUNTRY: 'Bangladesh',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.6 [20.2-21]',
			},
			{
				dims: {
					COUNTRY: 'Bangladesh',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.2 [20.4-22]',
			},
			{
				dims: {
					COUNTRY: 'Bangladesh',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.7 [20.1-21.2]',
			},
			{
				dims: {
					COUNTRY: 'Bangladesh',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.7 [19.9-21.6]',
			},
			{
				dims: {
					COUNTRY: 'Bangladesh',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.5 [19.8-21.1]',
			},
			{
				dims: {
					COUNTRY: 'Barbados',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [27.5-30]',
			},
			{
				dims: {
					COUNTRY: 'Barbados',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.2 [27-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Barbados',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30 [27.9-32]',
			},
			{
				dims: {
					COUNTRY: 'Barbados',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.5 [27.8-31.1]',
			},
			{
				dims: {
					COUNTRY: 'Barbados',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [25.7-29]',
			},
			{
				dims: {
					COUNTRY: 'Barbados',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [25.4-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Belarus',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.6 [24.6-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Belarus',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [24.5-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Belarus',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [23.1-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Belarus',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [23.1-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Belarus',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [24.6-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Belarus',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [24.2-29]',
			},
			{
				dims: {
					COUNTRY: 'Belgium',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.5-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Belgium',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [24.6-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Belgium',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.7 [23.1-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Belgium',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [23.4-26]',
			},
			{
				dims: {
					COUNTRY: 'Belgium',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.1-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Belgium',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.2-27]',
			},
			{
				dims: {
					COUNTRY: 'Belize',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.9 [27.9-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Belize',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.4 [27.7-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Belize',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.2 [28.9-31.6]',
			},
			{
				dims: {
					COUNTRY: 'Belize',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.8 [28.6-30.9]',
			},
			{
				dims: {
					COUNTRY: 'Belize',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [26.2-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Belize',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26.1-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Benin',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.8-24]',
			},
			{
				dims: {
					COUNTRY: 'Benin',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.6-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Benin',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.3 [23.5-25]',
			},
			{
				dims: {
					COUNTRY: 'Benin',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [23.2-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Benin',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.6 [21.6-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Benin',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.4 [21.6-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Bhutan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.8 [23.2-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Bhutan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.3 [22.8-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Bhutan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.2 [23.4-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Bhutan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.7 [22.8-24.6]',
			},
			{
				dims: {
					COUNTRY: 'Bhutan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.7-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Bhutan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.3-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Bolivia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [25-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Bolivia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [24.7-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Bolivia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [26.1-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Bolivia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Bolivia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.6 [23.2-26]',
			},
			{
				dims: {
					COUNTRY: 'Bolivia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.2 [23-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Bosnia and Herzegovina',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [25.1-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Bosnia and Herzegovina',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.2-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Bosnia and Herzegovina',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.7 [24.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Bosnia and Herzegovina',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.5-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Bosnia and Herzegovina',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.2-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Bosnia and Herzegovina',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Botswana',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.7 [23.9-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Botswana',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.4 [23.7-25]',
			},
			{
				dims: {
					COUNTRY: 'Botswana',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.6 [25.4-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Botswana',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.2-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Botswana',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.9 [21.8-24]',
			},
			{
				dims: {
					COUNTRY: 'Botswana',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [21.6-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Brazil',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [25.4-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Brazil',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [25.3-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Brazil',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.3-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Brazil',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [25.2-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Brazil',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [25.2-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Brazil',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [25-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Brunei',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [24.1-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Brunei',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [24.2-28]',
			},
			{
				dims: {
					COUNTRY: 'Brunei',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.6 [23.4-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Brunei',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.5 [23.5-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Brunei',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [23.3-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Brunei',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [23.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Bulgaria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.1-27]',
			},
			{
				dims: {
					COUNTRY: 'Bulgaria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25.1-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Bulgaria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [23.9-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Bulgaria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.1-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Bulgaria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Bulgaria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.5-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Burkina Faso',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.1 [21.5-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Burkina Faso',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [21.4-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Burkina Faso',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22 [21.3-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Burkina Faso',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [21.2-22.3]',
			},
			{
				dims: {
					COUNTRY: 'Burkina Faso',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.1 [21.3-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Burkina Faso',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.9 [21.1-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Burundi',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.9 [19.6-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Burundi',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.7 [19.5-21.9]',
			},
			{
				dims: {
					COUNTRY: 'Burundi',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.3 [20.2-22.5]',
			},
			{
				dims: {
					COUNTRY: 'Burundi',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21 [20-22]',
			},
			{
				dims: {
					COUNTRY: 'Burundi',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.4 [17.9-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Burundi',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.4 [18-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Ivory Coast',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.6 [22.9-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Ivory Coast',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.4 [22.8-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Ivory Coast',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [23.2-24.9]',
			},
			{
				dims: {
					COUNTRY: 'Ivory Coast',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [23.1-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Ivory Coast',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [22.1-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Ivory Coast',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.2-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Cabo Verde',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.7 [23.9-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Cabo Verde',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.3 [23.6-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Cabo Verde',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.4 [24.2-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Cabo Verde',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25 [24-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Cabo Verde',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.9 [22.8-25]',
			},
			{
				dims: {
					COUNTRY: 'Cabo Verde',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [22.7-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Cambodia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.9 [21.3-22.5]',
			},
			{
				dims: {
					COUNTRY: 'Cambodia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.5 [21-22]',
			},
			{
				dims: {
					COUNTRY: 'Cambodia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22 [21.2-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Cambodia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.6 [21-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Cambodia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.9 [20.9-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Cambodia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.5 [20.7-22.3]',
			},
			{
				dims: {
					COUNTRY: 'Cameroon',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.4 [23.7-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Cameroon',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.2 [23.5-24.9]',
			},
			{
				dims: {
					COUNTRY: 'Cameroon',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [24.3-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Cameroon',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.7 [24.1-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Cameroon',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.8 [22.4-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Cameroon',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [22.4-24.8]',
			},
			{
				dims: {
					COUNTRY: 'Canada',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.6-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Canada',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [26.6-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Canada',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.9-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Canada',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [26-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Canada',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.8-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Canada',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.4 [26.9-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Central African Republic',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.4 [21.3-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Central African Republic',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.2 [21.3-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Central African Republic',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [21.7-24.8]',
			},
			{
				dims: {
					COUNTRY: 'Central African Republic',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.8 [21.5-24]',
			},
			{
				dims: {
					COUNTRY: 'Central African Republic',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.6 [20.1-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Central African Republic',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.5 [20.1-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Chad',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.3 [21.3-23.3]',
			},
			{
				dims: {
					COUNTRY: 'Chad',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [21.2-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Chad',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.5 [21.3-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Chad',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.2 [21.2-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Chad',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.1 [20.6-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Chad',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.9 [20.5-23.3]',
			},
			{
				dims: {
					COUNTRY: 'Chile',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [27.2-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Chile',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [27-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Chile',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [27-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Chile',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.7 [27-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Chile',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.7-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Chile',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26.6-27.8]',
			},
			{
				dims: {
					COUNTRY: 'China',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.9 [23.4-24.4]',
			},
			{
				dims: {
					COUNTRY: 'China',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.4 [23.1-23.7]',
			},
			{
				dims: {
					COUNTRY: 'China',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.6 [22.9-24.4]',
			},
			{
				dims: {
					COUNTRY: 'China',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.3 [22.8-23.7]',
			},
			{
				dims: {
					COUNTRY: 'China',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.2 [23.5-24.9]',
			},
			{
				dims: {
					COUNTRY: 'China',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [23.2-24]',
			},
			{
				dims: {
					COUNTRY: 'Colombia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [25.4-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Colombia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [25.2-26]',
			},
			{
				dims: {
					COUNTRY: 'Colombia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.6-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Colombia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.6-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Colombia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.4 [24.6-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Colombia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25 [24.4-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Comoros',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [23.5-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Comoros',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [23.2-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Comoros',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [24.4-26]',
			},
			{
				dims: {
					COUNTRY: 'Comoros',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.6 [23.9-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Comoros',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22.2-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Comoros',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.9 [22.1-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Republic of the Congo',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.3 [22.3-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Republic of the Congo',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.1-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Republic of the Congo',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [23.2-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Republic of the Congo',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.7 [22.9-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Republic of the Congo',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.5 [20.8-24.1]',
			},
			{
				dims: {
					COUNTRY: 'Republic of the Congo',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.2 [20.7-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Cook Islands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.3 [31.4-33.2]',
			},
			{
				dims: {
					COUNTRY: 'Cook Islands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '32 [31.2-32.9]',
			},
			{
				dims: {
					COUNTRY: 'Cook Islands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.6 [31.2-34]',
			},
			{
				dims: {
					COUNTRY: 'Cook Islands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '32.4 [31.2-33.5]',
			},
			{
				dims: {
					COUNTRY: 'Cook Islands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.1 [30.8-33.4]',
			},
			{
				dims: {
					COUNTRY: 'Cook Islands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '31.7 [30.6-32.8]',
			},
			{
				dims: {
					COUNTRY: 'Costa Rica',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [26.3-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Costa Rica',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.5 [26-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Costa Rica',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Costa Rica',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [25.9-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Costa Rica',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.9-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Costa Rica',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.7-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Croatia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.4-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Croatia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24.4-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Croatia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.6 [22.7-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Croatia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.5 [23-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Croatia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [24.9-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Croatia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [24.9-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Cuba',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.1-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Cuba',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.9-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Cuba',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.2-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Cuba',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.1-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Cuba',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.2-27]',
			},
			{
				dims: {
					COUNTRY: 'Cuba',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [24-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Cyprus',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [25.9-28]',
			},
			{
				dims: {
					COUNTRY: 'Cyprus',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [25.9-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Cyprus',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [24.8-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Cyprus',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Cyprus',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.3-29]',
			},
			{
				dims: {
					COUNTRY: 'Cyprus',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.4 [26.3-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Czech Republic',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [26.2-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Czech Republic',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26.3-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Czech Republic',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [24.9-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Czech Republic',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.3-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Czech Republic',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [26.9-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Czech Republic',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.6 [26.9-28.3]',
			},
			{
				dims: {
					COUNTRY: 'North Korea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [19.6-24]',
			},
			{
				dims: {
					COUNTRY: 'North Korea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [19.7-23.9]',
			},
			{
				dims: {
					COUNTRY: 'North Korea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [18.3-25.2]',
			},
			{
				dims: {
					COUNTRY: 'North Korea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [18.5-25]',
			},
			{
				dims: {
					COUNTRY: 'North Korea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.9 [19.2-24.5]',
			},
			{
				dims: {
					COUNTRY: 'North Korea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [19.3-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Somalia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.9 [19.8-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Somalia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [19.8-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Somalia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.5 [19.4-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Somalia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.3 [19.3-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Somalia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.2 [18.8-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Somalia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.2 [18.9-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Democratic Republic of the Congo',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.2 [21.3-23]',
			},
			{
				dims: {
					COUNTRY: 'Democratic Republic of the Congo',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.9 [21.2-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Democratic Republic of the Congo',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.5 [21.7-23.3]',
			},
			{
				dims: {
					COUNTRY: 'Democratic Republic of the Congo',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.1 [21.4-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Democratic Republic of the Congo',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [20.3-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Democratic Republic of the Congo',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [20.5-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Denmark',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.6-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Denmark',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [24.6-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Denmark',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.5 [23.5-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Denmark',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.4 [23.6-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Denmark',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.1-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Denmark',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.2-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Djibouti',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.3 [21.3-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Djibouti',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.2 [21.3-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Djibouti',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.9 [20.9-27]',
			},
			{
				dims: {
					COUNTRY: 'Djibouti',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.7 [20.8-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Djibouti',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.7 [20.3-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Djibouti',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.6 [20.3-25]',
			},
			{
				dims: {
					COUNTRY: 'Dominica',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [26.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Dominica',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.5 [25.8-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Dominica',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29 [27.7-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Dominica',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.5 [27.4-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Dominica',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [23.9-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Dominica',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.6 [23.6-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Dominican Republic',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.6-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Dominican Republic',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.4-27]',
			},
			{
				dims: {
					COUNTRY: 'Dominican Republic',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [25.8-29]',
			},
			{
				dims: {
					COUNTRY: 'Dominican Republic',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [25.7-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Dominican Republic',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [24.6-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Dominican Republic',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [24.3-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Ecuador',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [26.4-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Ecuador',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [26.1-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Ecuador',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.7 [26.7-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Ecuador',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.5-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Ecuador',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.5-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Ecuador',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.2-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Egypt',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.2 [28.6-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Egypt',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.7 [28.4-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Egypt',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.7 [30-31.5]',
			},
			{
				dims: {
					COUNTRY: 'Egypt',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30.2 [29.7-30.7]',
			},
			{
				dims: {
					COUNTRY: 'Egypt',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.9-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Egypt',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.8-27.7]',
			},
			{
				dims: {
					COUNTRY: 'El Salvador',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.4-28.4]',
			},
			{
				dims: {
					COUNTRY: 'El Salvador',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [26.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'El Salvador',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [26.9-29]',
			},
			{
				dims: {
					COUNTRY: 'El Salvador',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.6 [26.8-28.3]',
			},
			{
				dims: {
					COUNTRY: 'El Salvador',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.1-28.4]',
			},
			{
				dims: {
					COUNTRY: 'El Salvador',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Equatorial Guinea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [23.4-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Equatorial Guinea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [23.1-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Equatorial Guinea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [22.7-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Equatorial Guinea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [22.4-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Equatorial Guinea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [22.5-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Equatorial Guinea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.7 [22.2-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Eritrea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.5 [19.9-21.1]',
			},
			{
				dims: {
					COUNTRY: 'Eritrea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.5 [20-20.9]',
			},
			{
				dims: {
					COUNTRY: 'Eritrea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21 [20.1-21.9]',
			},
			{
				dims: {
					COUNTRY: 'Eritrea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.8 [20.1-21.4]',
			},
			{
				dims: {
					COUNTRY: 'Eritrea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.1 [19.2-20.9]',
			},
			{
				dims: {
					COUNTRY: 'Eritrea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.2 [19.5-20.8]',
			},
			{
				dims: {
					COUNTRY: 'Estonia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.5-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Estonia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [24.5-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Estonia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.3 [22.4-26]',
			},
			{
				dims: {
					COUNTRY: 'Estonia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.3 [22.8-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Estonia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [25.8-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Estonia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [25.7-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Ethiopia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.6 [20-21.2]',
			},
			{
				dims: {
					COUNTRY: 'Ethiopia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.3 [19.8-20.8]',
			},
			{
				dims: {
					COUNTRY: 'Ethiopia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21 [20.1-21.9]',
			},
			{
				dims: {
					COUNTRY: 'Ethiopia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.7 [20-21.4]',
			},
			{
				dims: {
					COUNTRY: 'Ethiopia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.2 [19.3-21]',
			},
			{
				dims: {
					COUNTRY: 'Ethiopia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20 [19.3-20.7]',
			},
			{
				dims: {
					COUNTRY: 'Fiji',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.6-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Fiji',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26.6-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Fiji',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.4 [27.5-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Fiji',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.3 [27.6-29]',
			},
			{
				dims: {
					COUNTRY: 'Fiji',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [25.3-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Fiji',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.3-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Finland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [25.5-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Finland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.6-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Finland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.7-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Finland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [25-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Finland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.9-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Finland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [26-26.8]',
			},
			{
				dims: {
					COUNTRY: 'France',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.5-26]',
			},
			{
				dims: {
					COUNTRY: 'France',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.6-25.7]',
			},
			{
				dims: {
					COUNTRY: 'France',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.6 [23.5-25.7]',
			},
			{
				dims: {
					COUNTRY: 'France',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.5 [23.7-25.4]',
			},
			{
				dims: {
					COUNTRY: 'France',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [25.1-27.1]',
			},
			{
				dims: {
					COUNTRY: 'France',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.2-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Gabon',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.5-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Gabon',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [24.4-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Gabon',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.4-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Gabon',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.1-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Gabon',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.6 [23-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Gabon',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.3 [22.9-25.7]',
			},
			{
				dims: {
					COUNTRY: 'Gambia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23.3-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Gambia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.5 [23-24.1]',
			},
			{
				dims: {
					COUNTRY: 'Gambia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [24.1-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Gambia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.5 [23.7-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Gambia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Gambia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [21.8-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Georgia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.5-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Georgia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Georgia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [26.2-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Georgia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Georgia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.2-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Georgia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [25.8-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Germany',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.7-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Germany',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.7-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Germany',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.7-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Germany',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [24.9-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Germany',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [26.2-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Germany',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Ghana',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.2 [23.6-24.9]',
			},
			{
				dims: {
					COUNTRY: 'Ghana',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [23.4-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Ghana',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [24.2-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Ghana',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.6 [24-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Ghana',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.5-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Ghana',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.4-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Greece',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [26.3-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Greece',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Greece',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [25.7-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Greece',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Greece',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.2-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Greece',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.4-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Grenada',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [26.2-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Grenada',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.8-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Grenada',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [27.6-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Grenada',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.1 [27.1-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Grenada',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [24.3-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Grenada',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [23.9-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Guatemala',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.6-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Guatemala',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.4-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Guatemala',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.1-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Guatemala',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [26-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Guatemala',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [24.4-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Guatemala',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [24.3-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Guinea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.7 [22-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Guinea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [21.8-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Guinea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.3 [22.5-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Guinea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.3-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Guinea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.1 [20.8-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Guinea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [20.7-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Guinea-Bissau',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.1 [21.7-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Guinea-Bissau',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.8 [21.7-24]',
			},
			{
				dims: {
					COUNTRY: 'Guinea-Bissau',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.9 [22.7-25]',
			},
			{
				dims: {
					COUNTRY: 'Guinea-Bissau',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.5 [22.5-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Guinea-Bissau',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.2 [19.9-24.6]',
			},
			{
				dims: {
					COUNTRY: 'Guinea-Bissau',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [19.9-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Guyana',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.6-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Guyana',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25.1-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Guyana',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.4-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Guyana',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Guyana',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [24-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Guyana',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.6 [23.7-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Haiti',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [22.7-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Haiti',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [22.4-25]',
			},
			{
				dims: {
					COUNTRY: 'Haiti',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23-24.9]',
			},
			{
				dims: {
					COUNTRY: 'Haiti',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.5 [22.7-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Haiti',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.2 [21.7-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Haiti',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [21.5-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Honduras',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.5-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Honduras',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.2-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Honduras',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [26.5-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Honduras',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [26.2-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Honduras',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [23.9-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Honduras',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [23.7-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Hungary',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.1-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Hungary',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Hungary',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [23.2-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Hungary',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [23.6-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Hungary',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [26.3-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Hungary',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.2-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Iceland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [24.7-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Iceland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [24.8-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Iceland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [23.2-27]',
			},
			{
				dims: {
					COUNTRY: 'Iceland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [23.5-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Iceland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.2-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Iceland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [25.3-27.9]',
			},
			{
				dims: {
					COUNTRY: 'India',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.9 [21.5-22.4]',
			},
			{
				dims: {
					COUNTRY: 'India',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.6 [21.3-21.9]',
			},
			{
				dims: {
					COUNTRY: 'India',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.1 [21.4-22.8]',
			},
			{
				dims: {
					COUNTRY: 'India',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [21.3-22.1]',
			},
			{
				dims: {
					COUNTRY: 'India',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [21.1-22.4]',
			},
			{
				dims: {
					COUNTRY: 'India',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.5 [21.1-21.9]',
			},
			{
				dims: {
					COUNTRY: 'Indonesia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.9 [22.3-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Indonesia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [22-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Indonesia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.4-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Indonesia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.3-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Indonesia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.4 [21.5-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Indonesia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.9 [21.3-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Iran',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.8-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Iran',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.7-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Iran',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.5-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Iran',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26.4-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Iran',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.7-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Iran',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25 [24.7-25.4]',
			},
			{
				dims: {
					COUNTRY: 'Iraq',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [27.2-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Iraq',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [26.8-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Iraq',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.8 [27.6-30.1]',
			},
			{
				dims: {
					COUNTRY: 'Iraq',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.4 [27.4-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Iraq',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.1-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Iraq',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [25.8-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Ireland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [26.9-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Ireland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26.9-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Ireland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.3-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Ireland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Ireland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.9 [27.2-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Ireland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.7 [27.2-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Israel',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.5-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Israel',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.5-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Israel',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.1-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Israel',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.3-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Israel',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Israel',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.3-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Italy',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.5-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Italy',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.5-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Italy',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [24.5-26]',
			},
			{
				dims: {
					COUNTRY: 'Italy',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.7-25.7]',
			},
			{
				dims: {
					COUNTRY: 'Italy',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [26.1-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Italy',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [26.2-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Jamaica',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.6-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Jamaica',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [26.3-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Jamaica',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.2 [28.2-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Jamaica',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.6 [27.8-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Jamaica',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.5-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Jamaica',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [24.3-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Japan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.6 [22.2-23]',
			},
			{
				dims: {
					COUNTRY: 'Japan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.6 [22.4-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Japan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.7 [21.1-22.3]',
			},
			{
				dims: {
					COUNTRY: 'Japan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [21.5-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Japan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.6 [23-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Japan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.5 [23.1-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Jordan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.9 [28.4-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Jordan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.6 [28.2-29]',
			},
			{
				dims: {
					COUNTRY: 'Jordan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.7 [29-30.4]',
			},
			{
				dims: {
					COUNTRY: 'Jordan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.5 [29-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Jordan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.2 [27.3-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Jordan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.8 [27.1-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Kazakhstan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.2-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Kazakhstan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [25.9-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Kazakhstan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [25.7-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Kazakhstan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [25.7-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Kazakhstan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [25.4-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Kazakhstan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [25.1-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Kenya',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [21.9-24.1]',
			},
			{
				dims: {
					COUNTRY: 'Kenya',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.6 [21.7-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Kenya',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Kenya',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [22.8-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Kenya',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.9 [20-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Kenya',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [20-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Kiribati',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.6 [28.6-30.4]',
			},
			{
				dims: {
					COUNTRY: 'Kiribati',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.4 [28.7-30.1]',
			},
			{
				dims: {
					COUNTRY: 'Kiribati',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.5 [29.1-31.8]',
			},
			{
				dims: {
					COUNTRY: 'Kiribati',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30.3 [29.2-31.4]',
			},
			{
				dims: {
					COUNTRY: 'Kiribati',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [27.5-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Kiribati',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.6 [27.6-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Kuwait',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30 [29.2-30.8]',
			},
			{
				dims: {
					COUNTRY: 'Kuwait',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.5 [28.9-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Kuwait',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.8 [29.7-32.1]',
			},
			{
				dims: {
					COUNTRY: 'Kuwait',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30.4 [29.5-31.4]',
			},
			{
				dims: {
					COUNTRY: 'Kuwait',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.5 [28.4-30.6]',
			},
			{
				dims: {
					COUNTRY: 'Kuwait',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29 [28.1-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Kyrgyzstan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.7-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Kyrgyzstan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25.3-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Kyrgyzstan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [26.1-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Kyrgyzstan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.7-27]',
			},
			{
				dims: {
					COUNTRY: 'Kyrgyzstan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.8-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Kyrgyzstan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.5-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Laos',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.6 [22-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Laos',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.1 [21.6-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Laos',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.7 [22-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Laos',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.3 [21.7-23]',
			},
			{
				dims: {
					COUNTRY: 'Laos',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.4 [21.6-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Laos',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.9 [21.1-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Latvia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [24.7-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Latvia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.6-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Latvia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [23.2-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Latvia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [23.6-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Latvia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.2-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Latvia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.2-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Lebanon',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [27.1-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Lebanon',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.8-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Lebanon',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.5-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Lebanon',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26.3-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Lebanon',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [27-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Lebanon',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.4 [26.7-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Lesotho',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.9 [24.3-25.4]',
			},
			{
				dims: {
					COUNTRY: 'Lesotho',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.6 [24.2-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Lesotho',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Lesotho',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26.1-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Lesotho',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.7 [22-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Lesotho',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.4 [21.8-23]',
			},
			{
				dims: {
					COUNTRY: 'Liberia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23.5-24.6]',
			},
			{
				dims: {
					COUNTRY: 'Liberia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.7 [23.2-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Liberia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.9 [24.2-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Liberia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.3 [23.7-25]',
			},
			{
				dims: {
					COUNTRY: 'Liberia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [22.5-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Liberia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.4-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Libya',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.4 [27.7-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Libya',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28 [27.4-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Libya',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.6 [28.5-30.7]',
			},
			{
				dims: {
					COUNTRY: 'Libya',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.2 [28.3-30.1]',
			},
			{
				dims: {
					COUNTRY: 'Libya',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.2-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Libya',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [26-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Lithuania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.6 [25.5-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Lithuania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.6-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Lithuania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [24.3-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Lithuania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [24.7-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Lithuania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [25.9-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Lithuania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [25.9-28]',
			},
			{
				dims: {
					COUNTRY: 'Luxembourg',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.8-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Luxembourg',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.8-27]',
			},
			{
				dims: {
					COUNTRY: 'Luxembourg',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.3-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Luxembourg',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [24.4-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Luxembourg',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.6 [26.6-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Luxembourg',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [26.5-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Madagascar',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.1 [20.2-22]',
			},
			{
				dims: {
					COUNTRY: 'Madagascar',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.9 [20.2-21.6]',
			},
			{
				dims: {
					COUNTRY: 'Madagascar',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.2 [20.2-22.1]',
			},
			{
				dims: {
					COUNTRY: 'Madagascar',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21 [20.2-21.7]',
			},
			{
				dims: {
					COUNTRY: 'Madagascar',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '20.9 [19.5-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Madagascar',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.9 [19.7-22.1]',
			},
			{
				dims: {
					COUNTRY: 'Timor-Leste',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.2 [19.7-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Timor-Leste',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.9 [19.6-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Timor-Leste',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21 [19.9-22.1]',
			},
			{
				dims: {
					COUNTRY: 'Timor-Leste',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.7 [19.7-21.7]',
			},
			{
				dims: {
					COUNTRY: 'Timor-Leste',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.5 [19-24]',
			},
			{
				dims: {
					COUNTRY: 'Timor-Leste',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.1 [18.7-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Malawi',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.8 [22.2-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Malawi',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [22-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Malawi',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.3 [22.5-24.1]',
			},
			{
				dims: {
					COUNTRY: 'Malawi',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.9 [22.3-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Malawi',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.3 [21.4-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Malawi',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [21.3-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Malaysia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.8-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Malaysia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25 [24.6-25.4]',
			},
			{
				dims: {
					COUNTRY: 'Malaysia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.9-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Malaysia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24.8-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Malaysia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [24.3-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Malaysia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.6 [24.1-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Maldives',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.1 [24.4-25.7]',
			},
			{
				dims: {
					COUNTRY: 'Maldives',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [24.2-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Maldives',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [25.1-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Maldives',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [25-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Maldives',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.2 [23.3-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Maldives',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.9 [23-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Mali',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.8 [22-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Mali',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.4 [21.8-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Mali',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22.2-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Mali',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.6 [21.9-23.3]',
			},
			{
				dims: {
					COUNTRY: 'Mali',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.6 [21.2-24]',
			},
			{
				dims: {
					COUNTRY: 'Mali',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.3 [21.1-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Malta',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [25.7-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Malta',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [25.8-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Malta',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [24.5-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Malta',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [24.8-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Malta',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [25.7-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Malta',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.3 [25.7-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Marshall Islands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.2 [28.2-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Marshall Islands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.1 [28.4-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Marshall Islands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30 [28.6-31.5]',
			},
			{
				dims: {
					COUNTRY: 'Marshall Islands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30 [28.8-31.2]',
			},
			{
				dims: {
					COUNTRY: 'Marshall Islands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.4 [27.1-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Marshall Islands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.3 [27.2-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Mauritania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.8 [23.7-26]',
			},
			{
				dims: {
					COUNTRY: 'Mauritania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.5 [23.5-25.4]',
			},
			{
				dims: {
					COUNTRY: 'Mauritania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Mauritania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [24.9-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Mauritania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [21.6-24.8]',
			},
			{
				dims: {
					COUNTRY: 'Mauritania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [21.5-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Mauritius',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.9-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Mauritius',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24.7-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Mauritius',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Mauritius',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.1-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Mauritius',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [24-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Mauritius',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.7 [24-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Mexico',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.1 [27.7-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Mexico',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.8 [27.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Mexico',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [28.1-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Mexico',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.3 [27.9-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Mexico',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [26.9-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Mexico',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26.8-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Micronesia (Federated States of)',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.4 [28.7-30]',
			},
			{
				dims: {
					COUNTRY: 'Micronesia (Federated States of)',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.2 [28.6-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Micronesia (Federated States of)',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '31 [30-32]',
			},
			{
				dims: {
					COUNTRY: 'Micronesia (Federated States of)',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30.8 [30-31.6]',
			},
			{
				dims: {
					COUNTRY: 'Micronesia (Federated States of)',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [26.9-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Micronesia (Federated States of)',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.6 [26.9-28.4]',
			},
			// {
			// 	dims: {
			// 		COUNTRY: 'Monaco',
			// 		SEX: 'Both sexes',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2014',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'Monaco',
			// 		SEX: 'Both sexes',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2010',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'Monaco',
			// 		SEX: 'Female',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2014',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'Monaco',
			// 		SEX: 'Female',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2010',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'Monaco',
			// 		SEX: 'Male',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2014',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'Monaco',
			// 		SEX: 'Male',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2010',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			{
				dims: {
					COUNTRY: 'Mongolia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.4-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Mongolia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [25-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Mongolia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.6-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Mongolia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25.3-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Mongolia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.9-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Mongolia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.9 [24.5-25.4]',
			},
			{
				dims: {
					COUNTRY: 'Montenegro',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [23.9-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Montenegro',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [24-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Montenegro',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [22.3-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Montenegro',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [22.5-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Montenegro',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [24.1-29]',
			},
			{
				dims: {
					COUNTRY: 'Montenegro',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [23.9-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Morocco',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.7-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Morocco',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.6-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Morocco',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [24.8-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Morocco',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [24.8-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Morocco',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [23.9-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Morocco',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [23.8-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Mozambique',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.3 [21.6-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Mozambique',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.1 [21.5-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Mozambique',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22.1-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Mozambique',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.7 [22-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Mozambique',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.6 [20.4-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Mozambique',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.4 [20.5-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Myanmar',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.6 [21.9-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Myanmar',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.3 [21.7-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Myanmar',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [22.1-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Myanmar',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.8 [21.9-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Myanmar',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.1 [21.1-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Myanmar',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [20.9-22.5]',
			},
			{
				dims: {
					COUNTRY: 'Namibia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.3 [23.5-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Namibia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.9 [23.3-24.6]',
			},
			{
				dims: {
					COUNTRY: 'Namibia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.5-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Namibia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24.4-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Namibia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.9 [21.6-24.1]',
			},
			{
				dims: {
					COUNTRY: 'Namibia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [21.5-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Nauru',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.5 [31.6-33.3]',
			},
			{
				dims: {
					COUNTRY: 'Nauru',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '32.6 [32-33.2]',
			},
			{
				dims: {
					COUNTRY: 'Nauru',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.8 [31.6-34.1]',
			},
			{
				dims: {
					COUNTRY: 'Nauru',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '33 [32-34]',
			},
			{
				dims: {
					COUNTRY: 'Nauru',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.1 [30.9-33.2]',
			},
			{
				dims: {
					COUNTRY: 'Nauru',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '32.2 [31.4-33.1]',
			},
			{
				dims: {
					COUNTRY: 'Nepal',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.2 [21.7-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Nepal',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [21.3-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Nepal',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22 [21.4-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Nepal',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.4 [20.9-22]',
			},
			{
				dims: {
					COUNTRY: 'Nepal',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.4 [21.6-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Nepal',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [21.3-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Netherlands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.4 [24.7-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Netherlands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24.8-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Netherlands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [23.9-26]',
			},
			{
				dims: {
					COUNTRY: 'Netherlands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.9 [24.1-25.7]',
			},
			{
				dims: {
					COUNTRY: 'Netherlands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [24.9-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Netherlands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [25-26.3]',
			},
			{
				dims: {
					COUNTRY: 'New Zealand',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.9 [27.5-28.2]',
			},
			{
				dims: {
					COUNTRY: 'New Zealand',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.6 [27.3-27.9]',
			},
			{
				dims: {
					COUNTRY: 'New Zealand',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [27.2-28.3]',
			},
			{
				dims: {
					COUNTRY: 'New Zealand',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [27.1-27.9]',
			},
			{
				dims: {
					COUNTRY: 'New Zealand',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [27.4-28.5]',
			},
			{
				dims: {
					COUNTRY: 'New Zealand',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.7 [27.3-28.1]',
			},
			{
				dims: {
					COUNTRY: 'Nicaragua',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [25.9-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Nicaragua',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [25.7-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Nicaragua',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [26.7-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Nicaragua',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.4 [26.6-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Nicaragua',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [24.3-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Nicaragua',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.3-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Niger',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.7 [21.1-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Niger',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.5 [20.9-22]',
			},
			{
				dims: {
					COUNTRY: 'Niger',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.2 [21.4-23]',
			},
			{
				dims: {
					COUNTRY: 'Niger',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.9 [21.3-22.5]',
			},
			{
				dims: {
					COUNTRY: 'Niger',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.3 [20.2-22.3]',
			},
			{
				dims: {
					COUNTRY: 'Niger',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.1 [20.2-21.9]',
			},
			{
				dims: {
					COUNTRY: 'Nigeria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.7-24]',
			},
			{
				dims: {
					COUNTRY: 'Nigeria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.6-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Nigeria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23.3-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Nigeria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.7 [23.2-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Nigeria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.8 [21.8-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Nigeria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.4 [21.7-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Niue',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '32.3 [31.6-32.9]',
			},
			{
				dims: {
					COUNTRY: 'Niue',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '32 [31.4-32.5]',
			},
			{
				dims: {
					COUNTRY: 'Niue',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '33.1 [32.2-34.1]',
			},
			{
				dims: {
					COUNTRY: 'Niue',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '32.9 [32-33.7]',
			},
			{
				dims: {
					COUNTRY: 'Niue',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '31.4 [30.6-32.2]',
			},
			{
				dims: {
					COUNTRY: 'Niue',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '31.1 [30.4-31.9]',
			},
			{
				dims: {
					COUNTRY: 'Norway',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.2-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Norway',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.3-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Norway',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [23.9-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Norway',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [24.2-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Norway',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [25.8-28]',
			},
			{
				dims: {
					COUNTRY: 'Norway',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [25.8-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Oman',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [26-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Oman',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.5 [25.8-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Oman',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [25.7-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Oman',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [25.6-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Oman',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.6-28]',
			},
			{
				dims: {
					COUNTRY: 'Oman',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.3-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Pakistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.8 [23.1-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Pakistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.4 [22.9-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Pakistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.4 [23.7-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Pakistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24 [23.4-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Pakistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.3 [22.2-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Pakistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.2-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Palau',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.4 [28.7-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Palau',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.4 [28.6-30]',
			},
			{
				dims: {
					COUNTRY: 'Palau',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.5 [28.5-30.6]',
			},
			{
				dims: {
					COUNTRY: 'Palau',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.5 [28.4-30.5]',
			},
			{
				dims: {
					COUNTRY: 'Palau',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.4 [28.4-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Palau',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.2 [28.3-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Panama',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.1-28]',
			},
			{
				dims: {
					COUNTRY: 'Panama',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [25.8-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Panama',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.7 [26.2-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Panama',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Panama',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.1-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Panama',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [24.9-27]',
			},
			{
				dims: {
					COUNTRY: 'Papua New Guinea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.5-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Papua New Guinea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25 [24.3-25.7]',
			},
			{
				dims: {
					COUNTRY: 'Papua New Guinea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.4-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Papua New Guinea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [24.2-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Papua New Guinea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [23.9-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Papua New Guinea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [23.9-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Paraguay',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [23.8-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Paraguay',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [23.6-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Paraguay',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [22.9-29.1]',
			},
			{
				dims: {
					COUNTRY: 'Paraguay',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [22.6-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Paraguay',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [23.1-28]',
			},
			{
				dims: {
					COUNTRY: 'Paraguay',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.3 [22.9-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Peru',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.8-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Peru',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [25.5-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Peru',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [26.4-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Peru',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [26.2-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Peru',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.7 [24.8-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Peru',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.6-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Philippines',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [22.4-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Philippines',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.9 [22.3-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Philippines',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.2-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Philippines',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.3-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Philippines',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.9 [22-24]',
			},
			{
				dims: {
					COUNTRY: 'Philippines',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.6 [21.9-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Vietnam',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.6 [20.9-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Vietnam',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.1 [20.7-21.5]',
			},
			{
				dims: {
					COUNTRY: 'Vietnam',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.6 [20.7-22.5]',
			},
			{
				dims: {
					COUNTRY: 'Vietnam',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.2 [20.6-21.8]',
			},
			{
				dims: {
					COUNTRY: 'Vietnam',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.5 [20.7-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Vietnam',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21 [20.5-21.6]',
			},
			{
				dims: {
					COUNTRY: 'Poland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.6-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Poland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.6-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Poland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.7 [24.6-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Poland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.8-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Poland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27 [26.1-28]',
			},
			{
				dims: {
					COUNTRY: 'Poland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [26-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Portugal',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.4-27]',
			},
			{
				dims: {
					COUNTRY: 'Portugal',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [25.4-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Portugal',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.7 [24.5-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Portugal',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.7-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Portugal',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.7-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Portugal',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.5 [25.7-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Qatar',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.2 [28.7-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Qatar',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.6 [28.1-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Qatar',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.1 [29.3-31]',
			},
			{
				dims: {
					COUNTRY: 'Qatar',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.6 [28.9-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Qatar',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29 [28.2-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Qatar',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.3 [27.7-28.9]',
			},
			{
				dims: {
					COUNTRY: 'South Korea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.9 [23.4-24.3]',
			},
			{
				dims: {
					COUNTRY: 'South Korea',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [23.3-23.8]',
			},
			{
				dims: {
					COUNTRY: 'South Korea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.7-24.1]',
			},
			{
				dims: {
					COUNTRY: 'South Korea',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.8-23.5]',
			},
			{
				dims: {
					COUNTRY: 'South Korea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.3 [23.7-24.9]',
			},
			{
				dims: {
					COUNTRY: 'South Korea',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24 [23.6-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Republic of Moldova',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [26.1-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Republic of Moldova',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.5 [26-27]',
			},
			{
				dims: {
					COUNTRY: 'Republic of Moldova',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Republic of Moldova',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [26.2-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Republic of Moldova',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [25.5-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Republic of Moldova',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.2-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Romania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.2-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Romania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.3-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Romania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.9 [23.2-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Romania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.9 [23.5-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Romania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.7 [24.3-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Romania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [24.3-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Russia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.8-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Russia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.8-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Russia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.9-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Russia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [26.1-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Russia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [25.2-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Russia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [25.1-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Rwanda',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22 [21.5-22.5]',
			},
			{
				dims: {
					COUNTRY: 'Rwanda',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [21.3-22.1]',
			},
			{
				dims: {
					COUNTRY: 'Rwanda',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.7 [21.9-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Rwanda',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.3 [21.7-22.9]',
			},
			{
				dims: {
					COUNTRY: 'Rwanda',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.3 [20.6-22]',
			},
			{
				dims: {
					COUNTRY: 'Rwanda',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.1 [20.5-21.6]',
			},
			{
				dims: {
					COUNTRY: 'Saint Kitts and Nevis',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.7 [28.5-30.7]',
			},
			{
				dims: {
					COUNTRY: 'Saint Kitts and Nevis',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.2 [28.2-30.1]',
			},
			{
				dims: {
					COUNTRY: 'Saint Kitts and Nevis',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.9 [29.3-32.5]',
			},
			{
				dims: {
					COUNTRY: 'Saint Kitts and Nevis',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30.3 [28.9-31.7]',
			},
			{
				dims: {
					COUNTRY: 'Saint Kitts and Nevis',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.4 [26.9-30]',
			},
			{
				dims: {
					COUNTRY: 'Saint Kitts and Nevis',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28 [26.6-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Saint Lucia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.6 [28.8-30.3]',
			},
			{
				dims: {
					COUNTRY: 'Saint Lucia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.8 [28.2-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Saint Lucia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.2 [29.1-31.3]',
			},
			{
				dims: {
					COUNTRY: 'Saint Lucia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.4 [28.5-30.4]',
			},
			{
				dims: {
					COUNTRY: 'Saint Lucia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.9 [28-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Saint Lucia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.1 [27.3-29]',
			},
			{
				dims: {
					COUNTRY: 'Saint Vincent and the Grenadines',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [25.5-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Saint Vincent and the Grenadines',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [24.9-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Saint Vincent and the Grenadines',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.1 [25.1-31.1]',
			},
			{
				dims: {
					COUNTRY: 'Saint Vincent and the Grenadines',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.6 [24.7-30.5]',
			},
			{
				dims: {
					COUNTRY: 'Saint Vincent and the Grenadines',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [24-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Saint Vincent and the Grenadines',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [23.6-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Samoa',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '31.7 [31.1-32.3]',
			},
			{
				dims: {
					COUNTRY: 'Samoa',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '31.4 [30.9-31.9]',
			},
			{
				dims: {
					COUNTRY: 'Samoa',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '33.5 [32.6-34.4]',
			},
			{
				dims: {
					COUNTRY: 'Samoa',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '33.1 [32.4-33.9]',
			},
			{
				dims: {
					COUNTRY: 'Samoa',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.9 [29.2-30.7]',
			},
			{
				dims: {
					COUNTRY: 'Samoa',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.7 [29.1-30.3]',
			},
			// {
			// 	dims: {
			// 		COUNTRY: 'San Marino',
			// 		SEX: 'Both sexes',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2014',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'San Marino',
			// 		SEX: 'Both sexes',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2010',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'San Marino',
			// 		SEX: 'Female',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2014',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'San Marino',
			// 		SEX: 'Female',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2010',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'San Marino',
			// 		SEX: 'Male',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2014',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			// {
			// 	dims: {
			// 		COUNTRY: 'San Marino',
			// 		SEX: 'Male',
			// 		AGEGROUP: '18+  years',
			// 		GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
			// 		YEAR: '2010',
			// 	},
			// 	Comments: 'Estimate could not be calculated due to lack of covariate data.',
			// 	Value: 'No data',
			// },
			{
				dims: {
					COUNTRY: 'Sao Tome and Principe',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.8 [24.1-25.4]',
			},
			{
				dims: {
					COUNTRY: 'Sao Tome and Principe',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.4 [23.9-24.9]',
			},
			{
				dims: {
					COUNTRY: 'Sao Tome and Principe',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.7-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Sao Tome and Principe',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.4-26]',
			},
			{
				dims: {
					COUNTRY: 'Sao Tome and Principe',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.9 [23.1-24.8]',
			},
			{
				dims: {
					COUNTRY: 'Sao Tome and Principe',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [23-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Saudi Arabia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.5 [27.7-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Saudi Arabia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.1 [27.5-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Saudi Arabia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [27.6-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Saudi Arabia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.4 [27.6-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Saudi Arabia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.3 [27.3-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Saudi Arabia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.8 [27.1-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Senegal',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22.3-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Senegal',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.7 [22.2-23.2]',
			},
			{
				dims: {
					COUNTRY: 'Senegal',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [23.1-25]',
			},
			{
				dims: {
					COUNTRY: 'Senegal',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [23.1-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Senegal',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [21-22.7]',
			},
			{
				dims: {
					COUNTRY: 'Senegal',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.6 [20.9-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Serbia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [25.1-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Serbia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [25.2-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Serbia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [24-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Serbia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.3-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Serbia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.7-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Serbia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.7-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Seychelles',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [26.2-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Seychelles',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [26-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Seychelles',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28 [27.2-28.8]',
			},
			{
				dims: {
					COUNTRY: 'Seychelles',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.7 [27-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Seychelles',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.9-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Seychelles',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [24.6-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Sierra Leone',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.8 [22.3-23.3]',
			},
			{
				dims: {
					COUNTRY: 'Sierra Leone',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [22.1-23]',
			},
			{
				dims: {
					COUNTRY: 'Sierra Leone',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.6 [22.9-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Sierra Leone',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.3 [22.7-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Sierra Leone',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22 [21.3-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Sierra Leone',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.8 [21.2-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Singapore',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.7 [23.3-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Singapore',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [23.3-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Singapore',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [22.5-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Singapore',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.1 [22.6-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Singapore',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.3 [23.7-24.9]',
			},
			{
				dims: {
					COUNTRY: 'Singapore',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.1 [23.6-24.5]',
			},
			{
				dims: {
					COUNTRY: 'Slovakia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.8-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Slovakia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.7-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Slovakia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.7 [24.7-26.7]',
			},
			{
				dims: {
					COUNTRY: 'Slovakia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [24.7-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Slovakia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.5-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Slovakia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [26.2-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Slovenia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [24.8-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Slovenia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [24.8-28.6]',
			},
			{
				dims: {
					COUNTRY: 'Slovenia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [23.3-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Slovenia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [23.4-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Slovenia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [25-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Slovenia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [24.8-29.4]',
			},
			{
				dims: {
					COUNTRY: 'Solomon Islands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [24.7-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Solomon Islands',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [24.7-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Solomon Islands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.3-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Solomon Islands',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.3-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Solomon Islands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.5 [23.4-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Solomon Islands',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.5 [23.6-25.4]',
			},
			{
				dims: {
					COUNTRY: 'South Africa',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [26.9-27.7]',
			},
			{
				dims: {
					COUNTRY: 'South Africa',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [26.7-27.2]',
			},
			{
				dims: {
					COUNTRY: 'South Africa',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.1 [28.5-29.8]',
			},
			{
				dims: {
					COUNTRY: 'South Africa',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.7 [28.3-29.1]',
			},
			{
				dims: {
					COUNTRY: 'South Africa',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.4 [24.7-25.9]',
			},
			{
				dims: {
					COUNTRY: 'South Africa',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25 [24.6-25.4]',
			},
			{
				dims: {
					COUNTRY: 'South Sudan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [24.4-26.1]',
			},
			{
				dims: {
					COUNTRY: 'South Sudan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.9 [24.2-25.6]',
			},
			{
				dims: {
					COUNTRY: 'South Sudan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.5-28]',
			},
			{
				dims: {
					COUNTRY: 'South Sudan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.3-27.4]',
			},
			{
				dims: {
					COUNTRY: 'South Sudan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.7 [22.5-24.8]',
			},
			{
				dims: {
					COUNTRY: 'South Sudan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.4 [22.5-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Spain',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [26.1-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Spain',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [26.2-27]',
			},
			{
				dims: {
					COUNTRY: 'Spain',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [25.1-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Spain',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.4-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Spain',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.6-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Spain',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [26.7-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Sri Lanka',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22.2-23.8]',
			},
			{
				dims: {
					COUNTRY: 'Sri Lanka',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.5 [22-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Sri Lanka',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.5 [22.4-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Sri Lanka',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23 [22.2-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Sri Lanka',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.5 [21.5-23.6]',
			},
			{
				dims: {
					COUNTRY: 'Sri Lanka',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [21.3-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Sudan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [24.4-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Sudan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.9 [24.2-25.6]',
			},
			{
				dims: {
					COUNTRY: 'Sudan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Sudan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.3-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Sudan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.7 [22.5-24.8]',
			},
			{
				dims: {
					COUNTRY: 'Sudan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.4 [22.5-24.3]',
			},
			{
				dims: {
					COUNTRY: 'Suriname',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [25.5-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Suriname',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [25-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Suriname',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.2 [25.1-31.2]',
			},
			{
				dims: {
					COUNTRY: 'Suriname',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.7 [24.8-30.6]',
			},
			{
				dims: {
					COUNTRY: 'Suriname',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [24.1-29]',
			},
			{
				dims: {
					COUNTRY: 'Suriname',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [23.7-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Swaziland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [25.7-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Swaziland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [25.4-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Swaziland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.9 [27.6-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Swaziland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.4 [27.4-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Swaziland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [23-25.3]',
			},
			{
				dims: {
					COUNTRY: 'Swaziland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [22.9-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Sweden',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [25-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Sweden',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [25.1-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Sweden',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.9 [23.7-26]',
			},
			{
				dims: {
					COUNTRY: 'Sweden',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [24-25.7]',
			},
			{
				dims: {
					COUNTRY: 'Sweden',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.5-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Sweden',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.7-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Switzerland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.5-26]',
			},
			{
				dims: {
					COUNTRY: 'Switzerland',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [24.5-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Switzerland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.8 [22.5-25.2]',
			},
			{
				dims: {
					COUNTRY: 'Switzerland',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.9 [22.7-25]',
			},
			{
				dims: {
					COUNTRY: 'Switzerland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.9-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Switzerland',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.8-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Syria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.1 [27.2-29]',
			},
			{
				dims: {
					COUNTRY: 'Syria',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.7 [27-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Syria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29 [27.6-30.4]',
			},
			{
				dims: {
					COUNTRY: 'Syria',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.6 [27.5-29.8]',
			},
			{
				dims: {
					COUNTRY: 'Syria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26-28.5]',
			},
			{
				dims: {
					COUNTRY: 'Syria',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.8 [25.8-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Tajikistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.4 [24.1-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Tajikistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.9 [23.7-26.2]',
			},
			{
				dims: {
					COUNTRY: 'Tajikistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [24.3-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Tajikistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [23.9-25.8]',
			},
			{
				dims: {
					COUNTRY: 'Tajikistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.5 [23-28]',
			},
			{
				dims: {
					COUNTRY: 'Tajikistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.1 [22.7-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Thailand',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.1 [23.4-24.7]',
			},
			{
				dims: {
					COUNTRY: 'Thailand',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.8 [23.3-24.2]',
			},
			{
				dims: {
					COUNTRY: 'Thailand',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24.6 [23.7-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Thailand',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.4 [23.7-25]',
			},
			{
				dims: {
					COUNTRY: 'Thailand',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.6 [22.7-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Thailand',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.2 [22.6-23.8]',
			},
			{
				dims: {
					COUNTRY: 'The former Yugoslav republic of Macedonia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [24.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'The former Yugoslav republic of Macedonia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.4-27.1]',
			},
			{
				dims: {
					COUNTRY: 'The former Yugoslav republic of Macedonia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.3 [23.5-27.1]',
			},
			{
				dims: {
					COUNTRY: 'The former Yugoslav republic of Macedonia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.2 [23.7-26.7]',
			},
			{
				dims: {
					COUNTRY: 'The former Yugoslav republic of Macedonia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [23.9-28.8]',
			},
			{
				dims: {
					COUNTRY: 'The former Yugoslav republic of Macedonia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [23.8-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Togo',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.2 [22.5-23.9]',
			},
			{
				dims: {
					COUNTRY: 'Togo',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.9 [22.3-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Togo',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23-25.1]',
			},
			{
				dims: {
					COUNTRY: 'Togo',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.6 [22.8-24.4]',
			},
			{
				dims: {
					COUNTRY: 'Togo',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.4 [21.5-23.4]',
			},
			{
				dims: {
					COUNTRY: 'Togo',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.2 [21.4-23.1]',
			},
			{
				dims: {
					COUNTRY: 'Tonga',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '31.9 [31.3-32.6]',
			},
			{
				dims: {
					COUNTRY: 'Tonga',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '31.8 [31.3-32.3]',
			},
			{
				dims: {
					COUNTRY: 'Tonga',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '33.5 [32.6-34.4]',
			},
			{
				dims: {
					COUNTRY: 'Tonga',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '33.3 [32.5-34]',
			},
			{
				dims: {
					COUNTRY: 'Tonga',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '30.4 [29.6-31.3]',
			},
			{
				dims: {
					COUNTRY: 'Tonga',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '30.3 [29.6-30.9]',
			},
			{
				dims: {
					COUNTRY: 'Trinidad and Tobago',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [27.4-29.9]',
			},
			{
				dims: {
					COUNTRY: 'Trinidad and Tobago',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28 [26.9-29]',
			},
			{
				dims: {
					COUNTRY: 'Trinidad and Tobago',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.4 [27.6-31.3]',
			},
			{
				dims: {
					COUNTRY: 'Trinidad and Tobago',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.8 [27.3-30.2]',
			},
			{
				dims: {
					COUNTRY: 'Trinidad and Tobago',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.9 [26.3-29.5]',
			},
			{
				dims: {
					COUNTRY: 'Trinidad and Tobago',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [25.9-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Tunisia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.9-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Tunisia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.6-27]',
			},
			{
				dims: {
					COUNTRY: 'Tunisia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [26.2-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Tunisia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Tunisia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [24.9-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Tunisia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [24.6-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Turkey',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.8 [27.4-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Turkey',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.5 [27.1-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Turkey',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.5 [27.9-29.2]',
			},
			{
				dims: {
					COUNTRY: 'Turkey',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.2 [27.8-28.7]',
			},
			{
				dims: {
					COUNTRY: 'Turkey',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.5-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Turkey',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.7 [26.2-27.1]',
			},
			{
				dims: {
					COUNTRY: 'Turkmenistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.8-27]',
			},
			{
				dims: {
					COUNTRY: 'Turkmenistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25.2-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Turkmenistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.5-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Turkmenistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25.1-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Turkmenistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [25.5-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Turkmenistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [25-26.6]',
			},
			{
				dims: {
					COUNTRY: 'Tuvalu',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.3 [27.4-31.1]',
			},
			{
				dims: {
					COUNTRY: 'Tuvalu',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.1 [27.1-30.9]',
			},
			{
				dims: {
					COUNTRY: 'Tuvalu',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.9 [26.9-32.9]',
			},
			{
				dims: {
					COUNTRY: 'Tuvalu',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.7 [26.8-32.6]',
			},
			{
				dims: {
					COUNTRY: 'Tuvalu',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.7 [26.3-31.1]',
			},
			{
				dims: {
					COUNTRY: 'Tuvalu',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.5 [26.2-30.8]',
			},
			{
				dims: {
					COUNTRY: 'Uganda',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22 [21.4-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Uganda',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [21.2-22.2]',
			},
			{
				dims: {
					COUNTRY: 'Uganda',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23 [22-24]',
			},
			{
				dims: {
					COUNTRY: 'Uganda',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.6 [21.8-23.3]',
			},
			{
				dims: {
					COUNTRY: 'Uganda',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21 [20.2-21.8]',
			},
			{
				dims: {
					COUNTRY: 'Uganda',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '20.8 [20.2-21.5]',
			},
			{
				dims: {
					COUNTRY: 'Ukraine',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26 [24.5-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Ukraine',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.9 [24.5-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Ukraine',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [24-27.5]',
			},
			{
				dims: {
					COUNTRY: 'Ukraine',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.8 [24.2-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Ukraine',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.4 [23.9-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Ukraine',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.1 [23.7-28.5]',
			},
			{
				dims: {
					COUNTRY: 'United Arab Emirates',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29 [27.9-30]',
			},
			{
				dims: {
					COUNTRY: 'United Arab Emirates',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.6 [27.8-29.4]',
			},
			{
				dims: {
					COUNTRY: 'United Arab Emirates',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '29.7 [28.3-31.3]',
			},
			{
				dims: {
					COUNTRY: 'United Arab Emirates',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '29.5 [28.3-30.7]',
			},
			{
				dims: {
					COUNTRY: 'United Arab Emirates',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.6 [27.3-30]',
			},
			{
				dims: {
					COUNTRY: 'United Arab Emirates',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.2 [27.1-29.3]',
			},
			{
				dims: {
					COUNTRY: 'United Kingdom',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.3 [27-27.6]',
			},
			{
				dims: {
					COUNTRY: 'United Kingdom',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [26.9-27.2]',
			},
			{
				dims: {
					COUNTRY: 'United Kingdom',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26.7-27.6]',
			},
			{
				dims: {
					COUNTRY: 'United Kingdom',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [26.6-27.1]',
			},
			{
				dims: {
					COUNTRY: 'United Kingdom',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.5 [27-27.9]',
			},
			{
				dims: {
					COUNTRY: 'United Kingdom',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.2 [27-27.5]',
			},
			{
				dims: {
					COUNTRY: 'United Republic of Tanzania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.1 [22.6-23.5]',
			},
			{
				dims: {
					COUNTRY: 'United Republic of Tanzania',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.8 [22.4-23.1]',
			},
			{
				dims: {
					COUNTRY: 'United Republic of Tanzania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '24 [23.3-24.6]',
			},
			{
				dims: {
					COUNTRY: 'United Republic of Tanzania',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.5 [23-24]',
			},
			{
				dims: {
					COUNTRY: 'United Republic of Tanzania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.2 [21.5-22.9]',
			},
			{
				dims: {
					COUNTRY: 'United Republic of Tanzania',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22 [21.4-22.6]',
			},
			{
				dims: {
					COUNTRY: 'United States of America',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.8 [28.4-29.2]',
			},
			{
				dims: {
					COUNTRY: 'United States of America',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.5 [28.2-28.8]',
			},
			{
				dims: {
					COUNTRY: 'United States of America',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.8 [28.2-29.4]',
			},
			{
				dims: {
					COUNTRY: 'United States of America',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.5 [28.1-28.9]',
			},
			{
				dims: {
					COUNTRY: 'United States of America',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '28.8 [28.2-29.3]',
			},
			{
				dims: {
					COUNTRY: 'United States of America',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '28.5 [28.2-28.9]',
			},
			{
				dims: {
					COUNTRY: 'Uruguay',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [26-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Uruguay',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.4 [25.7-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Uruguay',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.9 [25.5-28.2]',
			},
			{
				dims: {
					COUNTRY: 'Uruguay',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [25.4-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Uruguay',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.7 [25.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Uruguay',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.3 [25.3-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Uzbekistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.1 [25.1-27]',
			},
			{
				dims: {
					COUNTRY: 'Uzbekistan',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.6 [24.9-26.3]',
			},
			{
				dims: {
					COUNTRY: 'Uzbekistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.3 [24.8-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Uzbekistan',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.7 [24.5-26.9]',
			},
			{
				dims: {
					COUNTRY: 'Uzbekistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.9 [24.6-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Uzbekistan',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.4 [24.3-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Vanuatu',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.2 [25.7-26.8]',
			},
			{
				dims: {
					COUNTRY: 'Vanuatu',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26 [25.5-26.5]',
			},
			{
				dims: {
					COUNTRY: 'Vanuatu',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.8 [25.9-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Vanuatu',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.6 [25.9-27.3]',
			},
			{
				dims: {
					COUNTRY: 'Vanuatu',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.6 [24.8-26.4]',
			},
			{
				dims: {
					COUNTRY: 'Vanuatu',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [24.8-26.1]',
			},
			{
				dims: {
					COUNTRY: 'Venezuela',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.2 [26.5-28]',
			},
			{
				dims: {
					COUNTRY: 'Venezuela',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27 [26.4-27.6]',
			},
			{
				dims: {
					COUNTRY: 'Venezuela',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.1 [26-28.3]',
			},
			{
				dims: {
					COUNTRY: 'Venezuela',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.9 [26-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Venezuela',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '27.4 [26.3-28.4]',
			},
			{
				dims: {
					COUNTRY: 'Venezuela',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '27.1 [26.3-27.9]',
			},
			{
				dims: {
					COUNTRY: 'Yemen',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.8 [23.7-27.8]',
			},
			{
				dims: {
					COUNTRY: 'Yemen',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '25.5 [23.6-27.4]',
			},
			{
				dims: {
					COUNTRY: 'Yemen',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '26.5 [23.4-29.7]',
			},
			{
				dims: {
					COUNTRY: 'Yemen',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '26.2 [23.2-29.3]',
			},
			{
				dims: {
					COUNTRY: 'Yemen',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25.2 [22.7-27.7]',
			},
			{
				dims: {
					COUNTRY: 'Yemen',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [22.5-27.2]',
			},
			{
				dims: {
					COUNTRY: 'Zambia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '22.6 [21.8-23.5]',
			},
			{
				dims: {
					COUNTRY: 'Zambia',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '22.3 [21.6-23]',
			},
			{
				dims: {
					COUNTRY: 'Zambia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.8 [22.8-24.8]',
			},
			{
				dims: {
					COUNTRY: 'Zambia',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.4 [22.6-24.1]',
			},
			{
				dims: {
					COUNTRY: 'Zambia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.5 [20.2-22.8]',
			},
			{
				dims: {
					COUNTRY: 'Zambia',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.3 [20.1-22.4]',
			},
			{
				dims: {
					COUNTRY: 'Zimbabwe',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '23.4 [22.8-24]',
			},
			{
				dims: {
					COUNTRY: 'Zimbabwe',
					SEX: 'Both sexes',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '23.3 [22.9-23.7]',
			},
			{
				dims: {
					COUNTRY: 'Zimbabwe',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '25 [24.1-25.9]',
			},
			{
				dims: {
					COUNTRY: 'Zimbabwe',
					SEX: 'Female',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '24.8 [24.2-25.5]',
			},
			{
				dims: {
					COUNTRY: 'Zimbabwe',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2014',
				},
				Value: '21.8 [21-22.6]',
			},
			{
				dims: {
					COUNTRY: 'Zimbabwe',
					SEX: 'Male',
					AGEGROUP: '18+  years',
					GHO: 'Mean BMI (kg/m2) (age-standardized estimate)',
					YEAR: '2010',
				},
				Value: '21.7 [21.1-22.3]',
			},
		],
	};

	window.obesityData = obesityData;
});
