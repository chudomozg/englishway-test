import React from "react";

const fFormWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div class="content col-12 pb-lg-3">
        <div class="contetnt-block main-content row">
          <h2 class="main-title">Онлайн тестирование</h2>
          <Wrapped {...props} />
        </div>
      </div>
    );
  };
};

export default fFormWithEwStruct;
