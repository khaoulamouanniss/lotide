const without = function(arr, items) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!items.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

module.exports = without;
