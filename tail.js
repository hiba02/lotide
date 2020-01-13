//const assertEqual = require('./assertEqual');

const tail = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
 


module.exports = tail;