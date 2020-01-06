const assertEqual = function(actual, expected) {
  if (typeof actual === 'number' && typeof expected === 'number') {
    if (actual === expected) {
      console.log(`emojis Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`emojis Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual === expected) {
      console.log(`emojis Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`emojis Assertion Failed: "${actual}" !== "${expected}"`);
    }
  }
};

const tail = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log(tail([1]));
console.log(tail([]));