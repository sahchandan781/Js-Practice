// Higher Order function
// constructor functions
// first class function
// new keyword
// IIRE 
// prototype
// prototypical inheritance
// this call apply bind 
// pure & impure function
// closures

// 1. What is HOF?
// Ans: Hof Are the function which accept a function in a parameter or return a function
//      or both
// closure banate time use hota hai
// example: forEach function always take a function as parameter to it is a HOF

function abcde(val){}
abcde(function(){})

// or

function abcd(){
    return function(){}
}


// 2. constructor functions
// Ans: A constructor function in JavaScript is a special type 
//     of function that is used to create and initialize objects.
//     It is called when an object is instantiated using the new keyword.
//     The constructor function’s purpose is to set the initial state of the object, including its properties and methods.

// or in other words:
// A function which whenever invoked with "New" keyWord returns An 
// Object, if we use "this"  keyword inside that
//  function, it return a object with all of the properties and methods 
//  mentioned inside that function with this keyword, such function is called constructor functions
function circularbuttonBanao(color){ // this is a constructor function
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}
var redBtn = new circularbuttonBanao("red"); // this is an object initialized using the function
var greenBtn = new circularbuttonBanao("green");


// 3. first class function
// Ans: A language is said to have first class functions 
//      when the function in that language are treated as variables
//      you can save them, you can pass them as arguments to another function

var ab = function() {
}

// 4. new keyword
// The new keyword in JavaScript is used to create a new 
// instance of an object from a constructor function.

// 3. iife => An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// Syntax
// The basic syntax of an IIFE is:

// (function(){ /* code to be executed */ })();

// The function is wrapped in parentheses, and the () at the end immediately invokes the function.

var ans = (function() {
    var privateval = 12;
    return {
        getter: function(){
            console.log(privateval);
            
        },
        setter: function(val) {
            privateval = val
        }
    }
})()


// 4. prototype property
// Ans: many properties and methods are already available to 
// use build by javascript creators inside prototype of every object
// fo example hasOwnProperty .length etc


var obj = {name: "chandan"}


// 5. prototypical inheritance
// Ans: Prototype inheritance is a fundamental concept in
//  JavaScript that allows objects to inherit properties and methods from other objects.
// It’s a key feature of JavaScript’s prototype-based inheritance model, which differs
//  from class-based inheritance found in other languages like Java or C++.
var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    hasFourLeg: false
}

var chandan = {
    canMakeAmzingWebsite: true,
    canSolveDsaQuestion: true
}
chandan.__prototype__ = human;

// 6.This call apply bind keyword
// Ans: this keyword is special keyword in javascript which 
// changes it's value in different context
// for exapmle in global scope:
// whenever a value is not defined inside {} it is a global scope variable
console.log(this); // will return window
// global => window
// function => window
// method => object important => in any method this keyword always refers to parent object
// example
var button = document.querySelector("button");
button.addEventListener("click",function() {
    this.style.color = "red";
})
// in above.. this will point to button and work 

// call 
function abcd() {
    console.log(this);    
}
var obj1 = {age: 24}
abcd.call(obj) // this will return the object
// apply 
function cde(val, val1, val2) {
    console.log(this);
    
}

cde.apply(obj1, [1, 2, 3]) // apply take two argument but it has multiple then it take in array

var abc = abcd.bind(obj1)
//


// 7. pure and impure function

// pure function is any function which has these two features 
// i). it should always return same output for the same input 
// ii). It will never change/update the value of the global variable
// example:
function ab(a,b) {
    return a*b;
}
var ans1 = ab(1,2);
var ans2  = ab(1, 2);