module.exports = {
  printWidth: 120,
  proseWrap: 'never',
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        bracketSpacing: false,
        singleQuote: true,
      },
    },
  ],
  ignore: ['.eslintrc.js', 'prettier.config.js', '.prettierrc.js'],
};
