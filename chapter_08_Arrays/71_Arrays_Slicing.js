// Slicing & Combining


let arr = [1, 2, 3, 4, 5];

// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 
console.log(arr.slice(1, 3)); // [2, 3] - from index 1 to index 2 (end-1)
console.log(arr.slice(2, 4));// [3, 4] - from index 2 to index 3 (end-1)

console.log(arr.slice(2, 5)); // [3, 4, 5] - from index 2 to index 4 (end-1)

console.log(arr.slice(2)); // [3, 4, 5] - from index 2 to the end of the array

console.log(arr.slice(-2)); // [4, 5] - from the second last element to the end of the array
console.log(arr.slice(-3));// [3, 4, 5] - from the third last element to the end of the array


console.log(arr.slice(0));// [1, 2, 3, 4, 5] - from index 0 to the end of the array (entire array)
console.log(arr.slice(-5));// [1, 2, 3, 4, 5] - from the fifth last element to the end of the array

console.log("check",arr.slice(-6)); // [1, 2, 3, 4, 5] - from the sixth last element to the end of the array (entire array)
console.log("check2",arr.slice(1,9)); // [2, 3, 4, 5] - from index 1 to index 8 (end-1), but since the array has only 5 elements, it returns up to the end of the array
// There is no array index out of bound exception in JavaScript, 
// it will just return the elements up to the end of the array if the end index is greater than the array length.

let arr1 = [1, 2, 3, 4, 5];

let a = [1, 2];
let b = [3, 4];
// let c = a.concat(b, [5, 6]);
let c = a.concat(b);
console.log(c);// [1, 2, 3, 4] - concatenates arrays a and b

// concat can also take multiple arrays and values
let d = a.concat(b, [5, 6]);
console.log(d);// [1, 2, 3, 4, 5, 6] - concatenates arrays a and b, and adds the values 5 and 6

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);// [1, 2, 3, 4] - concatenates arrays a and b using spread operator

let e = [...a, ...b, 5, 6];
console.log(e);// [1, 2, 3, 4, 5, 6] - concatenates arrays a and b using spread operator, and adds the values 5 and 6

// ... , ===
// Join 
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s); // pass | fail | skip, its not an array, its a string.