// 把一个数组分块成指定大小的小数组。

const chunk = (arr, size) => {
  // 新分组数组的长度
  const len = Math.ceil(arr.length / size);

  // 使用Array.form生成新数组(可参考阮一峰es6)
  return Array.from({ length: len }, (v, i) => {
    return arr.slice(i * size, i * size + size);
  });
};

console.log(chunk([1, 2, 3, 4, 5], 2));
