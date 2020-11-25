const eqArrays = function(arr1, arr2){
  if(arr1.length != arr2.length){
    return false;
  }else{
    for (let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2)){
    console.log(`Assertion Passed: [${arr1}] === [${arr2}].`);
  }else console.log(`Assertion Failed: [${arr1}] !== [${arr2}].`);
};
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    let c =sentence[i];
    if(c != " "){
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

let str = "hello";
let res = letterPositions(str);
assertArraysEqual(res["h"], [0]);
assertArraysEqual(res["e"], [1]);
assertArraysEqual(res["l"], [2,3]);
assertArraysEqual(res["o"], [4]);
