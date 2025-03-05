import { px } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#312f2c",
        accent: "#484637",
        highlight: "#bca041",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["'DCC-Ash'", "sans-serif"],
        chivo: ["'Chivo Mono'", "monospace"],
      },
      fontSize: {
        nav: "18px",
        about: "18px",
        hero: "18px",
      },
      lineHeight: {
        nav: "26.4px",
        hero: "26.4",
      },
      letterSpacing: {
        nav: "0%",
      },
      fontWeight: {
        light: 300,
      },
      screens: {
        sm: "402px",
        md: "768px",
        lg: "1043px",
        lghero: "1407px",
        xl: "1730px",
        lgabout: "1407px",
        mdabout: "1142px",
        smabout: "702px",
        lgfooter: "1176px",
        mdfooter: "866px",
        mdteam: "867px",
        smteam: "736px",
        smfooter: "760px",
      },
      width: {
        sm: "402px",
        lg: "1043px",
        xl: "1730px",
      },
    },
  },
  plugins: [],
};
