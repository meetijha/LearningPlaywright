//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found

results.indexOf("fail"); //1
results.indexOf("skip");        // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");    // 4

// includes — returns boolean
results.includes("error"); // true
results.includes("skip");       // false



// find — returns first matching element

let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 0));  // 25, first element > 20

// findIndex
console.log(nums.findIndex(n => n > 20)); //1, index of first element > 20

console.log(nums.findLast(n => n > 20)); // 45, last element > 20
console.log(nums.findLastIndex(n => n > 20));// 3, index of last element > 20