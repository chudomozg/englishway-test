import React, { Component } from "react";
import pauseButtonImg from "./pause_button.svg";

const PauseButton = ({ isPaused, pauseToggle }) => {
  return (
    <button className="question-counter__pause-button" onClick={pauseToggle}>
      <img src={pauseButtonImg} />
      {/* <img src={`${window.templateDir.dir}/assets/images/pause_button.svg`} /> */}
    </button>
  );
};

export default PauseButton;
