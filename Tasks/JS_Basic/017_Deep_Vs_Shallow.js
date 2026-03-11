//  Exercise 3 — Deep vs Shallow Copy (Tricky)

// What is the output and why? How would you fix it?
// javascript
// let suite1 = [{ name: "login", status: "pass" }];
// let suite2 = [...suite1];
// suite2[0].status = "fail";
// console.log(suite1[0].status);


// SHALLOW COPY: It creates a new reference to the same underlying data. 
// This means that if we modify the nested objects or arrays in the copied version, it will affect the original version as well, 
// since they both point to the same memory location.

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1]; //Shallow copy
suite2[0].status = "fail";
console.log("SHALLOW COPY-> ", suite1[0].status); // Output is Fail, DUE to SHALLOW COPY. 
// both suite1 and suite2 reference to the same memory location

// OTHER SHALLOW COPY METHODS
// Object.assign({}, obj)
// Array.slice()
// Array.concat()
// Spread operator [...array]

// DEEP COPY: It creates a completely independent copy of the original data, including all nested objects and arrays. 
// Modifying the deep-copied version will not affect the original version, as they are stored in different memory locations.
//FIX IS
let suite3 = [{ name: "login", status: "pass" }];
let suite4= JSON.parse(JSON.stringify(suite3)); // Deep copy
suite4[0].status = "fail";
console.log("DEEP COPY-> ", suite3[0].status); // Output is Pass, DUE to DEEP COPY.

// OTHER DEEP COPY METHODS
// structuredClone(obj) - modern and efficient way to deep copy objects, 
// including handling of circular references and special data types.

// Lodash's _.cloneDeep() - a popular utility library that provides a deep cloning function. 
// It can handle complex objects and is widely used in JavaScript projects.

