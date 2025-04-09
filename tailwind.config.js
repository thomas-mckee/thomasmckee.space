/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',"./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)'},
      },
    },
  },
  plugins: [],
}

