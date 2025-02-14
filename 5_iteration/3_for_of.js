// for of 
// ["", "", ""];
// [{}, {}, {}];


const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello world";
for(const greet of greetings){
    console.log(greet);
}

// Maps : key, value     value should be unique and order matter

const map = new Map();
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'

}

// object is not iterable through this method
for(const [key,value] of myObject){
    console.log(key, ":-", value);
}



