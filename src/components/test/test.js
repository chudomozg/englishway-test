import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import QuestionList from "../question-list";
import Total from "../total";
import AreYouShureWindow from "../are-you-sure-window";
import FinishFormContainer from "../../containers/finish-form-container";
import SmallTimeLeftWindow from "../small-time-left-window";
import FinishTestMsgWind from "../finish-test-msg-window";
import AfterTestRedirect from "../after-test-redirect";

const Test = ({ isFinished, isSubmitted, langName }) => {
  if (isFinished) {
    if (!isSubmitted) {
      return <FinishFormContainer />;
    } else {
      return <AfterTestRedirect />;
    }
  }

  return (
    <Fragment>
      <Total />
      <QuestionList langName={langName} />
      <AreYouShureWindow />
      <SmallTimeLeftWindow />
      <FinishTestMsgWind />
    </Fragment>
  );
};

const mapStateToProps = ({ isFinished, isSubmitted, langName }) => {
  return { isFinished, isSubmitted, langName };
};

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Test);
