console.log(3+5);
console.log("my mum: " + 6);
console.log(`my mum = ${3+3}`);

//STANDARD OPERATORS
console.log(8+5);
console.log(8-5);
console.log(8/5);
console.log(8*5);

let a = 5
console.log(a);

a = a + 5
console.log(a);

a += 5 
console.log(a);

a *= 5
console.log(a);

console.log(2 ** 3);

console.log(2 / 3);

a++
console.log(a);
a--
console.log(a);

console.log(10 % 2)  // give the remainder
// BIDMAS

console.log(3 > 2);
console.log(3 < 2);
console.log(3 <= 2);

console.log(3 == 4); // comparison
console.log(3 === 3); // strict comparison (value and type)
console.log(3 != 4); // Is not equal to

let c = true
let b = false

console.log(c && b); // c and b
console.log(c || b); // or operator
console.log(c && ! b); // c and not b

// Type checking

let d = 2
let e = "two"
let f = "2"

console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

console.log(d * d);
console.log(d + e);
console.log(d * f); // works because it is a digit despite it being string
console.log(typeof (d * f)); // type is now number

let g = (d == f)
console.log(g);

let x = true; let y = 1
console.log(x == y);
console.log(x === y);

console.log(x != y);
console.log(x !== y);

console.log(eval("5*5*5+4")); // evaluation

let s = "5"
let i = 5

let total = i + parseInt(s);
console.log(total);

console.log(parseInt("55.95boom")); // strips everything after decimal
console.log(parseFloat("55.95boom")); // keeps only numeric


