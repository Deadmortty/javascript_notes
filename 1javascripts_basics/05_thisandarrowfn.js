// ***********************************THIS and Arrow Functions*****************************************************

// let randomObject = {
//   person: "Hazel",
//   age: 32,
//   job: "engineer",
//   message: function () {
//     console.log(`${this.person} is ${this.age} years old, and an ${this.job}.`) // this referes to the current context 
//   }
// }

// randomObject.message()
// randomObject.person = "Brian"
// randomObject.message()

//Basic Arrow Function:
// const addsNumbers = (numb1, numb2) => {
//   return numb1 + numb2
// }
// console.log(addsNumbers(3, 5));

// Arrow Fucntions ar eused in another way or written in another way that is called implicit return
// In implicit return way, you don't have to use parantheces and return keyword. 
// const addsNumbers = (numb1, numb2) => ( numb1 + numb2 )
// console.log(addsNumbers(3, 5));

// One more thing to note that to return an object in a function, you always have to wrap it in curly braces, otherwise it returns undefined. 
// let aProfile = (numb1, numb2) => ({username: "Sam"})
// console.log(aProfile()); // this will return an object