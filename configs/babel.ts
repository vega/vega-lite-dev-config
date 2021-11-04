import {ConfigFile} from '@beemo/core';
import {BabelConfig} from '@beemo/driver-babel';
import {Settings} from '..';

const {tool} = process.beemo;
const {babel = {jest: true}} = (tool.config as ConfigFile<Settings>).settings;

// Used only for jest
const config: BabelConfig = babel.jest
  ? {
      presets: [['@babel/env', {targets: {node: 'current'}}], '@babel/typescript'],
    }
  : {
      // TODO
    };

export default config;
