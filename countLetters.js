const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(55357)}Assertion Passed: [${actual}] === [${expected}].`);
  }
  else console.log(`${String.fromCodePoint(0x1F621)}Assertion Failed: [${actual}] !== [${expected}].`);
};
const countLetters = function(str){
  let res = {};
  for(let c of str){
    if(c != " "){
      if (res[c]) {
        res[c] += 1;
      } else {
        res[c] = 1;
      }
    }
  }
  return res;
};
let res = countLetters("alolla");
assertEqual(res["l"], 3);
assertEqual(res["o"], 1);
assertEqual(res["a"], 2);
