/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cTextDark: "#301934",
        cMain: "#fe6601",
        cDarkGrey: "#23272a",
      },
      margin: {
        "10px": "10px",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
