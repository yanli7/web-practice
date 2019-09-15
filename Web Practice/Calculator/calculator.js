let input = document.querySelector("#input");
let number = document.querySelectorAll(".numbers div");
let operator = document.querySelectorAll(".operators div");
let result = document.querySelector("#result");
let clear = document.querySelector("#clear");
let inputDisplay = false;

// making buttons clickable
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {
    let currentInput = input.innerHTML;
    let lastInput = currentInput[currentInput.length - 1];

    if (inputDisplay === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (inputDisplay === true && lastInput === "+") ||
      lastInput === "-" ||
      lastInput === "×" ||
      lastInput === "÷"
    ) {
      //If an operator button is pressed while result is being displayed, then continue for the new operation.
      inputDisplay = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      //If a number is pressed while result is being displayed, then clear the result and start the new operation.
      inputDisplay = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

//Operator buttons
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {
    let currentInput = input.innerHTML;
    let lastInput = currentInput[currentInput.length - 1];

    //If last input is an operator, replace it with the currently pressed one.
    if (
      lastInput === "+" ||
      lastInput === "-" ||
      lastInput === "×" ||
      lastInput === "÷"
    ) {
      let newInput =
        currentInput.substring(0, currentInput.length - 1) + e.target.innerHTML;
      input.innerHTML = newInput;
    } else if (currentInput.length == 0) {
      //If an operator button is pressed first, alert the user.
      alert("enter a number first");
    } else {
      //Add the operator pressed to the input.
      input.innerHTML += e.target.innerHTML;
    }
  });
}

//Equality button
result.addEventListener("click", function() {
  let inputString = input.innerHTML;

  //Making an array of numbers.
  let numbers = inputString.split(/\+|\-|\×|\÷/g);

  //Making an array of operators.
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  //Making each operator button work.
  let divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; //Display the output

  inputDisplay = true;
});

//Clearing the input when 'C' button is pressed.
clear.addEventListener("click", function() {
  input.innerHTML = "";
});
