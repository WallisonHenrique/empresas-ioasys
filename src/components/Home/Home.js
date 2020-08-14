import React, { Component } from "react";
import { Container, Nav, Content } from "./styles";
import logoNav from "../../img/logo-nav.png";

class Home extends Component {
  handleButton = () => {
    this.props.history.push("/pesquisa");
  };

  render() {
    return (
      <Container>
        <Nav>
          <img src={logoNav} alt="logo" />
          <button onClick={this.handleButton}>
            <span className="sr-only">Pesquisar</span>
          </button>
        </Nav>
        <Content>
          <p>Clique na busca para iniciar.</p>
        </Content>
      </Container>
    );
  }
}

export default Home;
