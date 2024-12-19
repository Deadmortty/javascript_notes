// ******************************* ForEach() Loop **************************************************************************************************************************
// What Is forEach()?
// The forEach() method is used to iterate over arrays. It executes a provided function once for each element in the array. 
// The function gets a placeholder (callback function parameter) to represent each array element as it loops.
// Syntax:
//  array.forEach(function(element, index, array) {
//   // Code to execute for each element
// });

// 1. element: A placeholder for the current element being processed.
// 2. index (optional): The index of the current element.
// 3. array (optional): The entire array being traversed.
// The element is dynamic, like key in the for..in loop, and changes with each iteration.

// Step-by-Step Example
// Imagine you have an array of movie titles:
// const films = ["Manchester by the Sea", "Call Me by Your Name", "Brokeback Mountain"];

// films.forEach(function(film) {
//   console.log(film);
// });

// Explanation of execution flow:
// 1. The forEach() method loops through the array, starting with the first element.
// 2. On each iteration:
// The placeholder film is assigned the value of the current element in the array.
// The callback function is executed with film as its argument.

// First iteration: film = "Manchester by the Sea"
// console.log("Manchester by the Sea");

// Second iteration: film = "Call Me by Your Name"
// console.log("Call Me by Your Name");

// Third iteration: film = "Brokeback Mountain"
// console.log("Brokeback Mountain");

// Output:
// Manchester by the Sea
// Call Me by Your Name
// Brokeback Mountain

// Adding More Parameters (Index and Array)
// You can include the index and array parameters for extra context.
// Example:
// films.forEach(function(film, index, array) {
//   console.log(`Film #${index + 1}: ${film}`);
// });

// Explanation:
// First iteration:
// film = "Manchester by the Sea", index = 0
// console.log("Film #1: Manchester by the Sea");
// So on and so forth until the last index. 

// Output:
// Film #1: Manchester by the Sea
// Film #2: Call Me by Your Name
// Film #3: Brokeback Mountain

// Arrow Function Version
// Here’s how the same code looks with an arrow function:
// films.forEach((film, index) => {
//   console.log(`Film #${index + 1}: ${film}`);
// });

// Note: Remember this, callbackfunction doesn't have a name, 
// so whenever you put a function in forEach(), it shouldn't have a name. 
