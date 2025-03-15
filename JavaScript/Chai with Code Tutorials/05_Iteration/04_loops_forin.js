//--- for...in for objects

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swifty by apple"
};

// The for...in loop iterates over the keys of an object
for (const key in myObject) {
    console.log(key); // Logs the key (e.g., 'js', 'cpp', etc.)
    // console.log(`key = ${key} for value ${[myObject.values]}`); // Not a correct way, myObject.values does not exist
    console.log(`key ${key} = for value ${myObject[key]}`); // Correct way to access the value using the key
}

const programming = ["js", "py", "ty", "ruby"];

// The for...in loop also works with arrays, but it iterates over the indices (keys) of the array
for (const key in programming) {
    console.log(key); // Logs the index (e.g., '0', '1', etc.)
    console.log(programming[key]); // Logs the value at each index (e.g., 'js', 'py', etc.)
}
// Note: When working with arrays, for...of is often preferred as it directly iterates over the values instead of indices.

//---
const myMap = new Map(); // Maps are iterable but behave differently than plain objects
myMap.set("IN", "India");
myMap.set("US", "United States of America");
myMap.set("UK", "United Kingdom");
myMap.set("AE", "United Arab Emirates");
myMap.set("PK", "Pakistan");
myMap.set("EU", "Europe");
myMap.set("US", "United States of America"); // Duplicate key, will overwrite the previous entry
myMap.set("CH", "China");

// Using for...in for a Map does NOT work because Map is not enumerable in the same way as plain objects
for (const key in myMap) {
    console.log(key); // This will not log anything because for...in is not designed for Maps
}

// Correct way to iterate over a Map
for (const [key, value] of myMap) {
    console.log(`key = ${key}, value = ${value}`); // Logs both key and value for each entry in the Map
}

/* Important Notes:
1. `for...in` works for plain objects and arrays to loop over keys (or indices).
2. `for...of` works for iterable objects like Arrays, Maps, Sets, etc., to directly loop over values.
3. Maps are not enumerable with `for...in` and require `for...of` to properly iterate over their entries.
4. Using `for...of` for arrays is often preferred because it directly gives you values, not indices.
*/