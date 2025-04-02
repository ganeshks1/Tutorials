// 1. Singleton Object (with Object and Literal)
const tinderUser = new Object();  // Singleton object creation (using constructor)
tinderUser.id = "123";
tinderUser.name = "Ganesh";
tinderUser.isLoggedIn = true;

console.log("Singleton Object: ", tinderUser); // Logs the singleton object

// 2. Nested Objects
const regularUser = {
    email: "sharma@google.com",
    fullname: {
        firstname: "Ganesh",
        middlename: "Kuber",
        lastname: "Sharma",
        usernames: {
            google: "sharma",
            live: "ganesh.ks",
            facebook: "gks"
        }
    }
};
console.log("Nested User Facebook Username: ", regularUser.fullname.usernames.facebook); // Accesses a deeply nested property

// 3. Object Merging
const object1 = { 1: "abc", 2: "def" };
const object2 = { 3: "ghi", 4: "jkl" };

const object3 = { object1, object2 };  // This will not merge the objects but nest them under new keys
const object4 = Object.assign({}, object1, object2);  // Merge objects using Object.assign
const object5 = { ...object1, ...object2 };  // Merge objects using spread syntax

console.log("Merged Object using Object.assign: ", object4); // Logs merged object using Object.assign
console.log("Merged Object using Spread Syntax: ", object5); // Logs merged object using spread operator

// 4. Working with Arrays of Objects (Example: Users Array)
const users = [
    { id: 1, email: "hotemail@gmail.com" },
    { id: 2, email: "google@gmail.com" },
    { id: 3, email: "yahoo@gmail.com" },
    { id: 4, email: "ymail@gmail.com" }
];
console.log("User Email (Index 1): ", users[1].email); // Logs the email of the second user

// 5. Object Keys, Values, Entries
console.log("Object Keys: ", Object.keys(tinderUser)); // Logs keys of the tinderUser object
console.log("Object Values: ", Object.values(tinderUser)); // Logs values of the tinderUser object
console.log("Object Entries: ", Object.entries(tinderUser)); // Logs key-value pairs as arrays
console.log("Has Own Property (isLoggedIn): ", tinderUser.hasOwnProperty("isLoggedIn")); // Checks if the object has the 'isLoggedIn' property

// 6. Prototypal Inheritance
const animal = {
    species: "Mammal",
    move() {
        console.log("Moving...");
    }
};

const dog = Object.create(animal);  // dog inherits from animal
dog.name = "Bulldog";

console.log("Dog Species (Inherited): ", dog.species); // Inherited property
dog.move(); // Calls inherited method

// 7. Object Destructuring
const { name, id } = tinderUser; // Destructuring assignment to extract properties
console.log("Destructured Name and ID: ", name, id); // Logs name and id from tinderUser object

// 8. Object Spread and Rest
const { id: userId, ...rest } = tinderUser; // Rest operator to collect remaining properties
console.log("Rest of Object: ", rest); // Logs all properties except id

// 9. Object.freeze() and Object.seal()
const user = {
    name: "Ganesh",
    age: 30
};
Object.freeze(user);  // Freeze the object to prevent modifications
user.name = "Aarav";   // This will not work, as the object is frozen
console.log("Frozen User: ", user); // Logs the frozen object (name cannot be changed)

Object.seal(user);  // Seal the object to prevent adding/removing properties
user.age = 35;  // This works, value can be updated
delete user.name; // This will not work, property cannot be deleted
console.log("Sealed User: ", user); // Logs the sealed object (name cannot be deleted)

// 10. Constructor Function and Class
function User(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new User("Ganesh", 30); // Creating an instance using constructor function
console.log("User Constructor Function: ", user1); // Logs the object created using constructor function

class UserClass {  // Creating a class-based constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user2 = new UserClass("Aarav", 25); // Creating an instance using class constructor
console.log("User Class: ", user2); // Logs the object created using class-based constructor

// 11. Getter and Setter Methods
const person = {
    firstName: "Ganesh",
    lastName: "Sharma",
    get fullName() { // Getter method for fullName
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) { // Setter method for fullName
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
console.log("Full Name (Getter): ", person.fullName); // Calls the getter to return full name
person.fullName = "Aarav Kumar"; // Calls the setter to change the full name
console.log("Full Name (After Setter): ", person.fullName); // Logs the updated full name

// 12. WeakMap and WeakSet
let obj1 = {};
let weakMap = new WeakMap();
weakMap.set(obj1, "Some Data");  // WeakMap allows objects as keys and associates data with them
console.log("WeakMap Value: ", weakMap.get(obj1)); // Logs the value associated with obj1 in WeakMap

let weakSet = new WeakSet();
weakSet.add(obj1);  // WeakSet stores objects and ensures they are garbage collected if no longer referenced
console.log("WeakSet has obj1: ", weakSet.has(obj1)); // Logs whether obj1 is in the WeakSet

// 13. Object.create() and Prototype Chain
const animalObj = { eats: true };
const dogObj = Object.create(animalObj);  // dogObj inherits from animalObj
dogObj.name = "Bulldog";
console.log("Dog Inherited Property: ", dogObj.eats);  // Inherited property from animalObj

// 14. Iterating over an Object with for...in
const userObj = { name: "Ganesh", age: 30 };
for (const key in userObj) {  // Iterates over all enumerable properties of userObj
    console.log(key, userObj[key]);  // Logs each key and its corresponding value
}

// 15. Converting Objects to JSON and Parsing Back
const objToJson = { name: "Ganesh", age: 30 };
const jsonString = JSON.stringify(objToJson);  // Converts the object into a JSON string
console.log("JSON String: ", jsonString); // Logs the JSON string

const parsedObject = JSON.parse(jsonString);  // Parses the JSON string back into an object
console.log("Parsed Object: ", parsedObject); // Logs the parsed object