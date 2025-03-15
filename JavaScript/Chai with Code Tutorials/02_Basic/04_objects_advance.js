// ===================== Singleton vs Literal Objects =====================

// Singleton Object (creating an empty object using `new Object()`)
const tinderUser = new Object(); // Singleton Object (often used with a constructor)
// Alternative approach for a non-Singleton object (Object Literal)
 // const tinderUser = {}; // This is an object literal; it doesn't use a constructor.
console.log(tinderUser); // Logs an empty object

// Adding properties to the singleton object.
tinderUser.id = "123";
tinderUser.name = "Ganesh";
tinderUser.isLoggedIn = true;

console.log(tinderUser); // Logs the object with added properties

// ===================== Nested Objects =====================

// Regular object with a nested structure (for representing complex data)
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

// Accessing a deeply nested value (Facebook username of regularUser)
console.log(regularUser.fullname.usernames.facebook); // Logs: "gks"

// ===================== Object Merging =====================

// Merging two objects without changing the original ones

const object1 = {1: "abc", 2: "def"};
const object2 = {3: "ghi", 4: "jkl"};

// This won't merge the objects as expected; it will make object1 and object2 keys of object3.
const object3 = {object1, object2}; 
console.log(object3); // Logs: { object1: {1: 'abc', 2: 'def'}, object2: {3: 'ghi', 4: 'jkl'} }

// Correct approach for merging objects using `Object.assign()` to create a new merged object
const object4 = Object.assign({}, object1, object2); 
// The empty `{}` is the target object where properties from object1 and object2 are copied
console.log(object4); // Logs: {1: "abc", 2: "def", 3: "ghi", 4: "jkl"}

// Using the spread operator (`...`) for object merging
const object5 = {...object1, ...object2}; 
console.log(object5); // Logs: {1: "abc", 2: "def", 3: "ghi", 4: "jkl"}

// ===================== Working with Arrays of Objects =====================

// Arrays of objects (common when you work with data from databases)
const users = [
    { id: 1, email: "hotemail@gmail.com" },
    { id: 2, email: "google@gmail.com" },
    { id: 3, email: "yahoo@gmail.com" },
    { id: 4, email: "ymail@gmail.com" }
];

// Accessing an object within the array and retrieving a property value.
console.log(users[1].email); // Logs: "google@gmail.com"

// ===================== Object Methods =====================

// Accessing keys, values, and entries of an object
console.log(Object.keys(tinderUser)); // Logs: ["id", "name", "isLoggedIn"] (keys of the object)

console.log(Object.values(tinderUser)); // Logs: ["123", "Ganesh", true] (values of the object)

console.log(Object.entries(tinderUser)); // Logs: [["id", "123"], ["name", "Ganesh"], ["isLoggezdIn", true]] (key-value pairs as arrays)

// Checking if a property exists in the object
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Logs: true (checks if 'isLoggedIn' exists in the object)
console.log(tinderUser.hasOwnProperty("age")); // Logs: false (checks if 'age' exists in the object)



// Destructuring: A shorthand technique primarily used in React to extract values from objects or arrays.

const course = {
    name: "JS in Hindi",    // course name
    price: 999,             // course price
    courseInstructor: "Hitesh" 
};

// Accessing a property of the object using dot notation
console.log(course.courseInstructor); // "Hitesh"

// **Destructuring Assignment**: Extracting properties from an object into variables.

// Normal destructuring (extracting and renaming the value directly)
const { courseInstructor } = course;  // Extract the "courseInstructor" value from the object
console.log(courseInstructor);  // "Hitesh"

// Destructuring with renaming: Renaming the extracted variable to a new name during destructuring
const { courseInstructor: instructor } = course; // Renaming courseInstructor to 'instructor'
console.log(instructor); // "Hitesh"

// **Example with default value**: What if the property does not exist in the object?
const { courseDuration = "Not Specified" } = course; // Default value for missing property
console.log(courseDuration); // "Not Specified" (since courseDuration is not in the course object)

// **Destructuring with Arrays**: You can also destructure arrays.
const students = ["Alice", "Bob", "Charlie"];
const [firstStudent, secondStudent] = students; // Destructuring the first two elements of the array
console.log(firstStudent);  // "Alice"
console.log(secondStudent); // "Bob"

// **Nested Destructuring**: When you have nested objects.
const person = {
    name: "John",
    address: {
        city: "New York",
        zipCode: 10001
    }
};

// Destructuring nested object
const { address: { city, zipCode } } = person; // Extracting values from the nested address object
console.log(city);    // "New York"
console.log(zipCode); // 10001
