import React, { Component } from "react";
// import pauseButtonImg from "./pause_button.svg";
// import playButtonImg from "./play_button.svg";

const PauseButton = ({ isPaussed, pauseToggle }) => {
  console.log("isPaused: ", isPaussed);
  if (isPaussed) {
    return (
      <button className="question-counter__play-button" onClick={pauseToggle}>
        {/* <img src={playButtonImg} /> */}
        <img src={`${window.templateDir.dir}/assets/images/play_button.svg`} />
      </button>
    );
  }
  return (
    <button className="question-counter__pause-button" onClick={pauseToggle}>
      {/* <img src={pauseButtonImg} /> */}
      <img src={`${window.templateDir.dir}/assets/images/pause_button.svg`} />
    </button>
  );
};

export default PauseButton;
