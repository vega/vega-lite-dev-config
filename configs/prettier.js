module.exports = {
  printWidth: 120,
  singleQuote: true,
  bracketSpacing: false,
  arrowParens: 'avoid',
  trailingComma: 'none',
  proseWrap: 'never',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['*.html'],
      options: {
        singleQuote: false
      }
    }
  ],
  ignore: ['.eslintrc.js', 'prettier.config.js']
};
