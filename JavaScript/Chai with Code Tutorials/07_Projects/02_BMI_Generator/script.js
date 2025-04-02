const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valueHeight = parseInt(document.querySelector('#height').value);
    const valueWeight = parseInt(document.querySelector('#weight').value);
    const valueResult = document.querySelector('#result');

    if(valueHeight === '' || valueHeight < 0 || isNaN(valueHeight)){
        valueResult.innerHTML = 'Please Give a Valid Height in Centimeter'
    } else if (valueWeight === '' || valueWeight < 0 || isNaN(valueWeight)){
        valueResult.innerHTML = 'Please give a Valid Weight in KG'
    } else {
        const bmi = (valueWeight / ((valueHeight * valueHeight) / 10000)). toFixed(2);

        if(bmi <18.5){
            valueResult.innerHTML = `<span>Your BMI is ${bmi}, you're Under Weight</span>`
        } else if (bmi > 18.5 && bmi < 24.9){
            valueResult.innerHTML = `<span>Your BMI is ${bmi}, you're Normal in  Weight</span>`
        } else if (bmi > 24.9){
            valueResult.innerHTML = `<span>Your BMI is ${bmi}, you're Over Weight</span>`
        }
    }
    

   


})

