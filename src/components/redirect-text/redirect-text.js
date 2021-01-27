import React, { Component } from "react";

const _addNumberFormat = number => {
  return new Intl.NumberFormat("ru-RU", {
    minimumIntegerDigits: 2
  }).format(number);
};

const _getTimeLeftString = timeLeft => {
  return _addNumberFormat(Math.floor((timeLeft / 1000) % 60));
};

const RedirectText = ({ text, timeLeft }) => {
  return (
    <div className="timeleft-redirect">
      {text}
      <br />
      Сейчас вы будете перенаправленны на страницу тестирования. Осталось{" "}
      <span className="timeleft-redirect__timer">
        {_getTimeLeftString(timeLeft)} секунд
      </span>
    </div>
  );
};

export default RedirectText;
