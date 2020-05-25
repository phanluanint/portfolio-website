const { colors, opacity } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.tsx',
      './src/components/**/*.tsx',
    ],
    options: {
      whitelist: ['body'],
    },
  },
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '1000': '#191d2b',
          '1100': '#10121b',
        },
        blue: {
          ...colors.blue,
          '1000': '#037fff',
        }
      },
      opacity: {
        '5': '0.05',
        '3': '0.03',
        '2': '0.02',
        '10': '.1',
      },
      fontSize: {
         '4-5xl': '2.57rem',
         '7xl': '4.5rem'
      },
      height: {
        '1px': '1px',
        '2px': '2px',
        '5px': '5px',
      },
      width: {
        '9': '2.25rem',
        '26': '6.5rem',
        '28': '7rem',
        '300px': '300px',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '9px': '9px'
      }
    },
    fontFamily: {
    // 'display': ['Oswald', ...],
    'body': ['Nunito', 'sans-serif'],
    },
  },
  variants: {},
  plugins: []
}
