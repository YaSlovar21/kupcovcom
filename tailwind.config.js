/** @type {import('tailwindcss').Config} */

const path = require('path');

module.exports = {
  content: ["./src/**/*.html", "./src/*.html"],
  darkMode: ["class", "[data-mode='light']"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        kupcovcom: {
          css: {
            '--tw-prose-body' : '#f2f2f2',
            '--tw-prose-headings' : theme('colors.pink[800]'),
            '--tw-prose-lead' : '#525252',
            '--tw-prose-links' : '#171717',
            '--tw-prose-bold' : '#171717',
            '--tw-prose-counters' : '#737373',
            '--tw-prose-bullets' : '#d4d4d4',
            '--tw-prose-hr' : '#e5e5e5',
            '--tw-prose-quotes' : '#171717',
            '--tw-prose-quote-borders' : '#e5e5e5',
            '--tw-prose-captions' : '#737373',
            '--tw-prose-kbd' : '#171717',
            '--tw-prose-kbd-shadows' : '23 23 23',
            '--tw-prose-code' : '#171717',
            '--tw-prose-pre-code' : '#e5e5e5',
            '--tw-prose-pre-bg' : '#262626',
            '--tw-prose-th-borders' : '#d4d4d4',
            '--tw-prose-td-borders' : '#e5e5e5',
            '--tw-prose-invert-body' : '#d4d4d4',
            '--tw-prose-invert-headings' : '#fff',
            '--tw-prose-invert-lead' : '#a3a3a3',
            '--tw-prose-invert-links' : '#fff',
            '--tw-prose-invert-bold' : '#fff',
            '--tw-prose-invert-counters' : '#a3a3a3',
            '--tw-prose-invert-bullets' : '#525252',
            '--tw-prose-invert-hr' : '#404040',
            '--tw-prose-invert-quotes' : '#f5f5f5',
            '--tw-prose-invert-quote-borders' : '#404040',
            '--tw-prose-invert-captions' : '#a3a3a3',
            '--tw-prose-invert-kbd' : '#fff',
            '--tw-prose-invert-kbd-shadows' : '255 255 255',
            '--tw-prose-invert-code' : '#fff',
            '--tw-prose-invert-pre-code' : '#d4d4d4',
            '--tw-prose-invert-pre-bg' : 'rgba(0,0,0,.5)',
            '--tw-prose-invert-th-borders' : '#525252',
            '--tw-prose-invert-td-borders' : '#404040'
          },
        },
      }),
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

