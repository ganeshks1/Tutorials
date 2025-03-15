// dates ; it's a complecated thing as javascript team is still developing the date section
// month number start from 0 in javascript


// actual time and date is 09 Jan 2025 time is 20:18:03 GMT +4
let myDate = new Date() // this will give you very hard formated date 
console.log(myDate) // (2025-01-09T16:15:34.458z)
console.log(myDate.toString()) // this will give slightly good type of date (Thu Jan 09 2025 20:15:34 GMT+0400 Gulf Standard time )
console.log(myDate.toDateString()) // much better approach (Thu Jan 09 2025)
console.log(myDate.toISOString()) // (2025-01-09T16:18:54.709Z)
console.log(myDate.toJSON()) // (2025-01-09T16:19:48.380Z)
console.log(myDate.toLocaleDateString()) // (1/9/2025)
console.log(myDate.toLocaleString()) //(1/9/2025, 8:33:15 PM)

let myCreatedDate = new Date(2023, 0, 25)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2025, 4, 29, 19, 30, 50)
console.log(myCreatedDate2.toLocaleString()) //local string is prefered for me

let myNewDate = new Date("2025-01-15") //when proving like this month number start from normally 1 but in array kind of data it start with 0
console.log(myNewDate.toLocaleString()) 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1) //+1 because javascript start with month 0
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: '2-digit'
}))

//advance date time customization 
// Need to research Date once again to get proper understand of concept
