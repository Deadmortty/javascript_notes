// ************************************ What are Maps, and how for..of loops is used with Map *************************************************************************
// What is a Map?
// A Map is a collection of key-value pairs in JavaScript. 
// Unlike objects, Maps can use any data type (not just strings or symbols) as keys.

// Key Features of Maps
// 1. Keys Can Be Any Type:
// Keys in a Map can be objects, arrays, functions, or primitive values like strings and numbers.

// 2. Preserves Order:
// The order of keys is the same as their insertion order.

// 3. Map-Specific Methods:
// Maps come with methods like .set(), .get(), .has(), and .delete().

// Creating a Map
// You create a Map using the new Map() constructor:
// Examole:
// const myMap = new Map();

// Basic Operations
// 1. Adding Key-Value Pairs
// Use .set(key, value) to add entries:

// Example:
// const userMap = new Map();
// userMap.set("name", "Ali");
// userMap.set("age", 25);
// userMap.set("isStudent", true);

// console.log(userMap);

// Output: 
// Map(3) { 'name' => 'Ali', 'age' => 25, 'isStudent' => true }



// 2. Retrieving Values
// Use .get(key) to get the value of a specific key:

// Example:
// const userMap = new Map();
// userMap.set("name", "Ali");
// userMap.set("age", 25);
// userMap.set("isStudent", true);

// console.log(userMap.get("name")); 

// Output: Ali

// 3. Checking if a Key Exists
// Use .has(key) to check if a key is present:

// Example:
// console.log(userMap.has("age")); 
// // Output: true

// 4. Deleting a Key
// Use .delete(key) to remove a specific key-value pair:

// Example:
// userMap.delete("isStudent");
// console.log(userMap);
// Output: Map(2) { 'name' => 'Ali', 'age' => 25 }


// 5. Size of the Map
// Use .size to find the number of key-value pairs:

// Example:
// console.log(userMap.size);
// Output: 2




// Now, lets see how a for..of loop is used to iterate over maps:
// Maps are iterable, so you can loop through them easily using for..of or forEach().

// For example, iterating over keys and values:
// const userMap = new Map();
// userMap.set("name", "Ali");
// userMap.set("age", 25);
// userMap.set("isStudent", true);

// for (const [key, value] of userMap) {
//     console.log(`${key}: ${value}`);
//   }
// Output:
// name: Ali
// age: 25

// Explanation:
// When you're using a for...of loop with a Map, you are actually iterating over its entries. 
// In Maps, every entry is a key-value pair stored as an array.
// Every entry in a Map is like a little package(arrays) that contains two things: the key and the value.

// What does [key, value] mean?
// The part [key, value] inside the loop is a destructuring assignment. 
// It’s just a shortcut way to unpack those two things (key and value) from each entry.
// Think of it like this:
// Imagine a box contains two items: a key and a value.
// The [key, value] is a way to grab both items at once and give them names (key for the first item, and value for the second).
// You could have given any name because it's arbituary.

// Without destructuring:
// If you didn’t use [key, value], you’d have to deal with the entire "box" (entry) first and then open it manually. 
// Here's how it looks:
// for (const entry of userMap) {
//   console.log(entry); 
// Outputs: ["name", "Ali"], ["age", 25], ["isStudent", true]
// }

// The entry here is an array for each pair, e.g., ["name", "Ali"]. 
// If you want to access the key and value separately, you’d do:
// for (const entry of userMap) {
//   const key = entry[0]; // First item in the array is the key
//   const value = entry[1]; // Second item in the array is the value
//   console.log(`${key}: ${value}`);
// }

// With destructuring:
// The [key, value] is a faster and cleaner way to handle this:
// for (const [key, value] of userMap) {
//   console.log(`${key}: ${value}`);
// }

// Here’s what happens step-by-step:
// The for...of loop takes one entry (like ["name", "Ali"]) at a time.
// The [key, value] destructures the entry into:
// key gets "name".
// value gets "Ali".
// Then, you use key and value in the loop body.


//   Why Use Maps Instead of Objects?
//   1. Maps allow keys of any data type, however no duplicate values, only unique values. 
//   2. Objects only support strings and symbols as keys.
//   3. Maps maintain the insertion order of keys.
//   4. Easier iteration with built-in methods like for..of.