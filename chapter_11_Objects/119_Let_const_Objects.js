let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);// { browser: 'Safari' } because we are reassigning the variable config1 to a new object, so it will work without any error.

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties of const — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// config = { browser: "Safari" }; not allowed because we are trying to reassign the variable config to a new object, so it will throw an error. TypeError: Assignment to constant variable.
console.log(config);