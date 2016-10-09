import getPosition from './lib/getPosition';
import validateNote from './lib/validateNote';

export default (note, {base, maxOctave} = {base: 440, maxOctave: 8}) => {

  if(note.length > 3 || note.length < 2){
    throw new Error(`${note} is not a valid note`);
  }

  const letter = note.charAt(0);
  const octave = note.charAt(note.length-1);
  const signature = note.length === 3 ? note.charAt(1) : ``;

  validateNote(letter, octave, signature, maxOctave);

  const pos = getPosition(letter, octave, signature);
  const basePos = getPosition(`A`, 4);
  const diff = pos - basePos;

  const a = 2 ** (1/12);
  return Math.round((base * (a ** diff)) * 100)/100;

};
