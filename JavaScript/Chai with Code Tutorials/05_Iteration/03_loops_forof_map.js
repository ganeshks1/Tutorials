// These loops are array-specific, but some can be used with strings and other iterable objects (e.g., maps, sets).

// Example 1: Looping through an array using `for...of`
const myArray = [1, 2, 3, 4, 5, 6, 7];
for (const array of myArray) {
    console.log(array); // Prints each element of the array
}

// Example 2: Looping through a string using `for...of`
// `for...of` can iterate over strings and other iterables (like arrays, maps, etc.).
const greeting = "Ganesh Sharma";
for (const greet of greeting) {
    if (greet == " ") {
        continue; // Skips spaces while iterating over the string
    }
    console.log(greet); // Prints each character except spaces
}

//---- Example 3: Working with a Map
const myMap = new Map(); // Creating a new Map instance

// Adding key-value pairs to the map
myMap.set("IN", "India");
myMap.set("US", "United States of America");
myMap.set("UK", "United Kingdom");
myMap.set("AE", "United Arab Emirates");
myMap.set("PK", "Pakistan");
myMap.set("EU", "Europe");
myMap.set("US", "United States of America"); // Duplicate key, will overwrite previous entry
myMap.set("CH", "China"); 

console.log(myMap); // Logs the entire map with key-value pairs

// Iterating over a Map using 
for (const [key, value] of myMap) {
    console.log(`${key} and the value is :- ${value}`); // Prints keys and their corresponding values
}

//--- for...of loops for objects; it won't work directly

const myObject = {
    name: "ganesh",
    age: 34,
    school: "podar school",
    city: "mumbai"
};

// This will throw an error because `for...of` cannot be used directly on objects.
// Objects are not iterable by default, unlike arrays, strings, or maps.
for (const [key, value] of myObject) {
    console.log(`The key value of ${key} is ${value}`);
}

//--- Correct way: Convert object to iterable using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(`The key is "${key}" and its value is "${value}"`);
}

//--- Alternatively: Using `for...in` to iterate over keys of the object
for (const key in myObject) {
    console.log(`The key is "${key}" and its value is "${myObject[key]}"`);
}