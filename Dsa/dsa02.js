// Day 2 Challenge


// 1. Generate Invoice report
// Problem Statement
// Your are building an invoice generator 
// For each item, calculate total = qty * price.

let items = [
    {name: "Pen", qty: 3, price:10},
    {name: "Notebook", qty: 2, price:50},
    {name: "Bag", qty: 1, price:500},
    {name: "pencil", qty: 5, price:5},
]

const invoice = items.map((item) => ({
    name: item.name,
    total: item.qty * item.price
}))

console.log(invoice);

// Problem 2
// Detect Duplicate Enteries
// you are validating a user list
// some user are accidently added more than once
// Extract duplicate enteries

const users = ['Ali','Sara', 'Nina', 'Omar', 'Sara', 'Joya', 'Nina', 'Omar']

const repeat = users.filter((name, index, arr) => {
    return arr.indexOf(name) != arr.lastIndexOf(name) && arr.indexOf(name) === index;
})

console.log(repeat);




//problem 3
//📈 3. Find Most Sold Product
//You're analyzing orders. 
//Find the product with the highest quantity sold.
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];






let freqMap = orders.reduce((acc, order) => {
    if(!acc[order.product]){
        acc[order.product] = 0
    }
    acc[order.product] += order.qty;
    return acc;
},{})
console.log(freqMap);


let arr = Object.entries(freqMap)

let maxProduct = arr.reduce((acc, curr) => {
    if(curr[1]> acc[1]){
        return curr;
    }
    return acc;
}, arr[0]);

console.log(maxProduct);
