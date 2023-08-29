/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern":
					"url('/images/header-background.jpg')"
			},
			screens: {
				"mobile": '480px',
			},
			height: {
				"screen/minus-header": 'calc(100vh - 90px)',  // adjust 80px to the height of your header
			 },
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
