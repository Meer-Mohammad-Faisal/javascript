
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