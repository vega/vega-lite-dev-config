# vega-lite-dev-config

[![Build Status](https://github.com/vega/vega-lite-dev-config/workflows/Test/badge.svg)](https://github.com/vega/vega-lite-dev-config/actions)
[![npm version](https://img.shields.io/npm/v/vega-lite-dev-config.svg)](https://www.npmjs.com/package/vega-lite-dev-config)


Version-controlled build config for easy re-use and sharing using Beemo.

## Install

```
yarn add --dev vega-lite-dev-config
```

Before leveraging the build config provided you should remove any older dependencies or config files for the drivers you intend to use (e.g., remove `eslint` and `.eslintrc`). `vega-lite-dev-config` will handle these dependencies, and it will _auto-generate the config files for you_.

## Using drivers

This project is built with [🤖beemo](https://github.com/milesj/beemo), and therefore requires a `"beemo"` configuration block in your `package.json` with a list of drivers you want to enable. You can optionally configure drivers as shown below:

```
{
  "beemo": {
    "module": "vega-lite-dev-config",
    "drivers": [
      "babel",
      "prettier",
      "eslint",
      "jest",
      {
        "driver": "typescript",
        "buildFolder": "build"
      }
    ],
    "jest": { // you can augment generated config
      "transformIgnorePatterns": [
        "<rootDir>/node_modules/(?!(vega-lite/))"
      ]
    }
  }
}
```

## Executing drivers

Executing a driver will initialize 🤖 Beemo's pipeline, generate configuration files (e.g., it will generate a `.eslintrc` or `prettier.config.js`, and execute the underlying driver binary and logging to the console.

> All arguments passed to Beemo are passed to the driver's underlying binary.

You may define these commands as scripts in your package.json:

```
// package.json
{
  "scripts": {
    "prepare": "beemo create-config --react", // Remove --react if you do not use React
    "prettierbase": "beemo prettier '{src,test,types}/**/*.{md,css}' # eslint takes care of tsx?/jsx?",
    "eslintbase": "beemo eslint '{src,test,types}/**/*.{ts,tsx,js,jsx}'",
    "format": "yarn eslintbase --fix && yarn prettierbase --write",
    "lint": "yarn eslintbase && yarn prettierbase --check",
    "tsc": "beemo typescript",
    "tsc:watch": "yarn run tsc --watch"
  }
}
```

or for a monorepo, you may want to include `./packages/*/` in the path:

```
"prettierbase": "beemo prettier './packages/*/{src,test,types}/**/*.{md,css}' # eslint takes care of tsx?/jsx?",
"eslintbase": "beemo eslint './packages/*/{src,test,types}/**/*.{ts,tsx,js,jsx}'",
```

### Acknowledgement

This README is adapted from [`@superset-ui/build-config`](https://github.com/apache-superset/build-config).
