// ************* Bind keyword *******************************************************************************************************************************
// Understanding bind Using the Example:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>React</title>
// </head>
// <body>
//     <button>Button Clicked</button>
// </body>
// <script>
//     class React {
//         constructor(){
//             this.library = "React"
//             this.server = "https://localhost:300"

//             //requirement
//             document
//                 .querySelector('button')
//                 .addEventListener('click', this.handleClick.bind(this))

//         }
//         handleClick(){
//             console.log("button clicked");
//             console.log(this.server);
//         }
//     }

//     const app = new React()
// </script>
// </html>

// Why bind(this)?
// When the button is clicked, the handleClick method is executed as a callback.
// Without bind(this), the this inside handleClick would point to the button (<button>), not the instance of React.
// Using .bind(this) explicitly sets this in handleClick to refer to the current instance of React, ensuring access to this.server.

// With .bind(this), this inside handleClick correctly refers to the React instance.
// Without .bind(this), trying to access this.server would result in undefined or an error, because this would point to the <button> element.


// What Happens When the Button is Clicked?
// Event is triggered:
// The handleClick method runs with this set to the React instance, thanks to .bind(this).
// Console Output:
// button clicked
// https://localhost:300


// Key Takeaways on bind:
// Why is bind necessary?
// In JavaScript, this depends on how a function is called. When handleClick is passed as a callback, this is no longer the class instance but the button element. bind(this) fixes this by ensuring this always points to the class instance.
// What happens without bind?
// Without bind(this), this inside handleClick would refer to the <button> element, and this.server would be undefined.
// Alternatives to bind:
// Use an arrow function, which doesn’t create its own this:
// document
//     .querySelector('button')
//     .addEventListener('click', (e) => this.handleClick(e));



//     Are console.log(this) Inside handleClick and console.log(app) the Same?
// Yes!
// In this specific case, console.log(this) inside handleClick will give the exact same output as console.log(app) because:

// this in handleClick is explicitly bound to the React instance (app) using .bind(this).
// app is the only instance of the React class, and it’s the same object being logged in both cases.


// What Would Happen Without .bind(this)?
// If you didn’t use .bind(this) when setting up the event listener:
// document.querySelector('button').addEventListener('click', this.handleClick);

// this inside handleClick would refer to the button element (<button>), not the React instance.
// console.log(this) would output the button:
// <button>Button Clicked</button>

// console.log(app) would still output the React instance:
// React { library: "React", server: "https://localhost:300" }

// Key Takeaways
// With .bind(this), this inside handleClick is the same as the React instance (app), so console.log(this) and console.log(app) are identical.
// Without .bind(this), this inside handleClick would be the <button> element, and the two logs would no longer match.
