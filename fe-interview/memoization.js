const memoize = (fn) => {
  const cahce = {};
  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cahce) {
      console.log(`Fetching from cache for key ${argsToString}`);
      return cahce[argsToString];
    } else {
      console.log(`Computing values for args ${argsToString}`);
      const result = fn.apply(this, args);
      cahce[argsToString] = result;
      return result;
    }
  };
};

const addThreeNumbers = (a, b) => a + b;
const add = memoize(addThreeNumbers);
console.log(add(1, 2));
console.log(add(1, 2));

const factorial = memoize((x) => {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));
