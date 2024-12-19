// ********************************** What is async/await? ****************************************************************
// async/await is a modern way to work with Promises in JavaScript.
// It makes asynchronous code look synchronous, which makes it easier to read and write.
// It was introduced in ES8 (ES2017).

// Key Points:
// 1. async turns a function into a Promise.
// 2. await pauses the function execution until a Promise resolves or rejects.
// 3. try...catch handles errors, just like with synchronous code.


// Example: Fetching Data with async/await
// Let’s simulate an API call where:
// 1. We fetch user data.
// 2. Process the data.
// 3. Handle any errors.

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching user data...");
//     setTimeout(() => {
//       const success = true; // Change this to false to test error handling
//       if (success) {
//         resolve({ id: 1, name: "Alice" });
//       } else {
//         reject("Failed to fetch user data.");
//       }
//     }, 1000);
//   });
// }

// // Async function to handle the Promise
// async function getUserData() {
//   try {
//     // Fetch user data
//     const user = await fetchUserData();
//     console.log("User Data Received:", user);

//     // Process the data
//     const processedName = user.name.toUpperCase();
//     console.log("Processed Name:", processedName);

//     // Final message
//     console.log("All tasks completed successfully!");
//   } catch (error) {
//     console.log("Error:", error); // Handles errors
//   }
// }

// getUserData();

// Explanation:
// fetchUserData() is a function that returns a Promise.
// The setTimeout simulates an API call that takes 1 second.
// If success is true, it resolves the Promise with { id: 1, name: "Alice" }.
// If success is false, it rejects the Promise with "Failed to fetch user data.".

// The async keyword makes getUserData() an asynchronous function.
// await fetchUserData():
// Pauses the function until the Promise resolves.
// Assigns the resolved value (user data) to the user variable.
// If the Promise is rejected, control jumps to the catch block.
// If fetchUserData() fails (calls reject), the error is caught in the catch block.
// This prevents the program from crashing.
