const assertArraysEqual = require ('../index').assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);