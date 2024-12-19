// ***********************************************What is Scope, Global Scope, and block scope**********************
// let a = 300 // Declared in the global scope
// if (true) {
//   let a = 100 // Declared in the block scope of the if statemen
//   const c = 2 // Declared in the block scope of the if statement
//   console.log("INNER: ", a) // Accesses the 'a' from the block scope, so outputs 100
// }
// console.log("Outer: ", a) // Accesses the 'a' from the global scope, so outputs 300
// let and const are block-scoped.
// var is function-scoped, which means it ignores block scope and can "leak" out of {}. 
// (Try replacing let a = 100 with var a = 100 and observe the result)