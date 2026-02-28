// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. 
// Write a JavaScript program that generates test user data using a for loop. 
// Each user should have a 
// unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). 
// Every 3rd user should be inactive (edge case testing).
//  Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

const roles = ["admin", "editor", "viewer", "tester", "manager"];   

var userCount = 10; // Total number of users to generate

for (let i = 0; i < userCount; i++) {
    const userId = i+1;
    const name = `User${userId}`;
    const email = `${name}@tta.com`;
    const roleIndex = (i+1) % roles.length; // Cycle through roles
    const role = roles[roleIndex];
    
    const isActive = (i+1) % 3 === 0 ? false : true; // Every 3rd user is inactive

    console.log(`User ID: ${userId}, Name: ${name}, Email: ${email}, Role: ${role}, Active: ${isActive}`);
}