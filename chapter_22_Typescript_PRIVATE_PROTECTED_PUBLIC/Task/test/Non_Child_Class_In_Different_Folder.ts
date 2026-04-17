import { BasePage } from "../framework/BasePage";

// Access using object of BasePage class**********
const base = new BasePage();

console.log(base.appName); // ✅ public

// ❌ Not allowed
// console.log(base.url);    // protected
// console.log(base.token);  // private

// Accessing from non-child class in different folder**********
class Helper{
    testAccess() {
        console.log("Testing access from non-child class in different folder:");
        console.log(base.appName); // ✅ public
        console.log(base.getSpecialUserToken()); // ✅access of private attributeusing public method

        // ❌ Not allowed
        // console.log(base.loginUrl);    // protected, NOT ACCESSIBLE 
        // console.log(base.getLoginUrl()); // protected, NOT ACCESSIBLE 
        // console.log(base.token);  // private
        // console.log(base.specialUserToken); // private
        // console.log(base.getToken()); // private
        
}
}

let helper = new Helper();
helper.testAccess();