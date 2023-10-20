const { produce } = require("immer");

const person = {
  name: "Bob",
  address: {
    city: "VGA",
  },
};

function updateAddress(person) {
  return produce(person, (p) => {
    p.address.city = "BZA";
  });
}

const updated = updateAddress(person);

console.log("updated", updated);
console.log("original", person);
