// ********************* Inheritance | extend keyword | super keyword | instanceOf | static keyword ******************************************************************************
// Code to study:
// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const userOne = new Teacher("Ephraim", "ephraim@teacher.com", "123")
// userOne.logMe()

// const userTwo = new User("Daniel")
// userTwo.logMe()

// console.log(randomUser instanceof User);


// Key Concepts Recap
// 1. extends:
// Allows the Teacher class to inherit from User.
// 2. super(): // is a keyword that helps you get rid of the older syntax of writing .call(this, arg1, arg2..), u can just do the same thing with super()
// the super() kehta ha kay mein es function ka FEC le jaoga us constructor mei jaha mujhe bola gya ha, 
// hamaray case mei hum ne kia ha super(username), hum esay keh rahay hai kay ap User kay constructor mei jao or waha jo this.username ha wo 
// set karo, or uski value break. Ab hum Teacher se hi User kay constructor mei value set kr paye hai or mazay ki bat ye ha kay hum
// Teacher se hi uska(username ka) direct access le b saktay hai.

// 3. instanceof:
// Checks if an object is an instance of a specific class (in our case, it's Teacher ) or its subclasses(in our case, it's User ).

// Execution Contexts:
// 1. When new Teacher("Ephraim", "ephraim@teacher.com", "123") is called:
// A new object is created.
// A new FEC is pushed to the stack for the Teacher constructor.
// Inside Teacher, super(username) runs, pushing a new FEC for the User constructor in the callstack.
// After User finishes doing it's work(setting the property of username), control returns to Teacher, 
// and the remaining properties (email, password) are set.
// The Teacher FEC is popped, and the object is returned in the variable userOne.

// 2. When userOne.logMe() is called:
// The logMe method is looked up in Teacher but found in User.
// A new FEC is pushed in callstack for logMe, and it runs with //this// bound to userOne.

// When userTwo.logMe() is called:
// The logMe method is found in User.
// A new FEC is created for logMe, and it runs with //this// bound to userTwo.
// When randomUser instanceof User is checked:
// No FEC is created here; it's a simple check, it returns true.

// **** Static keyword: ************
// This keyword when set with a method() stops that method from being accessiblle to other instances of it's parent class.
// Let's use the same above code:

// Code to study:
// class User {
//     constructor(username){
//         this.username = username
//     }

//     static logMe(username){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const userOne = new Teacher("Ephraim", "ephraim@teacher.com", "123")
// userOne.logMe()


// Explanation of Code and Changes:
// 1. static logMe(username):
// The logMe method is now marked as static.
// This means it can only be accessed through the User class(the parent class) (e.g., User.logMe(...)) or the Teacher class (because Teacher inherits from User).

// 2. Calling the Static Method:
// Instead of calling userOne.logMe() or userTwo.logMe(), we call User.logMe(userOne.username) or Teacher.logMe(userOne.username).
// This means you can call it directly on the class (e.g., User.logMe() or Teacher.logMe()) 
// but not on objects created from that class (e.g., userOne.logMe() will throw an error if logMe is static).

// 3. Why the username Parameter is Needed:
// userOne.username is the username property of the userOne object.
// Because the logMe method is static, it doesn’t automatically know about userOne or its properties. 
// You have to explicitly pass userOne.username as an argument for logMe to log it.
// A static method doesn’t have access to instance-specific data (this doesn’t refer to the instance).
// Instead, you must explicitly pass the username to the logMe method if you want it to log the username.
 