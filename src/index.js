// @flow

import validateNote from 'validate-note';

import getPosition from './lib/getPosition';

type options = {
  base: number,
  maxOctave: number
};

export default (note: string, {base = 440, maxOctave = 8}: options = {}) => {

  const {letter, octave, signature} = validateNote(note, {flatToSharp: true, maxOctave});

  const pos: number = getPosition(letter, octave, signature);
  const basePos: number = getPosition(`A`, 4);
  const diff: number = pos - basePos;

  const a: number = 2 ** (1 / 12);
  return Math.round((base * (a ** diff)) * 100) / 100;

};
