// let error = new Error("My Error Message")

// console.log(error.message);

// Range Error

// let pi = 3.14159
// pi.toFixed(10657657)

// let myList = [1,2,3,4,5,6]
// console.log(myList[10]); // Gives undefined error because there is no 10th index

// Reference Error

// function foo(){
//     bar++
// }
    
// foo () // Gives reference error because bar is not defined

// Syntax Error - human error with the writing

// if (foo){console.log("It's there"); // { } not closed so syntax error

// Type Error - calling something that isn't the right type of object

// const foo = {} // Empty array

// foo.bar( )  // Type error no function called bar inside foo

// Try, Throw, Catch for checking errors

// try {
//     let x = parseInt(prompt("Enter a Number: "))
//     if (isNaN(x)){
//         let e = new Error();
//         e.message = "That was not a number"
//         throw e;    
//     }
// }
// catch (e) {
//     alert(`Something Went Wrong: ${e.message}`)
// }
// finally{
//     console.log("Check Complete");
// }

// let devisor = 0
// if (devisor === 0){
//     throw new RangeError("Attempted to divide by 0")
// }

// Debugging with VS code - adding break points to check

function looping(){
    let i = 10;
    while (i > 5) {
        console.log(i);
        i--
    }
}

looping()

