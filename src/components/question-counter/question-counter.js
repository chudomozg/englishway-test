import React, { Component } from "react";
import { AUTOCOMPLETE_TEST } from "../../constants";

export default class QuestionCounter extends Component {
  componentWillUpdate() {
    if (!AUTOCOMPLETE_TEST) return;
    const { finishedCount, totalCount, testFinished, isFinished } = this.props;
    if (finishedCount >= totalCount && !isFinished) {
      testFinished();
    }
  }
  render() {
    const { finishedCount, totalCount } = this.props;
    return (
      <div className="question-counter">
        <div className="question-counter__text">Вопросов отвечено:</div>
        <div className="question-counter__progressbar progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(finishedCount / totalCount) * 100}%` }}
            aria-valuenow={finishedCount}
            aria-valuemin="0"
            aria-valuemax={totalCount}
          ></div>
        </div>
        <div className="question-counter__counter">
          <span className="question-counter__counter-finished">
            {finishedCount}
          </span>
          /<span className="question-counter__counter-total">{totalCount}</span>
        </div>
      </div>
    );
  }
}
