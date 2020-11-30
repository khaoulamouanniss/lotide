const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (let k of keys) {
    if (obj[k] === value) {
      return k;
    }
  }
};

module.exports = findKeyByValue;
