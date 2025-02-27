// what is function ?
// it is block of code designed perform particular task
//  only function is work on call ---"something" invokes it (calls it).
// When JavaScript reaches a return statement, the function will stop executing.

// ..................................................................................................

// Type of Function decleartion

// 1. Function Declaration
// A function declaration defines a function with a name that can be called before its declaration due to hoisting.
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Sureshkrishna")); // Output: Hello, Sureshkrishna!


// 2. Function Expression
// A function expression assigns a function to a variable. It is not hoisted like function declarations.
// const greet = function(name) {
//     return `Hello, ${name}!`;
// };
// console.log(greet("Sureshkrishna")); // Output: Hello, Sureshkrishna!


// 3. Arrow Functions (ES6)
// Arrow functions provide a shorter syntax and do not bind their own this.

// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Sureshkrishna")); // Output: Hello, Sureshkrishna!


// 4. Default Parameters
// Default parameters allow us to assign default values to function parameters.

// function greet(name = "Guest") {
//     return `Hello, ${name}!`;
// }
// console.log(greet());        // Output: Hello, Guest!
// console.log(greet("Suresh"));// Output: Hello, Suresh!

// 5. Rest Parameters (...)
// Rest parameters allow functions to accept multiple arguments as an array.
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }console.log(sum(10, 20, 30)); // Output: 60


// 6. Callback Functions
// A callback function is passed as an argument to another function and executed later.
// function processUser(name, callback) {
//     console.log(`Processing user: ${name}`);
//     callback();
// }

// processUser("Sureshkrishna", () => {
//     console.log("User processed successfully!");
// });
// Output:
// Processing user: Sureshkrishna
// User processed successfully!

// .......................................................................................................

// What is a Promise?

// JavaScript is single-threaded, meaning it executes code line by line.
// A Promise is a special JavaScript object that acts as a placeholder for a value that will be available in the future.
// A Promise can be in one of three states:

// Pending – The operation has started but is not completed yet.
// Fulfilled – The operation completed successfully, and we have the result.
// Rejected – The operation failed, and we have an error.
// A Promise starts in the Pending state and moves to either Fulfilled or Rejected based on the result.

// Creating a Promise
// A Promise is created using the new Promise() constructor, 
// which takes a function (executor function) with two parameters: resolve and reject.

// const Teaorder = new Promise ((resolve,reject)=>
// { let order = false    
//     setTimeout(()=>{
//         if(order){
//             resolve("Order Taken BY Tea ");
            
//         }else{
//             reject("Don't Order")            
//         }
//     },2000)    
// })
// console.log(Teaorder);
// Teaorder
// .then((text)=>{
//     console.log(text);    
// })
// .catch((error)=>{
//     console.log(error);    
// })

// Promise.all()
// Executes multiple Promises in parallel and returns results when all are completed.
// Behavior: Waits for all promises in the iterable to resolve. If any one promise rejects, 
// it immediately rejects with the reason of the first rejected promise.

// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 ✅"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 ✅"), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 ✅"), 1500));

// Promise.all([promise1, promise2, promise3]).then((results) => {
//   console.log(results); // ["Promise 1 ✅", "Promise 3 ✅", "Promise 2 ✅"]
// });

// 2️⃣ Promise.race()
// Returns the result of the first Promise that resolves or rejects.
// Accept only first promise

// Promise.race([promise1, promise2, promise3]).then((result) => {
//     console.log(result); // The fastest Promise result
//   });
  
// 3. Promise.any
// Any one is resoves is accept it ,other wise dont like it


// Promise.all: Use when you need all promises to succeed.

// Promise.race: Use when you want the result of the first promise to settle.

// Promise.any: Use when you want the first successful result and can ignore failures.


// What is Async/Await?
// async Functions:
// A function declared with the async keyword automatically returns a Promise.

// If the function returns a value, the Promise resolves with that value.

// If the function throws an error, the Promise rejects with that error.
const user = async () => ('sk');
console.log(user());

// await Keyword:

// The await keyword can only be used inside an async function.

// It pauses the execution of the async function until the Promise it is waiting for resolves or rejects.

// If the Promise resolves, await returns the resolved value.

// If the Promise rejects, it throws an error, which can be caught using try/catch.

// Error Handling with async/await:
// Use try/catch to handle errors in async/await functions.

// If a Promise rejects, the await keyword throws an error, which can be caught in the catch block.
// async function fetchData() {
//     try {
//         const response = await fetch("https://api.example.com/data");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error")}


// Using await Inside async
// await Can Only Be Used Inside async Functions:

// The await keyword can only be used inside a function declared with async.

// Pauses Execution:

// When await is used, the async function pauses execution until the Promise settles (resolves or rejects).

// Returns the Resolved Value:

// If the Promise resolves, await returns the resolved value.

// If the Promise rejects, it throws an error, which can be caught using try/catch.

// async function fetchData() {
    // Simulate an asynchronous operation (e.g., fetching data)
//     const data = await new Promise((resolve) => {
//         setTimeout(() => resolve("Data fetched! ✅"), 1000);
//     });

//     console.log(data); // Logs after 1 second
// }

// fetchData();

// Chaining await Calls
// You can chain multiple await calls to perform sequential asynchronous operations.

// async function processData() {
//     const step1 = await new Promise((resolve) => {
//         setTimeout(() => resolve("Step 1 completed! ✅"), 1000);
//     });

//     const step2 = await new Promise((resolve) => {
//         setTimeout(() => resolve("Step 2 completed! ✅"), 1000);
//     });

//     console.log(step1); // Logs after 1 second
//     console.log(step2); // Logs after another 1 second
// }

// processData();