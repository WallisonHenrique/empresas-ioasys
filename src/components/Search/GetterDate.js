import React, { Component } from "react";
import { LoginWrapper } from "../Login/LoginWrapper";
import { DataTypes } from "../../store/Types";
import Loading from "../../utils/Loading";

class GetterData extends Component {
  getData = () => {
    const storeParams = this.props.enterprises_params || {};
    const rotaParams = {
      name: this.props.match.params.name || ""
    };

    if (rotaParams.name) {
      const data = {
        headers: { ...this.props.webToken },
        params: { ...rotaParams }
      };

      if (
        Object.keys(rotaParams).find(
          key => storeParams[key] !== rotaParams[key]
        )
      ) {
        if (!this.props.loading) {
          this.props.setLoading(true);
          this.props.loadData(DataTypes.ENTERPRISES, data);
        }
      }
    }
  };

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

export default LoginWrapper(GetterData);
