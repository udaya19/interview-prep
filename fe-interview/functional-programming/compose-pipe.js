const { compose, pipe } = require("lodash/fp");

const input = "  FunctionalProgramming  ";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const result = wrapInDiv(trim(input));
console.log(result);

//using compose
const transform = compose(wrapInDiv, trim);
console.log(transform(input));

//using pipe

const transform1 = pipe(trim, wrapInDiv);
console.log(transform1(input));

// cusing currying

const transform2 = pipe(trim, wrap("span"));
console.log(transform2(input));
