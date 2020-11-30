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
    } else {
      res.push(arr[midIndex]);
      res.push(arr[midIndex + 1]);
    }
  }
  return res;
};

module.exports = middle;
