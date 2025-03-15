let score = "33";

console.log(typeof score); // Check the type of `score`, which will be a string.
console.log(typeof (score)); // Parentheses are optional; same result as above.

let stringToNumber = Number(score); // Convert the string to a number using `Number()` method.
console.log(typeof stringToNumber); // Output will be "number".

// Analyze `Number()` conversions:
// - When a string is purely numeric (e.g., "33"), it converts to a number.
// - If the string contains non-numeric characters (e.g., "33abc"), it converts to NaN (Not a Number).
// - Boolean values: `true` converts to 1, `false` converts to 0.

console.log(Number("33"));       // Output: 33
console.log(Number("33abc"));    // Output: NaN
console.log(Number(true));       // Output: 1
console.log(Number(false));      // Output: 0

// Boolean conversion examples
console.log(Boolean("")); // Empty string converts to `false`.

let isLoggedIn = 1;
let numberToBoolean = Boolean(isLoggedIn); // Convert the number to a boolean using `Boolean()`.
console.log(isLoggedIn, numberToBoolean); // Output: 1 true

// Notes on `Boolean()` conversion:
// - Empty strings `""` or `0` are treated as `false`.
// - Non-empty strings (e.g., "Ganesh") or any non-zero number are treated as `true`.

// ************* OPERATIONS **************

let value = 59;
let negativeValue = -value; // Convert a positive number to negative.
console.log(negativeValue); // Output: -59

// Basic mathematical operations
console.log(2 + 2); // Addition: Output 4
console.log(2 - 2); // Subtraction: Output 0
console.log(2 * 2); // Multiplication: Output 4
console.log(2 / 2); // Division: Output 1
console.log(2 % 2); // Modulus (remainder): Output 0
console.log(2 ** 2); // Exponentiation (power): Output 4

// String concatenation
let str1 = "hello ";
let str2 = "ganesh";
let str3 = str1 + str2; // Concatenates str1 and str2.
console.log(str3); // Output: "hello ganesh"

// Mixing numbers and strings in operations
console.log("1" + 2); // "12": `+` treats "1" as a string and concatenates.
console.log(1 + "2"); // "12": Same result as above.
console.log("1" + 2 + 2); // "122": `+` treats "1" as a string and concatenates everything.
console.log(2 + 3 + "1"); // "51": `2 + 3` is calculated first (as numbers), then concatenated with "1".

/*
Key Notes:
1. When mixing strings and numbers, the `+` operator will treat the result as a string if at least one operand is a string.
2. To ensure proper numeric calculations, convert strings to numbers using `Number()` before performing operations.
3. Boolean conversions:
   - Empty or zero values (`""`, `0`, `null`, `undefined`, `NaN`) are `false`.
   - Non-empty or non-zero values are `true`.
4. Exponentiation (`**`) is a shorthand for power calculations, equivalent to `Math.pow(base, exponent)`.
*/