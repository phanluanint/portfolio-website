const { colors } = require('tailwindcss/defaultTheme')

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
      }
    },
    fontFamily: {
    // 'display': ['Oswald', ...],
    'body': ['Nunito', 'san-serif'],
    },
    opacity: {
      '10': '.1',
    }
  },
  variants: {},
  plugins: []
}
