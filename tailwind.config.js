/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1496px',
      }
    },
    fontFamily: {
      'sans' : ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'tabiat' : "url('/src/images/nature.avif')"
      }
    },
  },
  plugins: [],
}
