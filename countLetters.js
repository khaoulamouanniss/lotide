const countLetters = function(str) {
  let res = {};
  for (let c of str) {
    if (c !== " ") {
      if (res[c]) {
        res[c] += 1;
      } else {
        res[c] = 1;
      }
    }
  }
  return res;
};

module.exports = countLetters;
