// What is fetch()?
// The fetch() method is a modern way to make HTTP requests to a server in JavaScript. It is:
// Built-in (no need to install any libraries).
// Based on Promises, making it clean and easy to use.
// Used for sending and receiving data, typically in JSON format.

// Example:
// fetch('https://api.github.com/users/hiteshchoudhary').then((respone) => {
//   return respone.json()
// }).then((data)=>{
//   console.log(data);
// }).catch((error)=> {
//   console.log(error)
// })


// Explanation: 
// fetch() is a function that takes a URL as its argument.
// It sends a GET request to the given URL (by default).
// fetch() returns a Promise that resolves to a Response object.

// The response Object
// When the fetch() request is successful, the Promise resolves with a response object.

// .then((response) => {
//   return response.json();
// })

// Here in the above code:
// The response object contains metadata about the server's response (like status, headers, etc.) and the actual body content.
// response.json() is a built-in method that reads the body content and parses it into JSON


// Full Flow of Execution:
// 1. Request: fetch() sends a request to the URL: https://api.github.com/users/hiteshchoudhary.
// 2. Response: The server sends a response back. The Promise resolves with the response object.
// 3. Parse JSON: response.json() extracts the body of the response and converts it into a JavaScript object.
// 4. Data Handling: The JSON object is passed into the next .then(), where we can access and use it.
// 5. Error Handling: If any step fails (e.g., network error or invalid JSON), the error is caught in .catch().


// is fetch inherently a Promise?! Yes. 
// What Does “Inherently a Promise” Mean?
// When you call fetch(), it automatically returns a Promise.
// You don’t need to manually wrap it inside a new Promise() because fetch is designed to return a Promise.

// Why Does fetch() Return a Promise?
// The reason fetch() is built to return a Promise is because:
// Making a network request (like calling an API) takes time.
// JavaScript doesn’t want to block the execution of other code while waiting for the server’s response.
// Promises allow us to handle the result (success or failure) asynchronously.

// Key Takeaway
// 1. fetch() inherently returns a Promise.
// 2. The Promise represents the result of the network request (it’s either resolved or rejected).
// 3. This is why you can use .then(), .catch(), or async/await to handle its result.