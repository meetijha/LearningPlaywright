0 == ""             // true   (both convert to 0)
0 == "0"            // true   ("0" → 0)
0 == false // true
null == undefined   // true
" \t\n " == 0   // true 


//Rule breaker (all below are false)

null == 0 // false
null == "" //false
null == false //fasle
undefined == 0 //false
undefined == "" //false
undefined == false //false
NaN == NaN  //false

console.log("" === false); //false, because they are of different types ("" is a string, while false is a boolean).
console.log("" == false); // true, because "" is falsy and false is falsy, so they are considered equal in non-strict comparison.
console.log(null == undefined); // true, because null and undefined are considered equal in non-strict comparison, even though they are of different types.
console.log(null === undefined); // false, because they are of different types (null is an object, while undefined is a primitive type).
console.log(0 == false); // true, because 0 is falsy and false is falsy, so they are considered equal in non-strict comparison.
console.log(0 === false); // false, because they are of different types (0 is a number, while false is a boolean).


console.log("0" == false); //true
console.log("" == "0");  //false

let name = null;
let age;

name = "meeti";

// var p = NaN;
// p = p +10;

var a = 0 / 0;
var a1 = 0.0 / 0.0;
console.log(a);


let a2;
console.log(a2);

let a3 = null;
console.log(a3);

let red = "#880808";
console.log(red);

let inputAge = "true";


if (inputAge == false) {
    console.log("Age is empty/invalid");  // WRONG! "0" == false is true
}