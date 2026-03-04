// Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds. 
// Write a JavaScript program using a while loop that analyzes an array of response times 
// and prints a performance report with min, max, average, 
// and how many responses breached the SLA threshold (> 500ms). 
// Use comparison operators for min/max tracking.

let responseTimes = [120, 450, 600, 300, 700, 200, 400];
let slaThreshold = 500;

let minTime= responseTimes[0];
let maxTime = responseTimes[0];

let averageTime = 0;
let totalResponseTime=0;
let breachCount = 0;
for (let i = 0; i < responseTimes.length; i++) {
    totalResponseTime += responseTimes[i];
    if (responseTimes[i] < minTime) {
        minTime = responseTimes[i];
    }
    if (responseTimes[i] > maxTime) {
        maxTime = responseTimes[i];
    }
    if (responseTimes[i] > slaThreshold) {
        breachCount++;
    }
}

averageTime = totalResponseTime / responseTimes.length;

console.log(`Performance Report:`);
console.log(`Min Response Time: ${minTime} ms`);
console.log(`Max Response Time: ${maxTime} ms`);
console.log(`Average Response Time: ${averageTime.toFixed(2)} ms`);
console.log(`SLA Breaches (> ${slaThreshold} ms): ${breachCount}`);