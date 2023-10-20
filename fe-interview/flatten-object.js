const obj = {
  A: "123",
  B: 456,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function flattenObject(obj, parent) {
  const finalObj = {};
  const generateFlattenObj = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        generateFlattenObj(value, newParent + ".");
      } else {
        finalObj[newParent] = value;
      }
    }
  };
  generateFlattenObj(obj, parent);
  return finalObj;
}

console.log(flattenObject(obj, ""));
