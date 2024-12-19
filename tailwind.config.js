/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#ecf7ff',
          '100': '#d4ecff',
          '200': '#b3dfff',
          '300': '#7fcdff',
          '400': '#43afff',
          '500': '#188aff',
          '600': '#0066ff',
          '700': '#004efb',
          '800': '#0342d3',
          '900': '#0a3a9e',
          '950': '#0c255f',
        },
        secondary: {
          '50': '#f5f4fe  ',
          '100': '#edebfc',
          '200': '#dedafa',
          '300': '#c5bdf5',
          '400': '#a697ee',
          '500': '#876be5',
          '600': '#764dda',
          '700': '#663bc6',
          '800': '#5631a6',
          '900': '#482a88',
          '950': '#2c195c',
        },
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [],
}