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

// const assertArraysEqual = function(actualArr, expectedArr) {
//   if (eqArrays(actualArr,expectedArr)) {
//     console.log("The arrays are same.");
//   } else {
//     console.log("The arrays are different.");
//   }
// };

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const arr = [];   
    if (!results[sentence[i]]) {
      arr.push(i);
      results[sentence[i]] = arr;
    } else {
      results[sentence[i]].push(i);
    } 
  }
  return results;
};

module.exports = letterPositions;
// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);