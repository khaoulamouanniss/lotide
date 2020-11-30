const assert = require('chai').assert;
const without = require('../without');
const words = ["hello", "world", "lighthouse"];
describe("#without", () => {
  it(`returns ["hello", "world", "lighthouse"] for ${words} without ["lighthouse"]`, () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it(`returns [2, 3] for [1, 2, 3] without [1]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`returns ["1", "2"] for ["1", "2", "3"] without [1, 2, "3"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it(`returns [2, 3, 6, 2, 3] for [1, 2, 3, 4, 6, 1, 2, 4, 3] without [1, 4]`, () => {
    assert.deepEqual(without([1, 2, 3, 4, 6, 1, 2, 4, 3], [1, 4]), [2, 3, 6, 2, 3]);
  });
});
