const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#CountLetters", () => {
  it("returns {'l': 3, 'o': 1, 'a': 2} for alolla", () => {
    assert.deepEqual(countLetters("alolla"), {'l': 3, 'o': 1, 'a': 2});
  });
});

