// Example of string concatenation (not recommended)
const name = "Ganesh";
const repoCount = 48;

console.log(name + repoCount + " any_custom_value"); 
// This type of concatenation is functional but not recommended due to readability and potential errors.


// Recommended way to concatenate strings: String Interpolation (Template Literals)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}. Then, custom value.`);
// This method is cleaner and more readable. It's called "String Interpolation" or "Template Literals."


// Advanced string manipulation

const gameName = new String("Ganesh-sharma-34-miraaroad"); 
// Using `new String()` creates a String object, which has advanced methods like `.length`, `.toUpperCase()`, etc.

console.log(gameName[1]);  // Outputs: "a" because it's the character at index 1.
console.log(gameName.length);  // Outputs: length of the string, which is 22 in this case.
console.log(gameName.__proto__); // Accesses the prototype of the String object.
console.log(gameName.toUpperCase()); // Converts the string to uppercase (outputs "GANESH-SHARMA-34-MIRAARROAD").
// Special note: `new String()` returns a non-primitive object, meaning the original string is not changed.

console.log(gameName.charAt(2));  // Outputs: "n", the character at index 2.
console.log(gameName.indexOf("s"));  // Outputs: 3, the index of the first occurrence of "s" (case-sensitive).


// String manipulation using `substring()` and `slice()`
const newString = gameName.substring(0, 4); 
// `substring()` extracts characters from index 0 to 4, but doesn't include index 4.
console.log(newString);  // Outputs: "Gane"

const anotherString = gameName.slice(-10, 4); 
// `slice()` allows negative indexes (starting from the end of the string). It may not behave as expected.
console.log(anotherString);  // Outputs an unexpected result due to the negative index.


// Removing spaces from the beginning and end of a string
const newStringTwo = "     Ganesh     Sharma";
console.log(newStringTwo);  // Outputs the string with leading and trailing spaces.
console.log(newStringTwo.length);  // Outputs the length of the string including spaces.

console.log(newStringTwo.trim().length); 
// `.trim()` removes spaces from the beginning and end of the string, but not from the middle.


// Replacing characters in a string
console.log(gameName.replace('-', ' ')); 
// Replaces the first occurrence of "-" with a space.


// Checking if a string contains a substring
console.log(gameName.includes("sharma")); 
// Outputs: true if "sharma" is found in the string, otherwise false.


// Splitting a string into an array based on a delimiter
console.log(gameName.split("-")); 
// Splits the string into an array using "-" as the delimiter.


// Final Notes: Always remember to explore and understand string methods from the MDN documentation. 
// The built-in string methods in JavaScript are powerful, and knowing them will make you more efficient in handling string manipulation tasks.