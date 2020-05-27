import React, { Component } from "react";
import pauseButtonImg from "./pause_button.svg";

const PauseButton = () => {
  return (
    <button className="question-counter__pause-button">
      <img src={pauseButtonImg} />
    </button>
  );
};

export default PauseButton;
