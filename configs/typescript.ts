import {ConfigFile} from '@beemo/core';
import {TypeScriptConfig} from '@beemo/driver-typescript';
import {Settings} from '..';

const {tool} = process.beemo;
const {react = false} = (tool.config as ConfigFile<Settings>).settings;

const config: TypeScriptConfig = {
  compilerOptions: {
    target: 'es6',
    module: 'es2015',
    moduleResolution: 'node',
    noEmit: true,

    esModuleInterop: true,
    strict: true,
    allowSyntheticDefaultImports: true,
    importHelpers: true,
    ...(react ? {jsx: 'react'} : {}),
    resolveJsonModule: true,
  },
  include: ['src/**/*.ts', 'test/**/*.ts'],
};

export default config;
