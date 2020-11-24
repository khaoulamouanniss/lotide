const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(55357)}Assertion Passed: [${actual}] === [${expected}].`);
  }
  else console.log(`${String.fromCodePoint(0x1F621)}Assertion Failed: [${actual}] !== [${expected}].`);
};
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
