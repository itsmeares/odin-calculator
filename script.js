let nums = [];
let operator = null;

const calcResult = document.querySelector(".calc__result");
const buttons = document.querySelectorAll(".calc__button");

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
    return (calcResult.textContent = add(x, y));
  } else if (operator === "-") {
    return (calcResult.textContent = subtract(x, y));
  } else if (operator === "x") {
    return (calcResult.textContent = multiply(x, y));
  } else if (operator === "/") {
    return (calcResult.textContent = divide(x, y));
  } else return console.log("Something went wrong.");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      calcResult.textContent = "";
      nums = [];
      operator = null;
    } else if (button.textContent >= 0) {
      calcResult.textContent += button.textContent;
    }

    if (
      (button.textContent === "x" && nums.length < 1) ||
      (button.textContent === "/" && nums.length < 1) ||
      (button.textContent === "+" && nums.length < 1) ||
      (button.textContent === "-" && nums.length < 1)
    ) {
      operator = button.textContent;
      nums.push(+calcResult.textContent);
      calcResult.textContent = "";
    } else if (
      (button.textContent === "x" && nums.length === 1) ||
      (button.textContent === "/" && nums.length === 1) ||
      (button.textContent === "+" && nums.length === 1) ||
      (button.textContent === "-" && nums.length === 1) ||
      (button.textContent === "=" && nums.length === 1)
    ) {
      nums.push(+calcResult.textContent);
      calcResult.textContent = "";
      operate(operator, nums[0], nums[1]);
      nums = [];
      operator = null;
    }
  });
});

// Focus on this as next:
//
// enter second operator (-), at this point it should evaluate the inital pair (12 + 7), then display the result 19.
