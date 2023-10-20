// const promise = new Promise((resolve, reject) => {
//   reject(Error("Fails"));
// })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .then((err) => {
//     console.log(err);
//   });

// const promise = new Promise((resolve, reject) => {
//   resolve("Success");
// })
//   .then(() => {
//     throw new Error("Error");
//   })
//   .catch((err) => {
//     return "Worked";
//   })
//   .then((m) => console.log(m));

// Promise.resolve("Success")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((m) => {
//     console.log(m);
//   });

const promise = new Promise((res) => res(2));

promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v, "Finally");
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });
