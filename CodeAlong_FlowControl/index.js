//Selection


// let age = prompt("Enter your age")

// if (age  < 18){
//     if (age < 10){
//         console.log("Get off the internet");
//     }
//     console.log("You are too young");
//     window.open("http://www.google.com")
// } 
// else if (age == 18){
// console.log("You just made it");
// }
// else{
//     console.log("You are of age. Welcome!");
// } 
// else if default is other conditions are not met

let now = new Date();
// let greeting = "Good";

// if (now.getHours() >= 15){
//     greeting += " Evening"
// }
// else {
//     greeting += " Day"
// }

// console.log(greeting);

//ternary if statement - can't have else if
// let greeting = "Good" + ((now.getHours() > 14) ? " Evening" : " Day")
// console.log(greeting);

// Switch Case - to avoid having too many else if

switch (now.getDay()) {
    case 0: 
        document.write("It's Sunday")
        break
    case 1:
        document.write("It's Monday")
        break
    case 2:
        document.write("It's Tuesday")
        break
    case 3:
        document.write("It's Wednesday")
        break
    case _: // if none are true
        document.write("Apocalypse")
}

let age = 19

if (age > 10){
    console.log("Age is greater than 10");
}

if (age > 11){
    console.log("Age is greater than 10");
}

if (age > 12){
    console.log("Age is greater than 10");
}