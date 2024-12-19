//********************************************** While and Do While Loop *************************************************************************
// The while loop is one of the simplest loops in JavaScript. 
// It repeats a block of code as long as the specified condition is true.

// Syntax:
// while (condition) {
//     // Code to execute
// }

// Example:
// Let’s print numbers from 1 to 5 using a while loop:
// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++; // Increment to avoid an infinite loop
// }

// Infinite Loops: Be careful! If you forget to update the condition, the loop can run forever.
// For example:
// let i = 1;
// while (i <= 5) {
//     console.log(i); // No increment, so this runs forever
// }

// The do-while loop is a variation of the while loop that executes the code block at least once, 
// even if the condition is false. Let's break it down:
// Syntax:
// do {
//     // Code to be executed
// } while (condition);

// Example:
// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <= 5);

// Example with User Input:
// Useful for prompting users until they provide valid input:
// let input;
// do {
//     input = prompt("Enter a number greater than 10:");
// } while (input <= 10);
// console.log("You entered:", input);


// Key Difference from while Loop:
// 1. while loop: Checks the condition first, then runs the code if the condition is true.
// 2. do-while loop: Runs the code at least once, then checks the condition.
