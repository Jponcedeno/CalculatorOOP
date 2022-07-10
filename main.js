class Calculator {
  constructor(lastOperandTextElement, recentOperandTextElement) {
    this.lastOperandTextElement = lastOperandTextElement;
    this.recentOperandTextElement = recentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber() {}

  chooseOperation() {}

  compute() {}

  updateDisplay() {}
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
  previousOperandTextElement,
  currentOperandTextElement
);
