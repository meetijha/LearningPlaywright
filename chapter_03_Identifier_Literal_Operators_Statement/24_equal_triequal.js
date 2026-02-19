// ==, ===, = 

let a = 5;

// console.log(5 = 5);

// console.log(5 = 5);
console.log(5 == "5");//true
console.log(5 === "5");  //false number, string

console.log(null == undefined); // true special rule, they only equal each other)
console.log(null === undefined);// false (strict — different types)

console.log(0 == false); // true (type coercion)
console.log(0 === false); // false (different types)

console.log("" == false); // true (type coercion)
console.log("" === false); // false (different types)

console.log(0 == ""); // true (type coercion)
console.log(0 === ""); // false (different types)

console.log(5 == 5.0);// true (type coercion, both are treated as numbers)
console.log(5 === 5.0);// true-funny! (both are numbers and have the same value)
console.log(5 === 5.01);// false (both are numbers but different values)