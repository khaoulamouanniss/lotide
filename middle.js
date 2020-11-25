const eqArrays = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2)){
    console.log(`Assertion Passed: [${arr1}] === [${arr2}].`);
  }else console.log(`Assertion Failed: [${arr1}] !== [${arr2}].`);
};
const isOdd = function (num){
  return (num % 2 != 0);
};
const hasMiddle = function (arr){
  return !(arr.length === 1 || arr.length === 2);
};
const middle = function(arr){
  let res = [];
  if (hasMiddle(arr)){
    let midIndex = Math.floor(arr.length/2) - 1;
    if (isOdd(arr.length)){
      res = arr[midIndex + 1];
    }else{
      res.push(arr[midIndex]);
      res.push(arr[midIndex + 1]);
    }
  }
  return res;
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
