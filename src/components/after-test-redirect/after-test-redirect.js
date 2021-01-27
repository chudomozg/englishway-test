import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { TIME_BEFORE_REDIRECT, TEXT_BEFORE_REDIRECT } from "../../constants";

import setTimer from "../../actions/set-timer";
import timerTick from "../../actions/timer-tick";
import setTimeLeft from "../../actions/set-time-left";

import RedirectText from "../redirect-text";
import Spinner from "../spinner";
import withServiceConsumer from "../hoc/with-service-consumer";
import fFormWithEwStruct from "../hoc/fform-with-ew-structure";

class AfterTestRedirect extends Component {
  componentDidMount() {
    const { setTimer, timerTick, timerId, setTimeLeft } = this.props;
    if (timerId == null) {
      let timer = setInterval(() => {
        timerTick();
      }, 1000);
      setTimer(timer);
    }
    setTimeLeft(TIME_BEFORE_REDIRECT);
  }

  componentWillUnmount() {
    const { timerId, setTimer } = this.props;
    clearInterval(timerId);
    setTimer(null);
  }

  componentDidUpdate() {
    const { timeLeft, timerId, afterTestCallback } = this.props;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      afterTestCallback();
    }
  }

  render() {
    const { timeLeft, loading } = this.props;
    if (loading) {
      return <Spinner text="Загрузка..." />;
    }
    return <RedirectText timeLeft={timeLeft} text={TEXT_BEFORE_REDIRECT} />;
  }
}

const mapStateToProps = ({ timerId, total: { timeLeft }, loading }) => {
  return { timerId, timeLeft, loading };
};

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    afterTestCallback: () => {
      service.afterTestRedirect();
    },
    setTimer: timer => dispatch(setTimer(timer)),
    timerTick: () => dispatch(timerTick()),
    setTimeLeft: time => dispatch(setTimeLeft(time))
  };
};

export default compose(
  fFormWithEwStruct(),
  withServiceConsumer(),
  connect(mapStateToProps, mapDispatchToProps)
)(AfterTestRedirect);
