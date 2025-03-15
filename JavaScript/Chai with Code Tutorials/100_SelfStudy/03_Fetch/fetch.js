fetch("https://api.github.com/users/hiteshchaudhary").then((response)=>{ 
    // console.log(response)
    return response.json()
}).then((data) => {
    console.log(data.followers)
}).catch((reject)=> console.log('reject'))


fetch("https://api.github.com/users/hiteshchaudhary")

async function data(response){
    try {
        console.log(response)
        
    } catch (error) {
        console.log('error')
    }
}