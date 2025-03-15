// Immediately Invoked Function Expressions (IIFE)

// Standard function invocation
function chai() {
    console.log("DB Connected");
}
chai(); // Calling the function explicitly

//------ IIFE Example

// IIFE is executed immediately after it's defined
(function chai2() {
    console.log("DB Connected");
})(); 
// The parentheses () at the end immediately invoke the function
// Always use a ";" at the end of the preceding statement to prevent issues 
// where the JavaScript parser might get confused about where to stop or end execution.

//--- IIFE with an Arrow Function

(() => {
    console.log("DB Connected 3");
})(); 
// An arrow function wrapped in parentheses to define and immediately invoke it.

//--- Named IIFE with Parameters

((name) => {
    console.log(`DB Connected ${name}`);
})("Ganesh"); 
// Passing arguments to an IIFE works just like passing them to any other function.
// Here, "Ganesh" is passed as the parameter and immediately logged.