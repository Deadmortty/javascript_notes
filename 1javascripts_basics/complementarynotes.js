 // Sort() method of Arrays:

//num.sort((a, b) => a -b)// descending order
//num.sort((a, b) => b -a) ascending order

//loops in array:

//1. Array.from : Used to create an array from any other object/String.
// e.g: 
// let name = 'Ephraim';
// let result = Array.from(name); we are making a array from the original initialized string.
// console.log(result) this will give you an output that will have converted 'Ephraim' into something like 
// [E, p, h, r, a, i, m]

//2. for..of loop in array:
// Now let's do an example, and define an array and then we will use for..of loop to print the element of that array one by one.
// let numbers = [4, 7, 2, 9, 3]
// for (let i of numbers){
// console.log(i)} , we initialized a placeholder by the name of i that will hold the value for a brief period of time 
//as the for..of loop iterate over the array element one by one and prints them. This for..of loop is a much easier 
//and widely used than for loop because who wants to write so much extra code of for..loop.

//3. for..in loop in array:
// Another shortcut that makes our lives easier(but it's not as widely used as for..of loop) and give us an option to loop 
//through an array without having to write extra code is this for..in loop. 
//However, the difference between for..of, and for..in is that that
//for..in loops just prints the keys(which are just indexes starting from 0)from that array in question. 
//On the other hand, for..of loop prints the actual values of the array as we have already seen.
// e.g:
// let numbers = [4, 7, 2, 9, 3]
//for (let i in numbers){
// console.log(i)} this would print all the keys in the array and your output will look something like:
//0
//1
//2
//3
//4

//4. Array.forEach Loop:
// let num = [1, 4, 7, 10, 27, 95, 37]
//num.forEach((value, index, array) => {
//  console.log(value*value)
//         })
// forEach Loop is sort of a Array function that loops through each element in the array when you call it 
//and declare a code in that function, now that forEach runs on each element of an array one by one and execute that function on 
// each element. 


// Map, Filter, and Reduce, what are these and why we use them:

// 1. Map Method: This method creates a new array by performing some operation on each
// array element. It does not modify the original array.
//e.g:
// const a = [1, 2, 3, 4]
// a.map((value, index, array) =>{
// return value * value;
//          })
 
//Difference between forEach loop and Map method is that, the latter one is used to
// make a NEW array from the original one, while the forEach loop modifies the
// existing array.

// 2. Filter Method:
// This method is really simple as it suggests, it merely filter out the 
// values from an existing array and store it in a new initialized variable.
// It does not modify the original array.
// e.g, let a = [20, 3, 60, 17, 25, 18, 64];
// let b = a.filter((value) =>{
  // return value < 10;
  //          }) 
  // console.log(b);
  //now we have created a function that filter out the values from the array(a)
  // that are less than 10, and stores them in a new array that is b.

// 3. Reduce Method: Reduces an array to a single value. One thing you must note in this reduce method, is that
// it takes the pair of values of an array and runs the corresponding function on those two values, and
// then those two values are simplified to a single value, and reduce method sees if there is any other value
// to pair the single value with, and consequently, reduce it to a single value. This process continues, until
// there is only single value left in the array, and that single value gets stored in a new variable. This reduce
// method returns a single value.
// e.g, 
// let y = [ 1, 2, 3, 5, 2, 1];
// (now in all the above examples we created function within the method, but we will create function as a variable
// and then we will call that variable in the Reduce method, this is just to tell you that
// you can also have your function as variable in javascript, you are not bound to have the function
// within the method itself.)
// let sum = (a, b) =>{
  //  return a + b
  // }
  // now we will create a new variable to apply reduce method(while calling the function we created above)
  //and thereof store that single value in a new variable.
  // let newArray = y.reduce(sum); we have called the function sum as u can see.
  // console.log(newArray); Output: 14

/*let a = prompt("Did you watch God's Own Country? Answer in Yes or No.");

if (a === 'Yes' || a === 'yes') {
    console.log("Hope now you're gay.");
} else {
    console.log('Kuda Hafiz.');
}*/

/*let array = ['Joe Root', 'James Anderson', 'Steve Smith']

do {
  array.push(prompt("Who is your favorite cricketer?"));

} while (!array.includes('Virat Kohli'))

const newArray = array.map(item => item.)

console.log(newArray); */

// let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
// console.log(randomNumber);  // For testing purposes, you can see the number

// let guess;
// let timesGuessed = 0;

// do {
//   guess = +prompt("Guess a number between 1-100"); // Prompt user for a guess
//   timesGuessed++; // Increment the guess counter

//   if (randomNumber === guess) {
//     // Correct guess
//     alert(`Correct! Your score is ${100 - timesGuessed}, and the number you guessed is ${randomNumber}`);
//   } else if (guess < 1 || guess > 100) {
//     // Invalid guess (not in range)
//     alert("Please enter a number between 1 and 100.");
//   } else {
//     // Provide hints based on the actual random number's range
//     if (randomNumber <= 10) {
//       alert("The number is between 1 and 10 (inclusive).");
//     } else if (randomNumber <= 20) {
//       alert("The number is between 11 and 20 (inclusive).");
//     } else if (randomNumber <= 30) {
//       alert("The number is between 21 and 30 (inclusive).");
//     } else if (randomNumber <= 40) {
//       alert("The number is between 31 and 40 (inclusive).");
//     } else if (randomNumber <= 50) {
//       alert("The number is between 41 and 50 (inclusive).");
//     } else if (randomNumber <= 60) {
//       alert("The number is between 51 and 60 (inclusive).");
//     } else if (randomNumber <= 70) {
//       alert("The number is between 61 and 70 (inclusive).");
//     } else if (randomNumber <= 80) {
//       alert("The number is between 71 and 80 (inclusive).");
//     } else if (randomNumber <= 90) {
//       alert("The number is between 81 and 90 (inclusive).");
//     } else {
//       alert("The number is between 91 and 100 (inclusive).");
//     }
//   }

// } while (randomNumber !== guess); // Keep looping until the guess is correct


// BOM, DOM, and Window Object:
// What is Window Object? 
// Window object represents browser window and provides methods to control it. It is a global object
// It means that other objects are inherently a 'method' of the global object that is Window Oject.
// E.g,
// if you write console.log(window), this would print all the methods of the windows, you can achieve the 
// same thing by doing this:
// window.console.log(window), the result would be the same, because console.log is in turn a method of the window.
// Another e.g, alert() and window.alert() have the same effect. 

// Now let's see what is Bom and Dom.
// Dom (Document Object Model): Dom represents the entire page's content as HTML.
// e.g, doing console.log(document), this would output in console the entire content of page in HTML as a JS Object.
// e.g2, doing console.log(document.body), this would output in console the entire body of the document of the page
// in HTML as a JS Object.
// e.g, document.body.style.background = "red", this code will turn the entire body background as red.
// Now you can see you can manipulate style using JS as well, but a question arises that is, why would you wanna
// use JS to style the page when you have CSS?
// To answer this, we must consider the fact that CSS once applied, can't be constantly changed, it acts as default styles for 
// your page, while JavaScript is like a brain of your webpage which uses user's input to change the color or background image 
// or other style elements based on how user is interacting with your page, basically it styles the page in real time. 

// BOM (Browser Object Model): The browser object model represents additional objects provided by the browser(host environment)
// for working with everything except the document.
// The functions alert/confirm/prompt are also a part of the BOM, they are browser specific.


// let userInput = prompt('Enter a background color for the page.');
// document.body.style.background = userInput 

// function generateRandomValues() {
//   const values = ['Snake', 'Water', 'Gun'];
//   const randomIndex = Math.floor(Math.random() * values.length);
//   return values[randomIndex];
// }

// //do {
//   Generate a random choice for the computer
//   //let randomAlp = generateRandomValues();

//   Prompt the user for their choice
//   //let userInput = prompt("Select a player: Snake, Water, or Gun");

//    If the player input is invalid (not Snake, Water, or Gun), prompt them again.
//   // if (!['Snake', 'Water', 'Gun'].includes(userInput)) {
//   //   alert("Invalid choice! Please choose between Snake, Water, or Gun.");
//   //   continue;
//   // }

//   Output the player's and the computer's choices
//   alert(`You selected: ${userInput} \nThe computer selected: ${randomAlp}`);
  
//    Determine the winner
//   if (randomAlp === userInput) {
//     alert("It's a tie!");
//   } else if (
//     (randomAlp === 'Snake' && userInput === 'Water') ||
//     (randomAlp === 'Water' && userInput === 'Gun') ||
//     (randomAlp === 'Gun' && userInput === 'Snake')
//   ) {
//     alert(`You lost! The player that beat you is ${randomAlp}`);
//   } else {
//     alert(`You win! The player you beat is ${randomAlp}`);
//   }
  
//   The loop will continue as long as the player doesn't select the same option as the computer
// } while (randomAlp !== userInput);



// Chapter 7: Walking the DOM
// Basically, whenever we open a html page and doing some activity on the DOM,
// what we are doing is DOM manipulation, while walking the DOM
// DOM tree refers to the HTML page where all the nodes are objects.
// There can be 3 major types of text nodes:
// 1. Text nodes
// 2. Element nodes
// 3. Comment nodes 

// In an html page, <html> is at the root and <head> and <body> are its children, etc.

// A text node is always a leaf of the tree.

// DOM Manipulation refers to the manipulation of the html page in the DOM itself.  
// We can change style and do all sorts of things with the html elements in the DOM.
// e.g, Let us assume, we wanna style a word on the page. We can go on a website and select the element we wanna manipulate.
// Now, we can note what is the class of that element since we wanna style it, let's say for example's sake that it is 'cursor-pointer'. 
// Then we can use this in the console 'document.getElementByClassName(class name)'', in our case its gonna be 'document.getElementsByClassName(cursor.pointer)', 
// this action on console will show you all the element that have this class. Then you can find that element in that class that you wanna style, let us assume it's the 3rd element.
// then you can use this document.getElementsByClassName(cursor.pointer)[3] in the console to style it whatever you WakeLockSentinel, e.g
// Doing this document.getElementsByClassName(cursor.pointer)[3].style.color = "Red" in the console will turn that element's color to red.

// Now we will start studying DOM Manipulation and what DOM actually is:
// The Document Object Model (DOM)
// The DOM is like a map or blueprint of a web page. It turns the HTML structure of a page (like headings, paragraphs, and images) 
// into a format that JavaScript can interact with.

// Structure of the DOM: Imagine your web page as a tree, where each part of the page (like a heading, a paragraph, or an image) 
// is a branch on this tree. Each of these branches is an "object" that represents an element of the page. 
// The DOM makes it easy to access, change, or delete these elements.

// Why it's useful: This allows JavaScript to dynamically change the page without needing to reload it. 
// For example, you can add a new paragraph, change a button's text, 
// or change the style of an image—all while the user is interacting with the page.

// How to Access DOM Elements:
// In order to manipulate or change the elements on a web page, you first need to "find" them in the DOM. This is done using the document object in JavaScript. 
// The document object is like the "root" of your HTML page, from which you can access anything inside it.

// Here are the ways you can access elements:
// Accessing by ID (getElementById)
// What it does: Finds an element by its unique ID.
// Example:
// const headerElement = document.getElementById('header');
// This code is looking for an element on the page that has an id="header". It will then store that element in the headerElement variable, 
// and you can manipulate it later (e.g., change the text inside it).

// Accessing by Class Name (getElementsByClassName)
// What it does: Finds elements that have a certain class name. Unlike IDs, multiple elements can have the same class.
// Example:
// const paragraphs = document.getElementsByClassName('paragraph');
// This looks for all elements with the class paragraph and returns them in a collection (even if there are multiple paragraphs on the page with that class). 
// You can then loop through this collection and manipulate each paragraph.

// Accessing by Tag Name (getElementsByTagName)
// What it does: Finds elements by their tag name (like p for paragraph, img for images, h1 for headings, etc.).
// Example:
// const images = document.getElementsByTagName('img');
// This finds all the img (image) elements on the page and stores them in the images variable. You could then, 
// for example, change their src (source) to display a new image.

// childNodes: This property of DOM displays all the childNodes.
// childElementNodes: Only displays elements.
// firstChild and firstElementChild:
// console.log(document.body.firstChild) will throw on console any type of node(text, comment or element).
// console.log(document.body.firstElementChild) filters out text nodes and comments, and just gives you the first element node.
// lastChild: As self-explanatory as it already is, this displays the last child in the console.
// lastElementChild: Displays only element nodes.
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// Whenever you wanna know about more document properties just search them up.


// Table Links: Certain DOM elements may provide additional properties specific to their type for convenience.
// Table element support the following properties:

// table.rows: Collection of tr elements.
// table.caption: reference to <caption> elements
// table.thead: reference to <thead> elements
// table.tfoot: reference to <tfoot> elements
// table.tBodies: Collection of <tbody> elements
// tbody.rows: collection of <tr> inside

// tr.cells: collection of td and th
// tr.sectionRowIndex: Index of tr inside enclosing element
// tr.rowIndex: Row number starting from 0

// td.collIndex: Number of cells inside enclosing <tr>


// How to Manipulate Styles
// DOM manipulation also extends to modifying the styles of elements, 
// allowing us to create visually appealing and dynamic web pages.

// How to change styles dynamically
// We can use the style property of an element to change its appearance. 
// Let's take an example of changing the color of a paragraph when a button is clicked:
// e.g:
// // Accessing a paragraph element
// const myParagraph = document.getElementById('myParagraph');

// // Accessing a button element
// const colorButton = document.getElementById('colorButton');

// // Adding a click event listener to the button
// colorButton.addEventListener('click', function() {
//     // Changing the color style of the paragraph
//     myParagraph.style.color = 'blue';
// });

// In the above example, when the button with the ID colorButton is clicked, the text color of the paragraph 
// with the ID myParagraph is changed to blue.

// How to create new elements
// The createElement method is used to create a new HTML element. Let's create a new paragraph element and append (add) 
// it to the body of the document:
// e.g,
// // Creating a new paragraph element
// const newParagraph = document.createElement('p');

// // Setting the text content of the new paragraph
// newParagraph.textContent = 'This is a new paragraph.';

// // Appending the new paragraph to the body of the document
// document.body.appendChild(newParagraph);
// In this example, we create a new p (paragraph) element, set its text content, and then 
// append it to the body of the document.

// Here’s what the code does step by step:

// Create a new paragraph element:
// const newParagraph = document.createElement('p');
// This line is creating a new "p" element, which is just a fancy way of saying a paragraph. 
// It's like saying, “I want to add a paragraph to the page, but I haven’t decided what to say in it yet."

// Set the text for the paragraph:
// newParagraph.textContent = 'This is a new paragraph.';
// Now that we have a blank paragraph, we’re telling it, “This is the text I want you to show: ‘This is a new paragraph.’” 
// It’s like filling in the paragraph with words.

// Add the paragraph to the web page:
// document.body.appendChild(newParagraph);
// Finally, this line takes that new paragraph and puts it onto the web page, specifically at the end of the page (which is the "body" of the page). 
// It’s like putting the paragraph onto your blank piece of paper.



// The HTML DOM document object is the owner of all other objects in your web page.
// The HTML DOM Document Object
// The document object represents your web page.

// If you want to access any element in an HTML page, 
// you always start with accessing the document object.
// Below are some examples of how you can use the document object to access and manipulate HTML.

// 1: Finding HTML Elements
// Method:                             	Description
// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name.

// 2: Adding and Deleting Elements
// Method	                                Description
// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream

// Adding Events Handlers
// Method:
// document.getElementById(id).onclick = function(){code}	
// Description
// Adding event handler code to an onclick event




// Finding HTML Objects
// The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

// Later, in HTML DOM Level 3, more objects, collections, and properties were added.

// Property	Description	DOM(The number from 1, 2 , 3 represents the HTML DOM Level that these properties are in)
// document.anchors	Returns all <a> elements that have a name attribute	1
// document.applets	Deprecated	1
// document.baseURI	Returns the absolute base URI of the document	3
// document.body	Returns the <body> element	1
// document.cookie	Returns the document's cookie	1
// document.doctype	Returns the document's doctype	3
// document.documentElement	Returns the <html> element	3
// document.documentMode	Returns the mode used by the browser	3
// document.documentURI	Returns the URI of the document	3
// document.domain	Returns the domain name of the document server	1
// document.domConfig	Obsolete.	3
// document.embeds	Returns all <embed> elements	3
// document.forms	Returns all <form> elements	1
// document.head	Returns the <head> element	3
// document.images	Returns all <img> elements	1
// document.implementation	Returns the DOM implementation	3
// document.inputEncoding	Returns the document's encoding (character set)	3
// document.lastModified	Returns the date and time the document was updated	3
// document.links	Returns all <area> and <a> elements that have a href attribute	1
// document.readyState	Returns the (loading) status of the document	3
// document.referrer	Returns the URI of the referrer (the linking document)	1
// document.scripts	Returns all <script> elements	3
// document.strictErrorChecking	Returns if error checking is enforced	3
// document.title	Returns the <title> element	1
// document.URL	Returns the complete URL of the document


