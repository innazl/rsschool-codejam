const assert = require('assert');

Object.freeze(assert);

const { sumOfOther } = require('./sumOfOther');
const { make } = require('./make');
const { rebTree } = require('./recursion');


describe('SumOfOther', () => {
  it('1', () => {
    const array = sumOfOther([1, 5, 6, 8, 10, 12]);
    assert.deepEqual(array, [41, 37, 36, 34, 32, 30]);
  });

  it('2', () => {
    const array = sumOfOther([1, 5, 6, 8, 10, 122]);
    assert.deepEqual(array, [151, 147, 146, 144, 142, 30]);
  });

  it('3', () => {
    const array = sumOfOther([1, 2, 3, 4]);
    assert.deepEqual(array, [9, 8, 7, 6]);
  });
});

describe('make', () => {
  it('1', () => {
    const sum = (a, b) => a + b;
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });
});


describe('recursion', () => {
  it('1', () => {
    const tree = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };

    const array = rebTree(tree);
    assert.deepEqual(array, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
