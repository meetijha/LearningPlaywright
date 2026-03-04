// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection.
//  The system should lock the account after 3 consecutive failed attempts.
//   Use a do...while loop to process login attempts from an array. 
//   Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
//   Validate using strict equality (===) and logical operators (&&).

const correctUsername = "admin";
const correctPassword = "password123";
const maxAttempts = 3;

var failedAttempts = 0;

