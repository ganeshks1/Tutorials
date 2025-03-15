// If Statements

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("If Function is Executed");
} else {
    console.log("If Function is Not Executed");
}

//---

if (2 === "2") {
    console.log("If Function is Executed");
} else {
    console.log("If Function is Not Executed");
}
// Comparison signs: <, > <=, >=, ==, !=, !==, ===, !===

//---

const score = 200;

if (score < 100) {
    let power = "Fly";
    console.log(`User has power to ${power}`); // power is limited to block scope; cannot run outside this if statement
} else if (score > 100) {
    let power = "Rocker";
    console.log(`User can fly like ${power}`);
}

//-- Shorthand of If Statement

const balance = 500;

if (balance == 500) console.log("balance is less than 500"),
console.log("next line");

// This is shorthand for an if statement. No need for curly braces; code must be completed in a single line. (Not recommended) If it needs to go on the second line, use "," and terminate with ";".

//--

const userLoggedIn = true;
const debitCard = true;
const userLoggedInGoogle = false;
const userLoggedInEmail = false;

if (userLoggedIn && debitCard) {
    console.log("user is authorised");
} else console.log("user is not authorised");

if (userLoggedInGoogle || userLoggedInEmail) {
    console.log("user is authorised");
} else console.log("User is Not Authorised");

// Special note: Condition needs to provide a true result to run the code further. 
// Confusing code like (true && false) can provide true results, so code execution depends on logical evaluations.
// &&, ||

//--- Advanced Testing
if ((userLoggedIn && debitCard) && (userLoggedInEmail || userLoggedInEmail)) {
    console.log("User is logged in and authorised");
} else {
    console.log("User is logged in but not authorised");
}

//--- Logical Operators

// 1. Logical AND (&&)
const isAdult = true;
const hasID = true;

if (isAdult && hasID) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}

// 2. Logical OR (||)
const hasGoogleLogin = false;
const hasFacebookLogin = true;

if (hasGoogleLogin || hasFacebookLogin) {
    console.log("User can log in");
} else {
    console.log("User cannot log in");
}

// 3. Logical NOT (!)
const isOnline = true;

if (!isOnline) {
    console.log("User is offline");
} else {
    console.log("User is online");
}

// 4. Nullish Coalescing (??)
const userDisplayName = null;
const defaultName = "Guest";

const name = userDisplayName ?? defaultName;
console.log(name); // Output: "Guest"

// 5. Optional Chaining (?.)
const user = {
    profile: {
        name: "Ganesh",
    },
};

console.log(user.profile?.name); // Output: "Ganesh"
console.log(user.settings?.theme); // Output: undefined

// 6. Ternary Operator (condition ? valueIfTrue : valueIfFalse)
const age = 20;

const eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);
// Output: "Eligible to vote"

// 7. Short-Circuiting
const isLoggedIn = true;
const userName = isLoggedIn && "Ganesh"; // Short-circuits if isLoggedIn is false
console.log(userName); // Output: "Ganesh"

const fallback = null || "Default Value"; // Short-circuits if the first value is truthy
console.log(fallback); // Output: "Default Value"

// 8. Bitwise Logical Operators

// Bitwise AND (&)
const a = 5; // 0101 in binary
const b = 3; // 0011 in binary

console.log(a & b); // Output: 1 (0001 in binary)

// Bitwise OR (|)
console.log(a | b); // Output: 7 (0111 in binary)

// Bitwise NOT (~)
console.log(~a); // Output: -6 (Flips the binary digits)

// Bitwise XOR (^)
console.log(a ^ b); // Output: 6 (0110 in binary)

//--- Special Note
// Use logical operators responsibly to ensure clean, readable, and maintainable code.