const assert = require('chai').assert;
const flattern = require('../flattern');

describe("#flattern", () => {
  it(`returns [1, 2, 3] for [1, 2, 3]`, () => {
    assert.deepEqual(flattern([1, 2, 3]), [1, 2, 3]);
  });
  it(`returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]`, () => {
    assert.deepEqual(flattern([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it(`returns [1, 1, 2, 3, 1, 3, 1, 2, 3] for [1, [1, 2], 3, [1, 3], [1, 2], 3]`, () => {
    assert.deepEqual(flattern([1, [1, 2], 3, [1, 3], [1, 2], 3]), [1, 1, 2, 3, 1, 3, 1, 2, 3]);
  });
  it(`returns [1, 5, 6, 8, 3, 2] for [1, [5, 6, 8], [3, 2]]`, () => {
    assert.deepEqual(flattern([1, [5, 6, 8], [3, 2]]), [1, 5, 6, 8, 3, 2]);
  });
});
