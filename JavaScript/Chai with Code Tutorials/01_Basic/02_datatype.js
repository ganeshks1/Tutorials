"use strict"; // Ensures the code is executed in strict mode, treating it as the newer version of JavaScript.
// This prevents the use of undeclared variables and other common mistakes.

// Note: The `alert` function won't work here because we're using Node.js, not a browser environment.
// alert(3 + 3); // Uncomment to test in a browser.

// Declaring variables with different data types
let name = "Ganesh"; // String => Always enclosed in double quotes ("") or single quotes ('').
let age = 18; // Number => Can store integers or floating-point numbers (up to 2^53).
let isLoggedIn = false; // Boolean => Represents true/false values.

let state; // Undefined => A variable declared but not assigned a value.
let isstate = null; // Null => Represents an empty or unknown value. Note: Its type is "object" due to a historical quirk in JavaScript.

// Additional data types in JavaScript:
// 1. BigInt: Used for integers larger than 2^53.
// 2. Symbol: Used for creating unique and immutable values, commonly used in React or for special object properties.
// 3. Object: Used for complex data structures.

// Displaying the data types of the declared variables
console.table([
  { Variable: "name", Type: typeof name },
  { Variable: "age", Type: typeof age },
  { Variable: "isLoggedIn", Type: typeof isLoggedIn },
  { Variable: "state", Type: typeof state },
  { Variable: "isstate", Type: typeof isstate },
  { Variable: "null", Type: typeof null }, // Type of null is "object" due to a legacy design decision in JavaScript.
]);

/*
Key Notes:
1. "use strict": Enforces stricter parsing and error handling in JavaScript.
2. typeof null: Historically, null is considered an "object" in JavaScript due to a bug in the language's initial implementation.
   - This behavior remains for backward compatibility.
3. BigInt and Symbol are additional data types introduced in modern JavaScript.
4. Use `console.table()` for structured and readable output, especially when debugging or displaying complex data.
*/