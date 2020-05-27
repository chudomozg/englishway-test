import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import QuestionCounter from "../question-counter";
import FinishButton from "../finish-button";
import TimeCounter from "../time-counter";
import PauseButton from "../pause-button";

import testFinished from "../../actions/test-finished";
import timerTick from "../../actions/timer-tick";
import setTimer from "../../actions/set-timer";

import totalWithEwStruct from "../hoc/total-with-ew-structure";
import withIndicators from "../hoc/with-indicators";

const Total = ({ total, testFinished }) => {
  const { finishedCount, totalCount, isPaussed, timeLeft } = total;
  return (
    <div className="test-total">
      <QuestionCounter
        finishedCount={finishedCount}
        totalCount={totalCount}
        testFinished={testFinished}
      />
      <FinishButton testFinished={testFinished} />
      <TimeCounter
        timeLeft={timeLeft}
        testFinished={testFinished}
        setTimer={setTimer}
        timerTick={timerTick}
      />
      <PauseButton isPaussed={isPaussed} />
    </div>
  );
};

const mapStateToProps = ({ total, loading, error }) => {
  return { total, loading, error };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     testFinished: () => {
//       dispatch(testFinished());
//     },
//     setTimer: id => {
//       dispatch(setTimer(id));
//     },
//     timerTick: dispatch(timerTick())
//   };
// };

const mapDispatchToProps = {
  testFinished,
  setTimer,
  timerTick
};

export default compose(
  totalWithEwStruct(),
  connect(mapStateToProps, mapDispatchToProps),
  withIndicators()
)(Total);
