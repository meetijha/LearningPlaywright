if ([]) {
    console.log("True!")
}
// case 1
let response;
if (response) { //not recommended, because it relies on the truthiness of the value, which can lead to unexpected results if response is falsy (e.g., 0, "", null, undefined).

}
// case 2
if (response !== null) {// this is better, because it checks for null explicitly, rather than relying on the truthiness of the value.
// eg: in API testing result can be 0, which is falsy, but it is a valid response. So, checking for null explicitly is better in this case.
}



if (true) {

}
else if (false) {

}
// else{

// }