import React, { useState } from "react";
import "./Calculator.css";
import { useDocumentTitle } from "../../components/useDocumentTitle";

export const Calculator = () => {
  useDocumentTitle("My Portfolio - Calculator");

  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isEditingDisplay, setIsEditingDisplay] = useState(false);

  const handleNumber = (number) => {
    if (!isEditingDisplay) {
      setDisplay(
        display === "0" || /[a-zA-Z]+$/.test(display)
          ? String(number)
          : display + number
      );
      setEquation(/[a-zA-Z]+$/.test(equation) ? number : equation + number);
    }
  };

  const handleOperator = (operator) => {
    setDisplay("0");
    setEquation(equation + " " + operator + " ");
  };

  const handleEqual = (param) => {
    try {
      let current_equation = equation;
      if (param !== null && typeof param === "string" && param !== "") {
        current_equation = param;
      }

      console.log("handleEqual", current_equation);
      if (current_equation.includes(" = ")) {
        current_equation = current_equation.split(" = ")[1];
      }
      const result = eval(current_equation);
      setDisplay(String(result));
      setEquation(current_equation + " = " + result);
    } catch (error) {
      console.log(error);
      setDisplay("Error");
      setEquation("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setEquation(equation + ".");
    }
  };

  const handleDisplayClick = () => {
    setIsEditingDisplay(true);
  };

  const handleDisplayChange = (event) => {
    console.log("handleDisplayChange", event.target);
    setDisplay(event.target.value);
  };

  const handleDisplayBlur = () => {
    setIsEditingDisplay(false);
    setEquation(display);
  };

  const handleDisplayKeyDown = (event) => {
    console.log("handleDisplayKeyDown", event.key);
    if (event.key === "Enter") {
      setIsEditingDisplay(false);
      setEquation(display);
      handleEqual(display);
    }
  };

  return (
    <div className="calculator-page">
      <h2 className="calculator-heading">Calculator App</h2>
      <div className="calculator-container">
        <div className="calculator">
          <div className="calculator-display">
            <div className="equation">{equation}</div>
            {isEditingDisplay ? (
              <input
                type="text"
                value={display}
                onChange={handleDisplayChange}
                onBlur={handleDisplayBlur}
                onKeyDown={handleDisplayKeyDown}
                className="result editable"
                autoFocus
              />
            ) : (
              <div className="result" onClick={handleDisplayClick}>
                {display}
              </div>
            )}
          </div>
          <div className="calculator-keypad">
            <button onClick={handleClear} className="key function">
              C
            </button>
            <button
              onClick={() => handleOperator("/")}
              className="key operator"
            >
              ÷
            </button>
            <button
              onClick={() => handleOperator("*")}
              className="key operator"
            >
              ×
            </button>
            <button
              onClick={() => handleOperator("-")}
              className="key operator"
            >
              -
            </button>
            <button onClick={() => handleNumber(7)} className="key">
              7
            </button>
            <button onClick={() => handleNumber(8)} className="key">
              8
            </button>
            <button onClick={() => handleNumber(9)} className="key">
              9
            </button>
            <button
              onClick={() => handleOperator("+")}
              className="key operator"
            >
              +
            </button>
            <button onClick={() => handleNumber(4)} className="key">
              4
            </button>
            <button onClick={() => handleNumber(5)} className="key">
              5
            </button>
            <button onClick={() => handleNumber(6)} className="key">
              6
            </button>
            <button onClick={handleEqual} className="key equal">
              =
            </button>
            <button onClick={() => handleNumber(1)} className="key">
              1
            </button>
            <button onClick={() => handleNumber(2)} className="key">
              2
            </button>
            <button onClick={() => handleNumber(3)} className="key">
              3
            </button>
            <button onClick={() => handleNumber(0)} className="key zero">
              0
            </button>
            <button onClick={handleDecimal} className="key">
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
