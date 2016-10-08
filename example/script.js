const noteToFrequency = require(`../dist/index.js`);

let song = [`G`, `A`, `B`, `G`, `G`, `A`, `B`, `G`];
song = song.map(n => `${n}4`);
song = song.map(noteToFrequency);
console.log(song);
