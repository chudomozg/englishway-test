import React from "react";

const totalWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div className="sidebar px-0 pl-lg-3 col-12 col-xl-3 col-md-4 order-2 order-xl-1">
        <aside
          id="primary-sidebar"
          className="primary-sidebar widget-area"
          role="complementary"
        >
          <div className="total-widget__wrapper  widget">
            <div className="total-widget textwidget widget-text">
              <Wrapped {...props} />
            </div>
          </div>
        </aside>
      </div>
    );
  };
};

export default totalWithEwStruct;
