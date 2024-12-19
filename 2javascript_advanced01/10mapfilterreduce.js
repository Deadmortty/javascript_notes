// ***************************** Filter, Map, and Reduce in javascript *****************************************************************************************************

// What is the filter() Method?
// The filter() method is used to create a new array containing only the elements that satisfy a given condition.
// It doesn’t modify the original array; instead, it returns a filtered version of it.

// Syntax:
// array.filter(callback(element, index, array), thisArg);

// Explanation of Parameters:
// 1. callback:
// A function that tests each element.
// It returns true to keep the element, or false to exclude it.

// 2. element:
// The current item in the array being processed.

// 3. index (optional):
// The index of the current item.

// 4. array (optional):
// The original array filter() is called on.

// 5. thisArg (optional):
// Value to use as this when executing the callback.

// Example: Filtering Numbers
// Let’s filter out numbers greater than 10:
// const numbers = [5, 12, 8, 130, 44];

// const filteredNumbers = numbers.filter(function(number) {
//   return number > 10; // Keep only numbers greater than 10
// });
// console.log(filteredNumbers); // [12, 130, 44]

// Explaining Execution Flow:
// Iterates through each number in numbers.
// Tests the condition number > 10:
// For 5, the condition is false → Exclude.
// For 12, the condition is true → Include.
// For 8, the condition is false → Exclude.
// For 130, the condition is true → Include.
// For 44, the condition is true → Include.
// Creates a new array [12, 130, 44] with the included elements.



// Example: Filtering Objects
// Let’s filter a list of films to find those released after 2010:

// const films = [
//   { title: "Manchester by the Sea", releaseYear: 2016 },
//   { title: "Call Me by Your Name", releaseYear: 2017 },
//   { title: "Brokeback Mountain", releaseYear: 2005 },
// ];

// const recentFilms = films.filter(film => film.releaseYear > 2010); // we used arrow func here.
// console.log(recentFilms);

//  Output:
//  [
//   { title: "Manchester by the Sea", releaseYear: 2016 },
//   { title: "Call Me by Your Name", releaseYear: 2017 }
// ]

// Another example:

// const novels = [
//   { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
//   { title: "1984", genre: "Dystopian", publish: 1949 },
//   { title: "Pride and Prejudice", genre: "Romance", publish: 1813 },
//   { title: "The Great Gatsby", genre: "Tragedy", publish: 1925 },
//   { title: "Moby-Dick", genre: "Adventure", publish: 1851 },
//   { title: "Giovanni's Room", genre: "Queer", publish: 1956 },
//   { title: "Red, White & Royal Blue", genre: "Queer", publish: 2019 },
//   { title: "The Song of Achilles", genre: "Fiction", publish: 2011 },
//   { title: "Carmilla", genre: "Gothic", publish: 1872 }
// ];

// const TBR = novels.filter((book) => {
//   return book.genre.includes("Queer") || book.publish > 1980;
// })

// console.log(TBR);


// MAPS: 
// What is map()?
// map() creates a new array by applying a callback function to each element of the original array.
// It does not modify the original array.
// The callback function can transform the elements however you want (e.g., extract data, modify values, etc.).

// Syntax
// const newArray = array.map((element, index, array) => {
//   // Logic to transform 'element'
//   return transformedValue;
// });

// Example 1: Simple Transformation
// Let’s say we have an array of film titles, and we want to make all of them uppercase:

// const films = ["Manchester by the Sea", "Call Me by Your Name", "Brokeback Mountain"];
// const upperCaseTitles = films.map(film => film.toUpperCase());
// console.log(upperCaseTitles);

// Output:
// [
//   "MANCHESTER BY THE SEA",
//   "CALL ME BY YOUR NAME",
//   "BROKEBACK MOUNTAIN"
// ]


// Example 2: Working with an Array of Objects
// Suppose we want to extract only the titles from an array of film objects:

// const films = [
//   { title: "Manchester by the Sea", releaseYear: 2016 },
//   { title: "Call Me by Your Name", releaseYear: 2017 },
//   { title: "Brokeback Mountain", releaseYear: 2005 },
// ];

// const filmTitles = films.map(film => film.title);
// console.log(filmTitles);

// Output:
// ["Manchester by the Sea", "Call Me by Your Name", "Brokeback Mountain"]



// NOTE: Difference Between map() and forEach()
// 1. map():
// Returns a new array.
// Is used for transforming or mapping data.
// 2. forEach():
// Does not return anything (undefined).
// Is used for iterating over arrays and performing actions (e.g., logging, modifying external variables).

// An example I did myself:
// const films = [
//     { title: "Manchester by the Sea", releaseYear: 2016 },
//     { title: "Call Me by Your Name", releaseYear: 2017 },
//     { title: "Brokeback Mountain", releaseYear: 2005 },
//   ];

// let newFilmArray = films.map((movie) => (`${movie.title} (${movie.releaseYear})`))
// console.log(newFilmArray)



// REDUCE:
// What is reduce()?
// reduce() takes an array and reduces it to a single value based on a callback function.
// It’s like a versatile Swiss Army knife for arrays—it can sum numbers, concatenate strings, flatten arrays, and more.

// Syntax
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   // Logic to process each item
//   return updatedAccumulator;
// }, initialValue);

// Syntax explained:
// 1. accumulator:
// Starts as initialValue.
// Stores the running total or result from the callback's logic.

// 2. currentValue:
// The current element being processed.

// 3. currentIndex (optional):
// The index of the current element.

// 4.array (optional):
// The original array reduce() is operating on.

// 5. initialValue:
// The starting value for the accumulator.

// Example 1: Summing Numbers
// Let’s sum up an array of numbers:

// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(total);

// Output:
// 15

// Explanation of execution: 
// 1. Initial Step:
// accumulator starts as 0 (the initialValue).
// 2. First Iteration:
// accumulator = 0, currentValue = 1 → 0 + 1 = 1.
// 3. Second Iteration:
// accumulator = 1, currentValue = 2 → 1 + 2 = 3.
// ... and so on, until the array is fully processed.



// Example 2: Creating an Object
// Let’s say we want to count how many films we have for each release year.
// The Goal
// We want to count how many films were released in each year and store that in an object where:
// The key is the releaseYear.
// The value is the count of films released in that year.

// const films = [
//   { title: "Manchester by the Sea", releaseYear: 2016 },
//   { title: "Call Me by Your Name", releaseYear: 2017 },
//   { title: "Brokeback Mountain", releaseYear: 2005 },
//   { title: "Moonlight", releaseYear: 2016 },
// ];

// const filmCountByYear = films.reduce((accumulator, film) => {
//   if (accumulator[film.releaseYear]) {
//     accumulator[film.releaseYear]++;
//   } else {
//     accumulator[film.releaseYear] = 1;
//   }
//   return accumulator;
// }, {});
// console.log(filmCountByYear);

// Explanation of code:
// We’re using reduce() to create an object (accumulator) that holds the film counts.
// The initialValue for the accumulator is an empty object: {}.

// Step-by-Step Execution
// 1. Initial State
// accumulator starts as {} (an empty object).
// currentValue is the first film object: { title: "Manchester by the Sea", releaseYear: 2016 }.

// 2. 1st Iteration:
// Film: { title: "Manchester by the Sea", releaseYear: 2016 }
// Check accumulator[2016]:
// It doesn’t exist yet, so we set it to 1:
// Output at this point: accumulator = { 2016: 1 };

// 3. 2nd Iteration:
// Film: { title: "Call Me by Your Name", releaseYear: 2017 }
// Check accumulator[2017]:
// It doesn’t exist yet, so we set it to 1:
// Output at this point: accumulator = { 2016: 1, 2017: 1 };

// 4. 3rd Iteration:
// Film: { title: "Brokeback Mountain", releaseYear: 2005 }
// Check accumulator[2005]:
// It doesn’t exist yet, so we set it to 1:
// Output at this point: accumulator = { 2016: 1, 2017: 1, 2005: 1 };

// 5. 4th Iteration:
// Film: { title: "Moonlight", releaseYear: 2016 }
// Check accumulator[2016]:
// It does exist (its value is 1), so we increment it by 1:
// Output at this point: accumulator = { 2016: 2, 2017: 1, 2005: 1 };

// Final output on console:
// {
//   2016: 2,  // Two films released in 2016
//   2017: 1,  // One film released in 2017
//   2005: 1   // One film released in 2005
// }

// study javascript_domandevents folder