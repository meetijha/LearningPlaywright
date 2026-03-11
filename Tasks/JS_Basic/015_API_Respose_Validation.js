// Exercise 1 : API Response Validation

// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes
// let responses = [200, 201, 404, 500, 404, 200, 503];

let responses = [200, 201, 404, 500, 404, 200, 503];

// Check if ALL responses are successful (200–299)
let areAllSuccessful= responses.every(code => code>=200 && code<300)
console.log("Are all response successful -> ",areAllSuccessful);

//Find the first non success code
let firstNonSuccessCode= responses.find(code=> !(code>=200 && code<300))
console.log("First Non success code is: ",firstNonSuccessCode);

//Return all unique error codes
let uniqueArr=[];
for(let i=0;i<responses.length;i++)
{
    if(!(uniqueArr.includes(responses[i])))
        uniqueArr.push(responses[i]);
    
}
console.log("All unique codes are: ",uniqueArr);