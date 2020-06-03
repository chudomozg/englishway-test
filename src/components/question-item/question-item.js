import React, { Component } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "./question-item.css";

const QuestionItem = ({ item, onSelectAnswer, idx, isPaussed }) => {
  const { id, text, answers } = item;

  const answerList = (answers, id) => {
    return answers.map(({ text, isCorrect }, idx) => {
      console.log("isPaussed: ", isPaussed);
      return (
        <div key={id + idx}>
          <input
            disabled={isPaussed}
            type="radio"
            name={id}
            value={"" + id + idx}
            id={"answer_" + id + idx}
            onChange={() => {
              onSelectAnswer(id, idx);
            }}
          />
          <label htmlFor={"answer_" + id + idx}>{text}</label>
        </div>
      );
    });
  };

  return (
    <div className="question-item col-12 col-lg-6">
      <div className="question-item__text">
        <span className="question-item__number">{idx}.</span>
        {ReactHtmlParser(text)}
      </div>
      <div className="question-item__answers">{answerList(answers, id)}</div>
    </div>
  );
};

export default QuestionItem;
