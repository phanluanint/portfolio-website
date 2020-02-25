// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    // etc.
  ],
  whitelist: ['body'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}