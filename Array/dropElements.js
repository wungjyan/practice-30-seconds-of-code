// 删除数组中的元素，直到传递的函数返回 true 。 返回数组中的其余元素。

// const dropElements = (arr, func) => {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr = arr.slice(1);
//   }
//   return arr;
// };

const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
console.log(dropElements([5, 6, 1, 2, 3, 4], n => n >= 3));


// 注意
// 此例强调 只要函数传回true并且数组是有长度的，就不会再删除后面的不符合函数要求的数值
// 类似于查找，只要找到即不变了
