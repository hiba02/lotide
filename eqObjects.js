const assertEqual = require('./index').assertEqual;
const eqArrays = require('./index').eqArrays;


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let element in object1) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } 
  }
  for (let element in object2) {
    if (Array.isArray(object2[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } 
  }
  for (let element in object1) {
    if (!Array.isArray(object1[element])) {
      if (object1[element] !== object2[element]) {
        return false;
      } 
    }
  }
  for (let element in object2) {
    if (!Array.isArray(object2[element])) {
      if (object1[element] !== object2[element]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
//TEST
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// eqObjects(ab, ba); // => true
// console.log(eqObjects(ab, ba)); // => true
// eqObjects(ab, abc); // => false
// console.log(eqObjects(ab, abc)); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// console.log('==== Array as values =====');
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// //eqObjects(cd, dc); // => true
// console.log(eqObjects(cd, dc));

// //eqObjects(cd, cd2); // => false
// console.log(eqObjects(cd, cd2));
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
        