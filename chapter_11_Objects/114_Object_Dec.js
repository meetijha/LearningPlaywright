const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1); // John
console.log(age); // 30

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge); // 30

// Default values
const { country = "USA" } = user; // here country is not in user, so it will take default value
const { name1, country: userCountry = "USA" } = user; // here name1 is in user, so it will take value from user, but country is not in user, so it will take default value
console.log(country); // USA
console.log(userCountry); // USA

// Nested destructuring

const data = { user: { name: "John", address: { city: "NYC" } } };
// Here we are destructuring user from data, 
// then address from user, and then city from address
const { user: { address: { city } } } = data;
console.log(city); // NYC