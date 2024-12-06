// Given a string, reverse each word in the sentence

var str = " my name is chandan";

var savedStr = str.split(" ").map((word)=>{
    return word.split("").reverse().join("")
})
console.log(savedStr.join(" "));



// how to empty an array without reset and loop

var arr = [1, 2, 3, 4, 5];
arr.length = 0
console.log(arr.length);


// check an given object is array or not

function checkArray(elem) {
    return Array.isArray(elem);
}

console.log(checkArray([]));
console.log((checkArray({})));


// given a number is integer or not without using isInteger

var a = 10.0;

if ( a%1 === 0){
    console.log("Integer");
} else {
    console.log("not an Integer");
    
}



// make an array duplicate 
// arr = [1, 2, 3, 4, 5] should become [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

function duplicate(arr) {
    return arr.concat(arr);
}

var arr = [1, 2, 3, 4, 5];

console.log(duplicate(arr));

// reverse a number

function reverseKaro(num) {
    return Number(num.toString().split("").reverse().join(""))
}

console.log(reverseKaro(122));


function reverseKaroSecond(num) {
    var rev = 0;
    while( num > 0) {
        let rem = num % 10;
        rev = rev*10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseKaroSecond(12345));



// check a given string is palindrome or not

function stringPalChecker(str) {
    var reversed = str.split("").reverse().join("");
    return str == reversed;
}

console.log(stringPalChecker("lool"));

// return the passed string in alphabetical order

function alphaOrder(str) {
    console.log(str.split("").sort().join(""));
}

alphaOrder("apple");



// capitalise first letter of the string
// chandan bhai kaise ho
// Chandan Bhai Kaise Ho

function capitaliseKaro(str) {
    return str.split(" ").map((word) => {
         return word.charAt(0).toUpperCase() + word.substring(1)
     }).join(" ");
 }
 
 console.log(capitaliseKaro("hello bhai kaise ho"));
 



// 11. Write a js function to get the number of occurences of each
// letter in specified string

// apple 
// a =1 
// p = 2
// l = 1
// e =1


function occ(str){
    var occurences = {};

    str.split("").forEach(element => {
        if(occurences.hasOwnProperty(element) === false) {
            occurences[element] = 1;
        } else {
            occurences[element]++;
        }
    });

    return occurences;
}

console.log(occ("apple"));



// sum of all the elements in the array

function sumOfArray(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

var arr = [1, 2, 3, 4, 5];

console.log(sumOfArray(arr));


// In a arr of number and string only 
// add those numbers which are not strings

var arr = [1, 2, 3, 4, "hi", 4, "bro"]

function sumInteger(arr) {
    var sum = 0;
    arr.forEach(element => {
        if( element % 1 === 0) { // typeOf element === "number"
            sum += element;
        }
    });

    return sum;
}

console.log(sumInteger(arr));


// return the array object have gender male

var arr = [ 
    { name: "chandan" , gender: "male"},
    { name: "khushi", gender: "female"},
    { name: "keshav", gender: "male"},
    { name: "krunali", gender: "female"},
];

var newArr = arr.filter((element) => {
    return element.gender === "male";
}) 
console.log(newArr);


// clone an array

function clone(arr) {
    var arr1=  [...arr];
    console.log(arr1);
    arr1.push(7)   
    console.log(arr1);
    console.log(arr);
    
    
}

clone([1, 2, 3, 4, 5])


// write a js function that will tell the types of arg
// there are six possible values that typeof returns: 
// object, boolean, function, number, string, and undefine
function typeTeller(elem) {
    console.log(typeof elem);
    
}

typeTeller({})
typeTeller(true);
typeTeller(12)
typeTeller("12")
typeTeller(undefined)
typeTeller(function(){})


// write a javaScript function taking n as arg and that return
// first n number of Array

function retrieve(arr, n=1) {
    for (let i = 0; i<n; i++) {
        console.log(arr[i]);
        
    }
    
}

retrieve([1, 2, 3, 4, 5], 3)


// last n element of the array

function retrieve(arr, n = 1) {
    for(let i = arr.length -1 ; i>= arr.length-n; i--){
        console.log(arr[i]);
        
    }
    
}

retrieve([1,2,3,4,5,6,7,8], 5)

// most frequest item in the array

function freq(arr) {
    var freqency = {};

    arr.forEach(element => {
        if( freqency.hasOwnProperty(element)) {
            freqency[element]++;
        } else {
            freqency[element] = 1;
        }
    });
    var ans = Object.keys(freqency).reduce(function(acc, next) {
        return freqency[acc] > freqency[next] ? acc : next;
    })
    console.log(ans);
}

freq([ 2, 3, 4, 5, 2, 2, 3, 5, 5, 1, 7]);


// Write a js function to suffle an array

function suffle(arr) {
    // sabse pehle kitna area shuffle karna hai
    var totalShuffleArea = arr.length;
    while(totalShuffleArea > 0){
        totalShuffleArea--;
        // ek random number nikalo
        var indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea)
        var temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = temp;
    }
    return arr;
}

console.log(suffle([1, 2, 3, 4, 5, 6]));


// write a js program to print union of two array 

function union(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))]
}

console.log(union([1,2,3,4,5], [4,5,6,7]));
