const maxSlidingWindow = function (nums, k) {
  const result = [];
  const n = nums.length;
  for (let i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }
};
