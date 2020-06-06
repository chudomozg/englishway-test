import React, { Component, Fragment } from "react";
import fFormWithEwStruct from "../hoc/fform-with-ew-structure";

const FinishForm = ({
  changeName,
  changeEmail,
  sendMails,
  questions,
  userAnswers,
  userLevels
}) => {
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

  const getUserLevel = (correctAnswersCount, userLevels) => {
    const lev = userLevels.reduce((level, { answCount, name }) => {
      return correctAnswersCount >= Number(answCount) ? name : level;
    }, 0);
    return lev;
  };

  const getTestResult = (questions, userAnswers, userLevels) => {
    const correctAnswersCount = userAnswers.reduce(
      (counter, { questionId, answerIdx }) => {
        const answ = questions.find(question => {
          return question.id == questionId;
        }).correctAnswerIdx;
        if (answ == answerIdx) {
          counter++;
          return counter;
        }
        return;
      },
      0
    );
    const incorrectAnswersCount = questions.length - correctAnswersCount;
    return (
      <Fragment>
        <div>Количество правельных ответов: {correctAnswersCount}</div>
        <div>Количество неправельных ответов: {incorrectAnswersCount}</div>
        <div>
          Ваш уровень знаний:{getUserLevel(correctAnswersCount, userLevels)}
        </div>
      </Fragment>
    );
  };

  return (
    <div className="content col-12 pb-lg-3">
      <div className="contetnt-block main-content row">
        <h2 className="main-title">Онлайн тестирование</h2>
        <form className="finish-test-form col-lg-8" onSubmit={handleSubmit}>
          <h3 className="finish-test-form__subtitle">Тест завершен</h3>
          <div className="finish-test-form__results">
            <h4>Результаты:</h4>
            {getTestResult(questions, userAnswers, userLevels)}
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
