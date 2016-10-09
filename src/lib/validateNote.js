import notes from '../data/notes';
import blacklist from '../data/blacklist';

export default (letter, octave, signature, maxOctave) => {

  if(!notes.find(n => n === letter)){
    throw new Error(`note ${letter} does not exist`);
  }

  if(signature && signature !== `#` && signature !== `b`){
    throw new Error(`${signature} is not a valid signature (#, b)`);
  }

  if(octave > maxOctave){
    throw new Error(`octave ${octave} is too high (0 - ${maxOctave})`);
  }

  if(blacklist.find(n => (n.letter === letter && n.signature === signature))){
    throw new Error(`${letter}${signature}${octave} does not exist`);
  }

};
