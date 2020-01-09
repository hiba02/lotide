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



// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);




