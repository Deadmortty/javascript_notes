// ******************* Advanced or High Order Array Loops( will learn: For..in, For..Each, and forEach Loop) ******************************************************************************************************************
// What is the for..of Loop?
// 1. It iterates through values of an iterable object (not indices).
// 2. Ideal for working with arrays or any iterable collection where you want to directly access the elements.

// Syntax:
// for (const element of iterable) {
//     // Code to execute
//   }

// Example 1: Iterating Over an Array:
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// Output:
// apple
// banana
// cherry

// Example 2: Iterating Over a String
// Strings are iterable, so you can loop through each character:
// const word = "JavaScript";
// for (const char of word) {
//   console.log(char);
// }
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

// Difference Between for..of and for..in
// for..of: Iterates over values.
// for..in: Iterates over keys or indices.