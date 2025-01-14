/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#13120D",
        secondaryDark: "#31302C",
        grayLight: "#54534F",
        grayLighter: "#807E71",
        grayNeutral: "#B7B6AC",
        gold: "#BCA041",
        yellowBright: "#F5E60F",
      },
      fontFamily: {
        sans: ["'DCC-Ash'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
