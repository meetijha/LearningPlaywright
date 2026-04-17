// Checking access from child class in same folder but different file

import { BasePage } from "./BasePage";

export class ChildInSameFolder extends BasePage {

    testAccess() {
        console.log("Testing access from child class in same folder:");
        console.log(this.appName); // ✅ public
        console.log(this.openApp()); // ✅ public

        console.log(this.loginUrl); // ✅ protected
        console.log(this.getLoginUrl()); // ✅ protected accessible in child class

        // console.log(this.specialUserToken); ❌ private, 
        console.log(this.getSpecialUserToken()); // ✅ accessing private attribute via public method

        // console.log(this.token); ❌ private
        // console.log(this.getToken()); ❌ private
        // console.log(this.specialUserToken); ❌ private
        
}
}

let CSF= new ChildInSameFolder();
CSF.testAccess();