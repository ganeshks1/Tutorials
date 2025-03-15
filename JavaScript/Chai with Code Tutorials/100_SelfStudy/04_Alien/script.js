console.log("hello world")

const vButton = document.querySelector(".button") 
const vDiv = document.querySelector(".result")
const vInput = document.querySelector(".input-field")
const names = ["ganesh", "santosh", "poonam", "vinod","reena","kalyani"]

vButton.addEventListener("click", function(){
    capital(data);
    condition(data);
})



function condition(data){
    if (data === "Ganesh"){ 
        vDiv.innerHTML = (`${data} is a Greate Man`)
    } else if (data === "Santosh"){
        vDiv.innerHTML = (`${data} is a Greatest Man`)
    } else if (data === "Poonam"){
        vDiv.innerHTML = (`${data} is a Greatest Women`)
    }
    else {
        vDiv.innerHTML = (`${data} is a Alien`)
    }
}


function capital(data){
    let data = vInput.value.trim();
    return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
}

names.forEach(element => {
    console.log(element);   
});


///incomplete