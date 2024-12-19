// ************************ What is Promise Chaining? *****************************************
// Promise chaining means using multiple .then() methods one after another.

// Each .then() runs after the previous one resolves.
// The result of one .then() can be passed to the next .then().

// Chaining Example
// Let’s simulate a scenario where you:

// 1. Fetch user data.
// 2. Process the user data.
// 3. Save the processed data.

// let fetchData = new Promise(function (resolve, reject) {
//   console.log("Fetching data...");
//   setTimeout(function () {
//     resolve({ id: 1, name: "Alice" }); // Simulating user data
//   }, 1000);
// });

// // Promise chaining starts here
// fetchData
//   .then(function (user) {
//     console.log("Data received:", user);
//     return user.name.toUpperCase(); // Process data (convert name to uppercase)
//   })
//   .then(function (processedName) {
//     console.log("Processed Name:", processedName);
//     return `Saving user: ${processedName}`; // Simulating save action
//   })
//   .then(function (saveMessage) {
//     console.log(saveMessage);
//     console.log("All tasks completed!");
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });

// Explanation:
// We create a Promise called fetchData.
// setTimeout simulates an API call or data fetch, which takes 1 second.
// After 1 second, we call resolve() with the simulated user data: { id: 1, name: "Alice" }.


// First .then(): 
// The first .then() receives the result of resolve() as the user parameter.
// It logs the data:
// Data received: { id: 1, name: "Alice" }
// The return statement sends the processed data (user.name.toUpperCase()) to the next .then().

// Second .then():
// The second .then() receives the processed data (processedName) from the previous .then().
// It logs: 
// Processed Name: ALICE
// The return statement passes a message ("Saving user: ALICE") to the next .then().


// Third .then():
// The third .then() receives the saveMessage:
// Saving user: ALICE

// It logs the save message and completes the task:
// All tasks completed!

