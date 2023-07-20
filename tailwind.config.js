/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    'bg-canvas-b-0', 'text-canvas-t-0', 'bg-canvas-t-0',
    'bg-canvas-b-1', 'text-canvas-t-1', 'bg-canvas-t-1',
    'bg-canvas-b-2', 'text-canvas-t-2', 'bg-canvas-t-2',
    'bg-canvas-b-3', 'text-canvas-t-3', 'bg-canvas-t-3',
    'bg-canvas-b-4', 'text-canvas-t-4', 'bg-canvas-t-4',
    'bg-canvas-b-5', 'text-canvas-t-5', 'bg-canvas-t-5',
    'bg-canvas-b-6', 'text-canvas-t-6', 'bg-canvas-t-6',
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
        chatMessage: {
          'light': '#384150',
          'dark': '#D2D5DB',
        },
        canvas: {
          'b-0': '#235354',
          't-0': '#FFFFDF',
          'b-1': '#240647',
          't-1': '#D5FDFF',
          'b-2': '#20361B',
          't-2': '#F5C3FC',
          'b-3': '#3A083E',
          't-3': '#D4FDCC',
          'b-4': '#343324',
          't-4': '#FFFFDF',
          'b-5': '#E7F1FE',
          't-5': '#3E46F6',
          'b-6': '#FFFFDF',
          't-6': '#235354',
        }
      }
    }
  },
  plugins: []
}
