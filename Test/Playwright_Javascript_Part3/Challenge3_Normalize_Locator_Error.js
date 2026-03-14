// Normalize Locator Error Messages
// Given a raw Playwright error message string,
//  write a function that trims extra spaces,
//   converts the message to lowercase, 
//   collapses multiple spaces into a single space, 

//   and prints a category. 
//   Use `TIMEOUT` if the normalized message contains `"timeout"`, 
//        `LOCATOR` if it contains `"locator"`,
//          otherwise `GENERAL`.

//   //Example input:
//   rawMessage = " Locator not found after TIMEOUT "

//   //Example output:
// Normalized: locator not found after timeout Category: TIMEOUT

let  rawMessage = " Locator not found after TIMEOUT ";

function normalizeErrorMessage(rawMessage) {
    let normalized = rawMessage.trim().toLowerCase();// trim to remove leading and trailing spaces, toLowerCase to convert to lowercase

    // collapse multiple spaces into a single space
    normalized = normalized.replace(/\s+/g, ' ');   
    let category = "GENERAL";
    if (normalized.includes("timeout")) {
        category = "TIMEOUT";
    } 
    else if (normalized.includes("locator")) {
        category = "LOCATOR";
    }
    console.log(`Normalized: ${normalized} Category: ${category}`);
}

normalizeErrorMessage(rawMessage);