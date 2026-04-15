//Rest Parameters
function logResults(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(", ")}`);

    console.log("Suite1",suiteName);
    console.log("Results1",results.join(", "));
}

logResults("Auth Suite", "pass", "fail", "pass", "skip");
// Suite: Auth Suite
// Results: pass, fail, pass, skip


function add(a, b, c) {
    return a + b + c;
}