const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(55357)}Assertion Passed: [${actual}] === [${expected}].`);
  }
  else console.log(`${String.fromCodePoint(0x1F621)}Assertion Failed: [${actual}] !== [${expected}].`);
};

const head = function(arr){
  return arr[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), "Hello");
