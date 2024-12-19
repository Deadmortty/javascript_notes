// ************************************** DOM Manipulation *********************************************************************************************************************

// ************ What is the DOM? **************************************************** 
// Think of the DOM as a bridge between your HTML and JavaScript. It's like JavaScript saying:
// "Hey, HTML! I see you've got some nice tags and content there. Let me tweak them for you in real-time!"

// In more technical terms:
// DOM (Document Object Model): A tree-like structure where every element in your HTML is a "node."
// Example: Your <html> is the root, <head> and <body> are branches, and <p>, <div>, etc., are leaves.


// ********************** Accessing the DOM: *****************************************
// JavaScript provides methods to grab elements from the DOM. Let’s start simple: There are 4 main methods 
// that you will use to access any element from the document. 
// document: It's the gateway to your DOM. Everything starts here.

// Methods to Select Elements:
// 1. By ID: Use case: When an element has a unique identifier.
// Example: <div id="myId">Hello</div>
// let element = document.getElementById('myId');
// console.log(element);

// 2. By Class:
// Example: <div class="myClass">Hello</div>
// let elements = document.getElementsByClassName('myClass');
// console.log(elements); // Outputs a live HTMLCollection
// Returns: A collection (like an array) of all matching elements.

// 3. By tag Name:
// Use case: When you want all elements of a specific tag, like <p>.
// let elements = document.getElementsByTagName('p');
// console.log(elements);

// 4. The Newer, Powerful Way (querySelector):
//    1. For a single element:
//    let element = document.querySelector('.myClass'); // Selects the first match

//    2. For multiple elements:
//    let elements = document.querySelectorAll('.myClass');
//     console.log(elements); // Outputs a NodeList


// ********************* Modifying the DOM *********************************************
// Now let’s talk about manipulating these elements:
// 1. Change Text:
//  1. Inner Text: Updates only visible text.
//  let para = document.getElementById('myPara');
//  para.innerText = "New Text!";

//  2. Inner HTML: Can add tags too.
//  para.innerHTML = "<strong>Bold Text!</strong>";

// 2. Manipulating Attributes:
//   1. How to Set attributes:
//    let img = document.querySelector('img');
//    img.setAttribute('src', 'newImage.png');
// Direct Property Access:
//   img.src = 'newImage.png';


// 3. Change Style/CSS:
// Use the style property.
// let box = document.querySelector('.box');
// box.style.backgroundColor = 'blue';
// box.style.fontSize = '20px';

// ***************************** Adding & Removing Elements ******************************
// You can create and destroy elements dynamically.

// 1. Create an Element:
// let newDiv = document.createElement('div');
// newDiv.innerText = "I'm a new Div!";
// document.body.appendChild(newDiv);
// Explanation in case you did not understand appendChild():
// appendChild is a method in JavaScript used to add a new element (or "node") to the DOM.
// It inserts the specified element as the last child of a parent element.
// document.body.appendChild(newDiv);:
// Adds the newDiv element as the last child of the <body> element in your HTML document.
// It’s now visible on the webpage.

// 2. Remove an Element:
// let removeMe = document.getElementById('removeMe');
// removeMe.remove();

// ****************** Repitive Codes, and how to avoid them. ******************************************************************************************************

// One way you can avoid repitetive coding is by wrapping all your hardwork into a 
// function that does it all for you whereever you call it.
// Let’s say you need to add text to a <div> multiple times in different places. Without a function, 
// your code might look like this:
// // First time
// const div1 = document.getElementById('div1');
// const text1 = "Hello, this is div1!";
// const addText1 = document.createTextNode(text1);
// div1.appendChild(addText1);

// // Second time
// const div2 = document.getElementById('div2');
// const text2 = "Hello, this is div2!";
// const addText2 = document.createTextNode(text2);
// div2.appendChild(addText2);

// // Third time
// const div3 = document.getElementById('div3');
// const text3 = "Hello, this is div3!";
// const addText3 = document.createTextNode(text3);
// div3.appendChild(addText3);

// You had to write 3 times the same code..which is not very efficient. 
// As you can see, the same logic is repeated for every <div>. This is repetitive code, and we can optimize it by using a function.

// Optimized Code (Wrapped in a Function):
// Now, let's wrap this code in a function to reuse it for any <div>.
// function updateOrCreateDiv(div, text) {
//       // If a div is provided, update its text
//       if (div) {
//         const addText = document.createTextNode(text);
//         div.appendChild(addText);
//       } else {
//         // If no div is provided, create a new div and add text
//         const newDiv = document.createElement('div');
//         const addText = document.createTextNode(text);
//         newDiv.appendChild(addText);
//         document.body.appendChild(newDiv); // Add the new div to the page
//         return newDiv; // Return the new div for later use
//       }
//     }

// Step-by-Step Breakdown: Explanation of the above function:
// 1. Function Definition:
// function updateOrCreateDiv(div, text): This function takes two parameters:
// div: A reference to an existing <div>, or null if no <div> is provided.
// text: The text you want to add to the div.

// 2. Updating Existing Div:
// If a div is provided (not null), we create a text node with the provided text and append it to the given div

// 3. Creating a New Div (if no div is provided):
// If no div is passed, we create a new <div> element, add the text, and append it to the body of the document.

// *************************************************************************************************************

// Example 2: Using Loops to Automate Background Colors for <ul> Children
// Let’s automate the process of changing background colors of list items inside a <ul> element using a loop.

// Repetitive Code (Before Looping):
// Without a loop, you would manually change the background color for each <li> in the list:
// const list = document.getElementById('myList');
// // Manually set background color for each <li>
// const item1 = list.children[0];
// item1.style.backgroundColor = 'red';

// const item2 = list.children[1];
// item2.style.backgroundColor = 'blue';

// const item3 = list.children[2];
// item3.style.backgroundColor = 'green';

// const item4 = list.children[3];
// item4.style.backgroundColor = 'orange';


// Optimized Code (Using a Loop):
// Now, let's use a loop to automatically change the background color for all the <li> elements inside a <ul>.
// const myList = document.getElementById('myList');
// const colors = ['red', 'blue', 'green', 'orange']; // Crayon box

// // Loop through each <li> in the <ul> and assign a color
// for (let i = 0; i < myList.children.length; i++) {
//   const child = myList.children[i]; // Get each <li>
//   child.style.backgroundColor = colors[i % colors.length]; // Cycle through the colors
// }



// Example Walkthrough with 6 <li> Items:
// If the HTML is:

// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
//   <li>Item 4</li>
//   <li>Item 5</li>
//   <li>Item 6</li>
// </ul>


// the above loop would do something like:
// The loop would output this:

// i = 0: 0 % 4 = 0 → 'red'
// i = 1: 1 % 4 = 1 → 'blue'
// i = 2: 2 % 4 = 2 → 'green'
// i = 3: 3 % 4 = 3 → 'orange'
// i = 4: 4 % 4 = 0 → 'red'
// i = 5: 5 % 4 = 1 → 'blue'


