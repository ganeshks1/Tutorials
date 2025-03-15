let userEmail = "ganesh@google.com";

if (userEmail) {
    console.log("User has Email");
} else {
    console.log("User doesn't have Email");
}

// Explanation:
// Truthy value means the variable is considered "true" in a Boolean context. For example, any non-empty string is truthy.
// Falsy value means the variable is considered "false" in a Boolean context. Examples include undefined, null, or an empty string.

// Truthy and Falsy Values in JavaScript

// List of FALSY values in JavaScript:
// These values are considered false in a Boolean context:
const falsyValues = [
    false, // Boolean false
    0, // The number zero
    -0, // Negative zero
    0n, // BigInt zero
    "", // Empty string
    null, // Null value
    undefined, // Undefined value
    NaN, // Not-a-Number
];
console.log("Falsy Values:", falsyValues);

// List of TRUTHY values in JavaScript:
// These values are considered true in a Boolean context:
const truthyValues = [
    true, // Boolean true
    {}, // An empty object
    [], // An empty array
    " ", // A string with a single space
    "0", // A string containing zero
    "false", // A string containing 'false'
    Infinity, // Positive infinity
    -Infinity, // Negative infinity
    new Date(), // A valid Date object
    42, // Any non-zero number
    -42, // Negative non-zero number
];
console.log("Truthy Values:", truthyValues);

// Improved Example with Truthy and Falsy Checks

let userPassword = ""; // Empty string (Falsy)
let userAge = 25; // Non-zero number (Truthy)
let userAddress = null; // Null value (Falsy)

if (userPassword) {
    console.log("Password is set");
} else {
    console.log("Password is missing"); // This will run
}

if (userAge) {
    console.log("Age is valid"); // This will run
} else {
    console.log("Age is not valid");
}

if (userAddress) {
    console.log("Address is provided");
} else {
    console.log("Address is missing"); // This will run
}

// Special Note:
// - Use `Boolean(variable)` to explicitly check if a value is truthy or falsy.
// - Always validate inputs before assuming they are truthy or falsy to prevent unexpected behavior.

console.log("Is userEmail truthy?", Boolean(userEmail)); // Output: true
console.log("Is userPassword truthy?", Boolean(userPassword)); // Output: false
console.log("Is userAddress truthy?", Boolean(userAddress)); // Output: false

//--- extra notes

//-- chacking if array is empty or not 

const userEmail1 = []

if (userEmail1.length === 0 ){
 console.log( " array is empty ")
} else console.log("array has email address`")

// checking if object is empty or not 

const myobject = {
    neame: 2
}

if (Object.keys(myobject).length === 0 ){
    console.log("object is empty")

}else console.log(" object has some value.")