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
const flattern = function(arr){
  let res = [];
  for(let i = 0; i < arr.length; i ++){
    if(Array.isArray(arr[i])){
      for(let j = 0; j < arr[i].length; j++){
       res.push(arr[i][j]);
      }
    }else res.push(arr[i]);
  }
  return res;
};
const val = [1, 2, 3];
flattern(val);
assertArraysEqual(val, [1, 2, 3]);
console.log(flattern([1, 2, 3], [1, 2, 3])); // => true
console.log(flattern([1, 2, [3, 4], 5, [6]]));
console.log(flattern([1, [1, 2], 3, [1, 3], [1, 2], 3]));
console.log(flattern([1, [5, 6, 8], [3, 2]]));
