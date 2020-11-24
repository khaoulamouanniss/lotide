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
const without = function(arr, items){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(!items.includes(arr[i])){
        res.push(arr[i]);
    }
  }
  return res;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3, 4, 6, 1, 2, 4, 3], [1, 4]));
