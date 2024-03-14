/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#537FE7',
        'custom-blue-2': '#2984FF',
        'custom-ligth-grey': '#F3F6FB',
        'custom-dark-grey': '#253E76'
      },
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}

