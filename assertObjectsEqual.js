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
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if(keys1.length != keys2.length){
    return false;
  }else {
    for(let k of keys1){
      if(Array.isArray(object1[k])) {
        if(!eqArrays(object1[k], object2[k])){
          return false;
        }
      }
      else if(object1[k] !== object2[k]){
        return false;
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  }else console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // true
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // false
