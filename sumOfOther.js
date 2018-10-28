module.exports.sumOfOther = function sumOfOther(arr) {
  let sum = arr.reduce((acc, val) => acc + val);
  return arr.map((val) => sum - val);
}
