// postcss.config.js
module.exports = {
  // plugins: {
  //   'postcss-import' :{},
  //   'tailwindcss': {},
  //   'postcss-nested': {},
  //   'autoprefixer': {},
  // }

  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}