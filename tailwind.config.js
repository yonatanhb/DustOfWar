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
        "mobile-p": "11px",
      },
      lineHeight: {
        nav: "26.4px",
        hero: "26.4",
        "mobile-p": "17px",
      },
      spacing: {
        "base-padding": "1.4rem",
      },
      letterSpacing: {
        nav: "0%",
      },
      fontWeight: {
        light: 300,
      },
      borderRadius: {
        btn: "5px",
      },
      screens: {
        sm: "402px",
        md: "768px",
        lg: "1043px",
        lghero: "1407px",
        xl: "1730px",
        lgabout: "1408px",
        mdabout: "1143px",
        smabout: "703px",
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
