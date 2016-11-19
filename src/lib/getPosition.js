// @flow

import notes from '../data/notes';

export default (letter: string, octave: number, signature: string = ``) => {
  return (octave * notes.length) + notes.indexOf(`${letter}${signature}`) + 1;
};
