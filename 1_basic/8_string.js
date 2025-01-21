const name = "faisal";
const repoCount = 50;

//console.log(name + repoCount + "value");

console.log(`My name is ${name} and my repcount is ${repoCount}`);

const gameName = new String('faisal-fc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,4);
console.log(anotherString);

const newStringOne = "    faisal   ";
console.log(newStringOne);
console.log(newStringOne.trim());

//replace 
const url = "https://fasial.com/faisal%49alam";
console.log(url.replace('%49', '-'));

///checking present or not
console.log(url.includes('faisal'));


console.log(gameName.split('-'));