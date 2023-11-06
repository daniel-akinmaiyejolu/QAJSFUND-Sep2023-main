// JAVASCRIPTTYPES

console.log("My Console");
// alert("Welcome to my page");

// p = 10; // Implicit declaration DO NOT USE
// let y; // Explicit declaration without assignment
// let g = null; // Explicit declaration without assignment - no real value but a value is expected
let x = 10; // Explicit declaration with assignment
console.log(x); // Logging the value of x to the console

const t = "Bill"; // t will always be the value it is assigned to
// t = 6; // will give an error in the console of webpage because t is constant (silent fail in the actual webpage)

// var myAge = 11; // DO NOT USE it moves things around

// let _myVar = 7 // variable names start with either _

// let $newvar3 = "3"; // can also start with $

// let myFirstVariable = "Andy" // Cammel case is used to write variable names

// const header = document.getElementById();

let myName = "Bill"
myName = "Fred" // Actually deletes old variable and makes a new one (not actually changed)

let myAge = "6";
myAge = Number(myAge) // makes it be viewed as a number rather than string
console.log(typeof myAge) // query the type of data
console.log(typeof {"Name": "Bill"}); // query object

// Objects - A variable with a collection of properties

const me = {
    "name": "bob", // can use commas to add more properties
    "age": 77
} // Javascript object notation
// Have reference to where it is store

console.log(me);

me.age = 44; // Completely mutable can change properties without changing where it is stored

console.log(me); 

// Boolean

let myage = true // Can either be true or false

console.log(typeof myage); // Will show boolean

if (myage){
    console.log("myage exists")
}; // if myage is false it won't do it but true it will

username = ""

if (username){
console.log("Your username exists");
}; // Can be used to check if user filled form

if (!username){
    console.log("Your username is empty");
    }; // If no username this is what is printed

let userId = null;
console.log(userId == undefined); // Should say true because null is undefined

let loggedin = false
console.log(loggedin);

// 0 = False, 1 = True 

// Number Type - stored as a 64 bit value

// NaN // Not a number

let n = "Bill";

if (isNaN(n)){
    console.log("N is not a number");
}

console.log(Number.MAX_VALUE) 
console.log(Number.MIN_VALUE)
// Checking the max and min number values 

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
// Infinity values exist in javascript

let j = 5
let k = 7

console.log(++j> 5);

console.log(`${j} is a number, as is ${k}`) // `` can be used to interplate a variable and string

console.log("here is a \n\r 'return' and here is a \t tab"); // escape characters and using different speach marks in strong

// let str1 = "5+3=" 
// let value = 5+3;

// let str2 = str1 + value // Takes up too much memory
// console.log(str2)

// let str2 =`5 + 3 = ${5 + 3}`
// console.log(str2) // Better way to do it

let str = "Hello and welcome to our code"

let f = str.indexOf("welcome") // checking the index location of welcome
console.log(f)
console.log(str.charAt(6)) // Using index to find character at index 6

let upp = str.toUpperCase()
console.log(upp);

let myStr = "7"

let myNum = parseInt(myStr)
console.log(myNum); // Does not work with values that are not numbers

