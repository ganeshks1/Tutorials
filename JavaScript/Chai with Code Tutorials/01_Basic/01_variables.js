// Always strive to make your code clean, simple, readable, and future-proof.
// The use of semicolons (`;`) is optional in JavaScript, as it has an automatic semicolon insertion feature.

console.log("Hello World"); // Basic output to the console.

// Declaring variables with different keywords
const accountId = 2402; 
// `const` is used for variables whose value should not change. 
// It ensures immutability and helps avoid accidental modifications.
// Note: Numbers do not need quotation marks ("").

let accountEmail = "ganesh@gmail.com"; 
// `let` is used for variables that may need reassignment.

var accountPassword = "12345"; 
// `var` is an older way to declare variables, but it has functional and global scope issues, 
// so it's not recommended in modern JavaScript.

accountCity = "Mumbai"; 
// Declaring a variable without `let`, `const`, or `var` makes it global automatically. 
// This is a bad practice and should be avoided.

let accountState; 
// Declaring a variable without assigning a value initializes it as `undefined`.

let accountCountry = ""; 
// Declaring an empty string for variables that will hold string values later.

// Reassignment examples
// Note: `accountId` is a `const`, so attempting to reassign it would throw an error.
accountEmail = "ganesh.ks@live.com";
accountPassword = "212121";
accountCity = "Delhi";

// Outputting the variables in a table format for better readability.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountCountry]);

/*
Key Points:
1. Use `const` for variables that should not change.
2. Use `let` for variables that may need reassignment.
3. Avoid using `var` or declaring variables without keywords (e.g., `accountCity = "Mumbai"`).
4. Use meaningful variable names and consistent formatting for readability and maintainability.
5. Use `console.table()` to display data in a structured format when working with arrays or objects.
*/