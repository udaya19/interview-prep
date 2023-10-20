const flattenArr = (arr) => {
  return arr.reduce((prevVal, currentVal) => {
    if (Array.isArray(currentVal)) {
      prevVal = prevVal.concat(flattenArr(currentVal));
    } else {
      prevVal.push(currentVal);
    }
    return prevVal;
  }, []);
};

console.log(
  flattenArr([
    [1, [1.1], 2],
    [3, [4, 5, [6, 7]]],
  ])
);
