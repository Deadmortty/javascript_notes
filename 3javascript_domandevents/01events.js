// ************************** Events ****************************************************************

// JavaScript events, like click, are actions users perform on a webpage (e.g., clicking a button, typing in a text field). 
// To make your page respond to these actions, you use event listeners.

// What is .addEventListener()?
// It’s a method that lets you attach a specific action (like a click) to an HTML element. 
// Here's the basic syntax:
// element.addEventListener('click', function (e) {
//    
//         });

// The Role of the e (Event Object)
// The parameter e (commonly called event) is an object automatically passed to the callback function by JavaScript. 
// It contains information about the event, like:
// 1. What triggered the event?
// 2. Where did it happen?
// 3. What keys or buttons were used?

// Step-by-Step Example
// Let’s create a basic button and understand how it all works.

// HTML: <button id="myButton">Click Me!</button>

// javascript: 
// // Select the button element
// const button = document.getElementById('myButton');

// // Add a click event listener
// button.addEventListener('click', function (e) {
//     console.log('Button was clicked!'); // Message in the console
//     console.log(e);                    // Logs the entire event object
//     console.log('Target:', e.target);  // Logs the button element itself
// });

// When the button is clicked, the function runs.
// JavaScript automatically provides the event object (e).
// The event object contains everything about the click action. For example:
// 1. e.type → Type of event ("click").
// 2. e.target → The element that triggered the event (our button).
// 3. e.clientX, e.clientY → Mouse coordinates during the click.
// 4. e.preventDefault() 

// Stuff you should know but won't use: e.srcElement: Tells you which element originally triggered the event.
// Useful in older versions of Internet Explorer, but modern browsers prefer e.target.

// 6. e.toElement: In mouse events like mouseover or mouseout, toElement tells you which element the mouse is moving into.
// example: 
// HTML:
// <div id="box1" style="width: 200px; height: 200px; background-color: red;">Box 1</div>
// <div id="box2" style="width: 200px; height: 200px; background-color: blue; margin-top: 10px;">Box 2</div>

// JavaScript:
// document.getElementById('box1').addEventListener('mouseout', function (e) {
//       console.log('Mouse left Box 1 and entered:', e.toElement);
//   });


// Why Is (e) Useful?
// It lets you control the event behavior and extract data. Here's an example of stopping default behavior:

// Example: Prevent Default Behavior:
// HTML: <a href="https://example.com" id="myLink">Go to Example</a>

// javascript:
// const link = document.getElementById('myLink');

// // Stop the link from opening
// link.addEventListener('click', function (e) {
//     e.preventDefault(); // Stops the link's default behavior
//     console.log('Default behavior stopped!');
// });
