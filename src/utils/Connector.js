import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GetterDate from "../components/Search/GetterDate";
import GetterOnlyDate from "../components/Details/GetterOnlyDate";
import Search from "../components/Search/Search";
import Details from "../components/Details/Details";
import { connect } from "react-redux";
import * as ListActions from "../store/ActionCreators";

class Connector extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/pesquisa/:name?"
          render={routeProps => (
            <GetterDate {...this.props} {...routeProps}>
              <Search {...this.props} {...routeProps} />
            </GetterDate>
          )}
        />
        <Route
          path="/detalhes/:id?"
          render={routeProps => (
            <GetterOnlyDate {...this.props} {...routeProps}>
              <Details {...this.props} {...routeProps} />
            </GetterOnlyDate>
          )}
        />
        <Redirect to="/pesquisa" />
      </Switch>
    );
  }
}

const mapStateToProps = dataStore => ({
  ...dataStore
});

const mapDispatchToProps = {
  ...ListActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);
