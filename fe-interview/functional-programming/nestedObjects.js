const person = {
  name: "Bob",
  address: {
    city: "BZA",
  },
};

// const updated = { ...person };
// updated.address.city = "VGA";

//console.log(person); // here original object will change because the memory location of address object in both person and updated objects will be the same

const updated2 = { ...person, address: { ...person.address } };
updated2.address.city = "VGA";

console.log(person);
