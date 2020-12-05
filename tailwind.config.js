const colors = require('tailwindcss/colors');
const Color = require('color')
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()
module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {},
        secondary: {},
        backgroundSite: {},
        textColor: {},
        sidebarColor: {},
        footerColor: {}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
