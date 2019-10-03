const {context} = process.beemo;

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', ...(context.args.react ? ['react'] : [])],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    ...(context.args.react ? ['plugin:react/recommended'] : [])
  ],
  ...(context.args.react ? {settings: {react: {version: 'detect'}}} : {}),
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ...(context.args.react ? {jsx: true} : {})
  },
  rules: {
    'prettier/prettier': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-for-in-array': 'error', // requires type information
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-object-literal-type-assertion': 'off', // we can do this later
    '@typescript-eslint/no-namespace': 'off', // we can do this later
    // https://eslint.org/docs/rules/
    'linebreak-style': ['error', 'unix'],
    'no-irregular-whitespace': ['error', {skipComments: true}],
    'no-alert': 'error',
    'prefer-const': 'error',
    'no-return-assign': 'error',
    'no-useless-call': 'error',
    'no-shadow': 'error',
    'no-useless-concat': 'error',
    // "prefer-template": "error",  // we can do this later
    'no-console': 'off', // we use console
    'no-undef': 'off', // typescript takes care of this for us
    'no-unreachable': 'off' // typescript takes care of this for us
  },
  ignore: ['.eslintrc.js', 'prettier.config.js', 'rollup.config.js']
};
