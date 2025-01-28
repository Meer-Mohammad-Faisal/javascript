
// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// // another method
// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe);



coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "c plus plus",
        languageFileName: "cpp",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
]

// accessing object of an array

mycoding.forEach( (item) => {
    console.log(item.languageName);
})