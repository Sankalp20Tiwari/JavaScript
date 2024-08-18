//IF

const isUserLoggedIn = true
if(isUserLoggedIn){

}
if(false){
    //code will not execute 
}
else{

}

// conditionals < > <= >= == != === 

const score = 200

if (score >100){
    const power = "fly"
    console.log(`user power : ${power}`)
}
//console.log(` user power : ${power}`)

const balance  = 1000

if(balance > 500) console.log("test"),
console.log("test2");  //do not use this syntax 

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("allowed")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("logged in ")
}


//+++++++++++++++++++++++++++++++ switch +++++++++++++++++++++++


// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }

const month  = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febraury")
        break;
    case 3:
        console.log("March")
        break;

    default:
        console.log("default case match ")
        break;
}
