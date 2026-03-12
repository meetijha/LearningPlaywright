
// if (ourStatusCode >= 200 && ourStatusCode < 300) 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Simple Function: Request is fine!")
    }
}

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Function Expression: Request is fine!")
    }
}

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Arrow Function: Request is fine!");
    }
}


validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);

//Will function expression and arrow function work without calling them?
//  No, they will not work without calling them. 
// We need to call the function expression and arrow function just like we call a normal function.