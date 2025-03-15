/*
Basic Structure of a Switch Statement:

switch (key) {
    case value1:
        // Code to execute if key === value1
        break;

    case value2:
        // Code to execute if key === value2
        break;

    default:
        // Code to execute if no cases match
        break;
}
*/

// Example: Handling Months
const monthName = "ganesh"; // Change this value to test different cases

switch (monthName.toLowerCase()) { // Converting input to lowercase for case-insensitive comparison
    case "jan":
    case "january": // Allowing full month names as well
        console.log("January");
        break;

    case "feb":
    case "february":
        console.log("February");
        break;

    case "mar":
    case "march":
        console.log("March");
        break;

    case "apr":
    case "april":
        console.log("April");
        break;

    case "may":
        console.log("May");
        break;

    case "jun":
    case "june":
        console.log("June");
        break;

    case "jul":
    case "july":
        console.log("July");
        break;

    case "aug":
    case "august":
        console.log("August");
        break;

    case "sep":
    case "september":
        console.log("September");
        break;

    case "oct":
    case "october":
        console.log("October");
        break;

    case "nov":
    case "november":
        console.log("November");
        break;

    case "dec":
    case "december":
        console.log("December");
        break;

    default:
        console.log("This is not a valid month name.");
        break;
}

// Edge Cases and Improvements:
// 1. Using `.toLowerCase()` ensures the input is case-insensitive.
// 2. Added support for both short and full month names (e.g., "jan" and "january").
// 3. Default case handles invalid inputs or unexpected values.