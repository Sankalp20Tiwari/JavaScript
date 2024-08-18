function sayMyName(){
    console.log(1)
    console.log(2)
}

//sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}


const answer = addTwoNumbers(3,4)
// console.log(answer)


function loginUserMesage(username = "sam"){ //assigned sam as default value
    if(!username){
        console.log("please enter a username")
        return
    }
    
    return `${username}  just logged in `
}

// console.log(loginUserMesage("Sangu"))
// console.log(loginUserMesage())  //returns undefined 


// function calculateCartPrice(...num1){  // ... is rest operator
//     return num1 
// }


function calculateCartPrice(val1,val2,...num1){  // ... is rest operator
    return num1                                 // 200 is val 1 300 is val 2 and remaining is num1
}

console.log(calculateCartPrice(200,300,400))  //[ 200, 300, 400 ]


const user  ={
    username:"sangu",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}

//handleObject(user)
handleObject({
    username:"sam",
    price: 100
})


const myNewArray = [200,44,223,900]
function returnSecondValue(getArray){
    console.log(getArray[1])
}

returnSecondValue(myNewArray)