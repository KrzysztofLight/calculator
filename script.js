let button_1 = document.getElementById('one');
let button_2 = document.getElementById('two');
let button_3 = document.getElementById('three');
let button_4 = document.getElementById('four');
let button_5 = document.getElementById('five');
let button_6 = document.getElementById('six');
let button_7 = document.getElementById('seven');
let button_8 = document.getElementById('eight');
let button_9 = document.getElementById('nine');
let button_0 = document.getElementById('zero');

let button_equals = document.getElementById('equals');

let button_add = document.getElementById('add');
let button_subtract = document.getElementById('subtract');
let button_multiply = document.getElementById('multiply');
let button_divide = document.getElementById('divide');

let button_decimal = document.getElementById('decimal');

let button_backspace = document.getElementById('backspace');
let button_clear = document.getElementById('clear');

let display = document.getElementById('displayInput');


button_1.addEventListener('click', function() {
    display.innerHTML += '1';
})
button_2.addEventListener('click', function() {
    display.innerHTML += '2';
})
button_3.addEventListener('click', function() {
    display.innerHTML += '3';
})
button_4.addEventListener('click', function() {
    display.innerHTML += '4';
})
button_5.addEventListener('click', function() {
    display.innerHTML += '5';
})
button_6.addEventListener('click', function() {
    display.innerHTML += '6';
})
button_7.addEventListener('click', function() {
    display.innerHTML += '7';
})
button_8.addEventListener('click', function() {
    display.innerHTML += '8';
})
button_9.addEventListener('click', function() {
    display.innerHTML += '9';
})
button_0.addEventListener('click', function() {
    display.innerHTML += '0';
})
console.log(display)