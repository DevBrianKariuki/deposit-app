/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2D2D45",
        navyBlue: "#383855",
        orange: "#FD783C",
        lightBlue: "#A8A8C7",
        white: "#FFFFFF",
        lightGray: "#BBBBBB",
        navBorder: "#3F3F5F",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}