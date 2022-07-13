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

  delete() {
    this.recentOperand = this.recentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.recentOperand.includes(".")) return;
    this.recentOperand = this.recentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.recentOperand === "") return;
    if (this.lastOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.lastOperand = this.recentOperand;
    this.recentOperand = "";
  }

  compute() {
    let computed;
    const last = parseFloat(this.lastOperand);
    const recent = parseFloat(this.recentOperand);
    if (isNaN(last) || isNaN(recent)) return;
    switch (this.operation) {
      case "+":
        computed = last + recent;
        break;
      case "-":
        computed = last - recent;
        break;
      case "*":
        computed = last * recent;
        break;
      case "÷":
        computed = last / recent;
        break;
      default:
        return;
    }
    this.recentOperand = computed;
    this.operation = undefined;
    this.lastOperand = "";
  }

  updateDisplay() {
    this.recentOperandTextElement.innerText = this.recentOperand;
    this.lastOperandTextElement.innerText = this.lastOperand;
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

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
