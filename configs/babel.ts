import {BabelConfig} from '@beemo/driver-babel';

// Used only for jest
const config: BabelConfig = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-typescript'],
};

export default config;
