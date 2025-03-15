// Dates in JavaScript can be tricky as they can behave differently based on the environment.
// The month starts at 0 (January) and goes up to 11 (December).

// Current date and time
let myDate = new Date(); // This will give you the current date and time in ISO format
console.log(myDate); // Logs something like: (2025-01-09T16:15:34.458Z)

console.log(myDate.toString()); // Logs in a human-readable format: (Thu Jan 09 2025 20:15:34 GMT+0400 Gulf Standard Time)

console.log(myDate.toDateString()); // A shorter and cleaner format: (Thu Jan 09 2025)

console.log(myDate.toISOString()); // ISO format: (2025-01-09T16:18:54.709Z)

console.log(myDate.toJSON()); // JSON format (Same as ISO string): (2025-01-09T16:19:48.380Z)

console.log(myDate.toLocaleDateString()); // Localized date format (e.g., 1/9/2025 for US locale)

console.log(myDate.toLocaleString()); // Localized date and time (e.g., 1/9/2025, 8:33:15 PM for US locale)

// Creating a date with a specific date (month starts from 0, so 0 is January)
let myCreatedDate = new Date(2023, 0, 25); // 25th January 2023
console.log(myCreatedDate.toDateString()); // Logs: (Thu Jan 25 2023)

// Creating a date with specific date and time
let myCreatedDate2 = new Date(2025, 4, 29, 19, 30, 50); // 29th May 2025, 7:30:50 PM
console.log(myCreatedDate2.toLocaleString()); // Localized string

// Creating a date with a string (Month starts from 1 in string inputs)
let myNewDate = new Date("2025-01-15"); // 15th January 2025
console.log(myNewDate.toLocaleString()); // Localized string

// Accessing date and time components
let newDate = new Date();
console.log(newDate); // Current date and time
console.log(newDate.getMonth()); // Get the month (0-based index, so 0 = January)
console.log(newDate.getMonth() + 1); // Adding 1 to get the actual month number (1-based)
console.log(newDate.getDay()); // Get the day of the week (0 = Sunday, 1 = Monday, etc.)

// Custom date formatting using options
console.log(newDate.toLocaleString('default', {
    weekday: "long",  // 'long' gives the full weekday name, e.g., "Thursday"
    day: '2-digit'    // '2-digit' gives the day as two digits, e.g., "09"
}));