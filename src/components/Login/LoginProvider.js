import React, { Component } from "react";
import Axios from "axios";
import { LoginContext } from "./LoginContext";
import { RestUrls } from "../../store/Urls";
import { DataTypes } from "../../store/Types";

class LoginProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      webToken: null
    };
  }

  signin = credentials => {
    return Axios.post(RestUrls[DataTypes.AUTHENTICATION], credentials).then(
      response => {
        if (response.data.success === true) {
          this.setState({
            isAuthenticated: true,
            webToken: {
              "access-token": response.headers["access-token"],
              client: response.headers["client"],
              uid: response.headers["uid"]
            }
          });
          return true;
        }
      }
    );
  };

  signout = () => {
    this.setState({ isAuthenticated: false });
  };

  render = () => (
    <LoginContext.Provider
      value={{ ...this.state, signin: this.signin, signout: this.signout }}
    >
      {this.props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
