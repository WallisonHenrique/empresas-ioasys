import React, { Component } from "react";
import { Nav, Content, Comeback, Company, Photo } from "./styles";
import { Link } from "react-router-dom";

class Details extends Component {
  getInitialLetters = str => {
    if (str) return str.substring(0, 2).toUpperCase();
  };

  render() {
    const { enterprise_name, description } = this.props.enterprise || {};

    return (
      <div>
        <Nav>
          <Link to={`/pesquisa/${this.props.enterprises_params.name}`}>
            <Comeback />
            <span className="sr-only">Voltar</span>
          </Link>
          <h2>{enterprise_name} </h2>
        </Nav>
        <Content className="container">
          {this.props.enterprise && (
            <Company className="row">
              <div className="col">
                <Photo>{this.getInitialLetters(enterprise_name)}</Photo>
                <p>{description}</p>
              </div>
            </Company>
          )}
        </Content>
      </div>
    );
  }
}

export default Details;
