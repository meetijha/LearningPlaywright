// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output

// SIDE EFFECTS ARE :
//  modifying external state,
//  I/O operations, 
// random number generation , 
// date/time 
// and other non-deterministic behavior.

// Pure function example
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));


// ❌ Impure — depends on external state

function isPassing(score) {
    return score >= threshold;  // depends on external variable threshold, which is not passed as an argument, so the output can change if threshold changes, making it impure.
}
let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));

//another example of impure function
let count = 0;
function increment() {
    count++; // modifies external variable
    return count;
}

console.log(increment());
console.log(increment());