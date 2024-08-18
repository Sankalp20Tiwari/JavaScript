class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email,password){
        
        super(username)  //using super there is no need of call , it automatically takes this and computes 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com","1234")

chai.addCourse()

const masalaChai = new User ("masalachai","masala@gmail.com","7445")

masalaChai.logMe()
chai.logMe()
// masalaChai.addCourse()  it does not have acccess to addCourse 

console.log(chai === masalaChai)
console.log(chai === Teacher)
console.log(chai instanceof Teacher)
console.log(chai instanceof User)