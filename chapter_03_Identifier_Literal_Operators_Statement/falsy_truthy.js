//In JavaScript, falsy values are values that automatically convert to false when evaluated in a Boolean context.

// ALL falsy values in JavaScript:
// false
// 0
// -0
// 0n        // BigInt zero
// ""        // empty string
// null
// undefined
// NaN


// []      // empty array (truthy)
console.log([] == false);  // true
if ([]) {
  console.log("Runs"); // This will run because an empty array is truthy.
}

if (0) {
  console.log("This will not run");
}

if ("") {
  console.log("This will not run");
}

if ("hello") {
  console.log("This will run");
}

Boolean(0);        // false
Boolean("");       // false
Boolean(null);     // false
Boolean("Meeti");  // true
Boolean(100);      // true