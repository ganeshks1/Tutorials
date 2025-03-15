//-------- this in object
const user = {
    username: "Ganesh",  // The username of the user
    price: 859,          // Price associated with the user
    welcomeMessage: function() {
        // `this` refers to the `user` object within this method context
        console.log(`${this.username}, welcome to website`); // Accessing `username` property of `user`
        console.log(this); // `this` refers to the `user` object, so it logs the whole `user` object
    }
}

// Calling the `welcomeMessage` method. At this point, `this.username` is "Ganesh".
user.welcomeMessage();  // Output: "Ganesh, welcome to website" and the entire `user` object

// Modifying the properties of `user` object
user.username = "Aarav"; // Changing `username` property
user.price = 100;        // Changing `price` property

// Calling the `welcomeMessage` method again after modifying the object properties
user.welcomeMessage();  // Output: "Aarav, welcome to website" and the updated `user` object

// `this` in a global scope (outside any function or object method)
console.log(this); // In Node.js environment, `this` refers to an empty object, while in browsers, `this` refers to the global `window` object



//--------- `this` in regular function

function chai() {
    let username = "hitesh"; // Variable inside the function's local scope
    console.log(this.username); // `this` refers to the global object (in non-strict mode)
}

chai();  // When called, it prints `undefined` because `this` refers to the global object, not the function's local context.

// --------- Arrow function and `this` : need more research for "this" in arrow function and not that much important 

const chai2 = () => {
    let username = "hitesh2";  // Local variable inside the arrow function
    console.log(this);  // In arrow functions, `this` is lexically inherited from the surrounding context
}

chai2(); // Calling the arrow function

// Result: 
// - In the browser (non-strict mode), `this` refers to the global `window` object.
// - In Node.js (non-strict mode), `this` refers to the global object (i.e., `global`).
// - This is because arrow functions do not have their own `this`; they inherit `this` from the scope in which they are defined.

// Expected output in the browser:
// The output will be the global `window` object, which includes various properties such as `window.document`, `window.alert`, etc.
// It will look like: `{window: Window, ...}`

// Expected output in Node.js:
// The output will be the `global` object, which includes various global properties in Node.js, such as `global.console`, `global.setTimeout`, etc.


// ---------- Arrow Function Syntax
// The basic syntax of an arrow function is: () => {} and  ()=> ()

// Example 1: Arrow function with curly braces and explicit return
const addTwo = (num1, num2) => {
    return num1 + num2; // The return keyword is required if using curly braces
} 
console.log(addTwo(3, 6));  // Output: 9

// Example 2: Arrow function without curly braces (implicit return)
const addition = (num1, num2) => num1 + num2; // No need for the `return` keyword when there are no curly braces
console.log(addition(23, 99));  // Output: 122

// Example 3: Arrow function with parentheses for better readability
const subtraction = (num1, num2) => (num1 - num2); // Parentheses are optional but used for clarity
console.log(subtraction(300, 140));  // Output: 160

// Example 4: Returning an object from an arrow function
const anotherObject = () => ({ username: "hitesh" }); // Use parentheses to return an object directly
console.log(anotherObject());  // Output: { username: "hitesh" }

// Improvements and Key Notes:
// 1. The use of parentheses in arrow functions is only necessary when returning an object directly, as it avoids confusion with code block syntax. 
// 2. Implicit returns (without curly braces) work well for simple expressions, but if the body of the function is more complex, explicit `return` with curly braces should be used.