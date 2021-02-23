import {ESLintConfig} from '@beemo/driver-eslint';

const {context} = process.beemo as any; // FIXME: https://github.com/beemojs/beemo/issues/112

const config: ESLintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'prettier', ...(context.args.react ? ['react'] : [])],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    ...(context.args.react ? ['plugin:react/recommended'] : []),
  ],
  overrides: [
    {
      files: ['*.ts', ...(context.args.react ? ['*.tsx'] : [])],
    },
  ],
  ...(context.args.react ? {settings: {react: {version: 'detect'}}} : {}),
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ...(context.args.react ? {jsx: true} : {}),
  },
  rules: {
    'prettier/prettier': 'warn',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'off', // we can do this later
    '@typescript-eslint/no-namespace': 'error',
    // https://eslint.org/docs/rules/
    'linebreak-style': ['error', 'unix'],
    'no-irregular-whitespace': ['error', {skipComments: true}],
    'no-alert': 'error',
    'prefer-const': 'error',
    'no-return-assign': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    // "prefer-template": "error",  // we can do this later
    'no-console': 'off', // we use console
    'no-undef': 'off', // typescript takes care of this for us
    'no-unreachable': 'off', // typescript takes care of this for us
  },
  ignore: [
    '.eslintrc.js',
    'babel.config.js',
    'prettier.config.js',
    'jest.config.js',
    'rollup.config.js',
    'build',
    'build-es5',
    'dist',
    'coverage',
  ],
} as any; // FIXME: https://github.com/beemojs/beemo/issues/113

export default config;
