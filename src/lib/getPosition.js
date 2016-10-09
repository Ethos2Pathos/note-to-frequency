import notes from '../data/notes';

export default (letter, octave, signature = ``) => {
  return (octave * notes.length) + notes.indexOf(`${letter}${signature}`) + 1;
};
