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
            '--tw-prose-headings' : '#7861C1',
            '--tw-prose-lead' : '#525252',
            '--tw-prose-links' : '#5F4D96',
            '--tw-prose-bold' : '#171717',
            '--tw-prose-counters' : '#737373',
            '--tw-prose-bullets' : '#7861C1',
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
    
    screens: {
      'laptop': {'min': '768px'},
      'olpc': {'min': '1240px'},
      'mvpc': {'min': '1366px'},
      'pc': {'min': '1536px'}, 
    },
    colors: {
      primary: {
        lighter: '#B4D7FF',
        light: '#46557E',
        DEFAULT: '#324164',
        dark: '#191E28',
        darker: '#0F141E',
      },
    }
  }
},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

