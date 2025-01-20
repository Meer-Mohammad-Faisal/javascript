// primitive:
    // 7 type:
        // String
        // Number
        // Boolean
        // null
        // undefined
        // Symbol
        //bigInt

        const score = 100
        const scorevalue = 100.3

        const isLoggedIn = false
        const outsideTemp = null
        let userEmail;
        const bigNumber = 435897385487957n;

        const id = Symbol('123');
        const anotherId = Symbol('123');
        console.log(id == anotherId);
        


// non-primitive (Refrence):
    // Array
    // Object
    // Function

    const heros = ["vijay", "varun", "ranbir"];

    let myobj = {
        name: "faisal",
        age: 22,

    }

    const myFunction = function(){
        console.log("hello universe");
    }

// how to find dataType
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);