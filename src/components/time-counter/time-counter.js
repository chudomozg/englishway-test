import React, { Component } from "react";

export default class TimeCounter extends Component {
  componentDidMount() {
    const { setTimer, timerTick, timerId } = this.props;
    if (timerId == null) {
      let timer = setInterval(() => {
        timerTick();
      }, 1000);
      setTimer(timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.props.timerId);
  }

  componentDidUpdate() {
    const {
      timeLeft,
      testFinished,
      timerId,
      isFinished,
      isPaussed,
      setTimer,
      timerTick
    } = this.props;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (!isFinished) {
        testFinished();
      }
    }

    if (isPaussed) {
      clearInterval(timerId);
      setTimer(null);
      console.log("clear");
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
