//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../index').middle;
const assert = require('chai').assert;

describe('Middle function', () => {
  it('returns an empty array when given an array with less than three elements', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns the middle value of an odd numbered array', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns the middle two values of an even numbered array', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});