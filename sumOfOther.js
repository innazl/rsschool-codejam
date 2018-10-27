function sumOfOther(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return arr.map((val, i) => sum - val);
}
