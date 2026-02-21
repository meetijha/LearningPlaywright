let amul = null;
let val = amul ?? "nandani milk";
let val2 = null ?? "default_msg";   // "default" (?? returns right side if left is null/undefined)

// Modern JS - Typescript.

val = "which milk? -> " + val;
console.log(val)// which milk? -> nandani milk
console.log(val2) // default
// very useful in test data handling.