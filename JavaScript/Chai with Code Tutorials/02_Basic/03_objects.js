// There are two main methods to declare objects in JavaScript:
// 1. **Object Literals**: A simple and direct way to create objects using curly braces `{}`.
// 2. **Constructors**: Objects created using constructors are unique instances and are often referred to as "singleton" objects.
//    - A singleton object is one of its kind and is created using a constructor.
//    - Objects created through methods other than constructors can have multiple instances.

// Declaring objects through constructors typically uses methods like `Object.create()` (we'll learn about this later).

// Let's start by declaring an object using object literals:
// Objects use key-value pairs, unlike arrays that use index numbers for data.

const mySymbol2 = Symbol(); // To add a symbol to an object, declare it first.
// Symbols can also take a description as a parameter when defining, e.g., Symbol("description").
// Symbols are unique and can be used to define private or non-colliding keys in an object.

const jsUser = {
    name: "Ganesh", 
    age: 34,
    gender: "Male",
    mySymbol1: "My Symbol Value", // Incorrect way to use a symbol as it's treated as a string, not a symbol
    [mySymbol2]: "My Symbol Value", // Correct way to use a symbol as a key in an object
    "email address": "ganesh@google.com", // Note: Keys with spaces must be accessed using square brackets
    isLoggedin: false,
    courses: ["Maths", "Science", "History"],
    address: {
        apartment: 1134, // Fixed typo from "aprtment" to "apartment"
        street: "New Delhi Road",
        city: "Delhi",
        country: "India"
    }
};

// Keys like `name`, `age`, etc., are treated as strings internally by JavaScript.
// Keys with spaces, like `"email address"`, must be accessed using square brackets:
// Example: jsUser["email address"]

console.log(jsUser);
console.log(jsUser.age); // Accessing the age property
console.log(jsUser["age"]); // Accessing age using square brackets

// Symbol Usage:
console.log(`Type of mySymbol1 key: "${typeof mySymbol1}" and its value: "${jsUser.mySymbol1}"`); 
// Output will show that mySymbol1 is treated as a string key.

console.log(`Type of mySymbol2 key: "${typeof mySymbol2}" and its value: "${jsUser[mySymbol2]}"`);
// Important Note: When checking the type of a symbol, do NOT use square brackets ([]).
// Using [] either creates an array or accesses the value of the symbol's property.
// This shows the type of the value (e.g., "string") rather than the actual symbol type.

// Updating properties of an object
jsUser.age = 30; // Updating the age property
console.log(`Updated age: ${jsUser.age}`);

jsUser["email address"] = "sharma@google.com"; // Updating the email address
console.log(`Updated email address: ${jsUser["email address"]}`);

// Freezing an object
Object.freeze(jsUser); // Freezing prevents further modifications to the object
// Note: `Object.freeze()` makes the object immutable, but it doesn't affect nested objects.

jsUser.age = 20; // Attempting to update a frozen property (will not work)
console.log(`Attempt to update age after freezing: ${jsUser.age}`); // Value remains unchanged

// Adding a method to the object
jsUser.greeting = function () {
    console.log(`Hello JS User: ${this.name}`); // `this` refers to the current object
};
// Note: Adding methods after freezing the object (like above) will not work 
// if the object was frozen before adding the `greeting` method. 
// You should add all methods before freezing the object.

console.log(jsUser.greeting); // Logs the function reference
console.log(jsUser.greeting()); // Executes the function

// Note: The last `console.log()` prints `undefined` because the `greeting` function 
// does not explicitly return anything. This is expected behavior and will be covered in future lessons.