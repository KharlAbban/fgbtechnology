/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryBlue": "#090E34",
        "secondaryBlue": "#1C3FB7",
        "primaryBlack": "#000114",
      },
      fontFamily: {
        noto: "Noto Serif",
        poppins: "Poppins",
        playwright: "Playwrite PL"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: []
  }
}