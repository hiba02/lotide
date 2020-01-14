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
/*
  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
*/
const countLetters = function(str) {
  const results = {};
  for (let letter of str) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

//TEST
// console.log(countLetters("lighthouse in the house")); 
// assertEqual(countLetters("lighthouse in the house"), countLetters("lighthouse in the house")); 