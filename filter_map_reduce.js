const coding = ["js", "rb","cpp","java","python"]

// const values = coding.forEach( (item) => {
//        console.log(item)
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num >4)
// const newNums = myNums.filter( (num) => {
//     return num >4})

// console.log(newNums)

// const newNums = myNums.map((num)=> num +10)

// const newNums = myNums.map((num)=> num * 10).map((num)=> num + 1).filter((num) => num>=40)
// console.log(newNums)


//+++++++++++++++++++++++ reduce ++++++++++++++++++++
const myNums2 = [1,2,3]

// const myTotal = myNums2.reduce( function (acc,currval){
//     return acc + currval
// },0)

const myTotal = myNums2.reduce( (acc,currval) => acc +currval,0)

console.log(myTotal)