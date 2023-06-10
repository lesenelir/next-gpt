/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    'bg-canvas-b-1', 'text-canvas-t-1', 'bg-canvas-t-1',
    'bg-canvas-b-2', 'text-canvas-t-2', 'bg-canvas-t-2',
    'bg-canvas-b-3', 'text-canvas-t-3', 'bg-canvas-t-3',
    'bg-canvas-b-4', 'text-canvas-t-4', 'bg-canvas-t-4',
    'bg-canvas-b-5', 'text-canvas-t-5', 'bg-canvas-t-5',
    'bg-canvas-b-6', 'text-canvas-t-6', 'bg-canvas-t-6',
    'bg-canvas-b-7', 'text-canvas-t-7', 'bg-canvas-t-7',
    'bg-canvas-b-8', 'text-canvas-t-8', 'bg-canvas-t-8',
    'bg-canvas-b-9', 'text-canvas-t-9', 'bg-canvas-t-9',
    'bg-canvas-b-10', 'text-canvas-t-10', 'bg-canvas-t-10',
    'bg-canvas-b-11', 'text-canvas-t-11', 'bg-canvas-t-11',
    'bg-canvas-b-12', 'text-canvas-t-12', 'bg-canvas-t-12',
    'bg-canvas-b-13', 'text-canvas-t-13', 'bg-canvas-t-13',
    'bg-canvas-b-14', 'text-canvas-t-14', 'bg-canvas-t-14',
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
          'b-1': '#235354',
          't-1': '#FFFFDF',
          'b-2': '#240647',
          't-2': '#D5FDFF',
          'b-3': '#20361B',
          't-3': '#F5C3FC',
          'b-4': '#3A083E',
          't-4': '#D4FDCC',
          'b-5': '#343324',
          't-5': '#FFFFDF',
          'b-6': '#235354',
          't-6': '#FFFFDF',
          'b-7': '#E7F1FE',
          't-7': '#3E46F6',
          'b-8': '#F9FEDE',
          't-8': '#A765F5',
          'b-9': '#E0FDDB',
          't-9': '#A765F5',
          'b-10': '#FFFFDF',
          't-10': '#235354',
          'b-11': '#F8D9FC',
          't-11': '#0610A5',
          'b-12': '#FFFEBE',
          't-12': '#081DF5',
          'b-13': '#D5FDFF',
          't-13': '#A765F5',
          'b-14': '#00012C',
          't-14': '#FFFFDF',
        }
      }
    }
  },
  plugins: []
}
