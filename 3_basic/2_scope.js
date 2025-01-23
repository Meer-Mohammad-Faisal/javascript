
let a = 100 // accessable anywhere
// const b = 20// accessable anywhere
var c = 30// accessable anywhere

if (true) {
    let a = 10 // cannot accesss outside from this scope
    const b = 20 // cannot accesss outside from thiss cope
    var c = 300 // accessable 
    console.log(a); // give inner a = 10
}

console.log(a);
//console.log(b);
console.log(c); // give inner value of c = 300


// NOTE: scope is diffrent on browser or my diffrent on codespace(vs code)


//NASTED SCOPE:
function one(){
    const username = "faisal";

    function two(){
        const website = "youtube";
        console.log(username);
        
    }
    //console.log(website);

    two();
}

one();



if (true) {
    const username = "fasial"
    if (username === "fasial") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); // cannot access
}

//console.log(username); // cannot access




// +++++++++++++++++++ intresting +++++++++++++++


console.log(addone(4)); // access before the function

function addone (num) {
    return num + 1;
}




// function ko varable me store kr leya

//addTwo(5);  // cannot access before the variable of function

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));