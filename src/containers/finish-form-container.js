import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import withServiceConsumer from "../components/hoc/with-service-consumer";

import FinishForm from "../components/finish-form";
import changeName from "../actions/change-name";
import changeEmail from "../actions/change-email";
import sendMails from "../actions/send-mails";
import withTotalInfo from "../components/hoc/with-total-info";

const FinishFormContainer = props => {
  return <FinishForm {...props} />;
};

const mapStateToProps = ({
  UserName,
  UserEmail,
  questions,
  userAnswers,
  userLevels
}) => {
  return { UserName, UserEmail, questions, userAnswers, userLevels };
};

const mapDispatchToProps = (dispatch, { service, totalData }) => {
  return {
    sendMails: sendMails(service, dispatch, totalData),
    changeName: UserName => dispatch(changeName(UserName)),
    changeEmail: UserEmail => dispatch(changeEmail(UserEmail))
  };
};

export default compose(
  //   questionListlWithEwStruct(),
  withTotalInfo(),
  withServiceConsumer(),
  connect(mapStateToProps, mapDispatchToProps)
)(FinishFormContainer);
