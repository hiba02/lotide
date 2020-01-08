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

const middle = function(array) {
  let midArray = [];
  let lastIndex = array.length - 1;
  let index = Math.floor(lastIndex / 2);
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 !== 0) {
    midArray.push(array[index]);
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array[index]);
    midArray.push(array[index + 1]);
    return midArray;
  }
};

//TEST CODE
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 4]));


