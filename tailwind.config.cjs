/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#00A7FE",
        accent: "#F2F4F5",
      },
    },
  },
  plugins: [],
};
