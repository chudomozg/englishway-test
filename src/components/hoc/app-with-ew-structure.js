import React from "react";

const applWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div className="container">
        <Wrapped {...props} />
      </div>
    );
  };
};

export default applWithEwStruct;
