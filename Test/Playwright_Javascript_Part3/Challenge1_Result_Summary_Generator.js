// Playwright Result Summary Generator
// You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, 
// where status can be `"passed"`, `"failed"`, or `"skipped"`. 
// Write a JavaScript function that prints a summary report with 
// total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

// Input: 
// results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]

// Output:
// Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form

function generateSummary(results) {
    let totalSteps = results.length;
    let passedCount = results.filter(r => r.status === "passed").length;// get only passed steps and count them

    let failedCount = results.filter(r => r.status === "failed").length;// get only failed steps and count them

    let skippedCount = results.filter(r => r.status === "skipped").length;// get only skipped steps and count them

    let totalDuration = results.reduce((sum, r) => sum + r.durationMs, 0);// reduce to sum up durationMs of all steps
    

    let failedSteps = [];
    for (let r of results) {
        if (r.status === "failed") {
            failedSteps.push(r.name);
        }
    }
    failedSteps = failedSteps.join(", ");
    // Another way
    // let failedSteps = results.filter(r => r.status === "failed")// filter to get only failed steps
    //                           .map(r => r.name)// map to extract the names of failed steps
    //                           .join(", ");// join the names with a comma and space                        
    
    console.log(`Total Steps: ${totalSteps} Passed: ${passedCount} Failed: ${failedCount} Skipped: ${skippedCount} Total Duration: ${totalDuration}ms Failed Steps: ${failedSteps}`);
}

// Example usage:
let results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },   
    { name: "submit", status: "skipped", durationMs: 0 }
];
generateSummary(results);