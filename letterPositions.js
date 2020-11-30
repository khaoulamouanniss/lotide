const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let c = sentence[i];
    if (c !== " ") {
      if (results[c]) {
        results[c].push(i);
      } else {
        results[c] = [];
        results[c].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
