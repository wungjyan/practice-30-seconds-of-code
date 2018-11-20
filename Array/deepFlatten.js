// 深度平铺一个数组

const deepFlatten = arr => {
  return [].concat(
    ...arr.map(item => {
      return Array.isArray(item) ? deepFlatten(item) : item;
    })
  );
};

console.log(deepFlatten([1, 2, [5, 9, 0], [1, 5]]));
