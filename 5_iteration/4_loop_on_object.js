const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

// for in loop

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in loop in array:
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}

// for in loop on map
const map = new Map();
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")

for(const key in map){
    console.log(key);  // nothing will print beacuse map is not iterable:   
}


