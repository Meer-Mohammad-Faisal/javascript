const user = {
    username: "faisal", 
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
        console.log(`username: ${this.username}`);
    }
}

// console.log(this)
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }


    return this
}
// constructor function -- har baar naya instance function deta hai
const userOne = new User("faisal", 12,true)
const userTwo = new User("chaiAurCode", 11, false) // override -> to overcome this, we use new

console.log(userOne.constructor);