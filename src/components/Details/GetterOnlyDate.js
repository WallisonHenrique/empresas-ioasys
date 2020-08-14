import React, { Component } from "react";
import { LoginWrapper } from "../Login/LoginWrapper";
import { DataTypes } from "../../store/Types";
import Loading from "../../utils/Loading";

class GetterOnlyData extends Component {
  getData = () => {
    const storeParams = this.props.enterprise_id || null;
    const rotaParams = this.props.match.params.id || null;

    if (rotaParams) {
      const data = {
        headers: { ...this.props.webToken },
        params: {}
      };

      if (rotaParams !== storeParams) {
        if (!this.props.loading) {
          this.props.setLoading(true);
          this.props.onlyData(DataTypes.ENTERPRISES, data, rotaParams);
        }
      }
    }
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        {this.props.loading && <Loading />}
      </React.Fragment>
    );
  }
}

export default LoginWrapper(GetterOnlyData);
