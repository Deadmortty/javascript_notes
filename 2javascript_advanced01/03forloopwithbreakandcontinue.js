// ************************************* For Loops with Breaks ************************************************************************************************************************
// For Loop with break and continue:
// The break and continue keywords are used to control how loops behave. 
// They give you flexibility when deciding what happens during each iteration.

// 1. BREAK: 
// 1. Purpose: Stops the loop immediately and jumps out of it.
// 2. Use Case: When you’ve found what you’re looking for or want to stop early.

// Example: 
// let numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 4) {
//         console.log("Found 4, stopping the loop!");
//         break; // Exit the loop
//     }
//     console.log("Checking:", numbers[i]);
// }

// Output: 
// Checking: 1
// Checking: 2
// Checking: 3
// Found 4, stopping the loop!

// CONTINUE:
// 1. Purpose: Skips the current iteration and moves to the next one.
// 2. Use Case: When you want to ignore certain values but keep looping.

// Example: 
// for (let i = 1; i <= 6; i++) {
//     if (i % 2 === 0) {
//         continue; // Skip the even numbers
//     }
//     console.log("Odd number:", i);
// }

// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5

// Difference Between break and continue:
// break	                                 continue
// Stops the loop completely.	Skips the current iteration only.
// Exits the loop when executed.	Moves to the next iteration.

// Lets see how break and continue works in a loop together: 
// Example:
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log("Skipping even number:", i);
//         continue; // Skip even numbers
//     }
//     if (i > 7) {
//         console.log("Reached limit, stopping the loop.");
//         break; // Stop the loop if i > 7
//     }
//     console.log("Odd number:", i);
// }


// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Reached limit, stopping the loop.

