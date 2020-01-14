//without function: At first find out the same element between two array and push to new array
//Remove the elements Array
//https://stackoverflow.com/questions/14930516/compare-two-javascript-arrays-and-remove-duplicates

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

const without = function(source, itemsToRemove) {
  const commonElementArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        commonElementArr.push(source[i]);
        break;
      }
    }
  }
  source = source.filter(function(value) {
    return commonElementArr.indexOf(value) === -1;
  });
  console.log(source);
};

module.exports = without;

// TEST
// without([1, 2, 3], [1, 2]);
// without(["1", "2", "3"], [1, 2, "2", "3"]);
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
