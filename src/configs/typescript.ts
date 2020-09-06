import {TypeScriptConfig} from '@beemo/driver-typescript';

const {context} = process.beemo;

const config: TypeScriptConfig = {
  compilerOptions: {
    target: 'es6',
    module: 'es2015',
    moduleResolution: 'node',
    noEmit: true,

    declaration: true,
    declarationMap: true,
    sourceMap: true,

    esModuleInterop: true,
    strict: true,
    allowSyntheticDefaultImports: true,
    importHelpers: true,
    ...(context.args.react ? {jsx: 'react'} : {}),
    resolveJsonModule: true,

    typeRoots: ['node_modules/@types', 'types'],
  },
  include: ['src/*.ts', 'test/*.ts'],
};

export default config;
