const str = "hello world";
let outStr = "";
const obj = {};

for (let char of str) {
  if (!obj[char]) {
    outStr += char;
    obj[char] = true;
  }
}

console.log(outStr);
