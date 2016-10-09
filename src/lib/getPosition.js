import notes from '../data/notes';

export default (letter, octave, signature = ``) => {

  // ex. Bb => A#
  if(signature === `b`){
    signature = `#`;
    letter = notes[notes.indexOf(letter)-1].charAt(0);
  }

  // calculate the half note position (starting from C0)
  return (octave * notes.length) + notes.indexOf(`${letter}${signature}`) + 1;

};
