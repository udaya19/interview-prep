const s = "anagram";
const t = "nagaram";

const obj = {};

if (s.length !== t.length) {
  console.log("false");
  return;
}

for (let i of s) {
  console.log(i);
  if (obj[i] >= 1) {
    console.log("Inside if block:", obj[i]);
    obj[i] = obj[i] + 1;
  } else obj[i] = 1;
}
console.log(obj);

for (let j of t) {
  if (obj[j] >= 1) {
    obj[j] = obj[j] - 1;
    if (obj[j] === 0) delete obj[j];
  } else {
    obj[j] = -1;
  }
}

console.log(obj);

if (obj.size === 0) {
  console.log(true);
  return;
} else {
  console.log(false);
  return;
}
