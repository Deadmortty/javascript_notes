// *********************************** forEach use with an Array with values as objects *************************************************************************************
// Example: Array of Film Objects
// Here’s an array of films where each film is an object with details like title, director, and releaseYear:

// const films = [
//   { title: "Manchester by the Sea", director: "Kenneth Lonergan", releaseYear: 2016 },
//   { title: "Call Me by Your Name", director: "Luca Guadagnino", releaseYear: 2017 },
//   { title: "Brokeback Mountain", director: "Ang Lee", releaseYear: 2005 },
// ];
// Now, let’s use forEach() to process this array.
// Iterating Over an Array of Objects
// We’ll use forEach() to log details about each film in the array:

// films.forEach((film, index) => {
//   console.log(`Film #${index + 1}`);
//   console.log(`Title: ${film.title}`);
//   console.log(`Director: ${film.director}`);
//   console.log(`Year: ${film.releaseYear}`);
//   console.log("--------------------");
// });

// Output:
// Film #1
// Title: Manchester by the Sea
// Director: Kenneth Lonergan
// Year: 2016
// --------------------
// Film #2
// Title: Call Me by Your Name
// Director: Luca Guadagnino
// Year: 2017
// --------------------
// Film #3
// Title: Brokeback Mountain
// Director: Ang Lee
// Year: 2005
// --------------------

// Explanation:
// 1. film Placeholder:
// During each iteration, film dynamically holds the current object from the array.
// You can access the properties of the object using dot notation (film.title, film.director).
