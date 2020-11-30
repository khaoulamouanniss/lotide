const assert = require('chai').assert;
const countOnly = require('../countOnly');
const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
const result = {
  Jason: 1,
  Karima: undefined,
  Fang: 2,
  Agouhanna: undefined
};
describe("#CountOnly", () => {
  it(`returns ${result} for ${firstNames}`, () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  });
});


