//singleton
//Object.create


//object literals 

const mySym = Symbol("key1")

const JsUser = {
    name : "Sangu",
    [mySym]:"mykey1",  //way to use symbol as a key in object 
    age : 18,
    location: "Lucknow",
    isLoggedIn : false
}

// console.log(JsUser.location)
// console.log(JsUser["isLoggedIn"])
// console.log(JsUser[mySym])  //accessing a symbol 
JsUser.age = 19
//Object.freeze(JsUser)  // does not allow change in the object now 
JsUser.age = 20

JsUser.greeting = function(){
    console.log("Hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`)
}

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())


// console.log(JsUser)

//++++++++++++++++++++++++++++++++++  objects with constructor and singleton  ++++++++++++++++++++++++++++

const tinderUser1 = new Object  //singleton object 
const tinderUser = {}           // non - singleton object 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser ={
    email: "absc@google.com",
    fullname:{
        userfullname:{
           firstname:"Sangu",
           lastname: "Tiwari"
        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={
    1:"a",
    2:"b"
}

const obj2 ={
    3:"a",
    4:"b"
}

const obj3 = Object.assign({}, obj1,obj2)


const obj4 = {...obj1,...obj2}


const users = [
    {
        id:1,
        name :"sangu"
    },
    {
        id:1,
        name :"sangu"
    },
    {
        id:1,
        name :"sangu"
    }
]
users[1].id

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))  //returns output as array [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//destructuring of objects

const course ={
    coursename:"js",
    price:"999",
    courseInstructor: "Sangu"

}

//course.courseInstructor

const {courseInstructor: instructor} = course 
console.log(courseInstructor)
console.log(instructor)

