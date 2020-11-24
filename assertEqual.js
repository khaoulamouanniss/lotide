const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(String.fromCodePoint(55357) + "Assertion Passed: [" + actual + "] === [" + expected + "].");
  }
  else console.log(String.fromCodePoint(0x1F621) + "Assertion Failed: [" + actual + "] !== ["+ expected + "].");
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
