import React, { Component, Fragment } from "react";
import fFormWithEwStruct from "../hoc/fform-with-ew-structure";

class FinishForm extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleNameBlur(e) {
    this.props.changeName(e.target.value);
  }

  handleEmailBlur(e) {
    this.props.changeEmail(e.target.value);
  }

  handlePhoneBlur(e) {
    this.props.changePhone(e.target.value);
  }

  handleSubmit(e) {
    const {
      testResult,
      userEmail,
      userName,
      userPhone,
      questions,
      userAnswers
    } = this.props;
    e.preventDefault();
    this.props.sendMails({
      ...testResult,
      userEmail,
      userName,
      userPhone,
      questions,
      userAnswers
    });
  }

  render() {
    return (
      <div className="content col-12 pb-lg-3">
        <div className="contetnt-block main-content row">
          <h2 className="main-title">Онлайн тестирование</h2>
          <form
            className="finish-test-form col-lg-8"
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <h3 className="finish-test-form__subtitle">Тест завершен</h3>
            <div className="finish-test-form__text">
              Спасибо за тестирование. Ваши результаты будут высланы на
              электронную почту. Введите имя и электронную почту в форме ниже.
            </div>
            <div className="finish-test-form__input-wrapper">
              <input
                className="finish-test-form__user-name finish-test-form-input"
                type="text"
                placeholder="Имя"
                required
                onBlur={e => {
                  this.handleNameBlur(e);
                }}
              />
              <input
                className="finish-test-form__email finish-test-form-input"
                type="email"
                placeholder="Email"
                onBlur={e => {
                  this.handleEmailBlur(e);
                }}
                required
              />
              <input
                className="finish-test-form__phone finish-test-form-input"
                type="text"
                placeholder="Телефон"
                onBlur={e => {
                  this.handlePhoneBlur(e);
                }}
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
  }
}

// export default fFormWithEwStruct(FinishForm);
export default FinishForm;
