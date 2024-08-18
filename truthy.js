const userEmail = []

if(userEmail){
    console.log("user has email")
}else{
    console.log("user does not have email")
}

//falsy values
// false , 0 , -0 , BigInt 0n , null , undefined , "" ,NaN

//truthy values
// "0" , 'false' , " " , [] , {} , function(){}  

if(userEmail.length === 0){
    console.log("array is empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).lenth === 0){
    console.log("object is empty")
}

//false == 0 gives true 
//false == "" gives true 
// 0 == ""  gives true 


//Nullish coalescing operator (??): null undefined 

let val1 
// val1 = 5 ?? 10 
// val1 = null ?? 10 
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 15 

console.log(val1)


//ternary operater 

//condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80 ")

