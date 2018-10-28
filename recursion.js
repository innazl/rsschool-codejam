module.exports.rebTree = (obj, i = 0, arr = []) => {
  if (arr[i] === undefined) {
    arr[i] = [];
  }
  const indx = 1 + i;
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      rebTree(obj[key], indx, arr);
    } else {
      arr[i].push(obj[key]);
    }
  }
  return arr;
};
