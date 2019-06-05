# vega-lite-dev-config

Version-controlled build config for easy re-use and sharing using Beemo.

## Install

```
npm install --save-dev @superset-ui/build-config
```

Before leveraging the build config provided you should remove any older dependencies or config files for the drivers you intend to use (e.g., remove `eslint` and `.eslintrc`). `@superset-ui/build-config` will handle these dependencies, and it will _auto-generate the config files for you_.

## Using drivers

This project is built with [🤖beemo](https://github.com/milesj/beemo), and therefore requires a `"beemo"` configuration block in your `package.json` with a list of drivers you want to enable. You can optionally configure drivers as shown below:

```
{
  "beemo": {
    "module": "",
    "drivers": [
      "eslint",
      "prettier",
      "typescript",
      "jest"
    ]
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
    "prepare": "beemo create-config --silent",
    "prettierbase": "beemo prettier '{src,test,typings}/**/*.{ts,js,md,css}'",
    "eslintbase": "beemo eslint '{src,test,typings}/**/*.{ts,js}'",
    "format": "npm run eslintbase -- --fix && npm run prettierbase -- --write",
    "lint": "npm run eslintbase && npm run prettierbase -- --check",
    "tsc": "beemo typescript"
  }
}
```

### Acknowledgement

This README is adapted from [`@superset-ui/build-config`](https://github.com/apache-superset/build-config)).
