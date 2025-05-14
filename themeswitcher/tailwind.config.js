/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",//to enable hhtml property so that change of color can occur
  theme: {
    extend: {},
  },
  plugins: [],
}