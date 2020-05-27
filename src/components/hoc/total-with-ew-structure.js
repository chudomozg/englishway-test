import React from "react";

const totalWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div className="col-3">
        <Wrapped {...props} />
      </div>
    );
  };
};

export default totalWithEwStruct;
