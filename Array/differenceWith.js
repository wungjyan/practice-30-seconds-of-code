// 通过比较函数比较两个数组的差异
// 过滤出 数组中 比较函数不返回 true 的所有值

// const differenceWith = (arr, val, comp) => {
//   return arr.filter(item1 => {
//     return val.findIndex(item2=>comp(item1,item2)) === -1;
//   });
// };

// 简写
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

console.log(
  differenceWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
