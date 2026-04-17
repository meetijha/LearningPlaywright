class A {
  private secret = "real private";
  //To behave like Java, you must use # so that special case doesnt work
  #secret2= "truly private";
}

const a= new A();
//console.log(a.secret); // ❌ Error: Property 'secret' is private and only accessible within class 'A'.
//console.log(a.#secret2); // ❌ Error: Property '#secret2' is private and only accessible within class 'A'.

const specialA: any = new A();
console.log(specialA.secret); // works, but this is a special case where we are using 'any' type to bypass TypeScript's access control.
console.log(specialA.secret2); // undefined, because #secret2 is truly private and cannot be accessed even with 'any' type.