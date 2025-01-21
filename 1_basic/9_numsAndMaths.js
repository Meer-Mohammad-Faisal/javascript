const score = 388;
console.log(score);

const balance = new Number(1000);
console.log(balance);

//converting into String
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.5653;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++  MATHS  +++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(3.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,3,6,7,9));
console.log(Math.max(4,6,8,3,9));
//random(imp)
console.log(Math.random()) // anything between 0 to 1
console.log(Math.random()*10); // from 0 to 10
console.log((Math.random()*10) + 1); //1 is making sure there is not 0
console.log(Math.floor(Math.random()*10) + 1); // give witout point

//basic formula:
const min = 10; 
const max = 20;

console.log(Math.floor(Math.random() * (max - min ) + 1) + min);