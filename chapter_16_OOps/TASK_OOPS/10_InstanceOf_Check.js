class Vehicle {}
class Car extends Vehicle {}
class Tesla extends Car {}

let t = new Tesla();

console.log(t instanceof Tesla); // true
console.log(t instanceof Car); // true
console.log(t instanceof Vehicle); // true
console.log(t instanceof Object); // true (all objects inherit from Object)