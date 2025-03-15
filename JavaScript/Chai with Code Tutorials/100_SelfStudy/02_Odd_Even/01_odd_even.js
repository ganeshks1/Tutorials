// CHALLENGE: Even or Odd
// Write a function that takes a single number as input.
// - If the number is even, return "Even".
// - If the number is odd, return "Odd".
// - If the input is not a number, return "Not a number".

function checkEvenOrOdd(input) {
    if (input / 2 ){
        return "Even"
    } 
    return "Odd"
}

console.log(checkEvenOrOdd(4))
// Test cases
console.log(checkEvenOrOdd(4));   // Expected: "Even"
console.log(checkEvenOrOdd(7));   // Expected: "Odd"
console.log(checkEvenOrOdd("a")); // Expected: "Not a number"
console.log(checkEvenOrOdd(0));   // Expected: "Even"

// Try solving it, and let me know your solution or if you need hints!

///actual solution 

function checkEvenOrOdd(input) {
    if (typeof input !== "number") {
        return "Not a number"; // Check if the input is not a number
    }
    if (input % 2 === 0) { // Check if the remainder when divided by 2 is 0
        return "Even";
    }
    return "Odd"; // Otherwise, it's odd
}

// Test cases
console.log(checkEvenOrOdd(4));   // Expected: "Even"
console.log(checkEvenOrOdd(7));   // Expected: "Odd"
console.log(checkEvenOrOdd("a")); // Expected: "Not a number"
console.log(checkEvenOrOdd(0));   // Expected: "Even"