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

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMails();
  }

  getUserLevel(correctAnswersCount, userLevels) {
    const lev = userLevels.reduce((level, { answCount, name }) => {
      return correctAnswersCount >= Number(answCount) ? name : level;
    }, 0);
    return lev;
  }

  getTestResult(questions, userAnswers, userLevels) {
    const correctAnswersCount = userAnswers.reduce(
      (counter, { questionId, answerIdx }) => {
        const answ = questions.find(question => {
          return question.id == questionId;
        }).correctAnswerIdx;
        if (answ == answerIdx) {
          counter++;
        }
        return counter;
      },
      0
    );
    const incorrectAnswersCount = questions.length - correctAnswersCount;
    return (
      <Fragment>
        <div>Количество правельных ответов: {correctAnswersCount}</div>
        <div>Количество неправельных ответов: {incorrectAnswersCount}</div>
        <div>
          Ваш уровень знаний:
          {this.getUserLevel(correctAnswersCount, userLevels)}
        </div>
      </Fragment>
    );
  }

  render() {
    const { questions, userAnswers, userLevels } = this.props;
    return (
      <div className="content col-12 pb-lg-3">
        <div className="contetnt-block main-content row">
          <h2 className="main-title">Онлайн тестирование</h2>
          <form
            className="finish-test-form col-lg-8"
            onSubmit={this.handleSubmit}
          >
            <h3 className="finish-test-form__subtitle">Тест завершен</h3>
            <div className="finish-test-form__results">
              <h4>Результаты:</h4>
              {this.getTestResult(questions, userAnswers, userLevels)}
            </div>
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
                onBlur={this.handleNameBlur}
              />
              <input
                className="finish-test-form__email"
                type="email"
                placeholder="Email"
                onBlur={this.handleEmailBlur}
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
