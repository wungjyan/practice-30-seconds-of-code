// 获取数组某个数值出现的个数

const countOccurrences = (arr, val) => {
  return arr.reduce((a, v) => {
    //console.log('初始:',a,'；当前:',v,'；和:',a+v)
    //return a+v
    return v === val ? a + 1 : a;
  }, 0);
};

console.log(countOccurrences([1, 1, 4, 2, 5, 7, 2, 3, 3], 2));
