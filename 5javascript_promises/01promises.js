// ************************************* Promises ****************************************************************************************************************************
// What are Promises?
// Promises in JavaScript are a way to handle asynchronous operations. They solve the problem of callback hell and make asynchronous code easier to read and manage.

// Promise Definition:
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous task and its resulting value.


// The History of Promises:
// Before Promises, developers used callbacks to handle asynchronous tasks. 
// However, callbacks could become messy and hard to manage. This issue is known as callback hell: For example:

// setTimeout(function () {
//       console.log("Step 1");
//       setTimeout(function () {
//         console.log("Step 2");
//         setTimeout(function () {
//           console.log("Step 3");
//         }, 1000);
//       }, 1000);
//     }, 1000);

// The Problems with above code's callbacks:
// Pyramid of Doom: Nested callbacks make the code hard to read.
// Error Handling: Managing errors is difficult with multiple callbacks.
// To solve this, Promises were introduced in ES6.


// Promise Syntax:
// let promise = new Promise(function (resolve, reject) {
//       // Do some task (e.g., fetching data)
//       let success = true;

//       if (success) {
//         resolve("Task completed successfully!"); // Task successful
//       } else {
//         reject("Task failed."); // Task failed
//       }
//     });

//     // Using the Promise
//     promise
//       .then(function (result) {
//         console.log(result); // Runs if resolved
//       })
//       .catch(function (error) {
//         console.log(error); // Runs if rejected
//       });


// Take a real simple example:
// const foodDelivery = new Promise(function (resolve, reject) {
//   console.log("Ordering food...");

//   let deliverySuccess = true; // Change this to false to simulate failure.

//   if (deliverySuccess) {
//     resolve("Food is delivered! 🍔");
//   } else {
//     reject("Delivery failed. 😢");
//   }
// });

// // Handling the Promise
// foodDelivery
//   .then(function (successMessage) {
//     console.log("Success:", successMessage);
//   })
//   .catch(function (errorMessage) {
//     console.log("Error:", errorMessage);
//   });

// You can notice in the above code that we first created a Promise and then we handle/comsume it.
// Explaining code Step-by-Step:
// Creating a Promise:
// let promise = new Promise(function (resolve, reject) {
//   // Do some task
//   let success = true;

// The new Promise creates a Promise object.
// The executor function: (function (resolve, reject)), runs immediately when the Promise is created.
// resolve: This a reference to a function resolve(), which runs automatically if the task if successful.
// reject: This a reference to a function reject(), which runs automatically if the task Fails.

// If deliverySuccess is true, the resolve() function is called. The string "Food is delivered! 🍔" is passed to 
// the .then(successMessage), note that successMessage placeholder now holds a string from resolve(). You could have passsed 
// anything, an emoty Object, an Array, you name it. Same happes when reject is called, the difference is, this time .cacth is involved.
// If deliverySuccess is false, the reject() function is called.

// Now the 2nd part is to handle this Promise that we created.

// Handling Success and Failure:
// then() runs when resolve() is called (success).
// catch() runs when reject() is called (failure)

// // ***************** 3 States of Promises *******************************

// 1. Pending State:
// What is it?
// When a Promise is first created, it starts in the pending state.
// At this stage, the task (asynchronous operation) is still in progress.
// Key Point:
// The Promise hasn’t resolved (success) or rejected (failure) yet.

// 2. Fulfilled State:
// What is it?
// When the task inside the Promise is resolved(successful), the state changes to fulfilled.
// How does it happen?
// The resolve() function is called.
// What happens next?
// The .then() method runs to handle the result (success message or data).

// 3. Rejected State:
// What is it?
// When the task is rejected(fails) (an error happens), the state changes to rejected.
// How does it happen?
// The reject() function is called.
// What happens next?
// The .catch() method runs to handle the error.


// Quick Recap:
// State	                    Description	                               How?	                           Next Step
// Pending:                  Promise is created, task is pending	      Default state	                  Waiting for task
// Fulfilled:                Task succeeded	                            Call resolve()	                Runs .then()
// Rejected:                 Task failed	                              Call reject()                   Runs .catch()


