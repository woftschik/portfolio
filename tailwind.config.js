/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ["courierprime-regular-webfont"],
        lato: ["lato-regular-webfont"],
        "lato-bold": ["lato-bold-webfont"],
      },
      colors: {
        "brand-yellow": "#FBBB14",
        textgray: "#707070",
        "brand-bg-dark": "#191923",
        "theme-darkgray": "#1E1E28",
        "theme-middlekgray": "#20202A",
        "theme-lightgray": "#2C2C38",
      },
      fontSize: {
        "art-sm-text": "0.625rem",
        sxs: "0.45rem",
        mxs: "0.55rem",
      },
      width: {
        288: "72rem",
      },
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
