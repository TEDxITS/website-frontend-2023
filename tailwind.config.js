/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // TEDxITS 2023 font face
        primary: ['var(--font-futura)', ...fontFamily.sans],
        baron: ['var(--font-baron)'],
        quaker: ['var(--font-quaker)'],
      },
      backgroundImage: {
        // TEDxITS 2023 background images
        stars: "url('/images/background/bg-stars.jpg')",
        moon: "url('/images/background/bg-moon.png')",
        plastic: "url('/images/background/bg-transparent-plastic.png')",
        'transparent-stars':
          "url('/images/background/bg-transparent-star.png')",
        hue: "url('/images/background/bg-hue.png')",

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
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
