import React, { Component } from "react";

const FinishButton = ({ onClick }) => {
  return (
    <button
      className="question-counter__finish-button button button_red w-75 primary-deep"
      onClick={onClick}
    >
      Завершить тест
    </button>
  );
};

export default FinishButton;
