class A {
  private secret = "real private";
}

const a= new A();
//console.log(a.secret); // ❌ Error: Property 'secret' is private and only accessible within class 'A'.

const specialA: any = new A();
console.log(specialA.secret); // works, but this is a special case where we are using 'any' type to bypass TypeScript's access control.