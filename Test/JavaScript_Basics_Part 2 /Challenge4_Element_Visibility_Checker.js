// Element Visibility Checker
// In UI automation (Cypress/Playwright), 
// you often need to validate element states before interacting with them. 
// Write a JavaScript program that checks an element's properties 
// (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. 
// Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

// States:
//  READY (all true), 
// DISABLED (present+displayed but not enabled), 
// HIDDEN (present but not displayed), 
// NOT FOUND (not present).

// Severity: 
// CRITICAL (not present), 
// WARNING (not displayed or not enabled), 
// OK (all good).

let isPresent = true;
let isDisplayed = true;
let isEnabled = true;

let elementState = null;

if(isPresent === true && isDisplayed === true && isEnabled === true) {
    elementState = "READY";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    elementState = "DISABLED";
} else if (isPresent === true && isDisplayed === false) {
    elementState = "HIDDEN";
} else if (isPresent === false) {
    elementState = "NOT FOUND";
}

let severityLevel = (isPresent === false) ? "CRITICAL" : 
                    (isDisplayed === false || isEnabled === false) ? "WARNING" :  "OK";

console.log(`Element State: ${elementState}`);
console.log(`Severity Level: ${severityLevel}`);    