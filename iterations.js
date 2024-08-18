//for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
// }

// for (let i = 0; i <=3; i++) {
    
//     console.log(`outer loop value ${i}`)
//     for (let index = 0; index <=3; index++) {
//         console.log(`inner loop value${index}  and outer loop ${i}`)
        
//     }  
// }

// break and continue 

// for (let index = 0; index <=20; index++) {

//     if(index == 5 ){
//         console.log("detected 5 ")
//         break
//     }
//     console.log(`value of i is ${index }`)
    
// }
// for (let index = 0; index <=20; index++) {

//     if(index == 5 ){
//         console.log("detected 5 ")
//         continue
//     }
//     console.log(`value of i is ${index }`)
    
// }


// while loop 
// let index = 0
// while (index < 10) {
//     console.log(`value of index is ${index}`)
//     index = index + 2
    
// }


// do while loop 
// let score = 11
// do {
//     console.log(`score is ${score}`)            // loops runs atleast once
//     score++
// } while (score <=10 )


// for of loop 

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`)
    
// }

//maps

const map = new Map()
map.set('IN','India')
map.set('FR','France')

// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,value)
    
// }

const myObj = {
    game1:"NFS",
    game2: "spiderman"
}

// for (const [key,value] of myObj) {
//     console.log(key,value)
    
// }   //this will not work


const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

// for (const key in myObject) {
//    console.log(`${key} is shortcut for ${myObject[key]}`)
// }

const programming = ["js", "rb","cpp","java"]

// for (const key in programming) {
//     console.log(programming[key])
    
// }

for (const key in map) {
    console.log(key)    //iteration not possible like this in map 
    
}


const coding = ["js", "rb","cpp","java","python"]

// coding.forEach(function (item){ 
//     console.log(item)
// })

// coding.forEach( (item) => {
//    console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr)
})


const myCoding =[
    {
        languagename:"js",
        languagefilename:"test"
    },
    {
        languagename:"cpp",
        languagefilename:"t2"
    },
    {
        languagename:"python",
        languagefilename:"t3"
    }

]

myCoding.forEach((item) => {
    console.log(item.languagename)
})