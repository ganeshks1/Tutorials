const programming = ["js", "py", "ty", "ruby"];

// Basic use of forEach: Iterates over each item in the array
programming.forEach(function (anyValue) {
    console.log(anyValue); // Logs each programming language
});

// Shorter syntax using an arrow function
// No need to define a function name because this is a callback function
programming.forEach((anyitem) => console.log(anyitem));

// Passing a predefined function to forEach
// The function `printMe` will be called for each item in the array
function printMe(itemToPrint) {
    console.log(itemToPrint); // Logs the item passed to the function
}

programming.forEach(printMe); // Only the reference to the function is provided (not executed manually)

// Using additional parameters in forEach
programming.forEach((anyitemvalue, index, programming) => {
    console.log(anyitemvalue, index, programming); 
    // Logs:
    // - `anyitemvalue`: The current item in the array
    // - `index`: The index of the current item
    // - `programming`: The entire array being iterated
});

//-----
const people = [
    {
        name: "Ganesh Sharma",
        age: 34,
        city: "Mumbai",
        profession: "Software Developer"
    },
    {
        name: "Sneha Patel",
        age: 28,
        city: "Ahmedabad",
        profession: "Graphic Designer"
    },
    {
        name: "Rahul Singh",
        age: 30,
        city: "Delhi",
        profession: "Data Analyst"
    },
    {
        name: "Meera Kumar",
        age: 26,
        city: "Bangalore",
        profession: "Product Manager"
    }
];

// Using forEach on an array of objects
people.forEach((item) => {
    console.log(item.name); // Logs only the `name` property of each object in the array
});