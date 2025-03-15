// Example 1: Using map to add 5 to each number in the array
const numbers = [10, 25, 38, 45, 60, 72, 89, 100];

// map creates a new array by applying a transformation function to each element
const numberAddition = numbers.map((number) => number + 5); // Adds 5 to each element in 'numbers'
console.log(numberAddition); // Logs: [15, 30, 43, 50, 65, 77, 94, 105]


// Example 2: Using method chaining (map + filter)
const mynumbers = numbers
    .map((num) => num + 10)         // First map: Adds 10 to each element
    .map((num) => num + 3)          // Second map: Adds 3 to the result of the first map
    .filter((num) => num > 50);     // Filters out elements <= 50

console.log(mynumbers); // Logs: [63, 78, 85, 98, 112]