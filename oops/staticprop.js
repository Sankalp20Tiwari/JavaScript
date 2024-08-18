class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId(){
        return `123`
    }
}

const sangu  = new User("sangu")

sangu.logMe()
// console.log(sangu.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const keyb = new Teacher("keyb","keyb@gmail.com ")
keyb.logMe()
keyb.createId()