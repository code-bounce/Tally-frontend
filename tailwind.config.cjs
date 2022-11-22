/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('@tailwindcss/forms')],
  variants: {
    scrollbar: ['rounded']
}
}