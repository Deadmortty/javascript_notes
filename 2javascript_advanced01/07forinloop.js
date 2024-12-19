// ************************************* For..in Loop *************************************************************************************************************************
// The for..in loop is used to iterate over the keys (properties) of an object in JavaScript. 
// It's different from for..of, which works with iterable objects like arrays. 
// The for..in loop iterates through all enumerable properties of an object.
// It returns keys (or property names), which can then be used to access values.

// Example 1: Iterating Over Object Properties
// const user = { name: "Ali", age: 25, city: "Karachi" };

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// // Output:
// // name: Ali
// // age: 25
// // city: Karachi

// Explanation: 
// You may have a question like "Does the key-value pair become a small array temporarily?"
// The answer is No, unlike Maps, the for...in loop does NOT automatically work with key-value pairs. 
// It only works with keys. There’s no array involved behind the scenes. Here’s what’s actually happening:

// The key is a string that represents the property name of the object (e.g., "name" or "age").
// The value is accessed dynamically using bracket notation (user[key]), where:
// user[key] means: "Look inside the object user and get the value of the property whose name is the current value of key."

// Why do we use user[key] instead of user.key?
// Because the key variable is dynamic:
// You don’t know the exact property name ahead of time; the loop assigns it at runtime.
// Dot notation (user.key) would look for a literal property called "key", not the actual property name stored in the key variable.

// Main Difference from Maps:
// Unlike for...of with Maps, there’s no entry array or destructuring here. 
// You're only given the key, and you have to manually access the value using user[key].