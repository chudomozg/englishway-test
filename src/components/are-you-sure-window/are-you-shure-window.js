import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ConfirmWindow from "../confirm-window";
import { ARE_YOU_SHURE_MESSAGE } from "../../constants";
import toggleSureCloseConfWindow from "../../actions/toggle-sure-close-conf-window";
import testFinished from "../../actions/test-finished";

const AreYouShureWindow = ({
  sureCloseConfWindShow,
  toggleSureCloseConfWindow,
  testFinished
}) => {
  return (
    <ConfirmWindow
      show={sureCloseConfWindShow}
      handleClose={toggleSureCloseConfWindow}
      message={ARE_YOU_SHURE_MESSAGE}
      onYesButtonClick={testFinished}
    />
  );
};

const mapStateToProps = ({ sureCloseConfWindShow }) => {
  return { sureCloseConfWindShow };
};

const mapDispatchToProps = { toggleSureCloseConfWindow, testFinished };

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  AreYouShureWindow
);
