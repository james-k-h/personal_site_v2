/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        accent: '#1b1b1b',
        accentDark: '#FFA500',
        gray: '#747474',
        lightGray: '#d3d3d3',
        light: '#a9a9a9',
        white: '#fff',
        lightOrange: '#f5bf42',
        teal: '#03f4fc',
        silver: '#C0C0C0',
        smoke: '#848884',
        steelGrey: '#71797E',
        lime: '#32CD32',
        coralPink: '#F88379',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        roll: 'roll 24s linear infinite',
      },
      screens: {
        sxl: '1180px',
        // @media (min-width: 1180px){...}
        xs: '480px',
        // @media (min-width: 480px){...}
      },
    },
  },
  plugins: [],
};
