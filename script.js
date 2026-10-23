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
};

const clearVars = () => {
  currentNumber = [];
  previousNumber = [];
  activeEquation = [];
  activeOperator = null;
  result = null;
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
    return (result = add(x, y));
  } else if (operator === "subtract") {
    return (result = subtract(x, y));
  } else if (operator === "multiply") {
    return (result = multiply(x, y));
  } else if (operator === "divide") {
    return (result = divide(x, y));
  } else return console.log("Something went wrong.");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      currentNumber.push(+button.textContent);
      updateScreen();
    }

    if (button.classList.contains("operator")) {
      if (
        button.id === "multiply" ||
        button.id === "divide" ||
        button.id === "add" ||
        button.id === "subtract"
      ) {
        if (activeEquation.length < 2) {
          activeOperator = button.id;
          previousNumber = currentNumber;
          currentNumber = [];

          activeEquation = [+previousNumber.join(""), activeOperator];
          updateScreen();
          updateResult();
        } else if (activeEquation.length == 2) {
          activeEquation.push(+currentNumber.join(""));
          evaluate();
        }
      } else if (button.id === "equal") {
        activeEquation.push(+currentNumber.join(""));
        evaluate();
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
