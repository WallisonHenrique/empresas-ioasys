import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginWrapper } from "../components/Login/LoginWrapper";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Connector from "./Connector";

export const Routes = LoginWrapper(
  class Login extends Component {
    render() {
      return (
        <Router>
          <Switch>
            {!this.props.isAuthenticated && <Route component={Login} />}
            <Route path="/home" component={Home} />
            <Route path="/" component={Connector} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      );
    }
  }
);
