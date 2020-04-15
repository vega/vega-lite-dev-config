import {BabelConfig} from '@beemo/driver-babel';

const config: BabelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
      },
    ],
  ],
  env: {
    test: {
      presets: ['@babel/preset-env'],
    },
  },
};

export default config;
