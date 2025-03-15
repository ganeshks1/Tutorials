// Push of Two Arrays

const marvelHeroes = ["Ironman", "Spiderman", "Hulk", "Clint"];
const dcHeroes = ["Superman", "Batman", "Flash"];

marvelHeroes.push(dcHeroes);
// This operation adds `dcHeroes` as a single element (nested array) to the end of `marvelHeroes`.
// It does not merge the arrays into a single flat array.
console.log(marvelHeroes); // Output: ["Ironman", "Spiderman", "Hulk", "Clint", ["Superman", "Batman", "Flash"]]

console.log(marvelHeroes[4][1]); 
// Accessing the second element of the nested array (index 4 is `dcHeroes`, index 1 is "Batman").

// Concatenation and Spread of Two Arrays

const array1 = [1, 2, 4, 5, 2, 5];
const array2 = [9, 6, 7, 5, 7];

const concatArray = array1.concat(array2);
// Concatenates two arrays into a single array. 
// This does not modify the original arrays but creates a new one.
console.log(concatArray);

const spreadArray = [...array1, ...array2];
// Same as `concat` but uses the spread operator to merge the arrays.
// Recommended for readability and modern JavaScript practices.
console.log(spreadArray);

// Flattening Nested Arrays

const arrayOfArray = [
  2,
  4,
  6,
  [3, 5, 2, 5],
  "Ganesh",
  ["school", "office", ["canteen", "toilet"]],
];
console.log(arrayOfArray);
// The above array contains multiple levels of nesting.

const singleArray_arrayOfArray = arrayOfArray.flat(Infinity);
// The `flat()` method creates a new array by flattening nested arrays to the specified depth.
// `Infinity` flattens all levels of nesting.
console.log(singleArray_arrayOfArray);

// Checking and Converting to Arrays

console.log(Array.isArray("Ganesh")); 
// `Array.isArray` checks if the given input is an array. Returns `true` or `false`.

console.log(Array.from("Ganesh")); 
// Converts a string into an array where each character becomes an element.

console.log(Array.from({ name: "Ganesh" })); 
// Attempting to convert a non-array-like object (without iterable properties).
// Since it can't be converted, it returns an empty array.
// Special Note: `Array.from()` works with iterable or array-like objects only.

let score1 = 393;
let score2 = 955;
let score3 = 194;

console.log(Array.of(score1, score2, score3)); 
// Creates a new array from the provided elements.
// Unlike `Array()`, it ensures all elements are added as-is, even single numbers.