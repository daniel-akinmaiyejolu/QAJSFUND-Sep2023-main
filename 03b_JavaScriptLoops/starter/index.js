for (let i = 0; i < 10; i++){
        console.log(i);
    }

let x = 2;
let loopCounter = 0;

while (x < 10000){
    console.log(`This is the value of x:${x} and this is loop number ${loopCounter}`);
    x = x**2
    loopCounter++
}