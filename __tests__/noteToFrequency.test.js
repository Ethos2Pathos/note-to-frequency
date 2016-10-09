const noteToFrequency = require(`../dist/`);

describe(`throws suitable erorrs`, () => {

  it(`throws an error on invalid note`, () => {

    expect(() => {
      noteToFrequency(`A`);
    }).toThrowError(`A is not a valid note`);

  });

  it(`throws an error on wrong note letter`, () => {

    expect(() => {
      noteToFrequency(`Q4`);
    }).toThrowError(`note Q does not exist`);

  });

  it(`throws an error on wrong signature`, () => {

    expect(() => {
      noteToFrequency(`At4`);
    }).toThrowError(`t is not a valid signature (#, b)`);

  });

  it(`throws an error on incorrect octave`, () => {

    expect(() => {
      noteToFrequency(`A9`);
    }).toThrowError(`octave 9 is too high (0 - 8)`);

  });

  it(`throws an error on incorrect note`, () => {

    expect(() => {
      noteToFrequency(`E#4`);
    }).toThrowError(`E#4 does not exist`);

  });

});

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
