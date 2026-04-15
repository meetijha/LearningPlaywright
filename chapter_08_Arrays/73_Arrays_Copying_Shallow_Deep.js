let original = [1, 2, 3];

let copy1 = [...original]; // spread
// console.log(copy1);
let copy2 = original.slice();
// console.log(copy2);
let copy3 = Array.from(original);
// console.log(copy3);
let copy4 = original.concat();
// console.log(copy4);

copy1.push(99);
console.log(original); // [ 1, 2, 3 ] - original is not affected by changes to copy1
console.log(copy1); // [ 1, 2, 3, 99 ] - copy1 is a new array that contains the same elements as original, but is not the same array as original

// Deep copy (JSON)
let c = original; // deep copy is not possible with arrays of primitive values, because they are immutable, but if the array contains objects, then we can use JSON to create a deep copy of the array.

original.push(99);
original.push(100);
console.log(original);// [ 1, 2, 3, 99, 100 ] - original is modified by push
console.log(c); // [ 1, 2, 3, 99, 100 ] - c is not a copy, it's a reference to the same array as original
console.log(copy1); // [ 1, 2, 3, 99 ] - copy1 is not affected by changes to original



let deepCopy = JSON.parse(JSON.stringify(original)); // deep copy using JSON
console.log(deepCopy); // [ 1, 2, 3 ] - deepCopy is a new array that contains the same elements as original, but is not the same array as original

//difference between shallow copy and deep copy is that 
// shallow copy creates a new array that contains the same elements as the original array, 
// but the elements themselves are not copied, they are just references to the same objects in memory. 
// 
//Deep copy creates a new array that contains new objects that are copies of the objects in the original array,
//  so changes to the objects in the deep copy do not affect the objects in the original array.