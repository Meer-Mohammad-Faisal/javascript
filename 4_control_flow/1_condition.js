
// //if
// const isUserloggedIn = true;
// const temprature = 41

// if( temprature == 41 ){
//     console.log("less than 50");
// }
// else{
//     console.log("temprature is grater tahan 50");
// } 
// console.log("execute")

// <, >, <=, >=, !=, ==, ===, !==



// some scope game:--

// const score = 200

// if( score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test2");  // ye nhi krna hai

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if( balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

//REAL LIFE EXAMPLE:--
const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserloggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}

if( loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
    
}