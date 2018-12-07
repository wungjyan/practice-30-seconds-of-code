// 将数组平铺到指定的深度,depth为递归深度

const flatten = (arr, depth = 1) => {
  if (depth === 1) {
    return arr.reduce((a, v) => {
      return a.concat(v);
    }, []);
  } else {
    return arr.reduce((a, v) => {
      return a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v);
    }, []);
  }
};

console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2));
