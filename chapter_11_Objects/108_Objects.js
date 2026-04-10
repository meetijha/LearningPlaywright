// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Meeti", age: 85 };
let student3 = { name: "Meeti", age: 87, phone: 987654320 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Meeti", "age": 87, "phone": 987654320 };

// -------


let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'pass' };
console.log(a1.status);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);


let b = a;  // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status); // "fail" — because a and b point to the same object in memory


// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); // false — because c and d are different objects in memory, even though they have the same content


const t_json = {
    "name": "meeti",
    "age": 10
};
console.log(t_json); // { name: 'meeti', age: 10 } — JSON object, keys are in double quotes, but when printed, it looks like a regular JavaScript object


const t_js = {
    name: "meeti",
    age: 10
};
console.log(t_js); // { name: 'meeti', age: 10 } — regular JavaScript object, keys are not in quotes, but when printed, it looks the same as JSON