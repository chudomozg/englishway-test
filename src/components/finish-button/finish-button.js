import React, { Component } from "react";

const FinishButton = ({ testFinished }) => {
  return (
    <button className="question-counter__finish-button" onClick={testFinished}>
      Завершить тест
    </button>
  );
};

export default FinishButton;
