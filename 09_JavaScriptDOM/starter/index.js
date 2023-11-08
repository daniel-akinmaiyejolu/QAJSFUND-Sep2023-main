const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];

function buildP(placeHolder, num){
    let i = 0
    do{
        let p= document.createElement("p")
        let text = document.createTextNode("Another One")
        p.style.color = colours[parseInt(Math.random() * colours.length)]
        p.appendChild(text)
        placeHolder.appendChild(p)
        i++;
    } while (i < num);
   
}

buildP(document.querySelector("#placeholder"), 4)