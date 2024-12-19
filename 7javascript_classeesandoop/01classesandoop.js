// ****************** JavaScript Classes and Object-Oriented Programming **********************************************************************************
// Object-Oriented Programming (OOP):
// OOP is a programming paradigm that organizes your code "objects"—collections of properties (data) and methods (functions) 
// that work together to represent real-world concepts or modular program components.

// JavaScript and OOP:
// While JavaScript is a prototype-based language(it is not a class based language as some might say), 
// it provides a syntax called "classes" to make OOP-style development easier. 
// Classes are essentially "blueprints" for creating objects with consistent structure and behavior.

// In JSON, everything behaves like a Object. Even function can behave like an object as shown by the example below.
// Example Code:
// function multipleBy5(num){  // We created  a function
//   return num*5
// }

// multipleBy5.power = 2  // we do this function.property = value

// console.log(multipleBy5(5));
// console.log(multipleBy5.power); // notice how, just like objects, you can use . to access the properties of the function because it does behave like one.
// console.log(multipleBy5.prototype);  // we know that every object has prototype in it, and doing 
// object.prototype returns an empty {} object in Node.js, notice also that doing multiplyBy5.prototype will also return the same {} object. 
// this empty object would have stored the properties of the prototype of the function, e,g had we used this.num = num*5, we know that we
// were able to use this because it is by default is in the empty object tho we don't see it in console.log, because we only see an empty object.
// so had we  created/added any other property to the function, it woulda been stored in the prototype. And we would be able to extract
// it using . notation.



// Example 2:
// function createUser(username, score){  // we create a function that takes two arguments
//   this.username = username
//   this.score = score
// }

// createUser.prototype.increment = function(){  // we use our above knowlege of prototypes in objects, and make this function behave like an object
//   this.score++                                // we add a method called increment() in the prototype of createUser function/object
// }
// createUser.prototype.printMe = function(){  // we add another printMe method in the prototype of createUser
//   console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25) // now are we make an instance using new keyword that gives us an object
// const tea = createUser("tea", 250)  // this wouldn't work bcuz we didn't use new keyword hence no new object

// chai.printMe()


/*
Here's what happens behind the scenes when the this or new keyword is used:
you call //new createUser("chai", 25)//, a new object { username: "chai", score: 25 } is created, and //this// refers to that new object.
The this keyword refers to the object being created when the function is called with the new keyword.
A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

Adding methods like increment and printMe to the prototype of createUser ensures that all instances created by createUser can access these methods.
Whenever //new// is used and a new object is created, instead of duplicating these methods in every object , these method are stored in //createUser.prototype//, 
This saves memory.

*/

/*
Creating Instances(using new):
const chai = new createUser("chai", 25);  // this is the part of the code where we are creating instances
const tea = createUser("tea", 250);  

What does new createUser("chai", 25) do?
1. It creates a new empty object {}.
2. Sets the prototype of this object to createUser.prototype. (chai now inherits the methods and properties of createUser)
3. Calls the createUser function with //this// pointing to the new object.
4. Returns the new object.

So chai is created as an object:
chai = {
  username: "chai",
  score: 25,
  __proto__: createUser.prototype,
};

Call Methods on the Instance:
chai.printMe();
How does this work?
JavaScript looks for printMe method on the chai object.
Since chai doesn’t have printMe directly, JavaScript looks at chai.__proto__, which is createUser.prototype(chai inherited this from createUser).
It finds printMe there and executes it with //this// in that method pointing to the chai object.
Output: price is 25



*********** Prototypal Inheritance Recap *******************
The increment and printMe methods are shared among all createUser instances because they are stored in createUser.prototype.
Any instance (like chai or tea) can access these methods through the prototype chain.
Using new is crucial to ensure that this inside the constructor refers to the new object being created.
*/


/* 
More on Inheritance and how objects inherit each other's methods or properties. 

let myHeros = ["thor", "spiderman"] // An Array object containing some values.


let heroPower = {  // we create an object with some properties and a method.
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){   // now we add a hitesh method in the prototype of global Object.
    console.log(`hitesh is present in all objects`);
}

myHero.prototype.heyHitesh = function(){ // we add heyHitesh method in the prototype of an Array(which obv is also an object)
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh() 
// myHeros.hitesh()
// myHeros.heyHitesh() 
// heroPower.heyHitesh()


We know that myHeros.heyHitesh is in the prototype of an Array, so heroPower object doesn't has
access to it and when you called heroPower.heyHites(), JS couldn't find the heyHitesh method in the object hence an error will be returned.


// Below is an example of inheritance in older sytax and older versions of JS

const User = {   // an object is created
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true  // another object
}

const TeachingSupport = {
    isAvailable: false     // another object
}

const TASupport = {          //  again another object, this time u may have noticed __proto__ this is a default method in every object,
    makeAssignment: 'JS assignment',   // which is used to reference to objects, now TASupoortcan access all properties and         
    fullTime: true,                     // method of the other object that is in TeachingSupport.
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // You can also write it like this outside of the local scope of that object. This line of code 
// allow the Teacher to access the properties of User object

// ********************** Inheritance in modern syntax *************************

Object.setPrototypeOf(TeachingSupport, Teacher)
// in modern syntax, we use Object.setPrototypeOf(Object that inherits, Object whose being inherited)
// this is a method in the global Object, which allows you to link two objects. 
// Behind the scene of setPrototypeOf(), is that the same thing is happening as we disccused in the older version above, it's just that
// you don't have to write intimidating syntax of __proto__, you can get the same thing done using setPrototypeOf() method.


// ************ Creating methods in the prototypes of Objects(strings, arrays, functions, objects themselves xd) *******************
let userName = "Ephraim  "
we know that strings have a property called .length, which tells you the length of that strings, for the userName above, it would be
8, because .length property Ephraim has 6 and then two spaces. However imagine if you had a method or a property in strings, 
which would give you only the trueLength of the string. You can create that yourself now!

Let's do this. 

String.prototype.trueLength = function() {
         console.log(`The true length of this string is ${this.trim().length}`)  // this.trim() method removes all white spaces and 
         // then .length property tells the actual length of that string.  
         console.log(`${this}`)   // let's print a this to see what is the context in this function
}
 
userName.trueLength()
"Filmmaking    ".trueLength()

we ran these two and got output for:
userName.trueLength(): 
The true length of this string is 7 
Ephraim  // this is the global context in which the method ran

"Filmmaking    ".trueLength():
The true length of this string is 10
Filmmaking

*/