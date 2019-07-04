module.exports = {
  compilerOptions: {
    target: 'es6',
    module: 'es2015',
    moduleResolution: 'node',

    outDir: './build/',

    declaration: true,
    declarationMap: true,
    sourceMap: true,
    esModuleInterop: true,

    allowSyntheticDefaultImports: true,
    inlineSources: true,
    importHelpers: true,
    isolatedModules: false,
    jsx: 'react',
    noImplicitAny: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noUnusedLocals: true,
    preserveConstEnums: true,
    removeComments: false,
    resolveJsonModule: true,
    suppressImplicitAnyIndexErrors: true,

    incremental: true,

    typeRoots: ['node_modules/@types', 'types']
  }
};
