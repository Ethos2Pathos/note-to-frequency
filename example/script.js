const noteToFrequency = require(`../`);

const song = [
  `G`, `A`, `B`,
  `G`, `G`, `A`,
  `B`, `G`
].map(n => noteToFrequency(`${n}4`));

console.log(song);
