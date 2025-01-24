

const user = {
    username: "fasial",
    price: 999,
    welcomeMessage: function() {
                    console.log(`${this.username} , welcome to website`);
                    console.log(this); //this means current context(current value);
                }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

//console.log(this);


// function chai(){
//     let username = "faisal";
//     console.log(this.username); // in function this is not working
// }



const chai = () => {
    let username = "faisal";
    console.log(this.username); 
}

//chai();

//arrow function
//explicite return:--
const addTwo = (num1, num2) => {
    return num1 + num2;
}

// implicite return:-- 
const addThree = (num1, num2, num3) => (num1 + num2 + num3);

console.log(addTwo(3,4));
console.log(addThree(3,4,5));