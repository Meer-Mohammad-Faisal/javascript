

const mySym = Symbol("key1") // symbol 

//object literals
const JsUser = {
    name: "fasial",
    "full name": "Meer Mohammad Faisal", // cannot access from dot
    age: 20,
    [mySym]: "mykey1",//correct syntax with square bracket
    location: "Bhopal",
    email: "faisal@google.com",
    isStudent: true,
    day: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym]); // access through square bracket

//frezing
JsUser.email = "faisal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "fasial@microsoft.com"; //doesn't propagae beacuse it freez
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())