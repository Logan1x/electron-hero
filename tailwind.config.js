/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				base: "20px", // Set the base font size to 20px
			},
			fontFamily: {
				sans: ["Space Grotesk", "sans-serif"], // Set the default sans font to Roboto
			},
		},
	},
	plugins: [],
};
