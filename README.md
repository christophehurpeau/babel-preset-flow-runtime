# babel-preset-flow-runtime [![NPM version][npm-image]][npm-url]

Babel preset for flow-runtime

[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Install

```bash
npm install --save-dev babel-preset-flow-runtime
yarn add --dev babel-preset-flow-runtime
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["flow-runtime"]
}
```

### Via CLI

```sh
babel script.js --presets flow-runtime
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: [require('babel-preset-flow-runtime')]
});
```

[npm-image]: https://img.shields.io/npm/v/babel-preset-flow-runtime.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-preset-flow-runtime
[daviddm-image]: https://david-dm.org/christophehurpeau/babel-preset-flow-runtime.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/babel-preset-flow-runtime
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/babel-preset-flow-runtime/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/babel-preset-flow-runtime
