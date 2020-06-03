import React from "react";

const questionListlWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div className="content col-12 col-md-8 col-xl-9 pb-lg-3">
        <div className="contetnt-block main-content row">
          <h2 className="main-title">Онлайн тестирование</h2>
          <Wrapped {...props} />
        </div>
      </div>
    );
  };
};

export default questionListlWithEwStruct;
