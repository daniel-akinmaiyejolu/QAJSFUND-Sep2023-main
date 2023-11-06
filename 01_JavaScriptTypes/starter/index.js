let numTest = 45.324568; // Declare a number
console.log(numTest); 

let twoDecimalPoints = numTest.toFixed(2); // truncate the number to 2 decimal places
console.log(twoDecimalPoints); // Number is also converted to a string because of .toFixed

let stringTest = "I am the very model of a modern major general";
stringTest = stringTest.toUpperCase(); // converts the string to uppercase
let indexOfM = stringTest.indexOf("M"); // How many caharacters before the desired character
console.log(indexOfM); // value of -1 means there is no match

let start = stringTest.indexOf("MODEL"); // starts at the position before the word
let end = stringTest.lastIndexOf("MAJOR"); // stops at the position before

let subStr = stringTest.substring(start, end);
console.log(subStr);

document.write("<p>" + subStr + "</p>"); // Writes the content of subStr to the webpage