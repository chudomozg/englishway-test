import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import NotificationWindow from "../notification-window";
import { FINISH_TEST_MESSAGE } from "../../constants";
import testFinished from "../../actions/test-finished";

const FinishTestMsgWind = ({ finishTestMsgWindowShow, testFinished }) => {
  return (
    <NotificationWindow
      show={finishTestMsgWindowShow}
      handleClose={testFinished}
      message={FINISH_TEST_MESSAGE}
    />
  );
};

const mapStateToProps = ({ finishTestMsgWindowShow }) => {
  return { finishTestMsgWindowShow };
};

const mapDispatchToProps = { testFinished };

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FinishTestMsgWind
);
