import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const withTotalInfo = () => Wrapped => {
  const wrappedWithProps = props => {
    return <Wrapped {...props} />;
  };
  return connect(mapStateToProps)(wrappedWithProps);
};

const mapStateToProps = ({ userName, UserEmail, questions, userAnswers }) => {
  return { totalData: { userName, UserEmail, questions, userAnswers } };
};

export default withTotalInfo;
