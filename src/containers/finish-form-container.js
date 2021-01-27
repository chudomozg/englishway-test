import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import withServiceConsumer from "../components/hoc/with-service-consumer";

import FinishForm from "../components/finish-form";
import changeName from "../actions/change-name";
import changeEmail from "../actions/change-email";
import changePhone from "../actions/change-phone";
import sendMails from "../actions/send-mails";
import withTotalInfo from "../components/hoc/with-total-info";

const FinishFormContainer = props => {
  return <FinishForm {...props} />;
};

const mapStateToProps = ({
  userName,
  userEmail,
  userPhone,
  testResult,
  questions,
  userAnswers
}) => {
  return { userName, userEmail, userPhone, testResult, questions, userAnswers };
};

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    sendMails: testResult => {
      sendMails(service, dispatch, testResult);
    },
    changeName: userName => dispatch(changeName(userName)),
    changeEmail: userEmail => dispatch(changeEmail(userEmail)),
    changePhone: userPhone => dispatch(changePhone(userPhone))
  };
};

export default compose(
  //   questionListlWithEwStruct(),
  withTotalInfo(),
  withServiceConsumer(),
  connect(mapStateToProps, mapDispatchToProps)
)(FinishFormContainer);
