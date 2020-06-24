import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import QuestionCounter from "../question-counter";
import FinishButton from "../finish-button";
import TimeCounter from "../time-counter";
import PauseButton from "../pause-button";
import TotalFinishText from "../total-finish-text";

import timerTick from "../../actions/timer-tick";
import setTimer from "../../actions/set-timer";
import pauseToggle from "../../actions/pause-toggle";
import toggleSureCloseConfWindow from "../../actions/toggle-sure-close-conf-window";
import toggleSmallTimeLeftNotifWind from "../../actions/toggle-small-time-left-notif-wind";
import toggleFinishTestMsgWind from "../../actions/toggle-finish-test-msg-window";

import totalWithEwStruct from "../hoc/total-with-ew-structure";
import withIndicators from "../hoc/with-indicators";

const Total = ({
  total,
  testFinished,
  timerTick,
  setTimer,
  timerId,
  isFinished,
  pauseToggle,
  toggleSureCloseConfWindow,
  toggleSmallTimeLeftNotifWind,
  toggleFinishTestMsgWind
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
          toggleSmallTimeLeftNotifWind={toggleSmallTimeLeftNotifWind}
          toggleFinishTestMsgWind={toggleFinishTestMsgWind}
        />
        <PauseButton isPaussed={isPaussed} pauseToggle={pauseToggle} />
      </div>
      <TotalFinishText />
      <FinishButton
        testFinished={testFinished}
        onClick={toggleSureCloseConfWindow}
      />
    </div>
  );
};

const mapStateToProps = ({ total, loading, error, timerId, isFinished }) => {
  return { total, loading, error, timerId, isFinished };
};

const mapDispatchToProps = {
  setTimer,
  timerTick,
  pauseToggle,
  toggleSureCloseConfWindow,
  toggleSmallTimeLeftNotifWind,
  toggleFinishTestMsgWind
};

export default compose(
  totalWithEwStruct(),
  connect(mapStateToProps, mapDispatchToProps),
  withIndicators()
)(Total);
