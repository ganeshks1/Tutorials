const input = document.querySelector('.class-input').value
const button = document.querySelector('.class-button')
const form = document.querySelector('.form')
const randomNumber = (Math.floor(Math.random() * 100 + 1))
const previousGuesses = document.querySelector('.class-previous-guess')
const timeRemaining = document.querySelector('.class-time-remaining')
const lowHigh = 

console.log(input)

//prevent form to submit to server
form.addEventListener('submit', function(e){
    e.preventDefault();
})


button.addEventListener('click', function(e){
    console.log(input)
}
)