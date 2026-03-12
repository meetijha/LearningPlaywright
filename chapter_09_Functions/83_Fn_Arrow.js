// Arrow Function (ES6)

const greet = function (name1) {
    return `Hello, ${name1}!`;
}

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

const greet1 = (name2) => `Hello, ${name2}!`;// This is an arrow function equivalent to the greet function above.

console.log("expression ", greet("Meeti"));
console.log("Arrow ", greet1("Meeti"));

// arrow functions only generally works whenever you have a single line. 
const doubleIt = n => n * 2;// If you have only one parameter, you can omit the parentheses around the parameter.
console.log("Double it: ", doubleIt(10));

// No params — parens required
const getEnv = () => "staging";// If you have no parameters, you need to use empty parentheses.
console.log("Environment: ", getEnv());


// Suppose we have a multi-line. Can we use arrow function everywhere? 
// Multi-line — needs curly braces + return
const getResult = (score) => {
    if (score >= 70) return "pass";
    return "fail";
};

console.log("Result: ", getResult(85));
console.log("Result: ", getResult(45));

// Arrow functions are more concise and often used for simple one-liner functions,
//  but they can also be used for more complex functions as shown above.