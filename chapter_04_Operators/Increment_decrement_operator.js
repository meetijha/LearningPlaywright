let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);// 12
console.log(a); //12
console.log(c); // 48