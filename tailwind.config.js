/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#70f3f8",
        orange: "#f87070",
        violet: "#d881f8",
        darkBg: "#161932",
        lessDarkBg: "#1e213f",
        textColor: "#D7E0FF",
        grey: "#979797",
      },
      boxShadow: {
        outerShadow:
          "0 0 1rem 0.2rem #161932 "
      },
    },
  },
  plugins: [],
};
