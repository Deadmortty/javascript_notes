// ************* lexical scoping and closures step by step using your examples. ****************************************************************************************
// Lexical Scoping:
// Lexical scoping means that the scope (or availability) of a variable is determined by its position in the source code. 
// A function can access variables defined in its outer scope (where the function is written) but not vice versa.

// Example 1: init function:
// function init() {
//     let name = "Mozilla"; // `name` is scoped to `init`
//     function displayName() { // Inner function
//         console.log(name); // Accessing `name` from outer scope
//     }
//     displayName();
// }
// init();

// Explanation:
// name is declared inside the init function and is available to displayName because of lexical scoping.
// The function displayName is defined inside init, so it can "see" and access variables from init.
// When you call displayName, it logs Mozilla.

// Variables and Scope in JavaScript:
// A variable declared in a function is only accessible within that function or its nested functions.
// A nested function inherits the scope of its parent function.


// Example 2: Outer and Inner Functions:
// function outer() {
//     let username = "hitesh"; // Defined in `outer` scope
//     console.log("OUTER");

//     function inner() {
//         let secret = "my123"; // Defined in `inner` scope
//         console.log("inner", username); // Accessing `username` from `outer`
//     }

//     function innerTwo() {
//         console.log("innerTwo", username); // Accessing `username` from `outer`
//         console.log(secret); // Error: `secret` is not defined here
//     }

//     inner();
//     innerTwo();
// }

// outer();
// console.log("TOO OUTER", username); // Error: `username` is not defined here


// Explanation:
// 1. username:
// Defined in outer, so it is accessible to inner and innerTwo.

// 2. secret:
// Defined inside inner, so it is only accessible in inner and not in innerTwo.

// 3. Global Scope:
// username and secret are not defined in the global scope, so referencing them outside outer results in an error.

// 4. Error in innerTwo:
// innerTwo tries to access secret, which is not defined in its scope or any outer scope accessible to it.

// matlb bhai(inner function and and inner function) bhai apas mei icecream share nai krtay par parents(outer function) de 
// detay hai apni icecream bacho ko.

// *************************** Closures: *************************
// A closure is formed when a function "remembers" the variables from its lexical scope even after the outer function has returned.

// Example 3: Closure with makeFunc
// function makeFunc() {
//     const name = "Mozilla"; // Local to `makeFunc`
//     function displayName() {
//         console.log(name); // Accessing `name` from `makeFunc`
//     }
//     return displayName; // Returning the inner function
// }

// const myFunc = makeFunc(); // `makeFunc` is called, and `displayName` is returned
// myFunc(); // Calls `displayName` and logs "Mozilla"


// Explanation:
// When makeFunc is called:
// It creates a new scope with name set to "Mozilla".
// The displayName function is defined in this scope.

// Closure:
// When makeFunc returns displayName, the inner function "remembers" the scope of makeFunc, even though makeFunc has finished executing.
// This "memory" of the outer scope is what we call a closure.

// When myFunc is invoked:
// It calls the displayName function, which still has access to name from makeFunc's scope.

// Key Points
// Lexical Scoping:
// Functions can access variables from their parent scope at the time they are defined.

// Closures:
// When an inner function "remembers" variables from its parent function's scope, even after the parent function has finished execution.

// Scope Rules:
// A variable is accessible only within its own scope and scopes nested within it.

// Let's see a practical example of Closure:
// how closures can be used in practical situations like event handling!

// 1. Original Code Without Closure
// document.getElementById("orange").onclick = function () {
//     document.body.style.backgroundColor = `orange`;
// };
// document.getElementById("green").onclick = function () {
//     document.body.style.backgroundColor = `green`;
// };

// Here, we manually assign a different function for each button to change the background color.
// Each button requires a separate function, leading to repetitive code. Repetitive coding is a sin lol

// 2. Refactored Code Using a Closure:
// function clickHandler(color) {
//     // The outer function `clickHandler` takes a `color` argument.

//     return function () {
//         // Inner function "remembers" the `color` from `clickHandler`'s scope.
//         document.body.style.backgroundColor = `${color}`;
//     };
// }

// // Assign the returned function (closure) as the event handler.
// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");

// How this new code uses Closures:
// 1. Outer Function clickHandler:
// Takes a parameter color and creates a new scope where color is defined.
// Returns a new function that "remembers" the value of color from the clickHandler scope.

// 2. Returned Inner Function (Closure):
// The returned function is assigned to the onclick event of each button.
// Even after clickHandler has finished executing, the returned function remembers the color value it was created with.

// 3. Event Assignment:
// clickHandler("orange") creates a function where color is "orange".
// clickHandler("green") creates a function where color is "green".

// Step-by-Step Execution:
// For orange Button:
// clickHandler("orange") is called:

// A function is created that changes document.body.style.backgroundColor to "orange".
// This function "remembers" that color is "orange".
// This returned function is assigned as the onclick handler for the "orange" button.

// When the button is clicked, the closure executes, and document.body.style.backgroundColor becomes "orange".


// Why Use Closures Here?
// Reusability: Instead of writing separate functions for each button, you define a single clickHandler function.
// Clean Code: Reduces repetition and makes the code easier to maintain.
// Dynamic Behavior: The color argument can be changed dynamically, allowing for flexible behavior without modifying the code.

