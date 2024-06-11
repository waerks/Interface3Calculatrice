// // CALCULATRICE
const operator = document.querySelectorAll(".operator");
const display = document.getElementById("display");

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const times = document.getElementById("times");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const div = document.getElementById("div");
const clear = document.getElementById("clear");
const doit = document.getElementById("doit")

/////////////////////////////////////////

let nbre1 = ''
let nbre2 = ''
currentOperator = ''

/////////////////////////////////////////

one.addEventListener('click', function(){
    display.value += 1;
})
two.addEventListener('click', function(){
    display.value += 2;
})
three.addEventListener('click', function(){
    display.value += 3;
})
four.addEventListener('click', function(){
    display.value += 4;
})
five.addEventListener('click', function(){
    display.value += 5;
})
six.addEventListener('click', function(){
    display.value += 6;
})
seven.addEventListener('click', function(){
    display.value += 7;
})
eight.addEventListener('click', function(){
    display.value += 8;
})
nine.addEventListener('click', function(){
    display.value += 9;
})
zero.addEventListener('click', function(){
    display.value += 0;
})

/////////////////////////////////////////

times.addEventListener('click', function(){
    nbre1 = display.value
    display.value = ''
    currentOperator = "times"
})

minus.addEventListener('click', function(){
    nbre1 = display.value
    display.value = ''
    currentOperator = "minus"
})

plus.addEventListener('click', function(){
    nbre1 = display.value
    display.value = ''
    currentOperator = "plus"
})

div.addEventListener('click', function(){
    nbre1 = display.value
    display.value = ''
    currentOperator = "div"
})

/////////////////////////////////////////

doit.addEventListener('click', function(){
    nbre2 = display.value

    if(currentOperator === "times"){
        const timeResult = Number(nbre1) * Number(nbre2)
        display.value  = timeResult
    } 
    else if(currentOperator === "minus"){
        const minusResult = nbre1 - nbre2
        display.value  = minusResult
    } 
    else if(currentOperator === "plus"){
        const plusResult = Number(nbre1) + Number(nbre2)
        display.value  = plusResult
    } 
    else if(currentOperator === "div"){
        const divResult = Number(nbre1) / Number(nbre2)
        display.value  = divResult
    }
})

/////////////////////////////////////////

clear.addEventListener('click', function(){
    display.value = ''
    nbre1 = ''
    nbre2 = ''
})