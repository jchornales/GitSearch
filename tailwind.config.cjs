/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      emerald: {
        500: '#10b981',
        600: '#059669',
        700: '#047857',
      },
      gray: {
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        800: '#292524',
      },
      teal: {
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    maxHeight: {
      400: '400px',
      600: '600px',
    },
    extend: {
      backgroundColor: ['active', 'hover', 'focus'],
    },
  },
  plugins: [require('daisyui')],
};
