// ************************************* nullish coalescing operator (??) ***************************************************************************************************
// The nullish coalescing operator (??) is like a backup plan for values in JavaScript. 
// It helps you pick a value if the first one is either null or undefined. Think of it as saying:
// "If the first thing is missing (null/undefined), use the second thing!"
// Syntax:
// let result = value1 ?? value2;
// If value1 is not null or undefined, the result will be value1.
// If value1 is null or undefined, the result will be value2.
// Examples in Everyday Terms:
// Example 1: Default Greeting
// If someone doesn't provide their name, use "Guest" instead.

// let name = null; // No name provided
// let greeting = name ?? "Guest";
// console.log(greeting); // Output: Guest


// Example 2: Avoid Zero Confusion
// It works better than the || (OR) operator when 0 is a valid value.

// let userScore = 0; // Score is 0, a valid number
// let finalScore = userScore ?? 10; // Use userScore if it's not null/undefined
// console.log(finalScore); // Output: 0

// If you used || here:
// let finalScore = userScore || 10;
// console.log(finalScore); // Output: 10 (Incorrect, because `0` is falsy)

// Why Is It Useful?
// 1. When you want to handle "missing" values gracefully.
// 2. Avoids issues with falsy values like 0, '', or false.
// 3. Cleaner, more readable code compared to longer if-else checks
