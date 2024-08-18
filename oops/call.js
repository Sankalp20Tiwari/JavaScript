function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    // SetUsername(username)  in this only the reference is passed actually the function is not called 
    SetUsername.call(this, username)   //if we do not use call function we will not be able to set username 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);