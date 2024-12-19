// ********************** Event Bubbling and Event Propogation *************************************************************************

// Event propagation and Event bubbling, which are fundamental concepts in JavaScript event handling. 
// Let’s dive deep into these and understand the mysterious parameter (true or false) in the addEventListener function.


// What is Event Propagation?
// When you trigger an event (like a click) on an element, it doesn’t just affect that element. 
// Instead, the event "travels" through the DOM tree in two phases:

// 1. Capture Phase (Event Capturing):
// The event starts at the root of the DOM tree and works its way downward to the target element.
// Think of this as the event preparing to act on the target.

// 2. Bubble Phase (Event Bubbling):
// After reaching the target, the event "bubbles" upward through the DOM tree to the root.
// Think of this as the event saying, "Hey, parent elements, do you want to react to me too?"

// The Extra Parameter in addEventListener:
// element.addEventListener('event', callback, useCapture);
// The third parameter (useCapture) determines whether the event listener will run during the capture phase (true) 
// or the bubble phase (false, which is the default).


// How Does it Work?
// Let’s see an example to understand capturing and bubbling phases:

// HTML:
// <div id="grandparent" style="padding: 50px; background-color: lightblue;">
//     Grandparent
//     <div id="parent" style="padding: 30px; background-color: lightgreen;">
//         Parent
//         <div id="child" style="padding: 20px; background-color: lightcoral;">
//             Child
//         </div>
//     </div>
// </div>

// JavaScript:
// document.getElementById('grandparent').addEventListener('click', function () {
//       console.log('Grandparent clicked');
//   }, false); // Bubbling phase

//   document.getElementById('parent').addEventListener('click', function () {
//       console.log('Parent clicked');
//   }, true); // Capturing phase

//   document.getElementById('child').addEventListener('click', function () {
//       console.log('Child clicked');
//   }, false); // Bubbling phase



// Execution of code: Scenario: You Click on the Child Element
// 1. Capture Phase (useCapture = true):
// Event travels down the DOM tree.
// Parent's listener (set with true) triggers during this phase.
// Console Output: Parent clicked.

// 2. Target Phase:
// Event reaches the Child element (where the click occurred).
// Child's listener triggers because it is at the target.
// Console Output: Child clicked.

// 3. Bubble Phase (useCapture = false):
// Event travels up the DOM tree.
// Grandparent's listener (set with false) triggers during this phase.
// Console Output: Grandparent clicked.


// **************** Stopping Propagation ***********************************************************
// Stopping event propagation! Let’s dive into how we can stop the event from propagating through the DOM tree, 
// using stopPropagation() and related methods like stopImmediatePropagation().

// There are scenarios where you may want to prevent an event from propagating further. For example:
// 1. Prevent the event from bubbling up to parent elements.
// 2. Avoid triggering multiple event listeners in the same phase.



// JavaScript provides two key methods for this:
// 1. stopPropagation():

// Stops the event from continuing to propagate in the capture or bubble phase.
// It halts the event from reaching other listeners on parent or ancestor elements.

// 2. stopImmediatePropagation():
// Stops the event from propagating like stopPropagation().
// Additionally, it prevents other listeners on the same element from firing.


// Example: Stopping Event Propagation:
// HTML:
// <div id="grandparent" style="padding: 50px; background-color: lightblue;">
//     Grandparent
//     <div id="parent" style="padding: 30px; background-color: lightgreen;">
//         Parent
//         <div id="child" style="padding: 20px; background-color: lightcoral;">
//             Child
//         </div>
//     </div>
// </div>

// JavaScript:
// document.getElementById('grandparent').addEventListener('click', function () {
//       console.log('Grandparent clicked');
//   });

//   document.getElementById('parent').addEventListener('click', function (e) {
//       console.log('Parent clicked');
//       e.stopPropagation(); // Stops propagation after this point
//   });

//   document.getElementById('child').addEventListener('click', function () {
//       console.log('Child clicked');
//   });



// Step-by-Step Execution
// 1. Click on the Child Element:
// The event starts in the capture phase and travels downward to the child.
// Once the event reaches the target (child), its listener triggers:
// Output: Child clicked.

// 2. Bubbling Phase:
// The event now starts bubbling upward:
// It triggers the Parent's listener.
// Output: Parent clicked.
// The stopPropagation() method is called here, so propagation stops.

// 3. What Happens to Grandparent?
// Since stopPropagation() was called in the parent listener, the event never reaches the grandparent.
// No output from grandparent listene


// Final output on Console:
// Child clicked
// Parent clicked
