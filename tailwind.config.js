/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
      },
      screens: {
        '1xs': { min: '430px', max: '639px' },
      },
      // container: {
      //   center: true,
      //   // padding: '2rem',
      //   screens: {
      //     tiny: { min: '360', max: '429px' },
      //     // => @media (min-width: 480px and max-width: 639px) { ... }
      //     // sx: { min: '430px', max: '639px' },
      //     // sm: { min: '640px', max: '767px' },
      //     sm: { min: '430px', max: '767px' },
      //     // => @media (min-width: 640px and max-width: 767px) { ... }
      //     md: { min: '768px', max: '1023px' },
      //     // => @media (min-width: 768px and max-width: 1023px) { ... }
      //     lg: { min: '1024px', max: '1279px' },
      //     // => @media (min-width: 1024px and max-width: 1279px) { ... }
      //     xl: { min: '1280px', max: '1440px' },
      //     // => @media (min-width: 1280px and max-width: 1535px) { ... }
      //     '2xl': { min: '1536px', max: '1919px' },
      //     // => @media (min-width: 1536px and max-width: 1919px) { ... }
      //     '3xl': { min: '1920px' },
      //     // => @media (min-width: 1920px) { ... }
      //   },
      // },
    },
  },
  plugins: [require('daisyui')],
};
