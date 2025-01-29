const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)



// using arrow function:--
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "dsa course",
        price: 5999
    },
    {
        itemName: "AI course",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce( (accc, item) => accc + item.price, 0 )

console.log(priceToPay);