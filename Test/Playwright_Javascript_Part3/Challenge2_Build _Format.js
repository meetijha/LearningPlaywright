// Build Test Users from Arrays
// Write a JavaScript function that receives two arrays
// : one with names and one with roles. 
// Return a new array of user objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by 
// underscores, and the email should use the domain `@playwrightbatch.com`.

// names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]

// [{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]

let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

function buildUsers(names, roles) {
    let users = [];
    for (let i = 0; i < names.length; i++) {
        let username = names[i].toLowerCase();
        let email = `${ username }@playwrightbatch.com`;
        let role = roles[i];
        users.push({ username, email, role });
    }
    return users;
}

console.log(buildUsers(names, roles));