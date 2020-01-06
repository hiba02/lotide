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

const head = function(arr) {
  return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");