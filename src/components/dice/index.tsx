import React from "react";
import "./styles/dice.css";

export const DiceOne = () => {
  return (
    <div className="dice first-face">
      <span className="dot"></span>
    </div>
  );
};

export const DiceTwo = () => {
  return (
    <div className="dice second-face">
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

export const DiceThree = () => {
  return (
    <div className="dice third-face">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

export const DiceFour = () => {
  return (
    <div className="fourth-face dice">
      <div className="column">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="column">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export const DiceFive = () => {
  return (
    <div className="fifth-face dice">
      <div className="column">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="column">
        <span className="dot"></span>
      </div>

      <div className="column">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export const DiceSix = () => {
  return (
    <div className="sixth-face dice">
      <div className="column">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="column">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};
