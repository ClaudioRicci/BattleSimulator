import React from "react";
import "./styles/dice.css";

export const DiceOne: Function = () => {
  return (
    <div className="dice first-face">
      <span className="dot"></span>
    </div>
  );
};

export const DiceTwo: Function = () => {
  return (
    <div className="dice second-face">
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

export const DiceThree: Function = () => {
  return (
    <div className="dice third-face">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

export const DiceFour: Function = () => {
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

export const DiceFive: Function = () => {
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

export const DiceSix: Function = () => {
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
