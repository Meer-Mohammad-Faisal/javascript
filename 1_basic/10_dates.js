const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

///checking type
console.log(typeof(myDate) );

// creating new dates
let myCreadedDate = new Date(2025,1,12, 5,3);
console.log(myCreadedDate.toLocaleString()); // moths start form 0

let anotherDate = new Date("01-14-2025");
console.log(anotherDate.toLocaleString());

// time stamp
let myTimeStamp = Date.now();

//comparing
console.log(myTimeStamp);
console.log(myCreadedDate.getTime());


//current time in milisecond
console.log(Date.now());
//converting it into seconds
console.log(Math.floor(Date.now()/1000));


//some more   function
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // start form monday(1)
console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long",
    
})