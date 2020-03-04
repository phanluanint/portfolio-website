const { colors, opacity } = require('tailwindcss/defaultTheme')

module.exports = {
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
         '4.5xl': '2.57rem',
         '7xl': '4.5rem'
      },
      height: {
        '5px': '5px',
      },
      width: {
        '9': '2.25rem',
        '26': '6.5rem',
        '28': '7rem',
      }
    },
    fontFamily: {
    // 'display': ['Oswald', ...],
    'body': ['Nunito', 'san-serif'],
    },
  },
  variants: {},
  plugins: []
}
