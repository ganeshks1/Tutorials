// Example 1: Using reduce to sum up an array of numbers
const myNum = [1, 2, 3, 4, 5]; // Array of numbers
const initialValue = 0; // Initial value for the accumulator

// Using reduce with a function to sum the array elements
const updatedNum = myNum.reduce(function (accumlator, currentvalue) {
    console.log(`Value of accumulator: ${accumlator} and value of currentvalue: ${currentvalue}`);
    return accumlator + currentvalue; // Add the current value to the accumulator
}, initialValue); // Starting value is 0

console.log("Sum using function-based reduce:", updatedNum); // Logs: 15 (sum of all elements)

// Using reduce with an arrow function for concise syntax
const myTotal = myNum.reduce((acc, current) => acc + current, initialValue);
console.log("Sum using arrow function:", myTotal); // Logs: 15

// Example 2: Using reduce to calculate the total price of items
const items = [
    { item: "Laptop", price: 1200 },
    { item: "Smartphone", price: 800 },
    { item: "Tablet", price: 450 },
    { item: "Smartwatch", price: 200 },
    { item: "Headphones", price: 150 },
    { item: "Keyboard", price: 70 },
    { item: "Mouse", price: 50 },
    { item: "Monitor", price: 300 },
    { item: "Printer", price: 250 },
    { item: "External Hard Drive", price: 100 }
];

console.log("Items array:", items); // Logs the array of items

// Using reduce to calculate the total price
const total = items.reduce((acc, item) => acc + item.price, 0);
console.log("Total price of all items:", total); // Logs: 3570 (sum of all item prices)

//test command for chcking git push 