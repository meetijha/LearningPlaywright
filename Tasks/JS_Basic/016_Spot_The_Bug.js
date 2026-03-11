// Exercise 2 — Spot the Bug

// What is wrong with this code? Fix it.

// let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort(); // sorts as strings by default, so 1200 comes before 85
// console.log("Fastest:", sorted[0]);

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a,b)=>(a-b)); // sorts numbers in ascending order 
console.log("Fastest:", sorted[0]);
console.log(sorted);