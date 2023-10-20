const dummyApi = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const tasksArray = [dummyApi(1000), dummyApi(3000), dummyApi(5000)];

const promiseAllPolyfill = (tasksArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    tasksArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index === tasksArray.length - 1) resolve(output);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

promiseAllPolyfill(tasksArray)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("er", err);
  });
