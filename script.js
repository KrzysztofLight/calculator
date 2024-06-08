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

let display = '';


button_1.addEventListener('click', function() {
    display += '1';
    document.getElementById('displayInput').value = display;
})
button_2.addEventListener('click', function() {
    display += '2';
    document.getElementById('displayInput').value = display;
})
button_3.addEventListener('click', function() {
    display += '3';
    document.getElementById('displayInput').value = display;
})
button_4.addEventListener('click', function() {
    display += '4';
    document.getElementById('displayInput').value = display;
})
button_5.addEventListener('click', function() {
    display += '5';
    document.getElementById('displayInput').value = display;
})
button_6.addEventListener('click', function() {
    display += '6';
    document.getElementById('displayInput').value = display;
})
button_7.addEventListener('click', function() {
    display += '7';
    document.getElementById('displayInput').value = display;
})
button_8.addEventListener('click', function() {
    display += '8';
    document.getElementById('displayInput').value = display;
})
button_9.addEventListener('click', function() {
    display += '9';
    document.getElementById('displayInput').value = display;
})
button_0.addEventListener('click', function() {
    display += '0';
    document.getElementById('displayInput').value = display;
})


button_add.addEventListener('click', function() {
    if (checkLastSign()) {
        display += '+';
        display = display.slice(0, -1);
        document.getElementById('displayInput').value = display;
    }
    else{
        display += '+';
        document.getElementById('displayInput').value = display;
    }
})
button_subtract.addEventListener('click', function() {
    if (checkLastSign()) {
        display += '-';
        display = display.slice(0, -1);
        document.getElementById('displayInput').value = display;
    }
    else{
        display += '-';
        document.getElementById('displayInput').value = display;
    }
})
button_multiply.addEventListener('click', function() {
    if (checkLastSign()) {
        display += '*';
        display = display.slice(0, -1);
        document.getElementById('displayInput').value = display;
    }
    else{
        display += '*';
        document.getElementById('displayInput').value = display;
    }
})
button_divide.addEventListener('click', function() {
    if (checkLastSign()) {
        display += '/';
        display = display.slice(0, -1);
        document.getElementById('displayInput').value = display;
    }
    else{
        display += '/';
        document.getElementById('displayInput').value = display;
    }
})

function checkLastSign() {
    let lastSign = display.slice(-1);
    if (lastSign == '+' || lastSign == '-' || lastSign == '*' || lastSign == '/') {
        return true;
    }
    return false;
}


let lastEqualtion = '';

button_equals.addEventListener('click', function() {
    let equationParts = display.split('/');
    if (equationParts.length > 1 && equationParts[1] == '0') {
        alert('Error: Division by zero is not allowed');
        return;
    }
    lastEqualtion = display;
    document.getElementById('displayPrevEval').value = lastEqualtion + '=';
    let result = eval(display);
    display = result.toString();
    document.getElementById('displayInput').value = display;
    console.log(display);
})

button_clear.addEventListener('click', function() {
    display = '';
    document.getElementById('displayInput').value = display;
})
button_backspace.addEventListener('click', function() {
    display = display.slice(0, -1);
    document.getElementById('displayInput').value = display;
})

button_decimal.addEventListener('click', function() {
    display += '.';
    document.getElementById('displayInput').value = display;
})

