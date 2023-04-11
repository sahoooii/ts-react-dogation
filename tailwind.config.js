/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-green-20': '#E6FFE9',
				'light-green-50': '#B1F9D0',
				'light-green-100': '#96D0CD',
				'light-blue-20': '#BAD3FF',
				'light-blue-50': '#65CBDA',
				'light-blue-100': '#15B2D1',
				'dark-blue-50': '#236E95',
				'dark-blue-100': '#1D5171',
				'sand-50': '#FEDBB7',
				'sand-80': '#DFCE9D',
				'sand-300': '#FFA318',
				'sun-300': '#FF6F56',
				'banana-yellow-50': '#F8E035',
				'banana-yellow-200': '#FFFF11',
			},
			backgroundImage: (theme) => ({
				'gradient-ocean': 'linear-gradient(to right, #36d1dc, #5b86e5)',
			}),
			fontFamily: {
				'title-serif': ['Bree Serif', 'serif'],
				'explain-serif': ['Noto Serif Sinhala', 'serif'],
				'nav-cursive': ['Righteous', 'cursive'],
			},
			content: {
				'logo-circle': "url('./assets/logo/dogation-logo-green-circle.jpg')",
				pow: "url('./assets/decorate/paw-print.png')",
				chair: "url('./assets/decorate/beach-chair.png')",
			},
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px',
		},
	},
	plugins: [],
};
