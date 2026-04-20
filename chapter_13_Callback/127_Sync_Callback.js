let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {// sequence of result and index is like this because foreach function format is like this forEach(function(currentValue, index, array) { ... }, thisArg);
    console.log("Test" + index + " -> " + result);
});

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.