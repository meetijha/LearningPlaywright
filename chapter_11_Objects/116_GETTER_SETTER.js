const user = {
    firstName: "Meeti",
    lastName: "Jha",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};





//Getter
console.log(user.fullName);// MeetiJha

// Setter cannot be called directly as a function, 
// user.fullName("New Name"); // TypeError: user.fullName is not a function

user.fullName = "Amit Sharma"; // allowed
console.log(user.fullName);// AmitSharma


// Usage of set in above example
user.fullName = "John Doe";
console.log(user.firstName); // John
console.log(user.lastName); // Doe

// Direct modification also allowed
user.firstName='Aaryav';
console.log(user.fullName); // AaryavDoe