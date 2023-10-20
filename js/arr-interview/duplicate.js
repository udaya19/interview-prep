var containsDuplicate = (arr) => {
  const set = new Set(arr);
  return set.size !== arr.length;
};

console.log(containsDuplicate([1, 2, 3]));
