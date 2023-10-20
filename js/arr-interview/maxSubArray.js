const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArrSum(arr) {
  let mx = arr[0];
  let sum = 0;
  arr.forEach((n) => {
    sum += n;
    mx = Math.max(mx, sum);
    if (sum < 0) sum = 0;
  });
  return mx;
}

console.log(maxSubArrSum(arr));
