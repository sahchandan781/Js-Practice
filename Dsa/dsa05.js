const phoneNumbers = [
    "+917696805575",
    "+14085555123",
    "+915278459575",
    "+12345957681",
    "+917896784571"
]

let indian = phoneNumbers.filter((n) => {
    if(n.startsWith("+91")){
        phoneNumbers.length ===10;
        return n;
    }
})
console.log("Indian",indian);

let american = phoneNumbers.filter((n) =>{
    if(n.startsWith("+1")){
        phoneNumbers.length === 10;
        return n
    }
})
console.log("American", american);



let cart = [101, 102, 104]

let newProduct = 103

cart.splice(2, 0, newProduct)
console.log(cart);

let waitingList = ["chandan", "John", "Sara", "karan"]
let newStudent = "Aarav"

waitingList.push(newProduct);
console.log(waitingList);

