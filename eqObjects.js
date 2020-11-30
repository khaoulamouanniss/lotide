const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let k of keys1) {
      if (Array.isArray(object1[k])) {
        if (!eqArrays(object1[k], object2[k])) {
          return false;
        }
      } else if (object1[k] !== object2[k]) {
        return false;
      }
    }
  }
  return true;
};

module.export = eqObjects;
