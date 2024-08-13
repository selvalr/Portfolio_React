/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        primary: "white",
        secondary: "white",
      },
    },
    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [],
};
