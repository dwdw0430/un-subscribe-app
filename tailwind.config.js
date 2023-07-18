/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {

    extend: {
      colors: {
        emeraldgreen: '#5CDB95',
        imperialblue: '#05386B',
        lightwhite: '#edf5e1',
  
        brightred: '#F76C6C',
        lightblue: '#A8D0E6',
        darkcoldblue: '#374785',
        darkerblue: '#24305E',
      },
    },
  },
  plugins: [],
}

