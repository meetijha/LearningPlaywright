// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: 
// frequency ("always", "often", "rarely") and 
// impact ("blocker", "major", "minor").
//  Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

let frequency = "often"; // Possible values: "always", "often", "rarely"
let impact = "major"; // Possible values: "blocker", "major", "minor"

let severityLevel = null;

if(impact === "blocker") {
    if(frequency === "always") 
        severityLevel = "P0";
    else if (frequency === "often")
        severityLevel = "P1";
    else if (frequency === "rarely")
        severityLevel = "P2";
}
else if (impact === "major") {
    if(frequency === "always") 
        severityLevel = "P1";
    else if (frequency === "often")
        severityLevel = "P2";
    else if (frequency === "rarely")
        severityLevel = "P3";
}
else if (impact === "minor") {
    if(frequency === "always") 
        severityLevel = "P2";
    else if (frequency === "often")
        severityLevel = "P3";
    else if (frequency === "rarely")
        severityLevel = "P4";
}

console.log(`Bug Severity Level: ${severityLevel}`);