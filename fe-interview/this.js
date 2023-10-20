// const person = {
//   name: "Vedant",
//   getName: function () {
//     return `Name is ${this.name}`;
//   },
// };

// console.log(person.getName());

// function test() {
//   console.log(this);
// }

// test();

// const person = {
//   name: "Vedant",
//   getName: () => {
//     return `Name is ${this.name}`;
//   },
// };

// console.log(person.getName());

// function User() {
//   this.name = "John Doe";
//   this.age = 20;
//   this.sayUser = function () {
//     console.log(this.name);
//     const innerFunctions = function () {
//       console.log(this.name);
//     };
//     innerFunctions();
//   };
// }

// let name = new User();
// name.sayUser();

// function User() {
//   this.name = "John Doe";
//   this.age = 20;
//   this.sayUser = function () {
//     console.log(this.name);
//     const innerFunctions = () => {
//       console.log(this.name);
//     };
//     innerFunctions();
//   };
// }

// let name = new User();
// name.sayUser();
