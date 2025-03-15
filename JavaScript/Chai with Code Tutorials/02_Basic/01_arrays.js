// Arrays

const myArray = [0, 4, 3, 6, 7, 8];
console.log(`Value of myArray: ${myArray}`);
console.log(`Value at index 2 of myArray: ${myArray[2]}`);

const myArray2 = new Array(1, 4, 2, 6, 2, 6); // Creating an array using the Array constructor
console.log(`Value of myArray2: ${myArray2}`);

// Methods for Arrays

myArray.push(8); // Adds an element to the end of the array
myArray.push(3);
console.log(`Updated myArray with push: ${myArray}`);

myArray.pop(); // Removes the last element from the array
console.log(`Updated myArray with pop: ${myArray}`);

myArray.unshift(19); 
// Adds an element to the beginning of the array.
// Note: This is not recommended for performance-critical tasks, as it shifts all other elements.
console.log(`Updated myArray with unshift: ${myArray}`);

myArray.shift(); 
// Removes the first element of the array. Like unshift, use only in extreme cases as it shifts all elements back.
console.log(`Updated myArray with shift: ${myArray}`);

console.log(myArray.includes(8)); 
// Checks if the array contains the value `8`. Returns `true` or `false`.

console.log(myArray.indexOf(8)); 
// Searches the array for the value `8` and returns its index. If not found, it returns `-1`.

const newArray = myArray.join(); 
// Converts the array to a string by concatenating its elements with a default separator (`,`).
console.log(`Type of newArray is ${typeof newArray}; and type of myArray is ${typeof myArray}`);

// Slice and Splice

console.log(`Original myArray: ${myArray}`);

// Slice
const myArraySlice = myArray.slice(1, 3); 
// Creates a new array with elements from index 1 up to (but not including) index 3.
// Does not modify the original array.
console.log(`Original myArray: ${myArray}; Sliced Array: ${myArraySlice}`);

// Splice
const myArraySpliced = myArray.splice(1, 3); 
// Removes elements from index 1 to 3 (inclusive) from the original array.
// The removed elements are returned as a new array.
console.log(`Original myArray after splice: ${myArray}; Spliced Array: ${myArraySpliced}`);