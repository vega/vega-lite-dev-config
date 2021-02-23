import {TypeScriptConfig} from '@beemo/driver-typescript';

const {context} = process.beemo as any; // FIXME: https://github.com/beemojs/beemo/issues/112

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
    ...(context.args.react ? {jsx: 'react'} : {}),
    resolveJsonModule: true,
  },
  include: ['src/**/*.ts', 'test/**/*.ts'],
};

export default config;
