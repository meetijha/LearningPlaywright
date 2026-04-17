import { BasePage } from "./BasePage";

const base = new BasePage();

console.log(base.appName); // ✅ public

// ❌ Not allowed
//console.log(base.loginURL);    // protected
// console.log(base.token);  // private