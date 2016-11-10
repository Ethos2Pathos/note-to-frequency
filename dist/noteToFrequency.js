(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.noteToFrequency = factory());
}(this, (function () { 'use strict';

var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

var blacklist = [{ letter: "B", signature: "#" }, { letter: "C", signature: "b" }, { letter: "E", signature: "#" }, { letter: "F", signature: "b" }];

var convertFlatToSharp = (function (letter, signature) {

  signature = '#';
  letter = notes[notes.indexOf(letter) - 1].charAt(0);

  return { signature: signature, letter: letter };
});

var validateNote = (function (note) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$maxOctave = _ref.maxOctave;
  var maxOctave = _ref$maxOctave === undefined ? 8 : _ref$maxOctave;
  var _ref$flatToSharp = _ref.flatToSharp;
  var flatToSharp = _ref$flatToSharp === undefined ? false : _ref$flatToSharp;

  if (typeof note !== 'string') {
    throw new Error(note + ' is not a String');
  }

  if (note.length > 3 || note.length < 2) {
    throw new Error(note + ' is not a valid note');
  }

  var letter = note.charAt(0);
  var octave = parseInt(note.charAt(note.length - 1));
  var signature = note.length === 3 ? note.charAt(1) : '';

  if (flatToSharp && signature === 'b') {
    var obj = convertFlatToSharp(letter, signature);
    letter = obj.letter;
    signature = obj.signature;
  }

  if (!notes.find(function (n) {
    return n === letter;
  })) {
    throw new Error(letter + ' is not a valid note');
  }

  if (signature && signature !== '#' && signature !== 'b') {
    throw new Error(signature + ' is not a valid signature (#, b)');
  }

  if (octave > maxOctave) {
    throw new Error(octave + ' is not a valid octave (0 - ' + maxOctave + ')');
  }

  if (blacklist.find(function (n) {
    return n.letter === letter && n.signature === signature;
  })) {
    throw new Error('' + letter + signature + octave + ' is not a valid note');
  }

  return { letter: letter, signature: signature, octave: octave };
});

var notes$1 = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

var getPosition = (function (letter, octave) {
  var signature = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return octave * notes$1.length + notes$1.indexOf('' + letter + signature) + 1;
});

var index = (function (note) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$base = _ref.base;
  var base = _ref$base === undefined ? 440 : _ref$base;
  var _ref$maxOctave = _ref.maxOctave;
  var maxOctave = _ref$maxOctave === undefined ? 8 : _ref$maxOctave;
  var _ref$flatToSharp = _ref.flatToSharp;
  var flatToSharp = _ref$flatToSharp === undefined ? true : _ref$flatToSharp;

  var _validateNote = validateNote(note, { flatToSharp: flatToSharp, maxOctave: maxOctave });

  var letter = _validateNote.letter;
  var octave = _validateNote.octave;
  var signature = _validateNote.signature;


  var pos = getPosition(letter, octave, signature);
  var basePos = getPosition('A', 4);
  var diff = pos - basePos;

  var a = Math.pow(2, 1 / 12);
  return Math.round(base * Math.pow(a, diff) * 100) / 100;
});

return index;

})));
