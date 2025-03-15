// **Function Definition**
function myName() {
    // Each console.log will output one character of the name.
    console.log("G");
    console.log("A");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");
}

// **Function Reference vs Execution**
myName;    // Function reference; no execution, so nothing appears in the console.
myName();  // Function execution; outputs the name character by character.

// -------------------------- **Without Return** --------------------------

function calculation(num1, num2) {  
    // Parameters `num1` and `num2` are placeholders for input values.
    console.log(num1 + num2);  // Outputs the sum directly in the console.
}

calculation(2, 3);  // Arguments 2 and 3 are passed; outputs 5.

const result = calculation(2, 3);  
// The function only performs console.log and doesn't return any value, 
// so `result` is undefined.
console.log(`result: ${result}`); // Outputs: "result: undefined"

// -------------------------- **With Return Value** --------------------------

function calculation2(num1, num2) {
    // Perform the calculation and store the result in a local variable.
    let result2 = num1 + num2;
    return result2; // Return the result to the caller.

    // Note: Code after a `return` statement is unreachable.
    console.log("Ganesh"); // This will never run.
}

const result2 = calculation2(2, 114);  
// The returned value is stored in the `result2` variable.
console.log(`result2: ${result2}`); // Outputs: "result2: 116"

// -------------------------- **Default Parameters** --------------------------

function loginUserMessage(username1 = "Sam") {
    // If no argument is provided or if it's `undefined`, the default value "Sam" is used.
    if (!username1) { // Checks if username1 is falsy (undefined, null, or empty string); i can also use (username === undefined) but this will not cover null value or empty string.
        console.log("Please Enter a User Name");
        return; // Ends the function execution without returning a value.
    }
    return `${username1} just logged in`; // Returns a message with the username.
}

loginUserMessage("Ganesh");  
// The function returns "Ganesh just logged in" but does not display it in the console.

console.log(loginUserMessage("Ganesh"));  
// Outputs: "Ganesh just logged in"

console.log(loginUserMessage());  
// Outputs: "Sam just logged in" because the default value "Sam" is used.

console.log(loginUserMessage(""));  
// Outputs: "Please Enter a User Name" because the empty string is falsy.

// -------------------------- **Key Takeaways** --------------------------

// 1. **Function Reference vs Execution**:
//    - Referencing the function (e.g., `myName`) doesn't execute it.
//    - Executing the function (e.g., `myName()`) runs the code inside.

// 2. **Return Values**:
//    - Without a `return` statement, functions implicitly return `undefined`.
//    - To use the result of a function, it must explicitly `return` a value.

// 3. **Default Parameters**:
//    - You can assign default values to function parameters, which are used if no argument is provided or if `undefined` is passed.

// 4. **Unreachable Code**:
//    - Code after a `return` statement in a function will not execute.





// ----------- Using Rest Operator in Functions -----------

// The `rest` operator (`...`) collects all remaining arguments into an array.
function cartPriceCalculation(...num1) {
    // `num1` will be an array containing all the arguments passed to the function.
    console.log("Array of prices:", num1); // Logs the collected arguments as an array.
    return num1; // Returns the array of prices.
}

console.log(cartPriceCalculation[200, 400, 883]); // Outputs: [200, 400, 883]

// ----------- Passing Objects to Functions -----------

// Objects for demonstration
const user1 = {
    username: "Ganesh",
    price: 199
};

const user2 = {
    username: "Rakesh",
    price: 500
};

// Function to process an object
function objectToFunction(anyObject) {
    // Accessing object properties using dot notation
    console.log(`The object's username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// Passing predefined objects
objectToFunction(user1); // Outputs: The object's username is Ganesh and the price is 199
objectToFunction(user2); // Outputs: The object's username is Rakesh and the price is 500

// Passing an inline object directly
objectToFunction({
    username: "Ramesh",
    price: 400
}); // Outputs: The object's username is Ramesh and the price is 400

// ----------- Passing Arrays to Functions -----------

// An array for demonstration
const myArray = [200, 400, 399, 500];

// Function to process an array
function arrayToFunction(anyArray) {
    // Accessing elements of the array using indexing
    console.log(`The third element of the array is: ${anyArray[2]}`);
}

// Passing a predefined array
arrayToFunction(myArray); // Outputs: The third element of the array is: 399

// Directly passing an inline array
arrayToFunction([100, 300, 700, 900]); // Outputs: The third element of the array is: 700

// Logging the full array for verification
console.log("Original array:", myArray); // Outputs: [200, 400, 399, 500]

// ----------- Spread Operator Examples -----------

// Using the `spread` operator to pass array elements as arguments
function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log("Sum using spread:", sum(...nums)); // Outputs: 6

// Merging arrays using `spread`
const moreNumbers = [4, 5, 6];
const mergedArray = [...nums, ...moreNumbers];
console.log("Merged array:", mergedArray); // Outputs: [1, 2, 3, 4, 5, 6]

// Creating a shallow copy of an object using `spread`
const user3 = { ...user1, username: "Mahesh" }; // Copy user1 and override the username
console.log("Copied object with modification:", user3); 
// Outputs: { username: 'Mahesh', price: 199 }