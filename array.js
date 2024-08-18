//array
//resizable and can contain mix data types 
const myArray =[0,1,4,54,3523]

const myArray2 = new Array(0,239,49234,923,2)

//array methods

myArray.push(6)
myArray.pop()

myArray.unshift(9) //puts 9 at the first place in array
myArray.shift()  //removes first element that is added 


console.log(myArray.includes())
console.log(myArray.indexOf(5))

const newArray = myArray.join()

//slice and splice 
//slice does not manipulate the original array whereas splice manipulates the orginal array
// also splice includes the end but slice does not 


const arr1 = ["q","w","e"]

const arr2 = ["t","y","u"]

// arr1.push(arr2) //array inside array 


const arr3 =  arr1.concat(arr2)
console.log(arr3)

const arr4 =  [...arr1,...arr2]
console.log(arr4)


const another_array = [1,2,3,[4,5],6,7,[6,8,[4,5]]]

const  real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("sangu"))
console.log(Array.from("Sangu"))
console.log(Array.from({name: "Sangu"})) //interesting case returns []

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1.score2,score3))

