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


module.exports = middle;
