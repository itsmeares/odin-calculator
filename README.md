# odin-calculator

The last project of foundations course in The Odin Project!

## To-do

7. gotchas: watch out.

- shouldn't evaluate more than single pair. example function:
  - enter number 12
  - enter operator +
  - enter number 7
  - enter second operator (-), at this point it should evaluate the inital pair (12 + 7), then display the result 19.
  - enter number 1
  - enter another operator or execute (=), at this point it should use the previous result (19) as the first num, the operator (-) and the new number (1) to calculate "19 - 1" then show result "18". ex (online calc)[https://www.calculatorsoup.com/calculators/math/basic.php]

- should round answers with long decimals so they don't overflow
- pressing "=" before entering all numbers or an operator could cause problems
- pressing "clear" should wipe out any data
- display a snarky error message if the user tries to divide by 0, don't let it crash your calculator.
- make sure the calculator only works when supplied two numbers and an operator, do not let the user use operator multiple times, it should only take the last operator entered to be used for the next operation.
- when a result is display pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result.

## Done

1. basic stuff

- add
- subtract
- multiply
- divide

2. three variables:
   number, operator, number => e.g. (3 + 5)

3. function operate(operator, x, y) takes an operator and two numbers and calls the basic func (add, subtract etc.)

4. basic html with buttons for each digit, operator and execute (=)

- Don’t worry about making them functional just yet.
- There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
- Add a “clear” button.

5. create the function that updates the number variables when calculator buttons are clicked, display should also update to reflect the variable.

6. store the first and second number input by the user and operate() on them when user presses "=".

- once operate is called update the display with result.
- this is hardest part of this project: figure out how to store all the values and call the operate() with them, don't feel bad if it takes you a while to figure out.

### Extra Credit

- Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
- Add a “backspace” button, so the user can undo their last input if they click the wrong number.
- Add keyboard support!
