import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    let answer;

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    switch (operator) {
      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = a / b;
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  return (
    <div>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;