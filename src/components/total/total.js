import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import QuestionCounter from "../question-counter";
import FinishButton from "../finish-button";
import TimeCounter from "../time-counter";
import PauseButton from "../pause-button";
import TotalFinishText from "../total-finish-text";

import testFinished from "../../actions/test-finished";
import timerTick from "../../actions/timer-tick";
import setTimer from "../../actions/set-timer";
import pauseToggle from "../../actions/pause-toggle";

import totalWithEwStruct from "../hoc/total-with-ew-structure";
import withIndicators from "../hoc/with-indicators";

const Total = ({
  total,
  testFinished,
  timerTick,
  setTimer,
  timerId,
  isFinished,
  pauseToggle
}) => {
  const { finishedCount, totalCount, isPaussed, timeLeft } = total;
  return (
    <div className="test-total">
      <QuestionCounter
        finishedCount={finishedCount}
        totalCount={totalCount}
        testFinished={testFinished}
        isFinished={isFinished}
      />
      <div className="time-counter-wrapper d-flex order-lg-2">
        <TimeCounter
          timeLeft={timeLeft}
          testFinished={testFinished}
          setTimer={setTimer}
          timerTick={timerTick}
          timerId={timerId}
          isFinished={isFinished}
          isPaussed={isPaussed}
        />
        <PauseButton isPaussed={isPaussed} pauseToggle={pauseToggle} />
      </div>
      <TotalFinishText />
      <FinishButton testFinished={testFinished} />
    </div>
  );
};

const mapStateToProps = ({ total, loading, error, timerId, isFinished }) => {
  return { total, loading, error, timerId, isFinished };
};

const mapDispatchToProps = {
  testFinished,
  setTimer,
  timerTick,
  pauseToggle
};

export default compose(
  totalWithEwStruct(),
  connect(mapStateToProps, mapDispatchToProps),
  withIndicators()
)(Total);
