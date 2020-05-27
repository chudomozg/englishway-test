import React, { Component } from "react";

const QuestionCounter = ({ finishedCount, totalCount }) => {
  return (
    <div className="question-counter">
      <div className="question-counter__text">Вопросов отвечено:</div>
      <div className="question-counter__counter">
        {finishedCount}/{totalCount}
      </div>
    </div>
  );
};

export default QuestionCounter;
