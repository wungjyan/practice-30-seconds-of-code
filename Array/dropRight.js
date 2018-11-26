// 返回从右开始删除 n 个元素的新数组

const dropRight = (arr, n = 1) => arr.slice(0, -n);

console.log(dropRight([1, 2, 3, 4, 5], 2));
