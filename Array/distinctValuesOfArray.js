// 数组去重

// const distinctValuesOfArray = (arr)=>{
//     return Array.from(new Set(arr))
// }

// 简写
const distinctValuesOfArray = arr => [...new Set(arr)];

console.log(distinctValuesOfArray([1, 2, 3, 3, 2, 1, 4, 5, 6, 5]));
