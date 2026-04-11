let bug: { id: number; title: string; severity: string; assignee: string } = {
    id: 101,
    title: "Login button unresponsive on mobile",
    severity: "Critical",
    assignee: "Dev"
};

function formatBug(b: { id: number; title: string; severity: string; assignee: string }): string {
    return "BUG-" + b.id // BUG-101
    + " [" + b.severity + "] " // [Critical]
    + b.title + " (Assigned: " // Login button unresponsive on mobile (Assigned:
    + b.assignee + ")"; // Dev)
}

console.log(formatBug(bug));

// Output: 
// BUG-101 [Critical] Login button unresponsive on mobile (Assigned: Dev)