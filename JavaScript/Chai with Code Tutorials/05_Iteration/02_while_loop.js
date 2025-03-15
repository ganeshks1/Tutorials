/*

while (condition) {    
    // Code to execute
}

// The `while` loop continues as long as the condition evaluates to `true`.
*/

// Example 1: Using a `while` loop to increment a value by 2
let index = 0;
while (index <= 10) { 
    // Loop will run as long as `index` is less than or equal to 10
    console.log(`value of index ${index}`);
    index = index + 2; // Increment `index` by 2 after each iteration
}

// Example 2: Looping through an array with a `while` loop
let superHeroes = ["Superman", "Spiderman", "Hulk", "Ironman", "Martin"]; 

let myArray = 0;
while (myArray < superHeroes.length) { 
    // Loop will run as long as `myArray` is within the bounds of the array
    console.log(`value of my array ${superHeroes[myArray]}`);
    myArray = myArray + 1; // Increment `myArray` to avoid an infinite loop
}

//---- do-while loop
// A `do-while` loop ensures that the block of code inside is executed **at least once**, 
// regardless of whether the condition evaluates to `true` or not.

let i = 0;
do {
    console.log(`value of i ${i}`); // Executes at least once
    i++; // Increment `i`
} while (i <= 5); // Condition is checked after each iteration