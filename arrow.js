const user ={
    username: "sangu",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()         

//browsers global object is Window therefore console.log(this) gives Window in browser 
console.log(this)   //it gives empty object {}


// function chai(){
//     let username = "sangu"
//     console.log(this) //gives a lot of info
//     console.log(this.username)  //gives undefined 
// }

// chai()


const chai = () => {
    let username = "sangu"
     console.log(this)
}

//basic arrow function 

// const addTwo = (num1,num2) => {
//     return num1 + num2 

// }

// const addTwo = (num1,num2) => num1 + num2   //implicit return 

// const addTwo = (num1,num2) => (num1 + num2) 

const addTwo = (num1,num2) => ({username: "sangu"}) 

console.log(addTwo(3,5))

