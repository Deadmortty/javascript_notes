// ********************************* Code execution context(how js execute your file) in JS and Call Stack ************************************************************************************************
// Execution Context Kya Hai:
// Jab bhi JavaScript koi code execute karta hai, usse samajhne ke liye ek environment banata hai. 
// Is environment ko Execution Context kehte hain or ye callstack kay andar banta ha or ye uske andar banay wali pehli chez hoti ha.

// Socho ek function tumhare code ka ek room hai, aur us room ke andar chalne ke liye tumhare paas:
// 1. Variables aur Functions (jo room ke andar hain).
// 2. Scope (room ka andar ko baahar se kitna access hai).

// JavaScript do tarah ke Execution Context banata hai:
// 1. Global Execution Context (GEC):
// ye hamesha banta hi banta ha jab b apka code execute hota ha or jo b GEC banta ha usko refer kr dia jata ha ek variable 
// jo kehlata ha THIS(jab b ap consolelog krtay ho es variable ko in node.js to hamesha empty object ayega, 
//par jab esko window mei krtay ho tab ye window object deta hai as a value, ye yaad rakhna)
// Jo bhi variables aur functions global scope mein hain, woh yahan execute hote hain.

// 2. Function Execution Context (FEC):
// Jab koi function call hota hai, tab ek alag Execution Context banta hai sirf us function ke liye.
// Har baar jab ek naya function call hota hai, ek naya Execution Context create hota hai.

// JS do phases mein code execute krti ha:
// 1. Memory Creation Phase:
// es phase mei bs sb chezain store ki jati ha or in other words unhe ek memory allocate ki jati ha.

// 2. Execution Phase: 
// es phase mei asal execution hoti ha un sb variables, unhe unki memory mei values assin ki jati ha.

// Take this code for instance:
// let value1 = 10
// let value2 = 5

// function addNum(numb1, numb2) {
// let total = numb1 + numb2
// return total
// }

// let result1 = addNum(value1, value2)
// let result2 = addNum(10, 2)

// Execution of this code as an example to understand the above stuff:
// Step 1: Sb sy pehle GLOBAL EXECUTION CONTEXT banay ga jo kay lazim chez ha, or wo ek variable THIS mei store kia jayega.

// Step 2: Es step mei Memory Cretaion Phase hota ha, yani sab variables ko ikata kia jata ha or unhe rakha jata ha or unhe store krta ha.

// But unko uski di gai values kay sath store nai krta es phase mai balke kuch es tarha krta ha:
// Ye sb variables ki values ko as undefined store krta hai. And sab functions kay code ko b as a defination store krta ha, 
// defination koi bawal nai ha bs ye wo code ha jo function call krnay par execute hota ha.

// Step 3. Execution Phase: 
// sb variables ko unki values di jati ha jo code mei hoti ha
// or jab jab koi function call krnay ki bari ati ha to ek new enviroment banta ha jiske baray mei humne upar parha ta
// humnay esko Function Execution Context ka nam dia ha, ku kay ye bilkul wesay hi ha jesay ek GEC hai, bs ye functions kay liye hota ha. 
// Ab functions kay liye already defination JS ko pata ha, 
// bs usi ko use krtay howay JS dubara dono phases run karay ga (pehle memory creation phase, uske bad execution phase ), 
// sb execution krnay kay bad jo return value hoti ha ek function ki, 
// wo global execution context mei bej di jati ha or FEC ka kam katam ho jata.
// ek bar jab es FEC ka sb kam hogya to ye FEC delete kr dia jata hai by JavaScript.

// bs esi tarha pura code run hota.

// // Call Stack Kya Hai?
// Call Stack ek puraani plate wali stack ki tarah hoti hai. GEC esi mei banta ha and sb FEC b esi mei one at a time bante or katam hote hai after their execution.
// Jab tum ek function call karte ho, woh callstack ke upar chadta hai. 
// Jab function complete ho jata hai, woh callstack se nikal jata hai.
// Yani JavaScript code ko ya ek function ko ek sequence mein manage karne ke liye CallStack ka use karti hai.

// Thread Kya Hai?
// Thread ek lane ki tarah hota hai jisme tumhara program ka code execute hota hai.
// Single-threaded language ka matlab hai ki JavaScript ek time par sirf ek kaam (line of code) execute kar sakta hai.
// JavaScript Single-Threaded Hai
// Ek Time Par Sirf Ek Kaam:

// Ek line complete hone ke baad hi agli line execute hoti hai.
// Jo bhi code tum likhte ho, woh ek call stack ke through execute hota hai.
// Ye chez yaad rakhna kay CallStack Hi Execution Ka Heart Hai:

// Jo bhi code tum likhte ho, woh call stack mein push hota hai.
// JavaScript interpreter us stack ka ek ek item execute karta hai.
// Thread is responsible for managing the call stack. Bas ek thread hai, isiliye ek hi kaam ek time par hoga.
// Thread Execution Kaise Kaam Karta Hai?
// Example code dekhte hain:

// console.log("Task 1");
// setTimeout(() => console.log("Task 2"), 1000);
// console.log("Task 3");

// Step-by-Step Thread Execution:
// "Task 1" Execute Hua:
// console.log("Task 1") ko thread execute karta hai.
// Call stack mein aata hai, run karta hai, aur nikal jata hai.

// setTimeout Encounter Hua:
// setTimeout() ko thread execute karta hai, lekin actual callback (jo log karega "Task 2") ko Web API mein bhej deta hai.
// Web API usse handle karta hai, thread free ho jata hai.

// "Task 3" Execute Hua:
// console.log("Task 3") turant execute hota hai, kyunki thread free hai.

// Callback Wapas Aata Hai:
// 1000ms baad, Web API console.log("Task 2") ko TaskQueue mei bejta jaha se fir usay Event Loop ke zariye call stack mei bhejta hai.

// JavaScript ko design isliye single-threaded kiya gaya, taaki:
// Code Predictable Rahe: Ek time par ek hi cheez chale.
// Browser ko Hang Na Kare: Multiple threads ko manage karna complex hota, aur performance issues aa sakte the.
// Isliye, agar ek function ya loop zyada time leta hai, 
// to JavaScript ka single thread busy ho jata hai aur doosra kaam ruk jata hai. Isko bolte hain blocking code.


// STUDY javascript_advanced01 after this
