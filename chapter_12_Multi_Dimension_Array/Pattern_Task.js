

//PATTERN- 1
//*
//**
//***
//****
//***** 

let n=5;
console.log("Left Hand Pattern  ");
for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+="*";      
    }
    console.log(row);
}

//PATTERN- 2
//*********
// *******
//  ***** 
//   ***
//    *

console.log("Inverted Pyramid Pattern  ");
for (let i = n; i >= 1; i--) {

    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);

}

//PATTERN- 3
//    *
//   **
//  ***
// ****
//***** 
console.log("Right Hand Pattern  ");

for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=n-i;j++){
        row+=" ";
    }
    for(let j=1;j<=i;j++){
        row+="*";      
    }
    console.log(row);
}

//PATTERN- 4
// *****
//  ****
//   ***
//    **
//     *

console.log("Inverted Right Hand Pattern  ");
for(let i=n;i>=1;i--){
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=i;j++){
        process.stdout.write("*");      
    }
    console.log();  
}