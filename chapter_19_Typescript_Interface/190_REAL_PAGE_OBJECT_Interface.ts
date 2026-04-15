interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}
interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}


let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}

let freeTrialPage: FreeTrailPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:", loginPage.url); // URL: /login
console.log("Title:", loginPage.title);// Title: Login Page
console.log("Username field:", loginPage.usernameSelector);// Username field: #username

console.log(" ------- ");


console.log("URL:", freeTrialPage.url);// URL: /free-trial
console.log("Title:", freeTrialPage.title);// Title: Free Page
console.log("Username field:", freeTrialPage.usernameSelector);// Username field: #username