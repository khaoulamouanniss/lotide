const assert = require('chai').assert;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result = {Fang: 2, Jason: 1};
describe("#CountOnly", () => {
  it(`returns ${result} for ${firstNames}`, () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), result);
  });
});


