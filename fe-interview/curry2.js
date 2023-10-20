// write a curry function that returns sum of previous values

const curryFun = () => {
  let prevSum = 0;
  return (newVal) => {
    prevSum += newVal;
    return prevSum;
  };
};

const sum = curryFun();
console.log(sum(1));
console.log(sum(3));
console.log(sum(7));
