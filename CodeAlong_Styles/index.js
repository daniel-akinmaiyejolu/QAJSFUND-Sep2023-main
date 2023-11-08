// const link = document.querySelector('a');
// console.log(link.getAttribute('href')); // tells you href - where the link goes
// console.dir(link); // everything that can be done to that element can be shown
// link.setAttribute('href', 'https://www.yahoo.com') // changing where the link takes you
// console.log(link.getAttribute('href'));
// link.innerText = "Go to Yahoo" // chaning the text of the link

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success')
// console.log(mssg.getAttribute('class'));

const title = document.querySelector('h1');
// title.setAttribute('style', 'border: 1px solid black') // Completely overwrites other styles already set
console.log(title.style.color);
title.style.margin = '50px';
title.style.border = '2px solid blue'; // have to add each one individually to not overwrite
// can't do font-size in java script it is fontSize
// title.style.fontSize = '60px';
title.style.margin = '';