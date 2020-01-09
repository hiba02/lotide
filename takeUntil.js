/*
It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  // ...
}
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


Expected Output
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

/*
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
*/

const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);