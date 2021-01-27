import React, { Component } from "react";
import { SMALL_TIME_LEFT } from "../../constants";

export default class TimeCounter extends Component {
  componentDidMount() {
    const { setTimer, timerTick, timerId, isPaussed } = this.props;
    if (timerId == null && !isPaussed) {
      let timer = setInterval(() => {
        timerTick();
      }, 1000);
      setTimer(timer);
    }
  }

  componentWillUnmount() {
    const { timerId, setTimer } = this.props;
    clearInterval(timerId);
    setTimer(null);
  }

  componentDidUpdate() {
    const {
      timeLeft,
      timerId,
      isFinished,
      isPaussed,
      setTimer,
      timerTick,
      toggleSmallTimeLeftNotifWind,
      toggleFinishTestMsgWind
    } = this.props;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (!isFinished) {
        toggleFinishTestMsgWind();
      }
    }

    if (timeLeft == SMALL_TIME_LEFT) {
      toggleSmallTimeLeftNotifWind();
    }

    if (isPaussed) {
      clearInterval(timerId);
      setTimer(null);
    } else {
      if (timerId == null) {
        let timer = setInterval(() => {
          timerTick();
        }, 1000);
        setTimer(timer);
      }
    }
  }

  _addNumberFormat(number) {
    return new Intl.NumberFormat("ru-RU", {
      minimumIntegerDigits: 2
    }).format(number);
  }

  _getTimeLeftString(timeLeft) {
    const min = this._addNumberFormat(Math.floor((timeLeft / 60000) % 60));
    const sec = this._addNumberFormat(Math.floor((timeLeft / 1000) % 60));
    const hr = this._addNumberFormat(Math.floor(timeLeft / 3600000));
    if (hr > 0) {
      return `${hr}:${min}:${sec}`;
    }
    return `${min}:${sec}`;
  }

  render() {
    const { timeLeft } = this.props;
    return (
      <div className="question-counter__timeleft">
        Времени осталось
        <span className="question-counter__timer">
          {this._getTimeLeftString(timeLeft)}
        </span>
      </div>
    );
  }
}
