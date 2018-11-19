// 过滤所有假值

const compact = arr => {
  return arr.filter(item => {
    // 返回真值
    return Boolean(item);
  });
};
console.log(compact([0, 1, 2, 3, 5, 6, 7, 5, false, "", undefined]));

// 简写
// const compact = arr => arr.filter(Boolean)
