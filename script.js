let currentNumber = [];
let previousNumber = [];

const matchScreen = () => {
  calcActive.textContent = currentNumber.join("");
};

const changeSymbol = () => {
  if (!currentNumber.includes("-")) {
    currentNumber.unshift("-");
  } else if (currentNumber.includes("-")) {
    currentNumber.shift();
  }
};

const allClear = () => {
  currentNumber = [];
  previousNumber = [];
  matchScreen();
};

const toDecimalPlace = () => {
  if (!currentNumber.includes(".")) {
    currentNumber.push(".");
  } else if (currentNumber.includes(".")) {
    currentNumber.pop();
  }
};

const calcActive = document.querySelector(".calc__active");
const buttons = document.querySelectorAll(".calc__button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const functions = document.querySelectorAll(".function");

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
  if (operator === "+") {
    return (calcActive.textContent = add(x, y));
  } else if (operator === "-") {
    return (calcActive.textContent = subtract(x, y));
  } else if (operator === "x") {
    return (calcActive.textContent = multiply(x, y));
  } else if (operator === "/") {
    return (calcActive.textContent = divide(x, y));
  } else return console.log("Something went wrong.");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      currentNumber.push(+button.textContent);
      matchScreen();
    }

    if (button.classList.contains("operator")) {
      if (
        button.id === "multiply" ||
        button.id === "divide" ||
        button.id === "add" ||
        button.id === "subtract"
      ) {
        // todo
      }
    }

    if (button.classList.contains("function")) {
      if (button.id === "allclear") {
        allClear();
      } else if (button.id === "clear") {
        currentNumber = [];
        matchScreen();
      } else if (button.id === "back") {
        currentNumber.pop(0, -1);
        matchScreen();
      } else if (button.id === "negative") {
        changeSymbol();
        matchScreen();
      } else if (button.id === "decimal") {
        toDecimalPlace();
        matchScreen();
      }
    }
  });
});
