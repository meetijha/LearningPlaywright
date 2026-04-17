import { BasePage } from "../framework/BasePage";

export class ChildInDifferentFolder extends BasePage {

    testAccess() {
        console.log(this.appName); // ✅ public , Output:// TestApp
        console.log("Child class different folder: " + this.getLoginUrl()); // ✅ protected, Output:// https://test.com/login

// PROTECTED IS ACCESSIBLE IN CHILD CLASS OF DIFFERENT FOLDER, 
 
        // console.log(this.token); ❌ private
    }
}


let cdf= new ChildInDifferentFolder();
cdf.testAccess();