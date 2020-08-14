import React, { Component } from "react";
import { Spinner } from "./styles";

class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <Spinner />
      </React.Fragment>
    );
  }
}

export default Loading;
