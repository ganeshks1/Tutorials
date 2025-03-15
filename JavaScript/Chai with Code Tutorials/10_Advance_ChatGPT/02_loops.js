//--- For...in (Works on Objects and Arrays)
const obj = { name: "Ganesh", age: 34, city: "Mumbai" };
console.log("//--- For...in (Objects)");
for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`); // Iterates over object keys
}

const arr = ["a", "b", "c"];
console.log("//--- For...in (Arrays)");
for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`); // Iterates over array indices
}

//--- For...of (Works on Arrays, Strings, Maps, Sets)
const map = new Map([
    ["IN", "India"],
    ["US", "United States"],
    ["UK", "United Kingdom"]
]);
console.log("//--- For...of (Maps)");
for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`); // Iterates over key-value pairs in a map
}

const arr2 = [1, 2, 3];
console.log("//--- For...of (Arrays)");
for (const value of arr2) {
    console.log(value); // Iterates over values in the array
}

const str = "Ganesh";
console.log("//--- For...of (Strings)");
for (const char of str) {
    console.log(char); // Iterates over each character in the string
}

const set = new Set(["apple", "banana", "mango"]);
console.log("//--- For...of (Sets)");
for (const value of set) {
    console.log(value); // Iterates over values in the set
}

//--- .forEach() (Works on Arrays, Maps, Sets)
console.log("//--- .forEach() (Maps)");
map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`); // Iterates over key-value pairs in a map
});

console.log("//--- .forEach() (Arrays)");
arr2.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`); // Iterates over array values with indices
});

console.log("//--- .forEach() (Sets)");
set.forEach((value) => {
    console.log(value); // Iterates over set values
});

//--- .entries() (Works on Maps and Arrays)
console.log("//--- .entries() (Maps)");
for (const [key, value] of map.entries()) {
    console.log(`Key: ${key}, Value: ${value}`); // Iterates over key-value pairs in a map
}

console.log("//--- .entries() (Arrays)");
for (const [index, value] of arr2.entries()) {
    console.log(`Index: ${index}, Value: ${value}`); // Iterates over index-value pairs in the array
}


////-----------------------------------

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

people.forEach( (itme) => {
    console.log(itme.name)
})

//----some advance things from chat gpt

// Looping Through Array of Objects

//--- Using forEach
console.log("//--- Using forEach");
people.forEach((person) => {
    console.log(`Name: ${person.name}, Profession: ${person.profession}`);
});

//--- Using for...of
console.log("//--- Using for...of");
for (const person of people) {
    console.log(`City: ${person.city}, Age: ${person.age}`);
}

//--- Using for loop
console.log("//--- Using for loop");
for (let i = 0; i < people.length; i++) {
    console.log(`Person ${i + 1}:`, people[i]); // Prints the entire object
}

//--- Filtering the Array
console.log("//--- Filtering the Array");
const developers = people.filter((person) => person.profession === "Software Developer");
console.log("Developers:", developers);

//--- Finding an Object
console.log("//--- Finding an Object");
const rahul = people.find((person) => person.name === "Rahul Singh");
console.log("Found Rahul:", rahul);

//--- Mapping to a New Array
console.log("//--- Mapping to a New Array");
const names = people.map((person) => person.name);
console.log("Names Array:", names);

//--- Sorting the Array
console.log("//--- Sorting the Array by Age");
const sortedByAge = [...people].sort((a, b) => a.age - b.age); // Use spread operator to avoid mutating original array
console.log("Sorted by Age:", sortedByAge);

//--- Reducing the Array
console.log("//--- Reducing the Array");
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log("Total Age:", totalAge);

//--- Using for...in (Inside an Object in the Array)
console.log("//--- Using for...in");
for (const person of people) {
    for (const key in person) {
        console.log(`Key: ${key}, Value: ${person[key]}`);
    }
}