import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withIndicators = () => Wrapped => {
  return class extends Component {
    render() {
      const { loading, error, ...props } = this.props;
      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <Wrapped {...props} />;
    }
  };
};

export default withIndicators;
