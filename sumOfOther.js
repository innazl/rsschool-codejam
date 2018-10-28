module.exports.sumOfOther = function sumOfOther(arr) {
  const sum = arr.reduce((acc, val) => acc + val);
  return arr.map(val => sum - val);
};
