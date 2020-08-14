import React, { Component } from "react";
import { Company, Resume, Photo } from "./styles";
import { Link } from "react-router-dom";

class ListCompanies extends Component {
  getInitialLetters = str => str.substring(0, 2).toUpperCase();

  render() {
    const enterprises = this.props.enterprises.enterprises || [];

    return enterprises.map(enterprise => (
      <Company key={enterprise.enterprise_name} className="row">
        <div className="col-sm-4">
          <Link to={`/detalhes/${enterprise.id}`}>
            <Photo>{this.getInitialLetters(enterprise.enterprise_name)}</Photo>
          </Link>
        </div>
        <Resume className="col">
          <Link to={`/detalhes/${enterprise.id}`}>
            <h2>{enterprise.enterprise_name}</h2>
            <h3>{enterprise.enterprise_type.enterprise_type_name}</h3>
            <h4>{enterprise.country}</h4>
          </Link>
        </Resume>
      </Company>
    ));
  }
}

export default ListCompanies;
