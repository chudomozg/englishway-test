import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const withTotalInfo = () => Wrapped => {
  const wrappedWithProps = props => {
    return <Wrapped {...props} />;
  };
  return connect(mapStateToProps)(wrappedWithProps);
};

const mapStateToProps = ({ userName, userEmail, questions, userAnswers }) => {
  return { totalData: { userName, userEmail, questions, userAnswers } };
};

export default withTotalInfo;
