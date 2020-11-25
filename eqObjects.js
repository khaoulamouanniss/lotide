const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(55357)}Assertion Passed: [${actual}] === [${expected}].`);
  }
  else console.log(`${String.fromCodePoint(0x1F621)}Assertion Failed: [${actual}] !== [${expected}].`);
};
const eqArrays = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if(keys1.length != keys2.length){
    return false
  }else {
    for(let k of keys1){
      if(Array.isArray(object1[k]) && !eqArrays(object1[k], object2[k])){
        return false;
      }
      if(object1[k] !== object2[k]){
        return false;
      }
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
