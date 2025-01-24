// Immediatily Invoked Function Expressions  (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECT`);
})();

( (name) => {
    console.log(`DB CONNECT TWO ${name}`);
} )("fasial")