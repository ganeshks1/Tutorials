
//wehn in broswer the scope is different then in node scope 
// if we declare a or b outside scope it's good and different value then scope
//inside {} thhis is block scope and outside is global scope.
//note : don't confuse {} in object as scope
if (true){ 
    let a = 39
    const b = 40
    var c = 50 // not recommended
    d = 30 // not recommended
    console.log(`innter scope value of a ${a}`)
}

// console.log(a)
// console.log(b)
console.log(c)
console.log(d)



// --------- Nested Function with Scope ---------

function one() {
    // Parent function `one` scope
    const username = "Ganesh"; // Variable defined in `one`'s scope

    function two() {
        // Child function `two` scope
        const website = "www.nexawise.in"; // Variable defined in `two`'s scope
        console.log(username); // Accessing variable `username` from the parent scope (Closure)
        console.log(website); // Accessing variable `website` within its own scope
    }

    // Attempting to access `website` here will result in an error because
    // `website` is defined inside `two` and is not accessible in `one`.
    // console.log(website); // Uncommenting this line will cause a ReferenceError

    two(); // Calling the child function `two`
}

one(); // Calling the parent function `one`


// --------- Scope in If Statements ---------

if (true) {
    // Block scope of the outer `if`
    const username = "Ganesh"; // Variable defined inside the outer `if`

    if (username === "Ganesh") {
        // Block scope of the inner `if`
        const website = "youtube"; // Variable defined inside the inner `if`
        console.log(username + " " + website); // Accessing both `username` and `website` within the inner scope
    }

    // Trying to access `website` here will throw an error because `website` is block-scoped to the inner `if`
    // console.log(website); // Uncommenting this will result in a ReferenceError
}

// Trying to access `username` here will also throw an error because `username` is block-scoped to the outer `if`
// console.log(username); // Uncommenting this will result in a ReferenceError

//----- important point to consider in future


function anyNumber(num) {
    // The function logs the value of `num + 1` to the console
    // and returns the result of `console.log`, which is always `undefined`
    return console.log(num + 1);
}

// Calling the function
anyNumber(15); 
// Logs: 6
// The function executes `console.log(num + 1)` and logs `6` to the console.
// Since `console.log` doesn't return a value, the return value of this function is `undefined`.

console.log(anyNumber(15)); 
// Logs: 6 (from the `console.log` inside the `addone` function)
// Logs: undefined (from the `console.log` outside, which logs the return value of `addone`)
// The return value of `addone` is `undefined` because the return statement is `return console.log(...)`.


//--- interesting points

// Named function declaration
function addOne(num) {
    // The function `addOne` is a named function declaration.
    // It takes a number as an argument (parameter) and returns the number incremented by 1
    return num + 1;
}

addOne(5);  // Calling the function with 5 as argument, returns 6 but doesn't log or store the result
// i can use this line before declaring a function and it will work fine



// Function expression
const addTwo = function(num) {
    // This is a function expression where an anonymous function is assigned to the constant `addTwo`.
    // The `function` keyword is written in lowercase because it is a reserved word in JavaScript, 
    // and it is part of the syntax for defining functions. It’s not just a random name, 
    // it must be used to define a function in JavaScript.
    // `num` is the parameter (the input), and the function returns the input number incremented by 2.
    return num + 2;
};

addTwo(1);  // Calling the function with 1 as argument, returns 3 but doesn't log or store the result
// i cannot use this line before declaring a function, becuase of hoisting.