import React, { Component } from "react";

export default class TimeCounter extends Component {
  componentDidMount() {
    const { setTimer, timerTick } = this.props;
    console.log(timerTick);
    let timer = setInterval(() => {
      timerTick();
      console.log("tick");
    }, 1000);
    setTimer(timer);
  }

  componentDidUpdate() {
    const { timeLeft, testFinished } = this.props;
    if (timeLeft <= 0) {
      testFinished();
    }
  }

  render() {
    const { timeLeft } = this.props;
    return (
      <div className="question-counter__timeleft">
        Времени осталось
        <span className="question-counter__timer">{timeLeft}</span>
      </div>
    );
  }
}
