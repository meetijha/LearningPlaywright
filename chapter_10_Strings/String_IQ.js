

// ✅1. Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";
url.includes("staging"); // true
url.startsWith("https"); // true
url.endsWith("/dashboard");// true

// ✅2. Extract status code from log message
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1];
console.log(status); //Answer: "500"

// ✅3. Format test ID with leading zeros
let env = "staging"; 
let module = "auth";
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;// padStart(3, "0") ensures the count is always 3 digits with leading zeros if necessary
console.log(testId); // staging_auth_007

// ✅4. Normalize user input for comparison
 let actual = " PASS "; 
 let expected = "pass"; 
 actual.trim().toLowerCase() === expected; // true

// ✅5. Parse query parameters from URL
 let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
 let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
  console.log(params); // { query: "login", page: "2", sort: "asc" }, returned in object format because map() returns an array of arrays, and Object.fromEntries() converts that array of arrays into an object with key-value pairs.

 // ✅6. Mask sensitive information in logs
let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); // "Bearer ***REDACTED***"

 