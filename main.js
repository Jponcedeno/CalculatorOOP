class Calculator {
  constructor(lastOperandTextElement, recentOperandTextElement) {
    this.lastOperandTextElement = lastOperandTextElement;
    this.recentOperandTextElement = recentOperandTextElement;
    this.clear();
  }
  clear() {
    this.lastOperand = "";
    this.recentOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.recentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.recentOperandTextElement.innerText = this.recentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const lastOperandTextElement = document.querySelector("[data-last-operand]");
const recentOperandTextElement = document.querySelector(
  "[data-recent-operand]"
);

const calculator = new Calculator(
  lastOperandTextElement,
  recentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
