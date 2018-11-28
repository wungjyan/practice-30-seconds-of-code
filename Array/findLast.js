// 返回 提供的函数返回真(truthy)值的最后一个元素

const findLast = (arr, fn) => arr.filter(fn).slice(-1);

console.log(findLast([1, 2, 3, 4], n => n % 2 === 1));
