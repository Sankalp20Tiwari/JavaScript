var c = 300
if(true){
    let a = 20 
    const b = 40 
    var c = 30  //var can be accessed even outside of block scope 
}

// console.log(a)
// console.log(b)
// console.log(c)

//scope is different when running in console and when running in environment through node 

function one(){
    const username = "sangu"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //one cannot acccess the website so this will show error

    two()
}

one()



//++++++++++++++++++++++++++++++++ Interesting   +++++++++++++++++++++++++++

function addOne(num){
    return num +1
}

addOne(5)


const addTwo = function(num){   //called expression 
    return num + 2
}

addTwo(5)

//if we put addTwo before declaration we will get error 
// called hoisting 