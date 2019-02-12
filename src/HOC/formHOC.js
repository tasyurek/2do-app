import React, { Component } from "react";

const formHOC = WrappedComponent => {
  return class standartFormHOC extends Component {
    render() {
      return <WrappedComponent />;
    }
  };
};

export default formHOC;
