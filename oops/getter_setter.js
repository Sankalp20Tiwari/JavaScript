class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sangu`
    }
    set password(value){
        this._password = value
    }
}

const sangu = new User("sangu@gmail.com", "abc")
console.log(sangu.password)
console.log(sangu.email)