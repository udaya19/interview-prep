Array.prototype.map = function (callbackfn) {
  const output = [];
  this.forEach((element, index) => {
    output.push(callbackfn(element, index, this));
  });
  return output;
};

console.log([1, 2, 3].map((e) => e * 10));
