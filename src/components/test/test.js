import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import QuestionList from "../question-list";
import Total from "../total";
import FinishFormContainer from "../../containers/finish-form-container";

const Test = ({ isFinished, isSubmitted }) => {
  if (isFinished) {
    return <FinishFormContainer />;
  }
  if (isSubmitted) {
    return "Спасибо, вам все отправили";
  }
  return (
    <Fragment>
      <Total />
      <QuestionList />
    </Fragment>
  );
};

const mapStateToProps = ({ isFinished, isSubmitted }) => {
  return { isFinished, isSubmitted };
};

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Test);
