/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E8F3FF',
          100: '#D5E8FF',
          200: '#B3D3FF',
          300: '#85B4FF',
          400: '#5686FF',
          500: '#2F59FFv',
          600: '#0C26FF',
          700: '#0017EB',
          800: '#061CCD',
          900: '#10249F',
          950: '#0A135C'
        }, 
        'light-blue': '#E8F3FF',
        'picton-blue': '#4CABE4',
        'blue-jeans': '#5BB5E9',
        'baby-blue': '#89C8F2',
        'vivi-ceru': '#11ACED',
        'violet-blue': {
          DEFAULT: '#324BAA',
          50: '#CCD0FF',
          100: '#A6ADFF',
          200: '#808AF3',
          300: '#5B6ACE'
        },
        'dark-blue': '#0A135C',
        'dark-blue2': '#091153',
        'light-blue2': '#B3D3FF',
        'light-blue3': '#D5E8FF',
        'light-blue4': '#E8F3FF'
      }
    },
 
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#B3D3FF",
        },
      },
    ],
  },
}
