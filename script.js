function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    if (operation == '+') {
        return add(num1, num2);
    }
    else if (operation == '-') {
        return subtract(num1, num2);
    }
    else if (operation == '*') {
        return multiply(num1, num2);
    }
    else if (operation == '/') {
        return divide(num1, num2);
    }
    else {
        return "invalid operation";
    }
}


let value1, value2, operation;
const display = document.querySelector('#display');
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    display.textContent += '0';
    //value1 = display.textContent;
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    display.textContent += '1';
    // value1 = display.textContent;
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    display.textContent += '2';
    // value1 = display.textContent;
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    display.textContent += '3';
    // value1 = display.textContent;
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    display.textContent += '4';
    // value1 = display.textContent;
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    display.textContent += '5';
    // value1 = display.textContent;
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    display.textContent += '6';
    // value1 = display.textContent;
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    display.textContent += '7';
    // value1 = display.textContent;
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    display.textContent += '8';
    // value1 = display.textContent;
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    display.textContent += '9';
    // value1 = display.textContent;
});
const clearBtn = document.querySelector('#c');
clearBtn.addEventListener('click', () => {
    display.textContent = '';
    // value1 = display.textContent;
});


const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
    value1 = parseInt(display.textContent);
    display.textContent = '';
    operation = '+';
});
const subBtn = document.querySelector('#subBtn');
subBtn.addEventListener('click', () => {
    value1 = parseInt(display.textContent);
    display.textContent = '';
    operation = '-';
});
const multBtn = document.querySelector('#multBtn');
multBtn.addEventListener('click', () => {
    value1 = parseInt(display.textContent);
    display.textContent = '';
    operation = '*';
});
const divBtn = document.querySelector('#divBtn');
divBtn.addEventListener('click', () => {
    value1 = parseInt(display.textContent);
    display.textContent = '';
    operation = '/';
});


const equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click', () => {
    value2 = parseInt(display.textContent);
    display.textContent = operate(value1, value2, operation);
});
