/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./menu-bolugulung.html",
    "./menu-dessertbox.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
        kaushan: ['Kaushan Script'],
        ancizar: ['Ancizar Sans'],
        dmserif: ['DM Serif Text']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
