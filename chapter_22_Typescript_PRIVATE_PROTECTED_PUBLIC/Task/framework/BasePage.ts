// Main file whose attributes and functions we will be trying to access 
// from other files in the same folder and different folders

export class BasePage {
    public appName: string = "TestApp";
    protected loginUrl: string = "https://test.com/login";
    private token: string = "secret123";
    private specialUserToken: string = "specialSecret456";

    public openApp() {
        console.log("Opening " + this.appName);
    }

    protected getLoginUrl() {
        return this.loginUrl;
    }

    private getToken() { // never used in this code, but added to demonstrate private method access, AVOID IT
        return this.token;
    }

    public getSpecialUserToken() {
        return this.specialUserToken;
    }
}

const base = new BasePage();

// PUBLIC IS ACCESSIBLE EVERYWHERE, -> SAME CLASS, CHILD CLASS, NON-CHILD CLASS, SAME FOLDER, DIFFERENT FOLDER

// PROTECTED IS ACCESSIBLE IN SAME CLASS AND CHILD CLASSES, WHETHER IN SAME FOLDER OR DIFFERENT FOLDER, 
// BUT NOT IN NON-CHILD CLASSES

// PRIVATE IS ONLY ACCESSIBLE IN SAME CLASS-> NOT IN CHILD CLASSES, NOT IN NON-CHILD CLASSES, NOT IN SAME FOLDER, NOT IN DIFFERENT FOLDER

// ACCESSING DIRECTLY USING OBJECT OF BASEPAGE CLASS**********
console.log("Testing access using object of BasePage class");
console.log(base.appName); // ✅ public
console.log(base.openApp()); // ✅ public
console.log(base.getSpecialUserToken()); // ✅ accessing private attribute via public method

// ❌ Not allowed- PROTECTED

// console.log(base.loginUrl);    // protected, NOT ACCESSIBLE OUTSIDE CLASS
// console.log(base.getLoginUrl()); // protected, NOT ACCESSIBLE OUTSIDE CLASS

// ❌ Not allowed- PRIVATE
// console.log(base.token);  // private
// base.getToken();    // private
// console.log(base.specialUserToken); // private

// Child Class accessing Parent from same file using inheritance**********
// CHILD CLASS CAN ACCESS PUBLIC AND PROTECTED MEMBERS OF PARENT CLASS, BUT NOT PRIVATE MEMBERS
class ChildPage extends BasePage {
    testAccess() {
        console.log("Testing access from chiled class in same file:");
        console.log(this.appName); // ✅ public
        console.log(this.openApp()); // ✅ public

        console.log(this.loginUrl); // ✅ protected
        console.log(this.getLoginUrl()); // ✅ protected

        console.log(this.getSpecialUserToken()); // ✅ accessing private attribute via public method
        

        // console.log(this.token); ❌ private
        // console.log(this.getToken()); ❌ private
        // console.log(this.specialUserToken); ❌ private
   
        
    }
}

const child = new ChildPage();
child.testAccess(); 
