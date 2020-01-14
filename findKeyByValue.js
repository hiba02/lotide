// const assertEqual = function(actual, expected) {
//   if (typeof actual === 'number' && typeof expected === 'number') {
//     if (actual === expected) {
//       console.log(`emojis Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`emojis Assertion Failed: ${actual} !== ${expected}`);
//     }
//   } else {
//     if (actual === expected) {
//       console.log(`emojis Assertion Passed: "${actual}" === "${expected}"`);
//     } else {
//       console.log(`emojis Assertion Failed: "${actual}" !== "${expected}"`);
//     }
//   }
// };

const findKeyByValue = function(isObj, isValue) {
  for (let title in isObj) {
    if (isObj[title] === isValue) {
      return title;
    }
  }
  return;
};

module.exports = findKeyByValue;
// TEST
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "balbla"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
