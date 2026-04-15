// 1. Define interfaces for user data 
interface User {
    id: number;
    name: string;
    email: string;
    batch: string;
    phone: string;
    isAdmin: boolean;

}

let user1: User={
    id: 1,
    name: "meeti",
    email: "meeti@example.com",
    batch: "Playwright + AI",
    phone: "987654321",
    isAdmin: false


}

console.log(user1);
console.log("User Name:", user1.name); // User Name: meeti
console.log("Is Admin?", user1.isAdmin); // Is Admin? false