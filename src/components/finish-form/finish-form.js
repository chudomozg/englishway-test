import React, { Component } from "react";
import fFormWithEwStruct from "../hoc/fform-with-ew-structure";

const FinishForm = ({ changeName, changeEmail, sendMails }) => {
  const handleNameBlur = e => {
    changeName(e.target.value);
  };

  const handleEmailBlur = e => {
    changeEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMails();
  };

  return (
    <div class="content col-12 pb-lg-3">
      <div class="contetnt-block main-content row">
        <h2 class="main-title">Онлайн тестирование</h2>
        <form className="finish-test-form col-lg-8" onSubmit={handleSubmit}>
          <h3 className="finish-test-form__subtitle">Тест завершен</h3>
          <div className="finish-test-form__text">
            Спасибо за тестирование. Ваши результаты будут высланы на
            электронную почту. Введите имя и электронную почту в форме ниже.
          </div>
          <div className="finish-test-form__input-wrapper">
            <input
              className="finish-test-form__user-name"
              type="text"
              placeholder="Имя"
              required
              onBlur={handleNameBlur}
            />
            <input
              className="finish-test-form__email"
              type="email"
              placeholder="Email"
              onBlur={handleEmailBlur}
              required
            />
            <button className="finish-test-form__buttom button button_red primary-deep">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default fFormWithEwStruct(FinishForm);
export default FinishForm;
