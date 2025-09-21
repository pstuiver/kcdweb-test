import defaultTheme from 'tailwindcss/defaultTheme';
// import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			// Added by Paul
			/* xs: breakpoint before ... defaultTheme breakpoints, else the smaller breakpoint's specificity will override the larger breakpoints */
			xs: '480px',
			...defaultTheme.screens
		},
		extend: {}
	},
	darkMode: 'class'
};
