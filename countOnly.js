// FUNCTION IMPLEMENTATION
/*
result = {
  Karl: 1,
  Salima: 2,
  Agouhanna: 1,
  Fang: 2,
  Kavith: 1,
  Jason: 1,
  Joe: 1 };
itemsToCount = { "Jason": true, "Karima": true, "Fang": true};
*/

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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  const results2 = {};
  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  for (const item in itemsToCount) {
    if (results[item] && itemsToCount[item] === true) {
      results2[item] = results[item];
    } else {
      results[item] = null;
    }
  }
  return results2;
};

// TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
