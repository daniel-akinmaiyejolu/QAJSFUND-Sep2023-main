// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

const bluePara = document.querySelector('#blueParagraph')
console.log(bluePara.style.color);
console.log(getComputedStyle(bluePara).color);

function blueToRed() {bluePara.style.color = "red";
console.log(bluePara.style.color);
console.log(getComputedStyle(bluePara).color);
bluePara.textContent = bluePara.textContent.replace("blue", "red")}

const greenParas = document.querySelectorAll(".greenBg");
function greenToPink() {
    for(let greenPara of greenParas) {
        greenPara.className = 'hotpinkBg';
        console.log(greenPara.style.backgroundColor);
        console.log(getComputedStyle(greenPara).backgroundColor);
        greenPara.textContent = greenPara.textContent.replace("green", "hotpink");
    }
}

console.log(greenParas[0].style.backgroundColor);
console.dir(getComputedStyle(greenParas[0]).backgroundColor);

const tnrPara = document.querySelector("#tnrParagraph");
function tnrToArial() {
    tnrPara.style.fontFamily = "arial";
    console.log(tnrPara.style.fontFamily);
    console.log(getComputedStyle(tnrPara).fontFamily);
    tnrPara.textContent = tnrPara.textContent.replace("Times New Roman", "Arial");
}
console.log(tnrPara.style.fontFamily);
console.log(getComputedStyle(tnrPara).fontFamily);