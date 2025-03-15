// ===================== Primitive Data Types =====================

// 1. String: Represents a sequence of characters.
const score = 100; // number
const scoreValue = 200.2; // number

// 2. Boolean: Represents true or false.
const isLoggedIn = false; // boolean

// 3. Null: Represents an empty or non-existent value.
const outsideTemp = null; // null (Note: typeof null is always "object" due to a JavaScript bug)

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let userEmail; // undefined

// 5. Symbol: A unique and immutable identifier used for object properties.
const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol (Even if the description is same, each Symbol is unique)
console.log(id === anotherId); // false, Symbols are unique even with the same description.

// 6. BigInt: Used for very large integers beyond the Number type's limit.
const bigInteger = 49484994883498859958399388959838594n; // BigInt (use 'n' for BigInt)
console.log(bigInteger); // Logs the BigInt value
console.log(typeof bigInteger); // Logs: bigint

// ===================== Non-Primitive (Reference) Data Types =====================

// Arrays: Ordered collections of values.
const array = ["ram", "shyam", "lakhan"];
console.log(array); // Logs the array

// Objects: Collections of key-value pairs.
let myObject = {
    name: "Ganesh",
    age: 43
};
console.log(myObject); // Logs the object

// Functions: Callable blocks of code (functions are also objects in JavaScript).
let myFunction = function() {
    console.log("hello world");
};
myFunction(); // Logs: hello world

// ===================== Stack vs. Heap Memory =====================

// Primitive types (Stored in Stack memory):
let myYoutubeChannel = "SwadistDairies.com";
console.log(myYoutubeChannel); // Logs: "SwadistDairies.com"

let anotherName = myYoutubeChannel; // Copies the value to another variable
anotherName = "Think and Explore"; // Changes only 'anotherName'

console.table([myYoutubeChannel, anotherName]); // Logs both values separately

// In this case, 'myYoutubeChannel' remains unchanged because primitives are copied by value.


// Non-Primitive types (Stored in Heap memory):
let userOne = {
    name: "Ganesh",
    age: 23
};

let userTwo = userOne; // Both 'userOne' and 'userTwo' refer to the same object in memory

userTwo.name = "Aarav"; // Modifies the object referenced by both userOne and userTwo
userTwo.age = 12;

console.log([userOne, userTwo]); // Both userOne and userTwo reflect the changes

// In this case, both 'userOne' and 'userTwo' are referencing the same object, so changes to one affect the other.