import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import NotificationWindow from "../notification-window";
import { SMALL_TIME_LEFT_MESSAGE } from "../../constants";
import toggleSmallTimeLeftNotifWind from "../../actions/toggle-small-time-left-notif-wind";

const SmallTimeLeftWindow = ({
  smallTimeLeftNotifWindShow,
  toggleSmallTimeLeftNotifWind
}) => {
  return (
    <NotificationWindow
      show={smallTimeLeftNotifWindShow}
      handleClose={toggleSmallTimeLeftNotifWind}
      message={SMALL_TIME_LEFT_MESSAGE}
    />
  );
};

const mapStateToProps = ({ smallTimeLeftNotifWindShow }) => {
  return { smallTimeLeftNotifWindShow };
};

const mapDispatchToProps = { toggleSmallTimeLeftNotifWind };

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SmallTimeLeftWindow
);
