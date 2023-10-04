/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'main-red': '#F65552',
        'main-blue': '#0A327B',
        'background-desktop': '#F9FAFD',
      },
      colors: {
        'main-red': '#F65552',
        'main-blue': '#0A327B',
        'very-dark-grey-blue': '#1C202B',
        'dark-grey-blue': '#5E6778',
        'grey-blue': '#939CAD',
        'light-grey-blue': '#E5EFFA',
        'very-light-grey-blue': '#DDE7EE',
        'main-snow': '#F7FAFD',
      },
      fontFamily: {
        main: 'Plus Jakarta Sans, sans-serif',
      },
    },
  },
  plugins: [],
};
