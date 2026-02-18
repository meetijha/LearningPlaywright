let a = 10 // a over here is in global scope
console.log(a)
if (true){ 
    console.log(a); //TDZ
    let a = 20;// let can be redeclared here as it is local scope to the block
}