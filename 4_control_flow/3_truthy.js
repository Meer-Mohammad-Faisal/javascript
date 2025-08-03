const userEmail = "f@fasial.ai"; // if it is empty then our else code execute, but when it empty array like [] then if block execute

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values:
// "0", 'false', " "(space), [], {}, function(){}

//checking array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// checking object is empty of not (object converted to array)
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}

//genral knowledge:
console.log( false == 0)
console.log(false == "");
console.log(0 == "");


// Nullish coalescing Operator (??): null, undefined

let val1;
let val2;
//val1 = 5 ?? 10
val1 = null ?? 10;
val2 = undefined ?? 5

console.log(val1);
console.log(val2);

// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80")