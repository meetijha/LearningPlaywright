enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(Severity.High); // 2

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High; 
}

console.log("Low urgent?", needsImmediateAttention(Severity.Low)); // Low urgent? false
console.log("Critical urgent?", needsImmediateAttention(Severity.Critical)); // Critical urgent? true
console.log("Severity name:", Severity[2]); // Severity name: High

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA); //  https://qa.api.com