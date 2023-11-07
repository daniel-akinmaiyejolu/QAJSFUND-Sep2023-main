// Maps - key value pairs

// let myMap = new Map(
//     [ 
//         ["City", "London"],
//         ["Pop", 12000000],
//         ["Size", 200]
//     ]
// )
// Individual records are defined within []

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("City")); // Presence check
// console.log(myMap.get("City"));


// myMap.forEach(entry =>{
//     document.write(`${entry} <br>`); // writing the entries onto the webpage
// })

// myMap.delete("Size") // removes that entry
// console.log(myMap);
// myMap.set("Football", "Chelsea") // Adding data
// console.log(myMap);
// // Can't have multiples keys with the same name

// myMap.clear() // clears all the data on the map but it still exists as a reference you can add new things to
// console.log(myMap);

// for (let [key, value] of myMap){
//     console.log(`Key: ${key} - Value: ${value}`);
// }

// A set is how we compare values and maps

let mySet = new Set()

mySet.add("Apples") // Cannot add duplicate values only unique ones
mySet.add("Bananas")
console.log(mySet.size);
console.log(mySet);

console.log(mySet.has("Apples")); 


