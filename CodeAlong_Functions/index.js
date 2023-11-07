// // Functions are blocks of code that can be called upon to run as many times as necessary

// function sayHello(name){ // name is expected to be put inputted 
//    return `Hello there ${name}`; // functions need to use return
// } // nothing happens until function is called

// let a = sayHello ("Garry") // This is how to call a function
// console.log(a);

// console.log(sayHello("Dave")); // ALternative method

// function rect(h,l){
//     return `the area of that rectangle is ${h*l}cm^2`
// }

// let area = rect(3,7)
// console.log(area);

// More complex exmple

// const calcArea = function(radius){
//     let area = 3.14159 * radius**2
//     return area
// }

// const area = calcArea(5)
// console.log(area);

// // same with less code

// const calcArea2 = function(radius){
//     return 3.14159 * radius**2
// }
// const area2 = calcArea2(5)
// console.log(area2);

// Arrow Functions

// const calcAreaArrow = radius => {
//     return 3.14159 * radius**2
// }

// const arrow = calcAreaArrow(5)
// console.log(arrow);

// Implicit return 

// const sayHello = () => "Hi there"
// const calcAreaArrow2 = radius => 3.14159 * radius**2 // no () needed since only one argument
// const rect = (h,l) => h*l

// const arrow2 = calcAreaArrow2(5)
// console.log(arrow2);

// Callback Functions - function that calls another functions and works with the result it recieves

// const myFunction = callBackFunction =>{
//     let value = 70
//     callBackFunction(value)
//     return value
// }

// // this is the call

// myFunction(function(value){  // using value from callback
//     console.log(`Value was ${value + 80}`);
// })

// Default parameters + rest parameters

// function doSomething(arg1, arg2, arg3=5){ // if user doesn't supply argument 3 assume it is 5
//     return (arg1 + arg2 + arg3)
// }

// console.log(doSomething(2,3,7)); // arg3 is assumed as 5 unless said otherwise, it will overwrite the default
// // need at leat 2 arguments for the function to work

// // Variadic - rest parameter

// function multiply(arg1, ...args){ // accepts as many arguments as you need treats other arguments as an array
//     args.forEach((arg,i,array) => array[i] = arg * arg1)
//     return args
// }

// console.log(multiply(5,2,3,4,5,6)); // each argument is multiplied by arg1

// Scope - what other functions can see the variables we create
// creating a variable in a function creates a global variable

// var creates a global variable which is why let and const are prefered

// function test(){
//     flag = true // created as a global variable can be fixed by making either of them let
//     console.log(flag);
//     test1()  // updated gloabal variable
//     console.log(flag);
// }

// function test1(){
//     flag = false // pulled globally to be edited
//     return 
// }

// test()

// function test(){
//     flag = true 
//     console.log(flag);
//     test1()  
//     console.log(flag);
// }

// function test1(){
//     let flag = false // can be fixed by making either flag with let
//     console.log(`${flag} flag from test 1`);
//     return 
// }

// test()

// let flag = true // Explicitly gloabal

// function test(){
//     console.log(flag); // first globally true
//     test1()
//     console.log(flag); // test1 ran changing gloabal flag to false
// }

// function test1(){
//     flag = false 
//     return
// }

// test ()




// function test(){
//     let flag = true // flag as local to this function so tes1 can't see it
//     console.log(flag); // first globally true
//     test1()
//     console.log(flag); // test1 ran changing gloabal flag to false
// }

// function test1(){
//     flag = false // test1 will create a global flag since it can't find a global one
//     return
// }

// test ()

// let flag = true

// function test(){
//     let flag = false // uses the local variable rather than global so is flase
//     console.log(flag);
// }

// test()

// Functins prioritise local if they exist but if not call on or create a global one



