// ************* Now we will discuss few things soley for knowledge purposes ************************************************************************
// What is AJAX?
// AJAX stands for Asynchronous JavaScript And XML. 
// It is a technique to send and receive data from a server without reloading the entire webpage.
// Before AJAX: Entire web pages used to refresh to get updated data.
// With AJAX: Only specific parts of a webpage are updated, making apps much faster and smoother.

// What is XMLHttpRequest?
// XMLHttpRequest is the core technology behind AJAX. It allows you to send HTTP requests (to get or post data) 
// to a server from a webpage.
// Even though "XML" is in the name, it can handle JSON too, which is now the standard format for APIs.


// JSON (Quick Recap):
// JSON: JavaScript Object Notation. It's a lightweight data format that looks like an object in JavaScript.
// Why JSON?:
// It's easy to read for humans.
// It’s lightweight (less data to transfer).
// JavaScript can easily convert JSON into usable objects. This is easier to work with than XML. For example:
// JSON CODE:
// {
//       "name": "John",
//       "age": 25,
//       "city": "New York"
//     }
// XLM CODE:
// <person>
//   <name>John</name>
//   <age>25</age>
//   <city>New York</city>
// </person>

// How XMLHttpRequest Works
// When sending an API request using XMLHttpRequest, we deal with:

// 1. Request Initialization
// 2. Request Sending
// 3. Tracking Request States (using readyState).
// 4. Handling Response.



// readyState and Its 5 States:
// The readyState property of XMLHttpRequest tells you about the current state of the request. It has 5 possible values:

// readyState	                                   State Description
// 0	                                         UNSENT: Request is created but n opened.
// 1	                                         OPENED: Request has been opened.
// 2	                                         HEADERS_RECEIVED: Request is sent. Headers are received.
// 3	                                         LOADING: Data is being downloaded.
// 4	                                         DONE: The request is completed. Response is ready.


// Let's take an example:
// // 1. Create a request
// const xhr = new XMLHttpRequest();

// // 2. Prepare the request
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

// // 3. Track progress of the request
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) { // DONE
//     if (xhr.status === 200) { // Success
//       const response = JSON.parse(xhr.responseText); // Convert to object
//       console.log('Response Data:', response);
//     } else {
//       console.log('Error:', xhr.status);
//     }
//   }
// };

// // 4. Send the request
// xhr.send();


// Explanation of code above:
// What is open()?  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
// Let’s break this line into 3 parts:
// 1. 'GET':
// This is the HTTP method.
// "GET" tells the server: "Hey! I want to fetch (or read) some data from you."
// Other common HTTP methods are:
// POST: Send data to the server (like submitting a form).
// PUT: Update existing data.
// DELETE: Remove data.


// 2. URL string:(it could be a variable too that stores this URL string):
// This is the URL of the API endpoint.
// What does this mean?
// It's like giving a full address to the server.
// https://jsonplaceholder.typicode.com → The domain (fake server for practice).
// /posts/1 → Tells the server: "Give me the first post."

// 3. true:
// This makes the request asynchronous.
// "Asynchronous" means the request will happen in the background. Your webpage won’t freeze or stop while waiting for the data.


// what is xhr.send()?
// This sends the actual request to the server.
// It tells the browser: "Okay, I’m ready. Go get the data!"

// For a GET request:
// You don’t need to send any additional data in send().
// It’s like saying: "Just get what I asked for in the open()."

// However, for a POST request:
// You can pass data into send() like this:
// xhr.open('POST', 'https://example.com/posts', true);
// const newPost = JSON.stringify({ title: 'Hello', body: 'World' });
// xhr.send(newPost);

// Step-byStep recap of code:
// 1. xhr.open() → Prepares the request (method, URL, async).
// 2. xhr.send() → Sends the request to the server.
// 3. onreadystatechange → Tracks the readyState changes constantly.
// 4. At readyState === 4:
// 5. xhr.responseText → Server’s response in string form.
// 6. JSON.parse() → Converts it into a usable object.


// Key Points for You to Remember:
// 1. open('METHOD', 'URL', true):

// 2. METHOD: What you want to do (GET, POST, etc.).
// URL: Address of the server or API.
// true: Makes it asynchronous.
// send(): Actually sends the request.

// 3. JSON.parse(): Converts response strings to objects.

