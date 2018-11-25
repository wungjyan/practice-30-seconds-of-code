// 数组比较，返回两个数组之间的差异
// b数组中所不包含的 a数组中的值

// const difference = (a,b)=>{
//     return a.filter(item=>{
//         return !b.includes(item)
//     })
// }

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(item => !s.has(item));
};

console.log(difference([1, 2, 3, 3, 4, 2, 7, 8, 0], [1, 2, 3, 3, 4, 2, 5, 6]));
