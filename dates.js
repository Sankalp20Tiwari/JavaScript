//Dates 

let myDate = new Date()

console.log(myDate.toString())
console.log(typeof myDate)  // gives object 

let myCreatedDate = new Date (2024 , 0 , 23 )
console.log(myCreatedDate.toString())
let myCreatedDate2 = new Date (2024, 3 , 4, 6,34 )
console.log(myCreatedDate2.toString())

let myCreatedDate3 = new Date ("2024-02-06")


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))  //converting intos seconds

myDate.toLocaleString('default', {
    weekday : long 
    
})

