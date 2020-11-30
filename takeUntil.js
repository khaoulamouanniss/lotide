
const takeUntil = function(array, callback) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      res.push(array[i]);
    } else i = array.length;
  }
  return res;
};

module.exports = takeUntil;
