const para = document.querySelector('p')
para.onclick = () => {
    alert("hi")
}

document.querySelector('p').addEventListener('mouseover', makeRed)
document.querySelector('p').addEventListener('mouseout', makeBlack)

const myPara = document.querySelector('p')

function makeRed(){
    myPara.style.color = 'red'
}

function makeBlack(){
    myPara.style.color = ''
}

// prevent Default

document.getElementById("mya").addEventListener("click", function(event){
    event.preventDefault()
    console.log(event);
}) // The link will not do anything

document.getElementById('b').addEventListener("mousedown", mouseEvent, true)

function mouseEvent(e){
    document.getElementById("out").innerHTML = `${e.pageX}-${e.pageY}`
}