let nums = [];
let operator;

const calcResult = document.querySelector(".calc__result");
const buttons = document.querySelectorAll(".calc__button"); 

function add(x, y) {
    return (x + y);
}
function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

function operate(operator, x, y) {
    if (operator == "+") {
        calcResult.textContent = add(x, y);
    } else if (operator == "-") {
        calcResult.textContent = subtract(x, y);
    } else if (operator == "x") {
        calcResult.textContent = multiply(x, y);
    } else if (operator == "/") {
        calcResult.textContent = divide(x, y);
    } else return console.log("Something went wrong.");
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "AC") {
            calcResult.textContent = "";
            nums = [];
        } else if (button.textContent >= 0) {
            calcResult.textContent += button.textContent;
        } 
        
                switch (button.textContent) {
                        case "x":
                            operator === undefined ? true : operator.classList.remove("selected");

                            button.classList.toggle("selected");
                            operator = button;
                            break;
        
                        case "/":
                            operator === undefined ? true : operator.classList.remove("selected");

                            button.classList.toggle("selected");
                            operator = button;
                            break;
        
                        case "+":
                            operator === undefined ? true : operator.classList.remove("selected");

                            button.classList.toggle("selected");
                            operator = button;
                            break;
        
                        case "-":
                            operator === undefined ? true : operator.classList.remove("selected");

                            button.classList.toggle("selected");
                            operator = button;
                            break;
                    }
    })
})
