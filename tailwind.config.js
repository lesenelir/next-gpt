/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        menuColors: {
          '50': '#f6f6f7',
          '100': '#e2e4e5',
          '200': '#c5c8ca',
          '300': '#a0a3a8',
          '400': '#7c8085',
          '500': '#62656a',
          '600': '#4d5054',
          '700': '#404245',
          '800': '#35383a',
          '900': '#2f3032',
          '950': '#202123',
          'chatGround': '#343540'
        },
        tuna: {
          '50': '#f4f5f7',
          '100': '#e3e5ea',
          '200': '#c9ccd8',
          '300': '#a4aabc',
          '400': '#777e99',
          '500': '#5c637e',
          '600': '#4f536b',
          '700': '#44475a',
          '800': '#3d3f4d',
          '900': '#343540',
          '950': '#21222b',
          'chatInput': '#40414E'
        },
        wordColor: {
          'light': '#E3E3E8',
          'dark': '#1F1F1F'
        },
        botBackGround: {
          'light': '#F7F7F8',
          'userDark': '#444653'
        },
        canvas: {
          'bg-1': '#235354',
          'text-1': '#FFFFDF',
          'bg-2': '#240647',
          'text-2': '#D5FDFF',
          'bg-3': '#20361B',
          'text-3': '#F5C3FC',
          'bg-4': '#3A083E',
          'text-4': '#D4FDCC',
          'bg-5': '#343324',
          'text-5': '#FFFFDF',
          'bg-6': '#235354',
          'text-6': '#FFFFDF',
          'bg-7': '#E7F1FE',
          'text-7': '#3E46F6',
          'bg-8': '#F9FEDE',
          'text-8': '#A765F5',
          'bg-9': '#E0FDDB',
          'text-9': '#A765F5',
          'bg-10': '#FFFFDF',
          'text-10': '#235354',
          'bg-11': '#F8D9FC',
          'text-11': '#0610A5',
          'bg-12': '#FFFEBE',
          'text-12': '#081DF5',
          'bg-13': '#D5FDFF',
          'text-13': '#A765F5',
          'bg-14': '#00012C',
          'text-14': '#FFFFDF',

        }
      }
    }
  },
  plugins: []
}
