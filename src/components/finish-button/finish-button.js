import React, { Component } from "react";

const FinishButton = ({ testFinished }) => {
  return (
    <button
      className="question-counter__finish-button button button_red w-75 primary-deep"
      onClick={testFinished}
    >
      Завершить тест
    </button>
  );
};

export default FinishButton;
