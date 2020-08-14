import React, { Component } from "react";
import { LoginContext } from "./LoginContext";
export const LoginWrapper = WrappedComponent =>
  class extends Component {
    render = () => (
      <LoginContext.Consumer>
        {context => <WrappedComponent {...this.props} {...context} />}
      </LoginContext.Consumer>
    );
  };
