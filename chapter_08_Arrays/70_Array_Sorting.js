//Sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort(); // sorts in place, modifies original array
console.log(fruits);// [ 'apple', 'banana', 'cherry' ]

let numbers = [40, 10, 30, 20];
numbers.sort();// sorts as strings by default
console.log(numbers);// [ 10, 20, 30, 40 ]
//  alphabetical by default/ lexicographical order

// To sort numbers correctly, we need to provide a compare function
numbers.sort((a, b) => a - b); // ascending order
console.log(numbers);// [ 10, 20, 30, 40 ]

numbers.sort((a, b) => b - a); // descending order
console.log(numbers);// [ 40, 30, 20, 10 ]  