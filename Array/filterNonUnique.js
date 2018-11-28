// 过滤掉数组中的非唯一值
// const filterNonUnique = arr =>{
//     return arr.filter(e=>{
//         return arr.indexOf(e) === arr.lastIndexOf(e)
//     })
// }

const filterNonUnique = arr =>
  arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e));

console.log(filterNonUnique([1, 1, 2, 2, 3, 3, 4, 5, 6]));
