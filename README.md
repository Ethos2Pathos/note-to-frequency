# note-to-frequency

🎼 Converts a note (scientific pitch notation) to a frequency

[![NPM](https://img.shields.io/npm/v/note-to-frequency.svg?style=flat-square)](https://www.npmjs.com/package/note-to-frequency)
[![David](https://img.shields.io/david/duivvv/note-to-frequency.svg?style=flat-square)](https://david-dm.org/duivvv/note-to-frequency)
[![Travis](https://img.shields.io/travis/duivvv/note-to-frequency/master.svg?style=flat-square)](https://travis-ci.org/duivvv/note-to-frequency)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

### Usage

```js

import noteToFrequency from 'note-to-frequency';

const frequency = noteToFrequency('A4');
console.log(frequency); // > 440

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add note-to-frequency (--dev)

or npm

	npm install note-to-frequency (--save-dev)

### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default)

```js

import noteToFrequency from 'note-to-frequency';

const frequency = noteToFrequency('C2', {base: 446, maxOctave: 4});
console.log(note); // > 66.3

```

➖ **base** ( Number ) ` ✏️ 440 `
<br/> 📝 base frequency

➖ **maxOctave** ( Number ) ` ✏️ 8 `
<br/> 📝 max octave allowed


### Examples

see [`example`](example/script.js) folder or the [runkit](https://runkit.com/duivvv/note-to-frequency) example

### Different builds

If you don't use a package manager, you can [access `note-to-frequency` via unpkg (CDN)](https://unpkg.com/note-to-frequency/), download the source, or point your package manager to the url.

`note-to-frequency` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `note-to-frequency` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/note-to-frequency/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/note-to-frequency) on your page. The UMD builds make `note-to-frequency` available as a `window.noteToFrequency` global variable.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

### License

[MIT](LICENSE)
