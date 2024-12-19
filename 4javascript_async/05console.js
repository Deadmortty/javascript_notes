// *********************** We have been using Console a lot, but what it is actually? *******************************************************************
// What is console?
// console is not a part of the JavaScript language itself.
// It’s provided by the environment where JavaScript is running. Example:
// In browsers: The console comes from the browser's Developer Tools (e.g., Chrome’s V8 engine provides it).
// In Node.js: It’s provided by Node’s environment.
// In short: The console is a tool or feature added to the JS runtime environment for debugging and logging.


// Why isn’t console part of JS?
// JavaScript is just a programming language—it doesn’t include runtime tools like console by itself.
// It’s the JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox) that integrates additional objects and 
// features like the console to make JavaScript useful in real-world environments.



// How does the console work?
// When you write:
// console.log('Hello World');

// These steps happen:
// 1. JS Engine Execution:
// The JS engine processes console.log() as an object method call.

// 2. Delegation to the Environment:
// The console object is part of the runtime environment (e.g., browser or Node.js). 
// It delegates the actual logging to that environment.

// 3. Output:
// In the browser: The log appears in the Developer Console of your browser.
// In Node.js: The log appears in your terminal/command line.

// study promises now.