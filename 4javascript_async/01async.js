// ********************************** Async JavaScript *******************************************************************************************************************************
// Javascript is a syncronous language, meaning it executes  the code one at a time, which also means that it is single-threaded.
// // JavaScript is Single-Threaded
// JavaScript runs on a single thread, meaning:

// 1. It can execute only one task at a time.
// 2. Other tasks must wait until the current one finishes.
// 3. This thread is called the main thread.

// Analogy for Single Threading
// Imagine you’re at a pizza shop, and there’s only one chef:

// The chef prepares one pizza at a time.
// If one order takes too long (like a complicated pizza), all other orders must wait.
// This can create delays for simpler orders.

// The Problem with Single Threading:
// When a task takes too long to finish (e.g., fetching data from a server), the main thread gets blocked. This means:
// The browser cannot perform other tasks like responding to user clicks or updating the screen.

// Example of Blocking Code:
// console.log("Task 1");

// // Simulating a long-running task
// for (let i = 0; i < 1e9; i++) {}

// console.log("Task 2");

// Explanation:
// Task 2 is delayed until the loop completes, freezing the browser in the meantime.




// Now, lets see how Async JavaScript makes life easier:
// Code:

// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2 (Async)");
// }, 2000);
// console.log("Task 3");

// Explanation:
// Step 1: Console.log("Task 1")
// JavaScript says:
// “Hey, I see a console.log("Task 1"). I’ll print it right away because it’s a simple synchronous task.”
// Output: Task 1


// Step 2: setTimeout()
// 1. JavaScript encounters the setTimeout() function:
// “Oh, you want me to run this callback function after 2 seconds? Alright, I’ll pass it to the browser's timer system. 
// The timer will keep track of the 2 seconds, and once it’s done, it’ll let me know. 
// 2. Meanwhile, I’ll keep going with the rest of the code.”
// The setTimeout function does not block the main thread. It simply registers the timer in the background and moves on.


// Step 3: Console.log("Task 3")
// JavaScript says:
// “Next, I have another console.log("Task 3"). Let me handle this immediately since it’s also synchronous.”
// Output: Task 3


// Step 4: Timer Completes (2 seconds later)
// After 2 seconds, the browser's timer system says:
// “Hey JavaScript, the timer is done! Here’s the callback function you gave me earlier.”
// The callback function (() => console.log("Task 2 (Async)")) is placed into the Task Queue (a waiting area for asynchronous tasks).

// Step 5: Event Loop Checks the Task Queue:
// JavaScript's event loop now steps in to take the callback from Task Queue and throws it in Callstack:
// “Is the main thread free? Oh, it is! Let’s pick up the callback from the Task Queue and execute it.”
// The callback runs: console.log("Task 2 (Async)");
// Output: Task 2 (Async)

// Final Output:
// Task 1
// Task 3
// Task 2 (Async)


// What’s Happening above?
// The main thread handled the synchronous tasks (console.log statements) immediately.
// The setTimeout function handed off its timer to the browser’s timer system, which ran independently of the main thread.
// After 2 seconds, the timer finished, and the event loop ensured the callback executed only when the main thread was free.

// Ephraim if you are reading this, let me tell you there is more Async JS you need to learn that I couldn't write here
// because it was all paper-work stuff but very important theorectical knowledge to understand Async JS. 
// So do visit Hitesh Chaudhary Chai aur Code channel and visit this link (https://youtu.be/Hr5iLG7sUa0?si=Ik4BSABeyPi5gNGy) 
// it will take you to video number 37, and then wacth video 38 too. These two videos explain everything you need to know to understand
// Async JavaScript.


