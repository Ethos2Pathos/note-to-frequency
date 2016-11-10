import validateNote from 'validate-note';

import getPosition from './lib/getPosition';

export default (note, {base = 440, maxOctave = 8, flatToSharp = true} = {}) => {

  const {letter, octave, signature} = validateNote(note, {flatToSharp, maxOctave});

  const pos = getPosition(letter, octave, signature);
  const basePos = getPosition(`A`, 4);
  const diff = pos - basePos;

  const a = 2 ** (1 / 12);
  return Math.round((base * (a ** diff)) * 100) / 100;

};
