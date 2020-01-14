//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

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

const flatten = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'object') {
      for (element of arr[i]) {
        newArr.push(element);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};

module.exports = flatten;
// flatten([1, 2, [3, 4], 5, [6]]);