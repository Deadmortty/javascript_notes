// *********************************** getOwnPropertDescriptor | Math.PI *******************************************************************************************************
// Example code:
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// // console.log(descripter);

// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);

// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("chai nhi bni");
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     //writable: false,
//     enumerable: true,
    
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
        
//         console.log(`${key} : ${value}`);
//     }
// }

// What does Object.getOwnPropertyDescriptor do?
// It retrieves the property descriptor of a specific property on an object. 
// A descriptor contains metadata about the property, such as whether it's writable, enumerable, and configurable.

//Part 1.  Output for Math.PI:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }
// Math.PI is a constant:
// writable: false: You cannot change its value.
// enumerable: false: It won’t show up in a for...in loop or Object.entries.
// configurable: false: You cannot delete or modify its attributes.


// console.log(Math.PI);  // Prints 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI);  // Still prints 3.141592653589793

// Since Math.PI is not writable, attempting to assign a new value (5) has no effect.

// Part 2: Property Descriptor for chai:
// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
//     orderChai: function(){
//         console.log("chai nhi bni");
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// 1. Initial Descriptor for name:
// The default descriptor for properties in objects is:
// {
//     value: "ginger chai",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
// writable: true: You can change the value.
// enumerable: true: It will show up in for...in loops or Object.entries.
// configurable: true: You can delete or modify its attributes.


// Object.defineProperty(chai, 'name', {
//     // writable: false,
//     enumerable: true,
// });

// What does Object.defineProperty do?
// It allows you to modify a property’s descriptor.
// In this case:
// You leave writable as its default (true) since it’s not explicitly set.
// enumerable: true: The property remains visible in loops and Object.entries.

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Updated Descriptor for name:
// If no changes are made to writable or configurable, they retain their default values:
// {
//     value: "ginger chai",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }


// Part 3: Iterating Over Properties
// Code:
// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }

// 1. What does Object.entries do?
// It returns an array of key-value pairs for enumerable properties of the object. For example:
// [
//     ["name", "ginger chai"],
//     ["price", 250],
//     ["isAvailable", true],
//     ["orderChai", ƒ] // This is skipped in the loop
// ]

// 2. Loop Execution:
// The if condition ensures that functions (typeof value === "function") are skipped, so only non-function properties are logged:
// name : ginger chai
// price : 250
// isAvailable : true

// Key Takeaways
// 1. Property Descriptors:
// Default descriptors for object properties are writable: true, enumerable: true, configurable: true.
// You can inspect and modify these using Object.getOwnPropertyDescriptor and Object.defineProperty.

// 2. Behavior of Math.PI signifies the importance of the ability of being able to set Property Descriptors:
// It’s a constant with writable: false, enumerable: false, and configurable: false, so its value cannot be changed.
// Had it been true(the  values of writable, enumerable, and configurable for Math.PI), anyone could change it.

// 3. Enumeration with Object.entries:
// Only enumerable properties are included in the array returned by Object.entries.
// Functions can be skipped by checking typeof value !== 'function'





// **** Understand getter and setter and stack overflow in JavaScript across the three examples with: Classes(modern), Functions(less modern). Objects(old) **************************

// 1. Classes (Modern Approach)
// Code:
// class User {
//     constructor(email, password) {
//         this.email = email; // Setter is called here
//         this.password = password; // Setter is called here
//     }

//     get email() {
//         return this._email.toUpperCase(); // Getter is called when accessing `email`
//     }

//     set email(value) {
//         this._email = value; // `_email` stores the actual value
//     }

//     get password() {
//         return `${this._password}hitesh`; // Getter adds "hitesh" to password
//     }

//     set password(value) {
//         this._password = value; // `_password` stores the actual value
//     }
// }

// const hitesh = new User("h@hitesh.ai", "abc");
// console.log(hitesh.email); // Calls the `get email` method and logs "H@HITESH.AI"

// What’s happening here?
// Constructor:

// When you create an object with new User("h@hitesh.ai", "abc"), the constructor sets email and password.
// The setter methods set email and set password are automatically invoked.
// Getter:

// When you access hitesh.email, the getter method get email runs, transforming the _email value into uppercase before returning it.
// Private-like Variables:

// _email and _password are used internally as private-like properties to avoid infinite recursion.

// the concept of infinite recursion here is directly related to the "Maximum call stack exceeded" or "stack overflow" error. 
// Let's break this down step by step in simple terms to help you understand:
// What is Infinite Recursion?
// When you call a function or method in a way that it keeps calling itself without stopping, it creates an infinite loop. 
// In the context of your code, if the setter method accidentally calls itself over and over, it results in infinite recursion.


// Why Can Infinite Recursion Happen in This Code?
// In your class, you have getter and setter methods for email and password. If the setter method directly modifies the same property that the setter itself is controlling, it would keep calling itself forever.

// Example of Infinite Recursion (What Could Go Wrong):
// set email(value) {
//     this.email = value; // Wrong! This line calls the same `set email` method again.
// }
// What Happens Here?

// When you do hitesh.email = "new value", the set email method is called.
// Inside the set email method, you're trying to set this.email = value, which again triggers the set email method.
// This keeps happening over and over without stopping, causing infinite recursion.
// The JavaScript engine eventually throws a "Maximum call stack exceeded" error because the call stack (which keeps track of function calls) runs out of space.

// How Does Your Code Avoid This Problem?
// You cleverly avoid this issue by using private-like variables (_email and _password):
// set email(value) {
//     this._email = value; // The actual value is stored in `_email`, not `email`.
// }
// Why Does This Work?
// The setter modifies _email (a separate property) instead of email.
// Since _email is not linked to the getter or setter methods, it avoids any recursive calls.
// This design ensures that:
// The getter reads the value from _email.
// The setter writes the value to _email.

// How Is This Related to Stack Overflow?
// Infinite recursion fills up the call stack, a special area of memory used to keep track of active functions.
// If functions keep calling themselves infinitely, 
// the call stack overflows (runs out of memory space), resulting in the "Maximum call stack exceeded" error.



// ********* 2. Functions: Object.defineProperty (Old-School Approach) ***********************
// function User(email, password) {
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase(); // Getter logic
//         },
//         set: function (value) {
//             this._email = value; // Setter logic
//         }
//     });

//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return this._password.toUpperCase(); // Getter logic
//         },
//         set: function (value) {
//             this._password = value; // Setter logic
//         }
//     });
// }

// const chai = new User("chai@chai.com", "chai");
// console.log(chai.email); // Calls the `get email` method and logs "CHAI@CHAI.COM"

// What’s happening here?
// Object.defineProperty:
// Used to define getters and setters on the properties of an object.
// get specifies what happens when you read the property.
// set specifies what happens when you assign a value to the property.

// Why _email and _password?
// Directly using email or password inside their respective get/set methods would cause an infinite loop.

// *********************************** 3. Object Literal (Even Older) **************************

// const User = {
//     _email: 'h@hc.com',
//     _password: "abc",

//     get email() {
//         return this._email.toUpperCase(); // Getter logic
//     },

//     set email(value) {
//         this._email = value; // Setter logic
//     }
// }

// const tea = Object.create(User); // Create a new object that inherits from `User`
// console.log(tea.email); // Calls the `get email` method and logs "H@HC.COM"

// What’s happening here?
// Object with Getter and Setter:
// The get email and set email are defined directly on the object literal User.

// Object.create:
// Creates a new object tea that inherits from the User object.
// When you access tea.email, it looks up the getter on the User object.

// Static Behavior:
// Unlike classes or constructor functions, 
// this approach doesn’t allow dynamic initialization since the properties _email and _password are hardcoded.
