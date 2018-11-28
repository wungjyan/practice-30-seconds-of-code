// 获得数组中的每个第 n 个元素
// const everyNth = (arr,nth)=>{
//     return arr.filter((e,i)=>{
//         return i%nth === nth-1
//     })
// }

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

console.log(everyNth([1, 2, 3, 4, 5, 6], 2));
