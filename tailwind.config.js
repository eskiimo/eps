/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cTextDark: "#301934",
        cMain: "#fe6601",
        cDarkGrey: "#23272a",
        cLightGrey: "#FAFAFA",
      },
      skew: {
        n6: "-6deg",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
