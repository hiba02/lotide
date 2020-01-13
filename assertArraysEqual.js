// FUNCTION IMPLEMENTATION
// const eqArrays = function(actualArr, expectedArr) {
//   if (actualArr.length !== expectedArr.length) {
//     return "The length of two arrays is not equal.";
//   } else {
//     for (let i = 0; i < actualArr.length; i++) {
//       if (actualArr[i] !== expectedArr[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr,expectedArr)) {
    console.log(`🔴🔴🔴: Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`💔💔💔: Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);




