const split = (str, delimiter) => {
  const res = [];
  if (delimiter === "") return Array.from(str);
  const startSplit = (str, i) => {
    if (i >= str.length) return;
    const index = str.indexOf(delimiter);
    if (index >= 0) {
      res.push(str.substring(0, index));
      startSplit(
        str.substring(index + delimiter.length),
        index + delimiter.length
      );
    } else {
      res.push(str);
    }
  };
  startSplit(str, 0);
  return res;
};

console.log(
  split("kcjdc knewjld eqbfeq eq eq eq fdeq oenf ehb eqk ckeb cq", "eq")
);
