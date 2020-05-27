import React, { Component } from "react";
import "./question-item.css";

const QuestionItem = ({ item, onSelectAnswer }) => {
  const { id, text, answers } = item;

  const answerList = (answers, id) => {
    return answers.map(({ text, isCorrect }, idx) => {
      return (
        <div key={id + idx}>
          <input
            type="radio"
            name={id}
            value={"" + id + idx}
            id={"answer_" + id + idx}
            onClick={() => {
              onSelectAnswer(id, idx);
            }}
          />
          <label htmlFor={"answer_" + id + idx}>{text}</label>
        </div>
      );
    });
  };

  return (
    <div className="question-item">
      <div className="question-item__number"></div>
      <div className="question-item__text">{text}</div>
      <div className="question-item__answers">{answerList(answers, id)}</div>
    </div>
  );
};

export default QuestionItem;
