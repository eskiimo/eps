/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cTextDark: "#301934",
        cMain: "#E2622C",
        cDarkGrey: "#3a3a3a",
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
