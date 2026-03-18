function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner;

}

console.log("Before calling outer");
let fn_inner = outer(); // inner is not executed but returned as a value
console.log("After calling outer, before calling inner");
fn_inner(); //inner function is executed, and it can access the variable 'message' from the outer function's scope, demonstrating closure.
console.log("After calling inner");

// Closure is the combination of a function and its lexical environment. 
// It allows the inner function to access variables from the outer function even after the outer function has finished executing.   


//  inner() not allowed!