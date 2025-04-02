// Select the body element and store it in a variable
const varBody = document.querySelector("body");
// console.log(varBody); // Uncomment to debug or check the selected body element

// Select all elements with the class "button" and store them in a NodeList
const varButton = document.querySelectorAll(".button");
// console.log(varButton); // Uncomment to debug or check the NodeList of buttons

// Iterate through each button in the NodeList
varButton.forEach(function(perObject) {
    // console.log(perObject); // Uncomment to debug or check each button element

    // Add a 'mouseover' event listener to each button
    perObject.addEventListener('mouseover', function(item) {
        // console.log(item); // Uncomment to debug or check the event object
        // console.log(item.target); // Uncomment to debug or check the target element of the event

        // Check the id of the target element and change the body's background color accordingly
        if (item.target.id === "gray") {
            varBody.style.backgroundColor = item.target.id; // Set background color to gray
        }
        if (item.target.id === "yellow") {
            varBody.style.backgroundColor = item.target.id; // Set background color to yellow
        }
        if (item.target.id === "blue") {
            varBody.style.backgroundColor = item.target.id; // Set background color to blue
        }
        if (item.target.id === "white") {
            varBody.style.backgroundColor = item.target.id; // Set background color to white
        }
    });
});