import {PrettierConfig} from '@beemo/driver-prettier';

const config: PrettierConfig & {overrides: [{files: string; options: PrettierConfig}]} = {
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

export default config;
