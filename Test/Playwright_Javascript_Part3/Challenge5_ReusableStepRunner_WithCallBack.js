// Reusable Step Runner with Callback
// Write a higher-order function `runStep(stepName, actionFn)` 
// that logs the start of a step, executes the callback, and returns an object 
// in the format `{ stepName, passed, message }`. 
// If the callback throws an error, catch it and return `passed: false` with the error message.

//Example Input:
//runStep("open dashboard", () => "Page loaded")
//Example Output:
//{ stepName: "open dashboard", passed: true, message: "Page loaded" }

function runStep(stepName, actionFn) {
    console.log(`Starting step: ${stepName}`);
    try {
        let result = actionFn();
        return {
            stepName: stepName,
            passed: true,
            message: result
        };
    } catch (error) {
        return {
            stepName: stepName,
            passed: false,
            message: error.message
        };
    }  
    

}

// Example usage:
let step1 = runStep("open dashboard", () => "Page loaded");
console.log(step1);

let step2 = runStep("fetch data", () => { throw new Error("Network error") });
console.log(step2); 