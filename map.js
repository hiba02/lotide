/*
Function Definition
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/
// FUNCTION IMPLEMENTATION
const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    return "The length of two arrays is not equal.";
  } else {
    for (let i = 0; i < actualArr.length; i++) {
      if (actualArr[i] !== expectedArr[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr,expectedArr)) {
    console.log("The arrays are same.");
  } else {
    console.log("The arrays are different.");
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom"];
const words3 = ["gab", "complex", "tomato", "madmax", "today"];
const words4 = ["alex", "ninja", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
assertArraysEqual(map(words, word => word[0]), map(words2, word => word[0]));
assertArraysEqual(map(words2, word => word[0]), map(words3, word => word[0]));
assertArraysEqual(map(words3, word => word[0]), map(words4, word => word[0]));