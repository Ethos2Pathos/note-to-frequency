# note-to-frequency

🎶 Converts a note (scientific pitch notation) to a frequency

[![NPM](https://img.shields.io/npm/v/note-to-frequency.svg?style=flat-square)](https://www.npmjs.com/package/note-to-frequency)
[![David](https://img.shields.io/david/duivvv/note-to-frequency.svg?style=flat-square)](https://david-dm.org/duivvv/note-to-frequency)
[![Travis](https://img.shields.io/travis/duivvv/note-to-frequency/master.svg?style=flat-square)](https://travis-ci.org/duivvv/note-to-frequency)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

### Installation

Install via yarn or npm

	yarn add note-to-frequency -D

or

	npm i note-to-frequency -D


If you don't use a package manager, you can [access `note-to-frequency` via unpkg (CDN)](https://unpkg.com/note-to-frequency/), download the source, or point your package manager to the url.

`note-to-frequency` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `note-to-frequency` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/note-to-frequency/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/note-to-frequency) on your page. The UMD builds make `note-to-frequency` available as a `window.noteToFrequency` global variable.

### Usage

```js

import noteToFrequency from 'note-to-frequency';

const frequency = noteToFrequency('A4');
console.log(frequency); // > 440

```

### Configuration

You can pass an extra options object with these properties


- `base`: base frequency <br /> *(default: 440)*
- `maxOctave`: max octave allowed <br /> *(default: 8)*

```js

import noteToFrequency from 'note-to-frequency';

const frequency = noteToFrequency('C2', {base: 446});
console.log(note); // > 66.3

```

### Examples

see [`example`](example/script.js) folder or the [runkit](https://runkit.com/duivvv/note-to-frequency) example

### License

MIT
