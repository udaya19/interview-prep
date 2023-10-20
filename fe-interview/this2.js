const obj = {
  name: "name",
  walk() {
    setTimeout(() => {
      console.log(this);
    });
  },
};

// obj.walk();

function a() {
  const a = "a";
  b = () => {
    console.log(this);
  };
  b();
}

a();
