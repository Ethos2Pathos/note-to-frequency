const notes = [
  `C`, `C#`,
  `D`, `D#`,
  `E`,
  `F`, `F#`,
  `G`, `G#`,
  `A`, `A#`,
  `B`
];

const maxOctave = 8;

export default note => {

  const letter = note.charAt(0);
  const octave = note.charAt(note.length-1);
  const signature = note.length === 3 ? note.charAt(1) : ``;

  check(letter, octave, signature);

  const pos = getPosition(letter, octave, signature);
  const basePos = getPosition(`A`, 4);
  const diff = pos - basePos;

  const a = 2 ** (1/12);
  return Math.round((440 * (a ** diff)) * 100)/100;

};

const getPosition = (letter, octave, signature = ``) => {
  if(signature === `b`){
    signature = `#`;
    letter = notes[notes.indexOf(letter)-1].charAt(0);
  }
  return (octave*12) + notes.indexOf(`${letter}${signature}`) + 1;
};

const check = (letter, octave, signature) => {

  if(!notes.find(n => n === letter)){
    throw new Error(`note ${letter} does not exist`);
  }

  if(signature && signature !== `#` && signature !== `b`){
    throw new Error(`${signature} is not a valid signature (#, b)`);
  }

  if(octave > maxOctave){
    throw new Error(`octave ${octave} is too high (0 - ${maxOctave})`);
  }

  const blacklist = [
    {letter: `B`, signature: `#`},
    {letter: `C`, signature: `b`},
    {letter: `E`, signature: `#`},
    {letter: `F`, signature: `b`}
  ];

  if(blacklist.find(n => (n.letter === letter && n.signature === signature))){
    throw new Error(`${letter}${signature}${octave} does not exist`);
  }

};
