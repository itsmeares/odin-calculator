let currentNumber = [];
let previousNumber = [];
let activeEquation = [];
let activeOperator = null;
let result = null;

const calcActive = document.querySelector(".calc__active");
const calcResult = document.querySelector(".calc__result");
const buttons = document.querySelectorAll(".calc__button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const functions = document.querySelectorAll(".function");
const error = document.querySelector(".error");

const updateScreen = () => {
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
  clearVars();
  updateScreen();
  updateResult();
  activeOperator = null;
  result = null;
  error.textContent = "Calculator";
};

const clearVars = () => {
  currentNumber = [];
  previousNumber = [];
  activeEquation = [];
};

const toDecimalPlace = () => {
  if (!currentNumber.includes(".")) {
    currentNumber.push(".");
  } else if (currentNumber.includes(".")) {
    currentNumber.splice(
      currentNumber.findIndex((e) => e === "."),
      1,
    );
  }
};

const updateResult = () => {
  if (activeEquation.length > 1) {
    if (activeEquation[1] === "add") {
      calcResult.textContent = `${activeEquation[0]} + `;
    } else if (activeEquation[1] === "subtract") {
      calcResult.textContent = `${activeEquation[0]} - `;
    } else if (activeEquation[1] === "multiply") {
      calcResult.textContent = `${activeEquation[0]} × `;
    } else if (activeEquation[1] === "divide") {
      calcResult.textContent = `${activeEquation[0]} ÷ `;
    }
  } else {
    calcResult.textContent = "";
  }
};

const finishResult = () => {
  if (activeEquation[1] === "add") {
    calcResult.textContent = `${activeEquation[0]} + ${activeEquation[2]} = ${result}`;
    calcActive.textContent = result;
  } else if (activeEquation[1] === "subtract") {
    calcResult.textContent = `${activeEquation[0]} - ${activeEquation[2]} = ${result}`;
    calcActive.textContent = result;
  } else if (activeEquation[1] === "multiply") {
    calcResult.textContent = `${activeEquation[0]} × ${activeEquation[2]} = ${result}`;
    calcActive.textContent = result;
  } else if (activeEquation[1] === "divide") {
    calcResult.textContent = `${activeEquation[0]} ÷ ${activeEquation[2]} = ${result}`;
    calcActive.textContent = result;
  }
};

const evaluate = () => {
  if (activeEquation[1] === "divide" && activeEquation[2] === 0) {
    currentNumber = [];
    updateScreen();
    activeEquation.pop();
    return (error.textContent = "You can't do that!");
  }
  operate(activeEquation[1], activeEquation[0], activeEquation[2]);
  finishResult();
  clearVars();
};

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
  if (operator === "add") {
    return (result = fixDecimals(add(x, y)));
  } else if (operator === "subtract") {
    return (result = fixDecimals(subtract(x, y)));
  } else if (operator === "multiply") {
    return (result = fixDecimals(multiply(x, y)));
  } else if (operator === "divide") {
    return (result = fixDecimals(divide(x, y)));
  } else return console.log("Something went wrong.");
}

function fixDecimals(num) {
  if (typeof num === "number") {
    const decimalCount = num.toString().split(".");
    if (decimalCount.length > 1 && decimalCount[1].length > 2) {
      return Math.round(num * 100) / 100;
    } else {
      return num;
    }
  } else {
    console.log("You weirdo...");
  }
}

buttons.forEach((button) => {
  const anyOperator =
    button.id === "multiply" ||
    button.id === "divide" ||
    button.id === "add" ||
    button.id === "subtract";

  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      currentNumber.push(+button.textContent);
      updateScreen();
    }

    if (button.classList.contains("operator")) {
      if (anyOperator) {
        if (activeEquation.length < 2) {
          activeOperator = button.id;
          previousNumber = currentNumber;
          currentNumber = [];

          activeEquation = [+previousNumber.join(""), activeOperator];
          updateScreen();
          updateResult();
        } else if (activeEquation.length == 2) {
          if (currentNumber.length === 0) {
            activeOperator = button.id;
            activeEquation[1] = activeOperator;
            updateResult();
          } else if (currentNumber.length > 0) {
            activeEquation.push(+currentNumber.join(""));
            activeOperator = button.id;
            evaluate();
            activeEquation = [+result, activeOperator];
          }
        }
      } else if (button.id === "equal" && activeEquation.length == 2) {
        if (currentNumber.length === 0) {
          return (error.textContent = "Enter an operand.");
        } else if (currentNumber.length > 0) {
          activeEquation.push(+currentNumber.join(""));
          activeOperator = null;
          evaluate();
        }
      } else {
        console.log("Oops, something went wrong.");
      }
    }

    if (button.classList.contains("function")) {
      if (button.id === "allclear") {
        allClear();
      } else if (button.id === "clear") {
        currentNumber = [];
        updateScreen();
      } else if (button.id === "back") {
        currentNumber.pop(0, -1);
        updateScreen();
      } else if (button.id === "negative") {
        changeSymbol();
        updateScreen();
      } else if (button.id === "decimal") {
        toDecimalPlace();
        updateScreen();
      }
    }
  });
});
