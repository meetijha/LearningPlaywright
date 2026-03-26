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

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);