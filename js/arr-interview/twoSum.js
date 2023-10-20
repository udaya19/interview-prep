const twoSum = function (nums, target) {
  const obj = {};
  for (const index in nums) {
    const pairTarget = target - nums[index];
    if (obj[pairTarget]) return [index, obj[pairTarget]];
    obj[pairTarget] = index;
    console.log(obj[pairTarget]);
  }
};

console.log(twoSum([2, 8, 7], 9));
