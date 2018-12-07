// 从数组的最后一个元素开始遍历数组

const forEachRight = (arr, cb) =>
  arr
    .slice(0)
    .reverse()
    .forEach(cb);

forEachRight([1, 2, 3, 4], val => console.log(val));
