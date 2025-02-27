// 1. What are let and const?

//let
// let is Block scope varible -- {} 
// this not a redecleared ---- but Reassign
// let x = "John Doe";
// let x = 0;

// const
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// var 
// Only use var if you MUST support old browsers. 
// console.log(a); // undefined (hoisting)
// var a = 10;
// console.log(a); // 10
// var a = 20;  // No error, redeclaration allowed
// console.log(a); // 20

// When to Use What?
// Use const by default unless you know the value will change. --- const
// Use let if you need to reassign a value --- let
// Avoid var unless you're working with legacy code. ---- Var


// Arrow Functions in JavaScript

// Arrow functions were introduced in ES6.
// Before Arrow: =>
    // hello = function() {
    //     return "Hello World!";
    //   }

// With Arrow Function: => helle =()=> "hello world"
    // hello = () => {
    //     return "Hello World!";
    //   }

//     When to Use Arrow Functions
// ✅ Use arrow functions when:

// You need concise syntax.
// You don’t need this (e.g., for callbacks, array methods).
// You don’t need arguments.
// ❌ Avoid arrow functions when:

// You need to access this inside an object method.
// You need the arguments object.
// You need a function that acts as a constructor.


// What are Template Literals?
// that allow you to create strings in a more flexible and readable way.

// Multi-line Strings
// With template literals, you can write multi-line strings without using \n or string concatenation.
// const multiLine = `This is a 
// multi-line string 
// in JavaScript.`;
// console.log(multiLine);

// Expression Evaluation
// You can also include expressions inside ${}

// console.log(`The sum of 5 and 3 is ${5 + 3}.`);

// Function Calls Inside Template Literals

// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(`Message: ${greet("Suresh")}`);

// Tagged Templates

/*function highlight(strings, name, age) {
    return `${strings[0]}**${name}**${strings[1]}**${age}**${strings[2]}`;
}

const name = "Suresh";
const age = 23;
console.log(highlight`My name is ${name} and I am ${age} years old.`);*/


// Array Destructuring : -
// that allows you to extract values from arrays and assign them to variables in a single line.

// // Basic Syntax
// const numbers = [10, 20, 30];

// // Destructuring assignment
// const [a, b, c] = numbers;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// 2. Skipping Elements
// If you only need certain elements, you can skip others using commas (,)
// const numbers = [10, 20, 30, 40, 50];

// // Skipping the second value
// const [first, , third] = numbers;

// console.log(first);  // 10
// console.log(third);  // 30
// 3. Using Default Values
//If an element doesn’t exist in the array, you can assign a default value.
// const numbers = [10];

// // Assign default values
// const [a, b = 20, c = 30] = numbers;

// console.log(a); // 10
// console.log(b); // 20 (default value)
// console.log(c); // 30 (default value)

// 4. Swapping Variables
// let x = 5, y = 10;

// // Swap values
// [x, y] = [y, x];

// console.log(x); // 10
// console.log(y); // 5

// 5. Destructuring with Rest Operator (...)
// const numbers = [1, 2, 3, 4, 5];

// // Assign first two elements, rest goes into "others"
// const [first, second, ...others] = numbers;

// console.log(first);  // 1
// console.log(second); // 2
// console.log(others); // [3, 4, 5]
// 6. Nested Array Destructuring
// If you have an array inside another array, you can destructure it as well.
// const nestedArray = [1, [2, 3], 4];

// // Destructure the inner array
// const [a, [b, c], d] = nestedArray;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4
// 7. Destructuring Function Return Values
// function getCoordinates() {
//     return [10.5, 20.8];
// }
// // Destructure return values
// const [lat, lon] = getCoordinates();

// console.log(lat); // 10.5
// console.log(lon); // 20.8

// 8. Real-World Example: Extracting Values from map()
// const users = [
//     ["Suresh", 23],
//     ["Krishna", 25]
// ];

// // Destructure in map function
// users.forEach(([name, age]) => {
//     console.log(`Name: ${name}, Age: ${age}`);
// });

// Object Destructuring

// that allows you to extract properties from an object and assign them to variables in a single statement.

// const user = {
//     name: "Suresh",
//     age: 23,
//     country: "India"
// };

// // Destructuring assignment
// const { name, age, country } = user;

// console.log(name);    // "Suresh"
// console.log(age);     // 23
// console.log(country); // "India"

// 2. Changing Variable Names

// You can assign properties to different variable names.
// const user = {
//     name: "Suresh",
//     age: 23
// };

// // Renaming properties while destructuring
// const { name: userName, age: userAge } = user;

// console.log(userName); // "Suresh"
// console.log(userAge);  // 23
// 3. Using Default Values
// If a property does not exist, you can assign a default value.
// const user = {
//     name: "Suresh"
// };

// // Assign default values
// const { name, age = 25 } = user;

// console.log(name); // "Suresh"
// console.log(age);  // 25 (default value)
// 4. Nested Object Destructuring
// const user = {
//     name: "Suresh",
//     address: {
//         city: "Chennai",
//         country: "India"
//     }
// };

// // Destructure nested object
// const { name, address: { city, country } } = user;

// console.log(name);    // "Suresh"
// console.log(city);    // "Chennai"
// console.log(country); // "India"

// 5. Using the Rest Operator

// const user = {
//     name: "Suresh",
//     age: 23,
//     country: "India"
// };

// // Extract "name", put the rest in "otherDetails"
// const { name, ...otherDetails } = user;

// console.log(name);         // "Suresh"
// console.log(otherDetails); // { age: 23, country: "India" }

// 6. Destructuring in Function Parameters
// You can use object destructuring directly in function parameters.
// function displayUser({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }

// const user = { name: "Suresh", age: 23 };

// // Pass object to function
// displayUser(user);
// 7. Destructuring with Default Function Parameters

// You can provide default values when destructuring in function parameters.

// function displayUser({ name = "Guest", age = 18 } = {}) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }

// // If object is empty, defaults will be used
// displayUser({});
// 8. Real-World Example: Fetch API Response
// When working with APIs, object destructuring helps extract data easily.
// const response = {
//     status: 200,
//     data: {
//         user: {
//             name: "Suresh",
//             age: 23
//         }
//     }
// };

// // Destructure API response
// const { status, data: { user: { name, age } } } = response;

// console.log(status); // 200
// console.log(name);   // "Suresh"
// console.log(age);    // 23

// Spread and Rest Operators (...) 
// 1. Spread Operator (...)
// The spread operator is used to expand elements from an array, object, or iterable into individual elements.
// The spread operator can copy or merge objects.
// Spread is useful for copying, merging, and passing values, while rest is helpful in functions and destructuring.

// Spread (...) is used to expand elements in arrays/objects.

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers]; // Creates a copy

// console.log(newNumbers); // [1, 2, 3]



// Rest Operator (...)
// Rest (...) is used to collect multiple values into an array or object.
// The rest operator is used to collect multiple values into an array or object.

// Object Property Shorthand in JavaScript
// that allows you to create objects more concisely when the property name matches the variable name.

// const user = { name: "Suresh", age: 23 };

// // Destructuring with shorthand
// const { name, age } = user;

// console.log(name); // "Suresh"
// console.log(age);  // 23

// Enhanced Object Literals

// ✅ Enhanced object literals make objects cleaner, more readable, and more powerful.
// ✅ Useful for dynamic properties, methods, and merging objects.

// const name = "Suresh";
// const age = 23;

// const user = { name, age }; // 👈 Shorthand

// console.log(user); // { name: "Suresh", age: 23 }


// 1. Promises
// A Promise is an object that represents a value that might be available now, later, or never. It has three states:

// Pending → Initial state, operation not completed.
// Resolved (Fulfilled) → Operation completed successfully.
// Rejected → Operation failed.

// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
    
//     setTimeout(() => {
//         if (success) {
//             resolve("Operation Successful! 🎉"); // If successful
//         } else {
//             reject("Operation Failed! ❌"); // If failed
//         }
//     }, 2000); // Simulating an API delay
// });

// console.log(myPromise); // Initially shows "pending"

//  Async/Await

// 🔹 async → Makes a function return a Promise.
// 🔹 await → Pauses execution until the Promise resolves.

// async function getUserData() {
//     try {
//         let userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         let user = await userResponse.json();

//         let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//         let posts = await postsResponse.json();

//         console.log({ user, posts });
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getUserData();

// ES6 Modules (import/export)
// ES6 Modules allow you to break JavaScript code into separate files and use import and export to share and reuse code across files.

// export
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const PI = 3.14159;

// ✅ Importing Named Exports

// import { add, subtract, PI } from "./math.js";

// console.log(add(5, 3)); // 8
// console.log(subtract(10, 6)); // 4
// console.log(PI); // 3.14159

// Optional Chaining (?.)
//  When accessing deeply nested properties in JavaScript, you often have to check if each property exists before accessing the next one

// console.log(user?.address?.city); // ✅ undefined (No error!)

// ✅ Use optional chaining (?.) when:

// You're working with API responses or external data where properties may not exist.
// You want to avoid excessive if checks for null or undefined.
// You need to safely access deeply nested properties.

// ❌ Avoid optional chaining when:
// You’re certain a property exists.
// You might be covering up potential programming errors.

// Nullish Coalescing Operator (??) in JavaScript

// If value is null or undefined, defaultValue is returned.
// Otherwise, value itself is returned.
// let name = null;
// let defaultName = "Guest";

// console.log(name ?? defaultName); // ✅ "Guest"
// Since name is null, it falls back to "Guest".

//  Practical Use Cases of ??
// (i) Providing Default Values
// let username = null;
// let displayName = username ?? "Anonymous";
// console.log(displayName); // ✅ "Anonymous"

// (ii) Avoiding Issues with || When 0 or "" is a Valid Value
// If 0 or an empty string "" is a meaningful value, || might cause unintended behavior.

// let userScore = 0;
// console.log(userScore || 100); // ❌ 100 (incorrect)
// console.log(userScore ?? 100); // ✅ 0 (correct)

// Using ?? with Optional Chaining (?.)

// const user = {
//     profile: null
// };

// console.log(user.profile?.name ?? "Guest"); // ✅ "Guest"

// When to Use ???
// ✅ Use ?? when:

// You only want to handle null or undefined values.
// You want to allow 0, false, or "" as valid values.
// ❌ Do not use ?? if:

// You need to handle all falsy values (use || instead).
// You want to mix ?? with && or || without parentheses.


// BigInt (BigInt)
// What is BigInt?
// BigInt is a built-in primitive data type introduced in ES11 (ECMAScript 2020) that allows you to work with integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).

// console.log(10n > 5n); // true
// console.log(10n === 10); // false (BigInt and Number are different types)
// console.log(10n == 10); // true (== allows type conversion)

// console.log(10n + BigInt(5)); // ✅ 15n

// console.log(Number(10n) + 5); // ✅ 15



// Task -1 
// i) Convert this function to an arrow function:
// function square(num) {
//     return num * num;
// }

// Ans -
// const square = (num)=> num * num

// ii) Use template literals to format this output:

// const product = "Laptop";
// const price = 50000;
// console.log("The price of " + product + " is " + price + " INR.");

// Ans : -
// const product = "Laptop";
//  const price = 50000;
// console.log(`The price of ${product} is ${price} INR`);

// iii) Use map with an arrow function:

// const numbers = [10, 20, 30];

// const newNumbers= numbers.map((num)=>{
//     console.log(num);
    
// })
