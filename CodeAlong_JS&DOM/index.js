// //DOM - document object model - elements page when you inspect webpage
// // DOM tree has to types of elements: Nodes or text e.g <title> is a node which can display text
// // HTML is translated into DOM elements which can be used for java script

// const para = document.querySelector('p'); // Single query selector find the first paragraph
// console.log(para); // returns the first paragraph it finds

// const paraClass = document.querySelector(".error") // find anything with the class error
// console.log(paraClass);

// const paras = document.querySelectorAll("p"); // Finds ass the paragraphs 
// console.log(paras); // returns node list

// console.log(paras[2]); // can interate through when query selector is used

// paras.forEach(para =>{
//     console.log(para);
// }) // logs each node from the node list 

// // Search for element by Id

// const title = document.getElementById("page-title");
// console.log(title);

// // Search got elements by class name

// const errors = document.getElementsByClassName("error");
// console.log(errors); // HTML collection of elements with the class name - not iterable so can't interate through each one

// // Search for element by tag name

// const parasTag = document.getElementsByTagName("p");
// console.log(parasTag); // Also not iterable

// Editting the page

// const para = document.querySelector("p");
// console.log(para.innerText); // Doesn't show the html tags, just the text
// para.innerText = "Rainy morning" // changes the text in the paragraph found

// const paras = document.querySelectorAll("p");
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += " New Text" // adds new text to the end of each paragraph
// })
// DOM is updated by the java script

//Chaning the HTML

// const content = document.querySelector(".content");
// // console.log(content.innerHTML); // doesn't show div tag just the html
// // content.innerHTML += "<h2> This is a header in the div <h2>" // changes the html

// const people = ["Dave", "Frank", "Kate", Mike];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// })

// Create Eleents and Text Nodes

let el = document.createElement("p") // everytime "el" is used it creates a p tag
let text = document.createTextNode(`Try some backticks`)

el.appendChild(text) // putting the text into the paragraph tag
// <p> Try some back ticks </P> //this is essentially what is created

document.querySelector("#newtext").appendChild(el) // adds it to the document

// CSS selectors are used to obtain almost any DOM element
// You can coppy css selector, js path or style of an element from the DOM
