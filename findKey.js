const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(55357)}Assertion Passed: [${actual}] === [${expected}].`);
  }
  else console.log(`${String.fromCodePoint(0x1F621)}Assertion Failed: [${actual}] !== [${expected}].`);
};
const findKey = function(obj, callback){
  let keys = Object.keys(obj);
  for (let k of keys){
    if(callback(obj[k])){
      return k;
    }
  }
};
console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"));
