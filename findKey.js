// const assertEqual = function(actual, expected) {
//   if (typeof actual === 'number' && typeof expected === 'number') {
//     if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   } else {
//     if (actual === expected) {
//       console.log(`✅✅✅  Assertion Passed: "${actual}" === "${expected}"`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
//     }
//   }
// };



const findKey = function(anObject, callback) {
  for (oneObj in anObject) {
    if (callback(anObject[oneObj])) {
      return oneObj;
    }
  }
  return;
};

module.exports = findKey;
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)

// const result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)

// console.log(result1);
// assertEqual(result1, "noma");
// assertEqual(result1, result2);