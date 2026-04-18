// WHAT id DECORATORS IN TYPESCRIPT?
// Decorators are a powerful feature in TypeScript that allow you to 
// modify the behavior of classes, methods, properties, or parameters at design time. 
// They are essentially functions that can be attached to various elements of your code 
// to add metadata or alter their behavior without changing their actual implementation.

// Decorators can be used for a variety of purposes, such as 
// logging, 
// validation, 
// or even modifying the way a class or method works. 
// They are often used in frameworks like Angular to enhance the functionality of components and services.

// Here's a simple example of a class decorator in TypeScript:

function LogClass(target: Function) {
    console.log("Class decorator called on: " + target.name);
}   

@LogClass
class MyClass {
    constructor() {
        console.log("MyClass instance created");
    }
}

// When you create an instance of MyClass, the LogClass decorator will be called, and it will log the name of the class to the console.

const myInstance = new MyClass();

// Output:
// Class decorator called on: MyClass
// MyClass instance created

// In this example, the @LogClass decorator is applied to the MyClass class.
//  When the class is defined, the LogClass function is called with the constructor function of MyClass as its argument, 
// allowing you to perform actions or add metadata related to the class.
//  Decorators can also be applied to methods, properties, and parameters, 
// providing a flexible way to enhance your code's functionality.