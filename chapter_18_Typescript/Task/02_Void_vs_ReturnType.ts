function countPassedTests(results: string[]): number {
    let count: number = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "PASS") count++;
    }
    return count; // 3
}

function printTestSummary(total: number, passed: number): void {
    console.log("Passed: " + passed + "/" + total); // Passed: 3/5
    console.log("Failed: " + (total - passed) + "/" + total); // Failed: 2/5
}

let results: string[] = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];
let passed: number = countPassedTests(results);
printTestSummary(results.length, passed) // 5, 3

// Output:
// Passed: 3/5
// Failed: 2/5