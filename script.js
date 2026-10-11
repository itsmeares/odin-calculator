// x = first number, y = second number
let x;
let y;
let operator;

function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    if (operator == "+") {
        add(x, y);
    } else if (operator == "-") {
        subtract(x, y);
    } else if (operator == "*") {
        multiply(x, y);
    } else if (operator == "/") {
        divide(x, y);
    } else return console.log("Hmm... I wonder what you are trying to do.");
}