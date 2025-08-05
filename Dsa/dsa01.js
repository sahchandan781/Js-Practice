// Day 1 CHALLENGE

// 1. Remove Discontinued products :
let products = ['Laptop','Mobile', 'Tablet', 'Watch', 'Modem','Cpu']
// remove Tablet
products.splice(2,1)

console.log(products);

// 2. Add new student in between Problem:
// output: [ 'Ali', 'Nina', 'Omar', 'Sara', 'Joya' ]

let students = ['Ali', 'Sara', 'Joya']

students.splice(1,0,'Nina', 'Omar')

console.log(students);

// 3. Extract top 3 performaer

let scores = [ 'Ali', 'Nina', 'Omar', 'Sara', 'Joya' ];
const top = scores.slice(0,3);
console.log(top);

// 4. Show last 2 days sales
let sales = [220,300, 203, 403, 473, 243,782, 742];
const last = sales.slice(-2);
console.log(last);


// 5. Get all user who are active
// Output : [
//   { name: 'Ahmad', active: true },
//   { name: 'khushi', active: true },
//   { name: 'romeo', active: true }
// ]

let users = [
    {name: "Ahmad", active: true},
    {name: "chandan", active: false},
    {name: "khushi", active: true},
    {name: "rahul", active: false},
    {name: "romeo", active: true},

]

const result = users.filter((user) => {
    if(user.active){
        return user;
    }
})

console.log(result);


// 6. Block short phone number
// Output : [ '1234567890', '7696805575', '1234561234' ]

let phoneNumbers = ['1234567890', '12345', '7696805575', '456234569', "1234561234"]

const valid = phoneNumbers.filter((number) => number.length >= 10)

console.log(valid);

// 7. Convert Price to with tax
const prices = [100, 200, 300]

const pricewithTax = prices.map((price) => price + (price * 0.18))
console.log(pricewithTax);

// 8. Append ".com" to website names

let sites = ["amazon", 'google', "microsoft", "apple"]
const com = sites.map((site) => site.trim() + ".com")

console.log(com);

const cart = [123, 124, 300, 491, 452]

const total = cart.reduce((acc, price) => acc + price, 0)

console.log(total);

// 10. count frequency of vote problem

let votes = ['A', 'B', 'A', 'C', 'B', 'A']

let freq = votes.reduce((acc, curr) => {
    if(acc[curr]){
        acc[curr]===++acc[curr];
    } else{
        acc[curr] = 1
    }
    return acc
}, {})

console.log(freq);









