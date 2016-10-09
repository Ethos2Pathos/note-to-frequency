const noteToFrequency = require(`../dist/`);

describe(`calculate correct frequencies`, () => {

  it(`returns 440 as frequency of A4`, () => {

    expect(noteToFrequency(`A4`))
      .toEqual(440);

  });

  it(`returns 65.41 as frequency of C2`, () => {

    expect(noteToFrequency(`C2`))
      .toEqual(65.41);

  });

  it(`returns 3729.31 as frequency of Bb7`, () => {

    expect(noteToFrequency(`Bb7`))
      .toEqual(3729.31);

  });

  it(`returns 3729.31 as frequency of A#7`, () => {

    expect(noteToFrequency(`A#7`))
      .toEqual(3729.31);

  });

  it(`returns 66.3 as frequency of C2 with base 446`, () => {

    expect(noteToFrequency(`C2`, {base: 446}))
      .toEqual(66.3);

  });


});
