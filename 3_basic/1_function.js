

function sayMyName(){
    console.log("f");
    console.log("a");
    console.log("i");
    console.log("s");
    console.log("a");
    console.log("l");
}

//sayMyName();

//adding two numbers
function addTwoNumbers(number1, number2){ // number1, number2 parameters
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){ // number1, number2 parameters
    // let result = number1 + number2;
    // return result;
    // //console.log("hi") //unreacable code

    return number1 + number2;
}

const result =  addTwoNumbers(2,3); //2,3 is arguments
console.log("result is:",result);



function loginUserMessage(username = "fais"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} jsut logged in`
}

//console.log(loginUserMessage("faisal"));
//console.log(loginUserMessage("fasial"));

//direct object passing:
handleObject({
    username: "sam",
    price:999
})





//function with object and array:
function calculateCartPrice(val1, val2, ...num1){ //rest operator
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000));  // 200,400 will be ignored beacuse it is val1,val2



// with object:--

const user = {
    username: "fasial",
    price: 99

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    username: "sam", 
    price: 89
})

/// passing array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,4000,203,569]));


