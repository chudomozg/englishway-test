import React from "react";

const questionListlWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div className="col-9">
        <Wrapped {...props} />
      </div>
    );
  };
};

export default questionListlWithEwStruct;
