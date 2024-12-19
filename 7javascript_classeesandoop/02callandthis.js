// ******************************* Call and This ****************************************************************************************************

/*

Let's use this example to understand Call and This:

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

Explanation of code:
function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

What it does:
This is a regular function that takes a username as input.
It assigns the username to the this.username property of the object calling this function.
It logs "called" to the console.

Key point about //this//:
The value of //this// is determined by how the function is called.
If called as a regular function, this is undefined in strict mode or points to the global object in non-strict mode.
If called with .call(), .apply(), or .bind(), the value of this is explicitly set.


function createUser(username, email, password) {
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

What it does:
This function is designed to be a constructor, used to create user objects.
It takes three parameters: username, email, and password.

How //this// works here:
When createUser is called with new, it creates a new object and sets //this// to that new object.
Inside this function, SetUsername.call(this, username) is called.

The SetUsername.call(this, username) Line:
What .call() does:
The .call() method explicitly sets the value of //this// inside SetUsername to the //this// of createUser.
This means SetUsername runs in the same context as createUser.

Execution Context Details:
1. When new createUser("chai", "chai@fb.com", "123") is called:
A new object is created, and //this// inside createUser is set to this new object created when we used //new creatUser//.
A new FEC gets pushed to the call stack for createUser.

2. Inside createUser, when SetUsername.call(this, username) is called:
The //this// of SetUsername is explicitly set to the same //this//(every this points to an object, and in this
// case it's the same object that was created when we called //new createUser) as createUser.
A new FEC is created for SetUsername, and it runs with a shared //this//(between creeateUser and setUsername).

3. After both functions finish:
Their respective FECs are popped from the stack, and the new object is returned as chai.
{
  username: "chai",
  email: "chai@fb.com",
  password: "123"
}

Why SetUsername.call(this, username)?
Let’s break it down.
a) Understanding .call():
The .call() method is used to explicitly set the value of this inside a function. Its syntax is:
functionName.call(thisArg, arg1, arg2, ...);

thisArg: The value you want //this// to refer to inside the function.
arg1, arg2, ...: The arguments to pass to the function.

In our case:
thisArg → The //this// of createUser (the object being created).
arg1 → The username that SetUsername needs.

When you do call setUsername like below:
setUsername.call(this, username);

The //this// inside setUsername is explicitly gets set to the same //this// as createUser.
The username is passed as the first parameter to SetUsername function.

*/