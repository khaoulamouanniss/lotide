const findKey = function(obj, callback) {
  let keys = Object.keys(obj);
  for (let k of keys) {
    if (callback(obj[k])) {
      return k;
    }
  }
};

module.exports = findKey;
