// let a = Array()
// let b = Array(10) // 10 elements allowed in this array (undefined)
// let c = Array("Tom","Dick","Harry") // Array with defined values
// let d = ["Tom","Dick","Harry"];  // Short hand for making array

// // d[0] = "Dave" // Index array to change 0 from Tom to Dave
// // console.log(d);
// // console.log(d[1]); // Only show a specific index in the array

// // for (let i = 0; i < length.d; i++){
// //     console.log(d[i]);
// // }

// console.log(d.reverse());

// let fruits = ["Apple", "Pear", "Banana", "Orange"]

// let fruitString = fruits.join("---") // Joining elements of an array together

// console.log(fruitString);


// // Push - adds new element to the end of an array

// console.log(fruits.push("Lemon"));
// console.log(fruits);

// // Pop() - Takes the last element of array out
// console.log(fruits.pop()); 
// console.log(fruits);

// // Unshift - puts new element at the front of array

// console.log(fruits.unshift("Kiwi"));
// console.log(fruits);

// // Shift - removes element at the beginning of array

// console.log(fruits.shift());
// console.log(fruits);

// // For of loop

// let myArray = [1,2,3,4]

// for (el of myArray) { // For elements of my array
//     if (el === 3){
//         break
//     }
//     console.log(el);
// }

let text = ""
const fruits =["Apple", "Pear", "Banana", "Orange"]

fruits.splice(2,0, "Grape") // Inserting into a specific point in the array, 2 is position, next number is number to delete

function myFunction(item, index){
    text += index + ": " + item + "<br>"
}

fruits.forEach(myFunction)

document.write(text)