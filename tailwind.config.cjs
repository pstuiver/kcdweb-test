/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				// Added by Paul
				xs: '480px'
				// => @media (min-width: 480px) { ... }
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};

module.exports = config;
