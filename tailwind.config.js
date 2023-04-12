/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // TEDxITS 2023 screen sizes
        xs: '330px',
      },
      fontFamily: {
        // TEDxITS 2023 font face
        primary: ['var(--font-futura)', ...fontFamily.sans],
        baron: ['var(--font-baron)'],
        quaker: ['var(--font-quaker)'],
        vt323: ['var(--font-vt323)'],
      },
      backgroundImage: {
        // TEDxITS 2023 background images
        stars: "url('/images/background/bg-stars.jpg')",
        moon: "url('/images/background/bg-moon.png')",
        plastic: "url('/images/background/bg-transparent-plastic.png')",
        'transparent-stars':
          "url('/images/background/bg-transparent-star.png')",
        hue: "url('/images/background/bg-hue.png')",
        '7-years': "url('/images/background/bg-7-years.png')",
        '7-years-jpg': "url('/images/background/bg-7-years.jpg')",
        '7-years-repeat': "url('/images/background/bg-7-years-repeat.jpg')",
        'textured-paper': "url('/images/background/bg-textured-paper.jpg')",
      },
      colors: {
        // TEDxITS color palette
        cred: '#e83525',
        corange: '#DE633B',
        cyellow: '#EEA332',
        ccream: '#DCB69F',
        cwhite: '#F0EFE5',
        cpink: '#E34378',
        csky: '#42779B',
        cblue: '#354582',
        cgreen: '#1A5B38',
        cblack: '#1D1D1E',
        cgray: '#4D4D4D',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(5deg)',
          },
          '75%': {
            transform: 'rotate(-5deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        stutter: {
          '0%': {
            transform: 'translateX(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateX(5px) rotate(2deg)',
          },
        },
        hover: {
          '0%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-5px)',
          },
          '50%': {
            transform: 'translateY(5px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },

      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        rotate: 'rotate 3s linear infinite',
        stutter: 'stutter 0.2s ease-in-out infinite',
        hover: 'hover 2s linear infinite',
        spin: 'spin 10s linear infinite',
        'spin-reverse': 'spin 10s linear infinite reverse',
      },
    },
  },
};
