//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() {
    console.log("Hi")
}

name1();

// IIFE
(function () {
    console.log("Hi")
})();


// 

(function () {
    console.log("Staging")
})();

(() => {
    console.log("Setup complete");
})();

// IIFE is a function that is defined and immediately invoked.
// It is a common pattern in JavaScript to create a new scope and avoid polluting the global namespace.
// IIFE can be used to create private variables and functions that are not accessible from outside the function.

//DIfference between block anf IIFE

{
    let name1 = "Meeti";
    console.log(name1); //This will work because name is declared with let and is block scoped.
}

 console.log(name1); //[Function: name1],no error This will not work because name is not accessible outside the block.

(function () {
    let name2 = "Meeti";
    console.log(name2); // This will work because name is declared with let and is function scoped.
})();

 //console.log(name2); //not defined, error. This will not work because name is not accessible outside the IIFE.


 // var inside IIFE is not accessible outside the IIFE, 
 // while var inside a block is accessible outside the block.

 