const person = {
  name: "Alex",
  age: 30,
  profession: "Developer",
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm a ${this.profession}.`);
  }
};

console.log(person.name);      // Accessing property using dot notation
console.log(person["age"]);    // Accessing property using bracket notation
person.greet();                // Calling the function property
