// *************************************Immediately invoked function expression (IIFE)**********************************************************
// IIFE Kya Hai?
// IIFE ek aisi function hoti hai jo turant chal jati hai jaise hi define hoti hai. Matlab, 
//tum function ko banate ho aur wahi jagah par usse call bhi kar lete ho.

// Iska syntax kuch aisa hota hai:
// (() => {
//   console.log("Arrow Function IIFE!");
// })();

// (function () {
//   console.log("Ye function turant chal gaya!");
// })();

// Yahan:
// function () {} ek anonymous (naam ke bina) function hai.
// Us function ko () ke saath turant call kar diya gaya.

// Purpose:
// Global scope mein zyada variables aur functions honge toh pollution hoti hai, aur yeh unexpected bugs ka reason ban sakta hai.
// IIFE ka use karke tum variables aur logic ko global scope se alag kar sakte ho.
// Yeh practice tumhare code ko safer, cleaner aur modular banata hai.
// Note: IIFE ko end krna lazmi hota ha es liye hamesha ';' use krtay hai usko end krnay kay liye