/*

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

// let in a for loop’s () is block-scoped to the {} block of the loop.
// JavaScript considers the entire for statement (both () and {}) as one scope block.
// This behavior prevents pollution of the global scope and avoids bugs caused by shared variables, especially in asynchronous code.
// Basic for loop
for (let i = 0; i < 10; i++) {
    // Loop runs from i = 0 to i < 10 (i.e., 0 to 9)
    const element = i; // Assigning the value of i to the variable `element`
    console.log(element); // Printing the current value of `element`
}

//-- For loop with an if condition
for (let i = 0; i < 10; i++) {
    // Loop runs from i = 0 to i < 10
    const element = i;

    // Adding a condition to check if i equals 5
    if (i == 5) {
        console.log("5 is the best number"); // This message gets logged when i equals 5
    }

    console.log(element); // Logging the current value of `element` for every iteration
}

//--- Nested loop for table creation
for (let i = 1; i <= 5; i++) {
    // Outer loop runs from i = 1 to i <= 5
    // This determines the number being multiplied

    for (let j = 1; j <= 5; j++) {
        // Inner loop runs from j = 1 to j <= 5
        // This determines the multiplier
        console.log(`${i} x ${j} = ${i * j}`); // Logs the product of i and j
    }
    // At the end of each iteration of the inner loop, the outer loop moves to the next value
}

//-- Loop for Array (Iterating through an array)
let superHeroes = ["Superman", "Spiderman", "Hulk", "Ironman", "Martin"]; 
// An array of superhero names

// Length of the array is 5, but array indices start from 0 and go up to 4
for (let i = 0; i <= superHeroes.length; i++) {
    // Loop runs from i = 0 to i <= superHeroes.length (0 to 5)
    const element = superHeroes[i]; // Accessing each element of the array by its index
    console.log(element); // Logging the current superhero name
}

/* Explanation of why `undefined` occurs:
   - The array `superHeroes` has 5 elements, indexed from 0 to 4.
   - If the condition `i <= superHeroes.length` is used instead of `i < superHeroes.length`,
     the loop will run one extra iteration when `i` equals `superHeroes.length` (i.e., 5).
   - Since there is no element at index 5 in the array, accessing `superHeroes[5]` results in `undefined`.
   - Correcting the loop condition to `i < superHeroes.length` prevents this by ensuring the loop stops at the last valid index.
*/


//--- Break and Continue

// Loop with 'break'
// This loop will terminate as soon as the value of i equals 5.
for (i = 0; i < 10; i++) {
    if (i == 5) {
        console.log(`5 detected`); // Logs a message when i equals 5
        break; // Exits the loop immediately
    }
    console.log(`Value of i ${i}`); // Logs the current value of i for each iteration
}

// Output:
// Value of i 0
// Value of i 1
// Value of i 2
// Value of i 3
// Value of i 4
// 5 detected

// Explanation:
// The 'break' statement stops the loop entirely when the condition (i == 5) is met.
// As a result, any remaining iterations are skipped.

// ----

// Loop with 'continue'
// This loop skips the iteration where i equals 5 but continues with the rest of the iterations.
for (i = 0; i < 10; i++) {
    if (i == 5) {
        console.log(`5 detected`); // Logs a message when i equals 5
        continue; // Skips the current iteration and moves to the next one
    }
    console.log(`Value of i ${i}`); // Logs the current value of i for each iteration, except when i == 5
}

// Output:
// Value of i 0
// Value of i 1
// Value of i 2
// Value of i 3
// Value of i 4
// 5 detected
// Value of i 6
// Value of i 7
// Value of i 8
// Value of i 9

// Explanation:
// The 'continue' statement skips the iteration where i == 5, so the line "Value of i 5" is not logged.
// The loop continues with the next iteration (i == 6 onwards).

// ----

// Key Notes on 'break' and 'continue':
// 1. 'break' terminates the loop immediately when the condition is met, preventing further iterations.
// 2. 'continue' skips the current iteration and moves to the next one without terminating the loop.
// 3. Both can be used to control the flow of loops based on conditions.