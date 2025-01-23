
//const tinderUser = new Object(); //single tan object
const tinderUser = {}; // non single ton object 


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
 
//nested object:--
const regularUser = {
    email: "some@gamil.com",
    fulname: {
        userfullname: {
            firstname: "fasial",
            lastname: "alam"
        }
    }
    
}

console.log(regularUser.fulname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3: "a", 4:"b"};
const obj4 = {5: "a", 6:"b"};


//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1,obj2,obj4);

//using spread operator:
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);




//array of object: 
const users = [
    {
        id: 1,  
        email: "faisal@gmail.com"
    },
    {
        id: 1,  
        email: "faisal@gmail.com"
    },
    {
        id: 1,  
        email: "faisal@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

//finding keys and values
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));









const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor -less use


//object destructring:
const {courseInstructor: instructor} = course;
console.log(instructor);


// //json
// {
//     "name": "faisal",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// {
//     {},
//     {},
//     {}
// }