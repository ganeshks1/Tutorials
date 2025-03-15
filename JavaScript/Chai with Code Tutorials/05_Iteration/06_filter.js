// Example 1: Iterating over an array using forEach
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

fruits.forEach((fruitnames) => {
    console.log(fruitnames); // Logs each fruit to the console
});

// Example 2: Demonstrating that forEach does not return a new array
const fruitArray = fruits.forEach((fruitnames) => {
    console.log(fruitnames); // Logs each fruit
    return fruitnames;       // This return has no effect on the output of forEach
});

console.log(fruitArray); // Outputs 'undefined' because forEach does not return a value

// Example 3: Using filter to return a subset of an array
const numbers = [10, 25, 38, 45, 60, 72, 89, 100];

const numberObject = numbers.filter((valueofnumber) => {
    console.log(valueofnumber); // Logs each number being processed
    return valueofnumber;       // Returns all values (since all are truthy)
});

console.log(numberObject); // Returns the same array as 'numbers' because all values are truthy

// Example 4: Using filter to return numbers greater than 50
const numberObject2 = numbers.filter((valueofnumber) => valueofnumber > 50); // Filters numbers > 50
console.log(`Value in numberObject2: ${numberObject2}`); // Logs numbers > 50

// Example 5: Using forEach to create a new array conditionally
const newNum = [];

numbers.forEach((valueofnumber) => {
    if (valueofnumber > 50) {
        newNum.push(valueofnumber); // Adds numbers > 50 to the new array
    }
});

console.log(newNum); // Logs [60, 72, 89, 100]

// Example 6: Filtering objects from an array based on conditions
const books = [
    { title: "The Great Gatsby", genre: "Fiction", publish: 1925, edition: "First" },
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960, edition: "Second" },
    { title: "1984", genre: "Dystopian", publish: 1949, edition: "First" },
    { title: "Pride and Prejudice", genre: "Romance", publish: 1813, edition: "Third" },
    { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951, edition: "First" },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: "Second" },
    { title: "Moby Dick", genre: "Adventure", publish: 1851, edition: "First" },
    { title: "War and Peace", genre: "Historical", publish: 1869, edition: "Second" },
    { title: "The Alchemist", genre: "Philosophical", publish: 1988, edition: "First" },
    { title: "Crime and Punishment", genre: "Mystery", publish: 1866, edition: "First" },
    { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954, edition: "First" },
    { title: "Anna Karenina", genre: "Drama", publish: 1877, edition: "Second" },
    { title: "The Chronicles of Narnia", genre: "Fantasy", publish: 1950, edition: "First" },
    { title: "Brave New World", genre: "Dystopian", publish: 1932, edition: "First" },
    { title: "Jane Eyre", genre: "Romance", publish: 1847, edition: "Second" },
    { title: "Wuthering Heights", genre: "Romance", publish: 1847, edition: "First" },
    { title: "The Odyssey", genre: "Epic", publish: -800, edition: "Classic" },
    { title: "A Tale of Two Cities", genre: "Historical", publish: 1859, edition: "First" },
    { title: "Don Quixote", genre: "Adventure", publish: 1605, edition: "Classic" },
    { title: "Ulysses", genre: "Modernist", publish: 1922, edition: "First" }
];

// Filter books published after 1950
const user1 = books.filter((book) => book.publish > 1950);

// Filter books in the 'Mystery' genre
const user2 = books.filter((book) => book.genre === "Mystery");

// Filter books that are 'Fiction' and published after 1950
const user3 = books.filter((book) => {
    return book.genre === "Fiction" && book.publish > 1950; // Return is needed inside {}
});


console.log(`Ganesh's Choice of books year ${user1}`) // this print object object 
console.log(`Ganesh's Choice of books year: ${JSON.stringify(user1)}`); // Converts objects to JSON for readable output
console.log(user3); // Logs filtered Fiction books published after 1950`