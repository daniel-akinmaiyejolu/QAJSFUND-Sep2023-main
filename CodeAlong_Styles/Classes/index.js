const content = document.querySelector('p');
console.log(content.classList);

content.classList.add('another');
console.log(content.classList);
content.classList.remove('another');
console.log(content.classList);

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error')
    }
    if(para.textContent.includes('success')){
        para.classList.add('sucess')
    }
})

//toggle

const title = document.querySelector('.title');
title.classList.toggle('test') // checks for existence then adds or removed based on if it exists or not
console.log(title.classList);




